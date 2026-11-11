import React, { useState } from 'react';
import { BrandMark } from './Navbar';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

// Preset palettes defined in index.css. The switcher is a preview aid for
// the template; remove <PaletteSwitcher /> below once you have picked one.
const palettes = [
  { id: 'cobalt', label: 'Cobalt' },
  { id: 'forest', label: 'Forest' },
  { id: 'ember', label: 'Ember' },
];

const PaletteSwitcher: React.FC = () => {
  const [active, setActive] = useState(() => document.documentElement.dataset.theme || 'cobalt');

  const apply = (id: string) => {
    document.documentElement.dataset.theme = id;
    setActive(id);
  };

  return (
    <div role="group" aria-label="Preview palette" className="flex items-center gap-3">
      <span>Palette</span>
      <div className="flex items-center gap-1">
        {palettes.map((palette) => (
          <button
            key={palette.id}
            type="button"
            data-theme={palette.id}
            aria-pressed={active === palette.id}
            onClick={() => apply(palette.id)}
            className={`flex min-h-[36px] items-center gap-2 rounded-full border px-3 text-sm transition-colors hover:text-white ${
              active === palette.id ? 'border-white/60 text-white' : 'border-transparent'
            }`}
          >
            <span aria-hidden="true" className="h-3.5 w-3.5 rounded-full bg-brand ring-1 ring-white/40" />
            {palette.label}
          </button>
        ))}
      </div>
    </div>
  );
};

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  const linkClass = 'flex min-h-[36px] items-center text-left text-white/70 transition-colors hover:text-white';

  return (
    <footer className="on-dark">
      {/* Call to action */}
      <div className="bg-brand text-brand-contrast">
        <div className="container-page flex flex-col gap-8 py-14 md:flex-row md:items-center md:justify-between md:py-16">
          <div>
            <h2 className="title-section text-brand-contrast">Join the Movement</h2>
            <p className="mt-3 text-lg opacity-90">Be part of the legacy. Shape the future of our community.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <button type="button" onClick={() => setCurrentPage('contact')} className="btn btn-light">
              Become a Member
            </button>
            <button type="button" onClick={() => setCurrentPage('contact')} className="btn btn-ghost-light">
              Donate
            </button>
          </div>
        </div>
      </div>

      <div className="bg-ink text-white">
        <div className="container-page grid grid-cols-2 gap-x-8 gap-y-12 py-16 lg:grid-cols-12">
          <div className="col-span-2 lg:col-span-5">
            <button type="button" onClick={() => setCurrentPage('home')} aria-label="Sensix home" className="rounded-control">
              <BrandMark onDark />
            </button>
            <p className="mt-5 max-w-sm text-white/70">
              Established in 2010, Sensix is the premier community dedicated to the educational, social, and technological upliftment of the global community.
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-1">
              {['Facebook', 'Twitter', 'Instagram', 'YouTube'].map((social) => (
                <li key={social}>
                  <a href="#" className={`${linkClass} underline decoration-white/30 underline-offset-4`}>
                    {social}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="The legacy" className="lg:col-span-2">
            <h3 className="mb-3 font-sans text-sm font-semibold text-white">The Legacy</h3>
            <ul>
              <li><button type="button" onClick={() => setCurrentPage('history')} className={linkClass}>Our History</button></li>
              <li><button type="button" onClick={() => setCurrentPage('registration')} className={linkClass}>Constitution & Reg.</button></li>
              <li><button type="button" onClick={() => setCurrentPage('anthem')} className={linkClass}>Brand Anthem</button></li>
              <li><button type="button" onClick={() => setCurrentPage('about-us')} className={linkClass}>Vision & Mission</button></li>
            </ul>
          </nav>

          <nav aria-label="The body" className="lg:col-span-2">
            <h3 className="mb-3 font-sans text-sm font-semibold text-white">The Body</h3>
            <ul>
              <li><button type="button" onClick={() => setCurrentPage('impact')} className={linkClass}>Executive Committee</button></li>
              <li><button type="button" onClick={() => setCurrentPage('impact')} className={linkClass}>Regional Hubs</button></li>
              <li><button type="button" onClick={() => setCurrentPage('impact')} className={linkClass}>Chapters & Units</button></li>
              <li><button type="button" onClick={() => setCurrentPage('publications')} className={linkClass}>Publications</button></li>
            </ul>
          </nav>

          <div className="col-span-2 lg:col-span-3">
            <h3 className="mb-3 font-sans text-sm font-semibold text-white">Reach Us</h3>
            <address className="space-y-3 not-italic text-white/70">
              <p>Sensix Tower,<br />Innovation District,<br />New York, NY 10001</p>
              <p>
                <button type="button" onClick={() => setCurrentPage('contact')} className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white">
                  info@sensix.org
                </button>
              </p>
              <p className="text-white">+1 555 123 4567</p>
            </address>
          </div>
        </div>

        <div className="border-t border-white/15">
          <div className="container-page flex flex-col gap-4 pb-24 pt-6 text-sm text-white/70 lg:flex-row lg:items-center lg:justify-between">
            <p>&copy; {new Date().getFullYear()} Sensix Global Inc.</p>
            <PaletteSwitcher />
            <div className="flex gap-6">
              <button type="button" onClick={() => setCurrentPage('home')} className="hover:text-white">Privacy</button>
              <button type="button" onClick={() => setCurrentPage('home')} className="hover:text-white">Terms</button>
              <button type="button" onClick={() => setCurrentPage('home')} className="hover:text-white">Sitemap</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
