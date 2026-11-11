import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { IconX } from './Icons';

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

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  // Prevent background scrolling when chat is open on mobile
  useEffect(() => {
    if (window.innerWidth < 768 && isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
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
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Text Pill Trigger */}
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Open chat assistant"
        className={`fixed bottom-5 right-5 md:bottom-8 md:right-8 z-40 bg-brand-blue text-white px-5 py-3 md:px-6 md:py-3 shadow-xl hover:bg-brand-navy transition-all duration-300 ${isOpen ? 'hidden' : 'flex'} items-center gap-3 rounded-full md:rounded-sm group`}
      >
        <span className="text-xs font-bold uppercase tracking-widest group-hover:tracking-[0.2em] transition-all">Assistant</span>
        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed inset-0 md:inset-auto md:bottom-8 md:right-8 w-full h-full md:w-[380px] md:h-[600px] bg-white md:border border-slate-200 shadow-2xl z-[100] flex flex-col animate-in slide-in-from-bottom-5 fade-in duration-300 md:rounded-lg overflow-hidden font-sans">
          
          {/* Header */}
          <div className="bg-brand-blue p-4 md:p-5 flex items-center justify-between shrink-0 shadow-md z-10">
            <div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">Sensix AI</h3>
              </div>
              <p className="text-[10px] text-slate-300 mt-1">Powered by Gemini • Official Assistant</p>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white hover:bg-white/10 p-2 rounded-full transition-colors"
              aria-label="Close Chat"
            >
              <IconX className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 md:p-5 space-y-6 bg-slate-50 scroll-smooth">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 text-sm leading-relaxed shadow-sm rounded-lg ${
                  msg.role === 'user' 
                    ? 'bg-white border border-slate-200 text-brand-navy rounded-br-none' 
                    : 'bg-brand-blue text-white rounded-bl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-brand-blue px-4 py-3 rounded-lg rounded-bl-none">
                  <div className="flex space-x-1.5">
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-1.5 h-1.5 bg-white/80 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-1.5 h-1.5 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="p-4 bg-white border-t border-slate-100 flex gap-4 shrink-0">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              aria-label="Your question"
              className="flex-1 bg-slate-50 text-brand-navy placeholder-slate-400 px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-brand-blue transition-all rounded-sm border-transparent"
            />
            <button 
              type="submit"
              disabled={isLoading || !input.trim()}
              className="bg-brand-blue text-white px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-brand-navy disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatAssistant;