# OLTEPESY Mara Logistics

Marketing site for **OLTEPESY Mara Logistics** — a B2B delivery company moving
supplies **from Nairobi and Narok Town to the Maasai Mara** for camps, lodges,
hotels, restaurants, tour operators and other businesses.

Model: **You buy. We collect. We deliver.** Customers buy and pay their own
supplier (in Nairobi or Narok); OLTEPESY collects the ready, paid-for order and
delivers it to the property in the Mara. OLTEPESY does **not** buy goods for
customers and does not carry restricted goods.

> Separate from `oltepesy-ai-agency` (the AI/digital agency) — different business,
> different site.

Built with **Next.js 16 (App Router) + Tailwind CSS v4 + TypeScript + lucide-react**.

## Photography

Real photos aren't in yet. `src/components/ui/Photo.tsx` renders labelled
placeholders describing the shot that belongs in each slot. To use a real image:
drop the file in `public/photos/` and pass `src="/photos/your-file.jpg"` to the
`<Photo>` in question (hero background, Problem section, Proof section, etc.).

## Contact / brand config

Everything is in `src/lib/site.ts` — WhatsApp `254741619743`, phone
`+254 728 073 497`, email `oltepesymaralogistics@gmail.com`, domain
`oltepesymaralogistics.co.ke`. Route text via `route` / `routeShort` / `origins`.
Copy, services, FAQs, pricing tiers, etc. live in `src/lib/content.ts`.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run lint
```

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Home — hero + route card, model strip, problem, how it works, services, what we move, delivery status, proof of delivery, coverage, business accounts, trust grid, who we serve, business categories, FAQ preview, CTA |
| `/services` | Scheduled / Bulk / Express / Business / Return logistics |
| `/how-it-works` | 4-step process + route band + delivery status timeline |
| `/for-businesses` | Business-account benefits, who it suits, setup |
| `/pricing` | 4 named tiers (Scheduled / Standard / Express / Business Account), each with a CTA |
| `/coverage` | Nairobi & Narok collection, Mara delivery, timing |
| `/faq` | Full FAQ accordion |
| `/about` | Story + values |
| `/contact` | Contact form (mailto + WhatsApp) + direct details |
| `/book` | **Book a Delivery** — grouped request form → reference number → WhatsApp/email handoff |

Nav is `Home / Services / How It Works / Business / FAQ` (`nav` in `site.ts`);
the footer carries the full list (`footerNav`). Plus `sitemap.xml`, `robots.txt`,
`not-found`, and a floating WhatsApp button / mobile sticky CTA bar.

## No backend

- **Contact form** opens the visitor's email client (`mailto:`), with a WhatsApp
  fallback.
- **Booking form** validates client-side, then shows a confirmation with a
  **display-only reference** (`OLP-YYYY-NNNN`) and pre-filled WhatsApp / email
  messages containing the full request. Nothing is persisted.

## Contact / brand config

All live in `src/lib/site.ts` (values are set, not placeholders):

| Field | Value |
| --- | --- |
| `whatsappNumber` | `254741619743` (shared WhatsApp line, also Oltepesy Agency) |
| `phoneDisplay` / `phoneHref` | `+254 728 073 497` — SMS / calls |
| `email` | `oltepesymaralogistics@gmail.com` |
| `url` / `domain` | `https://oltepesymaralogistics.co.ke` |

The `.co.ke` domain and Gmail inbox may still need to be registered/created.
Copy, services, FAQs, pricing bands, etc. live in `src/lib/content.ts`.

## Deploy

Live at **https://main.oltepesy-mara-logistics.pages.dev** (Cloudflare Pages).

`next build` emits a fully static bundle to `out/` (`output: "export"` in
`next.config.ts`). Deploy = build + direct-upload that folder:

```bash
npm run deploy
```

First run only: `npx wrangler login` (opens browser to authorise Cloudflare).
After that, `npm run deploy` builds and pushes a new version every time.

**Custom domain:** in the Cloudflare dashboard → Pages project
`oltepesy-mara-logistics` → *Custom domains* → add `oltepesymaralogistics.co.ke`,
then set the DNS records it shows at the `.co.ke` registrar. HTTPS is automatic.
