import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero.jsx";
import Projects from "../components/Projects.jsx";
import About from "../components/About.jsx";
import Contact from "../components/Contact.jsx";

export default function Home() {
  const { hash } = useLocation();

  // When arriving with a #section (e.g. from a detail page), scroll to it.
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 80);
    }
  }, [hash]);

  return (
    <>
      <Hero />
      <Projects />
      <About />
      <Contact />
    </>
  );
}
