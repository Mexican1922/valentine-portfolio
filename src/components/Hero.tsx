import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { site } from "../data/site";

const fade = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(600px 300px at 80% 0%, rgba(45,212,167,0.08), transparent 70%)",
        }}
      />
      <div className="mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-center px-5 pt-16">
        <motion.p
          custom={0}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mb-4 font-mono text-sm text-accent-500"
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          custom={1}
          variants={fade}
          initial="hidden"
          animate="show"
          className="text-4xl font-extrabold tracking-tight text-ink-100 sm:text-6xl"
        >
          {site.name}.
        </motion.h1>

        <motion.h2
          custom={2}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-2 text-3xl font-bold tracking-tight text-ink-400 sm:text-5xl"
        >
          I build full-stack products with{" "}
          <span className="text-ink-200">React</span> &{" "}
          <span className="text-ink-200">Django</span>.
        </motion.h2>

        <motion.p
          custom={3}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-300"
        >
          {site.intro}
        </motion.p>

        <motion.div
          custom={4}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-4 flex items-center gap-2 text-sm text-ink-400"
        >
          <MapPin size={14} className="text-accent-500" />
          {site.location}
        </motion.div>

        <motion.div
          custom={5}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link
            to="/#work"
            className="inline-flex items-center gap-2 rounded-md bg-accent-500 px-6 py-3 text-sm font-semibold text-ink-950 transition-colors hover:bg-accent-400"
          >
            View my work <ArrowRight size={16} />
          </Link>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 rounded-md border border-ink-600 px-6 py-3 text-sm font-semibold text-ink-100 transition-colors hover:border-accent-500 hover:text-accent-400"
          >
            <Mail size={16} /> Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
