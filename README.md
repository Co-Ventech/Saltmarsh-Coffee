# Saltmarsh Coffee

A marketing website for a fictional coffee roastery on the Bristol quayside. It shows how a small business site can be built quickly with a data-driven Next.js template: home, services, pricing, about, FAQs, contact and a blog, all with coffee-themed copy, hand-drawn illustrations and a warm design.

Repository: https://github.com/Co-Ventech/Saltmarsh-Coffee

## Pages

| Page | What it shows |
|---|---|
| `/` | Hero, why-us features, this week's coffee, how ordering works, reviews, FAQ, subscription plans, contact |
| `/services` | Home subscriptions, wholesale for cafés, offices, gifts, training |
| `/pricing` | Three subscription plans, a comparison table and pricing FAQs |
| `/about` | Story timeline, values, sourcing and visiting the roastery |
| `/faqs` | Tabbed FAQs: ordering, delivery, brewing, wholesale |
| `/contact` | Address, opening hours, contact form and quick help |
| `/blog` | MDX posts |

## Stack

- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS 4 with a custom warm colour palette; Inter and Fraunces fonts
- MDX blog through Content Collections
- Storybook, Vitest, ESLint and Prettier for development

## Run it

Requires Node 20.9 or newer. No API keys or environment variables are needed.

```bash
npm ci
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Customise it

- **Content:** every page is driven by plain data files in `src/shared/data/pages/` (`home`, `services`, `pricing`, `about`, `faqs`, `contact`). Edit the text, prices and FAQs there.
- **Navigation and footer:** `src/shared/data/global.data.tsx`.
- **Brand and metadata:** `src/config.ts`.
- **Colours and fonts:** `src/assets/styles/base.css` and `app/layout.tsx`.
- **Images:** `src/assets/images/` holds hand-drawn SVG illustrations (hero, coffee bag, pour-over, delivery box) and avatar initials. Swap in your own files with the same names.
- **Blog posts:** `src/content/blog/`.

## Deploy

Any Next.js host works, for example Vercel: import the repository, keep the default settings and deploy.

## Notes

- Saltmarsh Coffee Roasters, its address, phone numbers, emails, prices and reviews are made up for demonstration. The reviews are labelled as samples.
- The contact and subscribe forms are visual only and do not send anything.
- All illustrations are original SVGs, so no stock photography or third-party image licences are involved.
