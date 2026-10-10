import React from "react";
import { Compass, Code2, Sparkles, Headphones, ArrowRight } from "lucide-react";

interface ValuePropsSectionProps {
  onOpenContact: () => void;
}

export const ValueProps: React.FC<ValuePropsSectionProps> = ({ onOpenContact }) => {
  const pillars = [
    {
      icon: Compass,
      color: "#00d2ff",
      title: "Diseño estratégico",
      desc: "Estructura visual, psicología del color y microinteracciones orientadas a maximizar conversiones y retención.",
    },
    {
      icon: Code2,
      color: "#38bdf8",
      title: "Desarrollo a medida",
      desc: "Código limpio y moderno sin plantillas lentas ni dependencias innecesarias, preparado para escalar.",
    },
    {
      icon: Sparkles,
      color: "#d4af37",
      title: "Experiencia de usuario",
      desc: "Interfaces ultra-rápidas y fluidas que transmiten autoridad y generan confianza inmediata en el cliente.",
    },
    {
      icon: Headphones,
      color: "#10b981",
      title: "Soporte y evolución",
      desc: "Acompañamiento técnico continuo, monitoreo de disponibilidad y mejoras periódicas de tus aplicaciones.",
    },
  ];

  return (
    <section
      id="nosotros"
      style={{
        position: "relative",
        padding: "48px 0 44px",
        zIndex: 3,
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.25fr",
            gap: "36px",
            alignItems: "center",
          }}
          className="valueprops-grid"
        >
          {/* Left: Text & CTA */}
          <div>
            <span
              style={{
                fontSize: "11px",
                fontWeight: 800,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                color: "#00d2ff",
                fontFamily: "'Outfit', sans-serif",
                display: "block",
                marginBottom: "8px",
              }}
            >
              ¿POR QUÉ ELEGIRNOS?
            </span>
            <h2
              className="heading-title title-hover-glow"
              style={{
                fontSize: "clamp(1.9rem, 3.4vw, 2.6rem)",
                fontWeight: 900,
                color: "#ffffff",
                lineHeight: 1.15,
                marginBottom: "14px",
              }}
            >
              Tecnología que impulsa el{" "}
              <span className="text-gradient">crecimiento real</span> de tu marca
            </h2>
            <p
              className="text-hover-neon"
              style={{
                fontSize: "13.5px",
                color: "#94a3b8",
                lineHeight: 1.55,
                marginBottom: "22px",
              }}
            >
              No creamos simples páginas web. Desarrollamos herramientas digitales completas y funcionales que resuelven problemas de negocio, automatizan tareas repetitivas y convierten usuarios en clientes recurrentes.
            </p>

            <button
              onClick={onOpenContact}
              className="btn-primary"
              style={{ padding: "12px 26px", fontSize: "14px" }}
            >
              <span>Hablemos de tu idea</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Right: 4 Interactive Pillars */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "14px",
            }}
            className="pillars-grid"
          >
            {pillars.map((pil, idx) => {
              const Icon = pil.icon;
              return (
                <div
                  key={idx}
                  className="glass-panel"
                  style={{
                    padding: "20px 18px",
                    borderRadius: "16px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    border: "1px solid rgba(56, 189, 248, 0.14)",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      background: `${pil.color}18`,
                      border: `1px solid ${pil.color}40`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: pil.color,
                      marginBottom: "4px",
                      transition: "transform 0.25s ease",
                    }}
                  >
                    <Icon size={20} />
                  </div>
                  <h4
                    className="title-hover-glow"
                    style={{
                      fontSize: "15.5px",
                      fontWeight: 800,
                      color: "#ffffff",
                      fontFamily: "'Outfit', sans-serif",
                      margin: 0,
                    }}
                  >
                    {pil.title}
                  </h4>
                  <p
                    className="text-hover-neon"
                    style={{
                      fontSize: "12px",
                      color: "#94a3b8",
                      lineHeight: 1.5,
                      margin: 0,
                    }}
                  >
                    {pil.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .valueprops-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 550px) {
          .pillars-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
