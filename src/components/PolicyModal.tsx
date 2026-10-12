import React, { useState } from "react";
import { X, ShieldCheck, FileText, Lock, CheckCircle2, AlertCircle, Smartphone, ExternalLink } from "lucide-react";

export interface ProjectPolicyData {
  id: string;
  title: string;
  categoryLabel: string;
  badgeColor: string;
  version: string;
}

interface PolicyModalProps {
  isOpen: boolean;
  project: ProjectPolicyData | null;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({
  isOpen,
  project,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<"licencia" | "privacidad" | "apk" | "sla">("licencia");

  if (!isOpen || !project) return null;

  // Custom policies per application
  const getAppSpecificTerms = (id: string) => {
    switch (id) {
      case "nauticos":
        return {
          ambito: "Operaciones Náuticas, Fletamento Marítimo & Gestión de Yates",
          datosClave: "Bitácoras marítimas, inspección de motores, contratos de alquiler de yates y depósitos de garantía.",
          especial: "Los datos de telemetría y bitácora de navegación son propiedad del armador/agencia. NauticOS garantiza cifrado extremo en contratos con firma digital marítima.",
        };
      case "climup":
        return {
          ambito: "Servicios Técnicos de Climatización & Refrigeración",
          datosClave: "Órdenes de trabajo, firmas remotas de clientes, recordatorios automáticos y facturas en PDF.",
          especial: "El sistema protege las bases de clientes de las agencias de refrigeración mediante partición segura. Los respaldos de facturas son inmutables.",
        };
      case "autoos":
        return {
          ambito: "Control de Flotas Vehiculares & Agencias Rent-a-Car",
          datosClave: "Contratos de alquiler de vehículos, inspecciones fotográficas de entrega y retorno, depósitos de garantía.",
          especial: "Las fotografías y firmas de inspección quedan certificadas con marca temporal para validez jurídica contra siniestros o disputas de garantías.",
        };
      case "travelos":
        return {
          ambito: "SaaS Multi-Tenant para Agencias de Viajes y Turismo VIP",
          datosClave: "Itinerarios de vuelos, reservas de hoteles, vouchers de viaje y comisiones de agentes.",
          especial: "Aislamiento criptográfico estricto mediante PostgreSQL Row Level Security (RLS). Ninguna agencia puede acceder jamás a los datos de otra agencia.",
        };
      case "ai-parser":
        return {
          ambito: "Inteligencia Artificial, OCR & Auditoría Bancaria",
          datosClave: "Comprobantes de transferencia, referencias bancarias, montos y conciliación automática.",
          especial: "Procesamiento efímero en memoria volátil de alta seguridad: los comprobantes se analizan y se validan contra fraude sin retención no autorizada.",
        };
      default:
        return {
          ambito: "Software Empresarial & Aplicaciones Digitales",
          datosClave: "Bases de datos operativas, transacciones y perfiles empresariales.",
          especial: "Protegido por las directrices de licenciamiento oficial de HD IA SOFTWARE.",
        };
    }
  };

  const terms = getAppSpecificTerms(project.id);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 10000,
        background: "rgba(3, 8, 18, 0.88)",
        backdropFilter: "blur(22px)",
        WebkitBackdropFilter: "blur(22px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "18px",
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "680px",
          maxHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          background: "linear-gradient(160deg, rgba(8, 20, 38, 0.98) 0%, rgba(4, 10, 20, 0.99) 100%)",
          border: "1.5px solid rgba(0, 210, 255, 0.35)",
          borderRadius: "22px",
          boxShadow: "0 25px 70px rgba(0, 0, 0, 0.9), 0 0 50px rgba(0, 210, 255, 0.2)",
          overflow: "hidden",
          position: "relative",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            padding: "22px 26px 18px",
            borderBottom: "1px solid rgba(56, 189, 248, 0.16)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "rgba(5, 12, 24, 0.6)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "12px",
                background: "rgba(0, 210, 255, 0.12)",
                border: "1px solid rgba(0, 210, 255, 0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#00d2ff",
              }}
            >
              <ShieldCheck size={24} />
            </div>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ fontSize: "11px", fontWeight: 700, color: project.badgeColor, textTransform: "uppercase" }}>
                  {project.categoryLabel}
                </span>
                <span style={{ fontSize: "10px", color: "#64748b", fontWeight: 600 }}>• Políticas Oficiales</span>
              </div>
              <h3
                style={{
                  fontSize: "19px",
                  fontWeight: 800,
                  color: "#ffffff",
                  fontFamily: "'Outfit', sans-serif",
                  margin: "2px 0 0",
                }}
              >
                {project.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Cerrar modal"
            style={{
              background: "rgba(255, 255, 255, 0.06)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              color: "#94a3b8",
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Tab Navigation */}
        <div
          style={{
            display: "flex",
            gap: "8px",
            padding: "12px 24px",
            background: "rgba(4, 9, 18, 0.5)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
            overflowX: "auto",
          }}
        >
          {[
            { id: "licencia", label: "Licenciamiento", icon: FileText },
            { id: "privacidad", label: "Privacidad & RLS", icon: Lock },
            { id: "apk", label: "Descarga APK & Seguridad", icon: Smartphone },
            { id: "sla", label: "SLA & Soporte Oficial", icon: CheckCircle2 },
          ].map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "7px 14px",
                  borderRadius: "8px",
                  fontSize: "12.5px",
                  fontWeight: active ? 700 : 500,
                  background: active ? "rgba(0, 210, 255, 0.16)" : "transparent",
                  color: active ? "#00d2ff" : "#94a3b8",
                  border: active ? "1px solid rgba(0, 210, 255, 0.4)" : "1px solid transparent",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  whiteSpace: "nowrap",
                }}
              >
                <Icon size={14} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Modal Scrollable Content */}
        <div
          style={{
            padding: "24px 26px",
            overflowY: "auto",
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            color: "#cbd5e1",
            fontSize: "13.5px",
            lineHeight: 1.65,
          }}
        >
          {activeTab === "licencia" && (
            <>
              <div style={{ background: "rgba(0, 210, 255, 0.07)", border: "1px solid rgba(0, 210, 255, 0.22)", borderRadius: "12px", padding: "14px 18px" }}>
                <span style={{ fontSize: "11px", fontWeight: 800, color: "#38bdf8", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "4px" }}>
                  Régimen de Licencia Comercial
                </span>
                <p style={{ margin: 0, color: "#e2e8f0", fontSize: "13px" }}>
                  <strong>{project.title}</strong> es un producto de software privativo desarrollado por <strong>HD IA SOFTWARE</strong>. La adquisición o descarga de esta aplicación otorga un derecho de uso profesional para la automatización y gestión operativa del negocio adquiriente.
                </p>
              </div>

              <div>
                <h4 style={{ color: "#ffffff", fontSize: "14.5px", fontWeight: 700, marginBottom: "8px" }}>
                  1. Alcance de Uso Autorizado ({terms.ambito})
                </h4>
                <p style={{ margin: 0 }}>
                  El software está optimizado para entornos de producción empresarial. Se autoriza la instalación y uso en terminales móviles Android y dispositivos autorizados de la empresa contratante. Queda prohibida la descompilación o ingeniería inversa sin consentimiento de HD IA SOFTWARE.
                </p>
              </div>

              <div>
                <h4 style={{ color: "#ffffff", fontSize: "14.5px", fontWeight: 700, marginBottom: "8px" }}>
                  2. Inmutabilidad y Datos del Negocio
                </h4>
                <p style={{ margin: 0 }}>
                  {terms.especial}
                </p>
              </div>
            </>
          )}

          {activeTab === "privacidad" && (
            <>
              <div style={{ background: "rgba(16, 185, 129, 0.08)", border: "1px solid rgba(16, 185, 129, 0.25)", borderRadius: "12px", padding: "14px 18px" }}>
                <span style={{ fontSize: "11px", fontWeight: 800, color: "#10b981", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "4px" }}>
                  Garantía de Soberanía de Datos
                </span>
                <p style={{ margin: 0, color: "#e2e8f0", fontSize: "13px" }}>
                  Tus datos de negocio son 100% de tu propiedad. HD IA SOFTWARE no comercializa, no transfiere ni expone información confidencial de clientes, flotas o facturación.
                </p>
              </div>

              <div>
                <h4 style={{ color: "#ffffff", fontSize: "14.5px", fontWeight: 700, marginBottom: "8px" }}>
                  Protección Criptográfica & Aislamiento
                </h4>
                <p style={{ margin: 0 }}>
                  Todas las comunicaciones entre la aplicación móvil ({project.title}) y los servidores se realizan bajo cifrado <strong>TLS 1.3 / AES-256</strong>. La capa de persistencia implementa <strong>Row Level Security (RLS)</strong> en base de datos PostgreSQL, garantizando aislamiento total contra accesos no autorizados.
                </p>
              </div>

              <div>
                <h4 style={{ color: "#ffffff", fontSize: "14.5px", fontWeight: 700, marginBottom: "8px" }}>
                  Gestión de Información Operativa
                </h4>
                <p style={{ margin: 0 }}>
                  Información clave resguardada: <em>{terms.datosClave}</em>. En caso de desvinculación, el cliente tiene derecho a la exportación íntegra de sus datos.
                </p>
              </div>
            </>
          )}

          {activeTab === "apk" && (
            <>
              <div style={{ background: "rgba(56, 189, 248, 0.08)", border: "1px solid rgba(56, 189, 248, 0.25)", borderRadius: "12px", padding: "14px 18px" }}>
                <span style={{ fontSize: "11px", fontWeight: 800, color: "#38bdf8", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "4px" }}>
                  Seguridad en la Descarga APK
                </span>
                <p style={{ margin: 0, color: "#e2e8f0", fontSize: "13px" }}>
                  Cada compilación de <strong>{project.title}</strong> distribuida en esta plataforma es firmada digitalmente con certificados oficiales y analizada contra malware antes de su despliegue.
                </p>
              </div>

              <div>
                <h4 style={{ color: "#ffffff", fontSize: "14.5px", fontWeight: 700, marginBottom: "8px" }}>
                  Instalación en Dispositivos Android
                </h4>
                <p style={{ margin: 0 }}>
                  El archivo APK se descarga directamente para instalación inmediata en cualquier smartphone o tablet Android. Cuenta con compatibilidad optimizada, bajo consumo de batería y modo sin conexión (Offline-Ready) para operaciones en terreno.
                </p>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", background: "rgba(245, 158, 11, 0.08)", border: "1px solid rgba(245, 158, 11, 0.25)", padding: "12px 16px", borderRadius: "10px" }}>
                <AlertCircle size={18} color="#f59e0b" style={{ flexShrink: 0, marginTop: "2px" }} />
                <span style={{ fontSize: "12px", color: "#fcd34d" }}>
                  Las actualizaciones son continuas: cuando se despliegue una nueva mejora del software, estará disponible para descarga inmediata desde esta misma sección.
                </span>
              </div>
            </>
          )}

          {activeTab === "sla" && (
            <>
              <div style={{ background: "rgba(212, 175, 55, 0.08)", border: "1px solid rgba(212, 175, 55, 0.25)", borderRadius: "12px", padding: "14px 18px" }}>
                <span style={{ fontSize: "11px", fontWeight: 800, color: "#d4af37", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "4px" }}>
                  Acuerdo de Nivel de Servicio (SLA) & Soporte
                </span>
                <p style={{ margin: 0, color: "#e2e8f0", fontSize: "13px" }}>
                  Garantía de operatividad 99.9% para infraestructuras Cloud y canal de atención directa para solución de incidencias operativas.
                </p>
              </div>

              <div>
                <h4 style={{ color: "#ffffff", fontSize: "14.5px", fontWeight: 700, marginBottom: "8px" }}>
                  Canales de Asistencia Directa
                </h4>
                <p style={{ margin: 0 }}>
                  Soporte técnico, personalización de módulos e integración con APIs externas disponibles de forma prioritaria a través de nuestro WhatsApp oficial (+1.849.658.4957) o correo (hdiaserviciosdigitales@gmail.com).
                </p>
              </div>
            </>
          )}
        </div>

        {/* Modal Footer */}
        <div
          style={{
            padding: "16px 26px",
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "rgba(3, 8, 16, 0.95)",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <span style={{ fontSize: "11.5px", color: "#64748b" }}>
            HD IA SOFTWARE • República Dominicana & Internacional
          </span>

          <div style={{ display: "flex", gap: "10px" }}>
            <a
              href="https://wa.me/18496584957?text=Hola,%20tengo%20una%20consulta%20sobre%20las%20pol%C3%ADticas%20de%20la%20aplicaci%C3%B3n."
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                background: "rgba(56, 189, 248, 0.1)",
                border: "1px solid rgba(56, 189, 248, 0.25)",
                color: "#38bdf8",
                fontSize: "12px",
                fontWeight: 600,
                padding: "8px 14px",
                borderRadius: "8px",
                textDecoration: "none",
              }}
            >
              <span>Consultar por WhatsApp</span>
              <ExternalLink size={13} />
            </a>

            <button
              onClick={onClose}
              style={{
                background: "linear-gradient(135deg, #00d2ff 0%, #0070f3 100%)",
                border: "none",
                color: "#ffffff",
                fontSize: "12px",
                fontWeight: 700,
                padding: "8px 18px",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Entendido
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
