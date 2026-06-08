import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

// Fade + rise into view when scrolled to. Wrap any block in <Reveal>.
export function Reveal({ children, delay = 0, y = 24, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

// Renders an <img> if a URL is provided, otherwise a labelled dashed box so you
// can see exactly where to paste a link in content.js.
export function SmartImage({
  src,
  alt = "",
  label = "Add image link",
  className = "",
  style,
}) {
  if (src && src.trim() !== "") {
    return (
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={className}
        style={style}
      />
    );
  }
  return (
    <div className={`img-placeholder ${className}`} style={style}>
      {label}
    </div>
  );
}

// The site's one button: a soft glass pill with a naked arrow.
// >>> To restyle ALL buttons at once, edit the `.btn` / `.btn-arrow` rules
//     in src/index.css. This component only wires up the markup. <<<
export function ArrowLink({
  label,
  direction = "right", // "right" | "down" | "left"
  to,
  href,
  onClick,
  className = "",
  type = "button",
  disabled = false,
}) {
  const arrow = { right: "→", down: "↓", left: "←" }[direction];
  const isBack = direction === "left";

  const inner = (
    <>
      {isBack && <span className="btn-arrow btn-arrow--left">{arrow}</span>}
      <span>{label}</span>
      {!isBack && (
        <span className={`btn-arrow btn-arrow--${direction}`}>{arrow}</span>
      )}
    </>
  );

  const cls = `btn ${className}`.trim();

  if (to)
    return (
      <Link to={to} onClick={onClick} className={cls}>
        {inner}
      </Link>
    );
  if (href)
    return (
      <a href={href} onClick={onClick} className={cls}>
        {inner}
      </a>
    );
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls}>
      {inner}
    </button>
  );
}

// Reset scroll to top on route change.
export function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
