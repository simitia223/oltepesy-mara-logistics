export const site = {
  name: "Oltepesy Mara Logistics",
  shortName: "Oltepesy",
  descriptor: "Mara Logistics",
  tagline: "You buy. We collect. We deliver.",
  route: "Nairobi & Narok → Maasai Mara",
  routeShort: "Nairobi · Narok → Mara",
  origins: ["Nairobi", "Narok Town"],
  domain: "oltepesymaralogistics.co.ke",
  url: "https://oltepesymaralogistics.co.ke",
  description:
    "Reliable supply transport from Nairobi and Narok to the Maasai Mara. OLTEPESY collects goods from your preferred suppliers and delivers them to camps, lodges, hotels and businesses in the Mara.",

  // WhatsApp — shared line (also Oltepesy Agency's WhatsApp). International format, digits only.
  whatsappNumber: "254741619743",
  // SMS / calls — Oltepesy Mara Logistics line.
  phoneDisplay: "+254 728 073 497",
  phoneHref: "tel:+254728073497",
  email: "oltepesymaralogistics@gmail.com",

  location: "Narok Town, Narok County, Kenya",
  collectionPoint: "Nairobi & Narok Town",
  destination: "Maasai Mara",
};

export const WHATSAPP_DEFAULT_MESSAGE =
  "Hello OLTEPESY, I would like to request a delivery from Nairobi / Narok to the Mara.";

export function whatsappLink(message: string = WHATSAPP_DEFAULT_MESSAGE) {
  const digits = site.whatsappNumber.replace(/\D/g, "");
  const base = digits ? `https://wa.me/${digits}` : "https://wa.me/";
  return `${base}?text=${encodeURIComponent(message)}`;
}

/** Primary navigation — kept short and confident. */
export const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Business", href: "/for-businesses" },
  { label: "Reviews", href: "/reviews" },
  { label: "FAQ", href: "/faq" },
];

/** Everything, for the footer. */
export const footerNav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Business Accounts", href: "/for-businesses" },
  { label: "Pricing", href: "/pricing" },
  { label: "Coverage", href: "/coverage" },
  { label: "Reviews", href: "/reviews" },
  { label: "FAQ", href: "/faq" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Book a Delivery", href: "/book" },
];

export const primaryCta = { label: "Book a Delivery", href: "/book" };
