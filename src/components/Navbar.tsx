import React, { useState, useEffect } from "react";
import { ArrowRight, Menu, X, Download } from "lucide-react";

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => { setScrolled(window.scrollY > 30); };
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
        background: scrolled ? "rgba(5,11,20,0.95)" : "rgba(5,11,20,0.6)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: scrolled ? "1px solid rgba(56,189,248,0.16)" : "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: scrolled ? "64px" : "72px",
          transition: "height 0.3s ease",
        }}
      >
        {/* LOGO */}
        <a href="#inicio" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", flexShrink: 0 }}>
          <div
            style={{
              width: scrolled ? "44px" : "50px",
              height: scrolled ? "44px" : "50px",
              borderRadius: "50%",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              transition: "all 0.3s ease",
              boxShadow: "0 4px 18px rgba(0,0,0,0.5), 0 0 15px rgba(212,175,55,0.25)",
            }}
          >
            <img src="/assets/hd-ia-logo.png" alt="HD IA SOFTWARE" style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} />
          </div>

          {/* Text — hidden on very small screens */}
          <div className="navbar-brand-text" style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: "15px", fontWeight: 800, letterSpacing: "0.5px", color: "#ffffff", display: "flex", alignItems: "center", gap: "4px" }}>
              HD IA <span style={{ color: "#38bdf8", fontWeight: 700 }}>SOFTWARE</span>
            </span>
            <span style={{ fontSize: "9.5px", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase", color: "#d4af37" }}>
              Soluciones Digitales
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav style={{ display: "none", alignItems: "center", gap: "28px" }} className="desktop-nav">
          <a href="#inicio" className="nav-link">Inicio</a>
          <a href="#servicios" className="nav-link">Servicios</a>
          <a href="#proyectos" className="nav-link" style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            Proyectos & Descargas
            <span style={{ fontSize: "9px", background: "rgba(0,210,255,0.2)", color: "#00d2ff", padding: "2px 6px", borderRadius: "10px", fontWeight: 700 }}>LIVE</span>
          </a>
          <a href="#nosotros" className="nav-link">?Por que nosotros?</a>
          <a href="#contacto" className="nav-link">Contacto</a>
        </nav>

        {/* Right: CTA + mobile toggle */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <button
            onClick={onOpenContact}
            className="btn-primary"
            style={{ padding: "9px 18px", fontSize: "13px", borderRadius: "999px" }}
          >
            <span>Hablemos</span>
            <ArrowRight size={14} />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle-btn"
            style={{ display: "none", background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "10px", padding: "8px", color: "#ffffff", cursor: "pointer" }}
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{ background: "rgba(5,11,20,0.99)", borderBottom: "1px solid rgba(56,189,248,0.2)", padding: "18px 20px", display: "flex", flexDirection: "column", gap: "14px" }}>
          {[
            { href: "#inicio", label: "Inicio" },
            { href: "#servicios", label: "Servicios" },
            { href: "#nosotros", label: "?Por que nosotros?" },
            { href: "#contacto", label: "Contacto" },
          ].map(({ href, label }) => (
            <a key={href} href={href} onClick={() => setMobileMenuOpen(false)} style={{ color: "#f8fafc", textDecoration: "none", fontSize: "15px", fontWeight: 600 }}>{label}</a>
          ))}
          <a href="#proyectos" onClick={() => setMobileMenuOpen(false)} style={{ color: "#00d2ff", textDecoration: "none", fontSize: "15px", fontWeight: 700, display: "flex", alignItems: "center", gap: "8px" }}>
            <Download size={16} /> Proyectos & Descargas (APK / Web)
          </a>
        </div>
      )}

      <style>{`
        .nav-link { color:#94a3b8; text-decoration:none; font-size:13.5px; font-weight:600; transition:all 0.25s ease; position:relative; }
        .nav-link:hover { color:#00d2ff; }
        .nav-link:hover::after { content:''; position:absolute; bottom:-6px; left:0; width:100%; height:2px; background:#00d2ff; border-radius:2px; box-shadow:0 0 8px #00d2ff; }
        @media (min-width:900px) { .desktop-nav { display:flex !important; } }
        @media (max-width:899px) {
          .mobile-toggle-btn { display:flex !important; }
          .navbar-brand-text { display: flex !important; }
        }
        @media (max-width:380px) {
          .navbar-brand-text { display: none !important; }
        }
      `}</style>
    </header>
  );
};
