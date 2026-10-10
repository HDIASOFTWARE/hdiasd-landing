import React, { useState } from "react";
import { X, Send, MessageCircle, CheckCircle2, Phone, Mail } from "lucide-react";

interface ContactModalProps {
  visible: boolean;
  initialService?: string;
  onClose: () => void;
}

const OFFICIAL_PHONE = "+1.849.658.4957";
const OFFICIAL_WHATSAPP_LINK = "https://wa.me/18496584957";
const OFFICIAL_EMAIL = "hdiasolucionesdigitales@gmail.com";

export const ContactModal: React.FC<ContactModalProps> = ({
  visible,
  initialService = "",
  onClose,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [serviceType, setServiceType] = useState(initialService || "Landing Page de Alto Impacto");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!visible) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSendWhatsApp = () => {
    const text = encodeURIComponent(
      `¡Hola HD IA SOFTWARE!\n\nMi nombre es: ${name || "Cliente"}\nTeléfono: ${phone || "No especificado"}\nInterés: ${serviceType}\n\nDetalle: ${message || "Deseo cotizar un proyecto digital."}`
    );
    window.open(`${OFFICIAL_WHATSAPP_LINK}?text=${text}`, "_blank");
    onClose();
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 10000,
        background: "rgba(3, 8, 18, 0.88)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "500px",
          background: "linear-gradient(160deg, rgba(8, 20, 38, 0.98) 0%, rgba(4, 10, 20, 0.99) 100%)",
          border: "1.5px solid rgba(56, 189, 248, 0.3)",
          borderRadius: "22px",
          padding: "26px",
          boxShadow: "0 25px 60px rgba(0, 0, 0, 0.85), 0 0 40px rgba(0, 210, 255, 0.2)",
          position: "relative",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            background: "rgba(255, 255, 255, 0.06)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            color: "#94a3b8",
            width: "34px",
            height: "34px",
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

        {submitted ? (
          <div style={{ textAlign: "center", padding: "30px 10px" }}>
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                background: "rgba(16, 185, 129, 0.15)",
                border: "2px solid #10b981",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 16px",
                color: "#10b981",
              }}
            >
              <CheckCircle2 size={32} />
            </div>
            <h3 style={{ fontSize: "21px", fontWeight: 800, color: "#fff", marginBottom: "8px" }}>
              ¡Solicitud Recibida!
            </h3>
            <p style={{ fontSize: "13.5px", color: "#94a3b8", lineHeight: 1.6, marginBottom: "20px" }}>
              Nos pondremos en contacto contigo a la brevedad. Para respuesta inmediata, comunícate directo por WhatsApp:
            </p>
            <button
              onClick={handleSendWhatsApp}
              className="btn-primary"
              style={{ width: "100%", padding: "12px 20px", fontSize: "14px" }}
            >
              <MessageCircle size={18} />
              <span>Abrir WhatsApp ({OFFICIAL_PHONE})</span>
            </button>
          </div>
        ) : (
          <>
            <div style={{ marginBottom: "20px" }}>
              <span
                style={{
                  fontSize: "10.5px",
                  fontWeight: 800,
                  letterSpacing: "1.2px",
                  textTransform: "uppercase",
                  color: "#00d2ff",
                  fontFamily: "'Outfit', sans-serif",
                }}
              >
                CONTACTO DIRECTO &amp; COTIZACIÓN
              </span>
              <h3
                style={{
                  fontSize: "22px",
                  fontWeight: 900,
                  color: "#ffffff",
                  margin: "4px 0 6px",
                  fontFamily: "'Outfit', sans-serif",
                }}
              >
                Iniciemos tu proyecto
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px", fontSize: "12px", color: "#94a3b8" }}>
                <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <Phone size={13} color="#00d2ff" /> WhatsApp Oficial: <strong style={{ color: "#38bdf8" }}>{OFFICIAL_PHONE}</strong>
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <Mail size={13} color="#d4af37" /> Correo: <strong style={{ color: "#e2e8f0" }}>{OFFICIAL_EMAIL}</strong>
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div>
                <label style={{ fontSize: "11.5px", fontWeight: 700, color: "#cbd5e1", display: "block", marginBottom: "4px" }}>
                  Nombre o Empresa *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Tu nombre o empresa"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    width: "100%",
                    background: "rgba(5, 12, 22, 0.85)",
                    border: "1px solid rgba(56, 189, 248, 0.2)",
                    borderRadius: "10px",
                    padding: "9px 12px",
                    color: "#ffffff",
                    fontSize: "13px",
                    outline: "none",
                  }}
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                <div>
                  <label style={{ fontSize: "11.5px", fontWeight: 700, color: "#cbd5e1", display: "block", marginBottom: "4px" }}>
                    WhatsApp / Teléfono *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (849) 000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    style={{
                      width: "100%",
                      background: "rgba(5, 12, 22, 0.85)",
                      border: "1px solid rgba(56, 189, 248, 0.2)",
                      borderRadius: "10px",
                      padding: "9px 12px",
                      color: "#ffffff",
                      fontSize: "13px",
                      outline: "none",
                    }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: "11.5px", fontWeight: 700, color: "#cbd5e1", display: "block", marginBottom: "4px" }}>
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    placeholder="correo@ejemplo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      width: "100%",
                      background: "rgba(5, 12, 22, 0.85)",
                      border: "1px solid rgba(56, 189, 248, 0.2)",
                      borderRadius: "10px",
                      padding: "9px 12px",
                      color: "#ffffff",
                      fontSize: "13px",
                      outline: "none",
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ fontSize: "11.5px", fontWeight: 700, color: "#cbd5e1", display: "block", marginBottom: "4px" }}>
                  Solución o Aplicación de Interés
                </label>
                <select
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                  style={{
                    width: "100%",
                    background: "rgba(5, 12, 22, 0.85)",
                    border: "1px solid rgba(56, 189, 248, 0.2)",
                    borderRadius: "10px",
                    padding: "9px 12px",
                    color: "#ffffff",
                    fontSize: "13px",
                    outline: "none",
                  }}
                >
                  <option value="Landing Page de Alto Impacto">Landing Page de Alto Impacto</option>
                  <option value="Sitio Web Corporativo">Sitio Web Corporativo</option>
                  <option value="App Móvil / Sistema Operativo">App Móvil / Sistema Operativo</option>
                  <option value="NauticOS App - Gestión Náutica">NauticOS App - Gestión Náutica &amp; Yates VIP</option>
                  <option value="CLIMUP - Climatización & Refrigeración">CLIMUP - Climatización &amp; Refrigeración</option>
                  <option value="TravelOS VIP - Plataforma de Viajes">TravelOS VIP - Plataforma de Viajes</option>
                  <option value="AutoOS - Rent a Car & Flotas">AutoOS - Rent a Car &amp; Flotas</option>
                  <option value="AI Voucher Parser & OCR">AI Voucher Parser &amp; OCR</option>
                  <option value="Otro Desarrollo a Medida">Otro Desarrollo a Medida</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: "11.5px", fontWeight: 700, color: "#cbd5e1", display: "block", marginBottom: "4px" }}>
                  Detalles o Requerimientos
                </label>
                <textarea
                  rows={2}
                  placeholder="Cuéntanos brevemente sobre tu proyecto o duda..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  style={{
                    width: "100%",
                    background: "rgba(5, 12, 22, 0.85)",
                    border: "1px solid rgba(56, 189, 248, 0.2)",
                    borderRadius: "10px",
                    padding: "9px 12px",
                    color: "#ffffff",
                    fontSize: "13px",
                    outline: "none",
                    resize: "none",
                  }}
                />
              </div>

              <div style={{ display: "flex", gap: "10px", marginTop: "4px" }}>
                <button
                  type="button"
                  onClick={handleSendWhatsApp}
                  style={{
                    flex: 1.2,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    background: "linear-gradient(135deg, #25d366 0%, #128c7e 100%)",
                    color: "#ffffff",
                    fontWeight: 700,
                    fontSize: "13px",
                    padding: "11px",
                    borderRadius: "10px",
                    border: "none",
                    cursor: "pointer",
                    boxShadow: "0 4px 15px rgba(37, 211, 102, 0.35)",
                  }}
                >
                  <MessageCircle size={16} />
                  <span>Enviar por WhatsApp</span>
                </button>

                <button
                  type="submit"
                  style={{
                    flex: 1,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                    background: "rgba(255, 255, 255, 0.06)",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    color: "#f8fafc",
                    fontWeight: 600,
                    fontSize: "13px",
                    padding: "11px",
                    borderRadius: "10px",
                    cursor: "pointer",
                  }}
                >
                  <Send size={14} />
                  <span>Enviar Formulario</span>
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
