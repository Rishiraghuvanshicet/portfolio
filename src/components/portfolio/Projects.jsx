import SectionLabel from "./SectionLabel";
import { sectionTitle } from "./shared";
import { PROJECTS } from "./data";
import ProjectRow from "./ProjectRow";

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "8rem 3rem", maxWidth: 1100, margin: "0 auto" }}>
      <SectionLabel label="02 / Projects" />
      <h2 style={sectionTitle}>
        Selected
        <br />
        <span style={{ WebkitTextStroke: "2px rgba(255,255,255,0.2)", color: "transparent" }}>Work.</span>
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
        {PROJECTS.map((p, i) => (
          <ProjectRow key={p.num} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}

