// Sams 3PL Solutions — Navigation Data
// Source: _design-standards/skills/01-brand-system.md (Non-Negotiable #22)
// Nav order: Logo + tagline → Industries → Services → City link → About → Blog → Connect

import { industries } from '@data/industries';

export interface NavChild {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: readonly NavChild[];
}

// Service children — mirrors the 7 service pages under /services/
const serviceChildren: readonly NavChild[] = [
  { label: 'Warehousing', href: '/services/warehousing/' },
  { label: 'Fulfillment & Distribution', href: '/services/fulfillment/' },
  { label: 'Cross-Docking', href: '/services/cross-docking/' },
  { label: 'Transloading', href: '/services/transloading/' },
  { label: 'Transportation & Freight', href: '/services/transportation/' },
  { label: 'Kitting & Assembly', href: '/services/kitting/' },
  { label: 'Returns Processing', href: '/services/returns/' },
  { label: 'ITAR Warehousing', href: '/services/itar-warehousing/' },
];

// Industry children — auto-derived from industries.ts (single source of truth)
const industryChildren: readonly NavChild[] = industries.map((i) => ({
  label: i.navLabel,
  href: `/industries/${i.slug}/`,
}));

export const navigation: readonly NavItem[] = [
  { label: 'Industries', href: '/industries/', children: industryChildren },
  { label: 'Services', href: '/services/', children: serviceChildren },
  { label: 'Huntsville', href: '/huntsville/' },
  { label: 'About', href: '/about/' },
  { label: 'Blog', href: '/blog/' },
];

// The CTA is always "Connect" — Non-Negotiable #17
export const ctaNav = {
  label: 'Connect',
  href: '/connect/',
} as const;

// Footer-only links (legal, etc.)
export const footerLinks = [
  { label: 'Privacy Policy', href: '/privacy/' },
  { label: 'Terms of Service', href: '/terms/' },
  { label: 'Cookie Policy', href: '/cookies/' },
  { label: 'Accessibility', href: '/accessibility/' },
] as const;
