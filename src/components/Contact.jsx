import { useState } from "react";
import { profile, about } from "../content.js";
import { Reveal, ArrowLink } from "./ui.jsx";

export default function Contact() {
  const [status, setStatus] = useState("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!profile.formspreeId) {
      const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
      const body = encodeURIComponent(
        `${form.message}\n\n— ${form.name} (${form.email})`,
      );
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${profile.formspreeId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-surface-2 border border-line rounded-lg px-4 py-3 text-ink placeholder:text-muted/60 font-light focus:outline-none focus:border-accent transition-colors duration-300";

  return (
    <section id="contact" className="py-28 scroll-mt-20 border-t border-line">
      <div className="max-w-page mx-auto px-6">
        <Reveal>
          <span className="eyebrow">Contact</span>
          <h2 className="font-serif text-[clamp(2.4rem,6vw,4.2rem)] leading-[1.02] tracking-[-0.01em] mt-5">
            {about.ctaHeading}
          </h2>
          <p className="mt-6 text-muted leading-relaxed font-light max-w-prose2">
            {about.ctaBody}
          </p>
        </Reveal>

        {/* intake CTA */}
        {profile.intakeUrl && (
          <Reveal delay={0.08}>
            <div className="mt-10 p-7 rounded-2xl border border-line bg-surface/40 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <p className="font-sans font-medium text-ink text-lg">
                  Want to work together?
                </p>
                <p className="text-muted text-sm mt-1 font-light">
                  Fill out a quick brief — what you need, your timeline, your
                  budget. I'll review and get back to you.
                </p>
              </div>
              <div className="shrink-0">
                <ArrowLink
                  label="Start a project"
                  direction="right"
                  href={profile.intakeUrl}
                />
              </div>
            </div>
          </Reveal>
        )}

        {/* divider */}
        <Reveal delay={0.1}>
          <div className="mt-16 flex items-center gap-4">
            <span className="h-px flex-1 bg-line" />
            <span className="eyebrow">or just say hi</span>
            <span className="h-px flex-1 bg-line" />
          </div>
        </Reveal>

        {/* general contact form */}
        <div className="mt-12 grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          <Reveal delay={0.12}>
            <div className="flex flex-col gap-3 font-mono text-sm">
              <a
                href={`mailto:${profile.email}`}
                className="group inline-flex items-center gap-3"
              >
                <span className="text-muted uppercase tracking-[0.12em] text-[0.7rem]">
                  Email
                </span>
                <span className="group-hover:text-accent transition-colors">
                  {profile.email}
                </span>
              </a>
              <a
                href={profile.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3"
              >
                <span className="text-muted uppercase tracking-[0.12em] text-[0.7rem]">
                  Instagram
                </span>
                <span className="group-hover:text-accent transition-colors">
                  {profile.instagramHandle}
                </span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.14}>
            <form onSubmit={onSubmit} className="flex flex-col gap-4">
              <input
                required
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={update("name")}
                className={inputClass}
              />
              <input
                required
                type="email"
                placeholder="Your email"
                value={form.email}
                onChange={update("email")}
                className={inputClass}
              />
              <textarea
                required
                rows={4}
                placeholder="Quick message"
                value={form.message}
                onChange={update("message")}
                className={inputClass + " resize-none"}
              />
              <div className="self-start mt-1">
                <ArrowLink
                  type="submit"
                  direction="right"
                  disabled={status === "sending"}
                  label={
                    status === "sending"
                      ? "Sending…"
                      : status === "sent"
                        ? "Sent"
                        : "Send message"
                  }
                />
              </div>
              {status === "error" && (
                <p className="text-xs text-red-400">
                  Something went wrong — email me directly.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
