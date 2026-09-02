import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { site } from "../data/site";
import MaterialIcon from "./MaterialIcon";

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
      <div className="mx-auto grid min-h-[92vh] max-w-6xl grid-cols-1 items-center gap-12 px-5 pt-16 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-16">
        {/* Text column. Ordered second on mobile so the portrait leads there,
            the way it does on a phone-sized profile. */}
        <div className="order-2 lg:order-1">
          {/* Opens on what is verifiable rather than a greeting: the old
              "Hi, my name is" line is the most-cloned opener in the genre. */}
          <motion.div
            custom={0}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mb-5 flex flex-wrap items-center gap-2"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-accent-500/30 bg-accent-500/10 px-3 py-1 font-mono text-xs text-accent-400">
              <MaterialIcon name="work" size={13} />
              Available for work
            </span>
            <a
              href="https://collan.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-ink-700 px-3 py-1 font-mono text-xs text-ink-300 transition-colors hover:border-accent-500/50 hover:text-accent-400"
            >
              <MaterialIcon name="groups" size={13} />
              Co-founder @ Collan
              <span className="text-ink-500">·</span>
              <span className="text-ink-200">2,000+ techies</span>
            </a>
          </motion.div>

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

        {/* Portrait. Squared and offset rather than a circular avatar, to sit
            with this site's editorial geometry instead of borrowing the old
            portfolio's look. */}
        <motion.div
          custom={2}
          variants={fade}
          initial="hidden"
          animate="show"
          className="order-1 flex justify-center lg:order-2 lg:justify-end"
        >
          <div className="relative">
            <div
              aria-hidden
              className="absolute -bottom-3 -right-3 h-full w-full rounded-xl border border-accent-500/40"
            />
            <div className="relative overflow-hidden rounded-xl border border-ink-700 bg-ink-900">
              <img
                src="/images/profile.webp"
                alt="Valentine Azolibe"
                width={420}
                height={420}
                loading="eager"
                decoding="async"
                className="h-56 w-56 object-cover object-center sm:h-72 sm:w-72 lg:h-[22rem] lg:w-[22rem]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
