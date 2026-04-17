// Sams 3PL Solutions — Brand Constants
// Source: _design-standards/skills/01-brand-system.md
// These values are identical across all 12 city sites.

export const brand = {
  name: 'Sams 3PL Solutions',
  tagline: 'A Sams 3PL Solutions Company',
  phone: { display: '+1 (419) 745-9492', href: 'tel:+14197459492' },
  email: { display: 'operations@sams3pl.com', href: 'mailto:operations@sams3pl.com' },
  hours: '24/7 Operations Support',

  colors: {
    brickRed: '#8B1F24',
    petrolBlue: '#234B5E',
    offWhite: '#F7F4EF',
  },

  // Network city sites (for footer links — Non-Negotiable #24)
  network: [
    { name: 'Toledo', domain: 'toledo3pl.com', state: 'OH' },
    { name: 'Huntsville', domain: 'huntsville3pl.com', state: 'AL' },
    { name: 'Houston', domain: 'houston3pl.com', state: 'TX' },
    { name: 'Detroit', domain: 'detroit3pl.com', state: 'MI' },
    { name: 'Miami-Dade', domain: 'miamidade3pl.com', state: 'FL' },
    { name: 'Seattle', domain: 'seattle3pl.com', state: 'WA' },
    { name: 'Boston', domain: 'boston3pl.com', state: 'MA' },
    { name: 'New York', domain: 'newyork3pl.com', state: 'NY' },
    { name: 'Savannah', domain: 'savannah3pl.com', state: 'GA' },
    { name: 'Charleston', domain: 'charleston3pl.com', state: 'SC' },
    { name: 'Chattanooga', domain: 'chattanooga3pl.com', state: 'TN' },
    { name: 'Baltimore', domain: 'baltimore3pl.com', state: 'MD' },
  ],
} as const;
