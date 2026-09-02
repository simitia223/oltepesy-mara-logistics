export type Service = {
  slug: string;
  icon: string;
  title: string;
  blurb: string;
  points: string[];
};

export const services: Service[] = [
  {
    slug: "scheduled-runs",
    icon: "calendar-clock",
    title: "Scheduled Runs",
    blurb:
      "A fixed delivery day into the Mara, every week. Your orders from Nairobi or Narok move on a rhythm your team can plan around.",
    points: [
      "Fixed weekly or twice-weekly collection days",
      "Consolidated with other stops on the same run",
      "Predictable arrival windows for your kitchen and stores",
      "One point of contact for every delivery",
    ],
  },
  {
    slug: "bulk-deliveries",
    icon: "boxes",
    title: "Bulk Deliveries",
    blurb:
      "Large hospitality orders — full food shops, beverages, cartons and equipment moved in one organised trip.",
    points: [
      "Full-vehicle loads from Nairobi and Narok wholesalers and supermarkets",
      "Careful loading for mixed dry, chilled and fragile goods",
      "Cold-chain handling where arranged in advance",
      "Built for restocking, events and high season",
    ],
  },
  {
    slug: "express-deliveries",
    icon: "zap",
    title: "Express Deliveries",
    blurb:
      "An urgent supply that can't wait for the next scheduled run — a dedicated trip when something runs out.",
    points: [
      "Priority collection once your order is ready",
      "Direct routing to your property",
      "Subject to vehicle availability and timing",
      "Best for critical kitchen, guest or operations items",
    ],
  },
  {
    slug: "business-logistics",
    icon: "building",
    title: "Business Logistics",
    blurb:
      "An ongoing logistics arrangement for camps, lodges and hotels that resupply from Nairobi or Narok every week.",
    points: [
      "A dedicated account and full delivery history",
      "Standing instructions for your regular suppliers",
      "Consolidated monthly invoicing",
      "Priority support during peak season",
    ],
  },
  {
    slug: "return-logistics",
    icon: "rotate-back",
    title: "Return Logistics",
    blurb:
      "We use the journey back from the Mara to move legitimate business goods toward Narok or Nairobi where capacity allows.",
    points: [
      "Better use of vehicles already making the trip",
      "Equipment returns, repairs and supplier exchanges",
      "Documents and small consignments",
      "Subject to route, capacity and transport policy",
    ],
  },
];

/** Compact service badges shown under the hero CTA. */
export const heroBadges: { icon: string; label: string; href: string }[] = [
  { icon: "calendar-clock", label: "Scheduled Deliveries", href: "/services#scheduled-runs" },
  { icon: "boxes", label: "Bulk Loads", href: "/services#bulk-deliveries" },
  { icon: "zap", label: "Express Trips", href: "/services#express-deliveries" },
  { icon: "building", label: "Business Accounts", href: "/for-businesses" },
];

export type Step = { n: string; title: string; text: string; detail?: string[] };

export const steps: Step[] = [
  {
    n: "01",
    title: "You order",
    text: "Buy your supplies directly from your preferred supplier in Nairobi or Narok Town and pay them yourself.",
    detail: ["Nairobi wholesalers", "Naivas", "Quickmart", "Narok markets", "Butcheries", "Any supplier"],
  },
  {
    n: "02",
    title: "Tell us",
    text: "Send us the supplier, the order details and your destination in the Mara — by WhatsApp or the booking form.",
  },
  {
    n: "03",
    title: "We collect",
    text: "Our team picks up your ready order from the supplier in Nairobi or Narok Town and checks it against your list.",
  },
  {
    n: "04",
    title: "We deliver",
    text: "Your supplies are transported and handed over safely at your camp, lodge, hotel or business in the Mara.",
  },
];

export type Problem = { icon: string; title: string; text: string };

export const problems: Problem[] = [
  {
    icon: "truck",
    title: "Unreliable transport",
    text: "Finding a vehicle every time an order is ready — and hoping it actually turns up.",
  },
  {
    icon: "clock",
    title: "Supplies sitting in town",
    text: "Paid-for orders waiting at a Nairobi or Narok counter while transport is arranged.",
  },
  {
    icon: "headset",
    title: "Staff stuck on logistics",
    text: "Your team spending the day coordinating drivers instead of running the property.",
  },
  {
    icon: "arrow-lr",
    title: "Half-empty trips",
    text: "Vehicles travelling under-loaded because nobody consolidates the runs.",
  },
];

export type Category = { icon: string; title: string; items: string[] };

export const categories: Category[] = [
  {
    icon: "carrot",
    title: "Food supplies",
    items: ["Vegetables & fruit", "Meat & eggs", "Cereals & grains", "Dry & tinned foods"],
  },
  {
    icon: "drink",
    title: "Beverages",
    items: ["Drinking water", "Juices & sodas", "Other permitted beverages"],
  },
  {
    icon: "spray",
    title: "Housekeeping",
    items: ["Cleaning products", "Tissue & packaging", "Kitchen & guest supplies"],
  },
  {
    icon: "wrench",
    title: "Business supplies",
    items: ["Equipment & spare parts", "Office supplies", "Other legitimate goods"],
  },
];

export const restrictionNote =
  "All deliveries are subject to Kenyan law and our transport policy. We do not carry restricted, prohibited or hazardous goods, and we do not purchase goods on a customer's behalf.";

export type Segment = { icon: string; title: string; text: string };

export const segments: Segment[] = [
  {
    icon: "tent",
    title: "Safari camps",
    text: "Tented camps deep in the reserve running on a daily flow of fresh food, water and housekeeping stock.",
  },
  {
    icon: "hotel",
    title: "Lodges & hotels",
    text: "Permanent properties with full kitchens and bars, balancing occupancy swings against steady supply.",
  },
  {
    icon: "utensils",
    title: "Restaurants",
    text: "Kitchens that need produce and dry goods to arrive on schedule, not whenever a vehicle is free.",
  },
  {
    icon: "compass",
    title: "Tour operators",
    text: "Operators coordinating supplies and equipment across several properties and mobile camps.",
  },
  {
    icon: "bell",
    title: "Airbnbs & guesthouses",
    text: "Short-stay hosts restocking regularly without a full-time procurement person.",
  },
  {
    icon: "star",
    title: "Events & seasonal",
    text: "One-off bulk moves for weddings, conferences and the migration high season.",
  },
];

/** Business-category strip (in place of testimonials, until real ones exist). */
export const businessCategories = [
  "Camps",
  "Lodges",
  "Hotels",
  "Restaurants",
  "Tour Operators",
  "Hospitality Businesses",
];

export type Benefit = { icon: string; title: string; text: string };

export const businessBenefits: Benefit[] = [
  {
    icon: "calendar",
    title: "Scheduled delivery days",
    text: "Fixed collection days so supplies move on a rhythm your team can build a week around.",
  },
  {
    icon: "headset",
    title: "Dedicated point of contact",
    text: "One person who knows your property, your suppliers and your standing arrangements.",
  },
  {
    icon: "boxes",
    title: "Consolidated supplier collections",
    text: "Multiple suppliers combined into a single organised delivery at your door.",
  },
  {
    icon: "clipboard",
    title: "Delivery history",
    text: "A record of every collection and drop for your own stock and cost tracking.",
  },
  {
    icon: "file-check",
    title: "Proof of delivery",
    text: "Confirmation of what was delivered, when and to whom — useful for camp and lodge managers.",
  },
  {
    icon: "star",
    title: "Priority during busy periods",
    text: "Business accounts are served first when demand is highest.",
  },
  {
    icon: "receipt",
    title: "Monthly invoicing where agreed",
    text: "One consolidated statement at month-end instead of settling every trip.",
  },
  {
    icon: "route",
    title: "Recurring delivery planning",
    text: "We plan the runs ahead so a missed supplier or a busy week doesn't break the chain.",
  },
];

/** Trust points — the reasons a Mara operator can rely on Oltepesy. */
export type Trust = { icon: string; title: string; text: string };

export const trustPoints: Trust[] = [
  {
    icon: "whatsapp",
    title: "Reliable",
    text: "Clear communication from collection to delivery, on the number you booked with.",
  },
  {
    icon: "route",
    title: "Convenient",
    text: "One logistics partner for your whole supply movement into the Mara — from Nairobi and Narok.",
  },
  {
    icon: "calendar-clock",
    title: "Flexible",
    text: "Scheduled, standard and urgent delivery options for however the week goes.",
  },
  {
    icon: "receipt",
    title: "Transparent",
    text: "A clear quotation before any delivery is confirmed — no surprises on the invoice.",
  },
  {
    icon: "building",
    title: "Business-focused",
    text: "Designed around the needs of hospitality and Mara-based operations, not parcels.",
  },
];

/** Delivery status timeline — presentational only until real tracking exists. */
export const deliveryStatus: { icon: string; label: string }[] = [
  { icon: "clipboard", label: "Order received" },
  { icon: "calendar", label: "Collection confirmed" },
  { icon: "package-check", label: "Collected" },
  { icon: "truck", label: "In transit" },
  { icon: "badge-check", label: "Delivered" },
];

/** What a customer gets as proof once goods are delivered. */
export const proofPoints: { icon: string; label: string }[] = [
  { icon: "badge-check", label: "Delivery confirmation" },
  { icon: "clock", label: "Delivery time" },
  { icon: "scroll", label: "Delivery reference" },
  { icon: "file-check", label: "Proof of delivery" },
  { icon: "clipboard", label: "Delivery notes" },
];

export type PriceFactor = { title: string; text: string };

export const priceFactors: PriceFactor[] = [
  { title: "Load size & weight", text: "How much space and weight the order takes in the vehicle." },
  { title: "Volume & handling", text: "Bulky, fragile or chilled goods need more care and room." },
  { title: "Destination", text: "Where in the Mara the property sits and the road to reach it." },
  { title: "Schedule vs. one-off", text: "Consolidated scheduled runs cost less per delivery than dedicated trips." },
  { title: "Urgency", text: "Express and same-day trips are priced for a dedicated vehicle." },
  { title: "Supplier collections", text: "The number of separate pickups needed before the run heads out." },
];

export type PriceTier = {
  name: string;
  icon: string;
  forWho: string;
  examples: string;
  cta: string;
};

export const priceTiers: PriceTier[] = [
  {
    name: "Scheduled Delivery",
    icon: "calendar-clock",
    forWho: "For regular planned deliveries",
    examples:
      "A fixed weekly or twice-weekly run, consolidated with other stops. Lowest cost per delivery.",
    cta: "Request a quote",
  },
  {
    name: "Standard Delivery",
    icon: "package-check",
    forWho: "For a normal one-off delivery",
    examples:
      "A single trip into the Mara from Nairobi or Narok on the next available run, sharing vehicle space where possible.",
    cta: "Request a quote",
  },
  {
    name: "Express Delivery",
    icon: "zap",
    forWho: "For urgent trips",
    examples:
      "A dedicated vehicle leaving as soon as your order is ready, outside the scheduled run.",
    cta: "Priority quotation",
  },
  {
    name: "Business Account",
    icon: "building",
    forWho: "For recurring operations",
    examples:
      "Agreed rates for your regular runs, consolidated monthly invoicing and priority in high season.",
    cta: "Talk to us",
  },
];

export const faqs = [
  {
    q: "Do you buy the goods for us?",
    a: "No. Customers purchase and pay their suppliers directly. OLTEPESY handles collection and transportation only. This keeps you in full control of what you buy and what you spend.",
  },
  {
    q: "Where do you collect from?",
    a: "From suppliers and businesses in Nairobi and Narok Town — supermarkets like Naivas and Quickmart, wholesalers, markets, butcheries and hardware suppliers. Many Mara properties buy bulk in Nairobi and top up in Narok; we collect from both. Give us the supplier name and location when the order is ready.",
  },
  {
    q: "Where do you deliver?",
    a: "To camps, lodges, hotels and businesses within our service area in the Maasai Mara. If you're not sure your location is covered, send it to us and we'll confirm.",
  },
  {
    q: "Can you collect from multiple suppliers?",
    a: "Where practical, consolidated collections can be arranged. The delivery quote will depend on the number of collection points and the size of the load.",
  },
  {
    q: "Do you offer urgent deliveries?",
    a: "Yes, subject to vehicle availability and the requirements of the trip. Express trips run a dedicated vehicle and are priced accordingly.",
  },
  {
    q: "How is delivery pricing calculated?",
    a: "Pricing depends on load size, weight, volume, destination, delivery schedule, urgency and the number of supplier collections. Scheduled and consolidated runs cost less per delivery than one-off express trips. You get a clear price before anything is collected.",
  },
  {
    q: "Do you give exact delivery times?",
    a: "We give an arrival window with each booking, based on the route and conditions on the day. We don't promise an exact hour — the Mara road doesn't allow it — but scheduled customers know their day, and we update you if anything shifts.",
  },
  {
    q: "Can you handle chilled or fragile goods?",
    a: "Fragile goods, yes, with careful loading. Chilled goods can be moved when arranged in advance so we can plan the load and timing. We don't carry uninsured highly-perishable stock on spec.",
  },
  {
    q: "Can businesses arrange recurring deliveries?",
    a: "Yes. Businesses can request a recurring logistics arrangement or a business account with scheduled days, a dedicated contact and monthly invoicing where agreed.",
  },
  {
    q: "How do I book?",
    a: "Fastest is WhatsApp. For a fuller request — multiple suppliers, a business account, a recurring schedule — use the Book a Delivery form and we'll come back to confirm availability and price.",
  },
];
