import React from "react";
import { ArrowRight, Play, Zap, ShieldCheck, Sparkles } from "lucide-react";
import { FloatingDevices } from "./FloatingDevices";

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const scrollToProjects = () => {
    const el = document.getElementById("proyectos");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* 🔮 STICKY DEVICES & CYBER BACKGROUND LAYER 🔮 */}
      <div
        id="devices-sticky"
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          width: "100%",
          overflow: "hidden",
          zIndex: 0,
          marginTop: "-100vh",
          pointerEvents: "none",
        }}
      >
        {/* Deep dark gradient */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg, #020812 0%, #040e1e 55%, #030a17 100%)",
          }}
        />

        {/* Neon curved SVG lines */}
        <svg
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
          viewBox="0 0 1400 900"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
        >
          <defs>
            <linearGradient id="g1" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#00d2ff" stopOpacity="0" />
              <stop offset="35%" stopColor="#00d2ff" stopOpacity="0.85" />
              <stop offset="70%" stopColor="#38bdf8" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#0070f3" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="g2" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#0070f3" stopOpacity="0" />
              <stop offset="50%" stopColor="#00d2ff" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="g3" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#7c3aed" stopOpacity="0" />
              <stop offset="50%" stopColor="#7c3aed" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#00d2ff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M -100 240 C 300 70, 700 480, 1500 180" stroke="url(#g1)" strokeWidth="3.5" strokeLinecap="round" filter="drop-shadow(0 0 18px rgba(0,210,255,0.75))" opacity="0.8" />
          <path d="M 50 530 C 400 660, 900 200, 1450 400" stroke="url(#g2)" strokeWidth="2" strokeLinecap="round" filter="drop-shadow(0 0 12px rgba(0,112,243,0.65))" opacity="0.55" />
          <path d="M 200 730 C 600 480, 1000 630, 1500 380" stroke="url(#g3)" strokeWidth="1.5" strokeLinecap="round" filter="drop-shadow(0 0 10px rgba(124,58,237,0.5))" opacity="0.4" />
        </svg>

        {/* Ambient glows */}
        <div style={{ position: "absolute", top: "12%", right: "6%", width: "540px", height: "540px", borderRadius: "50%", background: "radial-gradient(circle, rgba(0,210,255,0.2) 0%, rgba(0,112,243,0.1) 45%, transparent 70%)", filter: "blur(80px)" }} />
        <div style={{ position: "absolute", bottom: "8%", left: "5%", width: "340px", height: "340px", borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)", filter: "blur(70px)" }} />

        {/* 💻 DEVICES POSITIONED STRICTLY ON THE RIGHT HALF 💻 */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "60px",
            pointerEvents: "auto",
          }}
        >
          <div
            className="container"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.25fr",
              gap: "40px",
              width: "100%",
              alignItems: "center",
            }}
          >
            {/* Left column empty in background layer so text breathes freely */}
            <div className="hero-left-spacer" />

            {/* Right column: 3D interactive Laptop & Phone */}
            <div
              className="hero-devices-col"
              style={{
                display: "flex",
                justifyContent: "flex-end",
                width: "100%",
              }}
            >
              <FloatingDevices />
            </div>
          </div>
        </div>
      </div>

      {/* 🚀 FOREGROUND HERO CONTENT (Left text aligned, right transparent) 🚀 */}
      <section
        id="inicio"
        style={{
          position: "relative",
          zIndex: 2,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          paddingTop: "90px",
          paddingBottom: "50px",
          pointerEvents: "auto",
        }}
      >
        <div
          className="container"
          style={{
            position: "relative",
            zIndex: 5,
            display: "grid",
            gridTemplateColumns: "1fr 1.25fr",
            gap: "40px",
            alignItems: "center",
            width: "100%",
          }}
        >
          {/* 📝 LEFT: TEXT COLUMN - PUSHED TO LEFT WITH CLEAR BREATHING SPACE 📝 */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "18px",
              maxWidth: "520px",
            }}
          >
            {/* Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(9, 21, 39, 0.85)",
                border: "1px solid rgba(56, 189, 248, 0.35)",
                padding: "6px 15px",
                borderRadius: "999px",
                backdropFilter: "blur(14px)",
                boxShadow: "0 0 16px rgba(0, 210, 255, 0.16)",
              }}
            >
              <div
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: "#00d2ff",
                  boxShadow: "0 0 10px #00d2ff",
                  animation: "badgePulseGlow 2s infinite ease-in-out",
                }}
              />
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 800,
                  letterSpacing: "1.2px",
                  textTransform: "uppercase",
                  color: "#38bdf8",
                  fontFamily: "'Outfit', sans-serif",
                }}
              >
                BUILD LANDING PAGE &amp; APPS
              </span>
            </div>

            {/* Main headline with cursor hover effect */}
            <h1
              className="title-hover-glow"
              style={{
                fontSize: "clamp(2.1rem, 4vw, 3.4rem)",
                fontWeight: 900,
                lineHeight: 1.14,
                color: "#ffffff",
                margin: 0,
              }}
            >
              Tu próxima gran idea merece una{" "}
              <span className="text-gradient">experiencia digital</span>{" "}
              extraordinaria.
            </h1>

            {/* Subtitle with cursor interactive hover */}
            <p
              className="text-hover-neon"
              style={{
                fontSize: "clamp(0.95rem, 1.4vw, 1.1rem)",
                color: "#94a3b8",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              Diseñamos y desarrollamos soluciones digitales que impulsan tu negocio al siguiente nivel: software web, apps móviles y automatización inteligente.
            </p>

            {/* CTAs */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", marginTop: "4px" }}>
              <button
                onClick={onOpenContact}
                className="btn-primary"
                style={{ fontSize: "14.5px", padding: "13px 30px" }}
              >
                <span>Comenzar ahora</span>
                <ArrowRight size={16} />
              </button>
              <button
                onClick={scrollToProjects}
                className="btn-secondary"
                style={{ fontSize: "14.5px", padding: "13px 24px" }}
              >
                <Play size={14} fill="#00d2ff" color="#00d2ff" />
                <span>Ver demo &amp; Proyectos</span>
              </button>
            </div>

            {/* Micro proofs with hover feedback */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "18px",
                fontSize: "12px",
                color: "#64748b",
                flexWrap: "wrap",
                marginTop: "6px",
              }}
            >
              <span className="feature-hover-row" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <Zap size={13} color="#00d2ff" /> 100% Código a Medida
              </span>
              <span className="feature-hover-row" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <ShieldCheck size={13} color="#10b981" /> Alta Conversión
              </span>
              <span className="feature-hover-row" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <Sparkles size={13} color="#d4af37" /> Motion &amp; 3D
              </span>
            </div>
          </div>

          {/* 📱 RIGHT: Empty column allowing devices in sticky layer to show clearly without overlapping 📱 */}
          <div className="hero-right-spacer" style={{ height: "460px" }} />
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          #inicio .container {
            grid-template-columns: 1fr !important;
          }
          .hero-devices-col {
            justify-content: center !important;
          }
          .hero-left-spacer {
            display: none !important;
          }
          .hero-right-spacer {
            height: 380px !important;
          }
        }
      `}</style>
    </>
  );
};
