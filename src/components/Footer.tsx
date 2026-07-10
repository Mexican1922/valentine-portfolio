import { site } from "../data/site";

export default function Footer() {
  return (
    <footer className="border-t border-ink-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-5 py-8 text-center">
        <p className="font-mono text-xs text-ink-400">
          Designed & built by {site.name} · React 19 · TypeScript · Tailwind v4
        </p>
        <p className="text-xs text-ink-600">
          © {new Date().getFullYear()} · {site.location.split(",")[0].trim()}
        </p>
      </div>
    </footer>
  );
}
