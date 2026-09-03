import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

// Minimum time the boot screen stays up, in ms, measured from the stamp set in
// index.html. The app often paints in well under this, so without a floor the
// loader would be gone before it registered. This is latency added on purpose
// — keep it short. 0 disables the hold.
const MIN_BOOT_MS = 700;

// Fade out the boot screen from index.html once the app has painted.
const boot = document.getElementById("boot");
if (boot) {
  const elapsed = Date.now() - ((window as any).__bootAt ?? Date.now());
  setTimeout(() => {
  requestAnimationFrame(() => {
    boot.classList.add("is-done");
    boot.addEventListener("transitionend", () => boot.remove(), { once: true });
    // If the transition never fires (reduced motion, backgrounded tab), drop
    // the node anyway so it cannot sit over the page swallowing clicks.
    setTimeout(() => boot.remove(), 800);
  });
  }, Math.max(0, MIN_BOOT_MS - elapsed));
}
