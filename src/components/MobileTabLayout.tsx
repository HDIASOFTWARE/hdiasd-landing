import React, { useState, useCallback } from "react";


type TabId = "inicio" | "proyectos" | "servicios" | "contacto";

interface MobileTabLayoutProps {
  onOpenContact: (service?: string) => void;
}

const DOWNLOAD_BASE: Record<string, number> = {
  climup: 172, autoos: 137, nauticos: 77, travelos: 54,
};
function getDownloadCount(id: string): number {
  try { const s = localStorage.getItem(`dl_${id}`); if (s !== null) return parseInt(s, 10); } catch {}
  return DOWNLOAD_BASE[id] ?? 0;
}
function incrementDownload(id: string): number {
  try { const n = getDownloadCount(id) + 1; localStorage.setItem(`dl_${id}`, String(n)); return n; } catch {}
  return DOWNLOAD_BASE[id] ?? 0;
}

const MOBILE_PROJECTS = [
  { id: "autoos", title: "AutoOS", version: "v1.0.47 Enterprise", categoryLabel: "App Movil & Web", badgeColor: "#10b981", emoji: "ðŸš—", description: "Sistema para agencias de alquiler y flotas vehiculares. Contratos digitales, inspecciones fotograficas y control en tiempo real.", features: ["Gestion de Flota en tiempo real", "Contratos con firma digital", "Control de mantenimiento"], downloadUrl: "https://hdiasd-landing.vercel.app/AutoOS.apk", downloadLabel: "Descargar APK", hasApk: true },
  { id: "climup", title: "CLIMUP", version: "Release Oficial", categoryLabel: "App Movil Android", badgeColor: "#0284c7", emoji: "â„ï¸", description: "Software para empresas de climatizacion. Firma digital remota, recordatorios automaticos de mantenimiento y facturas PDF.", features: ["Firma digital del cliente en web", "Notificaciones automaticas", "Facturas PDF oficiales"], downloadUrl: "https://github.com/HDIASOFTWARE/hdiasd-landing/releases/download/v1.0.0/CLIMUP.apk", downloadLabel: "Descargar APK", hasApk: true },
  { id: "nauticos", title: "NauticOS", version: "Marine Pro", categoryLabel: "App Nautica VIP", badgeColor: "#06b6d4", emoji: "â›µ", description: "Plataforma integral para agencias de yates y charters de lujo. Contratos maritimos, bitacora y firma digital.", features: ["Catalogo de yates en tiempo real", "Contratos maritimos digitales", "Control de tripulacion"], downloadUrl: "https://wa.me/18496584957?text=Hola%2C%20quiero%20info%20de%20NauticOS", downloadLabel: "Ver Demo", hasApk: false },
  { id: "travelos", title: "TravelOS VIP", version: "Enterprise Cloud", categoryLabel: "SaaS Multi-Tenant", badgeColor: "#d4af37", emoji: "âœˆï¸", description: "Solucion integral para agencias de viajes. Reservas de vuelos, yates, hoteles y vehiculos con aislamiento RLS por agencia.", features: ["Multi-tenant con Row Level Security", "Cotizador automatico de itinerarios", "Centro de control con auditoria"], downloadUrl: "https://wa.me/18496584957?text=Hola%2C%20deseo%20probar%20TravelOS%20VIP", downloadLabel: "Solicitar Demo", hasApk: false },
  { id: "ai-parser", title: "AI Voucher Parser", version: "API Cloud", categoryLabel: "Inteligencia Artificial", badgeColor: "#a855f7", emoji: "ðŸ¤–", description: "Motor IA de lectura de comprobantes bancarios. Extrae montos, fechas y referencias para conciliacion en menos de 1.2 segundos.", features: ["Extraccion con IA 99.8% precision", "Deteccion de duplicados y fraudes", "Integracion REST API / Webhook"], downloadUrl: "https://wa.me/18496584957?text=Hola%2C%20deseo%20una%20demo%20del%20AI%20Voucher%20Parser", downloadLabel: "Solicitar Demo", hasApk: false },
  { id: "iloratour", title: "iLora Tour", version: "Web Page Live", categoryLabel: "Pagina Web Corporativa", badgeColor: "#f59e0b", emoji: "ðŸŒ´", description: "Sitio web de alto impacto para agencia de viajes de lujo en RD. Catalogo de paquetes VIP, hoteles, cruceros y rent car.", features: ["SEO avanzado: 4.9 / +12,000 resenas", "Cotizacion por WhatsApp integrado", "Google Analytics 4 + Heatmaps"], downloadUrl: "https://www.iloratour.com", downloadLabel: "Ver Pagina", hasApk: false },
];

const MOBILE_SERVICES = [
  { id: "software", emoji: "ðŸ’»", title: "Software a Medida", color: "#00d2ff", desc: "Sistemas empresariales, paneles administrativos y soluciones SaaS construidas desde cero para tu negocio.", tags: ["SaaS Cloud", "Panel Admin", "PostgreSQL"] },
  { id: "web", emoji: "ðŸŒ", title: "Sitios Web", color: "#38bdf8", desc: "Landing pages y sitios corporativos con diseno premium, SEO avanzado y maxima velocidad de carga.", tags: ["SEO Pro", "Responsive", "Alta Conversion"] },
  { id: "apps", emoji: "ðŸ“±", title: "Apps Moviles", color: "#a855f7", desc: "Aplicaciones Android nativas con firma digital, bases de datos cloud y funcionalidad offline.", tags: ["Android APK", "React Native", "Supabase"] },
  { id: "ai", emoji: "ðŸ¤–", title: "Inteligencia Artificial", color: "#f59e0b", desc: "OCR bancario, automatizacion de procesos y APIs inteligentes que procesan documentos en segundos.", tags: ["OCR & IA", "API REST", "Tiempo Real"] },
];

const TABS: { id: TabId; label: string; icon: string }[] = [
  { id: "inicio", label: "Inicio", icon: "ðŸ " },
  { id: "proyectos", label: "Proyectos", icon: "ðŸ“¦" },
  { id: "servicios", label: "Servicios", icon: "ðŸ› ï¸" },
  { id: "contacto", label: "Contacto", icon: "ðŸ’¬" },
];

const InicioTab: React.FC<{ onTabChange: (t: TabId) => void; onOpenContact: () => void }> = ({ onTabChange, onOpenContact }) => (
  <div style={{ padding: "20px 20px 24px", display: "flex", flexDirection: "column", gap: "24px", overflowY: "auto", flex: 1 }}>
    <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(9,21,39,0.85)", border: "1px solid rgba(56,189,248,0.35)", padding: "6px 14px", borderRadius: "999px", alignSelf: "flex-start" }}>
      <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#00d2ff", boxShadow: "0 0 10px #00d2ff", animation: "mGlow 2s infinite ease-in-out" }} />
      <span style={{ fontSize: "10px", fontWeight: 800, letterSpacing: "1.2px", textTransform: "uppercase" as const, color: "#38bdf8", fontFamily: "'Outfit', sans-serif" }}>BUILD LANDING PAGE & APPS</span>
    </div>
    <div>
      <h1 style={{ fontSize: "clamp(1.85rem, 9vw, 2.5rem)", fontWeight: 900, lineHeight: 1.12, color: "#ffffff", margin: "0 0 10px", fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.03em" }}>
        Tu proxima gran idea merece una{" "}
        <span style={{ background: "linear-gradient(135deg,#00d2ff 0%,#38bdf8 50%,#0070f3 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>experiencia digital</span>{" "}
        extraordinaria.
      </h1>
      <p style={{ fontSize: "13.5px", color: "#94a3b8", lineHeight: 1.6, margin: 0 }}>Disenamos y desarrollamos soluciones digitales que impulsan tu negocio: software web, apps moviles y automatizacion inteligente.</p>
    </div>
    <div style={{ display: "flex", flexDirection: "column" as const, gap: "10px" }}>
      <button onClick={onOpenContact} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", background: "linear-gradient(135deg,#00d2ff 0%,#0070f3 100%)", color: "#fff", fontWeight: 700, fontSize: "15px", padding: "14px 20px", borderRadius: "999px", border: "none", cursor: "pointer", boxShadow: "0 4px 20px rgba(0,210,255,0.4)", fontFamily: "inherit", width: "100%" }}>
        <span>Comenzar ahora</span>
      </button>
      <button onClick={() => onTabChange("proyectos")} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", background: "rgba(255,255,255,0.05)", color: "#f8fafc", fontWeight: 600, fontSize: "14px", padding: "13px 20px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.15)", cursor: "pointer", fontFamily: "inherit", width: "100%" }}>
        <span>ðŸ“¦ Ver Proyectos & Descargas</span>
      </button>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "10px" }}>
      {[{ value: "6+", label: "Proyectos", color: "#00d2ff" }, { value: "440+", label: "Descargas", color: "#10b981" }, { value: "100%", label: "Soporte", color: "#d4af37" }].map(s => (
        <div key={s.label} style={{ background: "rgba(8,18,34,0.75)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "14px", padding: "14px 8px", textAlign: "center" as const }}>
          <div style={{ fontSize: "22px", fontWeight: 900, color: s.color, fontFamily: "'Outfit', sans-serif" }}>{s.value}</div>
          <div style={{ fontSize: "10px", color: "#64748b", marginTop: "4px", fontWeight: 600 }}>{s.label}</div>
        </div>
      ))}
    </div>
    <div style={{ display: "flex", flexDirection: "column" as const, gap: "8px" }}>
      {[{ icon: "âš¡", color: "#00d2ff", text: "100% Codigo a Medida" }, { icon: "ðŸ›¡ï¸", color: "#10b981", text: "Alta Conversion Garantizada" }, { icon: "âœ¨", color: "#d4af37", text: "Motion Design & UI Premium" }].map(b => (
        <div key={b.text} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 14px", background: "rgba(8,18,34,0.5)", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.06)" }}>
          <span style={{ fontSize: "16px" }}>{b.icon}</span>
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
  const prev = () => setIdx(i => (i - 1 + MOBILE_PROJECTS.length) % MOBILE_PROJECTS.length);
  const next = () => setIdx(i => (i + 1) % MOBILE_PROJECTS.length);
  const handleDl = useCallback(() => {
    if (!proj.downloadUrl) return;
    const n = incrementDownload(proj.id);
    setDlCounts(p => ({ ...p, [proj.id]: n }));
    window.open(proj.downloadUrl, "_blank");
  }, [proj]);
  return (
    <div style={{ display: "flex", flexDirection: "column" as const, flex: 1, overflow: "hidden", padding: "16px 16px 8px" }}>
      <div style={{ textAlign: "center" as const, marginBottom: "12px" }}>
        <span style={{ fontSize: "10px", fontWeight: 800, letterSpacing: "1.5px", textTransform: "uppercase" as const, color: "#38bdf8" }}>PORTAFOLIO</span>
        <h2 style={{ fontSize: "20px", fontWeight: 900, color: "#fff", margin: "2px 0 0", fontFamily: "'Outfit', sans-serif" }}>Nuestros Proyectos</h2>
      </div>
      <div
        onTouchStart={e => setTouchStart(e.touches[0].clientX)}
        onTouchEnd={e => { if (touchStart === null) return; const d = touchStart - e.changedTouches[0].clientX; if (Math.abs(d) > 50) d > 0 ? next() : prev(); setTouchStart(null); }}
        style={{ flex: 1, overflowY: "auto", background: "rgba(8,18,34,0.75)", backdropFilter: "blur(18px)", border: `1px solid ${proj.badgeColor}44`, borderRadius: "20px", padding: "18px", boxShadow: `0 0 30px ${proj.badgeColor}22`, transition: "all 0.3s ease", display: "flex", flexDirection: "column" as const, gap: "12px" }}
      >
        <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
          <span style={{ fontSize: "30px", flexShrink: 0 }}>{proj.emoji}</span>
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" as const, marginBottom: "2px" }}>
              <span style={{ fontSize: "17px", fontWeight: 900, color: "#fff", fontFamily: "'Outfit', sans-serif" }}>{proj.title}</span>
              <span style={{ fontSize: "9px", fontWeight: 700, color: proj.badgeColor, background: `${proj.badgeColor}20`, padding: "2px 7px", borderRadius: "999px", border: `1px solid ${proj.badgeColor}44` }}>{proj.version}</span>
            </div>
            <span style={{ fontSize: "11px", color: "#64748b", fontWeight: 600 }}>{proj.categoryLabel}</span>
          </div>
        </div>
        <p style={{ fontSize: "13px", color: "#94a3b8", lineHeight: 1.55, margin: 0 }}>{proj.description}</p>
        <div style={{ display: "flex", flexDirection: "column" as const, gap: "7px" }}>
          {proj.features.map(f => (
            <div key={f} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ color: proj.badgeColor, fontSize: "14px" }}>âœ“</span>
              <span style={{ fontSize: "13px", color: "#e2e8f0" }}>{f}</span>
            </div>
          ))}
        </div>
        <div style={{ fontSize: "11px", color: "#64748b" }}>ðŸ“¥ {dlCounts[proj.id]} descargas</div>
        <div style={{ display: "flex", flexDirection: "column" as const, gap: "8px", marginTop: "auto" }}>
          <button onClick={handleDl} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", background: proj.badgeColor, color: "#fff", fontWeight: 700, fontSize: "14px", padding: "13px", borderRadius: "12px", border: "none", cursor: "pointer", boxShadow: `0 4px 18px ${proj.badgeColor}44`, fontFamily: "inherit", width: "100%" }}>
            ðŸ“¥ {proj.downloadLabel}
          </button>
          <button onClick={() => onOpenContact(proj.title)} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", background: "rgba(255,255,255,0.05)", color: "#94a3b8", fontWeight: 600, fontSize: "13px", padding: "10px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.1)", cursor: "pointer", fontFamily: "inherit", width: "100%" }}>
            ðŸ’¬ Mas Informacion
          </button>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "14px", paddingTop: "10px" }}>
        <button onClick={prev} style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "10px", padding: "7px 10px", color: "#fff", cursor: "pointer" }}>â†</button>
        <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
          {MOBILE_PROJECTS.map((p, i) => (
            <button key={p.id} onClick={() => setIdx(i)} style={{ width: i === idx ? "16px" : "6px", height: "6px", borderRadius: "999px", background: i === idx ? MOBILE_PROJECTS[idx].badgeColor : "rgba(255,255,255,0.2)", border: "none", cursor: "pointer", transition: "all 0.25s ease", padding: 0 }} />
          ))}
        </div>
        <button onClick={next} style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "10px", padding: "7px 10px", color: "#fff", cursor: "pointer" }}>â†’</button>
      </div>
      <p style={{ textAlign: "center" as const, fontSize: "10px", color: "#334155", margin: "4px 0 0" }}>Desliza para navegar</p>
    </div>
  );
};

const ServiciosTab: React.FC<{ onOpenContact: (s: string) => void }> = ({ onOpenContact }) => (
  <div style={{ padding: "16px 16px", overflowY: "auto", flex: 1, display: "flex", flexDirection: "column" as const, gap: "12px" }}>
    <div style={{ textAlign: "center" as const, marginBottom: "4px" }}>
      <span style={{ fontSize: "10px", fontWeight: 800, letterSpacing: "1.5px", textTransform: "uppercase" as const, color: "#38bdf8" }}>LO QUE HACEMOS</span>
      <h2 style={{ fontSize: "20px", fontWeight: 900, color: "#fff", margin: "2px 0 0", fontFamily: "'Outfit', sans-serif" }}>Nuestros Servicios</h2>
    </div>
    {MOBILE_SERVICES.map(srv => (
      <div key={srv.id} style={{ background: "rgba(8,18,34,0.75)", backdropFilter: "blur(18px)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", padding: "16px", display: "flex", flexDirection: "column" as const, gap: "8px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span style={{ fontSize: "26px" }}>{srv.emoji}</span>
          <div>
            <h3 style={{ fontSize: "15px", fontWeight: 800, color: "#fff", margin: 0, fontFamily: "'Outfit', sans-serif" }}>{srv.title}</h3>
            <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" as const, marginTop: "4px" }}>
              {srv.tags.map(t => (
                <span key={t} style={{ fontSize: "9px", fontWeight: 700, color: srv.color, background: `${srv.color}20`, padding: "2px 6px", borderRadius: "6px", border: `1px solid ${srv.color}33` }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
        <p style={{ fontSize: "12.5px", color: "#94a3b8", lineHeight: 1.5, margin: 0 }}>{srv.desc}</p>
        <button onClick={() => onOpenContact(srv.title)} style={{ display: "flex", alignItems: "center", gap: "6px", background: "none", border: "none", color: srv.color, fontWeight: 700, fontSize: "12px", cursor: "pointer", padding: "2px 0", fontFamily: "inherit" }}>
          <span>Solicitar cotizacion â†’</span>
        </button>
      </div>
    ))}
  </div>
);

const ContactoTab: React.FC<{ onOpenContact: () => void }> = ({ onOpenContact }) => (
  <div style={{ padding: "24px 20px", overflowY: "auto", flex: 1, display: "flex", flexDirection: "column" as const, gap: "16px" }}>
    <div style={{ textAlign: "center" as const }}>
      <span style={{ fontSize: "10px", fontWeight: 800, letterSpacing: "1.5px", textTransform: "uppercase" as const, color: "#38bdf8" }}>CONTACTO</span>
      <h2 style={{ fontSize: "22px", fontWeight: 900, color: "#fff", margin: "4px 0 8px", fontFamily: "'Outfit', sans-serif" }}>Listo para empezar?</h2>
      <p style={{ fontSize: "13px", color: "#94a3b8", lineHeight: 1.6, margin: 0 }}>Cuentanos tu proyecto y te respondemos en menos de 24 horas.</p>
    </div>
    <button onClick={onOpenContact} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", background: "linear-gradient(135deg,#00d2ff 0%,#0070f3 100%)", color: "#fff", fontWeight: 700, fontSize: "15px", padding: "16px", borderRadius: "14px", border: "none", cursor: "pointer", boxShadow: "0 4px 24px rgba(0,210,255,0.4)", fontFamily: "inherit", width: "100%" }}>
      ðŸ’¬ Enviar Mensaje
    </button>
    <a href="https://wa.me/18496584957?text=Hola%2C%20me%20interesa%20una%20solucion%20de%20software" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", background: "#22c55e", color: "#fff", fontWeight: 700, fontSize: "15px", padding: "16px", borderRadius: "14px", textDecoration: "none", boxShadow: "0 4px 20px rgba(34,197,94,0.35)" }}>
      ðŸ“± WhatsApp Directo
    </a>
    <div style={{ display: "flex", flexDirection: "column" as const, gap: "10px" }}>
      {[{ icon: "ðŸ“ž", label: "Telefono", value: "+1 (849) 658-4957", href: "tel:+18496584957" }, { icon: "ðŸ“§", label: "Email", value: "hdia.software@gmail.com", href: "mailto:hdia.software@gmail.com" }, { icon: "ðŸ“", label: "Ubicacion", value: "Republica Dominicana", href: null }].map(c => (
        <div key={c.label} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "14px", background: "rgba(8,18,34,0.75)", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.07)" }}>
          <span style={{ fontSize: "20px" }}>{c.icon}</span>
          <div>
            <div style={{ fontSize: "10px", color: "#64748b", fontWeight: 600 }}>{c.label}</div>
            {c.href ? <a href={c.href} style={{ fontSize: "13px", color: "#e2e8f0", fontWeight: 600, textDecoration: "none", wordBreak: "break-all" as const }}>{c.value}</a> : <span style={{ fontSize: "13px", color: "#e2e8f0", fontWeight: 600 }}>{c.value}</span>}
          </div>
        </div>
      ))}
    </div>
    <p style={{ textAlign: "center" as const, fontSize: "11px", color: "#334155" }}>Â© 2024 HD IA SOFTWARE Â· Todos los derechos reservados</p>
  </div>
);

export const MobileTabLayout: React.FC<MobileTabLayoutProps> = ({ onOpenContact }) => {
  const [activeTab, setActiveTab] = useState<TabId>("inicio");
  const renderTab = () => {
    switch (activeTab) {
      case "inicio": return <InicioTab onTabChange={setActiveTab} onOpenContact={() => onOpenContact()} />;
      case "proyectos": return <ProyectosTab onOpenContact={p => onOpenContact(p)} />;
      case "servicios": return <ServiciosTab onOpenContact={s => onOpenContact(s)} />;
      case "contacto": return <ContactoTab onOpenContact={() => onOpenContact()} />;
    }
  };
  return (
    <div style={{ position: "fixed", inset: 0, background: "#020812", display: "flex", flexDirection: "column" as const, zIndex: 999 }}>
      <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 16px", background: "rgba(5,11,20,0.95)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(56,189,248,0.12)", flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ width: "36px", height: "36px", borderRadius: "50%", overflow: "hidden", boxShadow: "0 0 14px rgba(212,175,55,0.3)", flexShrink: 0 }}>
            <img src="/assets/hd-ia-logo.png" alt="HD IA SOFTWARE" style={{ width: "100%", height: "100%", objectFit: "contain" as const }} />
          </div>
          <div>
            <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: "13px", fontWeight: 800, color: "#fff" }}>HD IA <span style={{ color: "#38bdf8" }}>SOFTWARE</span></div>
            <div style={{ fontSize: "9px", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase" as const, color: "#d4af37" }}>Soluciones Digitales</div>
          </div>
        </div>
        <a href="https://wa.me/18496584957?text=Hola%2C%20me%20interesa%20una%20solucion%20de%20software" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "6px", background: "#22c55e", color: "#fff", fontWeight: 700, fontSize: "12px", padding: "8px 12px", borderRadius: "999px", textDecoration: "none", boxShadow: "0 2px 12px rgba(34,197,94,0.35)", flexShrink: 0 }}>
          <span>ðŸ“±</span><span>WhatsApp</span>
        </a>
      </header>
      <div style={{ flex: 1, display: "flex", flexDirection: "column" as const, overflow: "hidden" }}>{renderTab()}</div>
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-around", padding: "8px 10px 12px", background: "rgba(5,11,20,0.97)", backdropFilter: "blur(20px)", borderTop: "1px solid rgba(56,189,248,0.12)", flexShrink: 0 }}>
        {TABS.map(({ id, label, icon }) => {
          const isActive = activeTab === id;
          return (
            <button key={id} onClick={() => setActiveTab(id)} style={{ display: "flex", flexDirection: "column" as const, alignItems: "center", gap: "3px", background: "none", border: "none", cursor: "pointer", padding: "6px 10px", borderRadius: "12px", position: "relative" as const, minWidth: "60px" }}>
              <span style={{ fontSize: "20px" }}>{icon}</span>
              <span style={{ fontSize: "10px", fontWeight: isActive ? 700 : 500, color: isActive ? "#00d2ff" : "#475569", transition: "color 0.2s" }}>{label}</span>
              {isActive && <div style={{ position: "absolute", bottom: 0, width: "4px", height: "4px", borderRadius: "50%", background: "#00d2ff", boxShadow: "0 0 8px #00d2ff" }} />}
            </button>
          );
        })}
      </nav>
      <style>{`@keyframes mGlow { 0%,100% { box-shadow: 0 0 10px #00d2ff; } 50% { box-shadow: 0 0 20px #00d2ff; } }`}</style>
    </div>
  );
};