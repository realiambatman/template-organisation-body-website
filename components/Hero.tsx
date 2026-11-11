import React from 'react';
import { events } from './Events';
import { IconArrowRight } from './Icons';

interface HeroProps {
  setCurrentPage: (page: string) => void;
}

// The motto, one word per line. The hero is built from type alone, so it
// works before any photography exists.
const motto = ['Innovate.', 'Connect.', 'Grow.'];

const Hero: React.FC<HeroProps> = ({ setCurrentPage }) => {

  const scrollToEvents = () => {
    document.getElementById('events')?.scrollIntoView();
  };

  return (
    <section id="home" className="border-b border-line">
      <div className="container-page grid gap-10 pb-12 pt-10 md:pb-20 md:pt-16 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-14">

        {/* Motto and introduction */}
        <div className="flex flex-col">
          <p className="font-medium text-ink-muted">Est. 2010</p>

          <h1 className="mt-4 font-display font-extrabold leading-[0.88] tracking-[-0.05em] text-ink text-[clamp(3.6rem,21vw,7.5rem)] lg:text-[clamp(5.25rem,11.5vw,10rem)]">
            {motto.map((word, index) => (
              <span
                key={word}
                className="block animate-rise"
                style={{ animationDelay: `${index * 110}ms` }}
              >
                {word}
              </span>
            ))}
          </h1>

          <p className="lead mt-8 lg:mt-auto lg:pt-10">
            <strong className="font-semibold text-ink">Create, Collaborate, Scale.</strong> The vanguard of technological upliftment and cultural preservation for the global community.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button type="button" onClick={() => setCurrentPage('about-us')} className="btn btn-primary">
              Our Mission
            </button>
            <button type="button" onClick={scrollToEvents} className="btn btn-outline">
              View Agenda
            </button>
          </div>
        </div>

        {/* Brand panel: what is coming up */}
        <aside
          aria-label="Coming up"
          className="on-dark flex animate-rise flex-col rounded-card bg-brand p-6 text-brand-contrast sm:p-8"
          style={{ animationDelay: '380ms' }}
        >
          <h2 className="font-sans text-sm font-semibold text-brand-contrast">Coming up</h2>

          <ul className="mt-4 divide-y divide-brand-contrast/25 border-y border-brand-contrast/25">
            {events.map((event) => (
              <li key={event.title}>
                <button
                  type="button"
                  onClick={scrollToEvents}
                  className="group flex w-full items-center gap-4 py-4 text-left"
                >
                  <span className="w-14 shrink-0">
                    <span className="block font-display text-3xl font-bold leading-none tracking-tight">{event.day}</span>
                    <span className="text-sm opacity-80">{event.shortMonth}</span>
                  </span>
                  <span className="flex-1 font-display text-lg font-semibold leading-snug">{event.title}</span>
                  <IconArrowRight className="h-5 w-5 shrink-0 opacity-60 transition-transform duration-150 group-hover:translate-x-1 group-hover:opacity-100" />
                </button>
              </li>
            ))}
          </ul>

          <blockquote className="mt-10 font-display text-2xl font-medium leading-snug tracking-tight lg:mt-auto lg:pt-10">
            “Innovation for Impact is not just a motto, it is our way of life.”
          </blockquote>
        </aside>

      </div>
    </section>
  );
};

export default Hero;
