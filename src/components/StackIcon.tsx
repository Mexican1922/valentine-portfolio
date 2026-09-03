import {
  siReact,
  siTypescript,
  siNextdotjs,
  siTailwindcss,
  siFramer,
  siVuedotjs,
  siVite,
  siPython,
  siDjango,
  siPostgresql,
  siGit,
  siGithub,
  siVercel,
  siRender,
  siFirebase,
  siSupabase,
} from "simple-icons";
import type { SimpleIcon } from "simple-icons";

/**
 * Brand marks for the stack, taken from simple-icons rather than transcribed.
 *
 * Icons are imported individually so the bundler keeps only these sixteen —
 * the full set is several thousand and has no business in the bundle.
 *
 * Entries without a mark (REST API design, SEO, and the like) are deliberate:
 * they are practices, not products, and `null` renders the neutral dot the
 * list already used.
 */
const ICONS: Record<string, SimpleIcon | null> = {
  "React 19": siReact,
  React: siReact,
  TypeScript: siTypescript,
  "Next.js 15": siNextdotjs,
  "Next.js": siNextdotjs,
  "Tailwind CSS v4": siTailwindcss,
  "Tailwind CSS": siTailwindcss,
  "Framer Motion": siFramer,
  "Vue.js": siVuedotjs,
  Vite: siVite,
  Python: siPython,
  Django: siDjango,
  "Django REST Framework": siDjango,
  PostgreSQL: siPostgresql,
  "Git & GitHub": siGithub,
  Git: siGit,
  GitHub: siGithub,
  Vercel: siVercel,
  Render: siRender,
  Firebase: siFirebase,
  Supabase: siSupabase,
};

/**
 * Brand colours are dropped in favour of the site's palette. Sixteen different
 * hues in one panel reads as a sticker sheet, and several (Vercel's black,
 * Django's near-black) vanish against this background anyway.
 */
export default function StackIcon({
  name,
  size = 16,
  className = "",
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const icon = ICONS[name];

  if (!icon) {
    return (
      <span
        aria-hidden
        className={`inline-block shrink-0 rounded-full bg-accent-500 ${className}`}
        style={{ width: size * 0.28, height: size * 0.28 }}
      />
    );
  }

  return (
    <svg
      role="img"
      aria-hidden
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={`shrink-0 ${className}`}
    >
      <path d={icon.path} />
    </svg>
  );
}
