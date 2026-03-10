import { Glass, SL, useReveal } from "./Shared";

export default function About() {
  const [r0, s0] = useReveal(0);
  const [r1, s1] = useReveal(0.1);
  const [r2, s2] = useReveal(0.2);
  const [r3, s3] = useReveal(0.3);

  return (
    <section id="about" style={{ position: "relative", zIndex: 1, padding: "100px 72px" }}>
      <div style={{ maxWidth: 1300, margin: "0 auto" }}>
        <SL num="00" label="About" />
        
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 16, alignItems: "stretch" }}>
          {/* Main Bio */}
          <Glass r={32} style={{ ...s0, padding: "48px", display: "flex", flexDirection: "column", justifyContent: "center", background: "linear-gradient(135deg,rgba(255,255,255,0.07) 0%,rgba(99,102,241,0.12) 100%)" }} ref={r0}>
            <h2 style={{ fontSize: "clamp(26px,3.5vw,50px)", fontFamily: "Georgia,serif", fontStyle: "italic", fontWeight: 400, color: "#fff", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 28 }}>
              Engineering clarity<br />from complexity.
            </h2>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.55)", fontWeight: 300, lineHeight: 1.82, marginBottom: 18 }}>
              I'm Chander Shekhar, a Computer Science student at Lovely Professional University focused on algorithms, system design, and frontend engineering.
            </p>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.55)", fontWeight: 300, lineHeight: 1.82 }}>
              From advancing to Round 3 of Adobe Hackathon 2025 among 2.6 lakh students, to building real-time algorithm visualisers — I care deeply about precision in both thinking and execution.
            </p>
          </Glass>

          {/* Right Side Asymmetrical Bento */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            
            {/* Wide Top: Degree */}
            <Glass r={24} style={{ ...s1, gridColumn: "span 2", padding: "24px", display: "flex", flexDirection: "column", justifyContent: "center" }} ref={r1}>
              <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 8 }}>Degree & University</p>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.85)", fontWeight: 500 }}>B.Tech CSE, LPU — CGPA 7.0</p>
            </Glass>

            {/* Square Left: Location */}
            <Glass r={24} style={{ ...s2, padding: "24px", display: "flex", flexDirection: "column", justifyContent: "space-between" }} ref={r2}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)" }}>Location</p>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#10b981", animation: "pulse 2s infinite" }} />
              </div>
              <div>
                <p style={{ fontSize: 16, color: "rgba(255,255,255,0.9)", fontWeight: 500 }}>Phagwara</p>
                <p style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>Punjab, India</p>
              </div>
            </Glass>

            {/* Square Right: Networks */}
            <Glass r={24} style={{ ...s2, padding: "24px", display: "flex", flexDirection: "column", justifyContent: "space-between" }} ref={r2}>
               <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)" }}>Networks</p>
               <div>
                 <p style={{ fontSize: 13, color: "rgba(255,255,255,0.85)", marginBottom: 6 }}>GitHub ↗</p>
                 <p style={{ fontSize: 13, color: "rgba(255,255,255,0.85)" }}>LinkedIn ↗</p>
               </div>
            </Glass>

            {/* Wide Bottom: Contact */}
            <Glass r={24} style={{ ...s3, gridColumn: "span 2", padding: "24px", display: "flex", justifyContent: "space-between", alignItems: "center" }} ref={r3}>
              <div>
                <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 8 }}>Direct Contact</p>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.7)" }}>chandershekhar123344@gmail.com</p>
              </div>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", textAlign: "right" }}>+91 94136 12629</p>
            </Glass>

          </div>
        </div>
      </div>
    </section>
  );
}