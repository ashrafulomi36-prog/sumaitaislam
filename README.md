# Sumaita Islam — Portfolio

A premium, minimal, white-background portfolio built with Next.js 15, TypeScript, Tailwind, Framer Motion, React Three Fiber, Lenis smooth scroll, and a fully editable Sanity CMS backend. Every section's content (hero, about, education, skills, projects, certificates, hackathons, achievements, resume, contact, etc.) is driven by Sanity — nothing is hardcoded.

## Tech Stack
- Next.js 15 (App Router) + TypeScript
- TailwindCSS, Lucide Icons
- Framer Motion (page/section animations), GSAP-ready
- React Three Fiber + drei (hero 3D wireframe orb + particles)
- Lenis smooth scrolling
- Sanity CMS (embedded Studio at `/studio`)
- next-themes (dark mode)

## Project Structure
```
app/                Next.js App Router pages (home, studio, sitemap, robots, 404)
components/          UI sections (Hero, About, Education, Skills, Projects, etc.)
components/three/    React Three Fiber scenes
lib/sanity.ts        Sanity client + GROQ queries
sanity/schemas/      All Sanity content schemas
sanity.config.ts     Studio configuration
```

## 1. Setup

```bash
npm install
cp .env.example .env.local
```

Create a free project at https://sanity.io, then fill in `.env.local`:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=xxxx
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## 2. Run locally
```bash
npm run dev
```
- Site: http://localhost:3000
- CMS Studio: http://localhost:3000/studio

## 3. Add content
Open `/studio` and create one document for each: Site Settings, Navigation, Hero, About, Education (multiple), Skill Category + Skill, Project (multiple), Certificate, Hackathon, Achievement, Resume (upload PDF), Social Link, Contact, Footer, SEO.

All images go through Sanity's CDN automatically (`lib/sanity.ts` → `urlFor`).

## 4. Deploy to Vercel
```bash
vercel
```
Add the same environment variables in the Vercel dashboard → Project → Settings → Environment Variables. `vercel.json` is preconfigured for the Next.js framework.

## 5. Editing without code
Anything content-related — text, images, links, order, featured toggles — is editable from `/studio`. To reorder homepage sections, edit the `sectionOrder` array on Site Settings (wire this into `app/page.tsx` if you want fully dynamic section ordering — the schema field is ready, sections currently render in a sensible default order).

## Notes / Next Steps
- Replace placeholder colors/fonts in `tailwind.config.ts` and `app/globals.css` if you want to deviate from the spec palette (#111111 / #2563EB / #FFFFFF).
- The Hero 3D scene (`components/three/HeroScene.tsx`) is intentionally lightweight (one wireframe sphere + sparse particles) to protect Lighthouse performance — extend with more R3F primitives if desired.
- Add `shadcn/ui` components as needed via `npx shadcn@latest add <component>` for any additional UI primitives (dialogs, command palette, etc.).
- A loading screen, premium custom cursor, and magnetic buttons are scaffolded via Framer Motion in `Reveal.tsx` / `Hero.tsx` — extend `SmoothScrollProvider` or a new `CustomCursor.tsx` component for the cursor-follow effect site-wide.
