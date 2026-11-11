import React from 'react';

// Small shared building blocks used by every page.

export const initialsOf = (name: string) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('');

/** Title block at the top of every inner page. */
export const PageHeader: React.FC<{
  title: string;
  lead?: string;
  section?: string;
  children?: React.ReactNode;
}> = ({ title, lead, section, children }) => (
  <header className="border-b border-line bg-surface">
    <div className="container-page py-12 md:py-20">
      {section && <p className="mb-4 text-sm font-medium text-brand">{section}</p>}
      <h1 className="title-page max-w-[18ch]">{title}</h1>
      {lead && <p className="lead mt-5">{lead}</p>}
      {children}
    </div>
  </header>
);

/** Heading row for a section, with an optional action on the right. */
export const SectionHeading: React.FC<{
  title: string;
  lead?: string;
  action?: React.ReactNode;
  className?: string;
}> = ({ title, lead, action, className = '' }) => (
  <div className={`mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between ${className}`}>
    <div>
      <h2 className="title-section max-w-[20ch]">{title}</h2>
      {lead && <p className="lead mt-4">{lead}</p>}
    </div>
    {action && <div className="shrink-0">{action}</div>}
  </div>
);

const artwork = [
  // 0: sun over a slope
  <>
    <circle cx="290" cy="105" r="46" fillOpacity="0.9" />
    <path d="M0 300V210l150-70 250 120v40z" fillOpacity="0.28" />
    <path d="M0 300v-40l230-90 170 70v60z" fillOpacity="0.5" />
  </>,
  // 1: rings from the corner
  <>
    <circle cx="400" cy="300" r="250" fillOpacity="0.16" />
    <circle cx="400" cy="300" r="175" fillOpacity="0.28" />
    <circle cx="400" cy="300" r="100" fillOpacity="0.85" />
    <rect x="40" y="44" width="96" height="12" rx="6" fillOpacity="0.5" />
  </>,
  // 2: blocks
  <>
    <rect x="40" y="150" width="96" height="150" fillOpacity="0.3" />
    <rect x="152" y="80" width="96" height="220" fillOpacity="0.85" />
    <rect x="264" y="190" width="96" height="110" fillOpacity="0.5" />
    <circle cx="88" cy="96" r="26" fillOpacity="0.5" />
  </>,
  // 3: half discs
  <>
    <path d="M60 300a140 140 0 0 1 280 0z" fillOpacity="0.85" />
    <path d="M250 0a110 110 0 0 0 150 102V0z" fillOpacity="0.3" />
    <rect x="40" y="60" width="130" height="12" rx="6" fillOpacity="0.5" />
    <rect x="40" y="86" width="80" height="12" rx="6" fillOpacity="0.3" />
  </>,
];

/**
 * Themed stand-in for a photo. It is drawn with the brand tokens, so it
 * recolours with the palette. Pass a different `seed` to vary the artwork.
 */
export const Placeholder: React.FC<{ seed?: number; label?: string; className?: string }> = ({
  seed = 0,
  label,
  className = '',
}) => (
  <div
    role={label ? 'img' : undefined}
    aria-label={label}
    aria-hidden={label ? undefined : true}
    className={`relative overflow-hidden bg-brand-soft ${className}`}
  >
    <svg
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 h-full w-full"
      fill="rgb(var(--brand))"
      aria-hidden="true"
    >
      {artwork[Math.abs(seed) % artwork.length]}
    </svg>
  </div>
);

/** Shows `src` when there is one, otherwise the themed placeholder. */
export const Media: React.FC<{ src?: string; alt: string; seed?: number; className?: string }> = ({
  src,
  alt,
  seed,
  className = '',
}) =>
  src ? (
    <img src={src} alt={alt} loading="lazy" className={`object-cover ${className}`} />
  ) : (
    <Placeholder seed={seed} label={alt} className={className} />
  );

/** Portrait stand-in: the person's initials on a brand tint. */
export const Portrait: React.FC<{ name: string; src?: string; className?: string }> = ({
  name,
  src,
  className = '',
}) =>
  src ? (
    <img src={src} alt={name} loading="lazy" className={`object-cover ${className}`} />
  ) : (
    <div
      role="img"
      aria-label={name}
      className={`relative flex items-end overflow-hidden bg-brand-soft ${className}`}
    >
      <span
        aria-hidden="true"
        className="absolute -right-[12%] -top-[10%] aspect-square w-[70%] rounded-full bg-brand/10"
      />
      <span
        aria-hidden="true"
        className="relative p-5 font-display text-[clamp(3.5rem,9vw,6rem)] font-bold leading-none tracking-tighter text-brand"
      >
        {initialsOf(name)}
      </span>
    </div>
  );

/** Round initials badge for authors and committee members. */
export const Avatar: React.FC<{ name: string; className?: string }> = ({ name, className = '' }) => (
  <span
    aria-hidden="true"
    className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand font-display text-sm font-semibold text-brand-contrast ${className}`}
  >
    {initialsOf(name)}
  </span>
);

const coverTones = [
  'bg-brand text-brand-contrast',
  'bg-ink text-paper',
  'bg-brand-soft text-ink',
];

/** Typographic cover for a magazine or journal issue. */
export const Cover: React.FC<{
  series: string;
  title: string;
  note?: string;
  tone?: number;
  src?: string;
  className?: string;
}> = ({ series, title, note, tone = 0, src, className = '' }) =>
  src ? (
    <img src={src} alt={`${series} ${title}`} loading="lazy" className={`aspect-[3/4] w-full rounded-control object-cover ${className}`} />
  ) : (
    <div
      className={`relative flex aspect-[3/4] w-full flex-col justify-between overflow-hidden rounded-control p-5 ${
        coverTones[tone % coverTones.length]
      } ${className}`}
    >
      <span
        aria-hidden="true"
        className="absolute -bottom-[18%] -right-[22%] aspect-square w-[85%] rounded-full border-[18px] border-current opacity-15"
      />
      <span className="relative text-sm font-semibold">{series}</span>
      <span className="relative">
        <span className="block font-display text-[clamp(2.5rem,5vw,3.5rem)] font-bold leading-none tracking-tighter">
          {title}
        </span>
        {note && <span className="mt-2 block text-sm opacity-80">{note}</span>}
      </span>
    </div>
  );
