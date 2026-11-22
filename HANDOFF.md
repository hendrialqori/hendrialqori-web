# Hendri Alqori Portfolio: Implementation Handoff

> **For Claude Code:** this folder is the single source of truth for rebuilding Hendri Alqori's portfolio.
> Read this file fully before writing code. Copy is final: use the text from `content/` **verbatim**.
> The visual reference is in `design-reference/` (HTML mockups with every inline style). When this
> document and the mockup disagree, **this document wins**.

---

## 0. Package contents

```
portfolio-handoff/
├─ HANDOFF.md                  ← this spec
├─ content/
│  ├─ site.ts                  ← all homepage + global copy, links, SEO defaults
│  └─ projects.ts              ← 3 case studies (typed)
├─ public/images/
│  ├─ avatar.jpg               ← round portrait in the hero (320×320)
│  └─ projects/<slug>/
│     ├─ cover.jpg             ← screenshot of the project's hero (card + case study hero)
│     └─ overview.jpg          ← layered collage for the Overview section
└─ design-reference/
   ├─ home.dc.html             ← homepage mockup (inline styles = exact values)
   └─ case-study.dc.html       ← case study template mockup (data in the <script> block)
```

---

## 1. Tech stack

| Concern | Choice |
|---|---|
| Framework | **Next.js (latest stable, App Router)**, TypeScript, `src/` directory |
| Styling | **Tailwind CSS v4** (CSS-first config with `@theme`) |
| Fonts | `next/font/google`: **Plus Jakarta Sans** (400–800) and **JetBrains Mono** (400, 500) |
| Images | `next/image` for every image |
| Icons | Inline SVG components (stroke icons, `stroke-width` 1.6–2.2). No icon library needed |
| Rendering | 100% static: Server Components + `generateStaticParams`. No client JS except where noted |
| Hosting | Vercel |
| Lint/format | ESLint (next config) + Prettier |

No UI kit, no CSS-in-JS, no animation library.

### Folder structure

```
src/
├─ app/
│  ├─ layout.tsx               ← fonts, <html lang="en">, global metadata, JSON-LD Person/WebSite
│  ├─ page.tsx                 ← homepage
│  ├─ projects/[slug]/page.tsx ← case study template
│  ├─ projects/[slug]/opengraph-image.tsx
│  ├─ opengraph-image.tsx
│  ├─ sitemap.ts
│  ├─ robots.ts
│  ├─ manifest.ts
│  ├─ not-found.tsx
│  └─ globals.css              ← Tailwind import + @theme tokens
├─ components/
│  ├─ layout/ (Frame, Header, Footer, Section, SectionLabel)
│  ├─ home/   (Hero, StackStrip, Services, Work, ProjectCard, CtaCard, About, Experience, Contact)
│  ├─ case-study/ (CaseHeader, InfoStrip, BrowserFrame, Overview, SplitSection, Goals, Role, Solutions, Results, Testimonial, CaseCta)
│  └─ ui/     (Button, Icon, JsonLd)
├─ content/ (site.ts, projects.ts)   ← copied from this package
└─ lib/seo.ts                        ← helpers for metadata + JSON-LD
```

---

## 2. Design tokens

Concept: **"Refined minimal, square grid."** White page, black ink, one lime accent, thin grey
grid lines, **no rounded corners anywhere** (the one exception is the round hero avatar).

### Colors

| Token | Hex | Use |
|---|---|---|
| `ink` | `#0A0A0A` | Primary text, buttons' border, dark sections |
| `ink-2` | `#262626` | Strong body text |
| `ink-3` | `#404040` | Body text, nav links |
| `muted` | `#525252` | Labels, meta, mono text (passes 4.5:1 on white) |
| `line` | `#E8E8E8` | All grid lines, borders, cell gaps |
| `line-strong` | `#D4D4D4` | Secondary button border |
| `surface` | `#FFFFFF` | Page and cells |
| `surface-2` | `#F7F7F7` | "Before this project" box, CTA cell |
| `surface-3` | `#F4F4F4` | Placeholders |
| `accent` | `#B9FF66` | Primary buttons, highlights, section numbers. **Always black text on it** |
| `dark-line` | `#262626` | Divider inside dark sections |
| `dark-muted` | `#A3A3A3` | Mono text on dark |
| `dark-body` | `#D4D4D4` | Links on dark |
| `status` | `#16A34A` | "Available" dot |

Project brand colors (backgrounds behind screenshots): Hutama `#1C2B3A`, Ratu `#62735C`, Fractal `#2F8FA3`.

### Tailwind v4 theme (`src/app/globals.css`)

```css
@import "tailwindcss";

@theme {
  --color-ink: #0A0A0A;
  --color-ink-2: #262626;
  --color-ink-3: #404040;
  --color-muted: #525252;
  --color-line: #E8E8E8;
  --color-line-strong: #D4D4D4;
  --color-surface-2: #F7F7F7;
  --color-surface-3: #F4F4F4;
  --color-accent: #B9FF66;
  --color-status: #16A34A;

  --font-sans: var(--font-jakarta), system-ui, sans-serif;
  --font-mono: var(--font-jetbrains), ui-monospace, monospace;

  --radius-*: initial;          /* kill all radius utilities: the design is square */
  --container-frame: 1200px;
}

:root { --pad: clamp(20px, 4vw, 48px); }   /* horizontal padding of every cell */
html { scroll-behavior: smooth; }
body { background: #fff; color: var(--color-ink); }
```

Re-add a single `rounded-full` only for the avatar (use `style={{ borderRadius: "50%" }}`).

### Typography

| Role | Font | Size | Weight | Line-height | Tracking |
|---|---|---|---|---|---|
| H1 hero | Jakarta | `clamp(40px, 6vw, 80px)` | 700 | 1.04 | -0.035em |
| H1 case study | Jakarta | `clamp(44px, 7vw, 88px)` | 700 | 1.0 | -0.04em |
| H2 section | Jakarta | `clamp(30px, 4vw, 46px)` (case study: `clamp(26px, 3vw, 36px)`) | 700 | 1.1 | -0.03em |
| H2 contact | Jakarta | `clamp(36px, 6vw, 72px)` | 700 | 1.04 | -0.035em |
| H3 card | Jakarta | 26px (project), 21px (service), 18–20px (case) | 700 | 1.2 | -0.02em |
| Body L | Jakarta | 18–19px | 400 | 1.6–1.7 | 0 |
| Body | Jakarta | 15–16px | 400 | 1.6–1.65 | 0 |
| Label / meta | JetBrains Mono | 12–13px | 400–500 | 1.4 | 0.04em, uppercase |
| Nav / button | Jakarta | 14–15px | 500–600 | 1 | 0 |

### Spacing

- Section vertical padding: `clamp(64px, 8vw, 112px)` (case study: `clamp(48px, 6vw, 80px)`).
- Hero padding: `clamp(72px, 9vw, 128px)` top, `clamp(64px, 8vw, 112px)` bottom.
- Horizontal padding: `var(--pad)` everywhere.
- Gaps: 12 (buttons), 14 (label→heading), 24–32 (blocks), 48 (header→grid).
- Touch targets ≥ 44px (buttons are 52–56px tall).

### Components look

- **Primary button:** `bg-accent text-ink border border-ink`, height 52px (56px on dark), padding-x 24px, 15px/600, trailing arrow icon. Square.
- **Secondary button:** `border border-line-strong text-ink`, same size. On dark: `border-[#525252] text-white`.
- **Text link:** 15px/600, underline, `underline-offset-4`, optional ↗ icon.
- **Section label:** mono 12px muted uppercase, with a number chip: `bg-accent text-ink px-1.5 py-0.5 mr-1.5` (e.g. `[01] SERVICES`).
- **Browser frame** (for screenshots): white box, top bar 40px with three 10×10 **square** grey dots (`#E5E5E5`) and a `#EEEEEE` bottom border, image below with `object-cover object-top`.

---

## 3. Layout system (important)

1. **Frame:** the whole site sits in a centered column `max-w-[1200px] mx-auto border-x border-line`, inside an outer wrapper with `px-[clamp(12px,2vw,24px)]`.
2. **Every horizontal divider must touch both frame edges.** Never draw a line that stops short.
   - Sections are separated by `border-b border-line` on the section itself.
   - Grids inside a padded section are made **full-bleed** with negative margins:
     `mx-[calc(var(--pad)*-1)]`, then `border-t border-line`, and the section uses `pb-0` so the grid's last row sits on the section's bottom border.
3. **Grid cells use the 1px-gap trick:** parent `grid gap-px bg-line`, children `bg-white`. This draws perfect 1px lines between cells.
4. **Closed boxes are allowed** (all four sides drawn), e.g. the "Before this project" box or the scope checklist.
5. **Two-column split sections** (case study): `flex flex-wrap gap-px bg-line`; left cell `flex-[1_1_300px]`, right cell `flex-[2_1_520px] min-w-0`, both `bg-white`. When they wrap on mobile, the gap becomes a horizontal line automatically.
6. **No rounded corners. No gradients in UI** (gradients exist only inside the images). No emoji.

---

## 4. Pages

### 4.1 Homepage `/`

Sections in order. Anchor ids in brackets. All copy is in `content/site.ts`.

1. **Header** (`<header>`): left "Hendri Alqori" (16px/700, links to `#top`). Right nav: Work `#work`, Services `#services`, About `#about`, then a primary button "Start a project ↗" → `#contact`. `border-b`. Wraps on mobile. Not sticky.
2. **Hero** `[#top]`, centered column, `gap-8`:
   - Round avatar 88×88 (`/images/avatar.jpg`, `priority`), 3px white border + `box-shadow: 0 0 0 1px #0A0A0A, 0 0 0 6px #B9FF66`.
   - Badge: bordered pill-less box (`border border-line bg-white px-3.5 py-2`, mono 12px) with an 8×8 square green dot ringed by a 4px accent shadow, text "Available for freelance projects".
   - `<h1>` centered, max-width 820px: "I design, build and ship web apps, " + `<mark>`-style span "end to end." with `bg-accent px-[0.12em]`.
   - Description 19px, centered, max-width 560px.
   - Buttons centered: primary "Start a project →" (`#contact`), secondary "See my work" (`#work`).
   - **Grid background** on the hero section only:
     ```css
     background-image:
       radial-gradient(ellipse 70% 65% at 50% 45%, rgba(255,255,255,0) 0%, rgba(255,255,255,.6) 60%, #fff 100%),
       linear-gradient(#E9E9E9 1px, transparent 1px),
       linear-gradient(90deg, #E9E9E9 1px, transparent 1px);
     background-size: 100% 100%, 56px 56px, 56px 56px;
     background-position: center;
     ```
3. **Stack strip:** one row, `border-b`, mono 13px muted, label "Stack" in ink, then the list from `site.stack`, `gap-x-7 gap-y-3`, wraps.
4. **Services** `[#services]`: label `[01] SERVICES`, H2 "What I can build for you", right-aligned intro (max 380px). Full-bleed 2-cell grid (`minmax(300px,1fr)`), each cell: 28px stroke icon, H3, text, padding `40px var(--pad)`.
5. **Selected work** `[#work]`: label `[02] SELECTED WORK`, H2 "Projects I've shipped". Full-bleed grid `repeat(auto-fit, minmax(340px, 1fr))` → 3 columns on desktop.
   - **ProjectCard** (one per project, all identical weight): `<article>` cell, padding `32px var(--pad) 40px`, `gap-[22px]`:
     - Screenshot block: `bg-[brandColor] pt-9 px-9`, number chip top-left (`absolute top-3.5 left-4`, accent bg, mono 12px), BrowserFrame with `cover` at `aspect-video object-top`.
     - Category (mono 12px muted), H3 name, `cardDescription` 16px, link "View project ↗" → `/projects/[slug]` (`mt-auto`).
   - **CtaCard** spanning the full row (`col-span-full`), `bg-surface-2`, padding `40px var(--pad)`: chip `04` + "YOUR PROJECT", big line "Your project could be next." (`clamp(30px,4vw,48px)`), primary button "Start a project →" → `#contact`. The whole card is one `<a>`.
6. **About** `[#about]`: full-bleed 2-column grid (`minmax(380px,1fr)`, gap-px).
   - Left cell: label `[03] ABOUT`, H2, paragraphs.
   - Right cell (no horizontal padding on the cell itself): mono label "EXPERIENCE", then rows from `site.experience`, each row `px-[var(--pad)] py-[22px] border-t`, last row also `border-b`; role 17px/700, company 15px ink-3, period mono 13px muted aligned right. Then link "Download full CV (PDF)" → `site.cvUrl`.
7. **Contact** `[#contact]`: dark section `bg-ink text-white`, `pb-0`. Label `[04] CONTACT` (mono `#A3A3A3`), H2 "Have a project in mind? " + span in accent "Let's build it together.". Buttons: primary (accent bg, mail icon) showing the email → `mailto:`, secondary "Chat on WhatsApp" → `site.whatsapp` (`target="_blank" rel="noopener"`). Bottom bar full-bleed, `border-t border-[#262626]`, `py-6 px-[var(--pad)]`: links LinkedIn, GitHub, Download CV (left), footer text (right, mono 12px `#A3A3A3`).

### 4.2 Case study `/projects/[slug]`

Generate the 3 pages with `generateStaticParams` from `projects`. Unknown slug → `notFound()`.

1. **Header:** "Hendri Alqori" → `/`; nav "← Back to all work" → `/#work`; primary "Start a project ↗" → `/#contact`.
2. **CaseHeader** (padding top `clamp(56px,7vw,96px)`, `pb-0`): chip "CASE STUDY" + category; H1 = `name`; `summary` (max 720px, `clamp(18px,2vw,22px)`).
   - **InfoStrip** (full-bleed `<dl>`, grid `minmax(170px,1fr)`, `border-y`): Client, Type, Year, Duration (**render only if `duration`**), and a cell with the live link (`urlLabel` ↗, `target="_blank" rel="noopener"`).
3. **Hero screenshot:** padded block `clamp(40px,5vw,64px) var(--pad)`, `border-b`: `bg-[brandColor]` box with padding `clamp(24px,6vw,80px)` top/sides and 0 bottom, BrowserFrame with `cover`, `aspect-[16/8] object-top`, soft shadow `0 -2px 30px rgba(0,0,0,.08)`. Use `priority`.
4. **[01] OVERVIEW:** header row (label + H2 "What's on the site" left, `overviewIntro` right max 420px), then `overviewImage` **full-bleed** (`w-[calc(100%+2*var(--pad))] -mx-[var(--pad)] border-t`), `pb-0`.
5. **[02] CONTEXT** (SplitSection): left H2 "The client & the problem"; right: `context` (18px ink-2), then box `bg-surface-2 px-7 py-6` with mono label "BEFORE THIS PROJECT" + `problem`.
6. **[03] GOALS** (SplitSection): left H2 "What we set out to do"; right `<ol>` rows `G1…Gn`, each row `px-[var(--pad)] py-7`, `border-b` on all but the last, mono number + 18px/600 text.
7. **[04] MY ROLE** (SplitSection): left H2 "What I handled"; right: `role` (18px), then a closed grid box (`minmax(150px,1fr)`, gap-px, border) with one cell per `scope` item: 22×22 accent square with a black check + 15px/600 label.
8. **[05] SOLUTION** (SplitSection): left H2 "Key decisions"; right list of `solutions`: each row `flex gap-6 px-[var(--pad)] py-8`, `border-b` on all but last; 40×40 black square with accent mono number `01…`, H3 20px, text 16px.
9. **[06] RESULTS** (only if `results`): metrics in a closed 3-col grid (36px/700 value, 14px label) + text. **Currently undefined for all projects → section not rendered.**
10. **Testimonial** (only if `testimonial`): full-width `bg-accent` section, quote `clamp(22px,3vw,34px)`/600, figcaption name + position. **Currently undefined → not rendered.**
11. **CaseCta** (dark): H2 "Need a website like this? " + accent "Let's talk."; buttons "Email me" (accent) and "Chat on WhatsApp"; full-bleed footer bar like the homepage.

Section numbers must stay continuous: if Results is hidden there is simply no `06`.

---

## 5. SEO requirements

### 5.1 Metadata (App Router Metadata API)

In `app/layout.tsx`:

```ts
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.seo.defaultTitle, template: site.seo.titleTemplate },
  description: site.seo.description,
  keywords: site.seo.keywords,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "en_US", url: "/", siteName: site.name,
               title: site.seo.defaultTitle, description: site.seo.description },
  twitter: { card: "summary_large_image", title: site.seo.defaultTitle, description: site.seo.description },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
};
export const viewport: Viewport = { themeColor: "#FFFFFF", width: "device-width", initialScale: 1 };
```

Case study `generateMetadata({ params })`:
- `title`: `` `${project.name} Case Study` `` (template adds "| Hendri Alqori")
- `description`: `project.summary` (keep ≤ 160 chars; trim if needed)
- `alternates.canonical`: `/projects/${slug}`
- `openGraph`: `type: "article"`, url, title, description, images handled by the route's `opengraph-image.tsx`.

### 5.2 Open Graph images (`next/og`)

- `app/opengraph-image.tsx` (1200×630): white background with the 56px grid pattern, "Hendri Alqori" mono label, big headline "I design, build and ship web apps, end to end." with the accent highlight, footer "Fullstack Web Developer · Pontianak, Indonesia". Load Plus Jakarta Sans 700 for the image.
- `app/projects/[slug]/opengraph-image.tsx`: left text block (CASE STUDY chip, project name, category) on white; right side the project's `cover.jpg` on its `brandColor`. Set `alt` for both.

### 5.3 Structured data (JSON-LD via a `<JsonLd>` server component)

- **Layout:** `WebSite` (name, url) and `Person`:
  ```json
  { "@context": "https://schema.org", "@type": "Person", "name": "Hendri Alqori",
    "jobTitle": "Fullstack Web Developer", "url": "<site.url>", "image": "<site.url>/images/avatar.jpg",
    "email": "mailto:dev.hendrialqori@gmail.com",
    "address": { "@type": "PostalAddress", "addressLocality": "Pontianak", "addressCountry": "ID" },
    "sameAs": ["<linkedin>", "<github>"],
    "knowsAbout": ["Web development", "Next.js", "React", "Vue.js", "TypeScript", "Node.js"] }
  ```
- **Homepage:** `ProfessionalService` (name "Hendri Alqori, Web Development", areaServed "ID", serviceType from `services.items`, provider → Person).
- **Case study:** `CreativeWork` (name, description, url, image = cover, dateCreated = year, creator → Person, about = client) + `BreadcrumbList` (Home → Work → Project).

### 5.4 Crawling

- `app/sitemap.ts`: `/` (priority 1, monthly) + each `/projects/[slug]` (priority 0.8, yearly). Use `site.url`.
- `app/robots.ts`: allow all, `sitemap: ${site.url}/sitemap.xml`, `host: site.url`.
- `app/manifest.ts`: name, short_name "Hendri", theme/background `#FFFFFF`, icons.
- `not-found.tsx`: same frame + "Page not found" + link home; `robots: { index: false }`.

### 5.5 On-page

- `<html lang="en">`. One `<h1>` per page. Headings follow order (h1 → h2 per section → h3 in cards).
- Landmarks: `<header>`, `<nav aria-label="Main">`, `<main>`, `<section aria-labelledby>`, `<footer>`.
- Every `next/image` has a descriptive `alt` (e.g. "Hero section of the Ratu Florist website"); decorative SVGs get `aria-hidden="true"`.
- External links: `target="_blank" rel="noopener noreferrer"`.
- Internal links use `next/link`.

### 5.6 Performance (Core Web Vitals targets: LCP < 2.5s, CLS < 0.1, INP < 200ms)

- All pages statically generated. No client components unless required (none are required now).
- `next/font` with `display: "swap"`, subsets `["latin"]`, exposed as CSS variables `--font-jakarta` / `--font-jetbrains`.
- `next/image` with explicit `width/height` or `fill` + `sizes`:
  - Project card: `sizes="(min-width: 1200px) 400px, (min-width: 768px) 50vw, 100vw"`.
  - Case study hero & overview: `sizes="(min-width: 1200px) 1200px, 100vw"`.
  - `priority` only on: hero avatar (home), hero screenshot (case study).
- Lighthouse target: **≥ 95** on Performance, Accessibility, Best Practices, SEO (mobile).

---

## 6. Accessibility

- Text contrast ≥ 4.5:1 (all greys above already pass on white). Accent is a background only, always with black text.
- Visible focus: `focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink` on all links/buttons (on dark sections use the accent outline).
- Use real `<a>`/`<button>`; icon-only controls need `aria-label`.
- Respect `prefers-reduced-motion` (only smooth scroll is used; disable it under reduced motion).

---

## 7. Responsive behavior

- Breakpoints come from content (`auto-fit` + `minmax`), not fixed columns. Check at 375, 768, 1024, 1440.
- Header nav wraps under the name on small screens.
- Work grid: 3 → 2 → 1 columns; the CTA card always spans the full row.
- About and SplitSections stack; lines between stacked cells come from the `gap-px` trick.
- Hero headline stays centered; buttons wrap and stay centered.
- InfoStrip cells wrap into rows; each cell keeps its padding.

---

## 8. Open items for Hendri (do not invent values)

- [ ] Final domain → set `NEXT_PUBLIC_SITE_URL`.
- [ ] GitHub username in `site.github`.
- [ ] Confirm WhatsApp number in `site.whatsapp`.
- [ ] Add CV PDF at `public/cv/Hendri_Alqori_CV.pdf`.
- [ ] Optional second About paragraph (remove the TODO if not provided).
- [ ] Favicon + apple-touch-icon (simple "HA" monogram or initials is fine).
- [ ] Optional per project: `duration`, `results`, `testimonial`. Leave undefined to hide.

---

## 9. Acceptance checklist

- [ ] Homepage and 3 case studies match `design-reference/` visually (square corners, full-bleed lines, lime accent).
- [ ] All copy matches `content/` exactly. No em dashes (—) in visible copy.
- [ ] `View project` on each card opens the correct `/projects/[slug]`.
- [ ] Hidden sections (Duration, Results, Testimonial) do not render and leave no empty lines.
- [ ] `next build` passes with no type or lint errors; all routes are static (`○` in build output).
- [ ] `/sitemap.xml`, `/robots.txt`, `/manifest.webmanifest`, OG images resolve.
- [ ] JSON-LD validates in Google's Rich Results Test.
- [ ] Lighthouse mobile ≥ 95 on all four categories.
- [ ] Works at 375px with no horizontal scroll.

---

## 10. Suggested build order (prompts for Claude Code)

1. "Scaffold a Next.js App Router + TypeScript + Tailwind v4 project. Copy `content/` to `src/content/` and `public/` to `public/`. Set up fonts and the `@theme` tokens from HANDOFF.md §2."
2. "Build the layout primitives from §3 (Frame, Header, Section, SectionLabel, Button, BrowserFrame, Footer)."
3. "Build the homepage sections from §4.1 in order, using `site.ts` and `projects.ts`."
4. "Build the case study template from §4.2 with `generateStaticParams` and conditional sections."
5. "Implement all SEO items from §5 (metadata, OG images, JSON-LD, sitemap, robots, manifest, not-found)."
6. "Run `next build` and a Lighthouse pass; fix anything below the §9 checklist."
