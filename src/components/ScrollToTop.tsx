import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 280) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "28px",
        right: "28px",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      {hovered && (
        <span
          style={{
            background: "rgba(9, 21, 39, 0.95)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(56, 189, 248, 0.3)",
            color: "#38bdf8",
            fontSize: "12px",
            fontWeight: 700,
            padding: "6px 12px",
            borderRadius: "10px",
            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.6)",
            whiteSpace: "nowrap",
            fontFamily: "'Outfit', sans-serif",
            animation: "fadeIn 0.2s ease-in-out",
          }}
        >
          Subir al inicio
        </span>
      )}

      <button
        onClick={handleScrollToTop}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-label="Subir al inicio"
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, rgba(8, 18, 34, 0.95) 0%, rgba(3, 12, 23, 0.98) 100%)",
          border: "1.5px solid rgba(0, 210, 255, 0.45)",
          color: "#00d2ff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          boxShadow: "0 8px 25px rgba(0, 0, 0, 0.7), 0 0 20px rgba(0, 210, 255, 0.35)",
          backdropFilter: "blur(14px)",
          transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          transform: hovered ? "translateY(-4px) scale(1.08)" : "translateY(0) scale(1)",
        }}
        className="scroll-top-btn"
      >
        <ArrowUp size={22} color="#00d2ff" strokeWidth={2.5} />
      </button>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(6px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .scroll-top-btn:hover {
          border-color: #00d2ff !important;
          box-shadow: 0 10px 30px rgba(0, 210, 255, 0.55), 0 0 35px rgba(0, 112, 243, 0.4) !important;
        }
      `}</style>
    </div>
  );
};
