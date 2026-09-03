import { Routes, Route, useLocation } from "react-router-dom";
import { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import RippleLoader from "./components/RippleLoader";
import Home from "./pages/Home";

// How long the loader stays up on a route change, in ms. The chunks resolve in
// a few milliseconds on a warm connection, so without a floor the loader would
// flash and vanish. Raising this makes the site slower for no benefit to the
// reader; 0 disables the hold entirely.
const MIN_LOADER_MS = 600;

/** Hold a lazy import open long enough for the loader to be seen. */
const withMinDuration = <T,>(factory: () => Promise<T>, ms = MIN_LOADER_MS) =>
  () =>
    Promise.all([factory(), new Promise((r) => setTimeout(r, ms))]).then(
      ([mod]) => mod,
    );

// Home stays in the main bundle — it is where visitors land, and splitting it
// would put a loading state in front of the first paint. The case studies and
// the 404 cost nothing until someone navigates.
const CaseStudyPage = lazy(withMinDuration(() => import("./pages/CaseStudyPage")));
const NotFound = lazy(withMinDuration(() => import("./pages/NotFound")));

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-ink-950 text-ink-200">
      <ScrollToTop />
      <Navbar />
      {/* Keyed on the path so each navigation gets its own boundary and the
          loader re-arms, rather than resolving once for the whole app. */}
      <Suspense key={location.pathname} fallback={<RippleLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work/:slug" element={<CaseStudyPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}
