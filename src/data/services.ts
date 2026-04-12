// Huntsville 3PL — Service Definitions
// Source: city-research-brief §4.1 (all services confirmed by Tyler)
// These feed into the services overview page, service detail pages, and homepage grid.

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  cityContext: string;
  icon: string; // Placeholder — will be replaced with actual icon component references
}

export const services: Service[] = [
  {
    slug: 'warehousing',
    title: 'Warehousing',
    shortDescription:
      'Bulk and racked storage solutions scaled to North Alabama\'s growing logistics demand — capacity designed to serve the region\'s aerospace, defense, manufacturing, and e-commerce sectors.',
    cityContext:
      'Strategically located in the Huntsville metro area with direct access to I-65 and I-565, our warehousing operation puts your inventory within one day\'s drive of Nashville, Atlanta, Memphis, and Birmingham.',
    icon: 'warehouse',
  },
  {
    slug: 'fulfillment',
    title: 'Fulfillment & Distribution',
    shortDescription:
      'B2B and direct-to-consumer fulfillment with regional reach across the Southeast and Midwest.',
    cityContext:
      'Huntsville\'s central position in the Tennessee Valley means faster delivery windows to major Southeast markets — without the congestion and cost premiums of larger metro hubs.',
    icon: 'package',
  },
  {
    slug: 'cross-docking',
    title: 'Cross-Docking',
    shortDescription:
      'Dedicated cross-dock operations to minimize dwell time and keep freight moving.',
    cityContext:
      'With multiple loading docks designed for efficient throughput, our Huntsville cross-dock operation keeps your freight flowing — from inbound to outbound without unnecessary storage delays.',
    icon: 'arrows-left-right',
  },
  {
    slug: 'transloading',
    title: 'Transloading',
    shortDescription:
      'Container-to-trailer and intermodal transfers leveraging proximity to the Port of Huntsville\'s rail and air cargo facilities.',
    cityContext:
      'The Port of Huntsville\'s International Intermodal Center — with 33,745 rail lifts in 2024 and direct Norfolk Southern main line access — makes Huntsville a natural transloading hub for both domestic and international freight.',
    icon: 'container',
  },
  {
    slug: 'transportation',
    title: 'Transportation & Freight',
    shortDescription:
      'FTL, LTL, and drayage services with access to I-65, I-565, and regional carrier networks.',
    cityContext:
      'Huntsville sits at the convergence of I-65 and I-565, with next-day LTL service to Atlanta, Nashville, Charlotte, Memphis, Cincinnati, Louisville, and more. Your freight has options here.',
    icon: 'truck',
  },
  {
    slug: 'kitting',
    title: 'Kitting & Assembly',
    shortDescription:
      'Value-added kitting and light assembly services to support manufacturing and retail clients.',
    cityContext:
      'With nearly 80,000 aerospace workers in the Huntsville metro, precision is in the region\'s DNA. Our kitting and assembly operations reflect that same standard of accuracy and care.',
    icon: 'puzzle',
  },
  {
    slug: 'returns',
    title: 'Returns Processing',
    shortDescription:
      'Reverse logistics and returns management to streamline product recovery and restocking.',
    cityContext:
      'Efficient returns processing from our Huntsville facility, with sorting, inspection, and restocking workflows designed to recover value and get products back into circulation fast.',
    icon: 'rotate-ccw',
  },
];
