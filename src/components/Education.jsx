import { Glass, SL, useReveal } from "./Shared";
import { EDU } from "../data";

export default function Education() {
  return (
    <section id="education" style={{ position: "relative", zIndex: 1, padding: "100px 72px" }}>
      <div style={{ maxWidth: 1300, margin: "0 auto" }}>
        <SL num="05" label="Education" />
        
        <div className="edu-bento">
          {EDU.map((e, i) => {
            const [r, s] = useReveal(i * 0.1);
            return (
              <Glass key={i} r={24} hover style={{ ...s, height: "100%", background: `linear-gradient(135deg,rgba(255,255,255,0.07) 0%,${e.accent} 100%)` }} ref={r}>
                <div style={{ padding: "32px 36px", display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between" }}>
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: 16 }}>
                      <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.2em", color: "rgba(255,255,255,0.2)" }}>0{i + 1}</span>
                      {e.current && (
                        <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#10b981", background: "rgba(16,185,129,0.15)", border: "1px solid rgba(16,185,129,0.3)", padding: "4px 12px", borderRadius: 20 }}>Current</span>
                      )}
                    </div>
                    <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: 8 }}>{e.loc}</p>
                    <h3 style={{ fontSize: "clamp(18px,2vw,28px)", fontFamily: "Georgia,serif", fontStyle: "italic", fontWeight: 400, color: "rgba(255,255,255,0.9)", marginBottom: 8, lineHeight: 1.2 }}>{e.degree}</h3>
                    <p style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", marginBottom: 24 }}>{e.school}</p>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 16 }}>
                    <p style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em" }}>{e.period}</p>
                    <p style={{ fontSize: "clamp(20px,2.5vw,34px)", fontWeight: 800, color: "#fff", lineHeight: 1 }}>{e.grade}</p>
                  </div>
                </div>
              </Glass>
            );
          })}
        </div>

        <style>{`
          .edu-bento { display: grid; gap: 16px; grid-template-columns: 1fr; }
          @media (min-width: 900px) {
            .edu-bento { grid-template-columns: repeat(2, 1fr); }
            .edu-bento > div:nth-child(1) { grid-column: span 2; } /* B.Tech Box */
            .edu-bento > div:nth-child(2) { grid-column: span 1; } /* 12th Box */
            .edu-bento > div:nth-child(3) { grid-column: span 1; } /* 10th Box */
          }
        `}</style>
      </div>
    </section>
  );
}