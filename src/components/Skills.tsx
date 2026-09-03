import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import StackIcon from "./StackIcon";

// Each item slides in from the left as its column arrives. Reading direction,
// so the eye travels the list instead of scanning a static block.
//
// Total settle time is what matters: the stagger below plus the item duration
// lands the longest column in about 0.6s. Past roughly a second this stops
// reading as polish and starts reading as lag.
const list = {
  hidden: {},
  show: { transition: { staggerChildren: 0.035 } },
};

const row = {
  hidden: { opacity: 0, x: -10 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] as const },
  },
};

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
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={{
                hidden: { opacity: 0, y: 16 },
                // No per-card delay: it would stack on top of the row stagger
                // and push the last column past a second.
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.4, delayChildren: 0.08 * i + 0.1 },
                },
              }}
              className="rounded-xl border border-ink-800 bg-ink-900 p-6"
            >
              <h3 className="mb-4 font-mono text-sm font-medium text-accent-500">
                {g.title}
              </h3>
              <motion.ul variants={list} className="space-y-2.5">
                {g.items.map((item) => (
                  <motion.li
                    key={item}
                    variants={row}
                    className="flex items-center gap-2.5 text-sm text-ink-200"
                  >
                    <StackIcon name={item} size={17} className="text-ink-400" />
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
