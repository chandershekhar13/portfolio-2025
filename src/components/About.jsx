import { useState } from "react";
import { useReveal } from "./Shared";
import { FileText } from "lucide-react";

// THE WATER-SLOSH COPY BUTTON (Floating Sticker Edition)
function AboutWaterCopyPill({ email }) {
  const [copied, setCopied] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleCopy = (e) => {
    e.preventDefault(); 
    e.stopPropagation();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  let fillState = "idle";
  if (copied) fillState = "copied";
  else if (hovered) fillState = "hover";

  return (
    <>
      <style>{`
        @keyframes about-wave-spin {
          from { transform: translate(-50%, 0) rotate(0deg); }
          to { transform: translate(-50%, 0) rotate(360deg); }
        }
        
        .about-water-btn {
          /* FIXED: Absolute positioning to float OVER the text */
          position: absolute;
          top: -22px;
          right: -28px;
          
          /* FIXED: Rotated right-side down to match your sketch */
          transform: rotate(14deg);
          
          display: inline-flex !important;
          align-items: center !important;
          flex-direction: row !important;
          gap: 6px !important;
          white-space: nowrap !important;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.4);
          border-radius: 40px;
          padding: 6px 14px;
          background: rgba(10, 10, 18, 0.85); /* Dark background to cover the text underneath */
          backdrop-filter: blur(8px);
          cursor: pointer;
          z-index: 10;
          transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
        }
        
        /* Straightens out playfully on hover */
        .about-water-btn:hover { 
          border-color: rgba(255, 255, 255, 0.8); 
          transform: rotate(0deg) scale(1.05); 
          background: #0a0a12; 
        }
        .about-water-btn:active { transform: rotate(0deg) scale(0.95); }
        
        .about-water-fill {
          position: absolute;
          left: 50%;
          width: 250%;
          padding-bottom: 250%;
          border-radius: 40%;
          z-index: 0;
          animation: about-wave-spin 3s linear infinite;
          transition: top 0.6s cubic-bezier(0.23, 1, 0.32, 1), background 0.4s;
        }
        
        .about-water-fill.idle { top: 120%; background: rgba(255, 255, 255, 0); }
        .about-water-fill.hover { top: 75%; background: rgba(255, 255, 255, 0.15); }
        .about-water-fill.copied { top: -20%; background: #fff; }

        .about-water-text {
          position: relative;
          z-index: 1;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #fff;
          transition: color 0.3s;
        }
        .about-water-text.copied { color: #0a0a12; }

        @media (max-width: 600px) {
          .about-water-btn {
            top: -24px;
            right: -10px;
            transform: rotate(14deg) scale(0.9);
          }
        }
      `}</style>

      <div
        role="button"
        className="about-water-btn"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={handleCopy}
      >
        <div className={`about-water-fill ${fillState}`} />
        <span className={`about-water-text ${copied ? 'copied' : ''}`}>
          {copied ? "Copied" : "Copy"}
        </span>
        <svg 
          style={{ position: 'relative', zIndex: 1, flexShrink: 0 }} 
          width="12" height="12" viewBox="0 0 24 24" fill="none" 
          stroke={copied ? "#0a0a12" : "#fff"} 
          strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
        >
          {copied ? (
            <polyline points="20 6 9 17 4 12" />
          ) : (
            <>
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </>
          )}
        </svg>
      </div>
    </>
  );
}

export default function About() {
  const [r0, s0] = useReveal(0);
  const [r1, s1] = useReveal(0.1);

  return (
    <section id="about" style={{ position: "relative", zIndex: 1, padding: "clamp(80px, 10vw, 160px) clamp(24px, 5vw, 72px)" }}>
      
      {/* THE AMBIENT GLOW */}
      <div style={{
        position: "absolute", top: "30%", left: "20%",
        width: "50vw", height: "50vw", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(99,102,241,0.03) 0%, transparent 70%)",
        pointerEvents: "none", zIndex: 0
      }} />

      <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: 1200, margin: "0 auto" }}>
        
        <style>{`
          .about-split-layout {
            display: grid;
            grid-template-columns: 1fr;
            gap: 64px;
          }
          
          @media (min-width: 900px) {
            .about-split-layout {
              grid-template-columns: 1fr 1.2fr;
              gap: 100px;
              align-items: start;
            }
          }
        `}</style>

        <div className="about-split-layout">
          
          {/* LEFT COLUMN: The Hook */}
          <div ref={r0} style={{ ...s0, position: "sticky", top: "160px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 32 }}>

            </div>

            <h3 style={{ fontSize: "clamp(40px, 5vw, 72px)", fontFamily: "Georgia,serif", fontStyle: "italic", fontWeight: 400, color: "#fff", margin: 0, lineHeight: 1.05, letterSpacing: "-0.02em" }}>
              I engineer fluid experiences out of complex algorithms.
            </h3>
          </div>

          {/* RIGHT COLUMN: The Narrative & Console */}
          <div ref={r1} style={{ ...s1, display: "flex", flexDirection: "column", gap: 40, marginTop: "8px" }}>
            
            <div style={{ display: "flex", flexDirection: "column", gap: 32, fontSize: "clamp(16px, 1.5vw, 20px)", color: "rgba(255,255,255,0.6)", lineHeight: 1.8, fontWeight: 300 }}>
              <p style={{ margin: 0 }}>
                I am a Computer Science undergraduate at Lovely Professional University. My work lives at the exact intersection of hardcore backend logic and seamless frontend execution. 
              </p>
              <p style={{ margin: 0 }}>
                I believe that great software shouldn't just work—it should feel effortless. Whether I am competing against 2.6 Lakh developers to reach Round 3 of the Adobe Hackathon, or building real-time visualizers that make sorting algorithms beautiful, my goal is always the same: absolute precision.
              </p>
              <p style={{ margin: 0 }}>
                My sweet spot is where the raw performance of <strong style={{ color: "#fff", fontWeight: 500 }}>C++ </strong> meets the interactivity of <strong style={{ color: "#fff", fontWeight: 500 }}>React</strong>. 
              </p>
            </div>

            <div style={{ height: 1, background: "rgba(255,255,255,0.08)", width: "100%", margin: "16px 0" }} />

            {/* The Action Console */}
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "32px" }}>
              
              <a 
                href="CV.pdf" 
                download 
                style={{
                  display: "inline-flex", alignItems: "center", gap: 12,
                  padding: "16px 32px", borderRadius: "50px",
                  background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)",
                  color: "#fff", fontSize: 10, fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase",
                  textDecoration: "none", cursor: "pointer",
                  transition: "all 0.3s cubic-bezier(0.23, 1, 0.32, 1)"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#fff";
                  e.currentTarget.style.color = "#0a0a12";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                  e.currentTarget.style.color = "#fff";
                }}
              >
                <span>Download CV</span>
                <FileText size={16} strokeWidth={2} />
              </a>

              {/* FIXED: The relative container that acts as the anchor point for the absolute Pill */}
              <div style={{ position: "relative", display: "inline-block", paddingRight: "16px" }}>
                <span style={{ fontSize: "clamp(16px, 1.5vw, 18px)", fontWeight: 400, color: "rgba(255,255,255,0.8)", letterSpacing: "0.02em" }}>
                  chandershekhar12344@gmail.com
                </span>
                <AboutWaterCopyPill email="chandershekhar12344@gmail.com" />
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}