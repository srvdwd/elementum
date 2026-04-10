# Elementum — React Website

A pixel-perfect React implementation of the Elementum Figma design.

## Sections

- **Navbar** — Fixed, transparent → frosted glass on scroll, mobile hamburger menu
- **Hero** — Large serif headline with colour highlights, floating avatars with parallax on mouse move
- **Tomorrow** — Split layout, circular image, animated float
- **Progress** — Reversed split layout, red triangle decorations, wavy SVG line
- **Services** — 3-row list with hover arrow interaction
- **Testimonials** — Floating avatars, quote card, dot navigation
- **Newsletter** — Mint green CTA section with subscribe button
- **Footer** — 4-column grid, responsive

## Tech Stack

- React 18
- Vite
- Plain CSS (component-scoped)
- Docker + Nginx (production)

---

## 🐳 Run with Docker (Recommended)

```bash
# Build and start — app runs at http://localhost:3000
docker-compose up --build
```

To stop:
```bash
docker-compose down
```

---

## 💻 Run Locally (Development)

```bash
npm install
npm start
# Open http://localhost:5173
```

Build for production:
```bash
npm run build
npm run preview
```

---

## Project Structure

```
elementum/
├── Dockerfile
├── docker-compose.yml
├── nginx.conf
├── vite.config.js
├── index.html
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css          ← CSS variables & reset
    └── components/
        ├── Navbar.jsx / .css
        ├── Hero.jsx / .css
        ├── Tomorrow.jsx / .css
        ├── Progress.jsx / .css
        ├── Services.jsx / .css
        ├── Testimonials.jsx / .css
        ├── Newsletter.jsx / .css
        └── Footer.jsx / .css
```

---

## Responsive Breakpoints

| Breakpoint | Layout |
|---|---|
| > 900px | Full desktop layout |
| 600–900px | Stacked sections, 2-col footer |
| < 600px | Mobile, 1-col footer, smaller type |
