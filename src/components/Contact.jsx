import { useReveal } from "./Shared";

export default function Contact() {
  const [r0, s0] = useReveal(0);
  const [r1, s1] = useReveal(0.1);

  const CONTACT_LINKS = [
    { label: "Email", value: "chandershekhar12344@gmail.com", href: "mailto:chandershekhar12344@gmail.com" },
    { label: "LinkedIn", value: "linkedin.com/in/chandershekhar13", href: "https://linkedin.com/in/chandershekhar13" },
    { label: "GitHub", value: "github.com/chandershekhar13", href: "https://github.com/chandershekhar13" }
  ];

  return (
    <section id="contact" style={{ position: "relative", zIndex: 1, minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "120px 72px" }}>
      
      {/* PERFECT ALIGNMENT GRID: 1200px Max Width */}
      <div style={{ width: "100%", maxWidth: 1200, margin: "0 auto", display: "grid", gap: 64, alignItems: "center" }}>
        
        <style>{`
          @media (min-width: 900px) {
            .contact-grid { grid-template-columns: 1fr 1fr; }
          }
        `}</style>
        
        <div className="contact-grid" style={{ display: "grid", gap: 64 }}>
          
          {/* LEFT: Intentionally empty to catch the falling name from App.jsx physics */}
          <div />

          {/* RIGHT: Pure, Confident Typography */}
          <div style={{ display: "flex", flexDirection: "column", gap: 80 }}>
            
            {/* The Headline */}
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

            {/* The Elegant Link List */}
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
                    
                    /* The Subtle, Confident Hover State */
                    .premium-contact-row:hover .link-val { color: rgba(255,255,255,1); }
                    .premium-contact-row:hover .link-icon { opacity: 1; transform: translate(4px, -4px); color: #10b981; }
                  `}</style>
                  
                  <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
                    <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", width: 80 }}>
                      {link.label}
                    </span>
                    <span className="link-val" style={{ fontSize: "clamp(18px, 2vw, 24px)", fontWeight: 400 }}>
                      {link.value}
                    </span>
                  </div>
                  
                  <svg className="link-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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