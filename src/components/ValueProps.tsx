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
      desc: "Cada detalle está pensado para convertir. Estructura visual, psicología del color y microinteracciones orientadas a resultados.",
    },
    {
      icon: Code2,
      color: "#38bdf8",
      title: "Desarrollo a medida",
      desc: "Soluciones escalables y seguras para tu crecimiento. Código limpio, sin plantillas lentas ni dependencias innecesarias.",
    },
    {
      icon: Sparkles,
      color: "#d4af37",
      title: "Experiencia de usuario",
      desc: "Interfaces intuitivas y fluidas que generan confianza inmediata y deleite en cada interacción digital.",
    },
    {
      icon: Headphones,
      color: "#10b981",
      title: "Soporte continuo",
      desc: "Estamos contigo en cada etapa del proyecto. Mantenimiento, optimización y evolución constante de tus sistemas.",
    },
  ];

  return (
    <section
      id="nosotros"
      style={{
        position: "relative",
        padding: "90px 0 90px",
        zIndex: 3,
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.25fr",
            gap: "50px",
            alignItems: "center",
          }}
          className="value-grid"
        >
          {/* Left Column: Heading and Context */}
          <div>
            <span
              style={{
                fontSize: "12px",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "1.5px",
                color: "#38bdf8",
                fontFamily: "'Outfit', sans-serif",
              }}
            >
              ¿POR QUÉ ELEGIRNOS?
            </span>

            <h2
              className="heading-title"
              style={{
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                fontWeight: 900,
                color: "#ffffff",
                margin: "12px 0 20px",
                lineHeight: 1.15,
              }}
            >
              Tecnología, diseño y{" "}
              <span className="text-gradient">resultados reales.</span>
            </h2>

            <p style={{ fontSize: "16px", color: "#94a3b8", lineHeight: 1.65, marginBottom: "32px" }}>
              No solo creamos productos digitales, creamos herramientas estratégicas que trabajan para ti y hacen crecer tu negocio todos los días de forma autónoma.
            </p>

            <button
              onClick={onOpenContact}
              className="btn-primary"
              style={{
                padding: "14px 30px",
                fontSize: "14px",
              }}
            >
              <span>Conoce más y cotiza</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Right Column: 4 Strategic Pillars */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "18px",
            }}
            className="pillars-grid"
          >
            {pillars.map((pil, idx) => {
              const IconComp = pil.icon;
              return (
                <div
                  key={idx}
                  className="glass-panel"
                  style={{
                    padding: "26px 22px",
                    borderRadius: "18px",
                    border: "1px solid rgba(255, 255, 255, 0.07)",
                  }}
                >
                  <div
                    style={{
                      width: "46px",
                      height: "46px",
                      borderRadius: "12px",
                      background: `${pil.color}18`,
                      border: `1px solid ${pil.color}40`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "16px",
                    }}
                  >
                    <IconComp size={22} color={pil.color} />
                  </div>

                  <h4
                    style={{
                      fontSize: "17px",
                      fontWeight: 800,
                      color: "#ffffff",
                      marginBottom: "8px",
                      fontFamily: "'Outfit', sans-serif",
                    }}
                  >
                    {pil.title}
                  </h4>

                  <p style={{ fontSize: "12.5px", color: "#94a3b8", lineHeight: 1.55 }}>
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
          .value-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .pillars-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

