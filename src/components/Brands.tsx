import React from "react";

export const Brands: React.FC = () => {
  const brands = [
    { name: "Google", desc: "Cloud & APIs" },
    { name: "Microsoft", desc: "Azure & Enterprise" },
    { name: "Apple", desc: "iOS Eco-System" },
    { name: "Meta", desc: "React & Infra" },
    { name: "Amazon", desc: "AWS Web Services" },
    { name: "Adobe", desc: "Design & UX" },
  ];

  return (
    <section
      style={{
        padding: "60px 0",
        position: "relative",
        zIndex: 3,
        borderTop: "1px solid rgba(255, 255, 255, 0.05)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
        background: "rgba(5, 11, 20, 0.6)",
      }}
    >
      <div className="container" style={{ textAlign: "center" }}>
        <span
          style={{
            fontSize: "11px",
            fontWeight: 800,
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "#64748b",
            fontFamily: "'Outfit', sans-serif",
            display: "block",
            marginBottom: "28px",
          }}
        >
          CONFÍAN EN NOSOTROS & ESTÁNDARES GLOBALES
        </span>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "clamp(24px, 5vw, 60px)",
            flexWrap: "wrap",
            opacity: 0.75,
          }}
        >
          {brands.map((b, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                transition: "all 0.3s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "1";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "0.75";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <span
                style={{
                  fontSize: "19px",
                  fontWeight: 800,
                  letterSpacing: "-0.5px",
                  color: "#cbd5e1",
                  fontFamily: "'Outfit', sans-serif",
                }}
              >
                {b.name}
              </span>
              <span style={{ fontSize: "9px", color: "#64748b", marginTop: "2px" }}>
                {b.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
