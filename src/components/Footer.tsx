import React from "react";
import { ArrowUp, Phone, Mail, MessageSquare } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      style={{
        background: "#020710",
        borderTop: "1px solid rgba(56, 189, 248, 0.16)",
        padding: "45px 0 24px",
        position: "relative",
        zIndex: 3,
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr 1.1fr",
            gap: "30px",
            marginBottom: "36px",
          }}
          className="footer-grid"
        >
          {/* Brand Info with Official Circular Logo */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
              <div
                style={{
                  width: "50px",
                  height: "50px",
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
                    fontSize: "16px",
                    fontWeight: 800,
                    color: "#fff",
                    display: "block",
                  }}
                >
                  HD IA <span style={{ color: "#38bdf8" }}>SOFTWARE</span>
                </span>
                <span
                  style={{
                    fontSize: "9.5px",
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

            <p style={{ fontSize: "12.5px", color: "#94a3b8", lineHeight: 1.55, maxWidth: "320px" }}>
              Transformamos ideas ambiciosas en aplicaciones web, móviles y landing pages de alto impacto con tecnología moderna y diseño cinemático.
            </p>
          </div>

          {/* Column 2: Soluciones */}
          <div>
            <h5 style={{ fontSize: "13px", fontWeight: 800, color: "#fff", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "1px" }}>
              Soluciones
            </h5>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "12.5px", color: "#94a3b8" }}>
              <a href="#servicios" className="footer-link">Landing Pages de Alto ROI</a>
              <a href="#servicios" className="footer-link">Sitios Web Empresariales</a>
              <a href="#servicios" className="footer-link">Apps Nativas &amp; Híbridas</a>
              <a href="#servicios" className="footer-link">Dashboards Administrativos</a>
              <a href="#servicios" className="footer-link">Integración de IA &amp; OCR</a>
            </div>
          </div>

          {/* Column 3: Proyectos & Descargas */}
          <div>
            <h5 style={{ fontSize: "13px", fontWeight: 800, color: "#fff", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "1px" }}>
              Descargas (APK)
            </h5>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "12.5px", color: "#94a3b8" }}>
              <a href="#proyectos" className="footer-link">CLIMUP APK</a>
              <a href="#proyectos" className="footer-link">NauticOS App (Yates VIP)</a>
              <a href="#proyectos" className="footer-link">AutoOS Rent-a-Car</a>
              <a href="#proyectos" className="footer-link">TravelOS VIP SaaS</a>
              <a href="#proyectos" className="footer-link">AI Voucher Parser</a>
            </div>
          </div>

          {/* Column 4: Contacto Oficial */}
          <div>
            <h5 style={{ fontSize: "13px", fontWeight: 800, color: "#fff", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "1px" }}>
              Contacto Directo
            </h5>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "12.5px", color: "#94a3b8" }}>
              <a
                href="https://wa.me/18496584957"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#38bdf8", textDecoration: "none", display: "flex", alignItems: "center", gap: "7px", fontWeight: 600 }}
                className="footer-link"
              >
                <Phone size={13} color="#00d2ff" />
                <span>WhatsApp: +1.849.658.4957</span>
              </a>

              <a
                href="mailto:hdiasolucionesdigitales@gmail.com"
                style={{ color: "#cbd5e1", textDecoration: "none", display: "flex", alignItems: "center", gap: "7px" }}
                className="footer-link"
              >
                <Mail size={13} color="#d4af37" />
                <span>hdiasolucionesdigitales@gmail.com</span>
              </a>

              <span style={{ display: "flex", alignItems: "center", gap: "7px", color: "#64748b" }}>
                <MessageSquare size={13} color="#10b981" />
                <span>Disponibilidad: Inmediata</span>
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            paddingTop: "20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
            fontSize: "11.5px",
            color: "#64748b",
          }}
        >
          <p>© {new Date().getFullYear()} HD IA SOFTWARE - Soluciones Digitales Para Tu Negocio. Todos los derechos reservados.</p>

          <button
            onClick={scrollToTop}
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              color: "#38bdf8",
              padding: "5px 12px",
              borderRadius: "16px",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              cursor: "pointer",
              fontSize: "11.5px",
              fontWeight: 600,
            }}
          >
            <span>Volver arriba</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>

      <style>{`
        .footer-link {
          text-decoration: none;
          color: #94a3b8;
          transition: all 0.2s ease;
        }
        .footer-link:hover {
          color: #00d2ff !important;
          transform: translateX(3px);
        }
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

