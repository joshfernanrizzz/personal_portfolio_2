import { about } from "../content.js";
import { Reveal, SmartImage } from "./ui.jsx";

export default function About() {
  return (
    <section id="about" className="py-28 scroll-mt-20 border-t border-line">
      <div className="max-w-page mx-auto px-6">
        <Reveal>
          <span className="eyebrow">About</span>
        </Reveal>

        <div className="mt-10 grid md:grid-cols-[1fr_0.62fr] gap-12 md:gap-16 items-start">
          <Reveal delay={0.06}>
            <p className="font-serif text-[clamp(1.5rem,3.2vw,2.3rem)] leading-[1.32] tracking-[-0.01em] text-ink/90">
              {about.body}
            </p>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="relative">
              {/* portrait — paste a link into about.portrait in content.js */}
              <SmartImage
                src={about.portrait}
                alt="Portrait"
                label="your photo"
                className="w-full aspect-[4/5] object-cover rounded-2xl border border-line"
              />
              {/* a thin accent rule anchoring the frame, lower-left */}
              <span className="absolute -bottom-3 left-6 h-px w-16 bg-accent" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
