import { useReveal, Glass } from "./Shared";

export default function About() {
  const [r0, s0] = useReveal(0);
  const [r1, s1] = useReveal(0.1);
  const [r2, s2] = useReveal(0.2);

  return (
    <section id="about" style={{ position: "relative", zIndex: 1, padding: "clamp(80px, 10vw, 120px) clamp(24px, 5vw, 72px)" }}>
      <div style={{ width: "100%", maxWidth: 1200, margin: "0 auto" }}>
        
        {/* Section Header */}
        <div ref={r0} style={{ ...s0, marginBottom: 48 }}>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontFamily: "Georgia,serif", fontStyle: "italic", color: "#fff", margin: 0 }}>
            About
          </h2>
        </div>

        {/* RESPONSIVE GRID CSS */}
        <style>{`
          /* Mobile First: Stacks everything into 1 single column */
          .about-grid {
            display: grid;
            grid-template-columns: 1fr; 
            gap: 24px;
          }
          .about-side-stack {
            display: grid;
            grid-template-columns: 1fr;
            gap: 24px;
          }
          
          /* Desktop Layout: Changes to a 60/40 Asymmetric Split */
          @media (min-width: 900px) {
            .about-grid {
              grid-template-columns: 1.3fr 0.7fr; 
            }
            .about-side-stack {
              grid-template-rows: 1fr 1fr;
              grid-template-columns: 1fr;
            }
          }
        `}</style>

        <div className="about-grid">
          
          {/* LEFT COLUMN - Main Bio Box */}
          <div ref={r1} style={s1}>
            <Glass r={24} hover style={{ padding: "clamp(32px, 5vw, 48px)", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <h3 style={{ fontSize: "clamp(32px, 4vw, 44px)", fontFamily: "Georgia,serif", fontStyle: "italic", color: "#fff", margin: "0 0 32px 0", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                Engineering clarity <br/> from complexity.
              </h3>
              
              <div style={{ display: "flex", flexDirection: "column", gap: 24, fontSize: "clamp(15px, 2vw, 17px)", color: "rgba(255,255,255,0.6)", lineHeight: 1.7, fontWeight: 300 }}>
                <p style={{ margin: 0 }}>
                  I'm Chander Shekhar, a Computer Science student at Lovely Professional University focused on algorithms, system design, and frontend engineering.
                </p>
                <p style={{ margin: 0 }}>
                  From advancing to Round 3 of Adobe Hackathon 2025 among 2.6 lakh students, to building real-time algorithm visualisers — I care deeply about precision in both thinking and execution.
                </p>
              </div>
            </Glass>
          </div>

          {/* RIGHT COLUMN - Stacked Info Boxes */}
          <div className="about-side-stack" ref={r2} style={s2}>
            
            {/* Box 1: Degree */}
            <Glass r={24} hover style={{ padding: "clamp(24px, 4vw, 36px)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", marginBottom: 12, marginTop: 0 }}>
                Degree & Major
              </p>
              <p style={{ fontSize: "clamp(20px, 3vw, 24px)", fontWeight: 600, color: "#fff", margin: 0, letterSpacing: "-0.02em" }}>
                B.Tech CSE
              </p>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", marginTop: 8, marginBottom: 0 }}>
                Lovely Professional University
              </p>
            </Glass>

            {/* Box 2: Contact */}
            <Glass r={24} hover style={{ padding: "clamp(24px, 4vw, 36px)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", marginBottom: 12, marginTop: 0 }}>
                Direct Contact
              </p>
              {/* Added word-break so long emails never stretch the box on tiny screens */}
              <p style={{ fontSize: "clamp(16px, 2.5vw, 20px)", fontWeight: 600, color: "#fff", margin: 0, letterSpacing: "-0.01em", wordBreak: "break-all" }}>
                chandershekhar12344<br/>@gmail.com
              </p>
            </Glass>

          </div>
        </div>

      </div>
    </section>
  );
}