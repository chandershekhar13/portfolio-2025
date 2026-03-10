import { useEffect, useRef, useState, useCallback } from "react";
import { Atmosphere, Glass } from "./components/Shared";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Training from "./components/Training";
import Achievements from "./components/Achievements";
import Education from "./components/Education";
import Contact from "./components/Contact";
import { NAV_LINKS } from "./data";

const NAVBAR_H = 64;
const SCROLL_DIST = 700;
const NAV_LEFT = 32;
const TARGET_H = 34;
const clamp = (v, a, b) => Math.min(Math.max(v, a), b);
const lerp = (a, b, t) => a + (b - a) * t;
const easeOut = t => 1 - Math.pow(1 - t, 3);

export default function App() {
  const [scrollY, setScrollY] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const [win, setWin] = useState({ w: 0, h: 0 });
  const [sC, setSC] = useState({ w: 0, h: 0 });
  const [sS, setSS] = useState({ w: 0, h: 0 });
  const [ready, setReady] = useState(false);
  
  // NEW: State for the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const chanderRef = useRef(null);
  const shekharRef = useRef(null);
  const [activeSection, setActiveSection] = useState("");

  const measure = useCallback(() => {
    if (!chanderRef.current || !shekharRef.current) return;
    [chanderRef.current, shekharRef.current].forEach(el => { el.style.transform = "none"; el.style.opacity = "0"; });
    const rc = chanderRef.current.getBoundingClientRect();
    const rs = shekharRef.current.getBoundingClientRect();
    setSC({ w: rc.width, h: rc.height }); setSS({ w: rs.width, h: rs.height });
    setWin({ w: window.innerWidth, h: window.innerHeight }); setReady(true);
  }, []);

  useEffect(() => {
    requestAnimationFrame(() => requestAnimationFrame(measure));
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  useEffect(() => {
    const updateMax = () => setMaxScroll(document.body.scrollHeight - window.innerHeight);
    updateMax();
    const obs = new ResizeObserver(updateMax);
    obs.observe(document.body);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const fn = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const ids = ["about", "projects", "skills", "achievements", "education", "contact"];
    const fn = () => {
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && window.scrollY >= el.offsetTop - 120) { setActiveSection(ids[i]); return; }
      }
      setActiveSection("");
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // --- THE PHYSICS ENGINE ---
  const isMobile = win.w < 900;
  const rawHero = clamp(scrollY / SCROLL_DIST, 0, 1);
  const tHero = easeOut(rawHero);

  const CONTACT_DIST = win.h * 0.8;
  const bottomDist = Math.max(0, maxScroll - scrollY);
  const rawContact = maxScroll > 0 ? clamp(1 - (bottomDist / CONTACT_DIST), 0, 1) : 0;
  const tContact = easeOut(rawContact);

  const scaleC = sC.h ? TARGET_H / sC.h : 0.13;
  const scaleS = sS.h ? TARGET_H / sS.h : 0.13;
  const LINE_GAP = 4;
  const totalH = sC.h + LINE_GAP + sS.h;

  const x0_C = win.w / 2 - sC.w / 2, y0_C = win.h / 2 - totalH / 2;
  const x0_S = win.w / 2 - sS.w / 2, y0_S = win.h / 2 - totalH / 2 + sC.h + LINE_GAP;

  const navY = NAVBAR_H / 2 - TARGET_H / 2;
  const mobileNavLeft = 24;
  const x1_C = isMobile ? mobileNavLeft : NAV_LEFT, y1_C = navY;
  const x1_S = (isMobile ? mobileNavLeft : NAV_LEFT) + sC.w * scaleC + 9, y1_S = navY;

  const containerEdge = win.w > 1344 ? (win.w - 1200) / 2 : (isMobile ? 24 : 72); 
  const contactScale = isMobile ? 0.60 : 0.75; 

  const x2_C = containerEdge;
  const y2_C = isMobile ? 120 : win.h / 2 - (totalH * contactScale) / 2;
  const x2_S = containerEdge, y2_S = y2_C + (sC.h * contactScale) + (LINE_GAP * contactScale);

  let cX, cY, cScale, sX, sY, sScale, masterNavOpacity;

  if (tContact > 0) {
    cX = lerp(x1_C, x2_C, tContact); cY = lerp(y1_C, y2_C, tContact); cScale = lerp(scaleC, contactScale, tContact);
    sX = lerp(x1_S, x2_S, tContact); sY = lerp(y1_S, y2_S, tContact); sScale = lerp(scaleS, contactScale, tContact);
    masterNavOpacity = lerp(1, 0, tContact);
  } else {
    cX = lerp(x0_C, x1_C, tHero); cY = lerp(y0_C, y1_C, tHero); cScale = lerp(1, scaleC, tHero);
    sX = lerp(x0_S, x1_S, tHero); sY = lerp(y0_S, y1_S, tHero); sScale = lerp(1, scaleS, tHero);
    masterNavOpacity = tHero;
  }

  const heroUIOpacity = clamp(1 - rawHero / 0.28, 0, 1);
  const FONT = "clamp(32px, 11vw, 120px)"; 

  const wS = (x, y, sc) => ({
    position: "fixed", top: 0, left: 0, zIndex: 100, transformOrigin: "top left",
    transform: ready ? `translate(${x}px,${y}px) scale(${sc})` : "translate(-9999px,-9999px)",
    opacity: ready ? 1 : 0, pointerEvents: "none", userSelect: "none", willChange: "transform",
    lineHeight: 1, whiteSpace: "nowrap"
  });

  // FIXED: The Javascript Scroll Engine. It physically calculates the padding so CSS can't break it.
  const scrollTo = id => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 100; // Leaves 100px of breathing room above the section
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
    setIsMenuOpen(false); // Auto-closes the mobile menu
  };

  return (
    <div style={{ background: "#0a0a12", color: "#EAEAEA", fontFamily: "'Helvetica Neue',Arial,sans-serif", overflowX: "hidden", position: "relative" }}>
      <Atmosphere />

      {/* NAVBAR BACKGROUND */}
      <div style={{
        position: "fixed", top: 0, left: 0, right: 0, height: NAVBAR_H, zIndex: 90, pointerEvents: "none",
        background: `rgba(10,10,18,${masterNavOpacity * 0.85})`,
        backdropFilter: masterNavOpacity > 0.04 ? "blur(24px) saturate(160%)" : "none",
        borderBottom: `1px solid rgba(255,255,255,${masterNavOpacity * 0.08})`,
        opacity: masterNavOpacity 
      }} />

      {/* DESKTOP NAV */}
      {!isMobile && (
        <div style={{ position: "fixed", top: 0, right: 28, height: NAVBAR_H, display: "flex", alignItems: "center", zIndex: 100, opacity: masterNavOpacity, transition: "opacity 0.1s", pointerEvents: masterNavOpacity > 0.5 ? "auto" : "none" }}>
          {NAV_LINKS.map(lnk => {
            const id = lnk.toLowerCase(), active = activeSection === id;
            return (
              <button key={lnk} onClick={() => scrollTo(id)}
                style={{
                  background: "none", border: "none", cursor: "pointer", padding: "0 12px", height: NAVBAR_H,
                  display: "flex", alignItems: "center", fontSize: 10, fontWeight: 700, letterSpacing: "0.2em",
                  textTransform: "uppercase", color: active ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.4)",
                  borderBottom: active ? "1px solid rgba(255,255,255,0.6)" : "1px solid transparent",
                  transition: "all 0.3s"
                }}>
                {lnk}
              </button>
            );
          })}
        </div>
      )}

      {/* MOBILE 3-LINE MENU BUTTON */}
      {isMobile && (
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{ 
            position: "fixed", top: 12, right: 24, zIndex: 110, width: 40, height: 40, 
            background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", 
            borderRadius: "50%", display: "flex", flexDirection: "column", justifyContent: "center", 
            alignItems: "center", gap: 4, cursor: "pointer", opacity: masterNavOpacity > 0.5 || isMenuOpen ? 1 : 0, 
            pointerEvents: masterNavOpacity > 0.5 || isMenuOpen ? "auto" : "none",
            backdropFilter: "blur(12px)", transition: "opacity 0.3s"
          }}
        >
          {/* Animated Hamburger Lines */}
          <span style={{ width: 14, height: 1.5, background: "#fff", transition: "all 0.3s cubic-bezier(0.23, 1, 0.32, 1)", transform: isMenuOpen ? "rotate(45deg) translate(4px, 4px)" : "translateY(0)" }} />
          <span style={{ width: 14, height: 1.5, background: "#fff", transition: "all 0.3s", opacity: isMenuOpen ? 0 : 1 }} />
          <span style={{ width: 14, height: 1.5, background: "#fff", transition: "all 0.3s cubic-bezier(0.23, 1, 0.32, 1)", transform: isMenuOpen ? "rotate(-45deg) translate(4px, -4px)" : "translateY(0)" }} />
        </button>
      )}

      {/* FULL SCREEN MOBILE MENU OVERLAY */}
      {isMobile && (
        <div style={{
          position: "fixed", top: 0, left: 0, width: "100%", height: "100vh", zIndex: 105,
          background: "rgba(10,10,15,0.95)", backdropFilter: "blur(24px)",
          display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 32,
          transition: "all 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
          opacity: isMenuOpen ? 1 : 0, pointerEvents: isMenuOpen ? "auto" : "none",
          transform: isMenuOpen ? "translateY(0)" : "translateY(-20px)"
        }}>
          {NAV_LINKS.map((lnk, i) => {
            const id = lnk.toLowerCase(), active = activeSection === id;
            return (
              <button 
                key={lnk} 
                onClick={() => scrollTo(id)}
                style={{ 
                  background: "none", border: "none", fontSize: 24, fontFamily: "'Helvetica Neue',Arial,sans-serif", 
                  fontWeight: 300, letterSpacing: "0.2em", textTransform: "uppercase", 
                  color: active ? "#fff" : "rgba(255,255,255,0.4)", cursor: "pointer",
                  transform: isMenuOpen ? "translateY(0)" : "translateY(20px)",
                  transition: `all 0.5s cubic-bezier(0.23, 1, 0.32, 1) ${i * 0.05}s`
                }}
              >
                {lnk}
              </button>
            );
          })}
        </div>
      )}

      {/* THE MAGIC STICKY NAME */}
      <div ref={chanderRef} style={wS(cX, cY, cScale)}>
        <span style={{ fontSize: FONT, fontFamily: "Georgia,serif", fontStyle: "italic", fontWeight: 400, color: "rgba(200,200,220,0.75)", letterSpacing: "-0.02em", lineHeight: 1, display: "block" }}>Chander</span>
      </div>
      <div ref={shekharRef} style={wS(sX, sY, sScale)}>
        <span style={{ fontSize: FONT, fontFamily: "'Helvetica Neue',Arial,sans-serif", fontWeight: 900, textTransform: "uppercase", color: "rgba(255,255,255,0.95)", letterSpacing: "-0.03em", lineHeight: 1, display: "block" }}>SHEKHAR</span>
      </div>

      {/* HERO SECTION */}
      <div style={{ height: "100vh", position: "relative", zIndex: 1 }}>
        <div className="hero-explore" style={{ position: "absolute", bottom: 40, right: 40, display: "flex", alignItems: "center", gap: 16, opacity: heroUIOpacity }}>
          <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.25em", color: "rgba(255,255,255,0.4)", textTransform: "uppercase" }}>About Me</span>
          <button onClick={() => scrollTo("about")} style={{ width: 44, height: 44, borderRadius: "50%", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer", color: "#fff", transition: "all 0.3s" }} onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; }} onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.03)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="7" x2="17" y2="17" /><polyline points="17 7 17 17 7 17" /></svg>
          </button>
        </div>
      </div>

      {/* RENDER SECTIONS */}
      <About />
      <Projects />
      <Skills />
      <Training />
      <Achievements />
      <Education />
      <Contact />

      <style>{`
        html, body { background-color: #0a0a12; overscroll-behavior: none; margin: 0; padding: 0; }
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 0; }
        html { scroll-behavior: smooth; }
        ::selection { background: rgba(99,102,241,0.5); color: #fff; }
        button { font-family: inherit; }
        a { color: inherit; }

        @media (max-width: 900px) {
          .hero-explore { left: 24px !important; bottom: 32px !important; }
        }
      `}</style>
    </div>
  );
}