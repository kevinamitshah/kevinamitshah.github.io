// Single source of truth for site metadata, navigation, and social links.
// Adding a new social profile (Reddit, Telegram, Discord, Google Scholar, ...)
// later is a one-line change here — the components read from these arrays.

export const site = {
  name: 'Kevin A. Shah',
  title: 'Kevin A. Shah — AI Engineer',
  description:
    'AI engineer building applied AI systems for real industry problems. Early engineer on aiRA, Capillary’s agentic AI platform.',
  url: 'https://kevinamitshah.com',
  email: 'kevinamitshah@gmail.com',
  location: 'Bengaluru, India',
} as const;

export interface NavItem {
  label: string;
  href: string;
  // external links (like the résumé PDF) get target=_blank
  external?: boolean;
}

export const nav: NavItem[] = [
  { label: 'Journey', href: '/about' },
  { label: 'Work', href: '/work' },
  { label: 'Writing', href: '/blog' },
  { label: 'Résumé', href: '/resume.pdf', external: true },
];

export interface Social {
  // `name` must match an icon key in SocialLinks.astro
  name: 'github' | 'x' | 'linkedin' | 'substack' | 'email';
  label: string;
  href: string;
}

export const socials: Social[] = [
  { name: 'github', label: 'GitHub', href: 'https://github.com/kevinamitshah' },
  { name: 'x', label: 'X', href: 'https://x.com/kevinamitshah' },
  { name: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com/in/kevinamitshah' },
  { name: 'substack', label: 'Substack', href: 'https://substack.com/@kevinamitshah' },
  { name: 'email', label: 'Email', href: 'mailto:kevinamitshah@gmail.com' },
];
