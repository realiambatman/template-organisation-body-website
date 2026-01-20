
import React, { useState, useEffect } from 'react';
import { IconSparkles, IconDocument, IconArrowRight, IconShieldCheck, IconUsers, IconBook, IconSchool, IconAward, IconTarget, IconLightBulb, IconX } from './Icons';

// Helper for Content sections
const Section: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <div className={`w-full px-4 md:px-8 py-20 ${className}`}>
    {children}
  </div>
);

export const AboutUsPage: React.FC = () => (
    <div className="bg-white pt-32">
        {/* Introduction Section */}
        <Section>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
                <div className="lg:col-span-8 space-y-8">
                    <span className="text-brand-blue font-bold tracking-[0.2em] uppercase text-xs">Who We Are</span>
                    <h2 className="text-3xl md:text-4xl font-serif font-medium text-brand-navy leading-tight">
                        Sensix is a global innovation community dedicated to fostering technology, creativity, and sustainable growth for future generations.
                    </h2>
                    <div className="prose prose-lg text-slate-500 font-light leading-relaxed max-w-none">
                        <p>
                            <strong className="text-brand-navy font-medium">Sensix</strong> was founded on the principle of collaborative growth and formed upon the motto of <em className="italic">"Innovate, Connect, Grow"</em>. 
                        </p>
                        <p>
                             It endeavors to cater to the needs of the emerging digital community in order to create an educationally conducive and more enabling environment among young professionals and students. The Organization is headquartered at <strong className="text-brand-navy">Sensix Tower, Innovation District, New York, NY 10001, USA</strong>.
                        </p>
                    </div>
                </div>
                <div className="lg:col-span-4 bg-slate-50 p-8 border border-slate-200">
                    <h4 className="text-brand-navy font-bold uppercase tracking-widest text-xs mb-6">Quick Facts</h4>
                    <ul className="space-y-4">
                        <li className="flex flex-col">
                            <span className="text-slate-400 text-xs uppercase tracking-wide mb-1">Established</span>
                            <span className="text-lg font-serif text-brand-navy">2010</span>
                        </li>
                        <li className="flex flex-col border-t border-slate-200 pt-4">
                            <span className="text-slate-400 text-xs uppercase tracking-wide mb-1">Headquarters</span>
                            <span className="text-lg font-serif text-brand-navy">New York, USA</span>
                        </li>
                        <li className="flex flex-col border-t border-slate-200 pt-4">
                            <span className="text-slate-400 text-xs uppercase tracking-wide mb-1">Motto</span>
                            <span className="text-lg font-serif text-brand-navy">Innovate, Connect, Grow</span>
                        </li>
                    </ul>
                </div>
            </div>
        </Section>

        {/* Our Initiatives - Summary */}
        <div className="bg-slate-50 py-24 px-4 md:px-8 border-y border-slate-200">
            <div className="w-full mb-16">
                 <span className="text-brand-pink font-bold tracking-[0.2em] uppercase text-xs block mb-4">What We Do</span>
                 <h2 className="text-4xl font-serif font-medium text-brand-navy mb-4">Our Initiatives</h2>
                 <p className="text-slate-500 max-w-2xl text-lg font-light">Discover the various programs and projects through which Sensix serves the educational needs of our community.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { title: 'Sensix Foundation', sub: '500+ startups supported', icon: <IconBook className="w-6 h-6"/> },
                    { title: 'Sensix Academy', sub: 'Est. 2012', icon: <IconSchool className="w-6 h-6"/> },
                    { title: 'Tech Education Initiative', sub: 'Since 2015', icon: <IconSparkles className="w-6 h-6"/> },
                    { title: 'Innovation Awards', sub: 'Annual event', icon: <IconAward className="w-6 h-6"/> },
                    { title: 'Global Outreach', sub: 'Multiple initiatives', icon: <IconUsers className="w-6 h-6"/> },
                ].map((item, i) => (
                    <div key={i} className="bg-white p-8 border border-slate-200 hover:border-brand-blue transition-all group">
                        <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-brand-navy mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                            {item.icon}
                        </div>
                        <h3 className="text-xl font-bold text-brand-navy mb-2">{item.title}</h3>
                        <p className="text-sm text-slate-500 uppercase tracking-widest">{item.sub}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* Comprehensive Overview */}
        <Section>
            <div className="max-w-4xl">
                <h2 className="text-3xl font-serif font-medium text-brand-navy mb-12">Comprehensive Overview of Our Work</h2>
                
                <div className="space-y-16">
                    <div className="pl-6 border-l-2 border-brand-blue">
                        <h3 className="text-2xl font-bold text-brand-navy mb-4">Sensix Foundation</h3>
                        <p className="text-slate-600 leading-relaxed">
                            The Sensix Foundation was founded in 2010 to support 'promising yet needy' innovators who qualify for professional acceleration among its members. The trust evolved as an auxiliary of Sensix and was renamed as Sensix Foundation Trust (SFT) in 2016. It is managed by a democratically elected Board of Governors for a term of three years from different walks of life who have ardent interest in the welfare of students. The trust fund is sourced from voluntary donations from its Patrons, Emeritus, Life Members, Members and other interested individuals.
                        </p>
                    </div>

                    <div className="pl-6 border-l-2 border-brand-green">
                        <h3 className="text-2xl font-bold text-brand-navy mb-4">Sensix Academy</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Sensix Academy is a premier institution established in the year 2012. Upon its inception the academy was set up with the aim of attending to the educational needs of the children who were looking for advanced technical skills. The academy, in its present state, serves disadvantaged students with full scholarships in its residential educational programme.
                        </p>
                    </div>

                    <div className="pl-6 border-l-2 border-brand-pink">
                        <h3 className="text-2xl font-bold text-brand-navy mb-4">Innovation Awards</h3>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            Innovation Awards is an annual activity of Sensix where various meritorious awards are given away to recognize, encourage and honor distinguished academic and professional achievements. The award is given away on January 15 every year along with the commemoration of the Organization's Foundation Day.
                        </p>
                        <ul className="list-disc list-outside pl-5 space-y-2 text-slate-600">
                            <li><strong>Visionary Awards:</strong> Donated by individual, families and organisations awarded to academic achievers ranging from toppers in Secondary to Graduate and Post Graduate examinations.</li>
                            <li><strong>Sensix Meritorious Awards:</strong> Given by Sensix General Headquarters to meritorious academic achievers securing top ranks.</li>
                            <li><strong>Sensix Honours Awards:</strong> Given to distinguished professionals in the field of education, technology, social work and others who have significant impact in the society.</li>
                        </ul>
                    </div>

                    <div className="pl-6 border-l-2 border-brand-navy">
                        <h3 className="text-2xl font-bold text-brand-navy mb-4">Other Projects & Activities</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Major Activities Undertaken by Sensix Career guidance seminars and workshops are organized by the Organization annually sponsored by tech giants and well-wishers. They are important activities spearheaded by the Education Department. Resource persons for the seminars and workshops are mobilized among intellectual circle as well as within the community. Various free coding bootcamps are conducted from time to time for the welfare of the student community.
                        </p>
                    </div>
                </div>
            </div>
        </Section>

        {/* Philosophy Section - Full Width */}
        <div className="w-full bg-brand-navy text-white py-24 px-4 md:px-8">
             {/* Vision & Mission */}
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-24 border-b border-white/10 pb-24">
                 {/* Vision */}
                 <div>
                     <div className="flex items-center gap-4 mb-6">
                        <IconLightBulb className="w-8 h-8 text-brand-blue" />
                        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Vision Statement</h3>
                     </div>
                     <div className="space-y-8">
                        <div>
                             <h4 className="font-bold text-xl text-brand-blue mb-3">GLOBAL VISION</h4>
                             <p className="font-serif italic text-lg leading-relaxed opacity-90">
                                "Our vision is to foster the development of a 'Knowledge Society.' By this is meant that, in accordance with advancements in global society, our learners should strive with integrity and diligence in all their engagements, standing for what is right and true, training themselves in noble pursuits, and on this basis nurture a society that is harmonious, virtuous, and congenial."
                             </p>
                        </div>
                     </div>
                 </div>

                 {/* Mission */}
                 <div>
                     <div className="flex items-center gap-4 mb-6">
                        <IconTarget className="w-8 h-8 text-brand-green" />
                        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Mission Statement</h3>
                     </div>
                     <div className="space-y-8">
                        <div>
                             <h4 className="font-bold text-xl text-brand-green mb-3">CORE OBJECTIVES</h4>
                             <ul className="list-disc pl-5 mt-2 space-y-4 font-serif italic opacity-90 text-sm">
                                <li>(i) Empower, mentor, and nurture the development of young individuals and students, equipping them to evolve into exceptional human resources who uphold unwavering integrity and contribute positively to society.</li>
                                <li>(ii) Create inclusive opportunities for all to savour the dignity of life while encouraging mutual respect and peaceful co-existence.</li>
                                <li>(iii) Safeguard our cultural heritage and time-honoured values, creatively adapted to contemporary times.</li>
                                <li>(iv) Cultivate and mentor community leaders while nurturing leadership skills that span the realms of trade, commerce, and governance.</li>
                             </ul>
                        </div>
                     </div>
                 </div>
             </div>

             {/* Commitments & Values Grid */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                 <div>
                    <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-widest border-b border-white/20 pb-2">Our Commitments</h4>
                    <ul className="space-y-6 text-slate-300">
                        <li className="flex flex-col gap-2">
                            <p className="font-serif italic opacity-90 text-white"><span className="text-brand-blue font-bold not-italic mr-2">(i)</span>To be a 'think tank' and a credible source of information for the youth and students.</p>
                        </li>
                        <li className="flex flex-col gap-2">
                            <p className="font-serif italic opacity-90 text-white"><span className="text-brand-blue font-bold not-italic mr-2">(ii)</span>To conduct social audit of education sector.</p>
                        </li>
                        <li className="flex flex-col gap-2">
                            <p className="font-serif italic opacity-90 text-white"><span className="text-brand-blue font-bold not-italic mr-2">(iii)</span>To facilitate development of educational infrastructure in our areas.</p>
                        </li>
                        <li className="flex flex-col gap-2">
                            <p className="font-serif italic opacity-90 text-white"><span className="text-brand-blue font-bold not-italic mr-2">(iv)</span>To honour and safeguard our aged-old traditional practices, culture and values.</p>
                        </li>
                    </ul>
                 </div>
                 
                 <div>
                    <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-widest border-b border-white/20 pb-2">Our Core Values</h4>
                    <div className="grid grid-cols-1 gap-4">
                         <div className="bg-white/5 p-4 border-l-4 border-brand-blue">
                            <h5 className="font-bold text-white">Truth and commitment</h5>
                            <p className="text-slate-400 text-sm">Integrity in all actions.</p>
                         </div>
                         <div className="bg-white/5 p-4 border-l-4 border-brand-green">
                            <h5 className="font-bold text-white">Love and Respect</h5>
                            <p className="text-slate-400 text-sm">Community first approach.</p>
                         </div>
                         <div className="bg-white/5 p-4 border-l-4 border-brand-pink">
                            <h5 className="font-bold text-white">Selfless Service and Altruism</h5>
                            <p className="text-slate-400 text-sm">Service beyond self.</p>
                         </div>
                    </div>
                 </div>
             </div>

             {/* Motto */}
             <div className="mt-24 text-center">
                 <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500 mb-6">OUR MOTTO</h4>
                 <h2 className="text-4xl md:text-6xl font-serif font-bold text-white tracking-tight">
                    <span className="text-brand-blue">Innovate</span>, <span className="text-brand-green">Connect</span>, <span className="text-brand-pink">Grow</span>!
                 </h2>
                 <p className="mt-4 text-xl text-slate-300 font-light italic">Learn, Labour and Serve!</p>
             </div>
        </div>

        {/* Committees Section */}
        <Section>
            <div className="mb-12">
                 <span className="text-brand-blue font-bold tracking-[0.2em] uppercase text-xs block mb-4">Leadership</span>
                 <h2 className="text-4xl font-serif font-medium text-brand-navy">Sensix Committees</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                    <h3 className="text-xl font-bold text-brand-navy mb-6 border-b border-slate-200 pb-2">General Headquarters</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-slate-50 p-6 border border-slate-200">
                             <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-xl font-serif font-bold text-brand-navy mb-4 shadow-sm">
                                 JD
                             </div>
                             <h4 className="text-lg font-bold text-brand-navy">John Doe</h4>
                             <p className="text-xs font-bold uppercase tracking-widest text-brand-blue mt-1">General President</p>
                        </div>
                        <div className="bg-slate-50 p-6 border border-slate-200">
                             <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-xl font-serif font-bold text-brand-navy mb-4 shadow-sm">
                                 JS
                             </div>
                             <h4 className="text-lg font-bold text-brand-navy">Jane Smith</h4>
                             <p className="text-xs font-bold uppercase tracking-widest text-brand-blue mt-1">Vice President (Administration)</p>
                        </div>
                    </div>
                    <div className="mt-8">
                         <button className="text-sm font-bold uppercase tracking-widest text-brand-navy border-b-2 border-brand-navy pb-1 hover:text-brand-blue hover:border-brand-blue transition-colors">View All Committees</button>
                    </div>
                </div>

                {/* Organogram Box */}
                <div className="bg-brand-navy text-white p-8 lg:p-12 flex flex-col items-center justify-center text-center">
                    <IconUsers className="w-12 h-12 text-brand-blue mb-6" />
                    <h3 className="text-xl font-bold mb-4 uppercase tracking-widest">Organogram of Sensix</h3>
                    <p className="text-slate-400 text-sm mb-8">Visualise the structural hierarchy and functional distribution.</p>
                    <button className="px-6 py-3 border border-white/20 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-brand-navy transition-all">
                        Download PDF
                    </button>
                </div>
            </div>
        </Section>

        {/* Preamble */}
        <div className="bg-slate-50 py-24 px-4 md:px-8 border-t border-slate-200">
            <div className="max-w-5xl mx-auto">
                 <div className="text-center mb-16">
                     <IconSparkles className="w-12 h-12 text-brand-navy mx-auto mb-6" />
                     <h2 className="text-3xl font-serif font-bold text-brand-navy uppercase tracking-widest">Preamble</h2>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 relative">
                     {/* Generic Preamble */}
                     <div className="font-serif italic text-lg leading-loose text-slate-600 text-right">
                         <h3 className="font-bold text-brand-navy not-italic mb-6 text-sm uppercase tracking-widest">Our Pledge</h3>
                         <p>"We, the members of Sensix,<br/>
                         To grow in all fields of knowledge,<br/>
                         To foster all vocational pursuits,<br/>
                         To be sincere, diligent and trustworthy,<br/>
                         Striving for advancement in all fields.<br/>
                         Without prejudice and with probity,<br/>
                         To work for the good of Society,<br/>
                         To be beneficent towards the World;<br/>
                         To work collectively;<br/>
                         With <strong className="text-brand-navy">Innovate, Connect, Grow</strong> as our motto,<br/>
                         We hereby adopt this Constitution."</p>
                     </div>

                     {/* Divider Line */}
                     <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-slate-200 -ml-px"></div>

                     {/* English Preamble */}
                     <div className="font-light text-lg leading-loose text-slate-600">
                         <h3 className="font-bold text-brand-navy mb-6 text-sm uppercase tracking-widest">Core Principles</h3>
                         <p>"We, the members of Sensix<br/>
                         Having solemnly resolved—<br/>
                         To grow in all fields of knowledge,<br/>
                         To grow in all forms of artistic excellence,<br/>
                         To foster all vocational pursuits,<br/>
                         To foster good sportsmanship,<br/>
                         To be sincere, diligent and trustworthy in action,<br/>
                         To abide by the Almighty;<br/>
                         To strive for advancement in all fields.
                         Without prejudice and with probity,<br/>
                         To work for the good of Society,<br/>
                         To be beneficent towards Nation and Country;<br/>
                         To work collectively;<br/>
                         With <strong className="text-brand-navy">Innovate, Connect, Grow</strong> as our motto,<br/>
                         For governing the Association,<br/>
                         We hereby adopt and enact this Constitution."</p>
                     </div>
                 </div>
            </div>
        </div>
    </div>
);

export const HistoryPage: React.FC = () => (
  <div className="bg-white pt-32">
    <Section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-32">
        <div className="space-y-8">
           <span className="text-brand-blue font-bold tracking-[0.2em] uppercase text-xs">The Genesis</span>
           <div className="prose prose-xl text-slate-600 font-serif leading-loose max-w-none">
             <p>
               <span className="float-left text-8xl font-bold text-brand-navy mr-4 leading-[0.75] mt-2">2</span>
               010. New York City. 
               In an era of digital transformation, a vision was born. Sensix emerged not just as an organisation, but as a <span className="italic text-brand-navy border-b border-brand-navy">movement</span>.
             </p>
             <p>
               With the motto "Innovate, Connect, Grow", our founders laid the first brick of what would become a sanctuary for the global student community.
             </p>
           </div>
        </div>
        <div className="relative h-[600px] bg-slate-100 rounded-sm overflow-hidden flex items-center justify-center border border-slate-200">
             <div className="absolute inset-0 bg-[linear-gradient(45deg,#000000_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.03]"></div>
             <div className="relative z-10 text-center">
                <span className="block text-[15rem] leading-none font-serif font-bold text-slate-300">10</span>
                <span className="block text-2xl uppercase tracking-[0.5em] text-brand-navy font-bold mt-4 border-t-2 border-brand-navy pt-8">Est. MMX</span>
             </div>
        </div>
      </div>

      {/* Timeline - Full Width Row Style */}
      <div className="space-y-0 border-t border-slate-200">
         {[
           { year: '2010', title: 'The Awakening', desc: 'Sensix is founded. First President: Michael Scott.', color: 'text-brand-blue' },
           { year: '2015', title: 'The Constitution', desc: 'Adoption of the formal constitution to guide the body.', color: 'text-brand-green' },
           { year: '2020', title: 'The Voice', desc: 'Launch of the first Sensix Magazine, documenting our stories.', color: 'text-brand-pink' },
           { year: '2025', title: '15th Anniversary', desc: 'A historic celebration of longevity and impact.', color: 'text-brand-navy' }
         ].map((item, idx) => (
           <div key={idx} className="group border-b border-slate-200 py-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-center hover:bg-slate-50 transition-colors px-4">
              <div className="md:col-span-3">
                 <span className={`text-6xl font-serif font-bold text-slate-200 group-hover:text-brand-navy transition-colors duration-500`}>
                   {item.year}
                 </span>
              </div>
              <div className="md:col-span-6">
                 <h3 className="text-3xl font-bold text-brand-navy mb-2">{item.title}</h3>
                 <p className="text-slate-500 text-lg leading-relaxed">{item.desc}</p>
              </div>
              <div className="md:col-span-3 flex justify-end">
                 <span className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-brand-navy group-hover:text-white group-hover:border-brand-navy transition-all">
                    ↓
                 </span>
              </div>
           </div>
         ))}
      </div>
    </Section>
  </div>
);

export const RegistrationPage: React.FC = () => (
    <div className="bg-slate-50 min-h-screen pt-32">
        {/* Main Section - The 'Certificates' */}
        <Section className="!px-0 md:!px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 bg-white shadow-xl">
                
                {/* 1. Society Act */}
                <div className="p-12 lg:p-20 relative overflow-hidden group border-b lg:border-b-0 lg:border-r border-slate-200">
                    <div className="absolute top-0 right-0 p-8 opacity-5 font-serif italic text-9xl text-brand-navy select-none pointer-events-none">1</div>
                    <div className="h-1 w-20 bg-brand-blue mb-12"></div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">Legal Status</h3>
                    <h2 className="text-4xl font-serif font-bold text-brand-navy mb-10">Incorporation</h2>
                    
                    <div className="space-y-8">
                        <div>
                            <p className="text-[10px] uppercase font-bold text-slate-400 mb-2">Registration No.</p>
                            <p className="text-3xl font-mono text-brand-blue">US-1107-2010</p>
                        </div>
                        <div>
                            <p className="text-[10px] uppercase font-bold text-slate-400 mb-2">Authority</p>
                            <p className="text-xl text-slate-700">Secretary of State</p>
                        </div>
                    </div>
                </div>

                {/* 2. Social Welfare */}
                <div className="p-12 lg:p-20 relative overflow-hidden group border-b lg:border-b-0 lg:border-r border-slate-200">
                    <div className="absolute top-0 right-0 p-8 opacity-5 font-serif italic text-9xl text-brand-navy select-none pointer-events-none">2</div>
                    <div className="h-1 w-20 bg-brand-green mb-12"></div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">Recognition</h3>
                    <h2 className="text-4xl font-serif font-bold text-brand-navy mb-10">Non-Profit Status</h2>
                    
                    <div className="space-y-8">
                        <div>
                            <p className="text-[10px] uppercase font-bold text-slate-400 mb-2">Registration No.</p>
                            <p className="text-3xl font-mono text-brand-green">501(c)(3)</p>
                        </div>
                        <div>
                            <p className="text-[10px] uppercase font-bold text-slate-400 mb-2">Jurisdiction</p>
                            <p className="text-xl text-slate-700">IRS</p>
                        </div>
                    </div>
                </div>

                {/* 3. FCRA */}
                <div className="p-12 lg:p-20 relative overflow-hidden group bg-slate-50/30">
                    <div className="absolute top-0 right-0 p-8 opacity-5 font-serif italic text-9xl text-brand-navy select-none pointer-events-none">3</div>
                    <div className="h-1 w-20 bg-brand-pink mb-12"></div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">Financial Compliance</h3>
                    <h2 className="text-4xl font-serif font-bold text-brand-navy mb-10">Audited</h2>
                    
                    <div className="space-y-8">
                        <div>
                            <p className="text-[10px] uppercase font-bold text-slate-400 mb-2">Status</p>
                            <p className="text-3xl font-mono text-brand-pink">CLEARED</p>
                        </div>
                        <div>
                            <p className="text-[10px] uppercase font-bold text-slate-400 mb-2">Audit Firm</p>
                            <p className="text-xl text-slate-700">Global Audit Partners</p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    </div>
);

export const ImpactPage: React.FC = () => {
  return (
    <div className="bg-white pt-32">
      {/* Stats Strip */}
      <div className="w-full border-b border-slate-100 bg-slate-50">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200">
              <div className="p-16 text-center group hover:bg-white transition-colors">
                  <div className="text-7xl font-serif font-medium text-brand-blue mb-4 group-hover:scale-110 transition-transform">100k+</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Community Members</div>
              </div>
              <div className="p-16 text-center group hover:bg-white transition-colors">
                  <div className="text-7xl font-serif font-medium text-brand-green mb-4 group-hover:scale-110 transition-transform">500+</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Active Chapters</div>
              </div>
              <div className="p-16 text-center group hover:bg-white transition-colors">
                  <div className="text-7xl font-serif font-medium text-brand-pink mb-4 group-hover:scale-110 transition-transform">$10M</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Funds Raised</div>
              </div>
          </div>
      </div>

      {/* Directory Grid */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          
          {/* Left Column: HQ & Blocks */}
          <div className="bg-white p-12 lg:p-24 border-r border-slate-200 space-y-20">
               {/* GHQ & JHQ */}
               <div>
                   <h3 className="text-xs font-bold uppercase tracking-widest text-brand-blue mb-8">Headquarters</h3>
                   <div className="space-y-8">
                       <div className="group">
                           <h4 className="text-3xl font-serif font-bold text-brand-navy mb-2 group-hover:text-brand-blue transition-colors">Global Headquarters</h4>
                           <p className="text-slate-500">Sensix Tower, New York</p>
                       </div>
                       <div className="pl-8 border-l-2 border-slate-100 space-y-6">
                            <div>
                                <h4 className="text-2xl font-serif font-bold text-brand-navy mb-4">Regional Hubs</h4>
                                <ul className="space-y-3 text-lg text-slate-600">
                                    <li className="flex items-center gap-3">
                                        <span className="w-2 h-2 rounded-full bg-brand-green"></span>
                                        Sensix Hub London
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="w-2 h-2 rounded-full bg-brand-green"></span>
                                        Sensix Hub Singapore
                                    </li>
                                </ul>
                            </div>
                       </div>
                   </div>
               </div>

               {/* Blocks */}
               <div>
                   <div className="flex justify-between items-end mb-8 border-b border-slate-100 pb-4">
                       <h3 className="text-xs font-bold uppercase tracking-widest text-brand-pink">Centers</h3>
                       <span className="text-[10px] text-slate-400 font-bold uppercase">10 Locations</span>
                   </div>
                   
                   <div className="flex flex-wrap gap-3">
                       {[
                           "Berlin", "Tokyo", "Sydney", "Toronto", "Dubai", 
                           "Mumbai", "Sao Paulo", "Paris", "Seoul", "Lagos"
                       ].map((block, idx) => (
                           <span key={idx} className="px-6 py-3 bg-slate-50 text-brand-navy text-sm font-bold uppercase tracking-wide border border-slate-200 hover:bg-brand-pink hover:text-white hover:border-brand-pink transition-all cursor-default">
                               {block}
                           </span>
                       ))}
                   </div>
               </div>
          </div>

          {/* Right Column: Branches */}
          <div className="bg-slate-50 p-12 lg:p-24">
              <div className="flex justify-between items-end mb-12 border-b border-slate-200 pb-4">
                   <h3 className="text-xs font-bold uppercase tracking-widest text-brand-navy">University Chapters</h3>
                   <span className="text-[10px] text-slate-400 font-bold uppercase">7 Locations</span>
               </div>
              
              <div className="divide-y divide-slate-200">
                  {[
                      "Sensix Harvard Chapter",
                      "Sensix MIT Chapter",
                      "Sensix Stanford Chapter",
                      "Sensix Oxford Chapter",
                      "Sensix Cambridge Chapter",
                      "Sensix Berkeley Chapter",
                      "Sensix Yale Chapter"
                  ].map((branch, i) => (
                      <div key={i} className="py-6 flex items-start gap-6 group hover:pl-4 transition-all duration-300">
                          <span className="text-sm font-mono text-slate-300 pt-1 group-hover:text-brand-blue">0{i+1}</span>
                          <h4 className="text-xl text-slate-600 group-hover:text-brand-navy font-medium">
                              {branch}
                          </h4>
                      </div>
                  ))}
              </div>
          </div>

      </div>
    </div>
  );
};

export const AnthemPage: React.FC = () => (
  <div className="bg-slate-50 min-h-screen pt-32">
    <div className="w-full flex justify-center bg-white py-24 px-4 md:px-8">
      <div className="w-full max-w-4xl text-center">
        <div className="mb-16">
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-brand-navy mb-6 tracking-tight">SENSIX ANTHEM</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-brand-blue via-brand-green to-brand-pink mx-auto mb-6"></div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Written by: A. Smith</p>
        </div>

        <div className="space-y-16">
            
            {/* Verse 1 */}
            <div className="font-serif text-xl md:text-3xl text-slate-700 leading-normal font-light">
                <p>Rising like the morning sun,</p>
                <p>We march together as one.</p>
                <p>Knowledge as our guiding light,</p>
                <p>Shining through the darkest night.</p>
                <p>We build the future with our hands.</p>
            </div>

            {/* Chorus */}
            <div className="py-16 border-y-2 border-brand-navy/10 relative">
                <p className="font-bold text-3xl md:text-5xl text-brand-navy leading-tight relative z-10">
                    <span className="text-brand-blue">INNOVATE</span>, <span className="text-brand-green">CONNECT</span>, <span className="text-brand-pink">GROW</span> together<br/>
                    United we stand forever <br/><span className="text-brand-navy border-b-4 border-brand-navy">SENSIX GLOBAL</span>
                </p>
            </div>

            {/* Verse 2 & 3 */}
            <div className="font-serif text-xl md:text-3xl text-slate-700 leading-normal font-light">
                <p className="mb-8">
                Across the lands our voices ring<br/>
                Of hope and peace we proudly sing
                </p>
                <p>
                Let our legacy aspire<br/>
                <span className="font-bold text-brand-navy">SENSIX</span><br/>
                Taking humanity higher
                </p>
            </div>

        </div>

        <div className="mt-24">
            <button className="bg-brand-navy text-white px-12 py-4 rounded-full hover:bg-brand-blue transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
                <span className="font-bold uppercase tracking-widest text-sm flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                    </svg>
                    Play Official Recording
                </span>
            </button>
        </div>

      </div>
    </div>
  </div>
);

export const PublicationsPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'magazines' | 'journals' | 'bulletins'>('journals');
    const [selectedPub, setSelectedPub] = useState<any | null>(null);

    const journals = [
        { 
            id: 'j1', 
            type: 'journal', 
            title: 'October 2024', 
            vol: 'Volume 12 | No. 3', 
            date: '30/10/2024', 
            upload: '28/11/2025',
            editor: 'Dr. Emily Blunt',
            description: 'This issue focuses on the socio-economic challenges faced by the global community in the post-pandemic era.',
            toc: ['Editorial Note', 'Impact of Digital Divide on Rural Education', 'The Role of Youth', 'Economic Sustainability'],
            cover: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop'
        },
        { 
            id: 'j2', 
            type: 'journal', 
            title: 'September 2024', 
            vol: 'Volume 12 | No. 2', 
            date: '30/09/2024', 
            upload: '28/11/2025',
            editor: 'John Smith',
            description: 'A special edition dedicated to the history of innovation.',
            toc: ['From 2010 to Today: A Journey', 'Interview with Founders', 'Statistical Analysis', 'Future Roadmap'],
            cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=800&auto=format&fit=crop'
        },
        { 
            id: 'j3', 
            type: 'journal', 
            title: 'August 2024', 
            vol: 'Volume 12 | No. 1', 
            date: '30/08/2024', 
            upload: '28/11/2025',
            editor: 'Mary Jane',
            description: 'Exploring the intersection of tradition and modernity.',
            toc: ['Cultural Identity in the 21st Century', 'Literature Review', 'Student Welfare Reports', 'Financial Audit'],
            cover: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop'
        },
        { 
            id: 'j4', 
            type: 'journal', 
            title: 'July 2024', 
            vol: 'Volume 11 | No. 6', 
            date: '30/07/2024', 
            upload: '28/11/2025',
            editor: 'Editorial Board',
            description: 'The mid-year review focusing on academic achievements.',
            toc: ['Meritorious Awardees List', 'Tips for Aspirants', 'Career Guidance', 'Scholarship Report'],
            cover: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=800&auto=format&fit=crop'
        },
    ];

    const magazines = Array.from({length: 8}, (_, i) => ({
        id: `m${i}`,
        type: 'magazine',
        title: `Annual Magazine 202${4-i}`,
        vol: `Vol. ${15-i}`,
        date: `Jan 202${4-i}`,
        description: `The flagship annual publication of Sensix. A comprehensive record of the year's events.`,
        editor: 'Magazine Department',
        toc: ['Presidential Address', 'General Secretary Report', 'Finance Report', 'Literary Section', 'Photo Gallery'],
        cover: `https://images.unsplash.com/photo-${1550000000000 + i * 100}?q=80&w=800&auto=format&fit=crop`
    }));

    // Detail View
    if (selectedPub) {
        return (
            <div className="bg-white min-h-screen animate-in fade-in slide-in-from-bottom-8 duration-500">
                {/* Light Header matching NewsPage style */}
                <div className="w-full pt-32 pb-12 px-4 md:px-8 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-12 opacity-[0.03] font-serif font-bold text-9xl leading-none select-none pointer-events-none text-brand-navy">
                        {selectedPub.type === 'magazine' ? 'MAG' : 'VOL'}
                    </div>
                    
                    <button 
                        onClick={() => setSelectedPub(null)}
                        className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-brand-blue mb-8 transition-colors"
                    >
                        <span className="transform group-hover:-translate-x-1 transition-transform">←</span> Back to Publications
                    </button>
                    
                    <div className="max-w-4xl relative z-10">
                        <span className="inline-block px-3 py-1 bg-white border border-slate-200 text-[10px] font-bold uppercase tracking-widest mb-6 text-brand-navy">
                            {selectedPub.type}
                        </span>
                        <h1 className="text-4xl md:text-6xl font-serif font-medium leading-tight mb-4 text-brand-navy">
                            {selectedPub.title}
                        </h1>
                        <p className="font-light text-lg text-slate-500 border-l-2 border-brand-blue pl-4">
                            {selectedPub.vol} • Published {selectedPub.date}
                        </p>
                    </div>
                </div>

                {/* Two-Column Detail Layout */}
                <div className="w-full grid grid-cols-1 lg:grid-cols-12 min-h-[60vh]">
                    
                    {/* Left: Visual/Cover */}
                    <div className="lg:col-span-4 bg-white p-8 md:p-12 flex items-start justify-center lg:border-r border-slate-200">
                        <div className="sticky top-32 w-full max-w-sm">
                            <div className="relative aspect-[3/4] shadow-2xl rounded-sm overflow-hidden border border-slate-200 group">
                                <img 
                                    src={selectedPub.cover || selectedPub.image} 
                                    alt={selectedPub.title} 
                                    className="w-full h-full object-cover filter brightness-95 group-hover:brightness-105 transition-all duration-700" 
                                />
                                {/* Book Spine Effect */}
                                <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-r from-black/20 to-transparent"></div>
                                <div className="absolute inset-0 ring-1 ring-inset ring-black/10"></div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Info */}
                    <div className="lg:col-span-8 p-8 md:p-16 bg-white">
                        <div className="max-w-3xl">
                            <div className="mb-12">
                                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-6">About this Issue</h3>
                                <p className="text-xl font-serif text-slate-600 leading-relaxed">
                                    {selectedPub.description}
                                </p>
                                {selectedPub.editor && (
                                    <div className="mt-6 flex items-center gap-2">
                                        <span className="text-xs font-bold uppercase text-brand-navy">Editor:</span>
                                        <span className="text-sm text-slate-500 italic">{selectedPub.editor}</span>
                                    </div>
                                )}
                            </div>

                            <div className="border-t border-slate-100 pt-12 mb-12">
                                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-6">Table of Contents</h3>
                                <ul className="space-y-4">
                                    {selectedPub.toc && selectedPub.toc.map((item: string, idx: number) => (
                                        <li key={idx} className="flex items-start gap-4 group cursor-default">
                                            <span className="text-xs font-mono text-slate-300 pt-1">0{idx + 1}</span>
                                            <span className="text-brand-navy font-medium group-hover:text-brand-blue transition-colors">{item}</span>
                                        </li>
                                    ))}
                                    {!selectedPub.toc && <li className="text-slate-400 italic">Content listing available in PDF.</li>}
                                </ul>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="px-8 py-4 bg-brand-navy text-white font-bold uppercase tracking-widest text-xs hover:bg-brand-blue transition-colors shadow-lg flex items-center justify-center gap-3">
                                    <IconDocument className="w-4 h-4" />
                                    Download PDF
                                </button>
                                <button className="px-8 py-4 border border-slate-200 text-brand-navy font-bold uppercase tracking-widest text-xs hover:bg-slate-50 transition-colors flex items-center justify-center gap-3">
                                    Read Online
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
    <div className="pt-32">
      <Section>
        
        {/* Sleek Tab Switcher */}
        <div className="flex justify-start mb-20 border-b border-slate-200">
            {['magazines', 'journals', 'bulletins'].map((tab) => (
                <button
                    key={tab}
                    onClick={() => setActiveTab(tab as any)}
                    className={`pb-4 px-8 text-sm font-bold uppercase tracking-widest transition-all duration-300 border-b-4 ${
                        activeTab === tab 
                            ? 'border-brand-navy text-brand-navy' 
                            : 'border-transparent text-slate-400 hover:text-brand-navy'
                    }`}
                >
                    {tab}
                </button>
            ))}
        </div>

        {/* Content Area */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 min-h-[500px]">
            
            {/* Magazines Grid */}
            {activeTab === 'magazines' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {magazines.map((mag) => (
                        <div key={mag.id} onClick={() => setSelectedPub(mag)} className="group cursor-pointer">
                            <div className="aspect-[3/4] bg-slate-100 mb-6 relative overflow-hidden transition-all duration-500 ease-out border border-slate-200 group-hover:border-brand-navy shadow-sm group-hover:shadow-xl">
                                <img src={mag.cover} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 m-4 border border-white/50 bg-white/80 backdrop-blur-sm group-hover:opacity-0 transition-opacity duration-300">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-4">Sensix Annual</span>
                                    <span className="text-5xl font-serif font-bold text-brand-navy text-center leading-none">{mag.vol.replace('Vol. ', '')}</span>
                                </div>
                                <div className="absolute inset-0 bg-brand-navy/90 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center">
                                    <span className="text-white uppercase tracking-widest font-bold text-xs border border-white px-4 py-2">View Details</span>
                                </div>
                            </div>
                            <div className="text-center">
                                <h3 className="font-serif font-bold text-lg text-brand-navy group-hover:text-brand-blue transition-colors">{mag.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Journals List - Grid Style */}
            {activeTab === 'journals' && (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {journals.map((journal, idx) => (
                        <div key={idx} onClick={() => setSelectedPub(journal)} className="group bg-white border border-slate-200 p-8 hover:border-brand-blue hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-72 cursor-pointer relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                <IconDocument className="w-24 h-24 text-brand-navy" />
                            </div>
                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 bg-slate-50 rounded-full group-hover:bg-brand-blue group-hover:text-white transition-colors">
                                         <IconDocument className="w-5 h-5" />
                                    </div>
                                    <span className="text-[10px] font-mono text-slate-400 bg-slate-50 px-2 py-1 rounded-sm">{journal.date}</span>
                                </div>
                                <h3 className="text-2xl font-serif font-bold text-brand-navy mb-2 group-hover:text-brand-blue transition-colors line-clamp-2">
                                    {journal.title}
                                </h3>
                                <p className="text-xs uppercase tracking-widest text-slate-400 mb-4">{journal.vol}</p>
                                <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed">{journal.description}</p>
                            </div>
                            
                            <div className="pt-4 border-t border-slate-50 flex justify-between items-center relative z-10">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-blue opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0 duration-300">View Issue</span>
                                <IconArrowRight className="w-4 h-4 text-slate-300 group-hover:text-brand-blue transition-colors" />
                            </div>
                        </div>
                    ))}
                </div>
            )}
             {/* Bulletins Placeholder */}
             {activeTab === 'bulletins' && (
                 <div className="flex flex-col items-center justify-center py-20 bg-slate-50 border border-dashed border-slate-300">
                     <IconDocument className="w-12 h-12 text-slate-300 mb-4" />
                     <p className="text-slate-500 font-serif italic">No recent bulletins uploaded.</p>
                 </div>
             )}
        </div>
      </Section>
    </div>
    );
};

export const BlogPage: React.FC = () => {
    const [activeLanguage, setActiveLanguage] = useState<'english' | 'vernacular'>('english');
    const [activeCategory, setActiveCategory] = useState('all');
    const [selectedPost, setSelectedPost] = useState<any | null>(null);

    // Reset category when language changes to avoid invalid states
    useEffect(() => {
        setActiveCategory('all');
    }, [activeLanguage]);

    const getCategories = () => {
        if (activeLanguage === 'english') {
            return [
                { id: 'all', label: 'All' },
                { id: 'article', label: 'Article' },
                { id: 'tech', label: 'Tech' }
            ];
        } else {
            return [
                { id: 'all', label: 'All' },
                { id: 'story', label: 'Story' },
                { id: 'news', label: 'News' }
            ];
        }
    };

    const categories = getCategories();

    const posts = [
        {
            id: 1,
            language: 'english',
            category: 'article',
            title: "The Future of Education in the Digital Era",
            excerpt: "An in-depth look at how remote learning initiatives are reshaping the landscape for students.",
            author: "Liam Thomas",
            role: "Education Secretary",
            date: "Aug 12, 2024",
            readTime: "5 min read",
            image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop",
            content: `
                <p class="mb-6 first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:mr-2 first-letter:float-left first-letter:text-brand-navy">The rapid evolution of technology has fundamentally transformed the way we approach education. In the context of our districts, this shift presents a unique dichotomy of unprecedented opportunities and significant challenges.</p>
                <h3 class="text-2xl font-serif font-bold text-brand-navy mb-4 mt-8">Bridging the Divide</h3>
                <p class="mb-6">For decades, students in remote areas have struggled with access to quality learning materials. The digital revolution promises to bridge this gap. With just a smartphone and an internet connection, a student can now access the same lectures as a student in a metropolitan city.</p>
                <blockquote class="border-l-4 border-brand-blue pl-6 italic text-xl text-slate-600 my-12">"Education is not just about filling a bucket, but lighting a fire. Technology is merely the spark."</blockquote>
            `
        },
        {
            id: 2,
            language: 'english',
            category: 'tech',
            title: "AI in Everyday Life",
            excerpt: "How artificial intelligence is helping solve local community problems.",
            author: "Sarah Connor",
            role: "Tech Lead",
            date: "Sep 05, 2024",
            readTime: "3 min read",
            image: "https://images.unsplash.com/photo-1471107194657-6a9296342121?q=80&w=800&auto=format&fit=crop",
            content: `
                <p class="mb-8 font-serif italic text-xl text-center text-slate-600">"The future is here, it's just not evenly distributed."</p>
                <p class="mb-6">AI is changing everything.</p>
            `
        },
        {
            id: 3,
            language: 'english',
            category: 'article',
            title: "Youth Leadership: A Call to Action",
            excerpt: "Why student politics matters and how young leaders can foster positive change.",
            author: "Tom Holland",
            role: "Social Activist",
            date: "Oct 20, 2024",
            readTime: "7 min read",
            image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop",
            content: "<p class='mb-6'>Leadership is often mistaken for authority, but true leadership is about service.</p>"
        }
    ];

    // Filter logic: Must match language AND (if not 'all') match category
    const filteredPosts = posts.filter(post => 
        post.language === activeLanguage && 
        (activeCategory === 'all' || post.category === activeCategory)
    );

    // Detail View
    if (selectedPost) {
        return (
            <div className="bg-white min-h-screen animate-in fade-in slide-in-from-bottom-4 duration-500">
                {/* Header Area - Left Aligned */}
                <div className="pt-32 pb-12 px-4 md:px-8 w-full border-b border-slate-100 bg-slate-50/50">
                     <button onClick={() => setSelectedPost(null)} className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-brand-blue mb-8 transition-colors">
                        <span className="transform group-hover:-translate-x-1 transition-transform">←</span> Back to Blog
                     </button>
                     
                     <div className="max-w-5xl">
                        <span className="inline-block px-3 py-1 bg-white border border-slate-200 text-brand-navy text-[10px] font-bold uppercase tracking-widest mb-6">{selectedPost.category}</span>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-medium text-brand-navy leading-tight mb-8">{selectedPost.title}</h1>
                        
                        <div className="flex flex-wrap items-center gap-8">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
                                    <img src={`https://ui-avatars.com/api/?name=${selectedPost.author}&background=1d4ed8&color=fff`} alt={selectedPost.author} className="w-full h-full object-cover"/>
                                </div>
                                <div className="text-left">
                                    <p className="text-xs font-bold uppercase text-brand-navy">{selectedPost.author}</p>
                                    <p className="text-[10px] text-slate-400 uppercase tracking-wider">{selectedPost.role || 'Contributor'}</p>
                                </div>
                            </div>
                            <div className="h-8 w-px bg-slate-200 hidden sm:block"></div>
                            <div className="text-left">
                                <p className="text-xs font-bold uppercase text-brand-navy">{selectedPost.date}</p>
                                <p className="text-[10px] text-slate-400 uppercase tracking-wider">{selectedPost.readTime || '5 min read'}</p>
                            </div>
                        </div>
                     </div>
                </div>
    
                {/* Hero Image - Full Width */}
                <div className="w-full h-[40vh] md:h-[60vh] overflow-hidden">
                    <img src={selectedPost.image} className="w-full h-full object-cover" alt="Blog Hero" />
                </div>
    
                {/* Content Body - Left Aligned but max-width for readability */}
                <div className="w-full px-4 md:px-8 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
                     <div className="lg:col-span-2 hidden lg:block">
                        <div className="sticky top-32 space-y-8">
                            <div>
                                <span className="text-xs font-bold text-slate-400 uppercase block mb-4">Share</span>
                                <div className="flex flex-col gap-4">
                                    <button className="text-slate-400 hover:text-brand-blue transition-colors text-xs font-bold uppercase text-left">Facebook</button>
                                    <button className="text-slate-400 hover:text-brand-blue transition-colors text-xs font-bold uppercase text-left">Twitter</button>
                                    <button className="text-slate-400 hover:text-brand-blue transition-colors text-xs font-bold uppercase text-left">LinkedIn</button>
                                </div>
                            </div>
                        </div>
                     </div>

                     <div className="lg:col-span-8">
                        <div className="prose prose-lg prose-slate font-serif leading-loose text-slate-600 max-w-none" dangerouslySetInnerHTML={{ __html: selectedPost.content || '' }}></div>
                     </div>
                </div>
            </div>
        )
    }

    return (
    <div className="pt-32">
        <Section>
             <div className="flex flex-col items-center mb-16 gap-8">
                
                {/* Language Switcher */}
                <div className="bg-slate-100 p-1.5 rounded-md flex gap-1">
                    <button 
                        onClick={() => setActiveLanguage('english')}
                        className={`px-8 py-3 rounded-sm text-sm font-bold uppercase tracking-widest transition-all shadow-sm ${
                            activeLanguage === 'english'
                            ? 'bg-white text-brand-navy shadow-md'
                            : 'bg-transparent text-slate-500 hover:text-brand-navy'
                        }`}
                    >
                        English
                    </button>
                    <button 
                        onClick={() => setActiveLanguage('vernacular')}
                        className={`px-8 py-3 rounded-sm text-sm font-bold uppercase tracking-widest transition-all shadow-sm ${
                            activeLanguage === 'vernacular'
                            ? 'bg-white text-brand-navy shadow-md'
                            : 'bg-transparent text-slate-500 hover:text-brand-navy'
                        }`}
                    >
                        Local
                    </button>
                </div>

                {/* Category Filter */}
                <div className="flex gap-2 flex-wrap justify-center border-t border-slate-100 pt-8 w-full">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`px-6 py-2 text-xs uppercase tracking-widest font-bold border transition-colors duration-300 rounded-full ${
                                activeCategory === cat.id 
                                    ? 'border-brand-navy bg-brand-navy text-white' 
                                    : 'border-slate-200 bg-white text-slate-500 hover:border-brand-navy hover:text-brand-navy'
                            }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                 {filteredPosts.length > 0 ? (
                     filteredPosts.map((post) => (
                         <div key={post.id} onClick={() => setSelectedPost(post)} className="group cursor-pointer flex flex-col h-full bg-white border-b-2 border-transparent hover:border-brand-blue transition-all duration-300 animate-in fade-in zoom-in-95 duration-500">
                             <div className="aspect-[16/9] overflow-hidden bg-slate-100 relative mb-6">
                                 <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                 <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                     <span className="text-white text-xs font-bold uppercase tracking-widest border border-white px-4 py-2">Read Post</span>
                                 </div>
                             </div>
                             
                             <div className="flex-1 flex flex-col">
                                 <div className="mb-4 flex items-center justify-between">
                                     <span className="text-[10px] font-bold uppercase tracking-widest text-brand-blue">{post.category}</span>
                                     <span className="text-[10px] text-slate-400 font-mono">{post.date}</span>
                                 </div>
                                 <h3 className="text-2xl font-serif font-bold text-brand-navy mb-4 leading-tight group-hover:text-brand-blue transition-colors">
                                     {post.title}
                                 </h3>
                                 <p className="text-sm text-slate-500 leading-relaxed mb-6 line-clamp-3">
                                     {post.excerpt}
                                 </p>
                                 
                                 <div className="mt-auto pt-4 border-t border-slate-100">
                                     <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">By {post.author}</span>
                                 </div>
                             </div>
                         </div>
                     ))
                 ) : (
                    <div className="col-span-full py-20 text-center">
                        <p className="text-slate-400 font-serif italic text-xl">No posts available in this section yet.</p>
                    </div>
                 )}
             </div>
        </Section>
    </div>
    );
};

export const NewsPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState('notice');
    const [selectedNews, setSelectedNews] = useState<any | null>(null);

    const categories = [
        { id: 'notice', label: 'Notice' },
        { id: 'communique', label: 'Communique' },
        { id: 'obituary', label: 'Obituary' },
        { id: 'office_orders', label: 'Office Orders' }
    ];

    const newsData = [
        { id: 1, type: 'notice', date: 'Oct 24', year: '2024', title: "Annual General Assembly Summoning Order", meta: "Ref: SNX/GHQ/GEN/2024-55", desc: "All unit presidents and secretaries are strictly informed to attend the assembly without fail.", content: "<p>Content...</p>" },
        { id: 2, type: 'office_orders', date: 'Oct 15', year: '2024', title: "Appointment of Finance Committee", meta: "Order No: 202/FC/24", desc: "The following members are hereby appointed to the finance audit committee.", content: "<p>Content...</p>" },
        { id: 3, type: 'communique', date: 'Sep 30', year: '2024', title: "Joint Statement on Tech Unity", meta: "Press Release", desc: "A unified stance on the current socio-political developments.", content: "<p>Content...</p>" },
        { id: 5, type: 'notice', date: 'Aug 20', year: '2024', title: "Scholarship Distribution Ceremony", meta: "Education Dept", desc: "Awardees are requested to bring original documents for verification.", content: "<p>Content...</p>" }
    ];

    const filteredNews = newsData.filter(item => item.type === activeTab);

    if (selectedNews) {
        return (
            <div className="bg-white min-h-screen">
                 <div className="w-full pt-28 pb-12 px-4 md:px-8 bg-slate-50 border-b border-slate-200">
                    <button 
                        onClick={() => setSelectedNews(null)}
                        className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-brand-blue mb-8 transition-colors"
                    >
                        ← Back to List
                    </button>
                    <div className="max-w-4xl">
                        <span className="text-xs font-bold uppercase tracking-widest bg-brand-navy text-white px-3 py-1 mb-6 inline-block">
                            {categories.find(c => c.id === selectedNews.type)?.label}
                        </span>
                        <h1 className="text-3xl md:text-5xl font-serif font-medium text-brand-navy leading-tight mb-4">
                            {selectedNews.title}
                        </h1>
                        <p className="font-mono text-sm text-slate-500">{selectedNews.meta} • {selectedNews.date}, {selectedNews.year}</p>
                    </div>
                </div>
    
                <div className="w-full px-4 md:px-8 py-16">
                     <div className="max-w-3xl prose prose-lg prose-slate font-serif text-slate-600 leading-loose">
                        <div dangerouslySetInnerHTML={{ __html: selectedNews.content }} />
                     </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-slate-50 min-h-screen pt-32">
            <Section className="!px-0 md:!px-8">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar Tabs */}
                    <div className="w-full lg:w-64 shrink-0 px-4 md:px-0">
                        <div className="bg-white p-4 shadow-sm border border-slate-200 sticky top-32">
                             <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6 px-2">Filter By</h3>
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveTab(cat.id)}
                                    className={`w-full text-left px-4 py-3 text-sm font-bold uppercase tracking-widest transition-all duration-300 border-l-2 mb-1 ${
                                        activeTab === cat.id 
                                            ? 'border-brand-navy bg-slate-50 text-brand-navy' 
                                            : 'border-transparent text-slate-400 hover:text-brand-navy'
                                    }`}
                                >
                                    {cat.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Content List */}
                    <div className="flex-1 space-y-0 border-t border-slate-200 bg-white shadow-xl">
                        {filteredNews.length > 0 ? (
                            filteredNews.map((item) => (
                                <div 
                                    key={item.id} 
                                    onClick={() => setSelectedNews(item)}
                                    className="group cursor-pointer p-8 md:p-12 border-b border-slate-200 hover:bg-slate-50 transition-all flex flex-col md:flex-row gap-8 md:items-center"
                                >
                                    <div className="w-24 shrink-0">
                                        <span className="text-sm font-bold uppercase tracking-widest text-slate-400 block mb-1">{item.date.split(' ')[0]}</span>
                                        <span className="text-4xl font-serif font-bold text-brand-navy block">{item.date.split(' ')[1]}</span>
                                    </div>
                                    <div className="flex-1 border-l-2 border-slate-100 pl-8 group-hover:border-brand-navy transition-colors">
                                        <h3 className="text-2xl font-bold text-brand-navy mb-3 group-hover:text-brand-blue transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-slate-500 text-base leading-relaxed max-w-2xl line-clamp-2">
                                            {item.desc}
                                        </p>
                                    </div>
                                    <div className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 group-hover:translate-x-0">
                                        <IconArrowRight className="w-6 h-6 text-brand-blue" />
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="p-20 text-center">
                                <p className="text-slate-400 font-serif italic">No updates in this category currently.</p>
                            </div>
                        )}
                    </div>
                </div>
            </Section>
        </div>
    );
};

export const GalleryPage: React.FC = () => (
    <div className="pt-32">
        <div className="w-full px-4 pb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <div key={i} className={`relative group overflow-hidden ${i % 3 === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}>
                        <img 
                            src={`https://images.unsplash.com/photo-${1520000000000 + i * 10}?q=80&w=1200&auto=format&fit=crop`} 
                            alt="Gallery" 
                            className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 filter grayscale group-hover:grayscale-0" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                             <div>
                                <span className="text-brand-blue font-bold uppercase tracking-widest text-xs mb-2 block">Event</span>
                                <p className="text-white text-xl font-serif">Annual Conference 2024</p>
                             </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);
