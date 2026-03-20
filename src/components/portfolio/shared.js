export const sectionTitle = {
  fontFamily: "'Syne', sans-serif",
  fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
  fontWeight: 800,
  letterSpacing: "-0.03em",
  lineHeight: 1.05,
  color: "#fff",
  marginBottom: "3rem",
};

export const btnStyle = (bg, outlined = false) => ({
  display: "inline-block",
  padding: "0.75rem 2rem",
  borderRadius: "4px",
  fontFamily: "'DM Mono', monospace",
  fontSize: "0.8rem",
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  textDecoration: "none",
  color: outlined ? "rgba(255,255,255,0.7)" : "#04040c",
  background: bg,
  border: outlined ? "1px solid rgba(255,255,255,0.2)" : "none",
  fontWeight: 600,
  transition: "all 0.25s ease",
});

