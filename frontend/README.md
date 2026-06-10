# Membership Mentorship Management Platform (MSL)

![MSL Logo](https://github.com/your-org/Membership-Mentorship-Management-Platform/raw/main/frontend/public/1.png)

> **Empowering youth through structured mentorship, academic excellence, and community leadership across Ethiopia.**

---

## Table of Contents
- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Demo](#demo)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Development Server](#running-the-development-server)
  - [Building for Production](#building-for-production)
- [Project Structure](#project-structure)
- [Styling & Design System](#styling--design-system)
- [Authentication Flow](#authentication-flow)
- [Environment Variables](#environment-variables)
- [Testing](#testing)
- [Contribution Guide](#contribution-guide)
- [License](#license)
- [Contact & Credits](#contact--credits)

---

## About the Project

The **Membership Mentorship Management Platform (MSL)** is a modern web application built to connect students with mentors, track academic progress, and organise community‑driven projects.  It started in **Addis Ababa** and now spans **six regional branches**, serving over **1,120 mentees** with more than **180 certified mentors**.

Key goals:
- Provide a **single source of truth** for mentorship relationships.
- Enable **transparent progress tracking** with a three‑tier curriculum.
- Facilitate **community projects** and **leadership camps** across the country.
- Offer a **responsive, premium UI** that feels alive with micro‑animations, glass‑morphism cards, and vibrant gradients.

---

## Features

| Feature | Description |
|---|---|
| **Dynamic Hero Section** | Full‑screen hero with bold typography and a call‑to‑action button. |
| **About Highlights** | Real‑time stats (active mentees, branches, mentors, projects). |
| **Featured Projects** | Grid of community projects with hover scaling and impact tags. |
| **Core Development Programs** | Interactive cards describing Level‑1‑3 curriculum. |
| **Upcoming Events Calendar** | Simple event cards with date/location icons. |
| **Latest News** | Card‑based news feed with “Read article” links. |
| **Contact CTA** | Gradient background with quick contact info and CTA buttons. |
| **Authentication Stub** | Basic credential check (`src/lib/auth.ts`) – easy to replace with real backend. |
| **Responsive Layout** | Mobile‑first design using Tailwind CSS utilities. |
| **SEO Optimised** | Proper `<title>`, meta description, hierarchical headings, and semantic HTML. |

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js (App Router) – *Note: uses the custom Next.js variant described in `node_modules/next/dist/docs/`.* |
| **Language** | TypeScript & JSX/TSX |
| **Styling** | Tailwind CSS (utility‑first) – custom design tokens for brand colours (`brand-teal`, `brand-amber`). |
| **UI Components** | Custom `FloatCard` component with elevation & glass‑morphism effects. |
| **Authentication** | Stub in `src/lib/auth.ts`. |
| **Package Manager** | npm (runs `npm run dev`). |
| **Version Control** | Git |

---

## Demo

A live demo can be accessed at **`http://localhost:3000`** after running the dev server.  The home page showcases the hero, about, projects, programs, events, news, and contact sections.

---

## Getting Started

### Prerequisites
- **Node.js >= 18** (recommended LTS)
- **npm** (comes with Node) or **pnpm** if you prefer.
- Git (optional, for cloning the repository)

### Installation
```bash
# Clone the repo (replace with your remote URL)
git clone https://github.com/your-org/Membership-Mentorship-Management-Platform.git

# Change into the frontend folder
cd Membership-Mentorship-Management-Platform/frontend

# Install dependencies
npm install
```

### Running the Development Server
```bash
npm run dev
```
The app will be available at **`http://localhost:3000`**.  Hot‑module replacement (HMR) is enabled, so any file change instantly reflects in the browser.

### Building for Production
```bash
npm run build   # creates an optimized production bundle
npm start       # serves the built app (defaults to port 3000)
```

---

## Project Structure
```
frontend/
├─ app/                     # Next.js App Router pages & layout
│   ├─ (public)/            # Public landing page components
│   │   └─ page.tsx         # Home page – contains hero, about, etc.
│   └─ ...
├─ components/              # Re‑usable UI components (FloatCard, etc.)
├─ public/                  # Static assets (images, favicons)
├─ src/
│   ├─ lib/                 # Helper libraries (auth.ts, API wrappers)
│   └─ styles/              # Global CSS – Tailwind config lives at root
├─ next.config.js           # Next.js configuration (custom docs path)
├─ tailwind.config.js       # Tailwind custom theme (brand colours, fonts)
└─ README.md                # <-- you are reading this!
```

---

## Styling & Design System

The UI follows a **premium, dynamic aesthetic**:
- **Color Palette**: Custom HSL‑based `brand-teal` (`#00b3b0`) and `brand-amber` (`#ffb400`).
- **Typography**: Google Font **Inter** (fallback: system sans‑serif).
- **Micro‑animations**: Hover scale on images, smooth button transitions, and an infinite spin text‑path animation on the watch‑video button.
- **Glass‑morphism**: Cards have a translucent background (`bg-[#1C2333] text-white/80 border-white/5 backdrop-blur-sm`).
- **Responsive Grid**: Tailwind `grid-cols-1 md:grid-cols-3` ensures proper layout on all breakpoints.

To modify the design, edit `tailwind.config.js` – you’ll find the `brand` colour definitions and font family there.

---

## Authentication Flow

`src/lib/auth.ts` currently implements a **stubbed credential check**:
```ts
if (credentials?.email === "superadmin@example.com" && credentials?.password === "password") {
  return { id: "0", name: "Super Admin User", role: "super_admin" };
}
// … other roles …
return null;
```
Replace this logic with a real API call (e.g., NextAuth.js, Firebase Auth, or a custom OAuth provider).  The returned object shape matches the session shape used throughout the app.

---

## Environment Variables

Create a `.env.local` in the `frontend` folder for any secrets:
```
NEXT_PUBLIC_API_URL=https://api.yourdomain.com
NEXTAUTH_SECRET=YOUR_RANDOM_STRING
```
The project currently does not require additional env variables, but they are useful when integrating a real backend.

---

## Testing

*No test suite is present yet.*  We recommend adding **Jest** for unit tests and **Playwright** for end‑to‑end testing of the UI flows (login, navigation, project cards).

---

## Contribution Guide

1. **Fork the repository** and create a new branch for your feature/bugfix.
2. **Run lint** – the project uses `eslint` with the `@typescript-eslint` plugin.
   ```bash
   npm run lint
   ```
3. **Submit a Pull Request** with a clear description of the change.  Follow the conventional commit format (`feat:`, `fix:`, `docs:` etc.).
4. **Code Review** – maintain the premium UI guidelines (no plain colours, keep micro‑animations, use Tailwind utilities).

---

## License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

## Contact & Credits

- **Project Lead** – *Your Name* – [your.email@example.com]
- **Design System** – Inspired by modern UI/UX trends (glass‑morphism, vibrant gradients).
- **Special Thanks** to the open‑source community for Next.js, Tailwind, and the many React contributors.

---

*Happy coding! 🚀*
