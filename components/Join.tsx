import React from 'react';
import { IconBook, IconCheck, IconGlobe, IconUsers } from './Icons';
import { SectionHeading } from './ui';

interface JoinProps {
  setCurrentPage: (page: string) => void;
}

const pathways = [
  {
    icon: IconBook,
    title: 'Innovation Lab',
    text: 'For students and educators driven by excellence. Engage in mentorship programs, secure scholarships, and participate in career counseling workshops designed to build the next generation of leaders.',
    items: ['Research Grants', 'Career Guidance', 'Hackathons'],
  },
  {
    icon: IconUsers,
    title: 'Community Impact',
    text: 'For those with a heart to serve. Join our disaster relief teams, blood donation drives, and community welfare initiatives. Be the hands and feet that uplift the marginalized sections of our society.',
    items: ['Disaster Relief', 'Community Drives', 'Health Camps'],
  },
  {
    icon: IconGlobe,
    title: 'Global Network',
    text: 'For the guardians of our heritage. Participate in literary meets, traditional arts, and cultural symposiums. Help us preserve our language and traditions for future generations.',
    items: ['Tech Summits', 'Networking', 'Publications'],
  },
];

const Join: React.FC<JoinProps> = ({ setCurrentPage }) => {
  return (
    <section className="section border-t border-line bg-surface">
      <div className="container-page">
        <SectionHeading
          title="Pathways to Impact"
          lead="We don't just ask for membership; we ask for your passion. Discover how you can contribute to the renaissance of our community through our three core pillars of engagement."
        />

        <ul className="grid gap-6 lg:grid-cols-3">
          {pathways.map(({ icon: Icon, title, text, items }) => (
            <li key={title} className="card flex flex-col p-6 md:p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-control bg-brand-soft text-brand">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="title-card mt-6 text-2xl">{title}</h3>
              <p className="mt-3 text-ink-muted">{text}</p>
              <ul className="mt-auto space-y-2 pt-6">
                {items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-ink">
                    <IconCheck className="h-4 w-4 shrink-0 text-brand" />
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-xl font-semibold tracking-tight">Ready to make a difference?</p>
          <button type="button" onClick={() => setCurrentPage('contact')} className="btn btn-ink">
            Get Involved Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Join;
