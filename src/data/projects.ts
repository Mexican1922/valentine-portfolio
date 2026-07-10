export interface CaseStudy {
  slug: string;
  title: string;
  kind: string;
  summary: string;
  image?: string;
  gallery?: string[];
  private?: boolean;
  live?: string;
  github?: string;
  stack: string[];
  problem: string;
  build: string[];
  architecture: { label: string; detail: string }[];
  outcome: string;
}

export interface MiniProject {
  title: string;
  description: string;
  image?: string;
  live?: string;
  github?: string;
  tags: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "fredan-textiles",
    title: "Fredan Textiles",
    kind: "Full-Stack · Private Client Work",
    summary:
      "Premium textile catalog and bespoke fashion design platform: a React storefront powered by a Django commerce backend, live on its own domain.",
    private: true,
    live: "https://fredantextiles.com",
    image: "/images/fredan-shop.png",
    gallery: ["/images/fredan-bespoke.png"],
    stack: [
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Framer Motion",
      "Django",
      "Django REST Framework",
      "Render",
    ],
    problem:
      "A textile business needed to move from in-person sales to a digital storefront: a browsable fabric catalog, bespoke design requests, order handling, and a way to reach customers directly. Off-the-shelf platforms couldn't model bespoke tailoring.",
    build: [
      "React 19 + TypeScript storefront with a catalog, gallery, and bespoke request flows, animated with Framer Motion",
      "Django backend split into focused apps: products, orders, gallery, and newsletter",
      "REST API consumed by the frontend; admin panel gives the owner full control of inventory and content",
      "Installable PWA with a web manifest, so customers can add the store to their home screen",
      "Deployed the backend to Render with a production Procfile; frontend live at fredantextiles.com on a custom domain",
    ],
    architecture: [
      { label: "Frontend", detail: "React 19 · TypeScript · Vite · Tailwind v4 · React Router" },
      { label: "Backend", detail: "Django + DRF with products, orders, gallery, and newsletter apps" },
      { label: "Infra", detail: "Render (backend) · Vercel (frontend)" },
    ],
    outcome:
      "Live in production at fredantextiles.com. The owner manages the entire catalog and order flow through the Django admin, with no developer needed for day-to-day updates. Source is private client work; architecture available on request.",
  },
  {
    slug: "uda-music",
    title: "UDA, a Music Streaming Platform",
    kind: "Full-Stack",
    summary:
      "A music streaming service with playlists, artist pages, search, listening history, and a recommendation engine.",
    live: "https://uda-obi.vercel.app",
    github: "https://github.com/Mexican1922/uda-frontend",
    image: "/images/uda-now-playing.png",
    gallery: ["/images/uda-search.png", "/images/uda-queue.png"],
    stack: [
      "React",
      "TypeScript",
      "Redux-style store",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
    ],
    problem:
      "Streaming apps are a stress test of full-stack skill: authenticated sessions, media catalogs, per-user libraries, and recommendations all have to work together without the UI ever feeling slow.",
    build: [
      "React + TypeScript frontend: album, artist, playlist, search, and library pages with a global store and service layer",
      "Full auth lifecycle (register, email verification, login, password reset) wired to Django accounts",
      "Installable PWA: listeners can add it to their home screen like a native app",
      "Django backend organized by domain: accounts, music, library, history, recommendations, integrations",
      "Recommendation app builds suggestions from listening history",
    ],
    architecture: [
      { label: "Frontend", detail: "React · TypeScript · Vite, organized into pages, components, services, and store" },
      { label: "Backend", detail: "Django + DRF: accounts, music, library, history, recommendations" },
      { label: "Infra", detail: "Render deployment (render.yaml)" },
    ],
    outcome:
      "A working end-to-end streaming platform demonstrating auth flows, domain-driven backend design, and stateful frontend architecture.",
  },
  {
    slug: "metermate",
    title: "MeterMate",
    kind: "Full-Stack · Next.js",
    summary:
      "An energy dashboard where households track electricity usage together: house setup, member invites, and real-time data.",
    image: "/images/metermate.png",
    gallery: [
      "/images/metermate-dashboard.png",
      "/images/metermate-create-house.png",
      "/images/metermate-payment.png",
      "/images/meter-admin.png",
    ],
    live: "https://naija-metermate.vercel.app",
    github: "https://github.com/Mexican1922/metermate",
    stack: ["Next.js 15", "React 19", "Supabase", "Tailwind CSS", "Vercel"],
    problem:
      "Nigerian households on prepaid meters share electricity costs but have no shared view of usage. MeterMate gives a household one dashboard: set up a house, invite members, track consumption.",
    build: [
      "Next.js 15 App Router application with server components",
      "Supabase for authentication and a real-time database, so changes sync across household members instantly",
      "Dark-themed dashboard UI designed for daily at-a-glance use",
      "Deployed on Vercel and live in production",
    ],
    architecture: [
      { label: "Frontend", detail: "Next.js 15 · React 19 · Tailwind" },
      { label: "Data & Auth", detail: "Supabase (Postgres + realtime + auth)" },
      { label: "Infra", detail: "Vercel, live in production" },
    ],
    outcome:
      "Live at naija-metermate.vercel.app: a shipped product solving a genuinely local problem, and proof of range beyond Vite/CRA into Next.js server-side patterns.",
  },
  {
    slug: "padipay",
    title: "PadiPay",
    kind: "Fintech · PWA",
    summary:
      "A digital wallet app: send money, buy airtime and data, pay bills, and track every transaction. Installs like a native app.",
    live: "https://naija-padipay.vercel.app",
    github: "https://github.com/Mexican1922/padipay",
    image: "/images/padipay-home.png",
    gallery: [
      "/images/padipay-send.png",
      "/images/padipay-add.png",
      "/images/Padi-Activity.png",
      "/images/padi-more-options.png",
      "/images/padipay-profile.png",
      "/images/padipay-notification.png",
    ],
    stack: ["React 19", "TypeScript", "Vite", "PWA", "Context API", "Service layer"],
    problem:
      "Fintech UIs live or die on trust: flows must be fast, states must never be ambiguous, and every naira must be accounted for on screen.",
    build: [
      "Complete wallet flows (send money, add money, airtime, data, bills, betting), each a dedicated typed page",
      "Transaction feed with detail views, notifications, and success states that confirm exactly what happened",
      "Typed service layer separating API concerns from UI; global state via context",
      "Auth flows (register, login, profile) matching real banking-app patterns",
      "Installable PWA with a web manifest, built mobile-first like a real banking app",
    ],
    architecture: [
      { label: "Frontend", detail: "React 19 · TypeScript · Vite" },
      { label: "State", detail: "Context + typed services layer" },
      { label: "Surface", detail: "14 screens covering the full wallet lifecycle" },
    ],
    outcome:
      "A production-pattern fintech frontend demonstrating the discipline international teams look for: typed data models, separated concerns, and unambiguous transactional UX.",
  },
];

export const moreProjects: MiniProject[] = [
  {
    title: "Collan",
    description:
      "Co-founded a developer networking and collaboration platform with a community feed, project marketplace, live sessions, and real-time chat. 2,400+ active members.",
    image: "/images/collan.png",
    live: "https://collan.dev",
    tags: ["Co-Founder", "SaaS", "Community"],
  },
  {
    title: "Crestforge Construction",
    description:
      "Squarespace site for a construction company. Hired on a Friday with no prior Squarespace experience, delivered the finished site that Sunday.",
    image: "/images/Crest.png",
    live: "https://crestforgeconstruction.org",
    tags: ["Client Work", "Squarespace"],
  },
  {
    title: "Kings Tech Solutions",
    description:
      "Production site for a smart energy and security company operating across 12+ Nigerian states: solar, CCTV, wiring. Private client work.",
    image: "/images/kings-tech.png",
    live: "https://kingstechsolutions.org",
    tags: ["Private Client Work", "React", "SEO"],
  },
  {
    title: "Apex TechHub",
    description:
      "EdTech academy platform with course browsing, enrollment, and integrated payments.",
    image: "/images/apex-techhub.png",
    live: "https://apex-techhub.com",
    tags: ["Client Work", "Payments", "EdTech"],
  },
  {
    title: "StockFlow",
    description:
      "Inventory management SaaS with role-based access, Firebase auth, live Firestore sync, and EN/POR multilingual support.",
    image: "/images/stockflow.png",
    live: "https://products-inventory-mgmt.vercel.app",
    tags: ["React", "Firebase", "SaaS"],
  },
  {
    title: "Finance Tracker",
    description:
      "Personal finance dashboard with real-time spending analytics, savings goals, and a financial health score.",
    image: "/images/finance-tracker.png",
    live: "https://try-finance-tracker.vercel.app",
    github: "https://github.com/Mexican1922/finance-tracker",
    tags: ["React", "Firebase", "Fintech"],
  },
  {
    title: "Gnade Store",
    description:
      "Flagship e-commerce build: React storefront with a dedicated Django backend covering catalog, cart, and order flows. Source is private.",
    image: "/images/gnade.png",
    live: "https://gnade-store.vercel.app/",
    tags: ["React", "Django", "E-commerce"],
  },
];
