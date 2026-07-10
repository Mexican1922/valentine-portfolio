import Hero from "../components/Hero";
import SelectedWork from "../components/SelectedWork";
import ShippingLog from "../components/ShippingLog";
import MoreProjects from "../components/MoreProjects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <SelectedWork />
      <ShippingLog />
      <MoreProjects />
      <Skills />
      <Contact />
    </main>
  );
}
