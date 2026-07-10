import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-6xl flex-col items-center justify-center px-5 text-center">
      <p className="font-mono text-sm text-accent-500">404</p>
      <h1 className="mt-2 text-3xl font-bold text-ink-100">Page not found</h1>
      <Link to="/" className="mt-6 font-semibold text-accent-400 hover:text-accent-500">
        Back home →
      </Link>
    </main>
  );
}
