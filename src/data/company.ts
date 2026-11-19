import type { IconName } from './icons';

export const heroData = {
  headline: 'Dependable Roofing Built for Every Season',
  summary:
    'Architectural metal roofing, residential replacements, and commercial waterproofing backed by certified crews and multi-decade warranties.',
  ctaLabel: 'Free Inspection',
  ctaHref: '/contact',
  spotlight: {
    title: 'Storm Recovery',
    text: 'Rapid structural sealing & restoration mobilized within forty-eight hours.',
    linkLabel: 'Our Approach',
    linkHref: '/about',
    images: [
      {
        src: '/images/photos/expertise-metal.jpg',
        alt: 'Dark standing-seam architectural metal roof with warm soffit lights',
      },
      {
        src: '/images/photos/roofer-crew.jpg',
        alt: 'Roofing specialists installing battens and roof tiles in sunlight',
      },
      {
        src: '/images/photos/service-residential.jpg',
        alt: 'Completed modern residential home with standing-seam pitched roof',
      },
    ],
  },
};

export const aboutOverview = {
  kicker: 'ABOUT RIDGEFORM',
  statement:
    'With over 15 years of hands-on structural roofing experience, we pair architectural precision with honest pricing—protecting family homes and commercial buildings across every climate.',
  ratingText: 'Rated 4.9/5 by verified property owners',
  avatars: [
    { src: '/images/photos/client-1.jpg', alt: 'Homeowner client portrait' },
    { src: '/images/photos/client-2.jpg', alt: 'Property manager client portrait' },
    { src: '/images/photos/client-3.jpg', alt: 'Senior homeowner portrait' },
  ],
  stats: [
    { number: '15+', label: 'Years in Service' },
    { number: '480+', label: 'Roofs Completed' },
    { number: '4.9/5', label: 'Client Satisfaction' },
  ],
};

export const expertiseItems = [
  {
    id: 1,
    number: '01.',
    title: 'Standing-Seam & Corrugated Steel',
    summary:
      'High-tensile ribbed and concealed-fastener steel panels delivering lightweight structural strength with crisp shadow lines.',
    image: '/images/photos/expertise-corrugated.jpg',
    alt: 'Corrugated and ribbed sheet metal roof detail with crisp shadows',
  },
  {
    id: 2,
    number: '02.',
    title: 'Structural Timber & Alloy Certified',
    summary:
      'Precision-engineered truss bracing and aluminum-zinc alloys installed to strict regional wind-uplift standards.',
    image: '/images/photos/expertise-certified.jpg',
    alt: 'Precision timber roof framing trusses against blue sky',
  },
  {
    id: 3,
    number: '03.',
    title: 'Architectural Metal Systems',
    summary:
      'Custom-profiled matte black, bronze, and zinc finishes tailored for contemporary residential homes and hospitality buildings.',
    image: '/images/photos/expertise-metal.jpg',
    alt: 'Modern A-frame cabin featuring dark standing-seam metal roof',
  },
  {
    id: 4,
    number: '04.',
    title: 'Cool-Roof Solar Reflectance',
    summary:
      'High-albedo coatings and white membranes designed to deflect solar radiation and lower indoor HVAC demand.',
    image: '/images/photos/expertise-coolroof.jpg',
    alt: 'Bright white reflective modern roof architecture with turbine vent',
  },
];

export const processSteps = [
  {
    step: 'Step 1',
    title: 'Field Inspection',
    summary:
      'Specialists audit existing decking, valleys, flashing seams, and ventilation balance with photographic documentation.',
    image: '/images/photos/process-inspection.jpg',
  },
  {
    step: 'Step 2',
    title: 'Technical Spec',
    summary:
      'You receive an itemized material specification, drainage calculation, and transparent fixed schedule before work starts.',
    image: '/images/photos/process-diagnosis.jpg',
  },
  {
    step: 'Step 3',
    title: 'Certified Execution',
    summary:
      'In-house installers execute substrate prep, breathable underlayment, and panel fastening with full PPE safety protocols.',
    image: '/images/photos/process-install.jpg',
  },
  {
    step: 'Step 4',
    title: 'Warranty Handover',
    summary:
      'A multi-point flood and fastener sign-off ensures spotless clean-up and activates your written 20-year workmanship warranty.',
    image: '/images/photos/process-protect.jpg',
  },
];

export const whyChooseCards: { icon: IconName; title: string; summary: string }[] = [
  {
    icon: 'compass',
    title: 'Licensed In-House Crews',
    summary: 'Every installation is performed by trained, safety-certified specialists—never unvetted subcontractors.',
  },
  {
    icon: 'wallet',
    title: 'Line-Item Transparent Quotes',
    summary: 'Clear material specifications and locked project pricing with zero surprise change-order markups.',
  },
  {
    icon: 'badge-check',
    title: 'Engineered Code Compliance',
    summary: 'Wind-uplift anchoring, ice/water valley guards, and tested ventilation ratios exceed building codes.',
  },
  {
    icon: 'award',
    title: 'Architectural-Grade Alloys',
    summary: 'We source coil steel, breathable synthetics, and PVDF coatings solely from audited manufacturing mills.',
  },
  {
    icon: 'shield-check',
    title: '20-Year Workmanship Coverage',
    summary: 'Our seams, flashings, and penetrations are backed by comprehensive written warranty protection.',
  },
  {
    icon: 'bolt',
    title: '24/7 Emergency Response',
    summary: 'Active leak or sudden wind damage? Rapid-response teams mobilize fast to shield your interior.',
  },
];

export const testimonials = [
  {
    name: 'Claire Donovan',
    role: 'Homeowner · Oakridge Heights',
    grade: '5.0',
    image: '/images/photos/client-1.jpg',
    quote:
      '“After heavy autumn gales damaged our rear valley, RidgeForm inspected the rafters the very next morning. Their crew replaced the roof in three clean days without leaving a single stray nail in our garden.”',
  },
  {
    name: 'Henrik Kusuma',
    role: 'Facilities Director · Harborline Logistics',
    grade: '5.0',
    image: '/images/photos/client-2.jpg',
    quote:
      '“What earned our trust was the clarity of their engineering report. Instead of pushing a premature full replacement, they mapped every wet curb with thermal scans and fixed our flat warehouse envelope ahead of budget.”',
  },
  {
    name: 'Margaret Sullivan',
    role: 'Commercial Landlord',
    grade: '5.0',
    image: '/images/photos/client-3.jpg',
    quote:
      '“Our tenants stayed open every single day of the installation. Their communication was calm, itemized invoices matched the quote to the cent, and indoor cooling costs dropped noticeably right away.”',
  },
];

export const faqItems = [
  {
    question: 'What property types does RidgeForm service?',
    answer:
      'We serve individual homeowners, retail plazas, corporate office complexes, logistics warehouses, and custom home builders—covering full new installations, structural re-roofing, and preventive maintenance.',
  },
  {
    question: 'How do I know if I need a targeted repair or a full replacement?',
    answer:
      'During our complimentary field inspection we examine decking moisture, fastener condition, flashing seams, and ventilation. If isolated patching can restore 10+ years of performance, we recommend the repair honestly—never upselling unnecessary replacement.',
  },
  {
    question: 'How long does a typical residential or commercial installation take?',
    answer:
      'Most single-family home roofs are stripped, inspected, dried-in, and completed within 2 to 4 working days. Multi-unit commercial or wide-span warehouse upgrades are phased over 1 to 3 weeks without disrupting daily business below.',
  },
  {
    question: 'What warranty coverage protects my investment?',
    answer:
      'Every full system installation includes both a 30-to-50-year manufacturer material finish warranty and RidgeForm’s transferable 20-year written workmanship warranty covering seams, valleys, and penetrations.',
  },
  {
    question: 'How do you protect landscaping, driveways, and building tenants during work?',
    answer:
      'Crews stage heavy tarpaulins over flowerbeds, position rolling dump trailers carefully off lawns, cover active HVAC intakes, and perform dual magnetic ground sweeps at the end of every shift.',
  },
  {
    question: 'Can you assist with energy-efficient cool roofs or solar-ready framing?',
    answer:
      'Yes. We install infrared-reflective PVDF metal coatings, high-albedo white TPO membranes, and clamp-mounted standing-seam profiles that accept solar panel rails cleanly without drilling roof penetrations.',
  },
];

export const journeyMilestones = [
  {
    id: 'journey-2009',
    year: '2009',
    image: '/images/photos/journey-classic.jpg',
    text: 'Founded as an independent family crew specializing in traditional shingle replacements and custom sheet-metal chimney flashings for neighborhood homes.',
  },
  {
    id: 'journey-2013',
    year: '2013',
    image: '/images/photos/journey-hillside.jpg',
    text: 'Expanded into custom standing-seam metal fabrication, bringing architectural zinc and aluminum-zinc profiles to modern hillside residences.',
  },
  {
    id: 'journey-2017',
    year: '2017',
    image: '/images/photos/expertise-corrugated.jpg',
    text: 'Launched our commercial envelope division serving logistics warehouses, offices, and retail centers with heat-welded TPO and box-rib steel.',
  },
  {
    id: 'journey-2021',
    year: '2021',
    image: '/images/photos/process-diagnosis.jpg',
    text: 'Integrated infrared moisture thermography, aerial slope modeling, and itemized digital specifications across every inspection.',
  },
  {
    id: 'journey-2026',
    year: '2026',
    image: '/images/photos/about-hero.jpg',
    text: 'Over 480 protected residential and commercial roofs completed across the region with a 4.9/5 verified client rating and 24/7 emergency dispatch.',
  },
];

export const teamMembers = [
  { name: 'Daniel Vermeer', role: 'Founder & Managing Principal', image: '/images/photos/team-1.jpg' },
  { name: 'Nadia Tanuwijaya', role: 'Director of Operations', image: '/images/photos/team-2.jpg' },
  { name: 'Rohan Kulkarni', role: 'Lead Envelope Engineer', image: '/images/photos/team-3.jpg' },
  { name: 'Mei-Ling Chow', role: 'Chief Estimator & Procurement', image: '/images/photos/team-4.jpg' },
  { name: 'Amara Okafor', role: 'Structural Safety Inspector', image: '/images/photos/team-5.jpg' },
  { name: 'Tariq Mansoor', role: 'Senior Field Superintendent', image: '/images/photos/team-6.jpg' },
];
