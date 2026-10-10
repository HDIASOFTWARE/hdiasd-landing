import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { ProjectShowcase } from "./components/ProjectShowcase";
import { ValueProps } from "./components/ValueProps";
import { Brands } from "./components/Brands";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { ContactModal } from "./components/ContactModal";

export function App() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const handleOpenContact = (serviceTitle?: string) => {
    if (serviceTitle) {
      setSelectedService(serviceTitle);
    }
    setContactModalOpen(true);
  };

  return (
    <div className="app-root" style={{ minHeight: "100vh", position: "relative" }}>
      {/* Dynamic Ambient Glow & Cyber Grid */}
      <div className="ambient-background">
        <div className="ambient-gradient-1" />
        <div className="ambient-gradient-2" />
        <div className="ambient-gradient-3" />
        <div className="cyber-grid" />
      </div>

      {/* Navigation Header */}
      <Navbar onOpenContact={() => handleOpenContact()} />

      {/* Main Content Sections */}
      <main style={{ position: "relative", zIndex: 2 }}>
        <Hero onOpenContact={() => handleOpenContact()} />
        <Brands />
        <Services onSelectService={(srv) => handleOpenContact(srv)} />
        <ProjectShowcase onOpenContact={(proj) => handleOpenContact(proj)} />
        <ValueProps onOpenContact={() => handleOpenContact()} />
        <FinalCTA onOpenContact={() => handleOpenContact()} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Elements */}
      <FloatingWhatsApp />
      <ContactModal
        visible={contactModalOpen}
        initialService={selectedService}
        onClose={() => setContactModalOpen(false)}
      />
    </div>
  );
}

export default App;

