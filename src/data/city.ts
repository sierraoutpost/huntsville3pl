// Huntsville 3PL — City-Specific Data
// Source: city-research-brief/city-research-brief-huntsville3pl.md
// Source: _design-standards/skills/12-city-character-injection.md

export const city = {
  name: 'Huntsville',
  domain: 'huntsville3pl.com',
  tagline: 'The Rocket City runs on precision. So does your supply chain.',
  state: 'AL',
  timezone: 'America/Chicago',
  accentColor: '#708090', // Rocket Silver — aerospace precision, unique across the network

  facility: {
    location: 'Huntsville metropolitan area, Alabama',
    sqft: 'Scaled to meet demand',
    docks: 'Multiple — designed for efficient freight flow',
    address: {
      street: 'Huntsville Metro Area',
      city: 'Huntsville',
      state: 'AL',
      zip: '',
    },
    climateControl: true,
    security: true,
  },

  logistics: {
    keyFact:
      'Huntsville is home to the Port of Huntsville — a fully integrated inland port combining international air cargo, rail intermodal, and highway freight, backed by $300M+ in infrastructure investment.',
    corridor: 'I-65 / I-565',
    port: 'Port of Huntsville (International Intermodal Center) + Port of Decatur (Tennessee River barge)',
    oneDayReach: [
      'Nashville, TN (110 mi)',
      'Birmingham, AL (100 mi)',
      'Atlanta, GA (190 mi)',
      'Memphis, TN (220 mi)',
      'Chattanooga, TN (110 mi)',
      'Louisville, KY (300 mi)',
      'Knoxville, TN (210 mi)',
    ],
  },

  // City character voice (from research brief §1.4)
  voice: {
    tone: 'Tech-forward but grounded. Precision and reliability over flash.',
    description:
      'Quiet confidence — people here build rockets, so they don\'t need to prove anything. "We solve complex problems. Your supply chain is one of them."',
  },

  // Key facts for the "Why Huntsville?" section
  whyHuntsville: [
    'Ranked 21st in the U.S. for international air cargo volume',
    'Port of Huntsville: $300M+ in combined air and rail infrastructure',
    '33,745 rail lifts in 2024 — 22.3% year-over-year growth',
    'One-day truck reach to Nashville, Atlanta, Memphis, Birmingham, and beyond',
    'Alabama\'s largest city — 249,000+ residents and growing fast',
    'Home to NASA Marshall Space Flight Center and U.S. Space Command HQ',
  ],
} as const;
