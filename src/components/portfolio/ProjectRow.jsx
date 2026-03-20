import { useState } from "react";
import { motion as Motion } from "framer-motion";

export default function ProjectRow({ project, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Motion.a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "3rem",
        padding: "2.5rem 0",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        textDecoration: "none",
        background: hovered ? "rgba(255,255,255,0.02)" : "transparent",
        transition: "background 0.3s",
        cursor: "none",
      }}
    >
      <span
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.75rem",
          color: project.color,
          letterSpacing: "0.1em",
          minWidth: 30,
          paddingTop: 6,
        }}
      >
        {project.num}
      </span>

      <div style={{ flex: 1 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "0.75rem",
          }}
        >
          <h3
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(1.4rem, 3vw, 2.2rem)",
              fontWeight: 700,
              color: hovered ? project.color : "#fff",
              transition: "color 0.3s",
            }}
          >
            {project.title}
          </h3>

          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "1.2rem",
              color: hovered ? project.color : "rgba(255,255,255,0.3)",
              transition: "transform 0.3s, color 0.3s",
              transform: hovered ? "translate(4px,-4px)" : "none",
            }}
          >
            ↗
          </span>
        </div>

        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.95rem",
            lineHeight: 1.7,
            color: "rgba(255,255,255,0.45)",
            maxWidth: 600,
            marginBottom: "1.2rem",
          }}
        >
          {project.desc}
        </p>

        <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
          {project.tags.map((t) => (
            <span
              key={t}
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.68rem",
                letterSpacing: "0.1em",
                padding: "0.3rem 0.8rem",
                borderRadius: "2px",
                border: `1px solid ${project.color}33`,
                color: project.color,
                textTransform: "uppercase",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Motion.a>
  );
}

