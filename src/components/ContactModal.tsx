import React, { useState } from "react";
import { X, Send, MessageCircle, CheckCircle2 } from "lucide-react";

interface ContactModalProps {
  visible: boolean;
  initialService?: string;
  onClose: () => void;
}

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
    window.open(`https://wa.me/18296708000?text=${text}`, "_blank");
    onClose();
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 10000,
        background: "rgba(5, 11, 20, 0.85)",
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
          maxWidth: "520px",
          background: "rgba(9, 21, 39, 0.95)",
          border: "1px solid rgba(56, 189, 248, 0.3)",
          borderRadius: "24px",
          padding: "32px",
          boxShadow: "0 25px 60px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 210, 255, 0.2)",
          position: "relative",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            background: "rgba(255, 255, 255, 0.08)",
            border: "none",
            color: "#94a3b8",
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <X size={18} />
        </button>

        {submitted ? (
          <div style={{ textAlign: "center", padding: "30px 10px" }}>
            <div
              style={{
                width: "64px",
                height: "64px",
                borderRadius: "50%",
                background: "rgba(16, 185, 129, 0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 20px",
              }}
            >
              <CheckCircle2 size={36} color="#10b981" />
            </div>
            <h3 style={{ fontSize: "22px", fontWeight: 800, color: "#fff", marginBottom: "8px" }}>
              ¡Solicitud Recibida con Éxito!
            </h3>
            <p style={{ fontSize: "14px", color: "#94a3b8", marginBottom: "24px" }}>
              Gracias {name}. Un especialista de HD IA SOFTWARE te contactará en menos de 2 horas.
            </p>
            <button onClick={onClose} className="btn-primary" style={{ width: "100%" }}>
              Entendido
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "22px" }}>
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 800,
                  color: "#00d2ff",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                }}
              >
                HABLEMOS DE TU PROYECTO
              </span>
              <h3
                style={{
                  fontSize: "22px",
                  fontWeight: 800,
                  color: "#fff",
                  marginTop: "4px",
                  fontFamily: "'Outfit', sans-serif",
                }}
              >
                Cuéntanos tu idea
              </h3>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div>
                <label style={{ fontSize: "12px", color: "#cbd5e1", fontWeight: 600, display: "block", marginBottom: "4px" }}>
                  Tu Nombre o Empresa *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej: Carlos Gómez"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    width: "100%",
                    background: "rgba(5, 11, 20, 0.8)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    borderRadius: "10px",
                    padding: "10px 14px",
                    color: "#fff",
                    fontSize: "14px",
                    outline: "none",
                  }}
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                <div>
                  <label style={{ fontSize: "12px", color: "#cbd5e1", fontWeight: 600, display: "block", marginBottom: "4px" }}>
                    WhatsApp / Teléfono *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (829) 000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    style={{
                      width: "100%",
                      background: "rgba(5, 11, 20, 0.8)",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      borderRadius: "10px",
                      padding: "10px 14px",
                      color: "#fff",
                      fontSize: "14px",
                      outline: "none",
                    }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: "12px", color: "#cbd5e1", fontWeight: 600, display: "block", marginBottom: "4px" }}>
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    placeholder="contacto@empresa.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      width: "100%",
                      background: "rgba(5, 11, 20, 0.8)",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      borderRadius: "10px",
                      padding: "10px 14px",
                      color: "#fff",
                      fontSize: "14px",
                      outline: "none",
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ fontSize: "12px", color: "#cbd5e1", fontWeight: 600, display: "block", marginBottom: "4px" }}>
                  ¿Qué solución necesitas?
                </label>
                <select
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                  style={{
                    width: "100%",
                    background: "rgba(5, 11, 20, 0.9)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    borderRadius: "10px",
                    padding: "10px 14px",
                    color: "#fff",
                    fontSize: "14px",
                    outline: "none",
                  }}
                >
                  <option value="Landing Page de Alto Impacto">Landing Page de Alto Impacto</option>
                  <option value="Sitio Web Empresarial">Sitio Web Empresarial</option>
                  <option value="App Móvil (Android / iOS)">App Móvil (Android / iOS)</option>
                  <option value="Dashboard & Software a Medida">Dashboard & Software a Medida</option>
                  <option value="Integración con IA y Automatización">Integración con IA y Automatización</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: "12px", color: "#cbd5e1", fontWeight: 600, display: "block", marginBottom: "4px" }}>
                  Detalles de tu idea
                </label>
                <textarea
                  rows={3}
                  placeholder="Cuéntanos objetivos, funciones clave o fecha estimada..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  style={{
                    width: "100%",
                    background: "rgba(5, 11, 20, 0.8)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    borderRadius: "10px",
                    padding: "10px 14px",
                    color: "#fff",
                    fontSize: "14px",
                    outline: "none",
                    resize: "none",
                  }}
                />
              </div>

              {/* Action Buttons */}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "10px" }}>
                <button
                  type="button"
                  onClick={handleSendWhatsApp}
                  style={{
                    width: "100%",
                    background: "#25d366",
                    color: "#ffffff",
                    border: "none",
                    padding: "12px",
                    borderRadius: "12px",
                    fontSize: "14px",
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    cursor: "pointer",
                    boxShadow: "0 4px 15px rgba(37, 211, 102, 0.35)",
                  }}
                >
                  <MessageCircle size={18} />
                  <span>Contactar de inmediato por WhatsApp</span>
                </button>

                <button type="submit" className="btn-primary" style={{ width: "100%", padding: "12px" }}>
                  <Send size={16} />
                  <span>Enviar mensaje por la web</span>
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
