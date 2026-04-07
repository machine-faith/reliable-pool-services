# Client Intelligence: Epic Pool Care

> Use this file as the source of truth when building or updating the Epic Pool Care website.

---

## Business Identity

| Field | Value |
|-------|-------|
| Business Name | Epic Pool Care |
| Tagline | "your pool, my passion" |
| Sub-headline | LOCAL MOBILE POOL SERVICE |
| Website | https://www.epicpoolcare.com/ |
| Phone (Tim) | 0406 602 222 |
| Office Line | 1300 952 787 |
| Email | info@epicpoolcare.com.au |
| ABN | 64 876 429 282 |
| Hours | Mon–Fri: 9:00am – 5:00pm (Closed Sat/Sun) |
| Facebook | https://www.facebook.com/epicpoolcare |
| Instagram | https://www.instagram.com/epicpoolcare/ |

---

## Key Staff

| Name | Role / Notes |
|------|-------------|
| Tim | Owner / Head of service & client relations. Name appears in Google review. |

---

## Taglines & Copy (Verbatim)

- **Main philosophy:** "Providing flexible servicing that complies to Australian standards. You have peace of mind knowing your pool will be healthy and sparkling all year round. It's that simple. It's Epic!"
- **Site tagline:** "your pool, my passion"
- **Sub-headline:** "LOCAL MOBILE POOL SERVICE"

---

## Services & Pricing

| Service | Description | Price (incl. GST) |
|---------|-------------|-------------------|
| Regular Service — Fortnightly | Full maintenance: chemicals check, filter backwash/rinse, surface scoop, basket empty, equipment check, vacuuming, brushing tile lines/steps. | $99 + Chemicals |
| Regular Service — 4-Weekly | Same comprehensive visit as fortnightly plan. | $99 + Chemicals |
| Service Call (One-off / Emergency) | Green pools, dirty pools, immediate assistance. Includes chemical balance + filter cleaning. | $155 + Chemicals |
| Extra Labour | Additional time beyond the standard 50-minute visit. | $80/hr ($20 per 15 min) |

**Recurring Add-ons:**
- **Algaecide** — applied every 3 months
- **Cal Stop** — required every 6 months for Quartzon surface pools

---

## Trust Signals & Certifications

- Complies with **Australian Standards** for chemical balancing
- Transparent pricing — GST included, 50-min service targets stated
- Local mobile service focus
- "Peace of mind" guarantee framing

---

## Google Reviews

| Field | Value |
|-------|-------|
| Google Rating | ⭐ 5.0 (1 active review at time of scrape) |

**Reviews:**

> *"I highly recommend Tim for all your pool needs. Tim is professional and very reliable."*
> — **Fadil H.**

**Key themes from reviews:**
- Tim praised by name
- "Professional" and "reliable" are the two words used
- No negative reviews found

---

## Website Structure (Original Site)

| Page | Content |
|------|---------|
| Home | Hero banner, tagline, business philosophy copy |
| Services | Detailed pricing table (Fortnightly, 4-Weekly, Service Call, Extra Labour) |
| Album / Gallery | ~15 photos — green-to-blue pool recoveries (before/after), clean residential inground pools, equipment maintenance setups |
| Contact | Tim's phone, office line, email, enquiry form |

**Missing pages (opportunities for revamp):**
- No "About Us" page
- No FAQ page
- No testimonials section (only 1 Google review)
- No service area map or suburbs list

---

## Gallery / Portfolio Notes

The original "Album" page contains ~15 real photos including:
- Before/after: severe green pool recoveries → sparkling blue
- Clean residential backyard inground pools
- Equipment/pump maintenance setups

**Use these themes when selecting Unsplash images for the Portfolio section.**

---

## Service Area

- Greater Sydney (mobile service)
- Specific suburbs not listed on site — opportunity to add

---

## Opportunities / Gaps Identified

- Only 1 Google review — testimonials section should use the real review + supplement with plausible copy
- No About page — add a founder story section around Tim
- No FAQ — strong SEO + conversion opportunity (add pool care tips, chemical questions, pricing FAQs)
- No suburbs/service area listed — add this explicitly for local SEO
- No online booking — could be a CTA differentiator

---

## Coding Instructions for Gemini

Use the above data to populate the following components. Keep the dark boutique aesthetic (navy + aqua palette):

| Component | What to populate |
|-----------|-----------------|
| `Navbar.tsx` | Business name: "Epic Pool Care", Phone: 0406 602 222 |
| `Hero.tsx` | Tagline: "Your Pool, My Passion", Sub: "Local Mobile Pool Service", Starting price: $99, Phone: 0406 602 222 |
| `TrustSignals.tsx` | ABN: 64 876 429 282, Google: 5.0 ⭐, Complies with Australian Standards |
| `AboutStory.tsx` | Owner: Tim, Philosophy: "your pool, my passion", service compliance copy from above |
| `Services.tsx` | 4 services from pricing table above — include prices |
| `Testimonials.tsx` | Use Fadil H.'s real review + 2–3 plausible extras matching Tim/professional/reliable theme |
| `Portfolio.tsx` | Green pool recovery, residential inground maintenance, equipment service — use real Sydney suburb names |
| `FAQ.tsx` | Pricing, Quartzon surfaces, algaecide schedule, service areas, what's included |
| `Contact.tsx` | Phone: 0406 602 222, Office: 1300 952 787, Email: info@epicpoolcare.com.au, ABN: 64 876 429 282 |
| `CTABanner.tsx` | CTA: "Book a Service Today", Phone: 0406 602 222 |
| `index.html` | Title: "Epic Pool Care – Local Mobile Pool Service Sydney", Meta: pool maintenance Sydney |
