# Ahmed Baqir — Portfolio

Personal portfolio site for Ahmed Baqir, GoHighLevel Specialist and Customer Success Lead.
Plain HTML, CSS and JavaScript, served and built with [Vite](https://vitejs.dev).

## Prerequisites

- [Git](https://git-scm.com/downloads)
- [Node.js 18 or newer](https://nodejs.org) (LTS recommended)
- [GitHub CLI](https://cli.github.com) (only needed for the one-step setup script)

## One-step setup

The setup script installs dependencies, creates the GitHub repository, pushes the code,
turns on GitHub Pages and starts the site locally.

Windows (PowerShell):

```powershell
powershell -ExecutionPolicy Bypass -File .\setup.ps1
```

macOS / Linux:

```bash
bash setup.sh
```

## Manual setup

```bash
npm install          # install Vite
npm run dev          # local dev server at http://localhost:5173 (auto-reloads on save)
npm run build        # production build into dist/
npm run preview      # preview the production build at http://localhost:4173
```

Create the repository and push:

```bash
git init -b main
git add .
git commit -m "Initial commit: portfolio site"
# Create an empty repo named ahmed-baqir-portfolio on github.com (no README), then:
git remote add origin https://github.com/<your-username>/ahmed-baqir-portfolio.git
git push -u origin main
```

## Deploying to GitHub Pages

A workflow in `.github/workflows/deploy.yml` builds and publishes the site on every push to `main`.
If the setup script didn't enable it, go to **Settings → Pages** in the repo and set **Source** to
**GitHub Actions**. The site will be live at `https://<your-username>.github.io/ahmed-baqir-portfolio/`.

## Project structure

```
index.html          Page content (all sections)
src/styles.css      Theme, animations, responsive rules
src/main.js         Rolling title, cursor spotlight, active nav link
vite.config.js      Dev server and build config
.github/workflows/  GitHub Pages deployment
```

## Editing content

- Text, links and sections live in `index.html`.
- The rotating titles are the `TITLES` list at the top of `src/main.js`.
- Placeholders to fill in: client testimonials and your LinkedIn link (search for `[` in `index.html`).
