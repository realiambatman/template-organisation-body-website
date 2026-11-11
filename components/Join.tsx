import React from 'react';
import { IconBook, IconGlobe, IconUsers } from './Icons';

interface JoinProps {
  setCurrentPage: (page: string) => void;
}

const Join: React.FC<JoinProps> = ({ setCurrentPage }) => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Abstract bg decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 transform -skew-x-12 z-0 opacity-50 pointer-events-none"></div>

      <div className="w-full px-4 md:px-8 relative z-10">
        <div className="mb-20 max-w-3xl">
            <span className="text-brand-pink text-xs font-bold tracking-[0.2em] uppercase block mb-4">Engagement</span>
            <h2 className="text-5xl md:text-7xl font-serif text-brand-navy mb-8">Pathways to Impact</h2>
            <p className="text-brand-slate leading-relaxed text-xl font-light">
                We don't just ask for membership; we ask for your passion. 
                Discover how you can contribute to the renaissance of our community through our three core pillars of engagement.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-slate-200">
            
            {/* Column 1: Intellectual */}
            <div className="group bg-white p-12 lg:p-16 border-b md:border-b-0 md:border-r border-slate-200 hover:bg-brand-blue/5 transition-colors relative overflow-hidden">
                <div className="w-14 h-14 bg-brand-blue text-white flex items-center justify-center rounded-sm mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500">
                   <IconBook className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-brand-navy mb-4">Innovation Lab</h3>
                <p className="text-slate-500 leading-relaxed mb-8">
                    For students and educators driven by excellence. Engage in mentorship programs, secure scholarships, and participate in career counseling workshops designed to build the next generation of leaders.
                </p>
                <div className="flex flex-col gap-3">
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-blue flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-brand-blue rounded-full"></span> Research Grants
                    </span>
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-blue flex items-center gap-2">
                         <span className="w-1.5 h-1.5 bg-brand-blue rounded-full"></span> Career Guidance
                    </span>
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-blue flex items-center gap-2">
                         <span className="w-1.5 h-1.5 bg-brand-blue rounded-full"></span> Hackathons
                    </span>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-brand-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>

            {/* Column 2: Social */}
            <div className="group bg-white p-12 lg:p-16 border-b md:border-b-0 md:border-r border-slate-200 hover:bg-brand-green/5 transition-colors relative overflow-hidden">
                <div className="w-14 h-14 bg-brand-green text-white flex items-center justify-center rounded-sm mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500">
                   <IconUsers className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-brand-navy mb-4">Community Impact</h3>
                <p className="text-slate-500 leading-relaxed mb-8">
                    For those with a heart to serve. Join our disaster relief teams, blood donation drives, and community welfare initiatives. Be the hands and feet that uplift the marginalized sections of our society.
                </p>
                <div className="flex flex-col gap-3">
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-green flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-brand-green rounded-full"></span> Disaster Relief
                    </span>
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-green flex items-center gap-2">
                         <span className="w-1.5 h-1.5 bg-brand-green rounded-full"></span> Community Drives
                    </span>
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-green flex items-center gap-2">
                         <span className="w-1.5 h-1.5 bg-brand-green rounded-full"></span> Health Camps
                    </span>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-brand-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>

            {/* Column 3: Cultural */}
            <div className="group bg-white p-12 lg:p-16 hover:bg-brand-pink/5 transition-colors relative overflow-hidden">
                <div className="w-14 h-14 bg-brand-pink text-white flex items-center justify-center rounded-sm mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500">
                   <IconGlobe className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-brand-navy mb-4">Global Network</h3>
                <p className="text-slate-500 leading-relaxed mb-8">
                    For the guardians of our heritage. Participate in literary meets, traditional arts, and cultural symposiums. Help us preserve our language and traditions for future generations.
                </p>
                <div className="flex flex-col gap-3">
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-pink flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-brand-pink rounded-full"></span> Tech Summits
                    </span>
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-pink flex items-center gap-2">
                         <span className="w-1.5 h-1.5 bg-brand-pink rounded-full"></span> Networking
                    </span>
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-pink flex items-center gap-2">
                         <span className="w-1.5 h-1.5 bg-brand-pink rounded-full"></span> Publications
                    </span>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-brand-pink transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>

        </div>

        <div className="mt-16 text-center">
            <p className="text-slate-400 font-serif italic text-lg mb-8">Ready to make a difference?</p>
            <button
              type="button"
              onClick={() => {
                setCurrentPage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }} className="inline-block px-12 py-4 bg-brand-navy text-white font-bold uppercase tracking-widest text-xs hover:bg-brand-blue transition-colors rounded-sm shadow-xl">
                Get Involved Today
            </button>
        </div>
      </div>
    </section>
  );
};

export default Join;