export interface LogEntry {
  date: string; // ISO date; only the month and year are shown
  title: string;
  detail: string;
  tags: string[];
}

// Newest first. Keep this to the 4 entries that best show the work right
// now; older entries move to `archivedLog` below and are not rendered.
export const shippingLog: LogEntry[] = [
  {
    date: "2026-10-01",
    title: "The Future Makers textbooks are on sale",
    detail:
      "Wrote the Frontend (HTML, CSS, JavaScript) and Backend (Python, SQL, HTTP) Development Sets: project-based textbooks with write-in workbooks, now used to take tech into Nigerian secondary schools. Available at techplaybook.apex-techhub.com.",
    tags: ["Teaching", "Author"],
  },
  {
    date: "2026-09-01",
    title: "Taught the Apex Tech summer class",
    detail:
      "Took about 10 young beginners from zero coding experience to each building their own website by the final lesson.",
    tags: ["Teaching", "EdTech"],
  },
  {
    date: "2026-09-01",
    title: "Collan passed 2,000 users",
    detail:
      "Six months after launch, the social networking platform for techies I co-founded doubled from its first thousand members. V2 and a mobile app are in development.",
    tags: ["Co-Founder", "SaaS"],
  },
  {
    date: "2026-06-08",
    title: "Shipped UDA recommendation engine",
    detail:
      "Django app generating personalised music suggestions from each user's listening history.",
    tags: ["Django", "Python"],
  },
];

export const archivedLog: LogEntry[] = [
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
    date: "2026-05-01",
    title: "Collan crossed 1,000 users",
    detail:
      "Six weeks after launch, the social networking platform for techies I co-founded passed its first thousand members. V2 and a mobile app are now in development.",
    tags: ["Co-Founder", "SaaS"],
  },
  {
    date: "2026-03-21",
    title: "MeterMate live on Vercel",
    detail:
      "Next.js 15 household energy dashboard with Supabase realtime sync.",
    tags: ["Next.js", "Supabase"],
  },
  {
    date: "2026-03-15",
    title: "Launched Collan V1",
    detail:
      "Co-founded and launched a social networking platform for techies: community feed, project marketplace, live sessions, and real-time chat. Live at collan.dev.",
    tags: ["Co-Founder", "SaaS"],
  },
];
