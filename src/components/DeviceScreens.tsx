import React, { useRef, useState, useCallback } from "react";

// ─────────────────────────────────────────────────────────────
// SYSTEMS LIST — drives the selector bar (kept for compatibility)
// ─────────────────────────────────────────────────────────────
export const SYSTEMS_LIST = [
  { id: "travelos",  name: "TravelOS VIP",  category: "SaaS & CRM",    color: "#00d2ff" },
  { id: "autoos",    name: "AutoOS ILORA",  category: "Concesionaria",  color: "#f59e0b" },
  { id: "climup",    name: "CLIMUP",        category: "Climatización",  color: "#10b981" },
  { id: "firma",     name: "Firma Digital", category: "Documentos",     color: "#8b5cf6" },
  { id: "ecommerce", name: "E-Commerce",    category: "Tienda Online",  color: "#ec4899" },
];

// ─────────────────────────────────────────────────────────────
// VIDEO PLAYLIST — 2 videos reproducidos consecutivamente
// ─────────────────────────────────────────────────────────────
const PLAYLIST = [
  "https://res.cloudinary.com/dyk0dfbjo/video/upload/q_auto,f_auto/v1791599170/video_2026-10-09_22-25-42_r9xdrc.mp4",
  "https://res.cloudinary.com/dyk0dfbjo/video/upload/q_auto,f_auto/v1791599170/video_2026-10-09_22-25-26_nmrldv.mp4",
];

// ─────────────────────────────────────────────────────────────
// CONSECUTIVE VIDEO PLAYER — plays each video in order, loops
// ─────────────────────────────────────────────────────────────
const ConsecutiveVideoPlayer: React.FC<{
  borderRadius?: string;
  showBadge?: boolean;
}> = ({ borderRadius = "4px", showBadge = false }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleEnded = useCallback(() => {
    // Advance to next video, loop back to 0 after last
    setCurrentIndex((prev) => (prev + 1) % PLAYLIST.length);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        overflow: "hidden",
        background: "#000",
        borderRadius,
      }}
    >
      {/* Main video — src changes when index changes, triggering auto-play */}
      <video
        ref={videoRef}
        key={currentIndex}          // forces React to remount on src change
        src={PLAYLIST[currentIndex]}
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={handleEnded}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius,
        }}
      />

      {/* Subtle glass brand overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(0,210,255,0.05) 0%, transparent 40%, rgba(0,112,243,0.03) 100%)",
          pointerEvents: "none",
          borderRadius,
        }}
      />

      {/* Progress dots — shows which video is playing */}
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "5px",
          zIndex: 10,
        }}
      >
        {PLAYLIST.map((_, i) => (
          <div
            key={i}
            style={{
              width: i === currentIndex ? "18px" : "6px",
              height: "6px",
              borderRadius: "3px",
              background: i === currentIndex ? "#00d2ff" : "rgba(255,255,255,0.3)",
              transition: "width 0.3s ease, background 0.3s ease",
              boxShadow: i === currentIndex ? "0 0 8px #00d2ff" : "none",
            }}
          />
        ))}
      </div>

      {/* DEMO EN VIVO badge */}
      {showBadge && (
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
            border: "1px solid rgba(0,210,255,0.35)",
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
      )}
    </div>
  );
};

// ─────────────────────────────────────────────────────────────
// LAPTOP SCREEN EXPORT
// ─────────────────────────────────────────────────────────────
export const LaptopScreenContent: React.FC<{ activeIndex: number }> = () => {
  return (
    <ConsecutiveVideoPlayer
      borderRadius="4px"
      showBadge={true}
    />
  );
};

// ─────────────────────────────────────────────────────────────
// PHONE SCREEN EXPORT
// ─────────────────────────────────────────────────────────────
export const PhoneScreenContent: React.FC<{ activeIndex: number }> = () => {
  return (
    <ConsecutiveVideoPlayer
      borderRadius="24px"
      showBadge={false}
    />
  );
};
