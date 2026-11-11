import React from 'react';

// Common style for the new "Architectural" icon set
// Features: Square linecaps, stroke width 1.2, sharp joins
const IconBase = ({ children, className }: { children?: React.ReactNode; className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.2" 
    strokeLinecap="square" 
    strokeLinejoin="miter" 
    className={className}
  >
    {children}
  </svg>
);

export const IconMenu = ({ className }: { className?: string }) => (
  <IconBase className={className}>
    <line x1="3" y1="8" x2="21" y2="8" />
    <line x1="3" y1="16" x2="21" y2="16" />
  </IconBase>
);

export const IconX = ({ className }: { className?: string }) => (
  <IconBase className={className}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </IconBase>
);

export const IconChevronDown = ({ className }: { className?: string }) => (
  <IconBase className={className}>
    <polyline points="6 9 12 15 18 9" />
  </IconBase>
);

export const IconArrowRight = ({ className }: { className?: string }) => (
  <IconBase className={className}>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </IconBase>
);

// Custom "Book" - Academic
export const IconBook = ({ className }: { className?: string }) => (
  <IconBase className={className}>
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    <line x1="9" y1="7" x2="15" y2="7" />
    <line x1="9" y1="11" x2="13" y2="11" />
  </IconBase>
);

// Custom "People" - Social Service
export const IconUsers = ({ className }: { className?: string }) => (
  <IconBase className={className}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </IconBase>
);

// Custom "Globe/Culture" - Identity
export const IconGlobe = ({ className }: { className?: string }) => (
  <IconBase className={className}>
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </IconBase>
);

export const IconChat = ({ className }: { className?: string }) => (
  <IconBase className={className}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </IconBase>
);

export const IconSparkles = ({ className }: { className?: string }) => (
  <IconBase className={className}>
    <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" />
  </IconBase>
);

export const IconBuilding = ({ className }: { className?: string }) => (
  <IconBase className={className}>
    <rect x="4" y="2" width="16" height="20" rx="0" />
    <line x1="9" y1="2" x2="9" y2="22" />
    <line x1="15" y1="2" x2="15" y2="22" />
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="4" y1="7" x2="20" y2="7" />
    <line x1="4" y1="17" x2="20" y2="17" />
  </IconBase>
);

export const IconMapPin = ({ className }: { className?: string }) => (
  <IconBase className={className}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </IconBase>
);

export const IconSchool = ({ className }: { className?: string }) => (
  <IconBase className={className}>
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </IconBase>
);

export const IconShieldCheck = ({ className }: { className?: string }) => (
  <IconBase className={className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </IconBase>
);

export const IconDocument = ({ className }: { className?: string }) => (
  <IconBase className={className}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <line x1="10" y1="9" x2="8" y2="9" />
  </IconBase>
);

export const IconAward = ({ className }: { className?: string }) => (
  <IconBase className={className}>
    <circle cx="12" cy="8" r="7" />
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
  </IconBase>
);

export const IconTarget = ({ className }: { className?: string }) => (
  <IconBase className={className}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </IconBase>
);

export const IconLightBulb = ({ className }: { className?: string }) => (
  <IconBase className={className}>
    <path d="M9 18h6" />
    <path d="M10 22h4" />
    <path d="M15.09 14c.18-.9.18-2.5 0-3.33a6 6 0 0 0-6.18 0c-.18.83-.18 2.43 0 3.33C9.76 15.75 10 22 10 22h4s.24-6.25 1.09-8z" />
  </IconBase>
);