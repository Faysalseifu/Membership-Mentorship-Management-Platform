# Frontend Development Plan
## Membership & Mentorship Management Platform
**Client:** Muslim Students League — **Agency:** AllCan Development Center  
**Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion  
**Total Duration:** 12 Weeks · Frontend spans Phases 3, 4, and 5

---

## Design Direction — Anti-Gravity

The platform's visual language is built around **anti-gravity**: every surface feels lifted, layered, and breathing. Cards float. Panels hover. Content has altitude.

### Core Principles

- **Elevation over flatness.** UI layers are separated by depth, not color alone. Cards sit above the page. Modals float above cards. Tooltips above modals.
- **Blur as atmosphere.** `backdrop-filter: blur()` is used heavily — sidebars, modals, and sticky headers feel like frosted glass against the content behind them.
- **Subtle lift shadows.** No harsh drop shadows. Instead: `box-shadow: 0 4px 24px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.04)` — soft, wide, diffuse. The card looks like it's gently floating.
- **Motion is gravity-aware.** Elements enter from slightly below (`y: 12` → `y: 0`) and exit upward. Staggered children reveal in sequence. Nothing snaps; everything eases.
- **Negative space breathes.** Generous padding between sections. The page should never feel cluttered — only the current focus has density.

### Typography

```
Display:  Clash Display (weight 500–700) — headings, hero text, section titles
Body:     Satoshi (weight 400–500) — all paragraph and UI text
Mono:     JetBrains Mono — routes, code snippets, data values
```

### Color Tokens

```css
/* Base surfaces — stacked like layers of paper */
--surface-0: #F5F4F1;   /* page background */
--surface-1: #FFFFFF;   /* card level */
--surface-2: #FFFFFF;   /* elevated card, modal */
--surface-overlay: rgba(255,255,255,0.72); /* frosted glass panels */

/* Brand */
--brand-teal:   #0F6E56;  /* primary action, active states */
--brand-teal-l: #E1F5EE;  /* teal tints, subtle fills */
--brand-amber:  #BA7517;  /* secondary accent, warnings */
--brand-amber-l:#FAEEDA;

/* Text */
--text-primary:   #1A1A18;
--text-secondary: #5F5E5A;
--text-muted:     #A8A69E;

/* Semantic */
--success: #1D9E75;
--warning: #EF9F27;
--danger:  #D85A30;
--info:    #3B8BD4;

/* Elevation shadows */
--shadow-sm: 0 1px 4px rgba(0,0,0,0.05);
--shadow-md: 0 4px 24px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.04);
--shadow-lg: 0 12px 48px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.05);
--shadow-xl: 0 24px 80px rgba(0,0,0,0.14), 0 4px 16px rgba(0,0,0,0.06);
```

### Motion Defaults

```ts
// Framer Motion — standard page element entrance
const fadeUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] }
}

// Stagger container for lists and card grids
const staggerContainer = {
  animate: { transition: { staggerChildren: 0.07 } }
}

// Modal / drawer entrance
const modalEnter = {
  initial: { opacity: 0, y: 20, scale: 0.97 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit:    { opacity: 0, y: 10, scale: 0.98 },
  transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] }
}
```

---

## Project Structure

```
/
├── app/
│   ├── (public)/                    # Public website — no auth
│   │   ├── page.tsx                 # Homepage
│   │   ├── about/page.tsx
│   │   ├── projects/page.tsx
│   │   ├── programs/page.tsx
│   │   ├── news/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── join/page.tsx
│   │   └── contact/page.tsx
│   │
│   ├── auth/
│   │   ├── login/page.tsx
│   │   └── reset/page.tsx
│   │
│   ├── dashboard/
│   │   ├── layout.tsx               # Shared dashboard shell (sidebar + topbar)
│   │   ├── page.tsx                 # Role-aware redirect
│   │   │
│   │   ├── superadmin/
│   │   │   ├── page.tsx             # System dashboard
│   │   │   ├── roles/page.tsx
│   │   │   ├── levels/page.tsx
│   │   │   ├── reports/page.tsx
│   │   │   ├── audit/page.tsx
│   │   │   └── approvals/page.tsx
│   │   │
│   │   ├── admin/
│   │   │   ├── page.tsx             # Admin dashboard
│   │   │   ├── members/
│   │   │   │   ├── page.tsx         # Member list
│   │   │   │   ├── new/page.tsx
│   │   │   │   └── [id]/page.tsx    # Member profile
│   │   │   ├── mentors/
│   │   │   │   └── assign/page.tsx
│   │   │   ├── promotions/page.tsx
│   │   │   ├── mentor-apps/page.tsx
│   │   │   ├── activities/page.tsx
│   │   │   ├── special/page.tsx
│   │   │   ├── alumni/page.tsx
│   │   │   └── reports/page.tsx
│   │   │
│   │   ├── mentor/
│   │   │   ├── page.tsx             # Mentor dashboard
│   │   │   ├── members/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [id]/page.tsx
│   │   │   ├── evaluations/page.tsx
│   │   │   ├── promotions/page.tsx
│   │   │   └── alerts/page.tsx
│   │   │
│   │   └── member/
│   │       ├── page.tsx             # Member dashboard
│   │       ├── profile/page.tsx
│   │       ├── progress/page.tsx
│   │       ├── mentor/page.tsx
│   │       ├── activities/
│   │       │   ├── page.tsx
│   │       │   └── new/page.tsx
│   │       └── notifications/page.tsx
│   │
│   ├── settings/page.tsx
│   ├── notifications/page.tsx
│   ├── unauthorized/page.tsx
│   └── not-found.tsx
│
├── components/
│   ├── ui/                          # Base component library (see below)
│   ├── dashboard/                   # Dashboard shell components
│   ├── members/                     # Member-specific components
│   ├── evaluations/                 # Eval & promotion components
│   ├── charts/                      # Recharts wrappers
│   └── public/                      # Public website components
│
├── lib/
│   ├── api.ts                       # Axios instance + interceptors
│   ├── auth.ts                      # NextAuth config
│   └── utils.ts
│
├── hooks/                           # Custom React hooks
├── store/                           # Zustand global state
├── types/                           # Shared TypeScript types
└── middleware.ts                    # Auth + role-based route protection
```

---

## Middleware — Role-Based Route Protection

```ts
// middleware.ts
import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

export default withAuth(function middleware(req) {
  const role = req.nextauth.token?.role
  const path = req.nextUrl.pathname

  if (path.startsWith('/dashboard/superadmin') && role !== 'super_admin')
    return NextResponse.redirect(new URL('/unauthorized', req.url))

  if (path.startsWith('/dashboard/admin') && !['super_admin','admin'].includes(role))
    return NextResponse.redirect(new URL('/unauthorized', req.url))

  if (path.startsWith('/dashboard/mentor') && !['super_admin','admin','mentor'].includes(role))
    return NextResponse.redirect(new URL('/unauthorized', req.url))
})

export const config = { matcher: ['/dashboard/:path*', '/settings', '/notifications'] }
```

---

## Shared Component Library (`/components/ui/`)

Build these first — everything else depends on them.

### Layout & Shell
| Component | Description |
|-----------|-------------|
| `DashboardLayout` | Sidebar + topbar shell, role-aware nav items |
| `Sidebar` | Collapsible, frosted glass, active state per route |
| `Topbar` | Search, notification bell, avatar dropdown |
| `PageHeader` | Page title + breadcrumb + optional action button |
| `PageContainer` | Max-width wrapper with standard padding |

### Cards & Surfaces
| Component | Props | Notes |
|-----------|-------|-------|
| `FloatCard` | `children, elevated?, hover?` | Core anti-gravity card — shadow-md, lifts to shadow-lg on hover |
| `StatCard` | `label, value, trend?, icon?` | Metric summary card for dashboards |
| `GlassPanel` | `children` | Frosted glass panel — backdrop-blur, semi-transparent |
| `SectionDivider` | `label?` | Horizontal rule with optional floating label |

### Data Display
| Component | Props |
|-----------|-------|
| `DataTable` | `columns, data, loading?, pagination?` |
| `StatusBadge` | `status: 'active'\|'inactive'\|'alumni'\|'pending'` |
| `LevelBadge` | `level: number` |
| `TierBadge` | `tier: 'silver'\|'gold'\|'platinum'` |
| `ProgressBar` | `value, max, color?` |
| `ActivityTimeline` | `events: TimelineEvent[]` |
| `EmptyState` | `icon, title, description, action?` |

### Forms & Inputs
| Component | Notes |
|-----------|-------|
| `Input` | Floating label, focus ring, error state |
| `Select` | Custom styled, searchable |
| `FileUpload` | Drag-and-drop, preview, progress |
| `MultiStepForm` | Step indicator, navigation, validation |
| `ScoreSlider` | Evaluation score input (0–100) with color feedback |
| `SearchBar` | Global search with keyboard shortcut (⌘K) |

### Feedback & Overlays
| Component | Notes |
|-----------|-------|
| `Modal` | Framer Motion entrance, backdrop blur, escape closes |
| `Drawer` | Right-side slide-in panel |
| `Toast` | Bottom-right notification stack, auto-dismiss |
| `ConfirmDialog` | Destructive action confirmation |
| `AlertBanner` | Inline contextual warnings (mentor overload, unassigned) |
| `LoadingSkeleton` | Animated placeholder matching target layout |

### Navigation
| Component | Notes |
|-----------|-------|
| `Breadcrumb` | Auto-generated from route segments |
| `TabBar` | Underline tabs, animated indicator |
| `FilterBar` | Pills-style filter row with clear-all |
| `Pagination` | With page size selector |
| `NotificationBell` | Badge count, dropdown preview, mark-all-read |

---

## Phase 3 — Internal UI Foundation (Weeks 5–8)

### Week 5 — Setup & shared components

- [ ] Init Next.js 14 project with TypeScript + Tailwind
- [ ] Install: Framer Motion, Recharts, React Hook Form, Zod, Zustand, NextAuth, Axios
- [ ] Set up Clash Display + Satoshi via `next/font` (self-hosted)
- [ ] Define all CSS tokens in `globals.css`
- [ ] Build `DashboardLayout`, `Sidebar`, `Topbar`, `PageHeader`
- [ ] Build `FloatCard`, `StatCard`, `StatusBadge`, `LevelBadge`
- [ ] Build `DataTable` with sorting and loading skeleton
- [ ] Build `Modal`, `Drawer`, `Toast` system
- [ ] Set up `middleware.ts` for route protection
- [ ] Set up Axios instance with auth token injection + 401 redirect

### Week 6 — Auth & member interface

**Auth pages**
- [ ] `/auth/login` — floating card centered, brand logo, animated form entrance
- [ ] `/auth/reset` — 3-step flow: email → OTP → new password

**Member interface** (simplest role, build first)
- [ ] `/dashboard/member` — welcome card, level progress ring, recent activities, next steps
- [ ] `/dashboard/member/profile` — editable profile, avatar upload
- [ ] `/dashboard/member/progress` — level timeline, score breakdown per criterion, promotion checklist
- [ ] `/dashboard/member/mentor` — mentor card (name, contact, session history)
- [ ] `/dashboard/member/activities` — activity list with status badges
- [ ] `/dashboard/member/activities/new` — activity type selector, evidence upload, submit

### Week 7 — Admin interface

- [ ] `/dashboard/admin` — stat cards row, pending actions list, recent member additions
- [ ] `/dashboard/admin/members` — full data table, filters (status/level/region/gender), bulk export
- [ ] `/dashboard/admin/members/new` — multi-step form (personal info → categorize → assign level → assign mentor)
- [ ] `/dashboard/admin/members/[id]` — profile view with activity timeline, mentor card, level history
- [ ] `/dashboard/admin/mentors/assign` — split view: mentor list (with workload bar) + unassigned members
- [ ] `/dashboard/admin/activities` — activity management table, create modal, attendance sheet
- [ ] `/dashboard/admin/special` — special member list with tier badges and endorsement section
- [ ] `/dashboard/admin/alumni` — alumni table with role assignment modal

### Week 8 — Mentor interface & Super Admin

**Mentor interface**
- [ ] `/dashboard/mentor` — member count, pending evaluations count, alert banner (if overloaded)
- [ ] `/dashboard/mentor/members` — member cards grid (not table), level badge per card
- [ ] `/dashboard/mentor/members/[id]` — read-only profile + activity log + eval history

**Super Admin**
- [ ] `/dashboard/superadmin` — system health widget, activity feed, global stats
- [ ] `/dashboard/superadmin/roles` — user table + assign role modal + permission matrix
- [ ] `/dashboard/superadmin/levels` — drag-to-reorder level editor, criteria form per level

---

## Phase 4 — Advanced Features (Weeks 7–9, overlapping)

### Evaluation & Promotion
- [ ] `/dashboard/admin/promotions` — promotion queue, evaluation summary per member, approve/reject with note
- [ ] `/dashboard/mentor/evaluations` — multi-factor score form (attendance / participation / contribution / behavior), draft save, submit
- [ ] `/dashboard/mentor/promotions` — eligible members list, promote recommendation form

### Mentor Qualification
- [ ] `/dashboard/admin/mentor-apps` — application table, criteria checklist view, feedback form, approve/reject
- [ ] Mentor application flow (from within member dashboard when eligible)

### Reporting & Analytics
- [ ] `/dashboard/admin/reports` — filter panel (region / level / gender / date range), charts: members per level (bar), growth trend (line), dropout risk table
- [ ] `/dashboard/superadmin/reports` — all of the above + mentor workload distribution
- [ ] `/dashboard/superadmin/audit` — log table with date filter and detail drawer
- [ ] `/dashboard/superadmin/approvals` — override queue with audit note requirement

### Notifications
- [ ] Notification bell with real-time badge (WebSocket or polling)
- [ ] `/notifications` — full list, filter by type, mark read
- [ ] `/dashboard/mentor/alerts` — mentor-specific: overload, unassigned, inactivity warnings

---

## Phase 5 — Public Website (Weeks 8–10)

All pages use Next.js SSG (`generateStaticParams`) except `/join` which is SSR.

### Pages

| Page | Route | Key UI notes |
|------|-------|--------------|
| Homepage | `/` | Full-viewport hero with floating stat counters, programs preview, news strip |
| About | `/about` | Mission / vision split layout, leadership grid with hover cards, timeline |
| Projects | `/projects` | Masonry card grid, category filter bar, detail modal |
| Programs & Events | `/programs` | Toggle: calendar view / list view, event detail drawer |
| Join Application | `/join` | Multi-step form, animated step indicator, success confirmation |
| News | `/news` | Article cards with featured story hero, paginated list |
| Contact | `/contact` | Contact form + floating map card + partner logos strip |

### Anti-gravity moments on the public site
- Hero section: floating cards with member stats drift slowly (CSS `@keyframes` — subtle vertical oscillation, 6s loop)
- Project cards: slight tilt on hover (`rotateX(2deg) translateY(-4px)`) using CSS `perspective`
- Navigation: sticky, frosted glass at scroll depth > 0
- Section transitions: elements enter from below as you scroll (`IntersectionObserver` + Framer Motion)
- Join form: active step card "rises" above the others (scale + shadow)

---

## Phase 6 — Polish & Deployment (Weeks 11–12)

### Performance
- [ ] Audit with Lighthouse — target 90+ on all public pages
- [ ] Image optimization via `next/image` everywhere
- [ ] Code splitting — dynamic imports for charts and heavy modals
- [ ] API response caching with React Query (`staleTime: 5min` for list data)

### Accessibility
- [ ] All interactive elements keyboard-navigable
- [ ] ARIA labels on icon-only buttons
- [ ] Focus trapping in modals and drawers
- [ ] Color contrast — all text passes WCAG AA (4.5:1 minimum)
- [ ] `prefers-reduced-motion` — disable Framer Motion animations when set

### Responsive
- [ ] All dashboards usable at 768px (tablet)
- [ ] Public website fully responsive down to 375px
- [ ] Sidebar collapses to icon-only at 1024px, hidden at 768px (drawer)
- [ ] Data tables scroll horizontally on mobile

### Deployment
- [ ] Vercel (recommended) — zero-config Next.js deployment
- [ ] Environment variables: `NEXTAUTH_SECRET`, `NEXT_PUBLIC_API_URL`, `DATABASE_URL`
- [ ] Set up preview deployments for PR reviews

---

## Key Dependencies

```json
{
  "next": "14.x",
  "react": "18.x",
  "typescript": "5.x",
  "tailwindcss": "3.x",
  "framer-motion": "11.x",
  "react-hook-form": "7.x",
  "zod": "3.x",
  "zustand": "4.x",
  "next-auth": "4.x",
  "axios": "1.x",
  "recharts": "2.x",
  "@tanstack/react-query": "5.x",
  "@tanstack/react-table": "8.x",
  "react-dropzone": "14.x",
  "date-fns": "3.x",
  "clsx": "2.x",
  "tailwind-merge": "2.x"
}
```

---

## First Day Checklist

Start here before writing a single component.

```bash
# 1. Init project
npx create-next-app@latest msl-platform --typescript --tailwind --app --src-dir
cd msl-platform

# 2. Install dependencies
npm install framer-motion react-hook-form zod zustand next-auth axios \
  recharts @tanstack/react-query @tanstack/react-table \
  react-dropzone date-fns clsx tailwind-merge

# 3. Add fonts (download Clash Display + Satoshi, put in /public/fonts/)
# Configure in app/layout.tsx with next/font/local

# 4. Set up globals.css with all CSS tokens

# 5. Build FloatCard first — it's the atom everything is built on
# components/ui/FloatCard.tsx

# 6. Build DashboardLayout
# app/dashboard/layout.tsx

# 7. Wire up middleware.ts with role protection

# 8. Build the /auth/login page — you'll need it to test everything
```

---

*Plan version 1.0 — AllCan Development Center — May 2026*
