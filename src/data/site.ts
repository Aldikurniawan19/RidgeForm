export const siteConfig = {
  brandName: 'RidgeForm',
  legalName: 'RidgeForm Roofing Systems',
  heroKicker: 'RIDGEFORM ROOFING',
  url: 'https://ridgeform.example',
  email: 'hello@ridgeform.example',
  phoneDisplay: '+1 (555) 234-8910',
  phoneHref: '+15552348910',
  addressLine1: '420 Oakridge Industrial Pkwy',
  addressLine2: 'Suite 210 · Regional Dispatch',
  businessHours: 'Mon - Fri: 7:00 AM - 6:00 PM\nEmergency Response: 24/7',
  defaultTitle: 'RidgeForm — Architectural & Commercial Roofing Systems',
  defaultDescription:
    'RidgeForm delivers precision-engineered metal roofing, residential roof replacements, and structural commercial waterproofing backed by long-term workmanship warranties.',
  ogImage: '/images/hero-roof.jpg',
  socials: [
    { label: 'Facebook', href: 'https://facebook.com/' },
    { label: 'X', href: 'https://x.com/' },
    { label: 'Instagram', href: 'https://www.instagram.com/' },
    { label: 'LinkedIn', href: 'https://linkedin.com/' },
  ],
};

export interface PartnerItem {
  name: string;
  tagline: string;
  markType: 'hex' | 'ridge' | 'shield' | 'grid' | 'beam' | 'arch';
}

export const partners: PartnerItem[] = [
  { name: 'NorSteel', tagline: 'Structural Alloys', markType: 'beam' },
  { name: 'ThermoTile', tagline: 'Solar Clay', markType: 'ridge' },
  { name: 'AluZinc Pro', tagline: 'Galvanized Coil', markType: 'shield' },
  { name: 'SpanFrame', tagline: 'Truss Systems', markType: 'grid' },
  { name: 'KlimaSeal', tagline: 'Weather Barrier', markType: 'hex' },
  { name: 'ZincForm', tagline: 'Architectural Fold', markType: 'arch' },
  { name: 'VetroClad', tagline: 'Composite Panels', markType: 'shield' },
  { name: 'NordicSlate', tagline: 'Stone Composite', markType: 'ridge' },
  { name: 'SolidDeck', tagline: 'Acoustic Decking', markType: 'beam' },
  { name: 'CrestCoat', tagline: 'UV Reflection', markType: 'hex' },
  { name: 'TimberCore', tagline: 'Kiln Batten', markType: 'grid' },
  { name: 'ApexFlange', tagline: 'Fastener Tech', markType: 'arch' },
];
