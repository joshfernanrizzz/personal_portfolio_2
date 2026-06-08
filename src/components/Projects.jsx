import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../content.js";
import { Reveal, SmartImage } from "./ui.jsx";

function ProjectCard({ project, index }) {
  return (
    <Reveal delay={(index % 2) * 0.08}>
      <Link
        to={`/work/${project.slug}`}
        className="group block rounded-2xl border border-line bg-surface/40 overflow-hidden transition-all duration-500 hover:-translate-y-1"
        style={{ "--c": project.accent }}
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-surface-2">
          <div
            className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.04]"
            style={{ width: "100%", height: "100%" }}
          >
            <SmartImage
              src={project.cover}
              alt={project.title}
              label={`cover · ${project.slug}`}
              className="w-full h-full object-cover"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          {/* accent wash that blooms on hover */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background: `linear-gradient(to top, ${project.accent}22, transparent 60%)`,
            }}
          />
        </div>

        <div className="p-6">
          <div className="flex items-baseline justify-between gap-4 mb-4">
            <span
              className="font-mono text-[0.8rem] tracking-[0.1em]"
              style={{ color: project.accent }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted text-right">
              {project.cardSubtitle}
            </span>
          </div>

          <h3 className="font-serif text-3xl leading-none mb-5 relative inline-block">
            {project.title}
            <span
              className="absolute left-0 -bottom-1.5 h-[1.5px] w-full origin-left scale-x-0 transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
              style={{ background: project.accent }}
            />
          </h3>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span
                key={t}
                className="font-mono text-[0.62rem] tracking-wide px-2.5 py-1 rounded-full border border-line text-muted"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="work" className="py-28 scroll-mt-20">
      <div className="max-w-page mx-auto px-6">
        <Reveal>
          <div className="flex items-end justify-between mb-14">
            <h2 className="font-serif text-[clamp(2rem,5vw,3.2rem)] leading-none">
              Selected Work
            </h2>
            <span className="eyebrow hidden sm:block">
              {String(projects.length).padStart(2, "0")} projects
            </span>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
