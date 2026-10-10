import React, { useState, useEffect, useRef } from "react";
import { LaptopScreenContent, PhoneScreenContent, SYSTEMS_LIST } from "./DeviceScreens";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

export const FloatingDevices: React.FC = () => {
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-cycle through screens every 4.5 seconds
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveScreenIndex((prev) => (prev + 1) % SYSTEMS_LIST.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Subtle interactive parallax based on mouse position
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const prevScreen = () => {
    setActiveScreenIndex((prev) => (prev - 1 + SYSTEMS_LIST.length) % SYSTEMS_LIST.length);
  };

  const nextScreen = () => {
    setActiveScreenIndex((prev) => (prev + 1) % SYSTEMS_LIST.length);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "960px",
        margin: "0 auto",
        padding: "40px 10px 20px",
        perspective: "1200px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Ambient Blue Neon Glow Behind Devices */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "25%",
          width: "55%",
          height: "55%",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0, 210, 255, 0.28) 0%, rgba(0, 112, 243, 0.18) 45%, transparent 70%)",
          filter: "blur(65px)",
          pointerEvents: "none",
          zIndex: 1,
          animation: "glowPulse 6s ease-in-out infinite",
        }}
      />

      {/* Main 3D Floating Stage */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "450px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 2,
        }}
        className="floating-stage-wrapper"
      >
        {/* ==============================================================
            1. HYPERREALISTIC 3D FLOATING LAPTOP
            ============================================================== */}
        <div
          style={{
            position: "absolute",
            left: "5%",
            width: "68%",
            maxWidth: "620px",
            height: "360px",
            transform: `
              translate3d(${mousePos.x * 20}px, ${mousePos.y * 15}px, 0px)
              rotateX(${11 + mousePos.y * -8}deg)
              rotateY(${-12 + mousePos.x * 12}deg)
              rotateZ(2deg)
            `,
            transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
            transformStyle: "preserve-3d",
            animation: "floatLaptopMotion 8s ease-in-out infinite",
            zIndex: 3,
          }}
          className="laptop-container"
        >
          {/* Laptop Screen Bezel */}
          <div
            style={{
              width: "100%",
              height: "330px",
              background: "#090d16",
              borderRadius: "14px 14px 4px 4px",
              border: "2px solid #1e293b",
              boxShadow: `
                0 30px 60px -15px rgba(0, 0, 0, 0.8),
                0 0 40px rgba(0, 112, 243, 0.25),
                inset 0 1px 1px rgba(255, 255, 255, 0.2)
              `,
              padding: "10px 10px 14px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Top Webcam Notch */}
            <div
              style={{
                position: "absolute",
                top: "4px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "48px",
                height: "6px",
                background: "#050b14",
                borderRadius: "0 0 6px 6px",
                zIndex: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div style={{ width: "3px", height: "3px", borderRadius: "50%", background: "#00d2ff", opacity: 0.8 }} />
            </div>

            {/* Display Glass Reflections */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 40%, rgba(0,210,255,0.03) 100%)",
                pointerEvents: "none",
                zIndex: 5,
              }}
            />

            {/* Live Interactive System Screen */}
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "inset 0 0 10px rgba(0,0,0,0.8)",
              }}
            >
              <LaptopScreenContent activeIndex={activeScreenIndex} />
            </div>
          </div>

          {/* Laptop Base / Keyboard Lip */}
          <div
            style={{
              width: "112%",
              height: "14px",
              background: "linear-gradient(180deg, #1e293b 0%, #0f172a 100%)",
              borderRadius: "2px 2px 14px 14px",
              margin: "-2px -6%",
              boxShadow: "0 15px 30px rgba(0, 0, 0, 0.7), inset 0 1px 1px rgba(255,255,255,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderTop: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            <div style={{ width: "60px", height: "3px", background: "rgba(0, 210, 255, 0.4)", borderRadius: "2px" }} />
          </div>

          {/* Realistic Shadow Cast on Floor */}
          <div
            style={{
              position: "absolute",
              bottom: "-45px",
              left: "5%",
              width: "90%",
              height: "25px",
              borderRadius: "50%",
              background: "radial-gradient(ellipse at center, rgba(0, 0, 0, 0.75) 0%, rgba(0, 112, 243, 0.15) 50%, transparent 80%)",
              filter: "blur(14px)",
              pointerEvents: "none",
              zIndex: -1,
            }}
          />
        </div>

        {/* ==============================================================
            2. HYPERREALISTIC 3D FLOATING SMARTPHONE
            ============================================================== */}
        <div
          style={{
            position: "absolute",
            right: "8%",
            width: "28%",
            maxWidth: "235px",
            height: "380px",
            transform: `
              translate3d(${mousePos.x * -18}px, ${mousePos.y * -14}px, 40px)
              rotateX(${6 + mousePos.y * -6}deg)
              rotateY(${14 + mousePos.x * -10}deg)
              rotateZ(-3deg)
            `,
            transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
            transformStyle: "preserve-3d",
            animation: "floatPhoneMotion 7s ease-in-out infinite",
            zIndex: 4,
          }}
          className="phone-container"
        >
          {/* Phone Body with Titanium Edge Frame */}
          <div
            style={{
              width: "100%",
              height: "100%",
              background: "#080c14",
              borderRadius: "32px",
              border: "3px solid #334155",
              boxShadow: `
                0 25px 50px -10px rgba(0, 0, 0, 0.85),
                0 0 35px rgba(0, 210, 255, 0.25),
                inset 0 1px 2px rgba(255, 255, 255, 0.35)
              `,
              padding: "10px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Dynamic Island Pill */}
            <div
              style={{
                position: "absolute",
                top: "14px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "48px",
                height: "12px",
                background: "#000000",
                borderRadius: "12px",
                zIndex: 10,
                boxShadow: "0 1px 3px rgba(0,0,0,0.6)",
              }}
            />

            {/* Screen Glass Reflection */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 45%, rgba(0,210,255,0.04) 100%)",
                pointerEvents: "none",
                zIndex: 5,
              }}
            />

            {/* Live Synchronized Mobile Screen */}
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "24px",
                overflow: "hidden",
              }}
            >
              <PhoneScreenContent activeIndex={activeScreenIndex} />
            </div>
          </div>

          {/* Phone Shadow Cast */}
          <div
            style={{
              position: "absolute",
              bottom: "-35px",
              left: "10%",
              width: "80%",
              height: "20px",
              borderRadius: "50%",
              background: "radial-gradient(ellipse at center, rgba(0, 0, 0, 0.8) 0%, rgba(0, 210, 255, 0.15) 50%, transparent 80%)",
              filter: "blur(12px)",
              pointerEvents: "none",
              zIndex: -1,
            }}
          />
        </div>
      </div>

      {/* ==============================================================
          3. INTERACTIVE SYSTEM SELECTOR BAR (CONTROL TACTIL Y MANUAL)
          ============================================================== */}
      <div
        style={{
          marginTop: "35px",
          width: "100%",
          maxWidth: "760px",
          background: "rgba(9, 21, 39, 0.85)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(56, 189, 248, 0.2)",
          borderRadius: "18px",
          padding: "12px 18px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          boxShadow: "0 15px 35px -10px rgba(0, 0, 0, 0.6)",
          zIndex: 10,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#00d2ff", boxShadow: "0 0 10px #00d2ff" }} />
            <span style={{ fontSize: "12px", fontWeight: 700, color: "#f8fafc" }}>
              Mostrando Sistema: <span style={{ color: "#38bdf8" }}>{SYSTEMS_LIST[activeScreenIndex].name}</span>
            </span>
          </div>

          {/* Controls: Prev / Play-Pause / Next */}
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <button
              onClick={prevScreen}
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#94a3b8",
                width: "28px",
                height: "28px",
                borderRadius: "6px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
              title="Sistema anterior"
            >
              <ChevronLeft size={16} />
            </button>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              style={{
                background: isPlaying ? "rgba(0, 210, 255, 0.15)" : "rgba(255,255,255,0.06)",
                border: `1px solid ${isPlaying ? "#00d2ff" : "rgba(255,255,255,0.1)"}`,
                color: isPlaying ? "#00d2ff" : "#94a3b8",
                width: "28px",
                height: "28px",
                borderRadius: "6px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
              title={isPlaying ? "Pausar ciclo automático" : "Reanudar ciclo"}
            >
              {isPlaying ? <Pause size={14} /> : <Play size={14} />}
            </button>

            <button
              onClick={nextScreen}
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#94a3b8",
                width: "28px",
                height: "28px",
                borderRadius: "6px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
              title="Siguiente sistema"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* 5 Tab Buttons to directly select any system */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "6px",
          }}
          className="system-tabs-grid"
        >
          {SYSTEMS_LIST.map((sys, idx) => {
            const isActive = activeScreenIndex === idx;
            return (
              <button
                key={sys.id}
                onClick={() => {
                  setActiveScreenIndex(idx);
                  setIsPlaying(false);
                }}
                style={{
                  background: isActive ? "linear-gradient(135deg, rgba(0, 210, 255, 0.22) 0%, rgba(0, 112, 243, 0.28) 100%)" : "rgba(255,255,255,0.03)",
                  border: `1px solid ${isActive ? "#00d2ff" : "rgba(255,255,255,0.06)"}`,
                  borderRadius: "8px",
                  padding: "6px 4px",
                  textAlign: "center",
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                  boxShadow: isActive ? "0 0 12px rgba(0, 210, 255, 0.25)" : "none",
                }}
              >
                <span
                  style={{
                    display: "block",
                    fontSize: "10px",
                    fontWeight: 700,
                    color: isActive ? "#ffffff" : "#94a3b8",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {sys.name.split(" ")[0]} {sys.name.split(" ")[1] || ""}
                </span>
                <span
                  style={{
                    display: "block",
                    fontSize: "8.5px",
                    color: isActive ? "#38bdf8" : "#64748b",
                  }}
                >
                  {sys.category.split("&")[0]}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .floating-stage-wrapper {
            height: 380px !important;
          }
          .laptop-container {
            width: 82% !important;
            left: 2% !important;
            transform: scale(0.85) rotateX(8deg) rotateY(-8deg) !important;
          }
          .phone-container {
            width: 38% !important;
            right: 0% !important;
            transform: scale(0.85) rotateX(5deg) rotateY(10deg) !important;
          }
          .system-tabs-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </div>
  );
};

