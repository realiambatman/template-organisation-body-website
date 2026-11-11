import React, { useState, useEffect } from 'react';
import { NavItem } from '../types';
import { IconChevronDown, IconMenu, IconX } from './Icons';

const navItems: NavItem[] = [
  { label: 'Home', id: 'home' },
  { label: 'About Us', id: 'about-us' },
  { 
    label: 'Organization', 
    id: 'org-dropdown',
    children: [
      { label: 'Our History', id: 'history' },
      { label: 'Impact & Reach', id: 'impact' },
      { label: 'Legal & Compliance', id: 'registration' },
      { label: 'Brand Anthem', id: 'anthem' }
    ]
  },
  { label: 'Publications', id: 'publications' },
  { label: 'Blog', id: 'blog' },
  { label: 'News & Events', id: 'news' },
  { 
    label: 'Updates', 
    id: 'updates',
    children: [
      { label: 'Photo Gallery', id: 'gallery-photo' },
      { label: 'Video Gallery', id: 'gallery-video' }
    ]
  },
  { label: 'Contact Us', id: 'contact', isButton: true },
];

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const handleNavClick = (id: string) => {
    setCurrentPage(id);
    setIsOpen(false);
    setActiveDropdown(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-500 border-b bg-white/95 backdrop-blur-md border-slate-200 ${
        scrolled ? 'py-3 shadow-sm' : 'py-5'
      }`}>
        <div className="w-full px-4 md:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand */}
            <div className="flex items-center gap-3 cursor-pointer group" onClick={() => handleNavClick('home')}>
               <div className="relative w-10 h-10 flex-shrink-0 flex items-center justify-center bg-white border border-slate-200 rounded-full p-0.5 shadow-sm transition-transform duration-500 group-hover:scale-105">
                   <div className="w-full h-full rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center overflow-hidden relative">
                      <div className="absolute inset-0 opacity-10 bg-[conic-gradient(at_center,_var(--tw-gradient-stops))] from-brand-blue via-brand-green to-brand-pink"></div>
                      <span className="font-serif font-black text-xl text-brand-navy/80 relative z-10">S</span>
                   </div>
               </div>
               
               <div className="flex flex-col">
                 <span className="text-lg font-sans font-bold text-brand-navy tracking-tighter leading-none group-hover:text-black transition-colors">
                   SENSIX
                 </span>
                 <div className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.15em] mt-1 leading-none">
                   <span className="text-brand-blue">Innovate</span>
                   <span className="text-slate-300 text-[6px]">•</span>
                   <span className="text-brand-green">Connect</span>
                   <span className="text-slate-300 text-[6px]">•</span>
                   <span className="text-brand-pink">Grow</span>
                 </div>
               </div>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <div 
                  key={item.label} 
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.id)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.isButton ? (
                    <button 
                      onClick={() => handleNavClick(item.id)}
                      className="bg-brand-navy text-white px-6 py-2.5 text-[11px] font-bold uppercase tracking-widest hover:bg-brand-blue transition-all duration-300 rounded-sm"
                    >
                      {item.label}
                    </button>
                  ) : (
                    <button
                      onClick={() => !item.children && handleNavClick(item.id)}
                      className={`flex items-center gap-1 text-[13px] font-medium tracking-wide transition-colors duration-300 py-2 ${
                        currentPage === item.id 
                          ? 'text-brand-navy font-bold' 
                          : 'text-slate-500 hover:text-brand-blue'
                      }`}
                    >
                      {item.label}
                      {item.children && <IconChevronDown className="w-2.5 h-2.5 pt-0.5 opacity-50" />}
                    </button>
                  )}

                  {/* Dropdown */}
                  {item.children && (
                    <div className={`absolute top-full left-0 pt-4 w-64 transform transition-all duration-300 origin-top-left ${
                      activeDropdown === item.id ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 -translate-y-2 invisible'
                    }`}>
                      <div className="bg-white shadow-xl border border-slate-100 py-2 rounded-sm">
                        {item.children.map((child) => (
                          <button
                            key={child.id}
                            onClick={() => handleNavClick(child.id)}
                            className="w-full text-left px-6 py-3 text-sm text-slate-500 hover:bg-slate-50 hover:text-brand-blue transition-colors border-l-2 border-transparent hover:border-brand-blue"
                          >
                            {child.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(true)}
                className="text-brand-navy p-2 hover:bg-slate-100 transition-colors"
                aria-label="Open Menu"
              >
                <IconMenu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[60] bg-white transform transition-transform duration-500 ease-in-out lg:hidden flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 bg-white sticky top-0 z-10">
          <span className="font-serif font-bold text-xl text-brand-navy">Menu</span>
          <button 
            onClick={() => setIsOpen(false)} 
            className="p-2 bg-slate-50 hover:bg-brand-navy hover:text-white transition-colors"
            aria-label="Close Menu"
          >
            <IconX className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-8">
          <div className="space-y-4">
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-slate-50 last:border-0 pb-4">
                {item.children ? (
                  <div className="py-2">
                    <div className="font-serif font-bold text-2xl text-brand-navy mb-4">{item.label}</div>
                    <div className="pl-4 space-y-4 border-l-2 border-slate-100 ml-1">
                      {item.children.map(child => (
                        <button
                          key={child.id}
                          onClick={() => handleNavClick(child.id)}
                          className="block text-base font-medium text-slate-500 hover:text-brand-blue text-left w-full"
                        >
                          {child.label}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`block w-full text-left text-2xl font-serif font-bold transition-colors ${
                      currentPage === item.id ? 'text-brand-blue' : 'text-brand-navy'
                    } ${item.isButton ? 'text-brand-blue mt-4' : ''}`}
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-slate-200">
             <div className="flex items-center gap-2 mb-4">
                 <span className="text-brand-blue font-bold text-xs uppercase tracking-widest">Innovate</span>
                 <span className="text-slate-300">•</span>
                 <span className="text-brand-green font-bold text-xs uppercase tracking-widest">Connect</span>
                 <span className="text-slate-300">•</span>
                 <span className="text-brand-pink font-bold text-xs uppercase tracking-widest">Grow</span>
             </div>
             <p className="text-xs text-slate-400">© {new Date().getFullYear()} Sensix Global Inc.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;