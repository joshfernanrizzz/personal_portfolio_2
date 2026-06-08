import { profile } from "../content.js";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="max-w-page mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-serif text-lg">
          {profile.name}
          <span className="text-accent">.</span>
        </span>
        <span className="font-mono text-[0.66rem] uppercase tracking-[0.18em] text-muted">
          © {new Date().getFullYear()} — Designed & built in India
        </span>
      </div>
    </footer>
  );
}
