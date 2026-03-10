import { Glass, SL, useReveal } from "./Shared";

export default function Training() {
  const [r0, s0] = useReveal(0);
  const [r1, s1] = useReveal(0.1);
  return (
    <section style={{ position: "relative", zIndex: 1, padding: "100px 72px" }}>
      <div style={{ maxWidth: 1300, margin: "0 auto" }}>
        <SL num="03" label="Training" />
        
        <div className="training-bento">
          {/* Main Title Box */}
          <Glass r={32} style={{ ...s0, padding: "48px", background: "linear-gradient(135deg,rgba(255,255,255,0.07) 0%,rgba(99,102,241,0.14) 100%)", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }} ref={r0}>
            <div>
              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: 14 }}>W3Schools · Angaar Batch</p>
              <h3 style={{ fontSize: "clamp(30px,4vw,60px)", fontFamily: "Georgia,serif", fontStyle: "italic", fontWeight: 400, color: "#fff", letterSpacing: "-0.02em", lineHeight: 0.95, marginBottom: 16 }}>
                Data Structures &<br />Algorithms
              </h3>
            </div>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", letterSpacing: "0.08em", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 16 }}>Jun '25 – Jul '25 · 4-week curriculum</p>
          </Glass>

          {/* Stats Box */}
          <Glass r={32} style={{ ...s1, padding: "48px", background: "rgba(255,255,255,0.04)", display: "flex", flexDirection: "column", justifyContent: "center", gap: 16 }} ref={r1}>
            {[["4", "Weeks"], ["200+", "Problems"], ["30%", "Speed Gain"]].map(([v, l]) => (
              <div key={l} style={{ borderRadius: 16, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: 9, color: "rgba(255,255,255,0.5)", letterSpacing: "0.15em", textTransform: "uppercase" }}>{l}</span>
                <span style={{ fontSize: 24, fontWeight: 800, color: "#fff", lineHeight: 1 }}>{v}</span>
              </div>
            ))}
          </Glass>

          {/* Detailed Topic Boxes */}
          {[
            ["200+ Problems", "Arrays, Trees, Graphs & DP — 30% improvement in speed."],
            ["O(log n) Solutions", "Optimised Java & C++ with complexity analysis."],
            ["DP & Backtracking", "Advanced topics boosting test-case pass rate."],
            ["Tech: C++ · DSA", "Systematic competitive programming throughout."],
          ].map(([t, d], i) => {
            const [rX, sX] = useReveal(0.15 + (i * 0.05));
            return (
              <Glass key={t} r={20} style={{ ...sX, padding: "28px", background: "rgba(255,255,255,0.03)" }} ref={rX}>
                <p style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.85)", marginBottom: 8 }}>{t}</p>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", lineHeight: 1.6 }}>{d}</p>
              </Glass>
            );
          })}
        </div>

        <style>{`
          .training-bento { display: grid; gap: 16px; grid-template-columns: 1fr; }
          @media (min-width: 900px) {
            .training-bento { grid-template-columns: repeat(4, 1fr); }
            .training-bento > div:nth-child(1) { grid-column: span 3; grid-row: span 2; } /* Main Title */
            .training-bento > div:nth-child(2) { grid-column: span 1; grid-row: span 2; } /* Stats Column */
            .training-bento > div:nth-child(3) { grid-column: span 1; }
            .training-bento > div:nth-child(4) { grid-column: span 1; }
            .training-bento > div:nth-child(5) { grid-column: span 1; }
            .training-bento > div:nth-child(6) { grid-column: span 1; }
          }
        `}</style>
      </div>
    </section>
  );
}