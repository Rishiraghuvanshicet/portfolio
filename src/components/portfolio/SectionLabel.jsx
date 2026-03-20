export default function SectionLabel({ label }) {
  return (
    <p
      style={{
        fontFamily: "'DM Mono', monospace",
        fontSize: "0.7rem",
        letterSpacing: "0.2em",
        color: "rgba(255,255,255,0.3)",
        textTransform: "uppercase",
        marginBottom: "1rem",
      }}
    >
      {label}
    </p>
  );
}

