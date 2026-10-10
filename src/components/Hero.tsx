import React from "react";
import { ArrowRight, Play, Sparkles, ShieldCheck, Zap } from "lucide-react";
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
    <section
      id="inicio"
      style={{
        position: "relative",
        paddingTop: "140px",
        paddingBottom: "80px",
        overflow: "hidden",
        zIndex: 2,
      }}
    >
      {/* SVG Neon Curved Light Lines behind hero */}
      <svg
        className="neon-curve-svg"
        viewBox="0 0 1400 700"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M -100 250 C 300 100, 700 450, 1500 200"
          stroke="url(#neonCyanGrad)"
          strokeWidth="3.5"
          strokeLinecap="round"
          filter="drop-shadow(0 0 15px rgba(0, 210, 255, 0.8))"
          opacity="0.75"
        />
        <path
          d="M 50 480 C 450 600, 950 180, 1450 380"
          stroke="url(#neonBlueGrad)"
          strokeWidth="2"
          strokeLinecap="round"
          filter="drop-shadow(0 0 12px rgba(0, 112, 243, 0.7))"
          opacity="0.5"
        />
        <defs>
          <linearGradient id="neonCyanGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#00d2ff" stopOpacity="0" />
            <stop offset="30%" stopColor="#00d2ff" stopOpacity="0.8" />
            <stop offset="70%" stopColor="#38bdf8" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0070f3" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="neonBlueGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#0070f3" stopOpacity="0" />
            <stop offset="50%" stopColor="#00d2ff" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <div className="container" style={{ position: "relative", zIndex: 5, textAlign: "center" }}>
        {/* Top Tag Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(9, 21, 39, 0.75)",
            border: "1px solid rgba(56, 189, 248, 0.3)",
            padding: "8px 18px",
            borderRadius: "999px",
            backdropFilter: "blur(14px)",
            marginBottom: "24px",
            boxShadow: "0 0 20px rgba(0, 210, 255, 0.18)",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#00d2ff",
              boxShadow: "0 0 10px #00d2ff",
              animation: "badgePulse 2s infinite ease-in-out",
            }}
          />
          <span
            style={{
              fontSize: "12px",
              fontWeight: 800,
              letterSpacing: "1.2px",
              textTransform: "uppercase",
              color: "#38bdf8",
              fontFamily: "'Outfit', sans-serif",
            }}
          >
            BUILD LANDING PAGE & APPS
          </span>
        </div>

        {/* Main Hero Headline */}
        <h1
          className="heading-title"
          style={{
            fontSize: "clamp(2.3rem, 5.2vw, 4.2rem)",
            fontWeight: 900,
            lineHeight: 1.15,
            maxWidth: "940px",
            margin: "0 auto 20px",
            color: "#ffffff",
          }}
        >
          Tu próxima gran idea merece una{" "}
          <span className="text-gradient">experiencia digital</span>{" "}
          extraordinaria.
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: "clamp(1rem, 1.8vw, 1.25rem)",
            color: "#94a3b8",
            maxWidth: "680px",
            margin: "0 auto 36px",
            lineHeight: 1.6,
          }}
        >
          Diseñamos y desarrollamos soluciones digitales que impulsan tu negocio al siguiente nivel.
        </p>

        {/* Two CTAs */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
            flexWrap: "wrap",
            marginBottom: "20px",
          }}
        >
          <button
            onClick={onOpenContact}
            className="btn-primary"
            style={{
              fontSize: "15px",
              padding: "16px 36px",
            }}
          >
            <span>Hablemos de tu proyecto</span>
            <ArrowRight size={17} />
          </button>

          <button
            onClick={scrollToProjects}
            className="btn-secondary"
            style={{
              fontSize: "15px",
              padding: "16px 30px",
            }}
          >
            <Play size={16} fill="#00d2ff" color="#00d2ff" />
            <span>Ver demo & Proyectos</span>
          </button>
        </div>

        {/* Quick Micro-Proofs */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "24px",
            fontSize: "12px",
            color: "#64748b",
            marginTop: "16px",
            flexWrap: "wrap",
          }}
        >
          <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <Zap size={13} color="#00d2ff" /> 100% Código a Medida
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <ShieldCheck size={13} color="#10b981" /> Alta Conversión & Seguridad
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <Sparkles size={13} color="#d4af37" /> Motion & Diseño 3D
          </span>
        </div>

        {/* Floating Devices 3D Stage */}
        <FloatingDevices />
      </div>
    </section>
  );
};
