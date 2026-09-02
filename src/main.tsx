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

// Fade out the boot screen from index.html once the app has painted.
const boot = document.getElementById("boot");
if (boot) {
  requestAnimationFrame(() => {
    boot.classList.add("is-done");
    boot.addEventListener("transitionend", () => boot.remove(), { once: true });
    // If the transition never fires (reduced motion, backgrounded tab), drop
    // the node anyway so it cannot sit over the page swallowing clicks.
    setTimeout(() => boot.remove(), 800);
  });
}
