import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="w-full px-4 md:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-24">
          <div className="border-t border-black pt-8">
            <h2 className="text-xs font-bold text-brand-pink tracking-[0.2em] uppercase mb-6">Our Core Values</h2>
            <h3 className="text-5xl md:text-6xl font-serif font-medium text-brand-navy leading-[1.1] tracking-tight">
              More than a community, a <span className="italic text-brand-blue border-b-4 border-brand-blue/20">movement</span> for innovation.
            </h3>
          </div>
          <div className="flex items-end lg:pb-4">
             <p className="text-brand-slate text-xl leading-relaxed font-light max-w-2xl">
               Founded on the principles of collaboration and unity, Sensix champions the intellectual and social advancement of our people. We believe innovation is the cornerstone of progress.
             </p>
          </div>
        </div>

        <div className="border-t border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            
            {/* Column 1 - Innovate (Blue) */}
            <div className="group pt-12 md:pr-12 md:pt-16 pb-12 transition-colors hover:bg-slate-50 px-4 md:px-8">
              <div className="mb-8">
                 <p className="text-xs font-bold text-brand-blue uppercase tracking-widest mb-3">Innovate</p>
                 <h4 className="text-3xl font-bold text-brand-navy">Academic Excellence</h4>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                Providing scholarships, career guidance, and competitive platforms to ensure every student reaches their intellectual potential. We strive to cultivate minds that are curious, capable, and creative.
              </p>
            </div>

            {/* Column 2 - Connect (Green) */}
            <div className="group pt-12 md:px-12 md:pt-16 pb-12 transition-colors hover:bg-slate-50 px-4">
              <div className="mb-8">
                 <p className="text-xs font-bold text-brand-green uppercase tracking-widest mb-3">Connect</p>
                 <h4 className="text-3xl font-bold text-brand-navy">Social Impact</h4>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                Volunteering is at our core. From community drives to disaster relief, we stand ready to serve the community in times of need. Connection is the bridge to a better future.
              </p>
            </div>

            {/* Column 3 - Grow (Pink) */}
            <div className="group pt-12 md:pl-12 md:pt-16 pb-12 transition-colors hover:bg-slate-50 px-4 md:px-8">
              <div className="mb-8">
                 <p className="text-xs font-bold text-brand-pink uppercase tracking-widest mb-3">Grow</p>
                 <h4 className="text-3xl font-bold text-brand-navy">Global Identity</h4>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                Preserving our unique heritage while embracing the future. Through literature, arts, and cultural symposiums, we ensure our roots remain strong as we grow.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;