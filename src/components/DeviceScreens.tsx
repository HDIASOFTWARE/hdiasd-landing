import React from "react";

// ─────────────────────────────────────────────────────────────
// VIDEO URLS — Cloudinary CDN (auto-optimized, global edge)
// ─────────────────────────────────────────────────────────────
const LAPTOP_VIDEO_URL =
  "https://res.cloudinary.com/dyk0dfbjo/video/upload/q_auto,f_auto/v1791595957/SEO_Dicas_R%C3%A1pidas_1_sgbthz.mp4";

const PHONE_VIDEO_URL =
  "https://res.cloudinary.com/dyk0dfbjo/video/upload/q_auto,f_auto/v1791595957/Gamified_Habit_Tracker_UI_Mobile_App_Design_sflyea.mp4";

// ─────────────────────────────────────────────────────────────
// SYSTEMS LIST — keeps the selector bar working
// ─────────────────────────────────────────────────────────────
export const SYSTEMS_LIST = [
  { id: "travelos", name: "TravelOS VIP", category: "SaaS & CRM" },
  { id: "autoos", name: "AutoOS ILORA", category: "Concesionaria" },
  { id: "ecommerce", name: "E-Commerce", category: "Tienda Online" },
  { id: "firma", name: "Firma Digital", category: "Documentos" },
  { id: "mobile", name: "App Móvil", category: "React Native" },
];

// ─────────────────────────────────────────────────────────────
// LAPTOP SCREEN — plays the SEO video full-screen inside
// ─────────────────────────────────────────────────────────────
export const LaptopScreenContent: React.FC<{ activeIndex: number }> = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        overflow: "hidden",
        background: "#000",
        borderRadius: "4px",
      }}
    >
      {/* VIDEO — muted + autoPlay + loop = zero user interaction needed */}
      <video
        src={LAPTOP_VIDEO_URL}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "4px",
        }}
      />

      {/* Subtle glass overlay to keep neon brand feel */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(0,210,255,0.06) 0%, transparent 40%, rgba(0,112,243,0.04) 100%)",
          pointerEvents: "none",
          borderRadius: "4px",
        }}
      />

      {/* Live indicator badge */}
      <div
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          display: "flex",
          alignItems: "center",
          gap: "5px",
          background: "rgba(0,0,0,0.65)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(0,210,255,0.3)",
          borderRadius: "20px",
          padding: "3px 10px",
          zIndex: 10,
        }}
      >
        <span
          style={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: "#00d2ff",
            boxShadow: "0 0 8px #00d2ff",
            display: "inline-block",
            animation: "livePulse 1.4s ease-in-out infinite",
          }}
        />
        <span
          style={{
            fontSize: "9px",
            fontWeight: 700,
            color: "#00d2ff",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            letterSpacing: "0.5px",
          }}
        >
          DEMO EN VIVO
        </span>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────
// PHONE SCREEN — plays the Habit Tracker mobile video
// ─────────────────────────────────────────────────────────────
export const PhoneScreenContent: React.FC<{ activeIndex: number }> = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        overflow: "hidden",
        background: "#000",
        borderRadius: "24px",
      }}
    >
      {/* VIDEO — fills the phone screen perfectly */}
      <video
        src={PHONE_VIDEO_URL}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "24px",
        }}
      />

      {/* Subtle blue tint overlay matching brand */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, transparent 30%, rgba(0,210,255,0.04) 100%)",
          pointerEvents: "none",
          borderRadius: "24px",
        }}
      />
    </div>
  );
};

