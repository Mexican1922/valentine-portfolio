import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { site } from "../data/site";

function XIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-3xl scroll-mt-20 px-5 py-28 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="mb-3 font-mono text-sm text-accent-500">05 · What's next?</p>
        <h2 className="text-3xl font-bold tracking-tight text-ink-100 sm:text-4xl">
          Let's build something.
        </h2>
        <p className="mx-auto mt-5 max-w-xl leading-relaxed text-ink-300">
          I'm open to full-time roles and contract work, remote or hybrid,
          local or international. If you think I'd be a fit for your team,
          my inbox is open and I reply fast.
        </p>

        <a
          href={`mailto:${site.email}`}
          className="mt-10 inline-flex items-center gap-2 rounded-md bg-accent-500 px-8 py-3.5 text-sm font-semibold text-ink-950 transition-colors hover:bg-accent-400"
        >
          <Mail size={16} /> {site.email}
        </a>

        <div className="mt-10 flex items-center justify-center gap-6 text-ink-400">
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-accent-400"
          >
            <Github size={20} />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-accent-400"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={site.x}
            target="_blank"
            rel="noreferrer"
            aria-label={`${site.xHandle} on X`}
            className="transition-colors hover:text-accent-400"
          >
            <XIcon size={18} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
