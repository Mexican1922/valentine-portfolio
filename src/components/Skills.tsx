import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const groups: { title: string; items: string[] }[] = [
  {
    title: "Frontend",
    items: [
      "React 19",
      "TypeScript",
      "Next.js 15",
      "Tailwind CSS v4",
      "Framer Motion",
      "Vue.js",
      "Vite",
    ],
  },
  {
    title: "Backend",
    items: [
      "Python",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "REST API design",
      "Authentication & permissions",
    ],
  },
  {
    title: "Platforms & Tools",
    items: [
      "Git & GitHub",
      "Vercel",
      "Render",
      "Firebase",
      "Supabase",
      "Payment integration",
      "SEO",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="border-y border-ink-800 bg-ink-900/40">
      <div className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24">
        <SectionHeading
          index="04"
          title="Stack"
          sub="The tools I ship with daily. It's the same stack you'll see across every case study above."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: 0.06 * i }}
              className="rounded-xl border border-ink-800 bg-ink-900 p-6"
            >
              <h3 className="mb-4 font-mono text-sm font-medium text-accent-500">
                {g.title}
              </h3>
              <ul className="space-y-2">
                {g.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-ink-200">
                    <span aria-hidden className="h-1 w-1 rounded-full bg-accent-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
