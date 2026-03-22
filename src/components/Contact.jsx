import { useState } from "react";
import { useReveal } from "./Shared";

// THE WATER-SLOSH COPY BUTTON (Floating Sticker Edition for Contact Page)
function ContactWaterCopyPill({ email }) {
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
        @keyframes contact-wave-spin {
          from { transform: translate(-50%, 0) rotate(0deg); }
          to { transform: translate(-50%, 0) rotate(360deg); }
        }
        
        .contact-water-btn {
          /* FIXED: Absolute positioning to float OVER the top right of the text */
          position: absolute;
          top: -20px;
          right: -30px;
          
          /* Scaled to 1.1x because Contact page typography is larger */
          transform: rotate(14deg) scale(1.1);
          
          display: inline-flex !important;
          align-items: center !important;
          flex-direction: row !important;
          gap: 6px !important;
          white-space: nowrap !important;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.4);
          border-radius: 40px;
          padding: 6px 14px;
          background: rgba(10, 10, 18, 0.85); /* Dark blur to cover text underneath */
          backdrop-filter: blur(8px);
          cursor: pointer;
          z-index: 10;
          transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
        }
        
        .contact-water-btn:hover { 
          border-color: rgba(255, 255, 255, 0.8); 
          transform: rotate(0deg) scale(1.15); 
          background: #0a0a12; 
        }
        .contact-water-btn:active { transform: rotate(0deg) scale(1.05); }
        
        .contact-water-fill {
          position: absolute;
          left: 50%;
          width: 250%;
          padding-bottom: 250%;
          border-radius: 40%;
          z-index: 0;
          animation: contact-wave-spin 3s linear infinite;
          transition: top 0.6s cubic-bezier(0.23, 1, 0.32, 1), background 0.4s;
        }
        
        .contact-water-fill.idle { top: 120%; background: rgba(255, 255, 255, 0); }
        .contact-water-fill.hover { top: 75%; background: rgba(255, 255, 255, 0.15); }
        .contact-water-fill.copied { top: -20%; background: #fff; }

        .contact-water-text {
          position: relative;
          z-index: 1;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #fff;
          transition: color 0.3s;
        }
        .contact-water-text.copied { color: #0a0a12; }

        /* FIXED: Mobile specific adjustments to keep it tightly anchored and visible */
        @media (max-width: 600px) {
          .contact-water-btn {
            top: -26px;
            right: -10px;
            transform: rotate(14deg) scale(0.9);
          }
          .contact-water-btn:hover { transform: rotate(0deg) scale(0.95); }
          .contact-water-btn:active { transform: rotate(0deg) scale(0.85); }
        }
      `}</style>

      <div
        role="button"
        className="contact-water-btn"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={handleCopy}
      >
        <div className={`contact-water-fill ${fillState}`} />
        <span className={`contact-water-text ${copied ? 'copied' : ''}`}>
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

export default function Contact() {
  const [r0, s0] = useReveal(0);
  const [r1, s1] = useReveal(0.1);

  const CONTACT_LINKS = [
    { label: "Email", value: "chandershekhar12344@gmail.com", href: "mailto:chandershekhar12344@gmail.com" },
    { label: "LinkedIn", value: "linkedin.com/in/chandershekhar13", href: "https://linkedin.com/in/chandershekhar13" },
    { label: "GitHub", value: "github.com/chandershekhar13", href: "https://github.com/chandershekhar13" }
  ];

  return (
    <section id="contact" style={{ position: "relative", zIndex: 1, minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "clamp(80px, 10vw, 120px) clamp(24px, 5vw, 72px)" }}>
      
      <div style={{ width: "100%", maxWidth: 1200, margin: "0 auto", display: "grid", gap: "clamp(32px, 5vw, 64px)", alignItems: "center" }}>
        
        <style>{`
          .contact-grid { grid-template-columns: 1fr; }
          .desktop-spacer { display: none; }
          .contact-content { padding-top: 240px; } 
          
          @media (min-width: 900px) {
            .contact-grid { grid-template-columns: 1fr 1fr; }
            .desktop-spacer { display: block; }
            .contact-content { padding-top: 0; }
          }
        `}</style>
        
        <div className="contact-grid" style={{ display: "grid", gap: 64 }}>
          
          <div className="desktop-spacer" />

          <div className="contact-content" style={{ display: "flex", flexDirection: "column", gap: 80 }}>
            
            <div ref={r0} style={s0}>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 32 }}>
                <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)" }}>06</span>
                <span style={{ height: 1, width: 32, background: "rgba(255,255,255,0.15)" }} />
                <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)" }}>Get in touch</span>
              </div>
              
              <h2 style={{ fontSize: "clamp(40px, 5vw, 72px)", fontFamily: "'Helvetica Neue',Arial,sans-serif", fontWeight: 400, color: "#fff", margin: 0, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
                Let's build something <br/>
                <span style={{ fontFamily: "Georgia,serif", fontStyle: "italic", color: "rgba(255,255,255,0.5)" }}>remarkable.</span>
              </h2>
            </div>

            <div ref={r1} style={{ ...s1, display: "flex", flexDirection: "column" }}>
              {CONTACT_LINKS.map((link, i) => (
                <a 
                  key={i} 
                  href={link.href} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="premium-contact-row"
                  style={{ 
                    display: "flex", justifyContent: "space-between", alignItems: "center", 
                    padding: "32px 0", borderBottom: "1px solid rgba(255,255,255,0.1)", 
                    textDecoration: "none"
                  }}
                >
                  <style>{`
                    .premium-contact-row .link-val { color: rgba(255,255,255,0.6); transition: color 0.4s ease; }
                    .premium-contact-row .link-icon { opacity: 0.3; transform: translate(0, 0); transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1); }
                    
                    .premium-contact-row:hover .link-val { color: rgba(255,255,255,1); }
                    .premium-contact-row:hover .link-icon { opacity: 1; transform: translate(4px, -4px); color: #10b981; }
                    
                    @media (max-width: 600px) {
                      .link-val { font-size: 16px !important; word-break: break-all; }
                      .link-gap { gap: 16px !important; flex-wrap: wrap; }
                    }
                  `}</style>
                  
                  <div className="link-gap" style={{ display: "flex", alignItems: "center", gap: 32 }}>
                    <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", width: 70, flexShrink: 0 }}>
                      {link.label}
                    </span>
                    
                    {/* FIXED: The relative inline-block wrapper safely anchors the pill on both Desktop and Mobile */}
                    {link.label === "Email" ? (
                      <div style={{ position: "relative", display: "inline-block", paddingRight: "16px", marginTop: "4px" }}>
                        <span className="link-val" style={{ fontSize: "clamp(18px, 2.5vw, 24px)", fontWeight: 400 }}>
                          {link.value}
                        </span>
                        <ContactWaterCopyPill email={link.value} />
                      </div>
                    ) : (
                      <span className="link-val" style={{ fontSize: "clamp(18px, 2.5vw, 24px)", fontWeight: 400 }}>
                        {link.value}
                      </span>
                    )}
                  </div>
                  
                  <svg className="link-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </a>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}