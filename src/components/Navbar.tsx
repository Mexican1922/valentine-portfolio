import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { site } from "../data/site";

const links = [
  { label: "Work", to: "/#work" },
  { label: "Shipping Log", to: "/#log" },
  { label: "Skills", to: "/#skills" },
  { label: "Contact", to: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-ink-800 bg-ink-950/90 backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link to="/" className="font-mono text-sm font-medium text-ink-100">
          <span className="text-accent-500">~/</span>ValentineCodes
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              className="text-sm text-ink-300 transition-colors hover:text-ink-100"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={site.resume}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-ink-600 px-4 py-1.5 text-sm text-ink-100 transition-colors hover:border-accent-500 hover:text-accent-400"
          >
            Résumé
          </a>
        </div>

        <button
          className="p-2 text-ink-200 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="border-b border-ink-800 bg-ink-950/95 px-5 pb-5 backdrop-blur md:hidden">
          <div className="flex flex-col gap-4 pt-2">
            {links.map((l) => (
              <Link key={l.label} to={l.to} className="text-sm text-ink-200">
                {l.label}
              </Link>
            ))}
            <a
              href={site.resume}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-accent-400"
            >
              Résumé
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
