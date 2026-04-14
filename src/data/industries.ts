// Huntsville 3PL — Industry Definitions
// Source: city-research-brief-huntsville3pl.md §2, §3.2, §4
// Ten industries targeted for the Huntsville market. Content feeds the
// dynamic /industries/[slug] route + dropdown nav.

export interface IndustryCapability {
  num: string;
  title: string;
  desc: string;
}

export interface IndustryStat {
  value: string;
  label: string;
}

export interface Industry {
  slug: string;
  name: string;
  navLabel: string; // shorter label for nav dropdown
  tagline: string;
  heroImage: string;
  heroAlt: string;
  leadCopy: string;
  whyLabel: string;
  whyCopy: string;
  capHeadingLine1: string;
  capHeadingLine2: string;
  capabilities: IndustryCapability[];
  stats: IndustryStat[];
  metaTitle: string;
  metaDescription: string;
}

export const industries: Industry[] = [
  // 01 — AEROSPACE
  {
    slug: 'aerospace',
    name: 'Aerospace',
    navLabel: 'Aerospace',
    tagline: 'Precision logistics for the Rocket City. Built for the primes.',
    heroImage: '/images/aerospace-hero-huntsville.webp',
    heroAlt:
      'Aerospace logistics support in Huntsville, Alabama — warehousing, kitting, and transportation services for NASA Marshall, Redstone Arsenal, and major aerospace primes operating in the Rocket City',
    leadCopy:
      'Bonded storage, precision kitting, and secured transportation for the primes, subs, and suppliers building what flies. When Huntsville is Rocket City, the logistics partners here have to operate at that same standard.',
    whyLabel: 'Why Huntsville for aerospace —',
    whyCopy:
      'Huntsville is home to NASA Marshall Space Flight Center, Redstone Arsenal, and major operations for Boeing, Lockheed Martin, Raytheon, and Northrop Grumman. With nearly 80,000 aerospace workers in the metro and the Port of Huntsville ranked 21st nationally for international air cargo, we sit where the freight is.',
    capHeadingLine1: 'Where the rockets',
    capHeadingLine2: 'actually get built.',
    capabilities: [
      { num: '01', title: 'Secured + Access-Controlled Storage', desc: 'Chain-of-custody discipline, surveillance, and access controls built for aerospace inventory — from raw materials to flight hardware.' },
      { num: '02', title: 'Precision Kitting + Line Feed', desc: 'Sequenced component kits delivered to manufacturing partners on schedule — the accuracy rocket production actually requires.' },
      { num: '03', title: 'Climate-Controlled Zones', desc: 'Humidity- and temperature-managed areas for sensitive electronics, composites, and propellant-adjacent components.' },
      { num: '04', title: 'Air Cargo Coordination', desc: 'Coordinated hand-offs with Port of Huntsville air freight — ideal for time-critical aerospace and flight-hardware shipments.' },
      { num: '05', title: 'Serialization + Lot Traceability', desc: 'Component-level serial tracking, lot coding, and full audit trails for compliance with prime-contractor quality systems.' },
      { num: '06', title: '24/7 Operations Coverage', desc: 'Round-the-clock support keyed to program schedules — test stands and launch windows don\'t wait for a Monday morning.' },
    ],
    stats: [
      { value: '80K+', label: 'Aerospace workers in the Huntsville metro' },
      { value: '21st', label: 'U.S. ranking for international air cargo volume' },
      { value: '$300M+', label: 'Port of Huntsville air + rail infrastructure investment' },
      { value: '24/7', label: 'Operations coverage for program-critical schedules' },
    ],
    metaTitle: 'Aerospace Logistics in Huntsville, AL',
    metaDescription:
      'Secured warehousing, precision kitting, and coordinated transportation for aerospace primes, subcontractors, and suppliers in Huntsville, Alabama — North Alabama\'s aerospace capital.',
  },

  // 02 — DEFENSE & GOVERNMENT
  {
    slug: 'defense-government',
    name: 'Defense & Government',
    navLabel: 'Defense & Government',
    tagline: 'Chain-of-custody discipline for Redstone-adjacent logistics.',
    heroImage: '/images/defense-hero-huntsville.webp',
    heroAlt:
      'Defense and government logistics in Huntsville, Alabama — secured warehousing, chain-of-custody control, and FTZ-adjacent operations serving Redstone Arsenal, Army commands, and DoD contractors',
    leadCopy:
      'Secured warehousing, controlled-access storage, and disciplined chain-of-custody workflows built for the cadence of Redstone Arsenal, Army commands, and the DoD contractor community that surrounds them.',
    whyLabel: 'Why Huntsville for defense —',
    whyCopy:
      'Redstone Arsenal hosts approximately 46,000 military, civilian, and contractor personnel, with U.S. Space Command HQ adding roughly 1,400 more. Missile Defense Agency, Army Materiel Command, and Space & Missile Defense Command all operate here. The Port of Huntsville\'s Foreign Trade Zone #83 adds duty-deferred flexibility when programs call for it.',
    capHeadingLine1: 'Logistics at the',
    capHeadingLine2: 'contract cadence.',
    capabilities: [
      { num: '01', title: 'Controlled-Access Storage', desc: 'Access-limited zones, surveillance, and documented entry logs — configured for inventory that has to stay traceable.' },
      { num: '02', title: 'Chain-of-Custody Workflows', desc: 'Full documentation from inbound receipt through outbound transfer, with seal integrity and signature discipline at every hand-off.' },
      { num: '03', title: 'FTZ #83 Adjacent', desc: 'Operations adjacent to Port of Huntsville\'s Foreign Trade Zone #83 — deferred-duty workflows available when program economics support them.' },
      { num: '04', title: 'Sensitive Component Handling', desc: 'Protocols for components that need more than a standard rack location — whether for regulatory, contractual, or operational reasons.' },
      { num: '05', title: 'Rapid Mobilization Support', desc: 'Capacity to scale on short timelines for contingency, training, or contract-driven surge requirements.' },
      { num: '06', title: '24/7 Operations Coverage', desc: 'Around-the-clock support keyed to mission cadence — not a call-back-Monday schedule.' },
    ],
    stats: [
      { value: '46K+', label: 'Redstone Arsenal workforce (military + civilian + contractor)' },
      { value: 'FTZ #83', label: 'Foreign Trade Zone designation at Port of Huntsville' },
      { value: '1,400+', label: 'U.S. Space Command HQ positions added to Huntsville' },
      { value: '24/7', label: 'Operations coverage for mission-critical schedules' },
    ],
    metaTitle: 'Defense & Government Logistics in Huntsville, AL',
    metaDescription:
      'Secured warehousing, chain-of-custody workflows, and FTZ-adjacent operations in Huntsville, Alabama — serving Redstone Arsenal, Space Command, Army commands, and DoD contractors.',
  },

  // 03 — ADVANCED MANUFACTURING
  {
    slug: 'advanced-manufacturing',
    name: 'Advanced Manufacturing',
    navLabel: 'Advanced Manufacturing',
    tagline: 'Line-feed logistics for North Alabama\'s manufacturing economy.',
    heroImage: '/images/advanced-hero-huntsville.webp',
    heroAlt:
      'Advanced manufacturing logistics in Huntsville, Alabama — sequenced kitting, line-feed delivery, rail-served inbound, and JIT support for Mazda-Toyota, rocket propulsion, and precision machining operations',
    leadCopy:
      'Sequenced kitting, just-in-time inbound flow, and rail-served throughput for the manufacturers driving North Alabama\'s industrial economy — from automotive assembly to rocket propulsion to precision machining.',
    whyLabel: 'Why Huntsville for manufacturing —',
    whyCopy:
      'The Mazda-Toyota joint venture in nearby Limestone County, along with a dense network of rocket-propulsion, defense-hardware, and precision-machining operations, makes North Alabama one of the Southeast\'s fastest-growing manufacturing corridors. Direct Norfolk Southern rail access and the I-65/I-565 convergence put your inbound components exactly where they need to be.',
    capHeadingLine1: 'Feed the line,',
    capHeadingLine2: 'not the backlog.',
    capabilities: [
      { num: '01', title: 'Sequenced Kit Delivery', desc: 'Components arrive at the workstation in the order the line needs them — not the order they got off the truck.' },
      { num: '02', title: 'JIT Inbound Coordination', desc: 'Inbound freight scheduled against production plans, with dock appointments that match your build cadence.' },
      { num: '03', title: 'Rail-Served Throughput', desc: 'Direct Norfolk Southern access through the Port of Huntsville IIC — bulk components move by rail, then transload to short-haul trailers.' },
      { num: '04', title: 'Sub-Assembly + Component Marriage', desc: 'Light assembly, sub-kit builds, and component pairing performed off the main line to free up production floor space.' },
      { num: '05', title: 'Finished Goods Staging', desc: 'Outbound finished-goods staging for carrier pickup — cleared off the floor, on the dock, ready to ship.' },
      { num: '06', title: 'Reverse + Rework Handling', desc: 'Quarantine, rework, and return flows for components that need a second look before they re-enter the line.' },
    ],
    stats: [
      { value: '33,745', label: 'Rail lifts through Port of Huntsville IIC in 2024' },
      { value: '22.3%', label: 'YoY growth in Port of Huntsville rail lifts' },
      { value: '2', label: 'Interstates at the facility: I-65 and I-565' },
      { value: '24/7', label: 'Operations coverage aligned with production schedules' },
    ],
    metaTitle: 'Advanced Manufacturing Logistics in Huntsville, AL',
    metaDescription:
      'Sequenced kitting, JIT inbound, and rail-served logistics in Huntsville, Alabama — supporting Mazda-Toyota, rocket propulsion, defense hardware, and precision machining across North Alabama.',
  },

  // 04 — E-COMMERCE & DTC
  {
    slug: 'ecommerce-dtc',
    name: 'E-Commerce & DTC Brands',
    navLabel: 'E-Commerce & DTC',
    tagline: 'Orders that ship on time. Customers that come back.',
    heroImage: '/images/ecommerce-hero-huntsville.webp',
    heroAlt:
      'E-commerce and direct-to-consumer fulfillment in Huntsville, Alabama — pick, pack, ship, carrier rate shopping, and Southeast regional distribution for online brands',
    leadCopy:
      'Pick/pack/ship accuracy, same-day cutoffs, and multi-carrier rate shopping for direct-to-consumer brands that live or die by delivery windows. Huntsville\'s Tennessee Valley position buys you faster ground reach without Atlanta or Dallas real-estate premiums.',
    whyLabel: 'Why Huntsville for e-commerce —',
    whyCopy:
      'One-day ground drive to Nashville, Atlanta, Memphis, and Birmingham; two-day reach to the full Southeast and Midwest. The Huntsville metro\'s 249K+ population is growing faster than the state average, which means a stable labor pool for peak fulfillment and a metro that increasingly ships to itself.',
    capHeadingLine1: 'Orders in,',
    capHeadingLine2: 'orders out.',
    capabilities: [
      { num: '01', title: 'SKU-Accurate Pick/Pack', desc: 'Order-level accuracy targets that actually move the needle on customer-service tickets, not just internal KPI slides.' },
      { num: '02', title: 'Same-Day Cutoffs', desc: 'Late-afternoon order cutoffs that still make next-day delivery windows — your customers don\'t care about our schedule.' },
      { num: '03', title: 'Multi-Carrier Rate Shopping', desc: 'Real-time rate comparison across carriers — every order ships on the best combination of speed and cost.' },
      { num: '04', title: 'Branded Packaging + Inserts', desc: 'Custom packaging, inserts, and unboxing moments that build repeat customers — not just fulfill orders.' },
      { num: '05', title: 'Returns + Exchanges', desc: 'Integrated reverse logistics with inspection, restocking, and disposition in the same facility as outbound.' },
      { num: '06', title: 'EDI + API Integrations', desc: 'Direct plug-ins to Shopify, major marketplaces, and retail EDI — orders flow in, tracking flows out, no manual touches.' },
    ],
    stats: [
      { value: '1-Day', label: 'Ground reach to Nashville, Atlanta, Memphis, Birmingham' },
      { value: '2-Day', label: 'Ground reach covering the full Southeast + Midwest' },
      { value: '249K+', label: 'Huntsville metro population — growing faster than the state' },
      { value: '24/7', label: 'Operations coverage keyed to carrier pickup windows' },
    ],
    metaTitle: 'E-Commerce & DTC Fulfillment in Huntsville, AL',
    metaDescription:
      'Direct-to-consumer and e-commerce fulfillment in Huntsville, Alabama — SKU accuracy, same-day cutoffs, multi-carrier rate shopping, and Southeast regional ground reach.',
  },

  // 05 — BIOTECH & HEALTHCARE
  {
    slug: 'biotech-healthcare',
    name: 'Biotech & Healthcare',
    navLabel: 'Biotech & Healthcare',
    tagline: 'Climate-managed storage. Serialized inventory. Rocket City precision.',
    heroImage: '/images/biotech-hero-huntsville.webp',
    heroAlt:
      'Biotech and healthcare logistics in Huntsville, Alabama — climate-controlled storage, serialized inventory, and secured workflows supporting HudsonAlpha Institute and North Alabama life sciences corridor',
    leadCopy:
      'Temperature-managed zones, humidity control, and serialization-ready workflows for the life sciences and healthcare operators who can\'t accept a "close enough" inventory number. The Rocket City\'s precision culture extends well past the rocket pad.',
    whyLabel: 'Why Huntsville for biotech —',
    whyCopy:
      'HudsonAlpha Institute for Biotechnology anchors a growing life sciences corridor, with Huntsville Hospital — one of Alabama\'s largest — adding healthcare supply-chain demand. Climate-controlled storage, access discipline, and 24/7 coverage combine to meet what regulated industries need without the coastal-metro overhead.',
    capHeadingLine1: 'Precision storage,',
    capHeadingLine2: 'regulated workflows.',
    capabilities: [
      { num: '01', title: 'Temperature-Managed Zones', desc: 'Ambient, cool, and refrigerated zones with documented monitoring — for products where the cold chain is non-negotiable.' },
      { num: '02', title: 'Humidity Control', desc: 'Dedicated humidity-managed areas for moisture-sensitive diagnostics, reagents, and packaged pharmaceuticals.' },
      { num: '03', title: 'Serialization + Lot Traceability', desc: 'Lot-level and serial-level tracking with full audit trails — what regulators ask for and what recalls actually require.' },
      { num: '04', title: 'Secured + Access-Controlled', desc: 'Controlled-access zones for controlled substances, clinical-trial inventory, and high-value diagnostic equipment.' },
      { num: '05', title: 'Chain-of-Custody Documentation', desc: 'Documented hand-offs from receipt through outbound — the paper trail compliance auditors actually open.' },
      { num: '06', title: '24/7 Operations Coverage', desc: 'Around-the-clock support — because cold-chain failures don\'t honor business hours.' },
    ],
    stats: [
      { value: 'Climate', label: 'Dedicated temperature and humidity-managed storage zones' },
      { value: '24/7', label: 'Operations coverage for cold-chain and time-sensitive inventory' },
      { value: '1-Day', label: 'Drive reach to Nashville, Atlanta, Memphis, Birmingham' },
      { value: '249K+', label: 'Huntsville metro population — anchored by HudsonAlpha + Huntsville Hospital' },
    ],
    metaTitle: 'Biotech & Healthcare Logistics in Huntsville, AL',
    metaDescription:
      'Climate-controlled storage, serialized inventory, and secured workflows in Huntsville, Alabama — supporting HudsonAlpha biotech, Huntsville Hospital, and the North Alabama life sciences corridor.',
  },

  // 06 — RETAIL & CONSUMER BRANDS
  {
    slug: 'retail-consumer',
    name: 'Retail & Consumer Brands',
    navLabel: 'Retail & Consumer',
    tagline: 'Routing-guide compliant. Shelf-ready. On the truck.',
    heroImage: '/images/retail-hero-huntsville.webp',
    heroAlt:
      'Retail and consumer brand logistics in Huntsville, Alabama — routing-guide compliance, retail-ready packaging, EDI integrations, and Southeast distribution for big-box and specialty retail channels',
    leadCopy:
      'Routing-guide compliance, retail-ready labeling, and shelf-ready pack-outs for consumer brands shipping into big-box and specialty retail. Fewer chargebacks, cleaner POs, and freight that actually shows up in the carrier\'s delivery window.',
    whyLabel: 'Why Huntsville for retail —',
    whyCopy:
      'One-day drive to Nashville, Atlanta, Memphis, and Birmingham puts your shipments within the delivery windows of every major Southeastern retail DC network. Two-day ground reach opens the Midwest. You serve a regional footprint from one facility — without paying Atlanta rates.',
    capHeadingLine1: 'Routing guides,',
    capHeadingLine2: 'not routing guesses.',
    capabilities: [
      { num: '01', title: 'Routing-Guide Compliance', desc: 'Retailer-specific routing, labeling, and documentation compliance — because a chargeback erases margin faster than a freight rate ever could.' },
      { num: '02', title: 'Retail-Ready Packaging', desc: 'Shelf-ready packs, display cases, and POG-compliant configurations that arrive ready to merchandise.' },
      { num: '03', title: 'EDI Integrations', desc: 'Retail EDI transactions — 850, 856, 810, 820 — flowing cleanly between your ERP and the retailer\'s systems.' },
      { num: '04', title: 'Purchase-Order Management', desc: 'PO-accurate picking and packing with SKU-level compliance — not a "close enough" approach that invites chargebacks.' },
      { num: '05', title: 'Seasonal + Promotional Flex', desc: 'Capacity and labor flex for seasonal peaks, promotional drops, and retail set-resets without blowing timelines.' },
      { num: '06', title: 'Omnichannel Split', desc: 'Same facility handles retail-DC freight, e-commerce orders, and retail-store direct shipments from one inventory pool.' },
    ],
    stats: [
      { value: '1-Day', label: 'Drive reach to Nashville, Atlanta, Memphis, Birmingham' },
      { value: '2-Day', label: 'Ground reach covering the full Southeast + Midwest' },
      { value: '24/7', label: 'Operations coverage for retail DC appointment windows' },
      { value: '249K+', label: 'Huntsville metro population — a growing consumer base' },
    ],
    metaTitle: 'Retail & Consumer Brand Logistics in Huntsville, AL',
    metaDescription:
      'Routing-guide compliance, retail-ready packaging, and EDI integrations in Huntsville, Alabama — serving big-box, specialty retail, and omnichannel consumer brands across the Southeast.',
  },

  // 07 — FOOD & BEVERAGE
  {
    slug: 'food-beverage',
    name: 'Food & Beverage',
    navLabel: 'Food & Beverage',
    tagline: 'FIFO discipline. Lot-level traceability. Clean-facility standards.',
    heroImage: '/images/foodbev-hero-huntsville.webp',
    heroAlt:
      'Food and beverage logistics in Huntsville, Alabama — FDA-aware warehousing, FIFO rotation, lot-level traceability, and climate-controlled storage for food-grade inventory across North Alabama',
    leadCopy:
      'FIFO inventory rotation, lot-level traceability, and FDA-aware handling for food and beverage operators shipping into retail, foodservice, and DTC channels. Food-grade discipline without outsourcing your customer experience to a cold-storage black box.',
    whyLabel: 'Why Huntsville for food & bev —',
    whyCopy:
      'Huntsville\'s one-day drive reach to Nashville, Atlanta, Memphis, and Birmingham — plus Norfolk Southern rail access through the Port of Huntsville IIC — makes it a strong regional hub for food-grade inbound and outbound flows. Climate-controlled zones and 24/7 coverage handle the time-sensitive realities that food supply chains actually face.',
    capHeadingLine1: 'Food-grade discipline,',
    capHeadingLine2: 'regional reach.',
    capabilities: [
      { num: '01', title: 'FIFO Rotation Discipline', desc: 'First-in, first-out picking rules enforced at the system and floor level — no date-coded inventory slipping past its window.' },
      { num: '02', title: 'Lot-Level Traceability', desc: 'Lot tracking from inbound receipt through outbound shipment — the paper trail FDA and retailer recall audits actually require.' },
      { num: '03', title: 'Climate-Controlled Zones', desc: 'Temperature-managed areas for dry, cool, and refrigerated food-grade inventory requiring specific storage conditions.' },
      { num: '04', title: 'FDA-Aware Workflows', desc: 'Documentation, sanitation discipline, and handling protocols aligned with food safety expectations.' },
      { num: '05', title: 'Retail + Foodservice Distribution', desc: 'Routing-guide-compliant outbound to grocery DCs, foodservice distributors, and DTC carriers — all from one inventory pool.' },
      { num: '06', title: '24/7 Operations Coverage', desc: 'Around-the-clock coverage for time-sensitive inbound, outbound, and carrier pickup windows that food supply chains actually face.' },
    ],
    stats: [
      { value: 'FIFO', label: 'System + floor-level rotation discipline enforced' },
      { value: '1-Day', label: 'Drive reach to Nashville, Atlanta, Memphis, Birmingham' },
      { value: '24/7', label: 'Operations coverage for time-sensitive food-grade freight' },
      { value: 'Climate', label: 'Dedicated temperature-managed storage zones' },
    ],
    metaTitle: 'Food & Beverage Logistics in Huntsville, AL',
    metaDescription:
      'FDA-aware warehousing, FIFO rotation, lot-level traceability, and climate-controlled storage in Huntsville, Alabama — serving food and beverage operators shipping into retail, foodservice, and DTC.',
  },

  // 08 — PHARMACEUTICALS
  {
    slug: 'pharmaceuticals',
    name: 'Pharmaceuticals',
    navLabel: 'Pharmaceuticals',
    tagline: 'Secured, serialized, and cGMP-aware. No exceptions.',
    heroImage: '/images/pharma-hero-huntsville.webp',
    heroAlt:
      'Pharmaceutical logistics in Huntsville, Alabama — cGMP-aware warehousing, serialization, cold chain, controlled-access storage, and secured workflows for pharma operators and DSCSA compliance',
    leadCopy:
      'Serialized inventory, cold-chain integrity, controlled-access storage, and cGMP-aware workflows for pharmaceutical operators who can\'t afford a broken audit trail or a temperature excursion. Regulated industry discipline, without coastal-metro cost.',
    whyLabel: 'Why Huntsville for pharma —',
    whyCopy:
      'Huntsville\'s combination of climate-controlled storage, 24/7 operations, and one-day drive reach to major Southeastern metros makes it a viable pharmaceutical hub — particularly for regional distribution and clinical-trial inventory. The Rocket City\'s precision-industry culture supports the documentation rigor pharma requires.',
    capHeadingLine1: 'Regulated freight,',
    capHeadingLine2: 'no exceptions.',
    capabilities: [
      { num: '01', title: 'Serialization + DSCSA-Aware Workflows', desc: 'Unit-level serialization, aggregation, and chain-of-custody documentation aligned with DSCSA expectations.' },
      { num: '02', title: 'Cold-Chain Integrity', desc: 'Validated temperature-managed zones with continuous monitoring — deviations detected and documented, not discovered later.' },
      { num: '03', title: 'Controlled-Access Storage', desc: 'Access-limited zones for schedule-adjacent inventory, high-value pharmaceuticals, and clinical-trial supplies.' },
      { num: '04', title: 'cGMP-Aware Documentation', desc: 'SOPs, batch records, and handling documentation aligned with current Good Manufacturing Practice expectations.' },
      { num: '05', title: 'Recall Readiness', desc: 'Lot-level traceability and documented workflows that make a recall an executable process, not a four-day emergency.' },
      { num: '06', title: '24/7 Operations Coverage', desc: 'Around-the-clock coverage — regulated freight doesn\'t pause for the weekend.' },
    ],
    stats: [
      { value: 'Climate', label: 'Validated temperature-managed storage with monitoring' },
      { value: 'Secured', label: 'Controlled-access zones for regulated inventory' },
      { value: '24/7', label: 'Operations coverage for cold-chain and time-critical pharma' },
      { value: '1-Day', label: 'Drive reach to Nashville, Atlanta, Memphis, Birmingham' },
    ],
    metaTitle: 'Pharmaceutical Logistics in Huntsville, AL',
    metaDescription:
      'Serialized, cGMP-aware warehousing with cold chain and controlled-access storage in Huntsville, Alabama — supporting pharmaceutical operators, clinical-trial inventory, and DSCSA compliance.',
  },

  // 09 — TECH & SOFTWARE
  {
    slug: 'tech-software',
    name: 'Tech & Software',
    navLabel: 'Tech & Software',
    tagline: 'Hardware fulfillment + RMA for the Research Park economy.',
    heroImage: '/images/tech-hero-huntsville.webp',
    heroAlt:
      'Technology and software company logistics in Huntsville, Alabama — hardware fulfillment, RMA processing, secured storage, and rapid-refresh cycles supporting Cummings Research Park operators',
    leadCopy:
      'Hardware fulfillment, RMA processing, secured storage, and fast refresh cycles for tech companies, cybersecurity operators, and software firms that ship physical product alongside their digital products.',
    whyLabel: 'Why Huntsville for tech —',
    whyCopy:
      'Cummings Research Park is the second-largest research park in the U.S., with 300+ companies and a deep software, cybersecurity, and AI ecosystem. When Research Park operators need hardware distribution, secured asset handling, or RMA workflows, they need a logistics partner that moves at their speed — not at a generic 3PL\'s.',
    capHeadingLine1: 'Hardware out,',
    capHeadingLine2: 'RMAs back.',
    capabilities: [
      { num: '01', title: 'Hardware Fulfillment', desc: 'Device fulfillment for laptops, peripherals, IoT hardware, and network equipment — with serial capture and configuration tracking.' },
      { num: '02', title: 'RMA + Returns Processing', desc: 'Inbound RMAs inspected, graded, and dispositioned — refurb, restock, recycle, or destroy — with full audit trails.' },
      { num: '03', title: 'Secured Asset Storage', desc: 'Controlled-access storage for pre-provisioned devices, spare parts, and high-value equipment — with serial-level chain of custody.' },
      { num: '04', title: 'Refresh Cycle Support', desc: 'Deployment kits out, decommissioned devices back — sequenced to your refresh calendar, not ours.' },
      { num: '05', title: 'Configuration + Imaging Coordination', desc: 'Hand-offs with IT and VAR partners for imaging, configuration, and asset-tagging before outbound deployment.' },
      { num: '06', title: 'Data-Destruction Chain of Custody', desc: 'Documented custody of decommissioned devices destined for wipe, destruction, or certified resale.' },
    ],
    stats: [
      { value: '2nd', label: 'Largest research park in the U.S. — Cummings Research Park' },
      { value: '300+', label: 'Companies operating in Cummings Research Park' },
      { value: '24/7', label: 'Operations coverage for refresh cycles and RMA flow' },
      { value: '1-Day', label: 'Drive reach to Nashville, Atlanta, Memphis, Birmingham' },
    ],
    metaTitle: 'Tech & Software Logistics in Huntsville, AL',
    metaDescription:
      'Hardware fulfillment, RMA processing, and secured asset storage in Huntsville, Alabama — supporting Cummings Research Park tech companies, cybersecurity firms, and software operators.',
  },

  // 10 — SUBSCRIPTION BOX & FULFILLMENT VERTICALS
  {
    slug: 'subscription-box',
    name: 'Subscription Box & Fulfillment Verticals',
    navLabel: 'Subscription Box',
    tagline: 'Monthly drops. Custom kits. On time, every time.',
    heroImage: '/images/subscription-hero-huntsville.webp',
    heroAlt:
      'Subscription box fulfillment in Huntsville, Alabama — multi-SKU kitting, recurring cadence pack-out, custom inserts, and seasonal flex capacity for subscription and DTC brands',
    leadCopy:
      'Multi-SKU kitting, recurring-cadence pack-out, custom inserts, and seasonal flex capacity for subscription box brands and specialty fulfillment verticals where every shipment is also a brand moment.',
    whyLabel: 'Why Huntsville for subscription —',
    whyCopy:
      'Huntsville\'s growing metro labor pool and one-day ground reach to Nashville, Atlanta, Memphis, and Birmingham make it a cost-effective hub for subscription brands that need reliable monthly pack-outs without coastal-metro real-estate costs. Central US ground economics; brand-grade pack quality.',
    capHeadingLine1: 'Every box ships',
    capHeadingLine2: 'on time.',
    capabilities: [
      { num: '01', title: 'Multi-SKU Kitting', desc: 'Custom kits assembled SKU-by-SKU to your monthly theme — consistent pack order, consistent presentation.' },
      { num: '02', title: 'Custom Inserts + Unboxing', desc: 'Branded inserts, tissue, stickers, and unboxing moments treated as part of the product — not a cost center to minimize.' },
      { num: '03', title: 'Recurring Cadence Pack-Out', desc: 'Monthly, quarterly, or custom-cadence fulfillment runs scheduled well in advance so labor and inventory align before the ship date.' },
      { num: '04', title: 'Seasonal + Peak Flex', desc: 'Flex capacity and labor for holiday, launch, and viral-moment peaks — without last-minute scramble pricing.' },
      { num: '05', title: 'Address Waterfall + Skip Logic', desc: 'Subscription list management with address waterfall, skip-month logic, and custom-SKU-by-tier workflows.' },
      { num: '06', title: 'Returns + Exchanges', desc: 'Integrated returns workflows — restock, refurb, or dispose — keyed to your brand\'s customer-service approach.' },
    ],
    stats: [
      { value: '249K+', label: 'Huntsville metro population — growing faster than the state' },
      { value: '1-Day', label: 'Ground reach to Nashville, Atlanta, Memphis, Birmingham' },
      { value: '2-Day', label: 'Ground reach covering the full Southeast + Midwest' },
      { value: '24/7', label: 'Operations coverage for launch and peak-cadence shipments' },
    ],
    metaTitle: 'Subscription Box Fulfillment in Huntsville, AL',
    metaDescription:
      'Multi-SKU kitting, recurring-cadence pack-out, custom inserts, and peak flex capacity in Huntsville, Alabama — supporting subscription box brands and specialty fulfillment verticals.',
  },
];
