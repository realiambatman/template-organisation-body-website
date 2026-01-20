import React from 'react';

const Events: React.FC = () => {
  return (
    <section id="events" className="py-24 bg-slate-50 min-h-screen">
        <div className="w-full px-4 md:px-8 pt-12">
            <div className="flex flex-col md:flex-row justify-between md:items-end mb-20">
                <div className="max-w-2xl">
                    <span className="text-brand-pink text-xs font-bold tracking-[0.2em] uppercase block mb-4">Calendar</span>
                    <h2 className="text-5xl md:text-6xl font-serif text-brand-navy leading-none mb-6">Upcoming<br/>Agenda</h2>
                    <p className="text-slate-500 font-light text-lg">Key dates for summits, hackathons, and global meetups.</p>
                </div>
                <div className="mt-8 md:mt-0">
                    <button className="text-xs font-bold uppercase tracking-widest border-b border-brand-navy pb-1 text-brand-navy hover:text-brand-blue hover:border-brand-blue transition-colors">Download Annual Calendar PDF</button>
                </div>
            </div>
            
            <div className="border-t border-slate-200">
                {/* Event 1 */}
                <div className="group bg-white py-12 px-4 md:px-8 border-b border-slate-200 transition-all duration-300 hover:bg-slate-50 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                        <div className="md:col-span-2 flex flex-col">
                            <span className="text-6xl font-serif font-medium text-slate-300 group-hover:text-brand-blue transition-colors">15</span>
                            <span className="text-xs uppercase font-bold tracking-widest text-slate-400">August, 2024</span>
                        </div>
                        <div className="md:col-span-7">
                            <h3 className="text-3xl font-serif font-bold text-brand-navy mb-3 group-hover:text-brand-blue transition-colors">Sensix Global Summit</h3>
                            <p className="text-brand-slate text-sm max-w-3xl">A strategic gathering of all chapters to discuss the roadmap, pass resolutions, and elect new leaders for the upcoming term.</p>
                        </div>
                        <div className="md:col-span-3 flex md:justify-end">
                            <button className="px-8 py-3 bg-white border border-slate-200 text-xs font-bold uppercase tracking-widest text-brand-navy group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue transition-all">Register Now</button>
                        </div>
                </div>

                {/* Event 2 */}
                <div className="group bg-white py-12 px-4 md:px-8 border-b border-slate-200 transition-all duration-300 hover:bg-slate-50 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                        <div className="md:col-span-2 flex flex-col">
                            <span className="text-6xl font-serif font-medium text-slate-300 group-hover:text-brand-green transition-colors">05</span>
                            <span className="text-xs uppercase font-bold tracking-widest text-slate-400">September, 2024</span>
                        </div>
                        <div className="md:col-span-7">
                            <h3 className="text-3xl font-serif font-bold text-brand-navy mb-3 group-hover:text-brand-green transition-colors">Innovators' Gala</h3>
                            <p className="text-brand-slate text-sm max-w-3xl">Honoring the mentors who shape our future with a formal gala and awards ceremony for distinguished educators and tech leaders.</p>
                        </div>
                        <div className="md:col-span-3 flex md:justify-end">
                            <button className="px-8 py-3 bg-white border border-slate-200 text-xs font-bold uppercase tracking-widest text-brand-navy group-hover:bg-brand-green group-hover:text-white group-hover:border-brand-green transition-all">View Details</button>
                        </div>
                </div>

                {/* Event 3 */}
                <div className="group bg-white py-12 px-4 md:px-8 border-b border-slate-200 transition-all duration-300 hover:bg-slate-50 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                        <div className="md:col-span-2 flex flex-col">
                            <span className="text-6xl font-serif font-medium text-slate-300 group-hover:text-brand-pink transition-colors">10</span>
                            <span className="text-xs uppercase font-bold tracking-widest text-slate-400">October, 2024</span>
                        </div>
                        <div className="md:col-span-7">
                            <h3 className="text-3xl font-serif font-bold text-brand-navy mb-3 group-hover:text-brand-pink transition-colors">Global Tech Fair</h3>
                            <p className="text-brand-slate text-sm max-w-3xl">A celebration of our innovations with project showcases, hackathons, and a tech symposium. Bring your best ideas.</p>
                        </div>
                        <div className="md:col-span-3 flex md:justify-end">
                            <button className="px-8 py-3 bg-white border border-slate-200 text-xs font-bold uppercase tracking-widest text-brand-navy group-hover:bg-brand-pink group-hover:text-white group-hover:border-brand-pink transition-all">View Details</button>
                        </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Events;