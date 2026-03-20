import { motion as Motion } from "framer-motion";
import SectionLabel from "./SectionLabel";
import { btnStyle } from "./shared";

export default function Contact() {
  return (
    <section
      id="contact"
      style={{ padding: "8rem 3rem", borderTop: "1px solid rgba(255,255,255,0.06)", textAlign: "center" }}
    >
      <SectionLabel label="05 / Contact" />

      <Motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "clamp(2.5rem, 6vw, 5rem)",
          fontWeight: 800,
          letterSpacing: "-0.03em",
          lineHeight: 1.1,
          marginBottom: "1.5rem",
        }}
      >
        Let's build
        <br />
        <span style={{ color: "#00f7ff" }}>something great.</span>
      </Motion.h2>

      <Motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: "rgba(255,255,255,0.45)", marginBottom: "3rem" }}
      >
        Open to full-time roles, freelance, and collaborations.
      </Motion.p>

      <Motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
        style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}
      >
        <a href="mailto:rishisrmscet@gmail.com" style={{ ...btnStyle("#00f7ff"), fontSize: "0.85rem" }}>
          rishisrmscet@gmail.com
        </a>
        <a href="https://wa.me/916395561722" target="_blank" rel="noreferrer" style={{ ...btnStyle("transparent", true), fontSize: "0.85rem" }}>
          WhatsApp ↗
        </a>
        <a href="https://github.com/Rishiraghuvanshicet" target="_blank" rel="noreferrer" style={{ ...btnStyle("transparent", true), fontSize: "0.85rem" }}>
          GitHub ↗
        </a>
      </Motion.div>

      <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", color: "rgba(255,255,255,0.2)", marginTop: "6rem", letterSpacing: "0.1em" }}>
        © 2025 RISHI RAGHUVANSHI — BUILT WITH REACT + FRAMER MOTION
      </p>
    </section>
  );
}

