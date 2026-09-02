export const site = {
  name: "Oltepesy Mara Logistics",
  shortName: "Oltepesy",
  descriptor: "Mara Logistics",
  tagline: "They buy. We collect. We deliver.",
  route: "Narok Town → Maasai Mara",
  domain: "oltepesymaralogistics.co.ke",
  url: "https://oltepesymaralogistics.co.ke",
  description:
    "Oltepesy Mara Logistics runs reliable B2B deliveries between Narok Town and the Maasai Mara. You buy from your own supplier — we collect the ready order in Narok and deliver it to your camp, lodge, hotel or business in the Mara.",

  // WhatsApp — shared line (also Oltepesy Agency's WhatsApp). International format, digits only.
  whatsappNumber: "254741619743",
  // SMS / calls — Oltepesy Mara Logistics line.
  phoneDisplay: "+254 728 073 497",
  phoneHref: "tel:+254728073497",
  email: "oltepesymaralogistics@gmail.com",

  location: "Narok Town, Narok County, Kenya",
  collectionPoint: "Narok Town",
  destination: "Maasai Mara",
};

export const WHATSAPP_DEFAULT_MESSAGE =
  "Hello Oltepesy, I'd like to enquire about a delivery from Narok Town to the Maasai Mara.";

export function whatsappLink(message: string = WHATSAPP_DEFAULT_MESSAGE) {
  const digits = site.whatsappNumber.replace(/\D/g, "");
  const base = digits ? `https://wa.me/${digits}` : "https://wa.me/";
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Coverage", href: "/coverage" },
  { label: "For Businesses", href: "/for-businesses" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const primaryCta = { label: "Book a Delivery", href: "/book" };
