import React from "react";
import { ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      style={{
        background: "#03070e",
        borderTop: "1px solid rgba(56, 189, 248, 0.15)",
        padding: "70px 0 35px",
        position: "relative",
        zIndex: 3,
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
            gap: "40px",
            marginBottom: "50px",
          }}
          className="footer-grid"
        >
          {/* Brand Info with Official Circular Logo */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "16px" }}>
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  boxShadow: "0 0 15px rgba(212, 175, 55, 0.3)",
                  flexShrink: 0,
                }}
              >
                <img
                  src="/assets/hd-ia-logo.png"
                  alt="HD IA SOFTWARE"
                  style={{ width: "100%", height: "100%", objectFit: "contain" }}
                />
              </div>
              <div>
                <span
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "17px",
                    fontWeight: 800,
                    color: "#fff",
                    display: "block",
                  }}
                >
                  HD IA <span style={{ color: "#38bdf8" }}>SOFTWARE</span>
                </span>
                <span
                  style={{
                    fontSize: "10px",
                    color: "#d4af37",
                    fontWeight: 700,
                    letterSpacing: "0.8px",
                    textTransform: "uppercase",
                  }}
                >
                  Soluciones Digitales Para Tu Negocio
                </span>
              </div>
            </div>

            <p style={{ fontSize: "13px", color: "#94a3b8", lineHeight: 1.6, maxWidth: "340px" }}>
              Transformamos ideas ambiciosas en aplicaciones web, móviles y landing pages de alto impacto con tecnología moderna y diseño cinemático.
            </p>
          </div>

          {/* Column 2: Soluciones */}
          <div>
            <h5 style={{ fontSize: "14px", fontWeight: 800, color: "#fff", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "1px" }}>
              Soluciones
            </h5>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "13px", color: "#94a3b8" }}>
              <a href="#servicios" style={{ color: "#94a3b8", textDecoration: "none" }}>Landing Pages de Alto ROI</a>
              <a href="#servicios" style={{ color: "#94a3b8", textDecoration: "none" }}>Sitios Web Empresariales</a>
              <a href="#servicios" style={{ color: "#94a3b8", textDecoration: "none" }}>Apps Nativas & Híbridas</a>
              <a href="#servicios" style={{ color: "#94a3b8", textDecoration: "none" }}>Dashboards Administrativos</a>
              <a href="#servicios" style={{ color: "#94a3b8", textDecoration: "none" }}>Integración de IA & Bots</a>
            </div>
          </div>

          {/* Column 3: Proyectos */}
          <div>
            <h5 style={{ fontSize: "14px", fontWeight: 800, color: "#fff", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "1px" }}>
              Descargas
            </h5>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "13px", color: "#94a3b8" }}>
              <a href="#proyectos" style={{ color: "#00d2ff", textDecoration: "none", fontWeight: 600 }}>CLIMUP APK v1.0.12</a>
              <a href="#proyectos" style={{ color: "#94a3b8", textDecoration: "none" }}>TravelOS VIP SaaS</a>
              <a href="#proyectos" style={{ color: "#94a3b8", textDecoration: "none" }}>AutoOS Rent-a-Car</a>
              <a href="#proyectos" style={{ color: "#94a3b8", textDecoration: "none" }}>AI Voucher Parser</a>
            </div>
          </div>

          {/* Column 4: Contacto */}
          <div>
            <h5 style={{ fontSize: "14px", fontWeight: 800, color: "#fff", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "1px" }}>
              Contacto Directo
            </h5>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "13px", color: "#94a3b8" }}>
              <span>WhatsApp: +1 (829) 670-8000</span>
              <span>Email: contacto@hdiasoftware.com</span>
              <span>Disponibilidad: Proyectos Nuevos</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            paddingTop: "24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "14px",
            fontSize: "12px",
            color: "#64748b",
          }}
        >
          <p>© {new Date().getFullYear()} HD IA SOFTWARE — Soluciones Digitales Para Tu Negocio. Todos los derechos reservados.</p>

          <button
            onClick={scrollToTop}
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              color: "#38bdf8",
              padding: "6px 14px",
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              cursor: "pointer",
              fontSize: "12px",
              fontWeight: 600,
            }}
          >
            <span>Volver arriba</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
};

