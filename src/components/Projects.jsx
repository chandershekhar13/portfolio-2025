import { SL, useReveal } from "./Shared";
import { PROJECTS } from "../data";

function TableProject({ p }) {
  const [r, s] = useReveal(0);

  return (
    <div ref={r} style={{ ...s, padding: "80px 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
      
      {/* Desktop Grid: 40% Left / 60% Right */}
      <style>{`
        @media (min-width: 900px) {
          .table-grid-${p.num} { grid-template-columns: 1fr 1.5fr !important; }
        }
      `}</style>

      <div className={`table-grid-${p.num}`} style={{ display: "grid", gridTemplateColumns: "1fr", gap: "64px", alignItems: "start" }}>
        
        {/* PANE 1: Identity & Tools */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", color: "rgba(255,255,255,0.3)" }}>{p.num}</span>
            <span style={{ width: 24, height: 1, background: "rgba(255,255,255,0.1)" }} />
            {/* Using the project's accent color for the tag */}
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: p.accent.replace('0.18', '0.8').replace('0.14', '0.8') }}>
              {p.tag}
            </span>
          </div>

          <h2 style={{ fontSize: "clamp(36px, 4vw, 56px)", fontFamily: "Georgia,serif", fontStyle: "italic", fontWeight: 400, color: "#fff", lineHeight: 1.1, marginBottom: 16 }}>
            {p.name}
          </h2>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", letterSpacing: "0.08em", marginBottom: 40 }}>{p.period} · {p.context}</p>
          
          <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 16 }}>Core Tech</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {p.tech.map(tc => (
              <span key={tc} style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.15)", padding: "8px 16px", borderRadius: 50 }}>
                {tc}
              </span>
            ))}
          </div>
        </div>

        {/* PANE 2: Execution & Results */}
        <div style={{ paddingTop: "8px" }}>
          
          {/* Metrics Dashboard */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 48, background: "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.0) 100%)", border: "1px solid rgba(255,255,255,0.05)", padding: "32px", borderRadius: 20 }}>
            {p.stats.map(st => (
              <div key={st.l}>
                <p style={{ fontSize: 26, fontWeight: 800, color: "#fff", marginBottom: 8, lineHeight: 1 }}>{st.v}</p>
                <p style={{ fontSize: 9, color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em", textTransform: "uppercase" }}>{st.l}</p>
              </div>
            ))}
          </div>

          {/* Numbered Bullets */}
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 24 }}>
            {p.bullets.map((b, i) => (
              <li key={i} style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: "rgba(255,255,255,0.3)", marginTop: 4 }}>
                  0{i+1}
                </span>
                <span style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", fontWeight: 300, lineHeight: 1.7 }}>
                  {b}
                </span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" style={{ position: "relative", zIndex: 1, padding: "100px 72px" }}>
      <div style={{ maxWidth: 1300, margin: "0 auto" }}>
        <SL num="01" label="Selected Works" />
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          {PROJECTS.map(p => <TableProject key={p.num} p={p} />)}
        </div>
      </div>
    </section>
  );
}