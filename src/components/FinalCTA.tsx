import React from "react";
import { ArrowRight, MessageCircle } from "lucide-react";

interface FinalCTAProps {
  onOpenContact: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenContact }) => {
  return (
    <section
      style={{
        position: "relative",
        padding: "48px 0 44px",
        overflow: "hidden",
        zIndex: 3,
        textAlign: "center",
      }}
    >
      {/* Background Radial Glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "60vw",
          height: "300px",
          background: "radial-gradient(ellipse at center, rgba(0, 112, 243, 0.22) 0%, rgba(0, 210, 255, 0.1) 40%, transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 4, maxWidth: "780px" }}>
        <span
          style={{
            fontSize: "11px",
            fontWeight: 800,
            letterSpacing: "1.8px",
            textTransform: "uppercase",
            color: "#38bdf8",
            fontFamily: "'Outfit', sans-serif",
            display: "inline-block",
            marginBottom: "10px",
          }}
        >
          TU IDEA, NUESTRO COMPROMISO
        </span>

        <h2
          className="heading-title title-hover-glow"
          style={{
            fontSize: "clamp(2rem, 3.8vw, 3rem)",
            fontWeight: 900,
            lineHeight: 1.15,
            color: "#ffffff",
            marginBottom: "12px",
          }}
        >
          ¿Listo para llevar tu idea al{" "}
          <span className="text-gradient">siguiente nivel?</span>
        </h2>

        <p
          className="text-hover-neon"
          style={{
            fontSize: "14.5px",
            color: "#94a3b8",
            maxWidth: "540px",
            margin: "0 auto 26px",
            lineHeight: 1.55,
          }}
        >
          Cuéntanos qué deseas construir y diseñemos juntos tu próxima solución digital de alto rendimiento e impacto comercial.
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
          <button
            onClick={onOpenContact}
            className="btn-primary"
            style={{
              padding: "13px 32px",
              fontSize: "14.5px",
            }}
          >
            <span>Empezar mi proyecto</span>
            <ArrowRight size={16} />
          </button>

          <a
            href="https://wa.me/18496584957?text=¡Hola!%20Deseo%20cotizar%20un%20proyecto%20digital."
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
            style={{
              padding: "13px 26px",
              fontSize: "14.5px",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              textDecoration: "none",
            }}
          >
            <MessageCircle size={16} color="#25d366" />
            <span>WhatsApp Directo</span>
          </a>
        </div>
      </div>
    </section>
  );
};
