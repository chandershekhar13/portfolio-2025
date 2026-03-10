import { useEffect, useRef, useState, forwardRef } from "react";

export function useReveal(delay = 0) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current; 
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.06 });
    obs.observe(el); 
    return () => obs.disconnect();
  }, []);
  return [ref, {
    opacity: vis ? 1 : 0, 
    transform: vis ? "translateY(0)" : "translateY(44px)",
    transition: `opacity 0.9s cubic-bezier(0.23,1,0.32,1) ${delay}s, transform 0.9s cubic-bezier(0.23,1,0.32,1) ${delay}s`
  }];
}

// Only ONE Glass component, and it uses forwardRef!
// Notice we added onClick to the props list here:
export const Glass = forwardRef(({ children, style = {}, r = 28, hover = false, onClick }, ref) => {
  const [hov, setHov] = useState(false);
  return (
    <div
      ref={ref}
      onClick={onClick} /* <--- AND WE ADD IT HERE! This makes the box clickable. */
      onMouseEnter={() => hover && setHov(true)}
      onMouseLeave={() => hover && setHov(false)}
      style={{
        borderRadius: r,
        background: hov ? "rgba(255,255,255,0.10)" : "rgba(255,255,255,0.06)",
        backdropFilter: "blur(24px) saturate(180%)",
        WebkitBackdropFilter: "blur(24px) saturate(180%)",
        border: `1px solid rgba(255,255,255,${hov ? 0.22 : 0.10})`,
        boxShadow: hov ? "0 24px 64px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.15)" : "0 8px 32px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.09)",
        transition: "all 0.4s cubic-bezier(0.23,1,0.32,1)",
        ...style
      }}
    >
      {children}
    </div>
  );
});

export function SL({ num, label }) {
  const [r, s] = useReveal(0);
  return (
    <div ref={r} style={{ ...s, display: "flex", flexDirection: "column", gap: 12, marginBottom: 64 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <span style={{ fontSize: 11, fontWeight: 800, color: "#10b981", letterSpacing: "0.2em" }}>{num}</span>
        <span style={{ height: 1, width: 40, background: "rgba(16,185,129,0.4)" }} />
      </div>
      <span style={{ fontSize: "clamp(24px, 2.5vw, 32px)", fontFamily: "Georgia,serif", fontStyle: "italic", color: "rgba(255,255,255,0.9)", letterSpacing: "0.02em" }}>
        {label}
      </span>
    </div>
  );
}

export function Atmosphere() {
  return (
    <>
      <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      <div style={{ position: "fixed", top: "-30vh", left: "-20vw", width: "80vw", height: "80vh", background: "radial-gradient(ellipse,rgba(99,102,241,0.18) 0%,transparent 65%)", zIndex: 0, pointerEvents: "none", filter: "blur(0px)" }} />
      <div style={{ position: "fixed", top: "20vh", right: "-15vw", width: "55vw", height: "70vh", background: "radial-gradient(ellipse,rgba(16,185,129,0.11) 0%,transparent 65%)", zIndex: 0, pointerEvents: "none" }} />
      <div style={{ position: "fixed", bottom: "-20vh", left: "5vw", width: "65vw", height: "60vh", background: "radial-gradient(ellipse,rgba(251,191,36,0.09) 0%,transparent 65%)", zIndex: 0, pointerEvents: "none" }} />
      <div style={{ position: "fixed", bottom: "5vh", right: "-5vw", width: "40vw", height: "40vh", background: "radial-gradient(ellipse,rgba(244,114,182,0.08) 0%,transparent 65%)", zIndex: 0, pointerEvents: "none" }} />
      <div style={{
        position: "fixed", inset: 0, pointerEvents: "none", zIndex: 201, opacity: 0.08, mixBlendMode: "screen",
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        backgroundSize: "150px 150px"
      }}/>
    </>
  );
}