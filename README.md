# Oltepesy Mara Logistics

Marketing site for **Oltepesy Mara Logistics** — a B2B delivery company running the
**Narok Town → Maasai Mara** route for camps, lodges, hotels, restaurants, tour
operators and Airbnbs.

Model: **They buy. We collect. We deliver.** Customers buy their own goods from
their own supplier in Narok; Oltepesy collects the ready, paid-for order and
delivers it to the property in the Mara. Oltepesy does **not** buy goods for
customers and does not carry restricted goods.

> Separate from `oltepesy-ai-agency` (the AI/digital agency) — different business,
> different site.

Built with **Next.js 16 (App Router) + Tailwind CSS v4 + TypeScript**.

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
| `/` | Home — hero + route visual, model strip, problem, services, how it works, what we move, coverage, for businesses, who we serve, FAQ, CTA |
| `/services` | Scheduled / Bulk / Express / Business / Return logistics |
| `/how-it-works` | 4-step process + delivery status stages |
| `/coverage` | Narok → Mara corridor, collection points, delivery zones, timing |
| `/for-businesses` | Business-account benefits, who it suits, setup |
| `/pricing` | Quote-based — factors, indicative load bands, pricing FAQ |
| `/about` | Story + values |
| `/contact` | Contact form (mailto + WhatsApp) + direct details |
| `/book` | **Book a Delivery** — request form → reference number → WhatsApp/email handoff |

Plus `sitemap.xml`, `robots.txt`, `not-found`.

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

The site is fully static (every route prerenders). Any of these work:

**Vercel (no Git needed):**

```bash
npm i -g vercel
vercel            # first run: link/create project, deploys a preview
vercel --prod     # promote to production
```

**Git host (Cloudflare Pages / Netlify / Vercel dashboard):**
push this repo to GitHub, connect it, build command `npm run build`, output is
handled automatically for Next.js.

**Custom domain:** add `oltepesymaralogistics.co.ke` in the host's dashboard,
then set the DNS records it gives you at your registrar. HTTPS is automatic.
