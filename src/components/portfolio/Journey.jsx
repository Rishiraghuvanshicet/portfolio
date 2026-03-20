import { motion as Motion } from "framer-motion";
import SectionLabel from "./SectionLabel";
import { sectionTitle } from "./shared";
import { JOURNEY } from "./data";

export default function Journey() {
  return (
    <section id="journey" style={{ padding: "8rem 3rem", maxWidth: 1100, margin: "0 auto" }}>
      <SectionLabel label="04 / Journey" />
      <h2 style={sectionTitle}>
        My
        <br />
        <span style={{ WebkitTextStroke: "2px rgba(255,255,255,0.2)", color: "transparent" }}>Timeline.</span>
      </h2>

      <div style={{ position: "relative", marginTop: "4rem" }}>
        {/* vertical line */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: 0,
            bottom: 0,
            width: 1,
            background: "linear-gradient(to bottom, #00f7ff22, #ff6ef722, #ffe94d22)",
            transform: "translateX(-50%)",
          }}
        />

        {JOURNEY.map((item, i) => (
          <Motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            style={{
              display: "flex",
              justifyContent: i % 2 === 0 ? "flex-start" : "flex-end",
              marginBottom: "3rem",
              position: "relative",
            }}
          >
            {/* center dot */}
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "1.5rem",
                transform: "translate(-50%,-50%)",
                width: 14,
                height: 14,
                borderRadius: "50%",
                background: item.color,
                boxShadow: `0 0 16px ${item.color}`,
                zIndex: 2,
              }}
            />

            <div
              style={{
                width: "44%",
                padding: "1.5rem 2rem",
                border: `1px solid ${item.color}33`,
                borderRadius: "8px",
                background: "rgba(255,255,255,0.02)",
                backdropFilter: "blur(8px)",
              }}
            >
              <span
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.7rem",
                  color: item.color,
                  letterSpacing: "0.15em",
                }}
              >
                {item.year}
              </span>
              <div
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  color: "#fff",
                  marginTop: "0.4rem",
                }}
              >
                {item.icon} {item.title}
              </div>
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.9rem",
                  color: "rgba(255,255,255,0.5)",
                  marginTop: "0.3rem",
                }}
              >
                {item.sub}
              </div>
            </div>
          </Motion.div>
        ))}
      </div>
    </section>
  );
}

