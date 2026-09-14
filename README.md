# Rakpong Nagosa — Resume

An online resume built as a single-page product site: Apple-style sections, scroll reveals, dark/light section palettes, and a print stylesheet so the same page exports cleanly to PDF.

🔗 **Live:** _add your deployment URL here_

---

## Highlights

- **Single source of truth** — every piece of content lives in [`src/data/resume.ts`](src/data/resume.ts). Update the data, the whole page follows.
- **Print-ready** — the "Save as PDF" button calls the browser's print dialog, and a dedicated `@media print` layer flattens effects, hides chrome, and keeps cards from breaking across pages.
- **Motion that stays out of the way** — `Reveal` fades sections in on scroll via `IntersectionObserver`; `DragRail` gives the project cards drag-to-scroll with arrow controls and native touch panning.
- **Responsive and accessible** — semantic sections, keyboard-reachable navigation, `aria-hidden` on decorative layers.
- **Fast by default** — React Server Components everywhere except the few pieces that genuinely need the client.

## Tech Stack

| Layer | Tools |
| --- | --- |
| Framework | Next.js 16 (App Router), React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS 4, CSS custom properties |
| Fonts | `next/font` — Inter |
| Tooling | ESLint (`eslint-config-next`) |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Project Structure

```
src/
├─ app/
│  ├─ layout.tsx      # fonts, metadata (pulled from the resume data)
│  ├─ page.tsx        # section order for the whole page
│  └─ globals.css     # design tokens, section palettes, print rules
├─ components/
│  ├─ Nav.tsx         # sticky navigation
│  ├─ Hero.tsx        # name, headline, contact details
│  ├─ Overview.tsx    # professional summary
│  ├─ Experience.tsx  # work history
│  ├─ Skills.tsx      # skill groups
│  ├─ Projects.tsx    # project cards inside a DragRail
│  ├─ Specs.tsx       # job preferences
│  ├─ Contact.tsx     # call to action
│  ├─ ActionBar.tsx   # floating bar: Save as PDF / Get in touch
│  ├─ DragRail.tsx    # horizontal drag-scroll rail
│  └─ Reveal.tsx      # scroll-triggered reveal wrapper
└─ data/
   └─ resume.ts       # ← all content lives here
```

## Make It Yours

1. Edit `src/data/resume.ts` — `profile`, `preferences`, `skillGroups`, `experience`, `projects`.
2. Tweak the palette in `src/app/globals.css` (`--accent`, `--gold`, and the `.sec-dark` / `.sec-light` tokens).
3. Replace `src/app/favicon.ico`.

Page metadata (title and description) is generated from `profile`, so it updates itself.

## Contact

**Rakpong Nagosa** — Backend / Full Stack / Lead Developer
📧 Farmrakpong0@gmail.com
Tel. 0952952788
📍 Samut Prakan, Thailand
