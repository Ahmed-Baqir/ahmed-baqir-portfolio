# Ahmed Baqir — Portfolio

Personal portfolio site for Ahmed Baqir, GoHighLevel Specialist and Customer Success Lead.
Its job is to win freelance GoHighLevel client projects.

## Stack
- Plain HTML, CSS and JavaScript, served and built with Vite (`npm run dev`, `npm run build`).
- `index.html`: all page content and sections (Hero, Skills strip, Services, Why work with me,
  Process, Experience, Kind words, Contact, Footer).
- `src/styles.css`: theme, animations and responsive rules.
- `src/main.js`: rolling designation title, cursor spotlight + hero grid highlight, active nav link.
- `.github/workflows/deploy.yml`: deploys to GitHub Pages on every push to `main`.

## Design rules
- Dark theme: black background (#0A0A0A), white-to-grey gradient headings, no colour accents.
- Fonts: Syne (display), Manrope (body), JetBrains Mono (rolling title).
- Logo: the two-node workflow mark next to "Ahmed Baqir" in the nav. Never use "AB".
- Section labels have no numbers; they use a short line before the name.
- Sticky nav: links must land with the section heading just below the nav bar
  (tuned with `scroll-margin-top` on each section id).
- The page ends at the Contact section plus a slim footer; no extra space after.
- Respect `prefers-reduced-motion`; keep the site responsive down to phone width.

## Content facts (do not invent others)
- 4+ years at HL Pro Tools (Baam), June 2022 to present: Technical Support Specialist,
  then Technical Support Team Lead, now Customer Success Lead (CS operations, client
  onboarding and activation).
- BS Computer Science, Bahria University, 2025. Final project: Syncode (React, JS, C++).
- Certifications: GoHighLevel, WordPress, React. Languages: English, Urdu.
- Contact: ahmedbaqirkhan@gmail.com, WhatsApp +92 307 0085539,
  LinkedIn https://www.linkedin.com/in/ahmed-baqir-284078180
- Testimonials are still placeholders.

## Git workflow
- Default branch: `main`. Commit with clear messages and push after each change
  so GitHub Pages redeploys.
