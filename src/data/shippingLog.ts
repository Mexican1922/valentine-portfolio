export interface LogEntry {
  date: string; // ISO date
  title: string;
  detail: string;
  tags: string[];
}

// Newest first. Add an entry every time you ship something. This section
// is the portfolio's proof of momentum.
// NOTE: dates below are estimates. Replace them with the real ones.
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
    date: "2026-06-15",
    title: "Shipped UDA recommendation engine",
    detail:
      "Django app generating music suggestions from per-user listening history.",
    tags: ["Django", "Python"],
  },
  {
    date: "2026-05-20",
    title: "Fredan Textiles backend live on Render",
    detail:
      "Products, orders, gallery, and newsletter apps behind a DRF API, fully owner-managed via Django admin.",
    tags: ["Django", "Render"],
  },
  {
    date: "2026-04-28",
    title: "PadiPay wallet flows complete",
    detail:
      "Send money, airtime, data, bills: 14 typed screens with a dedicated service layer.",
    tags: ["React", "Fintech"],
  },
  {
    date: "2026-03-30",
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
