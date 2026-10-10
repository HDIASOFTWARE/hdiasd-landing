import React from "react";

export const Brands: React.FC = () => {
  const brands = [
    { name: "Google", desc: "Cloud & APIs" },
    { name: "Microsoft", desc: "Azure & Enterprise" },
    { name: "Apple", desc: "iOS Eco-System" },
    { name: "Meta", desc: "React & Infra" },
    { name: "Amazon", desc: "AWS Web Services" },
    { name: "PostgreSQL", desc: "Secure Cloud DB" },
  ];

  return (
    <section
      style={{
        padding: "26px 0",
        position: "relative",
        zIndex: 3,
        borderTop: "1px solid rgba(255, 255, 255, 0.05)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
        background: "rgba(4, 10, 18, 0.65)",
      }}
    >
      <div className="container" style={{ textAlign: "center" }}>
        <span
          style={{
            fontSize: "10.5px",
            fontWeight: 800,
            letterSpacing: "1.8px",
            textTransform: "uppercase",
            color: "#64748b",
            fontFamily: "'Outfit', sans-serif",
            display: "block",
            marginBottom: "16px",
          }}
        >
          ESTÁNDARES GLOBALES &amp; TECNOLOGÍAS LÍDERES
        </span>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "clamp(20px, 4vw, 50px)",
            flexWrap: "wrap",
            opacity: 0.85,
          }}
        >
          {brands.map((b, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                transition: "all 0.25s ease",
                cursor: "default",
                padding: "4px 8px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "1";
                e.currentTarget.style.transform = "translateY(-3px)";
                const titleSpan = e.currentTarget.querySelector(".brand-title") as HTMLElement;
                if (titleSpan) {
                  titleSpan.style.color = "#00d2ff";
                  titleSpan.style.textShadow = "0 0 14px rgba(0,210,255,0.7)";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "0.85";
                e.currentTarget.style.transform = "translateY(0)";
                const titleSpan = e.currentTarget.querySelector(".brand-title") as HTMLElement;
                if (titleSpan) {
                  titleSpan.style.color = "#cbd5e1";
                  titleSpan.style.textShadow = "none";
                }
              }}
            >
              <span
                className="brand-title"
                style={{
                  fontSize: "17px",
                  fontWeight: 800,
                  letterSpacing: "-0.5px",
                  color: "#cbd5e1",
                  fontFamily: "'Outfit', sans-serif",
                  transition: "all 0.25s ease",
                }}
              >
                {b.name}
              </span>
              <span style={{ fontSize: "8.5px", color: "#64748b", marginTop: "1px" }}>
                {b.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
