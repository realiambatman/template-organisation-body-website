import React from 'react';
import { Executive } from '../types';
import { Portrait, SectionHeading } from './ui';

// Add `image: '/images/president.jpg'` (a file in public/) to show a photo.
// Without it the card shows an initials placeholder.
const executives: Executive[] = [
  {
    name: 'Michael Scott',
    role: 'General President',
    quote: 'Leadership is not position, it is action.'
  },
  {
    name: 'Sarah Johnson',
    role: 'Vice President (Admin)',
    quote: 'Unity is the architecture of our strength.'
  },
  {
    name: 'Executive Committee',
    role: 'General Headquarters',
    quote: 'Serving with integrity and dedication.'
  }
];

interface LeadershipProps {
  setCurrentPage: (page: string) => void;
}

const Leadership: React.FC<LeadershipProps> = ({ setCurrentPage }) => {
  return (
    <section id="leadership" className="section border-y border-line bg-surface">
      <div className="container-page">
        <SectionHeading
          title="Executive Committee"
          lead="The elected officers who run the organisation between general assemblies."
          action={
            <button type="button" onClick={() => setCurrentPage('about-us')} className="btn btn-outline">
              See All Members
            </button>
          }
        />

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {executives.map((exec) => (
            <li key={exec.name} className="card overflow-hidden">
              <Portrait name={exec.name} src={exec.image} className="aspect-[4/3] w-full" />
              <div className="p-6">
                <h3 className="title-card">{exec.name}</h3>
                <p className="mt-1 text-sm font-semibold text-brand">{exec.role}</p>
                {exec.quote && <p className="mt-4 border-t border-line pt-4 italic text-ink-muted">“{exec.quote}”</p>}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Leadership;
