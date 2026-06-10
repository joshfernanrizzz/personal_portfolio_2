import { motion } from "framer-motion";
import { profile } from "../content.js";
import { ArrowLink } from "./ui.jsx";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const scrollToWork = () =>
    document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-[92vh] flex items-center">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-page mx-auto px-6 w-full"
      >
        <motion.p variants={item} className="eyebrow mb-7">
          {profile.role}
        </motion.p>

        <motion.h1
          variants={item}
          className="font-serif font-normal leading-[0.98] tracking-[-0.01em] text-[clamp(2.8rem,9vw,7rem)]"
        >
          {profile.heroLine}
          <br />
          <span className="italic text-accent">{profile.heroEmphasis}</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-9 max-w-prose2 text-muted text-[1.02rem] leading-relaxed font-light"
        >
          {profile.heroSub}
        </motion.p>

        <motion.div variants={item} className="mt-11">
          <ArrowLink
            label="View work"
            direction="right"
            onClick={scrollToWork}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
