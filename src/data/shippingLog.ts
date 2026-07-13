export interface LogEntry {
  date: string; // ISO date
  title: string;
  detail: string;
  tags: string[];
}

// Newest first. Add an entry every time you ship something. This section
// is the portfolio's proof of momentum. Dates come from the git history.
export const shippingLog: LogEntry[] = [
  {
    date: "2026-07-10",
    title: "Rebuilt this portfolio from scratch",
    detail:
      "React 19 + TypeScript + Tailwind v4 + Framer Motion. The repo itself is a work sample.",
    tags: ["React", "TypeScript"],
  },
  {
    date: "2026-06-22",
    title: "Delivered Crestforge Construction in a weekend",
    detail:
      "Got the job on a Friday with zero Squarespace experience. Learned the platform and shipped the finished site by Sunday. Live at crestforgeconstruction.org.",
    tags: ["Client Work", "Squarespace"],
  },
  {
    date: "2026-06-08",
    title: "Shipped UDA recommendation engine",
    detail:
      "Django app generating music suggestions from per-user listening history.",
    tags: ["Django", "Python"],
  },
  {
    date: "2026-06-04",
    title: "Fredan Textiles live on fredantextiles.com",
    detail:
      "React storefront on a custom domain, backed by Django apps for products, orders, gallery, and newsletter on Render, fully owner-managed via Django admin.",
    tags: ["Django", "React"],
  },
  {
    date: "2026-05-09",
    title: "PadiPay wallet flows complete",
    detail:
      "Send money, airtime, data, bills: 14 typed screens with a dedicated service layer, installable as a PWA.",
    tags: ["React", "Fintech"],
  },
  {
    date: "2026-03-21",
    title: "MeterMate live on Vercel",
    detail:
      "Next.js 15 household energy dashboard with Supabase realtime sync.",
    tags: ["Next.js", "Supabase"],
  },
  {
    date: "2026-02-14",
    title: "Collan passed 2,400 members",
    detail:
      "The developer collaboration platform I co-founded keeps growing: feed, marketplace, live sessions.",
    tags: ["Co-Founder", "SaaS"],
  },
];
