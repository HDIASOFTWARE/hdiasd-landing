import React, { useState } from "react";
import { Download, ExternalLink, CheckCircle2, ShieldCheck } from "lucide-react";
import { PolicyModal, type ProjectPolicyData } from "./PolicyModal";

export interface ProjectItem {
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
    title: "CLIMUP - Sistema Operativo de Climatización",
    version: "Release Oficial",
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
      { label: "Almacenamiento", value: "Cloud DB Seguro" },
      { label: "Arquitectura", value: "React Native + Supabase" },
    ],
    downloadUrl: "#descargar-climup",
    downloadLabel: "DESCARGA APK",
    demoUrl: "https://climup.app",
  },
  {
    id: "travelos",
    title: "TravelOS VIP - Plataforma SaaS de Viajes",
    version: "Enterprise Cloud",
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
    downloadUrl: "#descargar-travelos",
    downloadLabel: "DESCARGA APK",
    demoUrl: "#demo-travelos",
  },
  {
    id: "autoos",
    title: "AutoOS - Control de Flotas & Rent-a-Car",
    version: "Pro Enterprise",
    category: "mobile",
    categoryLabel: "Gestión de Flotas & Alquiler",
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
    downloadLabel: "DESCARGA APK",
    demoUrl: "#demo-autoos",
  },
  {
    id: "ai-parser",
    title: "AI Voucher Parser & Auditoría",
    version: "API Cloud",
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
    downloadUrl: "#descargar-ai-parser",
    downloadLabel: "DESCARGA APK",
    demoUrl: "#demo-ai",
  },
  {
    id: "nauticos",
    title: "NauticOS App - Gestión Náutica & Yates VIP",
    version: "Marine Pro",
    category: "mobile",
    categoryLabel: "App Náutica & Flota VIP",
    badgeColor: "#06b6d4",
    description: "Plataforma integral de administración y fletamento para agencias de yates, catamaranes y charters de lujo. Control de disponibilidad de embarcaciones, contratos de fletamento con firma digital, asignación de capitanes y bitácora de navegación marítima.",
    features: [
      "Catálogo y estado en tiempo real de yates, lanchas y veleros",
      "Contratos marítimos digitales con firma del cliente y capitán",
      "Control de tripulación, combustible, horas de motor e inspecciones",
      "Liquidación de depósitos de garantía y reservas de charters VIP",
    ],
    specs: [
      { label: "Plataforma", value: "Android (APK) & Web" },
      { label: "Operación", value: "Charters & Flota Náutica" },
      { label: "Motor", value: "PostgreSQL + GPS Tracker" },
    ],
    downloadUrl: "#descargar-nauticos",
    downloadLabel: "DESCARGA APK",
    demoUrl: "#demo-nauticos",
  },
];

interface ProjectShowcaseProps {
  onOpenContact: (projectTitle?: string) => void;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ onOpenContact }) => {
  const [filter, setFilter] = useState<"all" | "mobile" | "saas" | "ai">("all");
  const [selectedPolicyProject, setSelectedPolicyProject] = useState<ProjectPolicyData | null>(null);

  const filtered = filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  const handleDownload = (p: ProjectItem) => {
    alert(`Iniciando descarga directa de ${p.title}. El archivo APK oficial comenzará a descargarse en tu dispositivo.`);
  };

  const handleOpenPolicies = (proj: ProjectItem) => {
    setSelectedPolicyProject({
      id: proj.id,
      title: proj.title,
      categoryLabel: proj.categoryLabel,
      badgeColor: proj.badgeColor,
      version: proj.version,
    });
  };

  return (
    <section
      id="proyectos"
      style={{
        position: "relative",
        padding: "54px 0 50px",
        zIndex: 3,
        background: "linear-gradient(180deg, transparent 0%, rgba(8, 17, 30, 0.45) 50%, transparent 100%)",
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 32px" }}>
          <span
            style={{
              fontSize: "11px",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "1.5px",
              color: "#00d2ff",
              fontFamily: "'Outfit', sans-serif",
            }}
          >
            PORTAFOLIO EN VIVO &amp; DESCARGAS
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
            Proyectos reales que puedes{" "}
            <span className="text-gradient">probar y descargar</span>
          </h2>
          <p
            className="text-hover-neon"
            style={{ fontSize: "14px", color: "#94a3b8", lineHeight: 1.55, margin: "0 auto", maxWidth: "680px" }}
          >
            Explora directamente los sistemas de software y aplicaciones que desarrollamos. Descarga los instalables o consulta las políticas y demostraciones de cada plataforma.
          </p>

          {/* Filter Bar */}
          <div
            style={{
              display: "inline-flex",
              background: "rgba(9, 21, 39, 0.8)",
              border: "1px solid rgba(56, 189, 248, 0.2)",
              borderRadius: "999px",
              padding: "4px",
              marginTop: "20px",
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
                  padding: "7px 16px",
                  borderRadius: "999px",
                  fontSize: "12.5px",
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
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "22px",
          }}
        >
          {filtered.map((proj) => (
            <div
              key={proj.id}
              className="glass-panel"
              style={{
                padding: "26px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                borderRadius: "18px",
                border: "1px solid rgba(56, 189, 248, 0.16)",
              }}
            >
              <div>
                {/* Top Badge & Version */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                  <span
                    style={{
                      background: `rgba(0, 210, 255, 0.12)`,
                      color: proj.badgeColor,
                      border: `1px solid ${proj.badgeColor}40`,
                      fontSize: "10.5px",
                      fontWeight: 700,
                      padding: "4px 9px",
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
                  className="title-hover-glow"
                  style={{
                    fontSize: "19px",
                    fontWeight: 800,
                    color: "#ffffff",
                    marginBottom: "8px",
                    fontFamily: "'Outfit', sans-serif",
                    lineHeight: 1.3,
                  }}
                >
                  {proj.title}
                </h3>

                <p
                  className="text-hover-neon"
                  style={{ fontSize: "13px", color: "#94a3b8", lineHeight: 1.55, marginBottom: "16px" }}
                >
                  {proj.description}
                </p>

                {/* Features List */}
                <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "18px" }}>
                  {proj.features.map((feat, i) => (
                    <div key={i} className="feature-hover-row" style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "12px", color: "#e2e8f0" }}>
                      <CheckCircle2 size={14} color="#00d2ff" style={{ flexShrink: 0, marginTop: "2px", transition: "transform 0.2s ease" }} />
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
                    padding: "8px",
                    marginBottom: "18px",
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

              {/* Action Buttons: DESCARGA APK + Políticas + Solicitar Demo */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "14px" }}>
                <div style={{ display: "flex", gap: "8px" }}>
                  {proj.downloadUrl && (
                    <button
                      onClick={() => handleDownload(proj)}
                      style={{
                        flex: 1.3,
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "6px",
                        background: "linear-gradient(135deg, #00d2ff 0%, #0070f3 100%)",
                        color: "#ffffff",
                        fontWeight: 700,
                        fontSize: "12.5px",
                        padding: "10px 14px",
                        borderRadius: "10px",
                        border: "none",
                        cursor: "pointer",
                        boxShadow: "0 4px 15px rgba(0, 210, 255, 0.3)",
                        transition: "all 0.25s ease",
                      }}
                    >
                      <Download size={14} />
                      {/* Strictly DESCARGA APK without version number */}
                      <span>DESCARGA APK</span>
                    </button>
                  )}

                  {/* Políticas Button */}
                  <button
                    onClick={() => handleOpenPolicies(proj)}
                    title="Ver Políticas y Términos Oficiales"
                    style={{
                      flex: 1,
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "6px",
                      background: "rgba(0, 210, 255, 0.09)",
                      border: "1px solid rgba(0, 210, 255, 0.3)",
                      color: "#38bdf8",
                      fontWeight: 600,
                      fontSize: "12px",
                      padding: "10px 12px",
                      borderRadius: "10px",
                      cursor: "pointer",
                      transition: "all 0.25s ease",
                    }}
                  >
                    <ShieldCheck size={14} />
                    <span>Políticas</span>
                  </button>
                </div>

                {/* Solicitar Demo */}
                <button
                  onClick={() => onOpenContact(proj.title)}
                  style={{
                    width: "100%",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                    background: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    color: "#e2e8f0",
                    fontWeight: 600,
                    fontSize: "12px",
                    padding: "8px 14px",
                    borderRadius: "8px",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  <span>Solicitar Demo o Integración</span>
                  <ExternalLink size={13} color="#38bdf8" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enterprise Policy Modal */}
      <PolicyModal
        isOpen={Boolean(selectedPolicyProject)}
        project={selectedPolicyProject}
        onClose={() => setSelectedPolicyProject(null)}
      />
    </section>
  );
};
