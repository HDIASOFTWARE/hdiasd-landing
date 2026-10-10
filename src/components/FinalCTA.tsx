import React from "react";
import { ArrowRight } from "lucide-react";

interface FinalCTAProps {
  onOpenContact: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenContact }) => {
  return (
    <section
      style={{
        position: "relative",
        padding: "120px 0 100px",
        overflow: "hidden",
        zIndex: 3,
        textAlign: "center",
      }}
    >
      {/* Background Radial Glow */}
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "70vw",
          height: "450px",
          background: "radial-gradient(ellipse at center, rgba(0, 112, 243, 0.25) 0%, rgba(0, 210, 255, 0.12) 40%, transparent 70%)",
          filter: "blur(90px)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 4, maxWidth: "860px" }}>
        <span
          style={{
            fontSize: "12px",
            fontWeight: 800,
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "#38bdf8",
            fontFamily: "'Outfit', sans-serif",
            display: "inline-block",
            marginBottom: "16px",
          }}
        >
          TU IDEA, NUESTRO COMPROMISO
        </span>

        <h2
          className="heading-title"
          style={{
            fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)",
            fontWeight: 900,
            lineHeight: 1.15,
            color: "#ffffff",
            marginBottom: "20px",
          }}
        >
          ¿Listo para llevar tu idea al{" "}
          <span className="text-gradient">siguiente nivel?</span>
        </h2>

        <p
          style={{
            fontSize: "16.5px",
            color: "#94a3b8",
            maxWidth: "600px",
            margin: "0 auto 38px",
            lineHeight: 1.6,
          }}
        >
          Cuéntanos qué quieres construir y diseñemos juntos tu próxima solución digital de alto impacto.
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
          <button
            onClick={onOpenContact}
            className="btn-primary"
            style={{
              padding: "16px 40px",
              fontSize: "16px",
            }}
          >
            <span>Empezar mi proyecto</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

