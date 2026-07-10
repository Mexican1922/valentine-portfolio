import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Github, Lock } from "lucide-react";
import { caseStudies } from "../data/projects";
import SectionHeading from "./SectionHeading";

export default function SelectedWork() {
  return (
    <section id="work" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24">
      <SectionHeading
        index="01"
        title="Selected Work"
        sub="Four case studies, each one a real product with a real problem behind it. Click through for the architecture and decisions."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {caseStudies.map((cs, i) => (
          <motion.div
            key={cs.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.06 * i }}
          >
            <Link
              to={`/work/${cs.slug}`}
              className="group flex h-full flex-col rounded-xl border border-ink-800 bg-ink-900 p-7 transition-colors hover:border-accent-500/50"
            >
              <div className="mb-4 flex items-start justify-between">
                <p className="font-mono text-xs text-accent-500">{cs.kind}</p>
                <div className="flex items-center gap-3 text-ink-400">
                  {cs.private && <Lock size={15} aria-label="Private client work" />}
                  {cs.github && <Github size={15} />}
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-400"
                  />
                </div>
              </div>

              <h3 className="text-xl font-bold text-ink-100 transition-colors group-hover:text-accent-400">
                {cs.title}
              </h3>
              <p className="mt-3 flex-1 leading-relaxed text-ink-300">
                {cs.summary}
              </p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {cs.stack.slice(0, 5).map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-ink-700 px-3 py-1 font-mono text-xs text-ink-300"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
