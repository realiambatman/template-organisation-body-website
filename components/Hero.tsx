import React from 'react';

interface HeroProps {
  setCurrentPage: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ setCurrentPage }) => {
  
  const scrollToEvents = () => {
    const eventsSection = document.getElementById('events');
    if (eventsSection) {
      eventsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50">
      
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-brand-blue/5 rounded-full blur-[100px] animate-blob"></div>
        <div className="absolute bottom-[10%] left-[-5%] w-[35%] h-[35%] bg-brand-green/5 rounded-full blur-[100px] animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="relative z-10 w-full px-4 md:px-8 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 h-full">
        
        {/* Text Content */}
        <div className="w-full lg:w-[45%] pt-12 lg:pt-0">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex gap-1.5 opacity-80">
                <div className="w-8 h-1 bg-brand-blue"></div>
                <div className="w-8 h-1 bg-brand-green"></div>
                <div className="w-8 h-1 bg-brand-pink"></div>
            </div>
            <span className="text-brand-slate text-xs font-bold tracking-[0.25em] uppercase">
              Est. 2010
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-slate-300 leading-[0.9] tracking-tighter mb-10">
            <span className="text-brand-blue font-bold">Innovate.</span><br/>
            <span className="text-brand-green font-bold">Connect.</span><br/>
            <span className="text-brand-pink font-bold">Grow.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed mb-12 max-w-lg border-l-2 border-brand-navy pl-6">
            <span className="font-semibold text-brand-navy">Create, Collaborate, Scale.</span> The vanguard of technological upliftment and cultural preservation for the global community.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => setCurrentPage('about-us')}
              className="group relative px-10 py-4 bg-brand-navy text-white font-bold tracking-widest text-xs uppercase transition-all hover:bg-brand-blue hover:pr-12 text-left"
            >
              <span className="relative z-10 flex items-center gap-2">
                Our Mission
              </span>
              <span className="absolute right-6 opacity-0 group-hover:opacity-100 group-hover:right-4 transition-all duration-300">→</span>
            </button>
             <button 
               onClick={scrollToEvents}
               className="px-10 py-4 border border-slate-300 text-brand-navy font-bold tracking-widest hover:border-brand-navy hover:bg-slate-50 transition-all text-xs uppercase text-center flex items-center justify-center"
             >
              View Agenda
            </button>
          </div>
        </div>

        {/* Image Side */}
        <div className="w-full lg:w-[55%] h-[60vh] lg:h-[85vh] relative flex items-end justify-end">
            <div className="relative w-full h-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop" 
                  alt="Students Gathering" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[2s] ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-slate-50 lg:w-1/4"></div>
                <div className="absolute bottom-0 right-0 p-8 md:p-12 bg-white/90 backdrop-blur-sm border-t border-l border-slate-200 max-w-md">
                    <p className="text-brand-navy font-serif text-2xl italic leading-tight mb-4">"Innovation for Impact is not just a motto, it is our way of life."</p>
                    <div className="h-0.5 w-12 bg-gradient-to-r from-brand-blue via-brand-green to-brand-pink"></div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;