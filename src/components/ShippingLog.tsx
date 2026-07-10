import { motion } from "framer-motion";
import { shippingLog } from "../data/shippingLog";
import SectionHeading from "./SectionHeading";

function formatDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function ShippingLog() {
  return (
    <section id="log" className="border-y border-ink-800 bg-ink-900/40">
      <div className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24">
        <SectionHeading
          index="02"
          title="Shipping Log"
          sub="A running record of what I've shipped recently. Momentum matters more than promises."
        />

        <ol className="relative ml-2 border-l border-ink-700">
          {shippingLog.map((entry, i) => (
            <motion.li
              key={entry.date + entry.title}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: 0.05 * i }}
              className="relative pb-10 pl-8 last:pb-0"
            >
              <span
                aria-hidden
                className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent-500"
              />
              <time className="font-mono text-xs text-ink-400">
                {formatDate(entry.date)}
              </time>
              <h3 className="mt-1 font-semibold text-ink-100">{entry.title}</h3>
              <p className="mt-1 max-w-2xl text-sm leading-relaxed text-ink-300">
                {entry.detail}
              </p>
              <div className="mt-2 flex gap-2">
                {entry.tags.map((t) => (
                  <span key={t} className="font-mono text-xs text-accent-500">
                    #{t}
                  </span>
                ))}
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
