import React from 'react';
import { Executive } from '../types';

const executives: Executive[] = [
  {
    name: 'Michael Scott',
    role: 'General President',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop',
    quote: 'Leadership is not position, it is action.'
  },
  {
    name: 'Sarah Johnson',
    role: 'Vice President (Admin)',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
    quote: 'Unity is the architecture of our strength.'
  },
  {
    name: 'Executive Committee',
    role: 'General Headquarters',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop',
    quote: 'Serving with integrity and dedication.'
  }
];

interface LeadershipProps {
  setCurrentPage: (page: string) => void;
}

const Leadership: React.FC<LeadershipProps> = ({ setCurrentPage }) => {
  return (
    <section id="leadership" className="py-24 bg-brand-light border-y border-slate-200">
      <div className="w-full px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-slate-200 pb-8">
          <div>
            <span className="text-brand-blue text-xs font-bold tracking-[0.2em] uppercase block mb-3">Governance</span>
            <h3 className="text-5xl font-serif text-brand-navy tracking-tight">Executive Committee</h3>
          </div>
          <div className="mt-8 md:mt-0">
             <button
               type="button"
               onClick={() => {
                 setCurrentPage('about-us');
                 window.scrollTo({ top: 0, behavior: 'smooth' });
               }} className="inline-block px-8 py-3 border border-brand-navy text-xs font-bold uppercase tracking-widest text-brand-navy hover:bg-brand-navy hover:text-white transition-colors">
               See All Members
             </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {executives.map((exec, idx) => (
            <div key={idx} className="flex flex-col group relative">
              <div className="aspect-[4/5] overflow-hidden bg-slate-200 mb-6 grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out">
                <img 
                  src={exec.image} 
                  alt={exec.name} 
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="border-l-2 border-slate-200 pl-4 transition-all group-hover:border-brand-navy">
                <h4 className="text-3xl font-serif text-brand-navy mb-1">{exec.name}</h4>
                <p className={`text-xs font-bold uppercase tracking-widest mb-3 ${
                     idx === 0 ? 'text-brand-blue' : idx === 1 ? 'text-brand-green' : 'text-brand-pink'
                }`}>{exec.role}</p>
                <p className="text-brand-slate text-sm font-light italic">
                  "{exec.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;