import React, { useState, useEffect, useCallback } from "react";
import { Download, ExternalLink, ShieldCheck, Globe, Sparkles, X, CheckCircle2, Star } from "lucide-react";

// Download counters (starting values as requested)
const DOWNLOAD_BASE: Record<string, number> = {
  climup: 172,
  autoos: 137,
  nauticos: 77,
  travelos: 54,
};

function getDownloadCount(id: string): number {
  const stored = localStorage.getItem(`dl_${id}`);
  if (stored !== null) return parseInt(stored, 10);
  return DOWNLOAD_BASE[id] ?? 0;
}

function incrementDownload(id: string): number {
  const current = getDownloadCount(id);
  const next = current + 1;
  localStorage.setItem(`dl_${id}`, String(next));
  return next;
}

function getPolicyUrl(id: string): string {
  const policyPages: Record<string, string> = {
    climup: "https://hdiasd-landing.vercel.app/politicas/climup",
    autoos: "https://hdiasd-landing.vercel.app/politicas/autoos",
    nauticos: "https://hdiasd-landing.vercel.app/politicas/nauticos",
    travelos: "https://hdiasd-landing.vercel.app/politicas/travelos",
    "ai-parser": "https://hdiasd-landing.vercel.app/politicas/ai-parser",
    iloratour: "https://hdiasd-landing.vercel.app/politicas/iloratour",
  };
  return policyPages[id] ?? `https://hdiasd-landing.vercel.app/politicas/${id}`;
}

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
    title: "CLIMUP",
    version: "v1.0.16 Oficial",
    category: "mobile",
    categoryLabel: "App Movil Android & Cloud",
    badgeColor: "#0284c7",
    description: "Software especializado para empresas de climatizacion y refrigeracion. Registro de servicios tecnicos, recordatorios automaticos de mantenimiento, firma digital remota y facturas PDF.",
    features: [
      "Firma digital del cliente desde la web en tiempo real",
      "Notificaciones automaticas 5 dias antes de cada mantenimiento",
      "Generador de informes tecnicos y facturas PDF oficiales",
      "Historial completo de servicios y equipos por cliente",
    ],
    specs: [
      { label: "Plataforma", value: "Android (APK Nativo)" },
      { label: "Almacenamiento", value: "Cloud DB Seguro" },
      { label: "Arquitectura", value: "React Native + Supabase" },
    ],
    downloadUrl: "https://github.com/HDIASOFTWARE/hdiasd-landing/releases/download/v1.0.0/CLIMUP.apk",
    downloadLabel: "DESCARGA APK",
  },
  {
    id: "iloratour",
    title: "iLora Tour & Travels",
    version: "Web Page Live",
    category: "webpage",
    categoryLabel: "Pagina Web Corporativa",
    badgeColor: "#f59e0b",
    description: "Sitio web corporativo de alto impacto para iLora Tour & Travels, agencia de viajes de lujo en Republica Dominicana. Catalogo de paquetes VIP, hoteles todo incluido, cruceros y rent car.",
    features: [
      "Catalogo interactivo de hoteles todo incluido, cruceros premium y excursiones VIP",
      "Sistema de cotizacion y contacto directo integrado con WhatsApp",
      "SEO avanzado: Google 4.9 / 12,000 resenas",
      "Google Analytics 4 + Microsoft Clarity (heatmaps)",
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
    title: "TravelOS VIP",
    version: "Enterprise Cloud",
    category: "saas",
    categoryLabel: "SaaS Multi-Tenant Cloud",
    badgeColor: "#d4af37",
    description: "Solucion integral para agencias de viajes y turismo VIP. Manejo de reservas de vuelos, yates de lujo, hoteles y vehiculos con aislamiento criptografico RLS por agencia.",
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
    downloadUrl: "https://wa.me/18496584957?text=Hola%2C%20deseo%20probar%20la%20demo%20de%20TravelOS%20VIP",
    downloadLabel: "SOLICITAR DEMO",
    demoUrl: "#demo-travelos",
  },
  {
    id: "autoos",
    title: "AutoOS",
    version: "v1.0.69 Enterprise",
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
    downloadUrl: "https://hdiasd-landing.vercel.app/AutoOS.apk",
    downloadLabel: "DESCARGA APK",
    demoUrl: "#demo-autoos",
  },
  {
    id: "ai-parser",
    title: "AI Voucher Parser",
    version: "API Cloud",
    category: "ai",
    categoryLabel: "Inteligencia Artificial & OCR",
    badgeColor: "#a855f7",
    description: "Motor inteligente de lectura y validacion automatica de comprobantes bancarios. Extrae montos, fechas, numeros de referencia y nombres para conciliacion inmediata en menos de 1.2 segundos.",
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
    downloadUrl: "https://wa.me/18496584957?text=Hola%2C%20deseo%20una%20demostracion%20del%20AI%20Voucher%20Parser",
    downloadLabel: "SOLICITAR DEMO",
    demoUrl: "#demo-ai",
  },
  {
    id: "nauticos",
    title: "NauticOS",
    version: "Marine Pro",
    category: "mobile",
    categoryLabel: "App Nautica & Flota VIP",
    badgeColor: "#06b6d4",
    description: "Plataforma integral para agencias de yates, catamaranes y charters de lujo. Control de embarcaciones, contratos maritimos con firma digital, capitanes y bitacora de navegacion.",
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
    downloadUrl: "https://github.com/HDIASOFTWARE/hdiasd-landing/releases/download/v1.0.0/NauticOS.apk",
    downloadLabel: "DESCARGA APK",
    demoUrl: "#demo-nauticos",
  },
];

// Features Bottom-Sheet Modal
interface FeaturesModalProps {
  project: ProjectItem | null;
  downloadCount: number;
  onClose: () => void;
  onDownload: () => void;
  onContact: () => void;
}

const FeaturesModal: React.FC<FeaturesModalProps> = ({ project, downloadCount, onClose, onDownload, onContact }) => {
  if (!project) return null;
  const isWebPage = project.category === "webpage";
  const isAPK = project.category === "mobile";
  const hasCounter = DOWNLOAD_BASE[project.id] !== undefined;

  return (
    <div
      onClick={(e) => e.target === e.currentTarget && onClose()}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 10000,
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        background: "rgba(2, 8, 18, 0.88)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        animation: "fadeInOverlay 0.25s ease",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "580px",
          background: "linear-gradient(180deg, #080f1e 0%, #030812 100%)",
          border: "1px solid rgba(56, 189, 248, 0.22)",
          borderRadius: "24px 24px 0 0",
          boxShadow: "0 -20px 60px rgba(0,112,243,0.3)",
          maxHeight: "88vh",
          display: "flex",
          flexDirection: "column",
          animation: "slideUpModal 0.32s cubic-bezier(0.16, 1, 0.3, 1)",
          overflow: "hidden",
        }}
      >
        {/* Handle */}
        <div style={{ display: "flex", justifyContent: "center", padding: "12px 0 0" }}>
          <div style={{ width: "40px", height: "4px", borderRadius: "4px", background: "rgba(255,255,255,0.15)" }} />
        </div>

        {/* Header */}
        <div style={{ padding: "14px 20px 12px", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "10px" }}>
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "7px", marginBottom: "5px", flexWrap: "wrap" }}>
              <span style={{ fontSize: "9.5px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.8px", color: project.badgeColor, background: `${project.badgeColor}18`, border: `1px solid ${project.badgeColor}40`, padding: "2px 8px", borderRadius: "5px" }}>
                {project.categoryLabel}
              </span>
              <span style={{ fontSize: "10px", color: "#64748b", fontWeight: 600 }}>{project.version}</span>
            </div>
            <h2 style={{ fontSize: "clamp(16px, 4.5vw, 20px)", fontWeight: 900, color: "#fff", margin: 0, lineHeight: 1.2, fontFamily: "'Outfit', sans-serif" }}>
              {project.title}
            </h2>
          </div>
          <button onClick={onClose} style={{ width: "34px", height: "34px", borderRadius: "50%", background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", color: "#94a3b8", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }} aria-label="Cerrar">
            <X size={16} />
          </button>
        </div>

        {/* Body */}
        <div style={{ flex: 1, overflowY: "auto", padding: "16px 20px", display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "13px", color: "#94a3b8", lineHeight: 1.6, margin: 0 }}>{project.description}</p>

          <div>
            <h3 style={{ fontSize: "10.5px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "1.2px", color: "#38bdf8", marginBottom: "10px" }}>
              Caracteristicas Principales
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
              {project.features.map((feat, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "9px", padding: "8px 11px", background: "rgba(0,210,255,0.04)", border: "1px solid rgba(0,210,255,0.1)", borderRadius: "10px", fontSize: "12.5px", color: "#e2e8f0", lineHeight: 1.5 }}>
                  <CheckCircle2 size={14} color={isWebPage ? "#f59e0b" : "#00d2ff"} style={{ flexShrink: 0, marginTop: "2px" }} />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "7px" }}>
            {project.specs.map((sp, i) => (
              <div key={i} style={{ background: "rgba(5,11,20,0.9)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "10px", padding: "9px 6px", textAlign: "center" }}>
                <span style={{ fontSize: "9px", color: "#64748b", display: "block", marginBottom: "3px", textTransform: "uppercase" }}>{sp.label}</span>
                <span style={{ fontSize: "10.5px", fontWeight: 700, color: "#cbd5e1", lineHeight: 1.3, display: "block" }}>{sp.value}</span>
              </div>
            ))}
          </div>

          {hasCounter && (
            <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "9px 14px", background: "rgba(0,210,255,0.07)", border: "1px solid rgba(0,210,255,0.2)", borderRadius: "10px" }}>
              <Download size={14} color="#00d2ff" />
              <span style={{ fontSize: "13px", fontWeight: 700, color: "#38bdf8" }}>{downloadCount.toLocaleString()} Descargas</span>
            </div>
          )}
        </div>

        {/* Footer */}
        <div style={{ padding: "12px 20px 28px", borderTop: "1px solid rgba(255,255,255,0.07)", display: "flex", flexDirection: "column", gap: "8px", background: "rgba(3,8,16,0.95)" }}>
          {isWebPage && project.liveUrl ? (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", background: "linear-gradient(135deg,#f59e0b,#d97706)", color: "#000", fontWeight: 800, fontSize: "14px", padding: "14px", borderRadius: "12px", textDecoration: "none", boxShadow: "0 4px 18px rgba(245,158,11,0.4)" }}>
              <Globe size={16} /><span>Ver Sitio Web</span>
            </a>
          ) : project.downloadUrl ? (
            <a href={project.downloadUrl} target="_blank" rel="noopener noreferrer" download={isAPK} onClick={onDownload} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", background: "linear-gradient(135deg,#00d2ff,#0070f3)", color: "#fff", fontWeight: 800, fontSize: "14px", padding: "14px", borderRadius: "12px", textDecoration: "none", boxShadow: "0 4px 18px rgba(0,210,255,0.4)" }}>
              <Download size={16} /><span>{project.downloadLabel ?? "DESCARGA APK"}</span>
            </a>
          ) : null}
          <button onClick={() => { onContact(); }} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", color: "#e2e8f0", fontWeight: 600, fontSize: "13px", padding: "12px", borderRadius: "12px", cursor: "pointer" }}>
            <span>Solicitar Demo o Proyecto Similar</span><ExternalLink size={13} color="#38bdf8" />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeInOverlay { from{opacity:0}to{opacity:1} }
        @keyframes slideUpModal { from{transform:translateY(100%);opacity:0}to{transform:translateY(0);opacity:1} }
      `}</style>
    </div>
  );
};

// Compact Card
interface CardProps {
  proj: ProjectItem;
  onOpenFeatures: (proj: ProjectItem) => void;
}

const ProjectCard: React.FC<CardProps> = ({ proj, onOpenFeatures }) => {
  const isWebPage = proj.category === "webpage";
  const isAPK = proj.category === "mobile";
  const hasCounter = DOWNLOAD_BASE[proj.id] !== undefined;
  const [dlCount] = useState(() => getDownloadCount(proj.id));

  return (
    <div className="glass-panel proj-card" style={{ background: "rgba(8,18,34,0.78)", border: `1px solid ${proj.badgeColor}28`, borderRadius: "16px", padding: "15px", display: "flex", flexDirection: "column", gap: "11px", position: "relative", overflow: "hidden" }}>
      {/* Top accent */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: `linear-gradient(90deg, transparent, ${proj.badgeColor}, transparent)`, opacity: 0.7 }} />

      {/* Header */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "8px" }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <span style={{ fontSize: "9px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.7px", color: proj.badgeColor, background: `${proj.badgeColor}15`, border: `1px solid ${proj.badgeColor}35`, padding: "2px 7px", borderRadius: "5px", display: "inline-block", marginBottom: "5px" }}>
            {proj.categoryLabel}
          </span>
          <h3 style={{ fontSize: "15px", fontWeight: 800, color: "#fff", margin: 0, lineHeight: 1.2, fontFamily: "'Outfit', sans-serif", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{proj.title}</h3>
          <span style={{ fontSize: "10px", color: "#64748b", fontWeight: 600 }}>{proj.version}</span>
        </div>
        {hasCounter && (
          <div style={{ display: "flex", alignItems: "center", gap: "4px", background: "rgba(0,210,255,0.08)", border: "1px solid rgba(0,210,255,0.2)", borderRadius: "20px", padding: "3px 8px", flexShrink: 0 }}>
            <Download size={9} color="#00d2ff" />
            <span style={{ fontSize: "10px", fontWeight: 700, color: "#38bdf8", whiteSpace: "nowrap" }}>{dlCount.toLocaleString()}</span>
          </div>
        )}
      </div>

      {/* Description 2 lines */}
      <p style={{ fontSize: "12px", color: "#94a3b8", lineHeight: 1.5, margin: 0, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
        {proj.description}
      </p>

      {/* Actions */}
      <div style={{ display: "flex", gap: "6px", marginTop: "auto" }}>
        {/* CARACTERISTICAS glow */}
        <button onClick={() => onOpenFeatures(proj)} className="btn-features-glow" style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "5px", background: "linear-gradient(135deg, rgba(0,210,255,0.1), rgba(0,112,243,0.1))", border: "1px solid rgba(0,210,255,0.4)", color: "#00d2ff", fontWeight: 800, fontSize: "10.5px", padding: "9px 8px", borderRadius: "9px", cursor: "pointer", letterSpacing: "0.4px", textTransform: "uppercase", boxShadow: "0 0 12px rgba(0,210,255,0.18)", transition: "all 0.25s ease" }}>
          <Sparkles size={11} />
          <span>Características</span>
        </button>

        {/* Download / Visit */}
        {isWebPage && proj.liveUrl ? (
          <a href={proj.liveUrl} target="_blank" rel="noreferrer" style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "5px", background: "linear-gradient(135deg,#f59e0b,#d97706)", color: "#000", fontWeight: 800, fontSize: "10.5px", padding: "9px 8px", borderRadius: "9px", textDecoration: "none", boxShadow: "0 2px 10px rgba(245,158,11,0.3)", textTransform: "uppercase" }}>
            <Globe size={11} /><span>Ver Web</span>
          </a>
        ) : proj.downloadUrl ? (
          <a href={proj.downloadUrl} target="_blank" rel="noopener noreferrer" download={isAPK} style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "5px", background: "linear-gradient(135deg,#00d2ff,#0070f3)", color: "#fff", fontWeight: 800, fontSize: "10.5px", padding: "9px 8px", borderRadius: "9px", textDecoration: "none", boxShadow: "0 2px 10px rgba(0,210,255,0.3)", textTransform: "uppercase" }}>
            <Download size={11} /><span>APK</span>
          </a>
        ) : null}

        {/* Policy → new tab */}
        <button onClick={() => window.open(getPolicyUrl(proj.id), "_blank", "noopener,noreferrer")} title="Politicas Oficiales" className="btn-policy" style={{ width: "36px", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", color: "#64748b", borderRadius: "9px", cursor: "pointer", transition: "all 0.2s ease" }}>
          <ShieldCheck size={14} />
        </button>
      </div>
    </div>
  );
};

// Main Section
interface ProjectShowcaseProps {
  onOpenContact: (projectTitle?: string) => void;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ onOpenContact }) => {
  const [filter, setFilter] = useState<"all" | "mobile" | "saas" | "ai" | "webpage">("all");
  const [featuresProject, setFeaturesProject] = useState<ProjectItem | null>(null);
  const [dlCounts, setDlCounts] = useState<Record<string, number>>(() => {
    const r: Record<string, number> = {};
    Object.keys(DOWNLOAD_BASE).forEach((id) => { r[id] = getDownloadCount(id); });
    return r;
  });

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setFeaturesProject(null); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const handleDownload = useCallback((id: string) => {
    if (DOWNLOAD_BASE[id] !== undefined) {
      const next = incrementDownload(id);
      setDlCounts((prev) => ({ ...prev, [id]: next }));
    }
  }, []);

  const filtered = filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  const FILTERS: { key: typeof filter; label: string }[] = [
    { key: "all", label: "Todos" },
    { key: "mobile", label: "Apps Moviles" },
    { key: "saas", label: "SaaS" },
    { key: "ai", label: "IA & OCR" },
    { key: "webpage", label: "Web Sites" },
  ];

  return (
    <section id="proyectos" style={{ position: "relative", padding: "54px 0 60px", zIndex: 3, background: "linear-gradient(180deg,transparent 0%,rgba(8,17,30,0.45) 50%,transparent 100%)" }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 26px" }}>
          <span style={{ fontSize: "11px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "1.5px", color: "#00d2ff", display: "block", marginBottom: "10px" }}>Proyectos & Descargas</span>
          <h2 className="heading-title" style={{ fontSize: "clamp(1.5rem,4vw,2.3rem)", color: "#fff", marginBottom: "10px" }}>
            Software que <span className="text-gradient">impulsa negocios reales</span>
          </h2>
          <p style={{ fontSize: "13px", color: "#64748b", lineHeight: 1.6, margin: 0 }}>Aplicaciones en produccion activa, usadas por empresas reales en Republica Dominicana.</p>
        </div>

        {/* Filters */}
        <div style={{ display: "flex", gap: "7px", justifyContent: "center", flexWrap: "wrap", marginBottom: "26px" }}>
          {FILTERS.map(({ key, label }) => (
            <button key={key} onClick={() => setFilter(key)} style={{ padding: "6px 14px", borderRadius: "999px", border: filter === key ? "1px solid #00d2ff" : "1px solid rgba(255,255,255,0.1)", background: filter === key ? "rgba(0,210,255,0.12)" : "rgba(255,255,255,0.04)", color: filter === key ? "#00d2ff" : "#94a3b8", fontWeight: 700, fontSize: "11.5px", cursor: "pointer", transition: "all 0.2s ease", boxShadow: filter === key ? "0 0 12px rgba(0,210,255,0.25)" : "none" }}>
              {label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 270px), 1fr))", gap: "12px" }}>
          {filtered.map((proj) => (
            <ProjectCard key={proj.id} proj={proj} onOpenFeatures={setFeaturesProject}  />
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <p style={{ fontSize: "13px", color: "#64748b", marginBottom: "14px" }}>Tienes una idea? Construyamos tu proximo software.</p>
          <button onClick={() => onOpenContact()} className="btn-primary" style={{ fontSize: "14px", padding: "12px 28px" }}>
            <Star size={15} /><span>Solicitar un Proyecto</span>
          </button>
        </div>
      </div>

      {/* Features Modal */}
      {featuresProject && (
        <FeaturesModal
          project={featuresProject}
          downloadCount={dlCounts[featuresProject.id] ?? 0}
          onClose={() => setFeaturesProject(null)}
          onDownload={() => handleDownload(featuresProject.id)}
          onContact={() => { setFeaturesProject(null); onOpenContact(featuresProject.title); }}
        />
      )}

      <style>{`
        .proj-card { transition: all 0.3s cubic-bezier(0.16,1,0.3,1); }
        .proj-card:hover { border-color: rgba(0,210,255,0.35) !important; transform: translateY(-4px); box-shadow: 0 14px 36px -8px rgba(0,112,243,0.3), 0 0 20px rgba(0,210,255,0.15); }
        .btn-features-glow:hover { background: linear-gradient(135deg,rgba(0,210,255,0.22),rgba(0,112,243,0.22)) !important; box-shadow: 0 0 22px rgba(0,210,255,0.5) !important; color: #fff !important; border-color: rgba(0,210,255,0.8) !important; }
        .btn-policy:hover { background: rgba(56,189,248,0.1) !important; border-color: rgba(56,189,248,0.3) !important; color: #38bdf8 !important; }
        @media (max-width:480px) { #proyectos .container { padding: 0 12px !important; } }
      `}</style>
    </section>
  );
};


