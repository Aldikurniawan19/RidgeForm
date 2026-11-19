export interface ServiceItem {
  number: string;
  total: string;
  title: string;
  slug: string;
  image: string;
  statNumber: string;
  statLabel: string;
  summary: string;
  overviewHeading: string;
  overviewNote: string;
  highlights: string[];
  solutions: {
    icon: 'layers' | 'shield-check' | 'wrench' | 'bolt';
    title: string;
    description: string;
  }[];
  materials: {
    icon: 'home' | 'shield-check' | 'layers' | 'sun';
    title: string;
    description: string;
  }[];
}

export const services: ServiceItem[] = [
  {
    number: '01',
    total: '04',
    title: 'Commercial Roofing',
    slug: 'commercial-roofing',
    image: '/images/photos/service-commercial.jpg',
    statNumber: '99%',
    statLabel: 'On-Schedule Completion',
    summary:
      'Engineered low-slope membranes, standing-seam decks, and insulated envelope upgrades designed to protect offices and multi-tenant facilities with minimal operational downtime.',
    overviewHeading:
      'At RidgeForm, we engineer commercial roofing assemblies focused on thermal stability, watertight detailing, and predictable lifecycle maintenance for active properties.',
    overviewNote:
      'Every system is detailed around parapet drainage, HVAC curbs, and wind-uplift compliance.',
    highlights: [
      'Standing-Seam Metal Retrofits',
      'TPO & Cool-Roof Membranes',
      'Parapet & Flashing Waterproofing',
      'Preventive Asset Inspections',
    ],
    solutions: [
      {
        icon: 'layers',
        title: 'Membrane & Metal Retrofits',
        description:
          'Upgrade aging flat roofs with reflective TPO membranes or concealed-fastener steel panels rated for severe weather.',
      },
      {
        icon: 'shield-check',
        title: 'Leak Tracing & Sealing',
        description:
          'Thermal moisture scanning pinpoints trapped water beneath membranes before minor breaches damage interior ceilings.',
      },
      {
        icon: 'wrench',
        title: 'Preventive Maintenance Plans',
        description:
          'Bi-annual drain clearing, seam auditing, and flashing tune-ups keep manufacturer warranties fully valid.',
      },
      {
        icon: 'bolt',
        title: 'Emergency Storm Stabilization',
        description:
          'Rapid-response crews secure wind-lifted edges and deck penetrations around the clock after severe storms.',
      },
    ],
    materials: [
      {
        icon: 'shield-check',
        title: 'Single-Ply TPO',
        description: 'Heat-welded seams and bright UV-reflective surfaces that reduce peak cooling loads.',
      },
      {
        icon: 'layers',
        title: 'Standing-Seam Steel',
        description: 'Concealed clip systems built for decades of structural wind and hail resilience.',
      },
      {
        icon: 'home',
        title: 'Modified Bitumen',
        description: 'Multi-ply elastomeric reinforcement ideal for high-traffic mechanical roof decks.',
      },
      {
        icon: 'sun',
        title: 'Cool-Coat Elastics',
        description: 'Seamless elastomeric coatings that extend serviceable life without full tear-off.',
      },
    ],
  },
  {
    number: '02',
    total: '04',
    title: 'Industrial Roofing',
    slug: 'industrial-roofing',
    image: '/images/photos/service-industrial.jpg',
    statNumber: '2.5M+',
    statLabel: 'Sq Ft Protected',
    summary:
      'Heavy-gauge ribbed steel and wide-span deck reinforcement built for logistics warehouses, manufacturing plants, and temperature-controlled storage facilities.',
    overviewHeading:
      'Industrial facilities demand high-span load capacity, chemical corrosion resistance, and phased installation workflows that keep production lines moving.',
    overviewNote:
      'Engineered to protect inventory, overhead cranes, and cleanroom equipment year-round.',
    highlights: [
      'Wide-Span Warehouse Decks',
      'Corrugated Steel Cladding',
      'Corrosion & Heat Shielding',
      'Skylight & Ridge Ventilation',
    ],
    solutions: [
      {
        icon: 'layers',
        title: 'Heavy-Gauge Steel Re-Skinning',
        description:
          'Structural aluminum-zinc corrugated sheeting engineered for wide purlin spacing and heavy wind loads.',
      },
      {
        icon: 'shield-check',
        title: 'Thermal & Acoustic Insulation',
        description:
          'High-density mineral wool and foil vapor barriers stabilize floor temperatures across expansive bays.',
      },
      {
        icon: 'wrench',
        title: 'Gutter & Downspout Capacity',
        description:
          'Custom box gutters and oversized internal scuppers evacuate cloudburst runoff safely away from loading bays.',
      },
      {
        icon: 'bolt',
        title: 'Phased Zero-Shutdown Work',
        description:
          'Zoned overhead containment ensures fork-lift traffic and floor operations continue uninterrupted below.',
      },
    ],
    materials: [
      {
        icon: 'layers',
        title: 'Galvalume Profiles',
        description: 'Aluminum-zinc alloy coated panels formulated against coastal salt spray and industrial fumes.',
      },
      {
        icon: 'shield-check',
        title: 'Insulated Sandwich Panels',
        description: 'Factory-bonded PIR core decking combining speed of erection with high R-value.',
      },
      {
        icon: 'sun',
        title: 'Polycarbonate Daylight',
        description: 'UV-stabilized translucent roof panels reduce daytime lighting energy across storage aisles.',
      },
      {
        icon: 'home',
        title: 'Heavy Box Flashings',
        description: 'Custom press-braked ridge caps and expansion joints preventing seasonal thermal oil-canning.',
      },
    ],
  },
  {
    number: '03',
    total: '04',
    title: 'Retail & Hospitality',
    slug: 'retail-roofing',
    image: '/images/photos/service-retail.jpg',
    statNumber: '18%',
    statLabel: 'Avg. Cooling Savings',
    summary:
      'Architectural canopy, storefront, and hospitality roof systems combining refined street-level aesthetics with quiet, fast-turnaround installation schedules.',
    overviewHeading:
      'For retail plazas, showrooms, and boutique hospitality buildings, a roof is both a weather barrier and an architectural signature seen from the street.',
    overviewNote:
      'Scheduled off-peak crews keep customer entrances open, clean, and inviting.',
    highlights: [
      'Architectural Storefront Canopies',
      'Off-Hours Quiet Scheduling',
      'Custom Fascia & Soffit Trim',
      'Energy-Reflective Finish',
    ],
    solutions: [
      {
        icon: 'layers',
        title: 'Signature Facade Canopies',
        description:
          'Precision-folded aluminum and zinc standing-seam overhangs that elevate storefront identity.',
      },
      {
        icon: 'shield-check',
        title: 'Acoustic Sound Dampening',
        description:
          'Insulated roof build-ups cut rain impact noise above dining rooms, galleries, and boutiques.',
      },
      {
        icon: 'wrench',
        title: 'Night & Early-Morning Crews',
        description:
          'Staged deliveries and debris magnetic sweeps leave parking lots spotless before doors open.',
      },
      {
        icon: 'bolt',
        title: 'Rapid Flash & Curb Service',
        description:
          'Targeted sealing around signage mounts, grease vents, and rooftop air units.',
      },
    ],
    materials: [
      {
        icon: 'home',
        title: 'Architectural Zinc',
        description: 'Matte patinated panels offering clean modern lines and 50+ year longevity.',
      },
      {
        icon: 'sun',
        title: 'PVDF Coated Aluminum',
        description: 'Fade-resistant metallic tones backed by chalk-and-color retention guarantees.',
      },
      {
        icon: 'layers',
        title: 'EPDM Ballasted Decks',
        description: 'Reliable synthetic rubber waterproofing hidden behind clean parapet trim.',
      },
      {
        icon: 'shield-check',
        title: 'Integrated Snow & Rain Guards',
        description: 'Low-profile perimeter retention bars protecting pedestrian walkways below.',
      },
    ],
  },
  {
    number: '04',
    total: '04',
    title: 'Residential Roofing',
    slug: 'residential-roofing',
    image: '/images/photos/service-residential.jpg',
    statNumber: '48hr',
    statLabel: 'Rapid Inspection & Quote',
    summary:
      'Tailored home roofing replacements, architectural standing-seam systems, clay tile restorations, and attic ventilation upgrades engineered to safeguard family homes.',
    overviewHeading:
      'At RidgeForm, every residential roof is built as a complete moisture-and-airflow system — pairing crisp architectural curb appeal with verified structural longevity.',
    overviewNote:
      'Clean daily job-site protection, documented photo audits, and a 20-year workmanship warranty.',
    highlights: [
      'Complete Roof Replacement',
      'Standing-Seam Metal Homes',
      'Clay & Concrete Tile Systems',
      'Attic Intake & Ridge Venting',
    ],
    solutions: [
      {
        icon: 'layers',
        title: 'Full Tear-Off & Deck Audit',
        description:
          'We strip worn coverings down to clean rafters and replace any moisture-softened sheathing.',
      },
      {
        icon: 'shield-check',
        title: 'Multi-Layer Underlayment',
        description:
          'Synthetic breather membranes and peel-and-stick valley barriers stop wind-driven rain.',
      },
      {
        icon: 'wrench',
        title: 'Balanced Attic Ventilation',
        description:
          'Continuous soffit-to-ridge airflow lowers summer attic heat and prevents winter condensation.',
      },
      {
        icon: 'bolt',
        title: 'Storm Damage Restoration',
        description:
          'Same-week damage stabilization, clear photo reporting, and permanent matching repairs.',
      },
    ],
    materials: [
      {
        icon: 'home',
        title: 'Standing-Seam Metal',
        description: 'Clean vertical shadow lines with hidden fasteners rated to high wind gusts.',
      },
      {
        icon: 'layers',
        title: 'Terracotta & Clay Tile',
        description: 'Timeless earthy profiles offering natural thermal mass and zero rot risk.',
      },
      {
        icon: 'shield-check',
        title: 'Architectural Composite Shingle',
        description: 'Class-4 impact-rated multi-dimensional profiles in warm slate and charcoal tones.',
      },
      {
        icon: 'sun',
        title: 'Cool-Roof Pigments',
        description: 'Infrared-reflective finishes that help keep upper bedrooms naturally cooler.',
      },
    ],
  },
];
