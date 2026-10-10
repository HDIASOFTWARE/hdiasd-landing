import React, { useState } from "react";
import { Download, ExternalLink, CheckCircle2 } from "lucide-react";

interface ProjectItem {
  id: string;
  title: string;
  version: string;
  category: "mobile" | "saas" | "ai";
  categoryLabel: string;
  badgeColor: string;
  description: string;
  features: string[];
  specs: { label: string; value: string }[];
  downloadUrl?: string;
  downloadLabel?: string;
  demoUrl?: string;
}

const PROJECTS: ProjectItem[] = [
  {
    id: "climup",
    title: "CLIMUP — Sistema Operativo de Climatización",
    version: "v1.0.12 Release",
    category: "mobile",
    categoryLabel: "App Móvil Android & Cloud",
    badgeColor: "#0284c7",
    description: "Software especializado para empresas de climatización y refrigeración. Incluye registro de servicios técnicos, recordatorios automáticos de mantenimiento cada 120/150 días, firma digital remota y generación de facturas en PDF.",
    features: [
      "Firma digital del cliente desde la web en tiempo real",
      "Notificaciones automáticas en el teléfono 5 días antes de cada mantenimiento",
      "Generador de informes técnicos y facturas PDF oficiales",
      "Historial de servicios y equipos por cliente",
    ],
    specs: [
      { label: "Plataforma", value: "Android (APK Nativo)" },
      { label: "Tamaño", value: "115.5 MB" },
      { label: "Arquitectura", value: "React Native + Supabase" },
    ],
    downloadUrl: "#descargar-climup",
    downloadLabel: "Descargar APK v1.0.12",
    demoUrl: "https://climup.app",
  },
  {
    id: "travelos",
    title: "TravelOS VIP — Plataforma SaaS de Viajes",
    version: "v3.4 Enterprise",
    category: "saas",
    categoryLabel: "SaaS Multi-Tenant Cloud",
    badgeColor: "#d4af37",
    description: "Solución integral para agencias de viajes y turismo VIP. Manejo de reservas de vuelos, yates de lujo, hoteles y vehículos con aislamiento criptográfico RLS por agencia y parser inteligente de vouchers.",
    features: [
      "Aislamiento estricto multi-tenant con Row Level Security",
      "Cotizador automático de itinerarios y comisiones",
      "Módulo de reservas con firma y voucher digital",
      "Centro de control administrativo con auditoría total",
    ],
    specs: [
      { label: "Tipo", value: "Web App SaaS" },
      { label: "Stack", value: "Next.js + TypeScript + PostgreSQL" },
      { label: "Disponibilidad", value: "99.98% Uptime" },
    ],
    demoUrl: "#demo-travelos",
  },
  {
    id: "autoos",
    title: "AutoOS — Control de Flotas & Rent-a-Car",
    version: "v2.1 Pro",
    category: "mobile",
    categoryLabel: "Gestión de Vehículos",
    badgeColor: "#10b981",
    description: "Sistema operativo para agencias de alquiler y flotas vehiculares. Control de disponibilidad en tiempo real, contratos de alquiler, checklist de inspección fotográfica y liquidación de garantías.",
    features: [
      "Inspección de vehículos con fotografías de antes y después",
      "Contratos de alquiler con firma digital en pantalla",
      "Control de mantenimiento por kilometraje y días",
      "Catálogo interactivo con selector de flota",
    ],
    specs: [
      { label: "Plataforma", value: "Web & Android" },
      { label: "Base de Datos", value: "PostgreSQL Cloud" },
      { label: "Tema", value: "OLED Dark Mode" },
    ],
    downloadUrl: "#descargar-autoos",
    downloadLabel: "Descargar APK",
    demoUrl: "#demo-autoos",
  },
  {
    id: "ai-parser",
    title: "AI Voucher Parser & Auditoria",
    version: "v1.5 API",
    category: "ai",
    categoryLabel: "Inteligencia Artificial & OCR",
    badgeColor: "#a855f7",
    description: "Motor inteligente de lectura y validación automática de comprobantes de transferencia bancaria. Extrae montos, fechas, números de referencia y nombres de cuenta para conciliación inmediata.",
    features: [
      "Extracción instantánea de datos bancarios con IA",
      "Detección de duplicados y prevención de fraudes",
      "Integración por Webhook a cualquier sistema o bot",
      "Procesamiento en menos de 1.2 segundos",
    ],
    specs: [
      { label: "Precisión", value: "99.8% Reconocimiento" },
      { label: "Velocidad", value: "1.2s promedio" },
      { label: "Integración", value: "REST API / Webhook" },
    ],
    demoUrl: "#demo-ai",
  },
];

interface ProjectShowcaseProps {
  onOpenContact: (projectTitle?: string) => void;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ onOpenContact }) => {
  const [filter, setFilter] = useState<"all" | "mobile" | "saas" | "ai">("all");

  const filtered = filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  const handleDownload = (p: ProjectItem) => {
    alert(`Iniciando descarga directa de ${p.title} (${p.version}). El archivo comenzará a descargarse en tu dispositivo.`);
  };

  return (
    <section
      id="proyectos"
      style={{
        position: "relative",
        padding: "90px 0 100px",
        zIndex: 3,
        background: "linear-gradient(180deg, transparent 0%, rgba(8, 17, 30, 0.45) 50%, transparent 100%)",
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 45px" }}>
          <span
            style={{
              fontSize: "12px",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "1.5px",
              color: "#00d2ff",
              fontFamily: "'Outfit', sans-serif",
            }}
          >
            PORTAFOLIO EN VIVO & DESCARGAS
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
            Proyectos reales que puedes{" "}
            <span className="text-gradient">probar y descargar</span>
          </h2>
          <p style={{ fontSize: "15px", color: "#94a3b8", lineHeight: 1.6 }}>
            Aquí puedes explorar directamente los sistemas de software y aplicaciones que hemos creado. Descarga los instalables de prueba o solicita una demostración personalizada.
          </p>

          {/* Filter Bar */}
          <div
            style={{
              display: "inline-flex",
              background: "rgba(9, 21, 39, 0.8)",
              border: "1px solid rgba(56, 189, 248, 0.2)",
              borderRadius: "999px",
              padding: "5px",
              marginTop: "24px",
              gap: "6px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {[
              { id: "all", label: "Todos los proyectos" },
              { id: "mobile", label: "Apps Móviles (APK)" },
              { id: "saas", label: "SaaS & Plataformas Web" },
              { id: "ai", label: "IA & Automatización" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                style={{
                  background: filter === tab.id ? "linear-gradient(135deg, #00d2ff 0%, #0070f3 100%)" : "transparent",
                  color: filter === tab.id ? "#ffffff" : "#94a3b8",
                  border: "none",
                  padding: "8px 18px",
                  borderRadius: "999px",
                  fontSize: "13px",
                  fontWeight: filter === tab.id ? 700 : 500,
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
            gap: "28px",
          }}
        >
          {filtered.map((proj) => (
            <div
              key={proj.id}
              className="glass-panel"
              style={{
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                borderRadius: "20px",
                border: "1px solid rgba(56, 189, 248, 0.15)",
              }}
            >
              <div>
                {/* Top Badge & Version */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                  <span
                    style={{
                      background: `rgba(0, 210, 255, 0.12)`,
                      color: proj.badgeColor,
                      border: `1px solid ${proj.badgeColor}40`,
                      fontSize: "11px",
                      fontWeight: 700,
                      padding: "4px 10px",
                      borderRadius: "6px",
                      textTransform: "uppercase",
                    }}
                  >
                    {proj.categoryLabel}
                  </span>
                  <span style={{ fontSize: "11px", color: "#64748b", fontWeight: 700 }}>
                    {proj.version}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: "21px",
                    fontWeight: 800,
                    color: "#ffffff",
                    marginBottom: "10px",
                    fontFamily: "'Outfit', sans-serif",
                  }}
                >
                  {proj.title}
                </h3>

                <p style={{ fontSize: "13.5px", color: "#94a3b8", lineHeight: 1.6, marginBottom: "20px" }}>
                  {proj.description}
                </p>

                {/* Features List */}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "22px" }}>
                  {proj.features.map((feat, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "12.5px", color: "#e2e8f0" }}>
                      <CheckCircle2 size={15} color="#00d2ff" style={{ flexShrink: 0, marginTop: "2px" }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Specs bar */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    gap: "6px",
                    background: "rgba(5, 11, 20, 0.8)",
                    border: "1px solid rgba(255, 255, 255, 0.06)",
                    borderRadius: "10px",
                    padding: "10px",
                    marginBottom: "24px",
                    textAlign: "center",
                  }}
                >
                  {proj.specs.map((sp, idx) => (
                    <div key={idx}>
                      <span style={{ fontSize: "9px", color: "#64748b", display: "block" }}>{sp.label}</span>
                      <span style={{ fontSize: "11px", fontWeight: 700, color: "#cbd5e1" }}>{sp.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "18px" }}>
                {proj.downloadUrl && (
                  <button
                    onClick={() => handleDownload(proj)}
                    style={{
                      flex: 1,
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      background: "linear-gradient(135deg, #00d2ff 0%, #0070f3 100%)",
                      color: "#ffffff",
                      fontWeight: 700,
                      fontSize: "13px",
                      padding: "11px 16px",
                      borderRadius: "10px",
                      border: "none",
                      cursor: "pointer",
                      boxShadow: "0 4px 15px rgba(0, 210, 255, 0.3)",
                    }}
                  >
                    <Download size={15} />
                    <span>{proj.downloadLabel || "Descargar APK"}</span>
                  </button>
                )}

                <button
                  onClick={() => onOpenContact(proj.title)}
                  style={{
                    flex: 1,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    color: "#f8fafc",
                    fontWeight: 600,
                    fontSize: "13px",
                    padding: "11px 16px",
                    borderRadius: "10px",
                    cursor: "pointer",
                  }}
                >
                  <span>Solicitar Demo</span>
                  <ExternalLink size={14} color="#38bdf8" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

