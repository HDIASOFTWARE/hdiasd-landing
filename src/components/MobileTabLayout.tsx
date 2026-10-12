import React, { useState, useCallback } from "react";
import {
  Home,
  Layers,
  Wrench,
  MessageSquare,
  MessageCircle,
  Download,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Zap,
  ShieldCheck,
  Sparkles,
  Car,
  Snowflake,
  Ship,
  Plane,
  Bot,
  Globe,
  Code2,
  Smartphone,
  Cpu,
  Phone,
  Mail,
  MapPin,
  ArrowRight
} from "lucide-react";

type TabId = "inicio" | "proyectos" | "servicios" | "contacto";

interface MobileTabLayoutProps {
  onOpenContact: (service?: string) => void;
}

const WHATSAPP_SVG = (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="#ffffff">
    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.77.814 2.796.814 3.18 0 5.767-2.587 5.768-5.766 0-3.181-2.587-5.766-5.768-5.766zm9.969 5.766c0 5.518-4.482 10-10 10-1.748 0-3.385-.45-4.819-1.238l-4.781 1.254 1.277-4.664c-.902-1.488-1.427-3.23-1.427-5.102 0-5.518 4.482-10 10-10s10 4.482 10 10z" />
  </svg>
);

const DOWNLOAD_BASE: Record<string, number> = {
  climup: 172,
  autoos: 137,
  nauticos: 77,
  travelos: 54,
};

function getDownloadCount(id: string): number {
  try {
    const s = localStorage.getItem("dl_" + id);
    if (s !== null) return parseInt(s, 10);
  } catch {}
  return DOWNLOAD_BASE[id] ?? 0;
}

function incrementDownload(id: string): number {
  try {
    const n = getDownloadCount(id) + 1;
    localStorage.setItem("dl_" + id, String(n));
    return n;
  } catch {}
  return DOWNLOAD_BASE[id] ?? 0;
}

interface MobileProject {
  id: string;
  title: string;
  version: string;
  categoryLabel: string;
  badgeColor: string;
  icon: React.ReactNode;
  description: string;
  features: string[];
  downloadUrl: string;
  downloadLabel: string;
  hasApk: boolean;
}

const MOBILE_PROJECTS: MobileProject[] = [
  {
    id: "autoos",
    title: "AutoOS",
    version: "v1.0.47 Enterprise",
    categoryLabel: "App Movil & Web",
    badgeColor: "#10b981",
    icon: <Car size={22} color="#10b981" />,
    description: "Sistema para agencias de alquiler y flotas vehiculares. Contratos digitales, inspecciones fotograficas y control en tiempo real.",
    features: ["Gestion de Flota en tiempo real", "Contratos con firma digital", "Control de mantenimiento"],
    downloadUrl: "https://hdiasd-landing.vercel.app/AutoOS.apk",
    downloadLabel: "Descargar APK",
    hasApk: true,
  },
  {
    id: "climup",
    title: "CLIMUP",
    version: "Release Oficial",
    categoryLabel: "App Movil Android",
    badgeColor: "#0284c7",
    icon: <Snowflake size={22} color="#0284c7" />,
    description: "Software para empresas de climatizacion. Firma digital remota, recordatorios automaticos de mantenimiento y facturas PDF.",
    features: ["Firma digital del cliente en web", "Notificaciones automaticas", "Facturas PDF oficiales"],
    downloadUrl: "https://github.com/HDIASOFTWARE/hdiasd-landing/releases/download/v1.0.0/CLIMUP.apk",
    downloadLabel: "Descargar APK",
    hasApk: true,
  },
  {
    id: "nauticos",
    title: "NauticOS",
    version: "Marine Pro",
    categoryLabel: "App Nautica VIP",
    badgeColor: "#06b6d4",
    icon: <Ship size={22} color="#06b6d4" />,
    description: "Plataforma integral para agencias de yates y charters de lujo. Contratos maritimos, bitacora y firma digital.",
    features: ["Catalogo de yates en tiempo real", "Contratos maritimos digitales", "Control de tripulacion"],
    downloadUrl: "https://wa.me/18496584957?text=Hola%2C%20quiero%20info%20de%20NauticOS",
    downloadLabel: "Ver Demo",
    hasApk: false,
  },
  {
    id: "travelos",
    title: "TravelOS VIP",
    version: "Enterprise Cloud",
    categoryLabel: "SaaS Multi-Tenant",
    badgeColor: "#d4af37",
    icon: <Plane size={22} color="#d4af37" />,
    description: "Solucion integral para agencias de viajes. Reservas de vuelos, yates, hoteles y vehiculos con aislamiento RLS por agencia.",
    features: ["Multi-tenant con Row Level Security", "Cotizador automatico de itinerarios", "Centro de control con auditoria"],
    downloadUrl: "https://wa.me/18496584957?text=Hola%2C%20deseo%20probar%20TravelOS%20VIP",
    downloadLabel: "Solicitar Demo",
    hasApk: false,
  },
  {
    id: "ai-parser",
    title: "AI Voucher Parser",
    version: "API Cloud",
    categoryLabel: "Inteligencia Artificial",
    badgeColor: "#a855f7",
    icon: <Bot size={22} color="#a855f7" />,
    description: "Motor IA de lectura de comprobantes bancarios. Extrae montos, fechas y referencias para conciliacion en menos de 1.2 segundos.",
    features: ["Extraccion con IA 99.8% precision", "Deteccion de duplicados y fraudes", "Integracion REST API / Webhook"],
    downloadUrl: "https://wa.me/18496584957?text=Hola%2C%20deseo%20una%20demo%20del%20AI%20Voucher%20Parser",
    downloadLabel: "Solicitar Demo",
    hasApk: false,
  },
  {
    id: "iloratour",
    title: "iLora Tour",
    version: "Web Page Live",
    categoryLabel: "Pagina Web Corporativa",
    badgeColor: "#f59e0b",
    icon: <Globe size={22} color="#f59e0b" />,
    description: "Sitio web de alto impacto para agencia de viajes de lujo en RD. Catalogo de paquetes VIP, hoteles, cruceros y rent car.",
    features: ["SEO avanzado: 4.9 / +12,000 resenas", "Cotizacion por WhatsApp integrado", "Google Analytics 4 + Heatmaps"],
    downloadUrl: "https://www.iloratour.com",
    downloadLabel: "Ver Pagina",
    hasApk: false,
  },
];

interface MobileService {
  id: string;
  icon: React.ReactNode;
  title: string;
  color: string;
  desc: string;
  tags: string[];
}

const MOBILE_SERVICES: MobileService[] = [
  {
    id: "software",
    icon: <Code2 size={24} color="#00d2ff" />,
    title: "Software a Medida",
    color: "#00d2ff",
    desc: "Sistemas empresariales, paneles administrativos y soluciones SaaS construidas desde cero para tu negocio.",
    tags: ["SaaS Cloud", "Panel Admin", "PostgreSQL"],
  },
  {
    id: "web",
    icon: <Globe size={24} color="#38bdf8" />,
    title: "Sitios Web",
    color: "#38bdf8",
    desc: "Landing pages y sitios corporativos con diseno premium, SEO avanzado y maxima velocidad de carga.",
    tags: ["SEO Pro", "Responsive", "Alta Conversion"],
  },
  {
    id: "apps",
    icon: <Smartphone size={24} color="#a855f7" />,
    title: "Apps Moviles",
    color: "#a855f7",
    desc: "Aplicaciones Android nativas con firma digital, bases de datos cloud y funcionalidad offline.",
    tags: ["Android APK", "React Native", "Supabase"],
  },
  {
    id: "ai",
    icon: <Cpu size={24} color="#f59e0b" />,
    title: "Inteligencia Artificial",
    color: "#f59e0b",
    desc: "OCR bancario, automatizacion de procesos y APIs inteligentes que procesan documentos en segundos.",
    tags: ["OCR & IA", "API REST", "Tiempo Real"],
  },
];

interface TabDefinition {
  id: TabId;
  label: string;
  icon: (active: boolean) => React.ReactNode;
}

const TABS: TabDefinition[] = [
  {
    id: "inicio",
    label: "Inicio",
    icon: (active) => <Home size={20} color={active ? "#00d2ff" : "#64748b"} />,
  },
  {
    id: "proyectos",
    label: "Proyectos",
    icon: (active) => <Layers size={20} color={active ? "#00d2ff" : "#64748b"} />,
  },
  {
    id: "servicios",
    label: "Servicios",
    icon: (active) => <Wrench size={20} color={active ? "#00d2ff" : "#64748b"} />,
  },
  {
    id: "contacto",
    label: "Contacto",
    icon: (active) => <MessageSquare size={20} color={active ? "#00d2ff" : "#64748b"} />,
  },
];

const InicioTab: React.FC<{
  onTabChange: (t: TabId) => void;
  onOpenContact: () => void;
}> = ({ onTabChange, onOpenContact }) => (
  <div
    style={{
      padding: "20px 20px 24px",
      display: "flex",
      flexDirection: "column",
      gap: "22px",
      overflowY: "auto",
      flex: 1,
    }}
  >
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        background: "rgba(9,21,39,0.85)",
        border: "1px solid rgba(56,189,248,0.35)",
        padding: "6px 14px",
        borderRadius: "999px",
        alignSelf: "flex-start",
      }}
    >
      <div
        style={{
          width: "7px",
          height: "7px",
          borderRadius: "50%",
          background: "#00d2ff",
          boxShadow: "0 0 10px #00d2ff",
        }}
      />
      <span
        style={{
          fontSize: "10px",
          fontWeight: 800,
          letterSpacing: "1.2px",
          textTransform: "uppercase",
          color: "#38bdf8",
          fontFamily: "'Outfit', sans-serif",
        }}
      >
        BUILD LANDING PAGE & APPS
      </span>
    </div>

    <div>
      <h1
        style={{
          fontSize: "clamp(1.85rem, 8.5vw, 2.4rem)",
          fontWeight: 900,
          lineHeight: 1.15,
          color: "#ffffff",
          margin: "0 0 10px",
          fontFamily: "'Outfit', sans-serif",
          letterSpacing: "-0.03em",
        }}
      >
        Tu proxima gran idea merece una{" "}
        <span
          style={{
            background: "linear-gradient(135deg,#00d2ff 0%,#38bdf8 50%,#0070f3 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          experiencia digital
        </span>{" "}
        extraordinaria.
      </h1>
      <p style={{ fontSize: "13.5px", color: "#94a3b8", lineHeight: 1.6, margin: 0 }}>
        Disenamos y desarrollamos soluciones digitales que impulsan tu negocio: software web, apps moviles y automatizacion inteligente.
      </p>
    </div>

    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <button
        onClick={onOpenContact}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          background: "linear-gradient(135deg,#00d2ff 0%,#0070f3 100%)",
          color: "#fff",
          fontWeight: 700,
          fontSize: "15px",
          padding: "14px 20px",
          borderRadius: "999px",
          border: "none",
          cursor: "pointer",
          boxShadow: "0 4px 20px rgba(0,210,255,0.4)",
          fontFamily: "inherit",
          width: "100%",
        }}
      >
        <span>Comenzar ahora</span>
      </button>

      <button
        onClick={() => onTabChange("proyectos")}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          background: "rgba(255,255,255,0.05)",
          color: "#f8fafc",
          fontWeight: 600,
          fontSize: "14px",
          padding: "13px 20px",
          borderRadius: "999px",
          border: "1px solid rgba(255,255,255,0.15)",
          cursor: "pointer",
          fontFamily: "inherit",
          width: "100%",
        }}
      >
        <Layers size={17} color="#38bdf8" />
        <span>Ver Proyectos & Descargas</span>
      </button>
    </div>

    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
      {[
        { value: "6+", label: "Proyectos", color: "#00d2ff" },
        { value: "440+", label: "Descargas", color: "#10b981" },
        { value: "100%", label: "Soporte", color: "#d4af37" },
      ].map((s) => (
        <div
          key={s.label}
          style={{
            background: "rgba(8,18,34,0.75)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "14px",
            padding: "14px 8px",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "22px", fontWeight: 900, color: s.color, fontFamily: "'Outfit', sans-serif" }}>
            {s.value}
          </div>
          <div style={{ fontSize: "10px", color: "#64748b", marginTop: "4px", fontWeight: 600 }}>
            {s.label}
          </div>
        </div>
      ))}
    </div>

    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      {[
        { icon: <Zap size={16} color="#00d2ff" />, text: "100% Codigo a Medida" },
        { icon: <ShieldCheck size={16} color="#10b981" />, text: "Alta Conversion Garantizada" },
        { icon: <Sparkles size={16} color="#d4af37" />, text: "Motion Design & UI Premium" },
      ].map((b) => (
        <div
          key={b.text}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "10px 14px",
            background: "rgba(8,18,34,0.5)",
            borderRadius: "10px",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {b.icon}
          <span style={{ fontSize: "13px", color: "#94a3b8", fontWeight: 500 }}>{b.text}</span>
        </div>
      ))}
    </div>
  </div>
);

const ProyectosTab: React.FC<{ onOpenContact: (p: string) => void }> = ({ onOpenContact }) => {
  const [idx, setIdx] = useState(0);
  const [dlCounts, setDlCounts] = useState<Record<string, number>>(() =>
    MOBILE_PROJECTS.reduce((a, p) => ({ ...a, [p.id]: getDownloadCount(p.id) }), {} as Record<string, number>)
  );
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const proj = MOBILE_PROJECTS[idx];
  const prev = () => setIdx((i) => (i - 1 + MOBILE_PROJECTS.length) % MOBILE_PROJECTS.length);
  const next = () => setIdx((i) => (i + 1) % MOBILE_PROJECTS.length);

  const handleDl = useCallback(() => {
    if (!proj.downloadUrl) return;
    const n = incrementDownload(proj.id);
    setDlCounts((p) => ({ ...p, [proj.id]: n }));
    window.open(proj.downloadUrl, "_blank");
  }, [proj]);

  return (
    <div
      style={{
        padding: "16px 18px 20px",
        display: "flex",
        flexDirection: "column",
        flex: 1,
        overflowY: "auto",
        justifyContent: "space-between",
      }}
      onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchStart === null) return;
        const diff = touchStart - e.changedTouches[0].clientX;
        if (diff > 40) next();
        else if (diff < -40) prev();
        setTouchStart(null);
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "12px" }}>
        <span
          style={{
            fontSize: "10px",
            fontWeight: 800,
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            color: "#38bdf8",
          }}
        >
          PORTAFOLIO
        </span>
        <h2
          style={{
            fontSize: "22px",
            fontWeight: 900,
            color: "#fff",
            margin: "2px 0 0",
            fontFamily: "'Outfit', sans-serif",
          }}
        >
          Nuestros Proyectos
        </h2>
      </div>

      <div
        style={{
          background: "rgba(8,18,34,0.85)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "20px",
          padding: "20px",
          boxShadow: "0 12px 32px rgba(0,0,0,0.5)",
          display: "flex",
          flexDirection: "column",
          gap: "14px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "12px",
                background: proj.badgeColor + "18",
                border: "1px solid " + proj.badgeColor + "40",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {proj.icon}
            </div>
            <div>
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 900,
                  color: "#fff",
                  margin: 0,
                  fontFamily: "'Outfit', sans-serif",
                }}
              >
                {proj.title}
              </h3>
              <div style={{ fontSize: "11px", color: "#64748b", marginTop: "2px" }}>
                {proj.categoryLabel}
              </div>
            </div>
          </div>
          <span
            style={{
              fontSize: "10px",
              fontWeight: 700,
              padding: "4px 8px",
              borderRadius: "999px",
              color: proj.badgeColor,
              background: proj.badgeColor + "20",
              border: "1px solid " + proj.badgeColor + "40",
            }}
          >
            {proj.version}
          </span>
        </div>

        <p style={{ fontSize: "13px", color: "#cbd5e1", lineHeight: 1.55, margin: 0 }}>
          {proj.description}
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          {proj.features.map((feat) => (
            <div key={feat} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <CheckCircle2 size={14} color={proj.badgeColor} style={{ flexShrink: 0 }} />
              <span style={{ fontSize: "12.5px", color: "#94a3b8" }}>{feat}</span>
            </div>
          ))}
        </div>

        {proj.hasApk && (
          <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", color: "#64748b" }}>
            <Download size={12} color="#64748b" />
            <span>{dlCounts[proj.id]} descargas</span>
          </div>
        )}

        <div style={{ display: "flex", gap: "8px", marginTop: "4px" }}>
          <button
            onClick={handleDl}
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              background: "linear-gradient(135deg,#00d2ff 0%,#0070f3 100%)",
              color: "#fff",
              fontWeight: 700,
              fontSize: "13px",
              padding: "11px 16px",
              borderRadius: "12px",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 4px 16px rgba(0,210,255,0.35)",
              fontFamily: "inherit",
            }}
          >
            <Download size={15} />
            <span>{proj.downloadLabel}</span>
          </button>
          <button
            onClick={() => onOpenContact(proj.title)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              background: "rgba(255,255,255,0.06)",
              color: "#cbd5e1",
              fontWeight: 600,
              fontSize: "13px",
              padding: "11px 14px",
              borderRadius: "12px",
              border: "1px solid rgba(255,255,255,0.12)",
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            <MessageCircle size={15} />
            <span>Info</span>
          </button>
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "14px" }}>
        <button
          onClick={prev}
          aria-label="Anterior"
          style={{
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "10px",
            padding: "8px 12px",
            color: "#fff",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ChevronLeft size={18} />
        </button>

        <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
          {MOBILE_PROJECTS.map((_, i) => (
            <div
              key={i}
              onClick={() => setIdx(i)}
              style={{
                width: i === idx ? "20px" : "6px",
                height: "6px",
                borderRadius: "3px",
                background: i === idx ? "#00d2ff" : "rgba(255,255,255,0.2)",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
            />
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Siguiente"
          style={{
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "10px",
            padding: "8px 12px",
            color: "#fff",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ChevronRight size={18} />
        </button>
      </div>

      <p style={{ textAlign: "center", fontSize: "11px", color: "#475569", margin: "8px 0 0" }}>
        Desliza horizontalmente para navegar
      </p>
    </div>
  );
};

const ServiciosTab: React.FC<{ onOpenContact: (s: string) => void }> = ({ onOpenContact }) => (
  <div
    style={{
      padding: "16px 18px 20px",
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      overflowY: "auto",
      flex: 1,
    }}
  >
    <div style={{ textAlign: "center", marginBottom: "4px" }}>
      <span
        style={{
          fontSize: "10px",
          fontWeight: 800,
          letterSpacing: "1.5px",
          textTransform: "uppercase",
          color: "#38bdf8",
        }}
      >
        SERVICIOS
      </span>
      <h2
        style={{
          fontSize: "20px",
          fontWeight: 900,
          color: "#fff",
          margin: "2px 0 0",
          fontFamily: "'Outfit', sans-serif",
        }}
      >
        Nuestros Servicios
      </h2>
    </div>

    {MOBILE_SERVICES.map((srv) => (
      <div
        key={srv.id}
        style={{
          background: "rgba(8,18,34,0.75)",
          backdropFilter: "blur(18px)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "16px",
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: "42px",
              height: "42px",
              borderRadius: "12px",
              background: srv.color + "15",
              border: "1px solid " + srv.color + "35",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            {srv.icon}
          </div>
          <div>
            <h3
              style={{
                fontSize: "15px",
                fontWeight: 800,
                color: "#fff",
                margin: 0,
                fontFamily: "'Outfit', sans-serif",
              }}
            >
              {srv.title}
            </h3>
            <div style={{ display: "flex", gap: "5px", flexWrap: "wrap", marginTop: "4px" }}>
              {srv.tags.map((t) => (
                <span
                  key={t}
                  style={{
                    fontSize: "9px",
                    fontWeight: 700,
                    color: srv.color,
                    background: srv.color + "20",
                    padding: "2px 6px",
                    borderRadius: "6px",
                    border: "1px solid " + srv.color + "33",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <p style={{ fontSize: "12.5px", color: "#94a3b8", lineHeight: 1.5, margin: 0 }}>
          {srv.desc}
        </p>

        <button
          onClick={() => onOpenContact(srv.title)}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            background: "none",
            border: "none",
            color: srv.color,
            fontWeight: 700,
            fontSize: "12px",
            cursor: "pointer",
            padding: "2px 0",
            fontFamily: "inherit",
            alignSelf: "flex-start",
          }}
        >
          <span>Solicitar cotizacion</span>
          <ArrowRight size={13} />
        </button>
      </div>
    ))}
  </div>
);

const ContactoTab: React.FC<{ onOpenContact: () => void }> = ({ onOpenContact }) => (
  <div
    style={{
      padding: "24px 20px",
      overflowY: "auto",
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: "16px",
    }}
  >
    <div style={{ textAlign: "center" }}>
      <span
        style={{
          fontSize: "10px",
          fontWeight: 800,
          letterSpacing: "1.5px",
          textTransform: "uppercase",
          color: "#38bdf8",
        }}
      >
        CONTACTO
      </span>
      <h2
        style={{
          fontSize: "22px",
          fontWeight: 900,
          color: "#fff",
          margin: "4px 0 8px",
          fontFamily: "'Outfit', sans-serif",
        }}
      >
        Listo para empezar?
      </h2>
      <p style={{ fontSize: "13px", color: "#94a3b8", lineHeight: 1.6, margin: 0 }}>
        Cuentanos tu proyecto y te respondemos en menos de 24 horas.
      </p>
    </div>

    <button
      onClick={onOpenContact}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        background: "linear-gradient(135deg,#00d2ff 0%,#0070f3 100%)",
        color: "#fff",
        fontWeight: 700,
        fontSize: "15px",
        padding: "16px",
        borderRadius: "14px",
        border: "none",
        cursor: "pointer",
        boxShadow: "0 4px 24px rgba(0,210,255,0.4)",
        fontFamily: "inherit",
        width: "100%",
      }}
    >
      <MessageSquare size={18} />
      <span>Enviar Mensaje</span>
    </button>

    <a
      href="https://wa.me/18496584957?text=Hola%2C%20me%20interesa%20una%20solucion%20de%20software"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        background: "#22c55e",
        color: "#fff",
        fontWeight: 700,
        fontSize: "15px",
        padding: "16px",
        borderRadius: "14px",
        textDecoration: "none",
        boxShadow: "0 4px 20px rgba(34,197,94,0.35)",
      }}
    >
      {WHATSAPP_SVG}
      <span>WhatsApp Directo</span>
    </a>

    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {[
        { icon: <Phone size={17} color="#38bdf8" />, label: "Telefono", value: "+1 (849) 658-4957", href: "tel:+18496584957" },
        { icon: <Mail size={17} color="#38bdf8" />, label: "Email", value: "hdia.software@gmail.com", href: "mailto:hdia.software@gmail.com" },
        { icon: <MapPin size={17} color="#38bdf8" />, label: "Ubicacion", value: "Republica Dominicana", href: null },
      ].map((c) => (
        <div
          key={c.label}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "14px",
            background: "rgba(8,18,34,0.75)",
            borderRadius: "12px",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <div
            style={{
              width: "34px",
              height: "34px",
              borderRadius: "10px",
              background: "rgba(56,189,248,0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            {c.icon}
          </div>
          <div>
            <div style={{ fontSize: "10px", color: "#64748b", fontWeight: 600 }}>{c.label}</div>
            {c.href ? (
              <a
                href={c.href}
                style={{
                  fontSize: "13px",
                  color: "#e2e8f0",
                  fontWeight: 600,
                  textDecoration: "none",
                  wordBreak: "break-all",
                }}
              >
                {c.value}
              </a>
            ) : (
              <span style={{ fontSize: "13px", color: "#e2e8f0", fontWeight: 600 }}>{c.value}</span>
            )}
          </div>
        </div>
      ))}
    </div>

    <p style={{ textAlign: "center", fontSize: "11px", color: "#475569", margin: "12px 0 0" }}>
      HD IA SOFTWARE - Todos los derechos reservados
    </p>
  </div>
);

export const MobileTabLayout: React.FC<MobileTabLayoutProps> = ({ onOpenContact }) => {
  const [activeTab, setActiveTab] = useState<TabId>("inicio");

  const renderTab = () => {
    switch (activeTab) {
      case "inicio":
        return <InicioTab onTabChange={setActiveTab} onOpenContact={() => onOpenContact()} />;
      case "proyectos":
        return <ProyectosTab onOpenContact={(p) => onOpenContact(p)} />;
      case "servicios":
        return <ServiciosTab onOpenContact={(s) => onOpenContact(s)} />;
      case "contacto":
        return <ContactoTab onOpenContact={() => onOpenContact()} />;
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "#020812",
        display: "flex",
        flexDirection: "column",
        zIndex: 999,
      }}
    >
      {/* HEADER */}
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 16px",
          background: "rgba(5,11,20,0.95)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(56,189,248,0.12)",
          flexShrink: 0,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              overflow: "hidden",
              boxShadow: "0 0 14px rgba(212,175,55,0.3)",
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
            <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: "13px", fontWeight: 800, color: "#fff" }}>
              HD IA <span style={{ color: "#38bdf8" }}>SOFTWARE</span>
            </div>
            <div
              style={{
                fontSize: "9px",
                fontWeight: 600,
                letterSpacing: "1px",
                textTransform: "uppercase",
                color: "#d4af37",
              }}
            >
              Soluciones Digitales
            </div>
          </div>
        </div>

        <a
          href="https://wa.me/18496584957?text=Hola%2C%20me%20interesa%20una%20solucion%20de%20software"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            background: "#22c55e",
            color: "#fff",
            fontWeight: 700,
            fontSize: "12px",
            padding: "8px 12px",
            borderRadius: "999px",
            textDecoration: "none",
            boxShadow: "0 2px 12px rgba(34,197,94,0.35)",
            flexShrink: 0,
          }}
        >
          {WHATSAPP_SVG}
          <span>WhatsApp</span>
        </a>
      </header>

      {/* ACTIVE TAB CONTENT */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        {renderTab()}
      </div>

      {/* BOTTOM TAB BAR */}
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          padding: "8px 10px 12px",
          background: "rgba(5,11,20,0.97)",
          backdropFilter: "blur(20px)",
          borderTop: "1px solid rgba(56,189,248,0.12)",
          flexShrink: 0,
        }}
      >
        {TABS.map(({ id, label, icon }) => {
          const isActive = activeTab === id;
          return (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "3px",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "6px 10px",
                borderRadius: "12px",
                position: "relative",
                minWidth: "60px",
              }}
            >
              {icon(isActive)}
              <span
                style={{
                  fontSize: "10px",
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? "#00d2ff" : "#64748b",
                  transition: "color 0.2s",
                }}
              >
                {label}
              </span>
              {isActive && (
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    width: "4px",
                    height: "4px",
                    borderRadius: "50%",
                    background: "#00d2ff",
                    boxShadow: "0 0 8px #00d2ff",
                  }}
                />
              )}
            </button>
          );
        })}
      </nav>
    </div>
  );
};
