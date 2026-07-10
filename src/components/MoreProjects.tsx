import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { moreProjects } from "../data/projects";
import SectionHeading from "./SectionHeading";

export default function MoreProjects() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading
        index="03"
        title="More Things I've Built"
        sub="Client sites in production, a platform I co-founded, and tools people actually use."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {moreProjects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: 0.05 * i }}
            className="group flex flex-col overflow-hidden rounded-xl border border-ink-800 bg-ink-900 transition-colors hover:border-accent-500/40"
          >
            {p.image && (
              <div className="aspect-[16/9] overflow-hidden border-b border-ink-800">
                <img
                  src={p.image}
                  alt={`${p.title} screenshot`}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
            )}
            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-start justify-between">
                <h3 className="font-bold text-ink-100">{p.title}</h3>
                <div className="flex gap-3 text-ink-400">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${p.title} on GitHub`}
                      className="transition-colors hover:text-accent-400"
                    >
                      <Github size={16} />
                    </a>
                  )}
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${p.title} live site`}
                      className="transition-colors hover:text-accent-400"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-300">
                {p.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="font-mono text-xs text-accent-500">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
