import React, { useState } from "react";
import { Download, ExternalLink, CheckCircle2, ShieldCheck, Globe } from "lucide-react";
import { PolicyModal, type ProjectPolicyData } from "./PolicyModal";

export interface ProjectItem {
  id: string;
  title: string;
  version: string;
  category: "mobile" | "saas" | "ai" | "webpage";
  categoryLabel: string;
  badgeColor: string;
  description: string;
  features: string[];
  specs: { label: string; value: string }[];
  downloadUrl?: string;
  downloadLabel?: string;
  demoUrl?: string;
  liveUrl?: string;
}

const PROJECTS: ProjectItem[] = [
  {
    id: "climup",
    title: "CLIMUP - Sistema Operativo de Climatizacion",
    version: "Release Oficial",
    category: "mobile",
    categoryLabel: "App Movil Android & Cloud",
    badgeColor: "#0284c7",
    description: "Software especializado para empresas de climatizacion y refrigeracion. Incluye registro de servicios tecnicos, recordatorios automaticos de mantenimiento cada 120/150 dias, firma digital remota y generacion de facturas en PDF.",
    features: [
      "Firma digital del cliente desde la web en tiempo real",
      "Notificaciones automaticas en el telefono 5 dias antes de cada mantenimiento",
      "Generador de informes tecnicos y facturas PDF oficiales",
      "Historial de servicios y equipos por cliente",
    ],
    specs: [
      { label: "Plataforma", value: "Android (APK Nativo)" },
      { label: "Almacenamiento", value: "Cloud DB Seguro" },
      { label: "Arquitectura", value: "React Native + Supabase" },
    ],
    downloadUrl: "#descargar-climup",
    downloadLabel: "DESCARGA APK",
  },
  {
    id: "iloratour",
    title: "iLora Tour & Travels - Agencia de Viajes de Lujo",
    version: "Web Page Live",
    category: "webpage",
    categoryLabel: "Pagina Web Corporativa",
    badgeColor: "#f59e0b",
    description: "Sitio web corporativo de alto impacto para iLora Tour & Travels, agencia de viajes de lujo en Republica Dominicana. Catalogo de paquetes VIP, hoteles todo incluido, cruceros, excursiones y rent car con mas de 12,000 clientes satisfechos y calificacion 4.9 estrellas en Google.",
    features: [
      "Catalogo interactivo de hoteles todo incluido, cruceros premium y excursiones VIP",
      "Sistema de cotizacion y contacto directo integrado con WhatsApp",
      "SEO avanzado posicionado para turismo dominicano: Google 4.9 / 12,000 resenas",
      "Google Analytics 4 + Microsoft Clarity (heatmaps y grabacion de sesiones)",
    ],
    specs: [
      { label: "Tipo", value: "Landing Corporativa" },
      { label: "Valoracion", value: "4.9 / +12,000 clientes" },
      { label: "SEO", value: "Schema.org + GA4 + RD" },
    ],
    liveUrl: "https://www.iloratour.com",
    demoUrl: "https://www.iloratour.com",
  },
  {
    id: "travelos",
    title: "TravelOS VIP - Plataforma SaaS de Viajes",
    version: "Enterprise Cloud",
    category: "saas",
    categoryLabel: "SaaS Multi-Tenant Cloud",
    badgeColor: "#d4af37",
    description: "Solucion integral para agencias de viajes y turismo VIP. Manejo de reservas de vuelos, yates de lujo, hoteles y vehiculos con aislamiento criptografico RLS por agencia y parser inteligente de vouchers.",
    features: [
      "Aislamiento estricto multi-tenant con Row Level Security",
      "Cotizador automatico de itinerarios y comisiones",
      "Modulo de reservas con firma y voucher digital",
      "Centro de control administrativo con auditoria total",
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
    categoryLabel: "Gestion de Flotas & Alquiler",
    badgeColor: "#10b981",
    description: "Sistema operativo para agencias de alquiler y flotas vehiculares. Control de disponibilidad en tiempo real, contratos de alquiler, checklist de inspeccion fotografica y liquidacion de garantias.",
    features: [
      "Inspeccion de vehiculos con fotografias de antes y despues",
      "Contratos de alquiler con firma digital en pantalla",
      "Control de mantenimiento por kilometraje y dias",
      "Catalogo interactivo con selector de flota",
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
    title: "AI Voucher Parser & Auditoria",
    version: "API Cloud",
    category: "ai",
    categoryLabel: "Inteligencia Artificial & OCR",
    badgeColor: "#a855f7",
    description: "Motor inteligente de lectura y validacion automatica de comprobantes de transferencia bancaria. Extrae montos, fechas, numeros de referencia y nombres de cuenta para conciliacion inmediata.",
    features: [
      "Extraccion instantanea de datos bancarios con IA",
      "Deteccion de duplicados y prevencion de fraudes",
      "Integracion por Webhook a cualquier sistema o bot",
      "Procesamiento en menos de 1.2 segundos",
    ],
    specs: [
      { label: "Precision", value: "99.8% Reconocimiento" },
      { label: "Velocidad", value: "1.2s promedio" },
      { label: "Integracion", value: "REST API / Webhook" },
    ],
    downloadUrl: "#descargar-ai-parser",
    downloadLabel: "DESCARGA APK",
    demoUrl: "#demo-ai",
  },
  {
    id: "nauticos",
    title: "NauticOS App - Gestion Nautica & Yates VIP",
    version: "Marine Pro",
    category: "mobile",
    categoryLabel: "App Nautica & Flota VIP",
    badgeColor: "#06b6d4",
    description: "Plataforma integral de administracion y fletamento para agencias de yates, catamaranes y charters de lujo. Control de disponibilidad de embarcaciones, contratos de fletamento con firma digital, asignacion de capitanes y bitacora de navegacion maritima.",
    features: [
      "Catalogo y estado en tiempo real de yates, lanchas y veleros",
      "Contratos maritimos digitales con firma del cliente y capitan",
      "Control de tripulacion, combustible, horas de motor e inspecciones",
      "Liquidacion de depositos de garantia y reservas de charters VIP",
    ],
    specs: [
      { label: "Plataforma", value: "Android (APK) & Web" },
      { label: "Operacion", value: "Charters & Flota Nautica" },
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
  const [filter, setFilter] = useState<"all" | "mobile" | "saas" | "ai" | "webpage">("all");
  const [selectedPolicyProject, setSelectedPolicyProject] = useState<ProjectPolicyData | null>(null);

  const filtered = filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  const handleDownload = (p: ProjectItem) => {
    alert(`Iniciando descarga directa de ${p.title}. El archivo APK oficial comenzara a descargarse en tu dispositivo.`);
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
            Explora directamente los sistemas de software, aplicaciones y sitios web que desarrollamos. Descarga los instalables o consulta las politicas y demostraciones de cada plataforma.
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
              gap: "5px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {[
              { id: "all", label: "Todos los proyectos" },
              { id: "mobile", label: "Apps Moviles (APK)" },
              { id: "saas", label: "SaaS & Plataformas" },
              { id: "webpage", label: "Paginas Web" },
              { id: "ai", label: "IA & OCR" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                style={{
                  background: filter === tab.id ? "linear-gradient(135deg, #00d2ff 0%, #0070f3 100%)" : "transparent",
                  color: filter === tab.id ? "#ffffff" : "#94a3b8",
                  border: "none",
                  padding: "7px 15px",
                  borderRadius: "999px",
                  fontSize: "12px",
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
          {filtered.map((proj) => {
            const isWebPage = proj.category === "webpage";

            return (
              <div
                key={proj.id}
                className="glass-panel"
                style={{
                  padding: "26px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  borderRadius: "18px",
                  border: isWebPage
                    ? "1px solid rgba(245, 158, 11, 0.28)"
                    : "1px solid rgba(56, 189, 248, 0.16)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Web Page ribbon tag */}
                {isWebPage && (
                  <div
                    style={{
                      position: "absolute",
                      top: "14px",
                      right: "-22px",
                      background: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
                      color: "#000",
                      fontSize: "9px",
                      fontWeight: 900,
                      letterSpacing: "1px",
                      padding: "4px 28px",
                      transform: "rotate(35deg)",
                      boxShadow: "0 2px 10px rgba(245,158,11,0.5)",
                      zIndex: 10,
                    }}
                  >
                    WEB
                  </div>
                )}

                <div>
                  {/* Top Badge & Version */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                    <span
                      style={{
                        background: isWebPage ? "rgba(245, 158, 11, 0.12)" : "rgba(0, 210, 255, 0.12)",
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
                        <CheckCircle2 size={14} color={isWebPage ? "#f59e0b" : "#00d2ff"} style={{ flexShrink: 0, marginTop: "2px", transition: "transform 0.2s ease" }} />
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

                {/* Action Buttons */}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "14px" }}>
                  <div style={{ display: "flex", gap: "8px" }}>
                    {/* Web page: "Ver Sitio Web" button (instead of DESCARGA APK) */}
                    {isWebPage && proj.liveUrl ? (
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          flex: 1.3,
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "6px",
                          background: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
                          color: "#000000",
                          fontWeight: 800,
                          fontSize: "12.5px",
                          padding: "10px 14px",
                          borderRadius: "10px",
                          textDecoration: "none",
                          boxShadow: "0 4px 15px rgba(245, 158, 11, 0.35)",
                          transition: "all 0.25s ease",
                        }}
                      >
                        <Globe size={14} />
                        <span>Ver Sitio Web</span>
                      </a>
                    ) : proj.downloadUrl ? (
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
                        <span>DESCARGA APK</span>
                      </button>
                    ) : null}

                    {/* Politicas Button */}
                    <button
                      onClick={() => handleOpenPolicies(proj)}
                      title="Ver Politicas y Terminos Oficiales"
                      style={{
                        flex: 1,
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "6px",
                        background: isWebPage ? "rgba(245, 158, 11, 0.09)" : "rgba(0, 210, 255, 0.09)",
                        border: isWebPage ? "1px solid rgba(245, 158, 11, 0.3)" : "1px solid rgba(0, 210, 255, 0.3)",
                        color: isWebPage ? "#f59e0b" : "#38bdf8",
                        fontWeight: 600,
                        fontSize: "12px",
                        padding: "10px 12px",
                        borderRadius: "10px",
                        cursor: "pointer",
                        transition: "all 0.25s ease",
                      }}
                    >
                      <ShieldCheck size={14} />
                      <span>Politicas</span>
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
                    <span>Solicitar Demo o Proyecto Similar</span>
                    <ExternalLink size={13} color="#38bdf8" />
                  </button>
                </div>
              </div>
            );
          })}
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
