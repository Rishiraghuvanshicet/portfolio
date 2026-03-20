import { useEffect, useRef, useState } from "react";

export default function SkillBar({ skill, index }) {
  const [animated, setAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setTimeout(() => setAnimated(true), index * 60);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      style={{
        padding: "1.2rem 1.5rem",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: "6px",
        background: "rgba(255,255,255,0.02)",
        transition: "border-color 0.3s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${skill.color}66`)}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)")}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", fontWeight: 500, color: "#fff" }}>
          {skill.name}
        </span>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", color: skill.color }}>
          {skill.level}%
        </span>
      </div>

      <div style={{ height: 3, background: "rgba(255,255,255,0.06)", borderRadius: 2, overflow: "hidden" }}>
        <div
          style={{
            height: "100%",
            width: animated ? `${skill.level}%` : "0%",
            background: skill.color,
            borderRadius: 2,
            transition: "width 1.2s cubic-bezier(0.4,0,0.2,1)",
            boxShadow: `0 0 8px ${skill.color}66`,
          }}
        />
      </div>
    </div>
  );
}

