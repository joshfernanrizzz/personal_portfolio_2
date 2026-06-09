import { useParams, Navigate } from "react-router-dom";
import { projects } from "../content.js";
import { Reveal, SmartImage, ArrowLink } from "../components/ui.jsx";

// ---- shared bits -----------------------------------------------------------

function Header({ p }) {
  return (
    <Reveal>
      <div className="mb-10">
        <ArrowLink label="All work" direction="left" to="/#work" />
        <div className="flex items-center gap-3 mt-8 mb-4">
          <span className="h-px w-8" style={{ background: p.accent }} />
          <span className="eyebrow">{p.cardSubtitle}</span>
        </div>
        <h1
          className="font-serif text-[clamp(3rem,9vw,6rem)] leading-[0.95] tracking-[-0.01em]"
          style={{ color: p.accent, fontFamily: p.titleFont || undefined }}
        >
          {p.title}
        </h1>
        <p className="mt-6 max-w-prose2 text-muted text-lg leading-relaxed font-light">
          {p.tagline}
        </p>
      </div>
    </Reveal>
  );
}

// Stacked section: accent-coloured heading sitting directly above its paragraph,
// left-aligned in a readable column — matching the Figma case-study layout.
function Section({ label, accent, children }) {
  return (
    <Reveal>
      <div className="max-w-prose2 py-8">
        <h3
          className="font-sans font-medium text-[1.35rem] tracking-tight mb-3"
          style={{ color: accent }}
        >
          {label}
        </h3>
        <p className="text-ink/85 leading-relaxed font-light text-[1.05rem]">
          {children}
        </p>
      </div>
    </Reveal>
  );
}

// Wide screenshot interleaved between text sections.
function Shot({ src, label }) {
  return (
    <Reveal delay={0.05}>
      <SmartImage
        src={src}
        label={label}
        className="w-full aspect-[16/10] object-cover rounded-xl my-6"
      />
    </Reveal>
  );
}

// ---- layouts ---------------------------------------------------------------

function CaseStudy({ p }) {
  return (
    <>
      <Shot src={p.heroShots[0]} label="hero shot 1" />

      <Section label="Overview" accent={p.accent}>
        {p.overview}
      </Section>

      <Shot src={p.heroShots[1]} label="hero shot 2" />

      <Section label="The Challenge" accent={p.accent}>
        {p.challenge}
      </Section>

      <Section label="The Solution" accent={p.accent}>
        {p.solution}
      </Section>

      {/* images grid */}
      <Reveal>
        <div className="pt-14">
          <h3 className="eyebrow mb-6">Images</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {p.images.map((src, i) => (
              <SmartImage
                key={i}
                src={src}
                label={`image ${i + 1}`}
                className="w-full aspect-[4/3] object-cover rounded-xl"
              />
            ))}
          </div>
        </div>
      </Reveal>

      {/* key features */}
      <Reveal>
        <div className="pt-14">
          <h3 className="eyebrow mb-6">Key Features</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {p.keyFeatures.map((f, i) => (
              <SmartImage
                key={i}
                src={f.image}
                label={`feature ${i + 1}`}
                className="w-full object-cover rounded-xl"
              />
            ))}
          </div>
        </div>
      </Reveal>
    </>
  );
}

// Placeholder heights cycle so the collage has rhythm before real images go in.
const COLLAGE_H = [280, 220, 340, 200, 300, 240];

function GalleryItem({ item, index, accent }) {
  const hasImg = item.image && item.image.trim() !== "";
  const hasLink = item.link && item.link.trim() !== "";
  const Wrapper = hasLink ? "a" : "div";
  const wrapperProps = hasLink
    ? { href: item.link, target: "_blank", rel: "noreferrer" }
    : {};

  return (
    <Wrapper {...wrapperProps} className="group block mb-4 break-inside-avoid">
      <div className="relative overflow-hidden rounded-xl bg-surface-2">
        {hasImg ? (
          <img
            src={item.image}
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
          className={`font-mono text-[0.72rem] uppercase tracking-[0.14em] transition-colors ${
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
      <Section label="Context" accent={p.accent}>
        {p.context}
      </Section>

      {/* collage / mosaic — items flow into columns at natural heights */}
      <Reveal>
        <div className="pt-8 columns-2 lg:columns-3 gap-4">
          {p.items.map((it, i) => (
            <GalleryItem key={i} item={it} index={i} accent={p.accent} />
          ))}
        </div>
      </Reveal>
    </>
  );
}

// ---- page ------------------------------------------------------------------

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
              className="mt-16 p-8 rounded-2xl border border-line bg-surface/40 flex flex-col sm:flex-row sm:items-center justify-between gap-6"
              style={{ borderColor: `${p.accent}33` }}
            >
              <div>
                <p className="font-serif text-2xl" style={{ color: p.accent }}>
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
