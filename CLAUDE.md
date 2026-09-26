# Ahmed Baqir — Portfolio

Personal portfolio site for Ahmed Baqir, GoHighLevel Specialist and Customer Success Lead.
Its job is to win freelance GoHighLevel client projects.

## Stack
- Plain HTML, CSS and JavaScript, served and built with Vite (`npm run dev`, `npm run build`).
- `index.html`: all page content and sections (Hero, Skills strip, Services, Why work with me,
  Process, Experience, Kind words [hidden], Contact, Footer).
- `src/styles.css`: theme, animations and responsive rules. Mobile/tablet layout is done with
  `max-width` media queries only (1000px and 680px breakpoints) so the desktop layout at
  1024px and wider never changes; most rules target inline styles via attribute selectors,
  plus a few dedicated classes (`.hero-actions`, `.hero-stats`, `.roller-line`,
  `.contact-card`, `.contact-actions`) added where precise mobile targeting was needed.
- `src/main.js`: rolling designation title, cursor spotlight + hero grid highlight, active nav link.
- `public/`: static files served as-is — `favicon.svg`, `og-image.png` (1200×630 share preview).
- `.github/workflows/deploy.yml`: deploys to GitHub Pages on every push to `main`.

## Design rules
- Dark theme: black background (#0A0A0A), white-to-grey gradient headings, no colour accents.
- Fonts: Syne (display), Manrope (body), JetBrains Mono (rolling title).
- Logo: the gear-and-clock mark (mechanism + timepiece hands, evoking old machinery and
  automation), inlined in the nav next to "Ahmed Baqir" and as `public/favicon.svg`. The
  `.logo-gear` path rotates 45° on hover (disabled under `prefers-reduced-motion`).
  Never use "AB".
- Booking link: https://api.leadconnectorhq.com/widget/bookings/ahmed-b — used by the nav
  "Book a call" button, the hero "Book a discovery call" button, and the first/highlighted
  button in the Contact section. All external links open in a new tab with `rel="noopener"`.
- No numbering anywhere: service cards, "Why work with me" and Process steps use plain
  headings, not 01/02/03-style labels.
- Section labels have no numbers; they use a short line before the name.
- Sticky nav: links must land with the section heading just below the nav bar
  (tuned with `scroll-margin-top` on each section id; Services/Approach/Experience/Contact
  all share the same `-28px` value).
- The page ends at the Contact section plus a slim footer; no extra space after.
- Respect `prefers-reduced-motion`; keep the site responsive down to 390px wide with no
  horizontal overflow at any width.

## Content facts (do not invent others)
- 4+ years at HL Pro Tools (Baam), June 2022 to present: Technical Support Specialist,
  then Technical Support Team Lead, now Customer Success Lead (CS operations, client
  onboarding and activation).
- BS Computer Science, Bahria University, 2025. Final project: Syncode (React, JS, C++).
- Certifications: GoHighLevel, WordPress, React. Languages: English, Urdu.
- Contact: ahmedbaqirkhan@gmail.com, WhatsApp +92 307 0085539,
  LinkedIn https://www.linkedin.com/in/ahmed-baqir-284078180
- Testimonials are still placeholders — the "Kind words" section is hidden (`display:none`)
  until real quotes replace them; its markup is kept in place, not deleted.

## Git workflow
- Default branch: `main`.
- After every change the user asks for: run `npm run build` to confirm it succeeds,
  then commit with a clear message and push to `main` automatically — do this without
  asking for confirmation first. If the build fails, fix the issue before committing.
