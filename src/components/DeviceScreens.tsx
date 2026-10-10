import React from "react";
import { CheckCircle2 } from "lucide-react";

export interface SystemData {
  id: number;
  name: string;
  category: string;
  badge: string;
  description: string;
}

export const SYSTEMS_LIST: SystemData[] = [
  {
    id: 1,
    name: "Landing Pages de Alta Conversión",
    category: "Conversión & Ventas",
    badge: "Optimizada para ROI",
    description: "Estructura persuasiva, velocidad ultrarrápida y diseño centrado en captar leads y clientes.",
  },
  {
    id: 2,
    name: "Sitios Web Empresariales",
    category: "Presencia Corporativa",
    badge: "Multi-dispositivo",
    description: "Plataformas web corporativas con catálogo, servicios, integración a WhatsApp y SEO técnico.",
  },
  {
    id: 3,
    name: "Dashboards Administrativos & Analítica",
    category: "Software & SaaS",
    badge: "Métricas en Tiempo Real",
    description: "Paneles de control en vivo, gráficos interactivos, facturación y reportes de rendimiento.",
  },
  {
    id: 4,
    name: "Sistemas de Gestión & Automatización",
    category: "Operaciones & Control",
    badge: "Flujos Automatizados",
    description: "Agendas, gestión de clientes, firma digital de documentos y notificaciones en tiempo real.",
  },
  {
    id: 5,
    name: "Apps Móviles Nativas & Híbridas",
    category: "iOS & Android",
    badge: "Rendimiento Nativo",
    description: "Aplicaciones con tema oscuro OLED, almacenamiento en nube, notificaciones push y offline-first.",
  },
];

// Pantalla para la Laptop
export const LaptopScreenContent: React.FC<{ activeIndex: number }> = ({ activeIndex }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#080f1d",
        color: "#ffffff",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        fontSize: "11px",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        userSelect: "none",
      }}
    >
      {/* Top Browser / OS Bar */}
      <div
        style={{
          background: "#0c172a",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          padding: "6px 12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexShrink: 0,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#ef4444" }} />
          <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#f59e0b" }} />
          <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#10b981" }} />
          <div
            style={{
              marginLeft: "12px",
              background: "rgba(255, 255, 255, 0.06)",
              borderRadius: "4px",
              padding: "2px 14px",
              fontSize: "9px",
              color: "#94a3b8",
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <span style={{ color: "#38bdf8" }}>https://</span>hd-ia-software.app/{SYSTEMS_LIST[activeIndex].category.toLowerCase().replace(/[^a-z]/g, "")}
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "9px", color: "#64748b" }}>
          <span style={{ color: "#10b981", fontWeight: 700 }}>● SISTEMA ACTIVO</span>
        </div>
      </div>

      {/* Screen Body with dynamic system state */}
      <div style={{ flex: 1, padding: "12px", overflowY: "hidden", position: "relative" }}>
        {activeIndex === 0 && (
          /* SYSTEM 1: LANDING PAGE */
          <div style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <div style={{ width: "16px", height: "16px", borderRadius: "4px", background: "#00d2ff" }} />
                <span style={{ fontWeight: 800, fontSize: "11px", letterSpacing: "0.5px" }}>NEXUS <span style={{ color: "#38bdf8" }}>CONVERT</span></span>
              </div>
              <div style={{ display: "flex", gap: "10px", fontSize: "9px", color: "#94a3b8" }}>
                <span>Características</span>
                <span>Precios</span>
                <span style={{ color: "#00d2ff", fontWeight: 700 }}>Demo Gratis</span>
              </div>
            </div>

            <div style={{ textAlign: "center", margin: "10px 0" }}>
              <span style={{ fontSize: "8px", background: "rgba(0, 210, 255, 0.15)", color: "#00d2ff", padding: "2px 8px", borderRadius: "10px", fontWeight: 700 }}>
                🚀 NUEVA GENERACIÓN 2026
              </span>
              <h4 style={{ fontSize: "15px", fontWeight: 900, marginTop: "4px", color: "#ffffff", letterSpacing: "-0.3px" }}>
                Multiplica tus ventas con tecnología inteligente
              </h4>
              <p style={{ fontSize: "9.5px", color: "#94a3b8", maxWidth: "80%", margin: "4px auto" }}>
                Landing pages ultrarrápidas con diseño cinemático que convierten visitas en clientes.
              </p>
              <div style={{ display: "flex", justifyContent: "center", gap: "6px", marginTop: "8px" }}>
                <div style={{ background: "linear-gradient(90deg, #00d2ff, #0070f3)", padding: "4px 12px", borderRadius: "12px", fontSize: "9px", fontWeight: 800, color: "#fff" }}>
                  Comenzar prueba →
                </div>
                <div style={{ background: "rgba(255,255,255,0.08)", padding: "4px 10px", borderRadius: "12px", fontSize: "9px", color: "#cbd5e1" }}>
                  Ver video
                </div>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "6px" }}>
              <div style={{ background: "rgba(255, 255, 255, 0.04)", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "8px", padding: "8px", textAlign: "center" }}>
                <span style={{ fontSize: "14px", fontWeight: 900, color: "#00d2ff" }}>+340%</span>
                <p style={{ fontSize: "8px", color: "#94a3b8" }}>Tasa de conversión</p>
              </div>
              <div style={{ background: "rgba(255, 255, 255, 0.04)", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "8px", padding: "8px", textAlign: "center" }}>
                <span style={{ fontSize: "14px", fontWeight: 900, color: "#10b981" }}>0.3s</span>
                <p style={{ fontSize: "8px", color: "#94a3b8" }}>Carga ultraveloz</p>
              </div>
              <div style={{ background: "rgba(255, 255, 255, 0.04)", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "8px", padding: "8px", textAlign: "center" }}>
                <span style={{ fontSize: "14px", fontWeight: 900, color: "#f59e0b" }}>99.9%</span>
                <p style={{ fontSize: "8px", color: "#94a3b8" }}>Disponibilidad</p>
              </div>
            </div>
          </div>
        )}

        {activeIndex === 1 && (
          /* SYSTEM 2: SITIO WEB EMPRESARIAL */
          <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(255,255,255,0.06)", paddingBottom: "6px", marginBottom: "8px" }}>
              <span style={{ fontWeight: 800, fontSize: "11px", color: "#38bdf8" }}>PORTAL CORPORATIVO GLOBAL</span>
              <span style={{ fontSize: "9px", color: "#94a3b8" }}>Empresas • Servicios • Soporte</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "10px", flex: 1 }}>
              <div style={{ background: "rgba(255,255,255,0.03)", borderRadius: "8px", padding: "10px", border: "1px solid rgba(255,255,255,0.06)" }}>
                <span style={{ fontSize: "8px", color: "#38bdf8", fontWeight: 700, textTransform: "uppercase" }}>Solución Integral</span>
                <h5 style={{ fontSize: "12px", fontWeight: 800, marginTop: "2px" }}>Infraestructura Cloud y Presencia Digital</h5>
                <p style={{ fontSize: "8.5px", color: "#94a3b8", marginTop: "4px", lineHeight: "1.3" }}>
                  Diseño de arquitectura escalable, catálogo interactivo con sincronización a WhatsApp y base de datos relacional PostgreSQL.
                </p>
                <div style={{ display: "flex", gap: "6px", marginTop: "10px" }}>
                  <span style={{ fontSize: "7.5px", background: "rgba(56, 189, 248, 0.15)", color: "#38bdf8", padding: "2px 6px", borderRadius: "4px" }}>Multi-idioma</span>
                  <span style={{ fontSize: "7.5px", background: "rgba(16, 185, 129, 0.15)", color: "#10b981", padding: "2px 6px", borderRadius: "4px" }}>SSL Certificado</span>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <div style={{ background: "rgba(2, 132, 199, 0.12)", border: "1px solid rgba(56,189,248,0.2)", borderRadius: "6px", padding: "6px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "8px" }}>
                    <span style={{ fontWeight: 700, color: "#38bdf8" }}>Catálogo en Vivo</span>
                    <span>142 productos</span>
                  </div>
                  <div style={{ height: "4px", background: "rgba(255,255,255,0.1)", borderRadius: "2px", marginTop: "4px" }}>
                    <div style={{ width: "85%", height: "100%", background: "#00d2ff", borderRadius: "2px" }} />
                  </div>
                </div>

                <div style={{ background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "6px", padding: "6px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "8px" }}>
                    <span style={{ fontWeight: 700, color: "#10b981" }}>Tráfico Mensual</span>
                    <span>54,200 visitas</span>
                  </div>
                  <div style={{ height: "4px", background: "rgba(255,255,255,0.1)", borderRadius: "2px", marginTop: "4px" }}>
                    <div style={{ width: "68%", height: "100%", background: "#10b981", borderRadius: "2px" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeIndex === 2 && (
          /* SYSTEM 3: DASHBOARD ADMINISTRATIVO */
          <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
              <div>
                <span style={{ fontWeight: 800, fontSize: "12px", color: "#fff" }}>PANEL GENERAL DE CONTROL</span>
                <span style={{ fontSize: "8.5px", color: "#64748b", display: "block" }}>Métricas en tiempo real</span>
              </div>
              <div style={{ display: "flex", gap: "6px" }}>
                <span style={{ background: "rgba(16, 185, 129, 0.15)", color: "#10b981", fontSize: "8.5px", padding: "2px 8px", borderRadius: "10px", fontWeight: 700 }}>
                  ↑ 24.8% este mes
                </span>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "6px", marginBottom: "10px" }}>
              <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "6px", padding: "8px" }}>
                <span style={{ fontSize: "8px", color: "#94a3b8" }}>Ingresos Totales</span>
                <p style={{ fontSize: "13px", fontWeight: 900, color: "#00d2ff", marginTop: "2px" }}>$48,920.00</p>
              </div>
              <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "6px", padding: "8px" }}>
                <span style={{ fontSize: "8px", color: "#94a3b8" }}>Usuarios Activos</span>
                <p style={{ fontSize: "13px", fontWeight: 900, color: "#10b981", marginTop: "2px" }}>1,482</p>
              </div>
              <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "6px", padding: "8px" }}>
                <span style={{ fontSize: "8px", color: "#94a3b8" }}>Suscripciones Pro</span>
                <p style={{ fontSize: "13px", fontWeight: 900, color: "#f59e0b", marginTop: "2px" }}>324</p>
              </div>
            </div>

            {/* Simulated Live SVG Line Chart */}
            <div style={{ flex: 1, background: "rgba(0, 0, 0, 0.25)", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.06)", padding: "8px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "8px", color: "#94a3b8" }}>
                <span>Flujo de Operaciones (Semanal)</span>
                <span style={{ color: "#00d2ff" }}>● En vivo</span>
              </div>
              <svg viewBox="0 0 300 70" style={{ width: "100%", height: "55px", overflow: "visible" }}>
                <defs>
                  <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#00d2ff" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#00d2ff" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <path d="M 0 50 Q 40 20, 80 40 T 160 15 T 240 30 T 300 10 L 300 70 L 0 70 Z" fill="url(#chartGrad)" />
                <path d="M 0 50 Q 40 20, 80 40 T 160 15 T 240 30 T 300 10" fill="none" stroke="#00d2ff" strokeWidth="2.5" />
                <circle cx="300" cy="10" r="3" fill="#00d2ff" />
              </svg>
            </div>
          </div>
        )}

        {activeIndex === 3 && (
          /* SYSTEM 4: SISTEMA DE GESTION & FIRMAS */
          <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
              <span style={{ fontWeight: 800, fontSize: "11px", color: "#10b981" }}>SISTEMA DE SERVICIOS & FIRMA DIGITAL</span>
              <span style={{ background: "rgba(16,185,129,0.15)", color: "#10b981", fontSize: "8px", padding: "2px 6px", borderRadius: "10px", fontWeight: 700 }}>
                100% ONLINE
              </span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "6px", flex: 1 }}>
              <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: "6px", padding: "8px", border: "1px solid rgba(255,255,255,0.08)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <span style={{ fontWeight: 700, fontSize: "10px" }}>Orden #SRV-9041 • Mantenimiento</span>
                  <p style={{ fontSize: "8px", color: "#94a3b8" }}>Cliente: Carlos Mendoza • Santo Domingo</p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <span style={{ background: "rgba(16,185,129,0.15)", color: "#10b981", fontSize: "8px", padding: "2px 6px", borderRadius: "4px", fontWeight: 700 }}>
                    ✓ FIRMADO
                  </span>
                  <p style={{ fontSize: "7.5px", color: "#64748b", marginTop: "2px" }}>PDF generado</p>
                </div>
              </div>

              <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: "6px", padding: "8px", border: "1px solid rgba(255,255,255,0.08)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <span style={{ fontWeight: 700, fontSize: "10px" }}>Orden #SRV-9042 • Instalación Split</span>
                  <p style={{ fontSize: "8px", color: "#94a3b8" }}>Cliente: Dra. Sofía Valdés • Santiago</p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <span style={{ background: "rgba(56,189,248,0.15)", color: "#38bdf8", fontSize: "8px", padding: "2px 6px", borderRadius: "4px", fontWeight: 700 }}>
                    EN PROCESO
                  </span>
                  <p style={{ fontSize: "7.5px", color: "#64748b", marginTop: "2px" }}>En camino</p>
                </div>
              </div>

              <div style={{ background: "rgba(2, 132, 199, 0.08)", borderRadius: "6px", padding: "6px 8px", border: "1px dashed rgba(56,189,248,0.3)", display: "flex", alignItems: "center", gap: "6px", marginTop: "auto" }}>
                <CheckCircle2 size={14} color="#00d2ff" />
                <span style={{ fontSize: "8.5px", color: "#94a3b8" }}>Sincronización instantánea con Supabase Realtime y WhatsApp Bot</span>
              </div>
            </div>
          </div>
        )}

        {activeIndex === 4 && (
          /* SYSTEM 5: SUITE DE APPS & IA */
          <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
              <span style={{ fontWeight: 800, fontSize: "11px", color: "#a855f7" }}>MOTOR DE INTELIGENCIA & WORKFLOWS</span>
              <span style={{ fontSize: "8.5px", color: "#94a3b8" }}>IA Generativa + API Webhooks</span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", flex: 1 }}>
              <div style={{ background: "rgba(168, 85, 247, 0.08)", border: "1px solid rgba(168, 85, 247, 0.2)", borderRadius: "8px", padding: "8px" }}>
                <span style={{ fontSize: "8px", color: "#c084fc", fontWeight: 700 }}>Agente Autónomo</span>
                <p style={{ fontSize: "11px", fontWeight: 800, marginTop: "2px" }}>Procesador de Vouchers</p>
                <p style={{ fontSize: "8px", color: "#94a3b8", marginTop: "4px" }}>Extracción OCR de datos bancarios con precisión de 99.8%.</p>
                <div style={{ marginTop: "8px", fontSize: "7.5px", background: "rgba(255,255,255,0.06)", padding: "3px 6px", borderRadius: "4px" }}>
                  Status: 🟢 Escuchando eventos
                </div>
              </div>

              <div style={{ background: "rgba(56, 189, 248, 0.08)", border: "1px solid rgba(56, 189, 248, 0.2)", borderRadius: "8px", padding: "8px" }}>
                <span style={{ fontSize: "8px", color: "#38bdf8", fontWeight: 700 }}>Automatización Push</span>
                <p style={{ fontSize: "11px", fontWeight: 800, marginTop: "2px" }}>Recordatorio 5 Días</p>
                <p style={{ fontSize: "8px", color: "#94a3b8", marginTop: "4px" }}>Notificación push inteligente y recordatorio por WhatsApp.</p>
                <div style={{ marginTop: "8px", fontSize: "7.5px", background: "rgba(255,255,255,0.06)", padding: "3px 6px", borderRadius: "4px" }}>
                  Cola activa: 18 avisos
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Pantalla para el Celular
export const PhoneScreenContent: React.FC<{ activeIndex: number }> = ({ activeIndex }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#050b14",
        color: "#ffffff",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        fontSize: "10px",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        userSelect: "none",
        padding: "8px 10px 14px",
      }}
    >
      {/* Top Mobile Status Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px", fontSize: "8px", color: "#94a3b8" }}>
        <span style={{ fontWeight: 800, color: "#fff" }}>9:41</span>
        <div style={{ width: "36px", height: "10px", background: "#000", borderRadius: "10px", margin: "0 auto" }} />
        <span>5G ●</span>
      </div>

      {/* Dynamic Mobile Interface according to selected system */}
      {activeIndex === 0 && (
        <div style={{ display: "flex", flexDirection: "column", gap: "8px", flex: 1 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontWeight: 800, fontSize: "10px", color: "#00d2ff" }}>HD IA MOBILE</span>
            <span style={{ fontSize: "7.5px", color: "#64748b" }}>● PRO</span>
          </div>
          <div style={{ background: "rgba(0, 210, 255, 0.08)", border: "1px solid rgba(0, 210, 255, 0.2)", borderRadius: "8px", padding: "8px", textAlign: "center" }}>
            <p style={{ fontSize: "11px", fontWeight: 800, color: "#fff" }}>Impulsa tu Marca</p>
            <p style={{ fontSize: "7.5px", color: "#94a3b8", margin: "2px 0 6px" }}>Soluciones móviles optimizadas</p>
            <div style={{ background: "#00d2ff", color: "#050b14", fontWeight: 800, fontSize: "8px", padding: "4px", borderRadius: "6px" }}>
              Ver Oferta Especial
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.03)", borderRadius: "6px", padding: "6px", border: "1px solid rgba(255,255,255,0.06)" }}>
            <span style={{ fontSize: "8px", fontWeight: 700 }}>⚡ Rendimiento 100/100</span>
            <p style={{ fontSize: "7px", color: "#94a3b8" }}>Google Lighthouse Score A+</p>
          </div>
        </div>
      )}

      {activeIndex === 1 && (
        <div style={{ display: "flex", flexDirection: "column", gap: "6px", flex: 1 }}>
          <span style={{ fontSize: "9px", fontWeight: 800, color: "#38bdf8" }}>Catálogo Móvil</span>
          <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: "6px", padding: "6px", border: "1px solid rgba(255,255,255,0.06)" }}>
            <span style={{ fontSize: "8.5px", fontWeight: 700 }}>Servicio Enterprise</span>
            <p style={{ fontSize: "7px", color: "#94a3b8" }}>Diseño UI/UX + Backend</p>
            <span style={{ fontSize: "8px", color: "#10b981", fontWeight: 800 }}>Disponible</span>
          </div>
          <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: "6px", padding: "6px", border: "1px solid rgba(255,255,255,0.06)" }}>
            <span style={{ fontSize: "8.5px", fontWeight: 700 }}>E-Commerce & Pagos</span>
            <p style={{ fontSize: "7px", color: "#94a3b8" }}>Stripe + PayPal + Cripto</p>
            <span style={{ fontSize: "8px", color: "#10b981", fontWeight: 800 }}>Integrado</span>
          </div>
        </div>
      )}

      {activeIndex === 2 && (
        <div style={{ display: "flex", flexDirection: "column", gap: "6px", flex: 1 }}>
          <span style={{ fontSize: "9px", fontWeight: 800, color: "#00d2ff" }}>KPIs del Negocio</span>
          <div style={{ background: "rgba(0, 210, 255, 0.1)", borderRadius: "6px", padding: "6px", textAlign: "center" }}>
            <span style={{ fontSize: "7px", color: "#94a3b8" }}>Ventas de Hoy</span>
            <p style={{ fontSize: "14px", fontWeight: 900, color: "#00d2ff" }}>$3,420</p>
          </div>
          <div style={{ background: "rgba(16, 185, 129, 0.1)", borderRadius: "6px", padding: "6px", textAlign: "center" }}>
            <span style={{ fontSize: "7px", color: "#94a3b8" }}>Nuevos Clientes</span>
            <p style={{ fontSize: "14px", fontWeight: 900, color: "#10b981" }}>+28</p>
          </div>
        </div>
      )}

      {activeIndex === 3 && (
        <div style={{ display: "flex", flexDirection: "column", gap: "6px", flex: 1 }}>
          <span style={{ fontSize: "9px", fontWeight: 800, color: "#10b981" }}>Constancia de Firma</span>
          <div style={{ background: "#ffffff", borderRadius: "6px", padding: "6px", textAlign: "center" }}>
            <span style={{ fontSize: "7px", color: "#64748b", textTransform: "uppercase" }}>Firma Digital</span>
            <svg viewBox="0 0 100 30" style={{ width: "100%", height: "26px" }}>
              <path d="M 10 20 Q 30 5, 50 15 T 90 10" fill="none" stroke="#0f172a" strokeWidth="2" />
            </svg>
            <span style={{ fontSize: "6.5px", color: "#10b981", fontWeight: 800 }}>✓ VERIFICADA</span>
          </div>
          <div style={{ background: "#25d366", color: "#fff", padding: "4px", borderRadius: "6px", textAlign: "center", fontSize: "7.5px", fontWeight: 800 }}>
            Enviar por WhatsApp
          </div>
        </div>
      )}

      {activeIndex === 4 && (
        <div style={{ display: "flex", flexDirection: "column", gap: "6px", flex: 1 }}>
          <span style={{ fontSize: "9px", fontWeight: 800, color: "#c084fc" }}>App Móvil Nativa</span>
          <div style={{ background: "rgba(168,85,247,0.1)", borderRadius: "6px", padding: "6px", textAlign: "center" }}>
            <span style={{ fontSize: "7px", color: "#c084fc" }}>Modo OLED Puro</span>
            <p style={{ fontSize: "11px", fontWeight: 800, color: "#fff" }}>React Native</p>
            <p style={{ fontSize: "7px", color: "#94a3b8" }}>60 FPS Garantizados</p>
          </div>
          <div style={{ background: "rgba(255,255,255,0.05)", borderRadius: "6px", padding: "4px 6px", fontSize: "7.5px", color: "#cbd5e1" }}>
            ● Notificaciones Push Activas
          </div>
        </div>
      )}

      {/* Bottom Bar indicator */}
      <div style={{ width: "40px", height: "3px", background: "rgba(255,255,255,0.3)", borderRadius: "2px", margin: "auto auto 0 auto" }} />
    </div>
  );
};

