import React from "react";
import { Monitor, Globe, Smartphone, ArrowRight, CheckCircle2 } from "lucide-react";

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section
      id="servicios"
      style={{
        position: "relative",
        padding: "52px 0 44px",
        zIndex: 3,
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto 36px" }}>
          <span
            style={{
              fontSize: "11px",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "1.5px",
              color: "#38bdf8",
              fontFamily: "'Outfit', sans-serif",
            }}
          >
            NUESTROS SERVICIOS
          </span>
          <h2
            className="heading-title title-hover-glow"
            style={{
              fontSize: "clamp(1.9rem, 3.5vw, 2.7rem)",
              fontWeight: 900,
              color: "#ffffff",
              margin: "8px 0 12px",
            }}
          >
            Soluciones digitales{" "}
            <span className="text-gradient">para cada etapa</span> de tu negocio
          </h2>
          <p
            className="text-hover-neon"
            style={{ fontSize: "14px", color: "#94a3b8", lineHeight: 1.55, margin: "0 auto", maxWidth: "660px" }}
          >
            Desde una idea conceptual hasta un producto digital en producción. Te acompañamos en todo el ciclo con tecnología de punta y diseño de conversión.
          </p>
        </div>

        {/* 3 Interactive Service Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))",
            gap: "22px",
          }}
        >
          {/* Card 1: Landing Pages */}
          <div
            className="glass-panel"
            style={{
              padding: "26px 24px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              borderRadius: "18px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div>
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "14px",
                  background: "rgba(0, 210, 255, 0.12)",
                  border: "1px solid rgba(0, 210, 255, 0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "18px",
                  boxShadow: "0 0 20px rgba(0, 210, 255, 0.2)",
                }}
              >
                <Monitor size={25} color="#00d2ff" />
              </div>

              <h3
                className="title-hover-glow"
                style={{
                  fontSize: "20px",
                  fontWeight: 800,
                  color: "#ffffff",
                  marginBottom: "8px",
                  fontFamily: "'Outfit', sans-serif",
                }}
              >
                Landing Pages
              </h3>
              <p
                className="text-hover-neon"
                style={{ fontSize: "13px", color: "#94a3b8", lineHeight: 1.55, marginBottom: "18px" }}
              >
                Páginas de alto impacto diseñadas para captar atención, generar confianza inmediata y convertir visitantes en clientes leales.
              </p>

              {/* Mini Preview inside card */}
              <div
                style={{
                  background: "rgba(5, 11, 20, 0.8)",
                  borderRadius: "12px",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  padding: "12px",
                  marginBottom: "20px",
                  boxShadow: "inset 0 0 15px rgba(0, 0, 0, 0.6)",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", fontSize: "10px", color: "#64748b" }}>
                  <span>Estructura de Conversión</span>
                  <span style={{ color: "#00d2ff", fontWeight: 700 }}>A/B Ready</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <div className="feature-hover-row" style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", color: "#e2e8f0" }}>
                    <CheckCircle2 size={13} color="#10b981" /> Titulares persuasivos y llamada clara
                  </div>
                  <div className="feature-hover-row" style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", color: "#e2e8f0" }}>
                    <CheckCircle2 size={13} color="#10b981" /> Carga rápida menor a 0.5 segundos
                  </div>
                  <div className="feature-hover-row" style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", color: "#e2e8f0" }}>
                    <CheckCircle2 size={13} color="#10b981" /> Integración con WhatsApp y CRM
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => onSelectService("Landing Pages")}
              style={{
                background: "transparent",
                border: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                color: "#38bdf8",
                fontWeight: 700,
                fontSize: "13.5px",
                cursor: "pointer",
                padding: "6px 0",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#00d2ff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#38bdf8")}
            >
              <span>Explorar solución</span>
              <ArrowRight size={15} />
            </button>
          </div>

          {/* Card 2: Sitios Web */}
          <div
            className="glass-panel"
            style={{
              padding: "26px 24px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              borderRadius: "18px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div>
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "14px",
                  background: "rgba(0, 112, 243, 0.15)",
                  border: "1px solid rgba(56, 189, 248, 0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "18px",
                  boxShadow: "0 0 20px rgba(0, 112, 243, 0.25)",
                }}
              >
                <Globe size={25} color="#38bdf8" />
              </div>

              <h3
                className="title-hover-glow"
                style={{
                  fontSize: "20px",
                  fontWeight: 800,
                  color: "#ffffff",
                  marginBottom: "8px",
                  fontFamily: "'Outfit', sans-serif",
                }}
              >
                Sitios Web
              </h3>
              <p
                className="text-hover-neon"
                style={{ fontSize: "13px", color: "#94a3b8", lineHeight: 1.55, marginBottom: "18px" }}
              >
                Experiencias web modernas, rápidas, profesionales y adaptables a todos los dispositivos para posicionar tu empresa como líder del sector.
              </p>

              {/* Mini Preview */}
              <div
                style={{
                  background: "rgba(5, 11, 20, 0.8)",
                  borderRadius: "12px",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  padding: "12px",
                  marginBottom: "20px",
                  boxShadow: "inset 0 0 15px rgba(0, 0, 0, 0.6)",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", fontSize: "10px", color: "#64748b" }}>
                  <span>Arquitectura Empresarial</span>
                  <span style={{ color: "#38bdf8", fontWeight: 700 }}>SEO Pro</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <div className="feature-hover-row" style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", color: "#e2e8f0" }}>
                    <CheckCircle2 size={13} color="#10b981" /> Catálogo de servicios autogestionable
                  </div>
                  <div className="feature-hover-row" style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", color: "#e2e8f0" }}>
                    <CheckCircle2 size={13} color="#10b981" /> Optimización en motores de búsqueda
                  </div>
                  <div className="feature-hover-row" style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", color: "#e2e8f0" }}>
                    <CheckCircle2 size={13} color="#10b981" /> Diseño responsive para móviles y tablets
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => onSelectService("Sitios Web")}
              style={{
                background: "transparent",
                border: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                color: "#38bdf8",
                fontWeight: 700,
                fontSize: "13.5px",
                cursor: "pointer",
                padding: "6px 0",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#00d2ff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#38bdf8")}
            >
              <span>Explorar solución</span>
              <ArrowRight size={15} />
            </button>
          </div>

          {/* Card 3: Apps & Sistemas */}
          <div
            className="glass-panel"
            style={{
              padding: "26px 24px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              borderRadius: "18px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div>
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "14px",
                  background: "rgba(168, 85, 247, 0.12)",
                  border: "1px solid rgba(168, 85, 247, 0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "18px",
                  boxShadow: "0 0 20px rgba(168, 85, 247, 0.2)",
                }}
              >
                <Smartphone size={25} color="#c084fc" />
              </div>

              <h3
                className="title-hover-glow"
                style={{
                  fontSize: "20px",
                  fontWeight: 800,
                  color: "#ffffff",
                  marginBottom: "8px",
                  fontFamily: "'Outfit', sans-serif",
                }}
              >
                Apps &amp; Sistemas
              </h3>
              <p
                className="text-hover-neon"
                style={{ fontSize: "13px", color: "#94a3b8", lineHeight: 1.55, marginBottom: "18px" }}
              >
                Aplicaciones, paneles administrativos y soluciones personalizadas para automatizar procesos operativos y hacer crecer negocios.
              </p>

              {/* Mini Preview */}
              <div
                style={{
                  background: "rgba(5, 11, 20, 0.8)",
                  borderRadius: "12px",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  padding: "12px",
                  marginBottom: "20px",
                  boxShadow: "inset 0 0 15px rgba(0, 0, 0, 0.6)",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", fontSize: "10px", color: "#64748b" }}>
                  <span>Desarrollo Full-Stack</span>
                  <span style={{ color: "#c084fc", fontWeight: 700 }}>Custom SaaS</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <div className="feature-hover-row" style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", color: "#e2e8f0" }}>
                    <CheckCircle2 size={13} color="#10b981" /> Paneles con analítica en tiempo real
                  </div>
                  <div className="feature-hover-row" style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", color: "#e2e8f0" }}>
                    <CheckCircle2 size={13} color="#10b981" /> Autenticación segura y roles de usuario
                  </div>
                  <div className="feature-hover-row" style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", color: "#e2e8f0" }}>
                    <CheckCircle2 size={13} color="#10b981" /> Bases de datos PostgreSQL Cloud
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => onSelectService("Apps & Sistemas")}
              style={{
                background: "transparent",
                border: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                color: "#38bdf8",
                fontWeight: 700,
                fontSize: "13.5px",
                cursor: "pointer",
                padding: "6px 0",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#00d2ff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#38bdf8")}
            >
              <span>Explorar solución</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
