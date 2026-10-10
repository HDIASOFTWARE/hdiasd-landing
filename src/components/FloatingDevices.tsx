import React, { useRef, useState, useCallback } from "react";

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   VIDEO PLAYLIST - consecutive playback, infinite loop
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const PLAYLIST = [
  "https://res.cloudinary.com/dyk0dfbjo/video/upload/v1791599170/video_2026-10-09_22-25-42_r9xdrc.mp4",
  "https://res.cloudinary.com/dyk0dfbjo/video/upload/v1791599170/video_2026-10-09_22-25-26_nmrldv.mp4",
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   INLINE VIDEO PLAYER
   • startIndex: so laptop starts at 0, phone starts at 1 (opposite phase)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
interface VideoPlayerProps {
  borderRadius: string;
  startIndex?: number;
  showBadge?: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  borderRadius,
  startIndex = 0,
  showBadge = false,
}) => {
  const [idx, setIdx] = useState(startIndex % PLAYLIST.length);
  const handleEnded = useCallback(
    () => setIdx((p) => (p + 1) % PLAYLIST.length),
    []
  );

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        /* Dark navy background so loading frame is never solid black */
        background: "linear-gradient(160deg, #0a1829 0%, #040c18 100%)",
        borderRadius,
        overflow: "hidden",
      }}
    >
      {/* Loading shimmer (visible only while video fetches) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, transparent 30%, rgba(0,210,255,0.06) 50%, transparent 70%)",
          backgroundSize: "200% 100%",
          animation: "shimmerLoad 2.5s ease-in-out infinite",
          zIndex: 1,
          borderRadius,
        }}
      />

      <video
        key={idx}
        src={PLAYLIST[idx]}
        autoPlay
        muted
        playsInline
        poster={PLAYLIST[idx].slice(0,-4)+'.jpg'} preload="auto"
        onEnded={handleEnded}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius,
          zIndex: 2,
        }}
      />

      {/* Glass shine overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, transparent 50%, rgba(0,210,255,0.04) 100%)",
          pointerEvents: "none",
          borderRadius,
          zIndex: 3,
        }}
      />

      {/* Progress dots */}
      <div
        style={{
          position: "absolute",
          bottom: "8px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "4px",
          zIndex: 10,
        }}
      >
        {PLAYLIST.map((_, i) => (
          <div
            key={i}
            style={{
              width: i === idx ? "16px" : "5px",
              height: "5px",
              borderRadius: "3px",
              background:
                i === idx ? "#00d2ff" : "rgba(255,255,255,0.25)",
              transition: "width 0.3s ease",
              boxShadow: i === idx ? "0 0 6px #00d2ff" : "none",
            }}
          />
        ))}
      </div>

      {/* DEMO badge (laptop only) */}
      {showBadge && (
        <div
          style={{
            position: "absolute",
            top: "8px",
            right: "8px",
            display: "flex",
            alignItems: "center",
            gap: "5px",
            background: "rgba(0,0,0,0.65)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(0,210,255,0.35)",
            borderRadius: "20px",
            padding: "3px 9px",
            zIndex: 20,
          }}
        >
          <span
            style={{
              width: "5px",
              height: "5px",
              borderRadius: "50%",
              background: "#00d2ff",
              boxShadow: "0 0 6px #00d2ff",
              display: "inline-block",
              animation: "livePulse 1.4s ease-in-out infinite",
            }}
          />
          <span
            style={{
              fontSize: "8px",
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

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   MAIN COMPONENT
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
export const FloatingDevices: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left) / rect.width - 0.5,
      y: (e.clientY - rect.top) / rect.height - 0.5,
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
      style={{
        position: "relative",
        width: "100%",
        height: "480px",
        perspective: "1200px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Ambient glow behind entire mockup area */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "15%",
          width: "65%",
          height: "65%",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,210,255,0.2) 0%, rgba(0,112,243,0.1) 50%, transparent 70%)",
          filter: "blur(55px)",
          pointerEvents: "none",
        }}
      />

      {/* ━━━━━━━━━━━━━━ LAPTOP ━━━━━━━━━━━━━━ */}
      <div
        className="float-laptop"
        style={{
          position: "absolute",
          left: "1%",
          width: "64%",
          height: "390px",
          transformStyle: "preserve-3d",
          transform: `
            translate3d(${mousePos.x * 18}px, ${mousePos.y * 12}px, 0)
            rotateX(${10 + mousePos.y * -7}deg)
            rotateY(${-10 + mousePos.x * 8}deg)
          `,
          transition: "transform 0.6s cubic-bezier(0.23,1,0.32,1)",
          zIndex: 2,
        }}
      >
        {/* Lid */}
        <div
          style={{
            width: "100%",
            height: "76%",
            background: "linear-gradient(160deg, #1a2a3f 0%, #0d1b2a 100%)",
            border: "1.5px solid rgba(0,210,255,0.3)",
            borderRadius: "14px 14px 4px 4px",
            boxShadow:
              "0 30px 80px -15px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.05), inset 0 1px 0 rgba(255,255,255,0.08)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Bezel + video */}
          <div
            style={{
              position: "absolute",
              inset: "8px",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            <VideoPlayer borderRadius="6px" startIndex={0} showBadge={true} />
          </div>
          {/* Camera dot */}
          <div
            style={{
              position: "absolute",
              top: "5px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "5px",
              height: "5px",
              borderRadius: "50%",
              background: "#1e2d3d",
            }}
          />
          {/* Top shine */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.055) 0%, transparent 40%)",
              pointerEvents: "none",
            }}
          />
        </div>

        {/* Base hinge */}
        <div
          style={{
            width: "100%",
            height: "5%",
            background: "linear-gradient(180deg, #1a2a3f 0%, #101e2c 100%)",
            borderRadius: "0 0 6px 6px",
            border: "1.5px solid rgba(0,210,255,0.15)",
            borderTop: "none",
            boxShadow: "0 6px 18px rgba(0,0,0,0.5)",
          }}
        />
        {/* Keyboard slab */}
        <div
          style={{
            width: "108%",
            marginLeft: "-4%",
            height: "4%",
            background: "linear-gradient(180deg, #0f1c2b 0%, #0a1320 100%)",
            borderRadius: "0 0 10px 10px",
            boxShadow: "0 8px 25px rgba(0,0,0,0.6)",
          }}
        />
        {/* Cast shadow */}
        <div
          style={{
            position: "absolute",
            bottom: "-28px",
            left: "5%",
            width: "90%",
            height: "18px",
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse, rgba(0,0,0,0.75) 0%, rgba(0,210,255,0.1) 60%, transparent 80%)",
            filter: "blur(10px)",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* ━━━━━━━━━━━━━━ PHONE ━━━━━━━━━━━━━━ */}

      {/* Neon glow halo BEHIND the phone so it's always visible */}
      <div
        style={{
          position: "absolute",
          right: "1%",
          width: "26%",
          maxWidth: "175px",
          height: "360px",
          borderRadius: "32px",
          background:
            "radial-gradient(ellipse at center, rgba(0,210,255,0.25) 0%, rgba(0,112,243,0.12) 55%, transparent 80%)",
          filter: "blur(22px)",
          zIndex: 3,
          pointerEvents: "none",
        }}
      />

      <div
        className="float-phone"
        style={{
          position: "absolute",
          right: "2%",
          width: "24%",
          maxWidth: "170px",
          height: "340px",
          transformStyle: "preserve-3d",
          transform: `
            translate3d(${-mousePos.x * 12}px, ${-mousePos.y * 18}px, 30px)
            rotateX(${-8 + mousePos.y * 6}deg)
            rotateY(${12 + mousePos.x * -8}deg)
          `,
          transition: "transform 0.7s cubic-bezier(0.23,1,0.32,1)",
          zIndex: 5,
        }}
      >
        {/* Phone body — uses a visible dark blue instead of near-black */}
        <div
          style={{
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(160deg, #1e3352 0%, #0e1f33 60%, #071428 100%)",
            border: "2px solid rgba(0,210,255,0.5)",
            borderRadius: "32px",
            boxShadow:
              "0 0 0 1px rgba(56,189,248,0.25), 0 25px 60px -10px rgba(0,0,0,0.8), 0 0 30px rgba(0,210,255,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Screen area with video — starts at index 1 (phase offset) */}
          <div
            style={{
              position: "absolute",
              inset: "7px",
              borderRadius: "25px",
              overflow: "hidden",
              /* Navy-blue instead of #000 while video loads */
              background: "linear-gradient(160deg, #0a1829 0%, #040c18 100%)",
            }}
          >
            <VideoPlayer borderRadius="24px" startIndex={1} showBadge={false} />
          </div>

          {/* Dynamic Island */}
          <div
            style={{
              position: "absolute",
              top: "12px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "44px",
              height: "11px",
              background: "#020810",
              borderRadius: "12px",
              zIndex: 20,
              boxShadow: "0 0 8px rgba(0,0,0,0.8)",
            }}
          />

          {/* Side button highlights */}
          <div
            style={{
              position: "absolute",
              right: "-2px",
              top: "80px",
              width: "3px",
              height: "32px",
              borderRadius: "2px 0 0 2px",
              background: "linear-gradient(180deg, rgba(0,210,255,0.4) 0%, rgba(56,189,248,0.2) 100%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: "-2px",
              top: "70px",
              width: "3px",
              height: "22px",
              borderRadius: "0 2px 2px 0",
              background: "linear-gradient(180deg, rgba(0,210,255,0.35) 0%, rgba(56,189,248,0.15) 100%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: "-2px",
              top: "98px",
              width: "3px",
              height: "22px",
              borderRadius: "0 2px 2px 0",
              background: "linear-gradient(180deg, rgba(0,210,255,0.35) 0%, rgba(56,189,248,0.15) 100%)",
            }}
          />

          {/* Phone shine overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 45%, rgba(0,210,255,0.06) 100%)",
              pointerEvents: "none",
              borderRadius: "32px",
            }}
          />
        </div>

        {/* Cast shadow */}
        <div
          style={{
            position: "absolute",
            bottom: "-22px",
            left: "8%",
            width: "84%",
            height: "16px",
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse, rgba(0,0,0,0.8) 0%, rgba(0,210,255,0.14) 55%, transparent 80%)",
            filter: "blur(9px)",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* ━━━━━━━━━━━━━━ KEYFRAMES ━━━━━━━━━━━━━━ */}
      <style>{`
        @keyframes floatLaptop {
          0%   { transform: translateY(0px)   translateX(0px)  rotate3d(1,1,0,0deg); }
          25%  { transform: translateY(-10px) translateX(8px)  rotate3d(1,0,0,-1deg); }
          50%  { transform: translateY(-18px) translateX(0px)  rotate3d(0,1,0,1.5deg); }
          75%  { transform: translateY(-10px) translateX(-8px) rotate3d(1,0,0,1deg); }
          100% { transform: translateY(0px)   translateX(0px)  rotate3d(1,1,0,0deg); }
        }
        @keyframes floatPhone {
          0%   { transform: translateY(-14px) translateX(0px); }
          30%  { transform: translateY(0px)   translateX(7px); }
          60%  { transform: translateY(-8px)  translateX(-6px); }
          100% { transform: translateY(-14px) translateX(0px); }
        }
        .float-laptop { animation: floatLaptop 7s ease-in-out infinite; }
        .float-phone  { animation: floatPhone 5.5s ease-in-out infinite; }

        @keyframes livePulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%      { opacity: 0.3; transform: scale(0.7); }
        }

        @keyframes shimmerLoad {
          0%   { background-position: -200% 0; }
          100% { background-position:  200% 0; }
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .float-laptop { width: 62% !important; }
          .float-phone  { width: 26% !important; }
        }
        @media (max-width: 900px) {
          .float-laptop { width: 74% !important; left: 0 !important; }
          .float-phone  { right: 0 !important; width: 28% !important; }
        }
        @media (max-width: 600px) {
          .float-phone  { display: none !important; }
          .float-laptop { width: 96% !important; left: 2% !important; height: 260px !important; }
        }
      `}</style>
    </div>
  );
};
