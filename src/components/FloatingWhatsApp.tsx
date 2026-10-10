import React, { useState } from "react";

const WHATSAPP_PHONE = "18496584957";
const DEFAULT_MESSAGE = encodeURIComponent("Hola HD IA SOFTWARE! Vengo desde su pagina web y deseo consultar sobre soluciones digitales y aplicaciones.");

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = () => {
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${DEFAULT_MESSAGE}`, "_blank");
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "24px",
        left: "20px",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* WhatsApp Button */}
      <div style={{ position: "relative" }}>
        <button
          onClick={handleClick}
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #25d366 0%, #128c7e 100%)",
            border: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: "0 6px 22px rgba(37,211,102,0.45)",
            transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
          }}
          className="wa-pulse-btn"
          aria-label="Contactar por WhatsApp: +1.849.658.4957"
        >
          <svg viewBox="0 0 24 24" width="26" height="26" fill="#ffffff">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.77.814 2.796.814 3.18 0 5.767-2.587 5.768-5.766 0-3.181-2.587-5.766-5.768-5.766zm9.969 5.766c0 5.518-4.482 10-10 10-1.748 0-3.385-.45-4.819-1.238l-4.781 1.254 1.277-4.664c-.902-1.488-1.427-3.23-1.427-5.102 0-5.518 4.482-10 10-10s10 4.482 10 10z" />
          </svg>
        </button>

        {/* Red notification badge */}
        <div style={{ position: "absolute", top: "-3px", right: "-3px", width: "18px", height: "18px", borderRadius: "50%", background: "#ef4444", color: "#fff", fontSize: "10px", fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid #030812", boxShadow: "0 2px 6px rgba(0,0,0,0.4)" }}>
          1
        </div>
      </div>

      {/* Tooltip — desktop only */}
      <div
        onClick={handleClick}
        className="wa-tooltip"
        style={{
          background: "rgba(9,21,39,0.95)",
          backdropFilter: "blur(14px)",
          border: "1px solid rgba(56,189,248,0.25)",
          color: "#f8fafc",
          padding: "7px 13px",
          borderRadius: "12px",
          fontSize: "12px",
          fontWeight: 600,
          boxShadow: "0 8px 22px rgba(0,0,0,0.5)",
          whiteSpace: "nowrap",
          cursor: "pointer",
          opacity: showTooltip ? 1 : 0.9,
          transform: showTooltip ? "translateX(4px)" : "translateX(0)",
          transition: "all 0.3s ease",
        }}
      >
        <span>Deseas cotizar? WhatsApp directo</span>
      </div>

      <style>{`
        .wa-pulse-btn:hover { transform:scale(1.08) translateY(-2px); box-shadow:0 10px 28px rgba(37,211,102,0.6) !important; }
        @media (max-width:600px) {
          .wa-tooltip { display:none !important; }
        }
      `}</style>
    </div>
  );
};
