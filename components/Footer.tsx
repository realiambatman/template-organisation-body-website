import React from 'react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  const handleNav = (e: React.MouseEvent, page: string) => {
    e.preventDefault();
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-navy text-white relative overflow-hidden">
        {/* Background Typography - The Motto */}
        <div className="absolute inset-0 pointer-events-none flex items-end justify-center opacity-[0.03] select-none">
            <span className="text-[12vw] leading-none font-serif font-black whitespace-nowrap text-white transform translate-y-[20%]">
                INNOVATE CONNECT GROW
            </span>
        </div>

        {/* Top Section: CTA */}
        <div className="relative z-10 border-b border-white/10">
            <div className="w-full px-4 md:px-8 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                    <h3 className="text-3xl md:text-4xl font-serif font-medium mb-2">Join the Movement</h3>
                    <p className="text-slate-400 font-light text-sm">Be part of the legacy. Shape the future of our community.</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                    <button onClick={(e) => handleNav(e, 'contact')} className="px-10 py-4 bg-white text-brand-navy font-bold uppercase tracking-widest text-xs hover:bg-slate-200 transition-colors text-center rounded-sm">
                        Become a Member
                    </button>
                    <button onClick={(e) => handleNav(e, 'contact')} className="px-10 py-4 border border-white/20 text-white font-bold uppercase tracking-widest text-xs hover:bg-white/5 transition-colors text-center rounded-sm">
                        Donate
                    </button>
                </div>
            </div>
        </div>

        {/* Middle Section: Links Grid */}
        <div className="relative z-10 w-full px-4 md:px-8 py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24">
                
                {/* Brand Column */}
                <div className="space-y-8">
                    <div className="flex items-center gap-3 cursor-pointer" onClick={(e) => handleNav(e, 'home')}>
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                            <span className="font-serif text-brand-navy font-black text-2xl">S</span>
                        </div>
                        <span className="text-xl font-serif tracking-wide font-bold">SENSIX</span>
                    </div>
                    <p className="text-slate-400 text-sm font-light leading-relaxed">
                        Established in 2010, Sensix is the premier community dedicated to the educational, social, and technological upliftment of the global community.
                    </p>
                    <div className="flex gap-4 pt-4">
                        {['Facebook', 'Twitter', 'Instagram', 'YouTube'].map((social) => (
                            <a key={social} href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-slate-400 hover:text-white hover:border-white hover:bg-white/10 transition-all">
                                <span className="sr-only">{social}</span>
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                </svg>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Links 1 */}
                <div className="space-y-8">
                    <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">The Legacy</h4>
                    <ul className="space-y-4 text-sm text-slate-400">
                        <li><button onClick={(e) => handleNav(e, 'history')} className="hover:text-white transition-colors block py-1">Our History</button></li>
                        <li><button onClick={(e) => handleNav(e, 'registration')} className="hover:text-white transition-colors block py-1">Constitution & Reg.</button></li>
                        <li><button onClick={(e) => handleNav(e, 'anthem')} className="hover:text-white transition-colors block py-1">Brand Anthem</button></li>
                        <li><button onClick={(e) => handleNav(e, 'about-us')} className="hover:text-white transition-colors block py-1">Vision & Mission</button></li>
                    </ul>
                </div>

                {/* Links 2 */}
                <div className="space-y-8">
                    <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-green">The Body</h4>
                    <ul className="space-y-4 text-sm text-slate-400">
                        <li><button onClick={(e) => handleNav(e, 'impact')} className="hover:text-white transition-colors block py-1">Executive Committee</button></li>
                        <li><button onClick={(e) => handleNav(e, 'impact')} className="hover:text-white transition-colors block py-1">Regional Hubs</button></li>
                        <li><button onClick={(e) => handleNav(e, 'impact')} className="hover:text-white transition-colors block py-1">Chapters & Units</button></li>
                        <li><button onClick={(e) => handleNav(e, 'publications')} className="hover:text-white transition-colors block py-1">Publications</button></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="space-y-8">
                    <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-pink">Reach Us</h4>
                    <address className="not-italic text-sm text-slate-400 space-y-4">
                        <p className="leading-relaxed">Sensix Tower,<br/>Innovation District,<br/>New York, NY 10001</p>
                        <p><button onClick={(e) => handleNav(e, 'contact')} className="hover:text-white transition-colors text-white">info@sensix.org</button></p>
                        <p className="text-white">+1 555 123 4567</p>
                    </address>
                </div>
            </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative z-10 bg-black/20 px-4 md:px-8 py-8 border-t border-white/5">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-wider text-slate-500">
                <p>&copy; {new Date().getFullYear()} Sensix Global Inc.</p>
                <div className="flex gap-8">
                    <button onClick={(e) => handleNav(e, 'home')} className="hover:text-white transition-colors">Privacy</button>
                    <button onClick={(e) => handleNav(e, 'home')} className="hover:text-white transition-colors">Terms</button>
                    <button onClick={(e) => handleNav(e, 'home')} className="hover:text-white transition-colors">Sitemap</button>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;