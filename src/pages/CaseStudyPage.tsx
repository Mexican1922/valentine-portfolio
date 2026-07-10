import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, ExternalLink, Github, Lock } from "lucide-react";
import { caseStudies } from "../data/projects";
import { site } from "../data/site";

export default function CaseStudyPage() {
  const { slug } = useParams();
  const cs = caseStudies.find((c) => c.slug === slug);

  if (!cs) return <Navigate to="/" replace />;

  return (
    <main className="mx-auto max-w-4xl px-5 pb-24 pt-28">
      <Link
        to="/#work"
        className="inline-flex items-center gap-2 font-mono text-sm text-ink-400 transition-colors hover:text-accent-400"
      >
        <ArrowLeft size={14} /> All work
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="mt-8 font-mono text-sm text-accent-500">{cs.kind}</p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-ink-100 sm:text-4xl">
          {cs.title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-ink-300">{cs.summary}</p>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          {cs.live && (
            <a
              href={cs.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-accent-500 px-5 py-2 text-sm font-semibold text-ink-950 transition-colors hover:bg-accent-400"
            >
              <ExternalLink size={15} /> Live site
            </a>
          )}
          {cs.github && (
            <a
              href={cs.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-ink-600 px-5 py-2 text-sm font-semibold text-ink-100 transition-colors hover:border-accent-500 hover:text-accent-400"
            >
              <Github size={15} /> Source
            </a>
          )}
          {cs.private && (
            <span className="inline-flex items-center gap-2 rounded-md border border-ink-700 px-5 py-2 text-sm text-ink-400">
              <Lock size={14} /> Private client work · source not public
            </span>
          )}
        </div>

        {cs.image && (
          <div className="mt-10 overflow-hidden rounded-xl border border-ink-800">
            <img src={cs.image} alt={`${cs.title} screenshot`} className="w-full" />
          </div>
        )}

        {cs.gallery && cs.gallery.length > 0 && (
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {cs.gallery.map((src) => (
              <div key={src} className="overflow-hidden rounded-xl border border-ink-800">
                <img
                  src={src}
                  alt={`${cs.title} screenshot`}
                  loading="lazy"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            ))}
          </div>
        )}

        <section className="mt-14">
          <h2 className="font-mono text-sm text-accent-500">The problem</h2>
          <p className="mt-3 leading-relaxed text-ink-200">{cs.problem}</p>
        </section>

        <section className="mt-12">
          <h2 className="font-mono text-sm text-accent-500">What I built</h2>
          <ul className="mt-4 space-y-3">
            {cs.build.map((item) => (
              <li key={item} className="flex gap-3 leading-relaxed text-ink-200">
                <CheckCircle2 size={18} className="mt-1 shrink-0 text-accent-500" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="font-mono text-sm text-accent-500">Architecture</h2>
          <div className="mt-4 overflow-hidden rounded-xl border border-ink-800">
            {cs.architecture.map((row, i) => (
              <div
                key={row.label}
                className={`flex flex-col gap-1 px-6 py-4 sm:flex-row sm:items-center ${
                  i > 0 ? "border-t border-ink-800" : ""
                }`}
              >
                <span className="w-32 shrink-0 font-mono text-xs uppercase tracking-wide text-ink-400">
                  {row.label}
                </span>
                <span className="text-sm text-ink-200">{row.detail}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="font-mono text-sm text-accent-500">Stack</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {cs.stack.map((t) => (
              <li
                key={t}
                className="rounded-full border border-ink-700 px-3 py-1 font-mono text-xs text-ink-300"
              >
                {t}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12 rounded-xl border border-accent-500/30 bg-accent-500/5 p-6">
          <h2 className="font-mono text-sm text-accent-500">Outcome</h2>
          <p className="mt-3 leading-relaxed text-ink-100">{cs.outcome}</p>
        </section>

        <div className="mt-14 flex flex-col items-center gap-4 border-t border-ink-800 pt-10 text-center">
          <p className="text-ink-300">Want the full story on this project?</p>
          <a
            href={`mailto:${site.email}?subject=Question about ${cs.title}`}
            className="font-semibold text-accent-400 hover:text-accent-500"
          >
            Ask me about it →
          </a>
        </div>
      </motion.div>
    </main>
  );
}
