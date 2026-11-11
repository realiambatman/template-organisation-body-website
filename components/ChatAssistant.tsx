import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { IconChat, IconSend, IconX } from './Icons';

// Shown as one-tap questions before the visitor has typed anything.
const suggestions = ['Who leads Sensix?', 'When was Sensix founded?', 'What is the Sensix Academy?'];

const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: 'Greetings. I am the Sensix Assistant. How may I assist you regarding our organization today?',
      timestamp: Date.now()
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ block: 'end' });
  }, [messages, isLoading, isOpen]);

  // Prevent background scrolling when chat is open on mobile
  useEffect(() => {
    if (window.innerWidth < 768 && isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    inputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen]);

  const close = () => {
    setIsOpen(false);
    // Return focus to the launcher once it is back on screen.
    requestAnimationFrame(() => launcherRef.current?.focus());
  };

  const send = async (text: string) => {
    const question = text.trim();
    if (!question || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: question,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      // Loaded on demand so the Gemini SDK stays out of the initial bundle.
      const { sendMessageToAssistant } = await import('../services/geminiService');
      const responseText = await sendMessageToAssistant(userMsg.text);
      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText,
        timestamp: Date.now()
      };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: 'The assistant could not be reached. Check your connection and send the question again.',
        timestamp: Date.now()
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    send(input);
  };

  const showSuggestions = messages.length === 1 && !isLoading;

  return (
    <>
      {/* Launcher */}
      {!isOpen && (
        <button
          ref={launcherRef}
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Open chat assistant"
          className="fixed bottom-5 right-5 z-40 flex h-12 min-w-[48px] items-center justify-center gap-2.5 rounded-full bg-ink px-3.5 text-sm font-semibold text-paper shadow-float ring-1 ring-white/25 transition-colors hover:bg-brand hover:text-brand-contrast sm:pl-4 sm:pr-5 md:bottom-8 md:right-8"
        >
          <IconChat className="h-5 w-5" />
          <span className="hidden sm:inline">Ask Sensix</span>
        </button>
      )}

      {/* Chat window */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="Sensix assistant"
          className="fixed inset-0 z-[100] flex animate-pop flex-col overflow-hidden bg-paper md:inset-auto md:bottom-8 md:right-8 md:h-[min(620px,calc(100vh-4rem))] md:w-[400px] md:rounded-card md:border md:border-line md:shadow-float"
        >
          {/* Header */}
          <div className="flex shrink-0 items-center gap-3 border-b border-line px-4 py-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-control bg-brand text-brand-contrast">
              <IconChat className="h-5 w-5" />
            </span>
            <div className="min-w-0 flex-1">
              <h2 className="font-display text-base font-semibold leading-tight">Sensix Assistant</h2>
              <p className="truncate text-xs text-ink-subtle">Answers questions about Sensix</p>
            </div>
            <button
              type="button"
              onClick={close}
              className="flex h-10 w-10 items-center justify-center rounded-control text-ink-muted transition-colors hover:bg-surface hover:text-ink"
              aria-label="Close chat"
            >
              <IconX className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 space-y-3 overflow-y-auto bg-surface px-4 py-5" aria-live="polite">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] whitespace-pre-wrap break-words px-4 py-2.5 text-[0.9375rem] leading-relaxed ${
                    msg.role === 'user'
                      ? 'rounded-[18px] rounded-br-[4px] bg-brand text-brand-contrast'
                      : 'rounded-[18px] rounded-bl-[4px] border border-line bg-paper text-ink'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start" role="status" aria-label="Assistant is typing">
                <div className="flex gap-1.5 rounded-[18px] rounded-bl-[4px] border border-line bg-paper px-4 py-4">
                  {[0, 1, 2].map((dot) => (
                    <span
                      key={dot}
                      className="h-1.5 w-1.5 animate-blink rounded-full bg-ink-muted"
                      style={{ animationDelay: `${dot * 160}ms` }}
                    />
                  ))}
                </div>
              </div>
            )}

            {showSuggestions && (
              <div className="flex flex-wrap gap-2 pt-2">
                {suggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => send(suggestion)}
                    className="min-h-[36px] rounded-full border border-brand/40 bg-paper px-3.5 text-sm font-medium text-brand transition-colors hover:border-brand hover:bg-brand-soft"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="shrink-0 border-t border-line bg-paper p-3">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question..."
                aria-label="Your question"
                className="field flex-1"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                aria-label="Send"
                className="btn btn-primary w-11 shrink-0 px-0"
              >
                <IconSend className="h-5 w-5" />
              </button>
            </div>
            <p className="mt-2 text-center text-xs text-ink-subtle">Powered by Gemini. Replies may contain mistakes.</p>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatAssistant;
