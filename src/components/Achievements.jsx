import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Glass, SL, useReveal } from "./Shared";
import { Box, Coffee, Code2, Database, Terminal, Atom, Award, Maximize2, X, Trophy } from "lucide-react";

// Make sure your image imports are correct based on your setup
import sqlCert from "../assets/certificates/sql.jpg";
import dsaCert from "../assets/certificates/dsa.jpg";
import nptelCert from "../assets/certificates/nptel.jpg";

// HackerRank Data
const HR_BADGES = [
  { name: "Problem Solving", stars: 4, Icon: Box, bg: "#c6d3d6" },
  { name: "Java", stars: 4, Icon: Coffee, bg: "#c6d3d6" },
  { name: "Python", stars: 4, Icon: Code2, bg: "#c6d3d6" },
  { name: "Sql", stars: 1, Icon: Database, bg: "#ffa494" },
  { name: "C language", stars: 4, Icon: Terminal, bg: "#c6d3d6" },
  { name: "React", stars: 5, Icon: Atom, bg: "#ffd24d" }
];

// Certificate Data 
const CERTIFICATE_DATA = [
  { 
    name: "SQL (Intermediate)", org: "HackerRank", date: "Oct 2025", 
    accent: "rgba(16,185,129,0.1)", img: sqlCert 
  },
  { 
    name: "Master DSA with Java / C++", org: "W3Schools", date: "Jul 2025", 
    accent: "rgba(99,102,241,0.1)", img: dsaCert 
  },
  { 
    name: "Privacy & Security in Online Social Media", org: "NPTEL", date: "Apr 2025", 
    accent: "rgba(251,191,36,0.1)", img: nptelCert 
  }
];

// Custom SVG HackerRank Hexagon
function HexBadge({ name, stars, Icon, bg }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="hex-badge-container"
      style={{
        position: 'relative', 
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        filter: isHovered ? 'drop-shadow(0px 20px 30px rgba(0,0,0,0.6))' : 'drop-shadow(0px 10px 20px rgba(0,0,0,0.3))',
        transform: isHovered ? 'translateY(-8px)' : 'none',
        transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
        cursor: 'default'
      }}
    >
      <svg viewBox="0 0 100 115" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <polygon points="50,2 98,30 98,85 50,113 2,85 2,30" fill={bg} stroke="rgba(0,0,0,0.05)" strokeWidth="4" />
        <polygon points="50,8 92,33 92,82 50,107 8,82 8,33" fill="none" stroke="rgba(0,0,0,0.06)" strokeWidth="2" />
      </svg>
      
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'clamp(4px, 1vw, 8px)' }}>
        <Icon className="hex-icon" color="#2a323c" strokeWidth={1.5} />
        
        <span style={{ fontSize: 'clamp(8px, 2vw, 10px)', fontWeight: 800, color: '#2a323c', textTransform: 'uppercase', letterSpacing: '0.05em', textAlign: 'center', maxWidth: '85%', lineHeight: 1.2 }}>
          {name}
        </span>
        
        <div style={{ display: 'flex', gap: 2, marginTop: 2, justifyContent: 'center', width: '100%' }}>
          {Array.from({ length: stars }).map((_, i) => (
            <svg key={i} className="hex-star" viewBox="0 0 24 24" fill="#2a323c">
              <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Achievements() {
  const [r0, s0] = useReveal(0);
  const [r1, s1] = useReveal(0.1);
  const [r2, s2] = useReveal(0.2);
  const [activeCert, setActiveCert] = useState(null);

  // Lock body scroll when the cinematic lightbox is open
  useEffect(() => {
    if (activeCert) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
    return () => document.body.style.overflow = "auto";
  }, [activeCert]);

  return (
    // FIXED: Dynamically boosts the zIndex so it completely overrides the Navbar when a cert is open!
    <section id="achievements" style={{ position: "relative", zIndex: activeCert ? 999999 : 1, padding: "clamp(80px, 10vw, 120px) clamp(24px, 5vw, 72px)" }}>
      
      <style>{`
        /* Mobile: 3 Columns x 2 Rows */
        .badges-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          justify-items: center;
        }
        
        /* Hexagon fluid scaling logic */
        .hex-badge-container { width: clamp(90px, 28vw, 140px); height: clamp(103px, 32vw, 160px); }
        .hex-icon { width: clamp(20px, 6vw, 32px); height: clamp(20px, 6vw, 32px); }
        .hex-star { width: clamp(6px, 1.5vw, 10px); height: clamp(6px, 1.5vw, 10px); }

        /* Desktop: 6 Columns x 1 Row */
        @media (min-width: 900px) {
          .badges-grid {
            grid-template-columns: repeat(6, 1fr);
            gap: 24px;
          }
        }
      `}</style>

      <div style={{ maxWidth: 1300, margin: "0 auto" }}>
        <SL num="04" label="Achievements & Certifications" />
        
        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(48px, 8vw, 80px)" }}>
          
          {/* 1. Crown Jewel: Adobe Hackathon */}
          <div ref={r0} style={s0}>
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: 24 }}>
              Notable Distinction
            </p>
            <Glass r={24} style={{ padding: "clamp(24px, 5vw, 48px) clamp(24px, 5vw, 56px)", background: "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(220, 38, 38, 0.08) 100%)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <div style={{ display: "flex", gap: 32, alignItems: "center", flexWrap: "wrap" }}>
                <div style={{ background: "rgba(220, 38, 38, 0.15)", padding: "20px", borderRadius: "50%", border: "1px solid rgba(220, 38, 38, 0.3)" }}>
                  <Trophy size={40} color="#fca5a5" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 style={{ fontSize: "clamp(24px, 3vw, 40px)", fontFamily: "Georgia,serif", fontStyle: "italic", fontWeight: 400, color: "#fff", lineHeight: 1.2, marginBottom: 12 }}>
                    Adobe Hackathon 2025 Distinction
                  </h3>
                  <p style={{ fontSize: 16, color: "rgba(255,255,255,0.65)", fontWeight: 300, lineHeight: 1.6, maxWidth: 800 }}>
                    Advanced to Round 3 in a high-stakes national algorithmic challenge among <strong style={{ color: "#fff", fontWeight: 600 }}>2.6 Lakh students</strong> nationwide.
                  </p>
                </div>
              </div>
            </Glass>
          </div>

          <div style={{ height: 1, background: "rgba(255,255,255,0.08)", width: "100%" }} />

          {/* 2. HackerRank Badges Showcase */}
          <div ref={r1} style={s1}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16, marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <Award size={24} color="#10b981" />
                <h3 style={{ fontSize: 20, fontWeight: 700, color: "rgba(255,255,255,0.9)", letterSpacing: "0.05em" }}>HackerRank Progress</h3>
              </div>
              <p style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", letterSpacing: "0.05em" }}>Verified algorithmic competency.</p>
            </div>
            
            <div className="badges-grid">
              {HR_BADGES.map((badge, i) => (
                <HexBadge key={i} {...badge} />
              ))}
            </div>
          </div>

          <div style={{ height: 1, background: "rgba(255,255,255,0.08)", width: "100%" }} />

          {/* 3. Interactive Certificates Grid */}
          <div ref={r2} style={s2}>
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: 24 }}>
              Verified Certificates (Click to view)
            </p>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 16 }}>
              {CERTIFICATE_DATA.map((c, i) => (
                <Glass key={i} r={20} hover style={{ padding: "32px", cursor: "zoom-in", background: `linear-gradient(135deg,rgba(255,255,255,0.04) 0%,${c.accent} 100%)`, display: "flex", flexDirection: "column", justifyContent: "space-between" }} 
                  onClick={() => setActiveCert(c.img)}
                >
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: 16 }}>
                      <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>{c.org}</p>
                      <Maximize2 size={16} color="rgba(255,255,255,0.3)" />
                    </div>
                    <h4 style={{ fontSize: 18, fontWeight: 500, color: "rgba(255,255,255,0.9)", lineHeight: 1.4, marginBottom: 24 }}>{c.name}</h4>
                  </div>
                  <p style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 16 }}>{c.date}</p>
                </Glass>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Cinematic Lightbox Modal */}
      <AnimatePresence>
        {activeCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setActiveCert(null)}
            style={{
              position: "fixed", inset: 0, zIndex: 999999,
              // FIXED: Swapped to a pure, solid dark background so absolutely nothing bleeds through
              background: "#050508", 
              display: "flex", justifyContent: "center", alignItems: "center",
              cursor: "zoom-out"
            }}
          >
            <button 
              onClick={() => setActiveCert(null)}
              style={{ position: "absolute", top: 40, right: 40, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "50%", width: 64, height: 64, display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer", color: "#fff", transition: "background 0.3s" }}
              onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}
              onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.05)"}
            >
               <X size={28} />
            </button>

            <motion.img
              src={activeCert}
              alt="Certificate Viewer"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: "85vw", maxHeight: "85vh",
                borderRadius: 16, border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "0 40px 100px rgba(0,0,0,0.8)",
                cursor: "default"
              }}
              onError={(e) => {
                e.target.style.display = "none";
                e.target.insertAdjacentHTML('afterend', '<div style="color: white; font-family: sans-serif; text-align: center; padding: 40px; background: rgba(255,255,255,0.05); border-radius: 16px;"><h2>Image Not Found</h2><p style="color: rgba(255,255,255,0.5);">Please ensure your paths are correct.</p></div>');
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}