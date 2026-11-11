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

/** Brand mark and name. Swap the letter and name for your own, or drop in a logo image. */
export const BrandMark: React.FC<{ onDark?: boolean }> = ({ onDark }) => (
  <span className="flex items-center gap-2.5">
    <span className="flex h-9 w-9 items-center justify-center rounded-control bg-brand font-display text-xl font-bold text-brand-contrast">
      S
    </span>
    <span className={`font-display text-xl font-bold tracking-tight ${onDark ? 'text-white' : 'text-ink'}`}>
      Sensix
    </span>
  </span>
);

const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveDropdown(null);
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const handleNavClick = (id: string) => {
    setCurrentPage(id);
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const isActive = (item: NavItem) =>
    currentPage === item.id || !!item.children?.some((child) => child.id === currentPage);

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b bg-paper/95 backdrop-blur transition-colors duration-200 ${
          scrolled ? 'border-line' : 'border-transparent'
        }`}
      >
        <nav aria-label="Main" className="container-page flex h-16 items-center justify-between gap-6">
          <button type="button" onClick={() => handleNavClick('home')} aria-label="Sensix home" className="rounded-control">
            <BrandMark />
          </button>

          {/* Desktop navigation */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.id)}
                onMouseLeave={() => item.children && setActiveDropdown(null)}
                onBlur={(e) => {
                  if (item.children && !e.currentTarget.contains(e.relatedTarget as Node)) setActiveDropdown(null);
                }}
              >
                {item.isButton ? (
                  <button type="button" onClick={() => handleNavClick(item.id)} className="btn btn-primary ml-3">
                    {item.label}
                  </button>
                ) : item.children ? (
                  <button
                    type="button"
                    aria-expanded={activeDropdown === item.id}
                    aria-haspopup="true"
                    onClick={() => setActiveDropdown(activeDropdown === item.id ? null : item.id)}
                    className={`flex h-10 items-center gap-1 rounded-control px-3 text-sm font-medium transition-colors hover:bg-surface hover:text-ink ${
                      isActive(item) ? 'text-ink' : 'text-ink-muted'
                    }`}
                  >
                    {item.label}
                    <IconChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-150 ${activeDropdown === item.id ? 'rotate-180' : ''}`}
                    />
                  </button>
                ) : (
                  <button
                    type="button"
                    aria-current={currentPage === item.id ? 'page' : undefined}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex h-10 items-center rounded-control px-3 text-sm font-medium transition-colors hover:bg-surface hover:text-ink ${
                      isActive(item) ? 'text-ink' : 'text-ink-muted'
                    }`}
                  >
                    {item.label}
                  </button>
                )}

                {isActive(item) && !item.isButton && (
                  <span aria-hidden="true" className="absolute inset-x-3 -bottom-[13px] h-0.5 bg-brand" />
                )}

                {item.children && activeDropdown === item.id && (
                  <div className="absolute left-0 top-full w-60 pt-2">
                    <ul className="animate-pop rounded-card border border-line bg-paper p-1.5 shadow-float">
                      {item.children.map((child) => (
                        <li key={child.id}>
                          <button
                            type="button"
                            aria-current={currentPage === child.id ? 'page' : undefined}
                            onClick={() => handleNavClick(child.id)}
                            className={`flex min-h-[40px] w-full items-center rounded-control px-3 text-left text-sm transition-colors hover:bg-surface hover:text-ink ${
                              currentPage === child.id ? 'font-semibold text-brand' : 'text-ink-muted'
                            }`}
                          >
                            {child.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="-mr-2 flex h-11 w-11 items-center justify-center rounded-control text-ink hover:bg-surface lg:hidden"
            aria-label="Open menu"
            aria-expanded={isOpen}
          >
            <IconMenu className="h-6 w-6" />
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-[60] flex animate-pop flex-col bg-paper lg:hidden"
        >
          <div className="container-page flex h-16 shrink-0 items-center justify-between border-b border-line">
            <button type="button" onClick={() => handleNavClick('home')} aria-label="Sensix home" className="rounded-control">
              <BrandMark />
            </button>
            <button
              type="button"
              autoFocus
              onClick={() => setIsOpen(false)}
              className="-mr-2 flex h-11 w-11 items-center justify-center rounded-control text-ink hover:bg-surface"
              aria-label="Close menu"
            >
              <IconX className="h-6 w-6" />
            </button>
          </div>

          <div className="container-page flex-1 overflow-y-auto py-6">
            <ul className="divide-y divide-line">
              {navItems
                .filter((item) => !item.isButton)
                .map((item) => (
                  <li key={item.label} className="py-1">
                    {item.children ? (
                      <div className="py-3">
                        <p className="text-sm font-medium text-ink-subtle">{item.label}</p>
                        <ul className="mt-1">
                          {item.children.map((child) => (
                            <li key={child.id}>
                              <button
                                type="button"
                                onClick={() => handleNavClick(child.id)}
                                className={`flex min-h-[44px] w-full items-center text-left font-display text-xl font-semibold ${
                                  currentPage === child.id ? 'text-brand' : 'text-ink'
                                }`}
                              >
                                {child.label}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => handleNavClick(item.id)}
                        className={`flex min-h-[56px] w-full items-center text-left font-display text-2xl font-semibold ${
                          currentPage === item.id ? 'text-brand' : 'text-ink'
                        }`}
                      >
                        {item.label}
                      </button>
                    )}
                  </li>
                ))}
            </ul>

            <button type="button" onClick={() => handleNavClick('contact')} className="btn btn-primary mt-6 w-full">
              Contact Us
            </button>
            <p className="meta mt-8">Innovate, Connect, Grow</p>
            <p className="meta">© {new Date().getFullYear()} Sensix Global Inc.</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
