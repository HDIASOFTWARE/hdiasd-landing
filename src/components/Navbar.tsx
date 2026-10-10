import React, { useState, useEffect } from "react";
import { ArrowRight, Menu, X, Download } from "lucide-react";

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.35s ease",
        background: scrolled
          ? "rgba(5, 11, 20, 0.88)"
          : "rgba(5, 11, 20, 0.4)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: scrolled
          ? "1px solid rgba(56, 189, 248, 0.16)"
          : "1px solid rgba(255, 255, 255, 0.05)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: scrolled ? "72px" : "84px",
          transition: "height 0.3s ease",
        }}
      >
        {/* LOGO OFICIAL OBLIGATORIO — Emblema circular original sin modificaciones */}
        <a
          href="#inicio"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            textDecoration: "none",
          }}
        >
          <div
            style={{
              width: scrolled ? "52px" : "60px",
              height: scrolled ? "52px" : "60px",
              borderRadius: "50%",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 18px rgba(0, 0, 0, 0.5), 0 0 15px rgba(212, 175, 55, 0.25)",
              flexShrink: 0,
            }}
          >
            <img
              src="/assets/hd-ia-logo.png"
              alt="HD IA SOFTWARE — Soluciones Digitales para tu Negocio"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                display: "block",
              }}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "17px",
                fontWeight: 800,
                letterSpacing: "0.5px",
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              HD IA <span style={{ color: "#38bdf8", fontWeight: 700 }}>SOFTWARE</span>
            </span>
            <span
              style={{
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "1px",
                textTransform: "uppercase",
                color: "#d4af37",
              }}
            >
              Soluciones Digitales
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: "none",
            alignItems: "center",
            gap: "32px",
          }}
          className="desktop-nav"
        >
          <a href="#inicio" className="nav-link">Inicio</a>
          <a href="#servicios" className="nav-link">Servicios</a>
          <a href="#proyectos" className="nav-link" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            Proyectos & Descargas
            <span style={{ fontSize: "9px", background: "rgba(0, 210, 255, 0.2)", color: "#00d2ff", padding: "2px 6px", borderRadius: "10px", fontWeight: 700 }}>LIVE</span>
          </a>
          <a href="#nosotros" className="nav-link">¿Por qué nosotros?</a>
          <a href="#contacto" className="nav-link">Contacto</a>
        </nav>

        {/* CTA Button & Mobile Toggle */}
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <button
            onClick={onOpenContact}
            className="btn-primary"
            style={{
              padding: "10px 22px",
              fontSize: "13.5px",
              borderRadius: "999px",
            }}
          >
            <span>Hablemos</span>
            <ArrowRight size={15} />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle-btn"
            style={{
              display: "none",
              background: "rgba(255, 255, 255, 0.08)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              borderRadius: "10px",
              padding: "8px",
              color: "#ffffff",
              cursor: "pointer",
            }}
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            background: "rgba(5, 11, 20, 0.98)",
            borderBottom: "1px solid rgba(56, 189, 248, 0.2)",
            padding: "20px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <a
            href="#inicio"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: "#f8fafc", textDecoration: "none", fontSize: "15px", fontWeight: 600 }}
          >
            Inicio
          </a>
          <a
            href="#servicios"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: "#f8fafc", textDecoration: "none", fontSize: "15px", fontWeight: 600 }}
          >
            Servicios
          </a>
          <a
            href="#proyectos"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: "#00d2ff", textDecoration: "none", fontSize: "15px", fontWeight: 700, display: "flex", alignItems: "center", gap: "8px" }}
          >
            <Download size={16} />
            Proyectos & Descargas (APK / Web)
          </a>
          <a
            href="#nosotros"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: "#f8fafc", textDecoration: "none", fontSize: "15px", fontWeight: 600 }}
          >
            ¿Por qué nosotros?
          </a>
          <a
            href="#contacto"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: "#f8fafc", textDecoration: "none", fontSize: "15px", fontWeight: 600 }}
          >
            Contacto
          </a>
        </div>
      )}

      <style>{`
        .nav-link {
          color: #94a3b8;
          text-decoration: none;
          font-size: 14px;
          font-weight: 600;
          transition: all 0.25s ease;
          position: relative;
        }
        .nav-link:hover {
          color: #00d2ff;
        }
        .nav-link:hover::after {
          content: '';
          position: absolute;
          bottom: -6px;
          left: 0;
          width: 100%;
          height: 2px;
          background: #00d2ff;
          border-radius: 2px;
          box-shadow: 0 0 8px #00d2ff;
        }
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
        }
        @media (max-width: 899px) {
          .mobile-toggle-btn {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
};
