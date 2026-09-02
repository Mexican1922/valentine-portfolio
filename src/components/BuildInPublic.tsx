import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { site } from "../data/site";

/** X's own mark; lucide's `X` is the close glyph, not the brand. */
function XMark({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

/**
 * Sits between the hero and the case studies. The Shipping Log below makes the
 * same argument at length; this states it in one line and, crucially, links to
 * a post anyone can open — the difference between a claim and evidence.
 */
export default function BuildInPublic() {
  const { days, proof } = site.buildInPublic;

  return (
    <section className="border-y border-ink-800 bg-ink-900/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-8 sm:flex-row sm:items-center sm:justify-between">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45 }}
          className="flex items-center gap-4"
        >
          <span className="font-mono text-3xl font-bold leading-none text-accent-500">
            {days}
          </span>
          <span className="text-sm leading-snug text-ink-300">
            <span className="font-semibold text-ink-100">
              consecutive days building in public
            </span>
            <br className="hidden sm:block" /> on X, shipping and posting the
            work every day.
          </span>
        </motion.div>

        <motion.a
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, delay: 0.08 }}
          href={proof}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex shrink-0 items-center gap-2 self-start rounded-md border border-ink-700 px-4 py-2.5 font-mono text-xs text-ink-200 transition-colors hover:border-accent-500/50 hover:text-accent-400 sm:self-auto"
        >
          <XMark />
          Day {days} post
          <ArrowUpRight
            size={14}
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </motion.a>
      </div>
    </section>
  );
}
