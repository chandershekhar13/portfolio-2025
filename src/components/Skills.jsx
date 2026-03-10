import { useState } from "react";
import { SL, useReveal } from "./Shared";
import { SKILLS_GRID } from "../data";

export default function Skills() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [r, s] = useReveal(0);

  return (
    <section id="skills" style={{ position: "relative", zIndex: 1, padding: "100px 72px" }}>
      <div style={{ maxWidth: 1300, margin: "0 auto" }}>
        <SL num="02" label="Core Competencies" />

        {/* The Monolithic List */}
        <div 
          ref={r} 
          style={{ ...s, display: "flex", flexDirection: "column", borderTop: "1px solid rgba(255,255,255,0.1)" }} 
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {SKILLS_GRID.map((group, i) => {
            const isHovered = hoveredIndex === i;
            const isDimmed = hoveredIndex !== null && hoveredIndex !== i;
            
            // Mathematically extract a solid neon color from the group's transparent rgba accent string
            const glowColor = group.accent.replace(/[\d.]+\)$/g, '1)');

            return (
              <div 
                key={group.cat} 
                onMouseEnter={() => setHoveredIndex(i)}
                className={`monolithic-row-${i}`}
                style={{ 
                  display: "grid", 
                  gridTemplateColumns: "1fr", // Mobile fallback
                  gap: 32, 
                  alignItems: "center",
                  padding: "56px 0", 
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                  opacity: isDimmed ? 0.15 : 1, // Severe dimming for intense focus
                  transform: isHovered ? "translateX(16px)" : "translateX(0)",
                  transition: "all 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
                  cursor: "crosshair",
                  position: "relative"
                }}
              >
                {/* Responsive CSS Grid */}
                <style>{`
                  @media (min-width: 900px) {
                    .monolithic-row-${i} { grid-template-columns: 350px 1fr !important; gap: 64px !important; }
                  }
                `}</style>
                
                {/* The Absolute Tracker: Snaps to the left edge on hover */}
                {isHovered && (
                   <div style={{
                     position: "absolute",
                     left: -32,
                     top: "50%",
                     transform: "translateY(-50%)",
                     width: 4,
                     height: "40%",
                     background: glowColor,
                     boxShadow: `0 0 24px ${glowColor}`,
                     borderRadius: 4,
                     animation: "pulse 2s infinite"
                   }} />
                )}

                {/* Left Side: Massive Category Text with Index */}
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.25em", color: isHovered ? glowColor : "rgba(255,255,255,0.2)", transition: "color 0.4s" }}>
                    0{i + 1}
                  </span>
                  <h3 style={{ 
                    fontSize: "clamp(36px, 4.5vw, 64px)", fontFamily: "Georgia,serif", fontStyle: "italic", 
                    fontWeight: 400, color: isHovered ? "#fff" : "rgba(255,255,255,0.6)", 
                    margin: 0, transition: "color 0.4s", letterSpacing: "-0.02em", lineHeight: 1
                  }}>
                    {group.cat}
                  </h3>
                </div>

                {/* Right Side: Flowing Technical Text */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "16px 24px", alignItems: "center" }}>
                  {group.items.map((item, idx) => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: 24 }}>
                      
                      {/* The Skill Name */}
                      <span style={{ 
                        fontSize: "clamp(18px, 2.5vw, 32px)", 
                        color: isHovered ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.4)", 
                        fontWeight: 300, 
                        letterSpacing: "0.02em",
                        transition: "all 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
                        transform: isHovered ? "scale(1.02)" : "scale(1)"
                      }}>
                        {item}
                      </span>

                      {/* The Dynamic Separator Slash */}
                      {idx !== group.items.length - 1 && (
                        <span style={{ 
                          fontSize: 24, 
                          color: isHovered ? glowColor : "rgba(255,255,255,0.1)", 
                          fontWeight: 300, 
                          fontStyle: "italic",
                          transition: "color 0.5s",
                          opacity: isHovered ? 0.8 : 1
                        }}>
                          /
                        </span>
                      )}
                      
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}