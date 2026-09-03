import { useEffect, useState } from "react";
import Logo from "./Logo";

/**
 * Suspense fallback for lazily-loaded routes.
 *
 * Covers the viewport with the mark and nothing else — the nav and footer
 * framing an empty column reads as a hole in the page rather than a state.
 *
 * Appears immediately: MIN_LOADER_MS in App.tsx already guarantees the chunk
 * cannot resolve inside a frame, so the hold-off that used to prevent a flash
 * would now just eat into the time the loader is visible. Pass a `delay` if
 * that floor is ever removed.
 */
export default function RippleLoader({ delay = 0 }: { delay?: number }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(id);
  }, [delay]);

  return (
    <div
      className={`fixed inset-0 z-[70] flex items-center justify-center bg-ink-950 transition-opacity duration-200 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <span className="sr-only">Loading page</span>
      <div className="ripple-loader" aria-hidden>
        <div className="box" />
        <div className="box" />
        <div className="box" />
        <div className="box" />
        <div className="box" />
        <div className="logo">
          <Logo height={44} />
        </div>
      </div>
    </div>
  );
}
