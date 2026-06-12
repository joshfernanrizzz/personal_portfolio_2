import { useParams, Navigate } from "react-router-dom";
import { projects } from "../content.js";
import { Reveal, SmartImage, ArrowLink, fixSrc } from "../components/ui.jsx";

function Header({ p }) {
  return (
    <Reveal>
      <ArrowLink label="All work" direction="left" to="/#work" />
      <div className="mt-12 mb-4 flex items-center gap-4">
        <span className="h-px w-12" style={{ background: p.accent }} />
        <span className="eyebrow">{p.cardSubtitle}</span>
      </div>
      <h1
        className="font-serif text-[clamp(3.2rem,10vw,7rem)] leading-[0.95] tracking-[-0.015em]"
        style={{ color: p.accent, fontFamily: p.titleFont || undefined }}
      >
        {p.title}
      </h1>
      <div className="mt-7 mb-4 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <p className="max-w-prose2 text-muted text-lg leading-relaxed font-light">
          {p.tagline}
        </p>
        <div className="flex flex-wrap gap-x-3 shrink-0">
          {p.tags.map((t, k) => (
            <span
              key={t}
              className="font-mono text-[0.68rem] tracking-wide text-muted"
            >
              {t}
              {k < p.tags.length - 1 && (
                <span className="ml-3 opacity-40">·</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

/* ---------------- case study ---------------- */

function CaseStudy({ p }) {
  return (
    <>
      {/* hero 1 — full width */}
      <Reveal>
        <SmartImage
          src={p.heroShots[0]}
          label="hero shot 1"
          className="w-full aspect-[16/9] object-cover rounded-2xl mt-8"
        />
      </Reveal>

      {/* overview — eyebrow + large lead text */}
      <Reveal>
        <div className="py-20 max-w-3xl">
          <p className="eyebrow mb-6" style={{ color: p.accent }}>
            Overview
          </p>
          <p className="font-serif text-[clamp(1.35rem,2.6vw,1.9rem)] leading-[1.5] text-ink/90">
            {p.overview}
          </p>
        </div>
      </Reveal>

      {/* hero 2 — full width */}
      <Reveal>
        <SmartImage
          src={p.heroShots[1]}
          label="hero shot 2"
          className="w-full aspect-[16/9] object-cover rounded-2xl"
        />
      </Reveal>

      {/* challenge + solution — numbered two-column */}
      <div className="py-20 grid md:grid-cols-2 gap-14 md:gap-16">
        <Reveal>
          <span
            className="font-serif text-5xl block"
            style={{ color: p.accent }}
          >
            01
          </span>
          <h3 className="font-sans font-medium text-xl mt-4 mb-4">
            The Challenge
          </h3>
          <p className="text-ink/80 leading-relaxed font-light text-[1.02rem]">
            {p.challenge}
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <span
            className="font-serif text-5xl block"
            style={{ color: p.accent }}
          >
            02
          </span>
          <h3 className="font-sans font-medium text-xl mt-4 mb-4">
            The Solution
          </h3>
          <p className="text-ink/80 leading-relaxed font-light text-[1.02rem]">
            {p.solution}
          </p>
        </Reveal>
      </div>

      {/* image grid — staggered 2-col */}
      <Reveal>
        <p className="eyebrow mb-7" style={{ color: p.accent }}>
          In the app
        </p>
      </Reveal>
      <div className="grid sm:grid-cols-2 gap-4">
        {p.images.map((src, i) => (
          <Reveal
            key={i}
            delay={(i % 2) * 0.07}
            className={i % 2 === 1 ? "sm:mt-12" : ""}
          >
            <div className="overflow-hidden rounded-2xl group">
              <SmartImage
                src={src}
                label={`image ${i + 1}`}
                className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
            </div>
          </Reveal>
        ))}
      </div>

      {/* key features — numbered */}
      <Reveal>
        <p className="eyebrow mt-24 mb-7" style={{ color: p.accent }}>
          Key Features
        </p>
      </Reveal>
      <div className="grid sm:grid-cols-3 gap-5">
        {p.keyFeatures.map((f, i) => (
          <Reveal key={i} delay={i * 0.07}>
            <div className="flex items-baseline gap-3 mb-3">
              <span
                className="font-mono text-[0.7rem]"
                style={{ color: p.accent }}
              >
                0{i + 1}
              </span>
              <span className="h-px flex-1 bg-line" />
            </div>
            <div className="overflow-hidden rounded-2xl group">
              <SmartImage
                src={f.image}
                label={`feature ${i + 1}`}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
            </div>
          </Reveal>
        ))}
      </div>
    </>
  );
}

/* ---------------- gallery ---------------- */

const COLLAGE_H = [280, 220, 340, 200, 300, 240];

function GalleryItem({ item, index, accent }) {
  const img = fixSrc(item.image);
  const hasLink = item.link && item.link.trim() !== "";
  const Wrapper = hasLink ? "a" : "div";
  const props = hasLink
    ? { href: item.link, target: "_blank", rel: "noreferrer" }
    : {};
  return (
    <Wrapper {...props} className="group block mb-4 break-inside-avoid">
      <div className="relative overflow-hidden rounded-xl bg-surface-2">
        {img ? (
          <img
            src={img}
            alt={item.title || `photo ${index + 1}`}
            loading="lazy"
            className="w-full h-auto block transition-transform duration-700 group-hover:scale-[1.04]"
          />
        ) : (
          <div
            className="img-placeholder w-full"
            style={{ height: COLLAGE_H[index % COLLAGE_H.length] }}
          >
            photo {index + 1}
          </div>
        )}
        {hasLink && (
          <div
            className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
            style={{
              background: `linear-gradient(to top, ${accent}3a, transparent 65%)`,
            }}
          >
            <span className="font-mono text-[0.66rem] uppercase tracking-[0.18em] text-white">
              View post ↗
            </span>
          </div>
        )}
      </div>
      <div className="mt-3 flex items-baseline justify-between gap-3">
        <span
          className={`font-mono text-[0.72rem] uppercase tracking-[0.12em] transition-colors ${
            item.title
              ? "text-muted group-hover:text-ink"
              : "text-muted/45 italic lowercase tracking-normal"
          }`}
        >
          {item.title || "short name"}
        </span>
        {hasLink && (
          <span
            className="text-sm transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            style={{ color: accent }}
          >
            ↗
          </span>
        )}
      </div>
    </Wrapper>
  );
}

function Gallery({ p }) {
  return (
    <>
      <Reveal>
        <div className="py-14 max-w-3xl">
          <p className="eyebrow mb-6" style={{ color: p.accent }}>
            Context
          </p>
          <p className="text-ink/85 leading-relaxed font-light text-[1.08rem]">
            {p.context}
          </p>
        </div>
      </Reveal>
      <Reveal>
        <div className="columns-2 lg:columns-3 gap-4">
          {p.items.map((it, i) => (
            <GalleryItem key={i} item={it} index={i} accent={p.accent} />
          ))}
        </div>
      </Reveal>
    </>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const p = projects.find((x) => x.slug === slug);
  if (!p) return <Navigate to="/" replace />;

  return (
    <article className="pt-28 pb-28">
      <div className="max-w-page mx-auto px-6">
        <Header p={p} />
        {p.type === "case-study" ? <CaseStudy p={p} /> : <Gallery p={p} />}

        {p.notifyUrl && (
          <Reveal>
            <div
              className="mt-20 py-10 border-y flex flex-col sm:flex-row sm:items-center justify-between gap-7"
              style={{ borderColor: `${p.accent}33` }}
            >
              <div>
                <p
                  className="font-serif text-2xl md:text-3xl"
                  style={{ color: p.accent }}
                >
                  Interested in {p.title}?
                </p>
                <p className="text-muted text-sm mt-2 font-light max-w-sm">
                  It's launching soon. Drop your details and I'll personally
                  notify you when it's live.
                </p>
              </div>
              <div className="shrink-0">
                <ArrowLink
                  label="Notify me"
                  direction="right"
                  href={p.notifyUrl}
                />
              </div>
            </div>
          </Reveal>
        )}

        <Reveal>
          <div className="pt-16 mt-12 border-t border-line">
            <ArrowLink label="Back to all work" direction="left" to="/#work" />
          </div>
        </Reveal>
      </div>
    </article>
  );
}
