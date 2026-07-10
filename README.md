# Valentine Azolibe · Portfolio

Professional portfolio: case studies, a shipping log, and live client work.
Stack: React 19 · TypeScript · Vite · Tailwind CSS v4 · Framer Motion · React Router.

## Run

```bash
npm install
npm run dev      # local dev
npm run build    # type-check + production build (dist/)
```

## Editing content (no component changes needed)

All content lives in `src/data/`:

| File | What it controls |
|---|---|
| `site.ts` | Name, role, intro, email, links, resume |
| `projects.ts` | The 4 featured case studies + the "More projects" grid |
| `shippingLog.ts` | The Shipping Log timeline. Add an entry every time you ship something. |

Screenshots go in `public/images/`. The resume PDF is `public/Valentine-Azolibe-CV.pdf`.

## Deploy (Vercel)

1. Push this folder to a GitHub repo.
2. Import the repo on vercel.com. Vite is auto-detected.
3. `vercel.json` already contains the SPA rewrite so client-side routes work.
