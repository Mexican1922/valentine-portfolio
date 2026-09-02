import { Routes, Route, useLocation } from "react-router-dom";
import { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import RippleLoader from "./components/RippleLoader";
import Home from "./pages/Home";

// Home stays in the main bundle — it is where visitors land, and splitting it
// would put a loading state in front of the first paint. The case studies and
// the 404 cost nothing until someone navigates.
const CaseStudyPage = lazy(() => import("./pages/CaseStudyPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

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
