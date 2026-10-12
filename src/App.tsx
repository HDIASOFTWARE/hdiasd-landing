import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { ProjectShowcase } from "./components/ProjectShowcase";
import { ValueProps } from "./components/ValueProps";
import { Brands } from "./components/Brands";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { ScrollToTop } from "./components/ScrollToTop";
import { ContactModal } from "./components/ContactModal";
import { MobileTabLayout } from "./components/MobileTabLayout";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return isMobile;
}

export function App() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const isMobile = useIsMobile();

  const handleOpenContact = (serviceTitle?: string) => {
    if (serviceTitle) setSelectedService(serviceTitle);
    setContactModalOpen(true);
  };

  if (isMobile) {
    return (
      <>
        <MobileTabLayout onOpenContact={(srv) => handleOpenContact(srv)} />
        <ContactModal
          visible={contactModalOpen}
          initialService={selectedService}
          onClose={() => setContactModalOpen(false)}
        />
      </>
    );
  }

  return (
    <div className="app-root" style={{ minHeight: "100vh", position: "relative", background: "#020812" }}>
      {/* NAVBAR (always on top) */}
      <Navbar onOpenContact={() => handleOpenContact()} />

      {/* HERO + STICKY DEVICES LAYER */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <Hero onOpenContact={() => handleOpenContact()} />
      </div>

      {/* CONTENT SECTIONS */}
      <main
        style={{
          position: "relative",
          zIndex: 10,
          background: "transparent",
        }}
      >
        {/* Dark fade transition between hero & content */}
        <div
          style={{
            height: "50px",
            background: "linear-gradient(to bottom, transparent, #020812)",
            pointerEvents: "none",
          }}
        />

        <div style={{ background: "#020812" }}>
          <Brands />
          <Services onSelectService={(srv) => handleOpenContact(srv)} />
          <ProjectShowcase onOpenContact={(proj) => handleOpenContact(proj)} />
          <ValueProps onOpenContact={() => handleOpenContact()} />
          <FinalCTA onOpenContact={() => handleOpenContact()} />
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
      <ScrollToTop />
      <ContactModal
        visible={contactModalOpen}
        initialService={selectedService}
        onClose={() => setContactModalOpen(false)}
      />
    </div>
  );
}

export default App;