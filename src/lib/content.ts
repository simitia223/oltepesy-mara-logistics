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
    icon: "🗓",
    title: "Scheduled Runs",
    blurb:
      "A fixed Narok → Mara delivery day, every week. Your orders move on a rhythm your team can plan around.",
    points: [
      "Fixed weekly or twice-weekly collection days",
      "Consolidated with other stops on the same run",
      "Predictable arrival windows for your kitchen and stores",
      "One point of contact for every delivery",
    ],
  },
  {
    slug: "bulk-deliveries",
    icon: "📦",
    title: "Bulk Deliveries",
    blurb:
      "Large hospitality orders — full food shops, beverages, cartons and equipment moved in one organised trip.",
    points: [
      "Full-vehicle loads from Narok wholesalers and supermarkets",
      "Careful loading for mixed dry, chilled and fragile goods",
      "Cold-chain handling where arranged in advance",
      "Built for restocking, events and high season",
    ],
  },
  {
    slug: "express-deliveries",
    icon: "⚡",
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
    icon: "🏢",
    title: "Business Logistics",
    blurb:
      "An ongoing logistics arrangement for camps, lodges and hotels that resupply from Narok every week.",
    points: [
      "A dedicated account and full delivery history",
      "Standing instructions for your regular suppliers",
      "Consolidated monthly invoicing",
      "Priority support during peak season",
    ],
  },
  {
    slug: "return-logistics",
    icon: "↩",
    title: "Return Logistics",
    blurb:
      "We use the journey back to Narok to move legitimate business goods out of the Mara where capacity allows.",
    points: [
      "Better use of vehicles already making the trip",
      "Equipment returns, repairs and supplier exchanges",
      "Documents and small consignments",
      "Subject to route, capacity and transport policy",
    ],
  },
];

export type Step = { n: string; title: string; text: string; detail?: string[] };

export const steps: Step[] = [
  {
    n: "01",
    title: "Order from your supplier",
    text: "Buy your supplies directly from your preferred supplier in Narok Town and pay them yourself.",
    detail: ["Naivas", "Quickmart", "Wholesalers", "Butcheries", "Farmers", "Any supplier"],
  },
  {
    n: "02",
    title: "Tell us it's ready",
    text: "Send us the supplier, the order details and your destination in the Mara — by WhatsApp or the booking form.",
  },
  {
    n: "03",
    title: "We collect",
    text: "Our driver picks up your ready order from the supplier in Narok Town and checks it against your list.",
  },
  {
    n: "04",
    title: "We deliver to the Mara",
    text: "Your supplies are transported and handed over safely at your camp, lodge, hotel or business.",
  },
];

export type Problem = { title: string; text: string };

export const problems: Problem[] = [
  {
    title: "Unreliable transport",
    text: "Finding a vehicle every time an order is ready — and hoping it actually turns up.",
  },
  {
    title: "Supplies sitting in town",
    text: "Paid-for orders waiting at a Narok counter while transport is arranged.",
  },
  {
    title: "Staff stuck on logistics",
    text: "Your team spending the day coordinating drivers instead of running the property.",
  },
  {
    title: "Half-empty trips",
    text: "Vehicles travelling under-loaded because nobody consolidates the runs.",
  },
];

export type Category = { icon: string; title: string; items: string[] };

export const categories: Category[] = [
  {
    icon: "🥬",
    title: "Food supplies",
    items: ["Vegetables & fruit", "Meat & eggs", "Cereals & grains", "Dry & tinned foods"],
  },
  {
    icon: "🥤",
    title: "Beverages",
    items: ["Drinking water", "Juices & sodas", "Other permitted beverages"],
  },
  {
    icon: "🧼",
    title: "Housekeeping",
    items: ["Cleaning products", "Tissue & packaging", "Kitchen & guest supplies"],
  },
  {
    icon: "🔧",
    title: "Business supplies",
    items: ["Equipment & spare parts", "Office supplies", "Other legitimate goods"],
  },
];

export const restrictionNote =
  "All deliveries are subject to Kenyan law and our transport policy. We do not carry restricted, prohibited, hazardous or perishable-uninsured goods, and we do not purchase goods on a customer's behalf.";

export type Segment = { icon: string; title: string; text: string };

export const segments: Segment[] = [
  {
    icon: "⛺",
    title: "Safari camps",
    text: "Tented camps deep in the reserve running on a daily flow of fresh food, water and housekeeping stock.",
  },
  {
    icon: "🏨",
    title: "Lodges & hotels",
    text: "Permanent properties with full kitchens and bars, balancing occupancy swings against steady supply.",
  },
  {
    icon: "🍽",
    title: "Restaurants",
    text: "Kitchens that need produce and dry goods to arrive on schedule, not whenever a vehicle is free.",
  },
  {
    icon: "🧭",
    title: "Tour operators",
    text: "Operators coordinating supplies and equipment across several properties and mobile camps.",
  },
  {
    icon: "🏡",
    title: "Airbnbs & guesthouses",
    text: "Short-stay hosts restocking regularly without a full-time procurement person.",
  },
  {
    icon: "🎪",
    title: "Events & seasonal",
    text: "One-off bulk moves for weddings, conferences and the migration high season.",
  },
];

export type Benefit = { icon: string; title: string; text: string };

export const businessBenefits: Benefit[] = [
  {
    icon: "🗓",
    title: "Scheduled delivery",
    text: "Fixed collection days so supplies move on a rhythm your team can build a week around.",
  },
  {
    icon: "🎧",
    title: "Named point of contact",
    text: "One person who knows your property, your suppliers and your standing arrangements.",
  },
  {
    icon: "📦",
    title: "Consolidated drops",
    text: "Multiple suppliers combined into a single organised delivery at your door.",
  },
  {
    icon: "🧾",
    title: "Monthly invoicing",
    text: "One consolidated statement at month-end instead of settling every trip.",
  },
  {
    icon: "⭐",
    title: "Peak-season priority",
    text: "Business accounts are served first when demand is highest.",
  },
  {
    icon: "📋",
    title: "Delivery history",
    text: "A record of every collection and drop for your own stock and cost tracking.",
  },
];

export type PriceFactor = { title: string; text: string };

export const priceFactors: PriceFactor[] = [
  { title: "Load size & weight", text: "How much space and weight the order takes in the vehicle." },
  { title: "Volume & handling", text: "Bulky, fragile or chilled goods need more care and room." },
  { title: "Destination", text: "Where in the Mara the property sits and the road to reach it." },
  { title: "Schedule vs. one-off", text: "Consolidated scheduled runs cost less per delivery than dedicated trips." },
  { title: "Urgency", text: "Express and same-day trips are priced for a dedicated vehicle." },
];

export type PriceBand = { name: string; forWho: string; examples: string };

export const priceBands: PriceBand[] = [
  {
    name: "Small",
    forWho: "A few boxes",
    examples: "A short top-up shop, a single supplier, one or two cartons.",
  },
  {
    name: "Standard",
    forWho: "A weekly resupply",
    examples: "A full kitchen shop across two or three suppliers, shared vehicle space.",
  },
  {
    name: "Bulk",
    forWho: "A full load",
    examples: "High-season restock, event supplies, near or full-vehicle volume.",
  },
  {
    name: "Express",
    forWho: "Can't wait",
    examples: "A dedicated urgent trip outside the scheduled run.",
  },
];

export const faqs = [
  {
    q: "Do you buy the goods for me?",
    a: "No. You buy and pay your supplier directly. We are a logistics company — we collect your ready, paid-for order and deliver it. This keeps you in full control of what you buy and what you spend.",
  },
  {
    q: "Where do you collect from?",
    a: "Any legitimate supplier in Narok Town — supermarkets like Naivas and Quickmart, wholesalers, butcheries, farmers and hardware suppliers. Give us the supplier name and location when the order is ready.",
  },
  {
    q: "Where do you deliver?",
    a: "Our route is Narok Town to properties in and around the Maasai Mara. If you're not sure your location is covered, send it to us and we'll confirm.",
  },
  {
    q: "How is pricing worked out?",
    a: "Each delivery is quoted on load size, weight, volume, destination, schedule and urgency. Scheduled and consolidated runs are cheaper per delivery than one-off express trips. You get a clear price before anything is collected.",
  },
  {
    q: "Do you give exact delivery times?",
    a: "We give an arrival window with each booking, based on the route and conditions on the day. We don't promise an exact hour — the Mara road doesn't allow it — but scheduled customers know their day.",
  },
  {
    q: "Can you handle chilled or fragile goods?",
    a: "Fragile goods, yes, with careful loading. Chilled goods can be moved when arranged in advance so we can plan the load and timing. We don't carry uninsured highly-perishable stock on spec.",
  },
  {
    q: "How do I book?",
    a: "Fastest is WhatsApp. For a fuller request — multiple suppliers, a business account, a recurring schedule — use the Book a Delivery form and we'll come back to confirm availability and price.",
  },
];
