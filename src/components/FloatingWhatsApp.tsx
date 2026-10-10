import React, { useState } from "react";

// Configuración de contacto
const WHATSAPP_PHONE = "18296708000"; // Número configurable
const DEFAULT_MESSAGE = encodeURIComponent("¡Hola! Vengo desde la página web de HD IA SOFTWARE y deseo cotizar una solución digital.");

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = () => {
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${DEFAULT_MESSAGE}`, "_blank");
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "28px",
        left: "28px",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        gap: "12px",
      }}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* WhatsApp Action Button with Red '1' Badge */}
      <div style={{ position: "relative" }}>
        <button
          onClick={handleClick}
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #25d366 0%, #128c7e 100%)",
            border: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: "0 8px 25px rgba(37, 211, 102, 0.45)",
            transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
            position: "relative",
          }}
          className="wa-pulse-btn"
          aria-label="Contactar por WhatsApp"
        >
          {/* Official WhatsApp SVG Logo */}
          <svg
            viewBox="0 0 24 24"
            width="30"
            height="30"
            fill="#ffffff"
          >
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.77.814 2.796.814 3.18 0 5.767-2.587 5.768-5.766 0-3.181-2.587-5.766-5.768-5.766zm9.969 5.766c0 5.518-4.482 10-10 10-1.748 0-3.385-.45-4.819-1.238l-4.781 1.254 1.277-4.664c-.902-1.488-1.427-3.23-1.427-5.102 0-5.518 4.482-10 10-10s10 4.482 10 10z" />
          </svg>
        </button>

        {/* Red '1' Notification Badge */}
        <div
          style={{
            position: "absolute",
            top: "-4px",
            right: "-4px",
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            background: "#ef4444",
            color: "#ffffff",
            fontSize: "11px",
            fontWeight: 800,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "2px solid #050b14",
            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.4)",
          }}
        >
          1
        </div>
      </div>

      {/* Tooltip Message ("Hola, escríbenos para ayudarte") */}
      <div
        onClick={handleClick}
        style={{
          background: "rgba(9, 21, 39, 0.95)",
          backdropFilter: "blur(14px)",
          border: "1px solid rgba(56, 189, 248, 0.25)",
          color: "#f8fafc",
          padding: "10px 16px",
          borderRadius: "14px",
          fontSize: "13px",
          fontWeight: 600,
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.5)",
          whiteSpace: "nowrap",
          cursor: "pointer",
          transition: "all 0.3s ease",
          opacity: showTooltip ? 1 : 0.9,
          transform: showTooltip ? "translateX(4px)" : "translateX(0)",
        }}
        className="wa-tooltip"
      >
        <span>Hola, escríbenos para ayudarte</span>
      </div>

      <style>{`
        .wa-pulse-btn:hover {
          transform: scale(1.08) translateY(-2px);
          box-shadow: 0 12px 30px rgba(37, 211, 102, 0.6) !important;
        }
        @media (max-width: 600px) {
          .wa-tooltip {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};
