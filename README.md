# Saltmarsh Coffee

A marketing website for a fictional Bristol coffee roastery: home, services, pricing, about, FAQs, contact and a blog.

**Stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, MDX blog via Content Collections.

## Run it

Requires Node 20.9 or newer. No API keys or environment variables are needed.

```bash
npm ci
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Where things live

- `src/shared/data/pages/*.data.tsx` – all page copy, prices and FAQs. Edit these to change the content.
- `src/assets/images/` – hand-drawn SVG illustrations and avatar initials.
- `src/assets/styles/base.css` – colour palette and fonts.
- `src/content/blog/` – blog posts in MDX.

## Notes

- Saltmarsh Coffee Roasters, its address, phone numbers, emails and reviews are made up for demonstration.
- The contact and subscribe forms are visual only and do not send anything.

## Credits

Built on the [TailNext](https://github.com/arthelokyo/tailnext) template (MIT). Its licence is kept in `LICENSE.md`.
