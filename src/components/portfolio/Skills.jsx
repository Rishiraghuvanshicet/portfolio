import SectionLabel from "./SectionLabel";
import { sectionTitle } from "./shared";
import { SKILLS } from "./data";
import SkillBar from "./SkillBar";

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: "8rem 3rem",
        background: "rgba(0,247,255,0.015)",
        borderTop: "1px solid rgba(0,247,255,0.07)",
        borderBottom: "1px solid rgba(0,247,255,0.07)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionLabel label="03 / Skills" />
        <h2 style={sectionTitle}>
          Tech
          <br />
          <span style={{ WebkitTextStroke: "2px rgba(255,255,255,0.2)", color: "transparent" }}>Arsenal.</span>
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: "1.5rem",
            marginTop: "3rem",
          }}
        >
          {SKILLS.map((s, i) => (
            <SkillBar key={s.name} skill={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

