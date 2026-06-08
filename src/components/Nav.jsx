import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { profile } from "../content.js";

const links = [
  { label: "Home", to: "/" },
  { label: "Portfolio", to: "/#work" },
  { label: "About", to: "/#about" },
  { label: "Contact", to: "/#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Navigate to a section: if not on home, go home first then scroll.
  const go = (to) => (e) => {
    e.preventDefault();
    const hash = to.includes("#") ? "#" + to.split("#")[1] : "";
    if (location.pathname !== "/") {
      navigate("/" + hash);
      return;
    }
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-bg/70 border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-page mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          to="/"
          onClick={go("/")}
          className="font-serif text-xl tracking-tight"
        >
          {profile.name.split(" ")[0]}
          <span className="text-accent">.</span>
        </Link>
        <ul className="flex items-center gap-7">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.to}
                onClick={go(l.to)}
                className="font-mono text-sm tracking-[0.03em] text-muted hover:text-ink transition-colors duration-300"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
