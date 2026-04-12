// Sams 3PL Solutions — Navigation Data
// Source: _design-standards/skills/01-brand-system.md (Non-Negotiable #22)
// Nav order: Logo + tagline → Industries → Services → City link → About → Blog → Connect

export const navigation = [
  { label: 'Industries', href: '/industries/' },
  { label: 'Services', href: '/services/' },
  { label: 'Huntsville', href: '/about/#why-huntsville' },
  { label: 'About', href: '/about/' },
  { label: 'Blog', href: '/blog/' },
] as const;

// The CTA is always "Connect" — Non-Negotiable #17
export const ctaNav = {
  label: 'Connect',
  href: '/connect/',
} as const;

// Footer-only links (legal, etc.)
export const footerLinks = [
  { label: 'Privacy Policy', href: '/privacy/' },
  { label: 'Terms of Service', href: '/terms/' },
] as const;
