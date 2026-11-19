export interface WorkItem {
  category: string;
  title: string;
  slug: string;
  image: string;
  bannerImage: string;
  summary: string;
  overviewHeading: string;
  challengeTitle: string;
  challengeBody: string;
  approachTitle: string;
  approachBody: string;
  stats: { label: string; value: string }[];
  galleryImages: [string, string];
  beforeAfterPairs: { before: string; after: string }[];
}

export const works: WorkItem[] = [
  {
    category: 'HOMEOWNERS',
    title: 'Families and homeowners seeking quiet, weatherproof roofs built to last',
    slug: 'residential-homeowners-weatherproof-roofs',
    image: '/images/photos/work-homeowners.jpg',
    bannerImage: '/images/photos/journey-classic.jpg',
    summary:
      'Neighborhood home upgrades where families needed cooler interiors, zero storm leaks, and crisp architectural finishes.',
    overviewHeading:
      'Across a cluster of 38 neighboring family residences facing coastal winds and aging shingles, RidgeForm executed phased full-roof replacements featuring vented synthetic underlayment and concealed-clip steel.',
    challengeTitle: 'Weathered Shingles & Trapped Attic Heat',
    challengeBody:
      'Decades-old roof coverings suffered cracked valley flashings, lifted ridge caps, and stagnant attic temperatures. Homeowners needed reliable protection without turning their driveways into chaotic weeks-long construction zones.',
    approachTitle: 'Clean, Phased Re-Roofing in 3-Day Windows',
    approachBody:
      'Our crews laid protective canvas wraps around landscaping, replaced compromised decking planks, installed high-wind synthetic barriers, and fitted matte charcoal standing-seam panels with continuous ridge ventilation.',
    stats: [
      { label: 'Turnaround', value: '12 Days' },
      { label: 'Protected Area', value: '280m²' },
      { label: 'Cooling Gain', value: '24%' },
      { label: 'Workmanship', value: '20 Years' },
    ],
    galleryImages: ['/images/photos/roofer-measuring.jpg', '/images/photos/roofer-crew.jpg'],
    beforeAfterPairs: [
      { before: '/images/photos/cta-roof.jpg', after: '/images/photos/expertise-metal.jpg' },
      { before: '/images/photos/work-builders.jpg', after: '/images/photos/work-homeowners.jpg' },
      { before: '/images/photos/roofer-measuring.jpg', after: '/images/photos/journey-hillside.jpg' },
      { before: '/images/photos/expertise-certified.jpg', after: '/images/photos/process-protect.jpg' },
    ],
  },
  {
    category: 'COMMERCIAL PROPERTY',
    title: 'Businesses requiring resilient, low-maintenance flat & metal roof envelopes',
    slug: 'commercial-property-low-maintenance-roofs',
    image: '/images/photos/work-commercial.jpg',
    bannerImage: '/images/photos/service-commercial.jpg',
    summary:
      'Office parks and multi-tenant complexes upgraded with high-reflectance membranes and welded parapet flashings.',
    overviewHeading:
      'To halt recurring ceiling moisture around rooftop chiller units on an active corporate complex, RidgeForm installed a high-reflectance white membrane assembly engineered for clean drainage.',
    challengeTitle: 'Ponding Water Around Mechanical Curbs',
    challengeBody:
      'Blocked internal drains and brittle seam adhesives allowed heavy rainfall to pool around parapet walls and HVAC platforms, raising indoor humidity and risking office floor shutdowns.',
    approachTitle: 'Tapered Insulation & Heat-Welded Waterproofing',
    approachBody:
      'We re-sloped critical drainage zones using tapered polyiso board, fabricated custom aluminum parapet coping, and hot-air welded every seam around rooftop penetrations for a unified monolithic shield.',
    stats: [
      { label: 'Turnaround', value: '18 Days' },
      { label: 'Deck Span', value: '1,450m²' },
      { label: 'Energy Cut', value: '21%' },
      { label: 'System Warranty', value: '25 Years' },
    ],
    galleryImages: ['/images/photos/expertise-coolroof.jpg', '/images/photos/service-industrial.jpg'],
    beforeAfterPairs: [
      { before: '/images/photos/expertise-corrugated.jpg', after: '/images/photos/work-commercial.jpg' },
      { before: '/images/photos/roofer-measuring.jpg', after: '/images/photos/service-commercial.jpg' },
      { before: '/images/photos/expertise-certified.jpg', after: '/images/photos/expertise-coolroof.jpg' },
      { before: '/images/photos/work-builders.jpg', after: '/images/photos/service-retail.jpg' },
    ],
  },
  {
    category: 'BUILDERS & CONTRACTORS',
    title: 'Developers and general contractors needing dependable roofing execution',
    slug: 'builders-and-contractors-structural-partner',
    image: '/images/photos/work-builders.jpg',
    bannerImage: '/images/photos/expertise-certified.jpg',
    summary:
      'Custom new-build estates and timber-frame projects where framing milestones stay locked on schedule.',
    overviewHeading:
      'Working directly from architectural CAD sections alongside site superintendents, RidgeForm pre-engineered tapered batten layouts and custom flashings to dry-in new luxury builds rapidly.',
    challengeTitle: 'Complex Roof Geometries & Tight Dry-In Windows',
    approachTitle: 'Prefabricated Flashings & Coordinated Site Sequences',
    challengeBody:
      'Multi-gable intersections, recessed skylights, and cantilevered overhangs frequently stall finishing trades when custom metalwork lags behind truss erection.',
    approachBody:
      'By pre-measuring truss planes digitally and fabricating box valleys and drip edges off-site before arrival, our crew sealed the entire building envelope right behind frame inspection.',
    stats: [
      { label: 'Dry-In Time', value: '5 Days' },
      { label: 'Roof Plane', value: '540m²' },
      { label: 'Waste Cut', value: '30%' },
      { label: 'Workmanship', value: '20 Years' },
    ],
    galleryImages: ['/images/photos/process-diagnosis.jpg', '/images/photos/expertise-metal.jpg'],
    beforeAfterPairs: [
      { before: '/images/photos/work-builders.jpg', after: '/images/photos/service-residential.jpg' },
      { before: '/images/photos/expertise-certified.jpg', after: '/images/photos/about-hero.jpg' },
      { before: '/images/photos/process-install.jpg', after: '/images/photos/journey-classic.jpg' },
      { before: '/images/photos/roofer-crew.jpg', after: '/images/photos/process-protect.jpg' },
    ],
  },
];
