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
        padding: "100px 0 80px",
        zIndex: 3,
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto 55px" }}>
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
            NUESTROS SERVICIOS
          </span>
          <h2
            className="heading-title"
            style={{
              fontSize: "clamp(2rem, 3.8vw, 3rem)",
              fontWeight: 900,
              color: "#ffffff",
              margin: "12px 0 16px",
            }}
          >
            Soluciones digitales{" "}
            <span className="text-gradient">para cada etapa</span> de tu negocio
          </h2>
          <p style={{ fontSize: "15px", color: "#94a3b8", lineHeight: 1.6 }}>
            Desde una idea hasta un producto digital completo. Te acompañamos en todo el proceso con tecnología, diseño y estrategia.
          </p>
        </div>

        {/* 3 Glassmorphism Service Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "28px",
          }}
        >
          {/* Card 1: Landing Pages */}
          <div
            className="glass-panel"
            style={{
              padding: "36px 30px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              borderRadius: "22px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div>
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "16px",
                  background: "rgba(0, 210, 255, 0.12)",
                  border: "1px solid rgba(0, 210, 255, 0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "24px",
                  boxShadow: "0 0 20px rgba(0, 210, 255, 0.2)",
                }}
              >
                <Monitor size={28} color="#00d2ff" />
              </div>

              <h3
                style={{
                  fontSize: "22px",
                  fontWeight: 800,
                  color: "#ffffff",
                  marginBottom: "12px",
                  fontFamily: "'Outfit', sans-serif",
                }}
              >
                Landing Pages
              </h3>
              <p style={{ fontSize: "14px", color: "#94a3b8", lineHeight: 1.6, marginBottom: "24px" }}>
                Páginas de alto impacto diseñadas para captar atención, generar confianza inmediata y convertir visitantes en clientes leales.
              </p>

              {/* Mini Interactive Preview inside card */}
              <div
                style={{
                  background: "rgba(5, 11, 20, 0.8)",
                  borderRadius: "12px",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  padding: "14px",
                  marginBottom: "24px",
                  boxShadow: "inset 0 0 15px rgba(0, 0, 0, 0.6)",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", fontSize: "10px", color: "#64748b" }}>
                  <span>Estructura de Conversión</span>
                  <span style={{ color: "#00d2ff", fontWeight: 700 }}>A/B Ready</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", color: "#e2e8f0" }}>
                    <CheckCircle2 size={13} color="#10b981" /> Titulares persuasivos y llamada clara
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", color: "#e2e8f0" }}>
                    <CheckCircle2 size={13} color="#10b981" /> Carga rápida menor a 0.5 segundos
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", color: "#e2e8f0" }}>
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
                fontSize: "14px",
                cursor: "pointer",
                padding: "8px 0",
              }}
            >
              <span>Explorar solución</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Card 2: Sitios Web */}
          <div
            className="glass-panel"
            style={{
              padding: "36px 30px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              borderRadius: "22px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div>
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "16px",
                  background: "rgba(0, 112, 243, 0.15)",
                  border: "1px solid rgba(56, 189, 248, 0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "24px",
                  boxShadow: "0 0 20px rgba(0, 112, 243, 0.25)",
                }}
              >
                <Globe size={28} color="#38bdf8" />
              </div>

              <h3
                style={{
                  fontSize: "22px",
                  fontWeight: 800,
                  color: "#ffffff",
                  marginBottom: "12px",
                  fontFamily: "'Outfit', sans-serif",
                }}
              >
                Sitios Web
              </h3>
              <p style={{ fontSize: "14px", color: "#94a3b8", lineHeight: 1.6, marginBottom: "24px" }}>
                Experiencias web modernas, rápidas, profesionales y adaptables a todos los dispositivos para posicionar tu empresa como líder del sector.
              </p>

              {/* Mini Preview */}
              <div
                style={{
                  background: "rgba(5, 11, 20, 0.8)",
                  borderRadius: "12px",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  padding: "14px",
                  marginBottom: "24px",
                  boxShadow: "inset 0 0 15px rgba(0, 0, 0, 0.6)",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", fontSize: "10px", color: "#64748b" }}>
                  <span>Arquitectura Empresarial</span>
                  <span style={{ color: "#38bdf8", fontWeight: 700 }}>SEO Pro</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", color: "#e2e8f0" }}>
                    <CheckCircle2 size={13} color="#10b981" /> Catálogo de servicios autogestionable
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", color: "#e2e8f0" }}>
                    <CheckCircle2 size={13} color="#10b981" /> Optimización en motores de búsqueda
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", color: "#e2e8f0" }}>
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
                fontSize: "14px",
                cursor: "pointer",
                padding: "8px 0",
              }}
            >
              <span>Explorar solución</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Card 3: Apps & Sistemas */}
          <div
            className="glass-panel"
            style={{
              padding: "36px 30px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              borderRadius: "22px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div>
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "16px",
                  background: "rgba(168, 85, 247, 0.12)",
                  border: "1px solid rgba(168, 85, 247, 0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "24px",
                  boxShadow: "0 0 20px rgba(168, 85, 247, 0.2)",
                }}
              >
                <Smartphone size={28} color="#c084fc" />
              </div>

              <h3
                style={{
                  fontSize: "22px",
                  fontWeight: 800,
                  color: "#ffffff",
                  marginBottom: "12px",
                  fontFamily: "'Outfit', sans-serif",
                }}
              >
                Apps & Sistemas
              </h3>
              <p style={{ fontSize: "14px", color: "#94a3b8", lineHeight: 1.6, marginBottom: "24px" }}>
                Aplicaciones, paneles administrativos y soluciones personalizadas para automatizar procesos operativos y hacer crecer negocios.
              </p>

              {/* Mini Preview */}
              <div
                style={{
                  background: "rgba(5, 11, 20, 0.8)",
                  borderRadius: "12px",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  padding: "14px",
                  marginBottom: "24px",
                  boxShadow: "inset 0 0 15px rgba(0, 0, 0, 0.6)",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", fontSize: "10px", color: "#64748b" }}>
                  <span>SaaS & Automatización</span>
                  <span style={{ color: "#c084fc", fontWeight: 700 }}>Realtime</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", color: "#e2e8f0" }}>
                    <CheckCircle2 size={13} color="#10b981" /> Dashboards y métricas operativas
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", color: "#e2e8f0" }}>
                    <CheckCircle2 size={13} color="#10b981" /> Firma digital de documentos y PDFs
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", color: "#e2e8f0" }}>
                    <CheckCircle2 size={13} color="#10b981" /> Notificaciones push y WebSockets
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
                fontSize: "14px",
                cursor: "pointer",
                padding: "8px 0",
              }}
            >
              <span>Explorar solución</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

