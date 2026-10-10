import React, { useEffect, useState } from "react";

// ─────────────────────────────────────────────────────────────
// SYSTEMS LIST — drives the selector bar + device content
// ─────────────────────────────────────────────────────────────
export const SYSTEMS_LIST = [
  { id: "travelos", name: "TravelOS VIP", category: "SaaS & CRM", color: "#00d2ff" },
  { id: "autoos",   name: "AutoOS ILORA", category: "Concesionaria", color: "#f59e0b" },
  { id: "climup",   name: "CLIMUP",       category: "Climatización", color: "#10b981" },
  { id: "firma",    name: "Firma Digital",category: "Documentos",    color: "#8b5cf6" },
  { id: "ecommerce",name: "E-Commerce",   category: "Tienda Online", color: "#ec4899" },
];

// ─────────────────────────────────────────────────────────────
// ANIMATED COUNTER — tiny reusable counter for live numbers
// ─────────────────────────────────────────────────────────────
const Counter: React.FC<{ target: number; prefix?: string; suffix?: string; color: string }> = ({
  target, prefix = "", suffix = "", color,
}) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = Math.ceil(target / 40);
    const t = setInterval(() => {
      start = Math.min(start + step, target);
      setValue(start);
      if (start >= target) clearInterval(t);
    }, 35);
    return () => clearInterval(t);
  }, [target]);
  return (
    <span style={{ color, fontWeight: 900 }}>
      {prefix}{value.toLocaleString()}{suffix}
    </span>
  );
};

// ─────────────────────────────────────────────────────────────
// LAPTOP SCREEN — 5 system dashboards, full UI simulation
// ─────────────────────────────────────────────────────────────
export const LaptopScreenContent: React.FC<{ activeIndex: number }> = ({ activeIndex }) => {
  const sys = SYSTEMS_LIST[activeIndex];

  const screens = [
    // ── 0. TravelOS VIP ──────────────────────────────────────────
    <div key="travelos" style={laptopBase("#00d2ff")}>
      <TopBar color="#00d2ff" title="TravelOS VIP" subtitle="Panel de Agencia · Multi-tenant SaaS" />
      <div style={grid(4)}>
        {[
          { label: "Reservas Hoy", val: 142, icon: "✈️", color: "#00d2ff" },
          { label: "Ingresos",     val: 28430, icon: "💰", color: "#10b981", prefix: "$" },
          { label: "Yates Activos",val: 7,   icon: "⛵", color: "#f59e0b" },
          { label: "Clientes VIP", val: 39,  icon: "👑", color: "#a78bfa" },
        ].map(k => (
          <StatCard key={k.label} label={k.label} icon={k.icon} color={k.color}>
            <Counter target={k.val} prefix={k.prefix} color={k.color} />
          </StatCard>
        ))}
      </div>
      <div style={grid(2, 8)}>
        <Panel title="Últimas Reservas" color="#00d2ff">
          {[
            { name: "Carlos Méndez", dest: "Punta Cana 🌴", status: "Confirmado", ok: true },
            { name: "Ana Ríos",      dest: "Dubai ✈️",       status: "En proceso",ok: false },
            { name: "Marco Salinas", dest: "Maldivas 🏖️",    status: "Confirmado", ok: true },
            { name: "Lucía Vega",    dest: "París 🗼",         status: "Pendiente", ok: false },
          ].map(r => (
            <div key={r.name} style={tableRow}>
              <span style={{ fontSize: "9px", fontWeight: 700 }}>{r.name}</span>
              <span style={{ fontSize: "8px", color: "#94a3b8" }}>{r.dest}</span>
              <span style={{ fontSize: "7.5px", color: r.ok ? "#10b981" : "#f59e0b", fontWeight: 700 }}>{r.status}</span>
            </div>
          ))}
        </Panel>
        <Panel title="Flota de Yates" color="#00d2ff">
          {[
            { name: "Sea Breeze 42ft", status: "Disponible", pct: 100 },
            { name: "Blue Horizon 55ft", status: "En alquiler", pct: 0 },
            { name: "Luxury Wave 68ft",  status: "Reservado", pct: 40 },
          ].map(y => (
            <div key={y.name} style={{ marginBottom: "8px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "8px" }}>
                <span style={{ fontWeight: 700 }}>{y.name}</span>
                <span style={{ color: y.pct === 100 ? "#10b981" : y.pct === 0 ? "#f87171" : "#f59e0b" }}>
                  {y.status}
                </span>
              </div>
              <div style={progressBg}>
                <div style={{ ...progressBar, width: `${y.pct}%`, background: y.pct === 100 ? "#10b981" : y.pct === 0 ? "#f87171" : "#f59e0b" }} />
              </div>
            </div>
          ))}
        </Panel>
      </div>
    </div>,

    // ── 1. AutoOS ILORA ──────────────────────────────────────────
    <div key="autoos" style={laptopBase("#f59e0b")}>
      <TopBar color="#f59e0b" title="AutoOS ILORA" subtitle="Control de Flota · OLED Dark Mode" />
      <div style={grid(4)}>
        {[
          { label: "Vehículos Total",  val: 48,  icon: "🚗", color: "#f59e0b" },
          { label: "En Alquiler",      val: 21,  icon: "🔑", color: "#f87171" },
          { label: "Disponibles",      val: 19,  icon: "✅", color: "#10b981" },
          { label: "Contratos Hoy",    val: 7,   icon: "📄", color: "#60a5fa" },
        ].map(k => (
          <StatCard key={k.label} label={k.label} icon={k.icon} color={k.color}>
            <Counter target={k.val} color={k.color} />
          </StatCard>
        ))}
      </div>
      <div style={grid(2, 8)}>
        <Panel title="Estado de Vehículos" color="#f59e0b">
          {[
            { plate: "ABC-1234", model: "Toyota Corolla 2024", status: "En Alquiler", ok: false },
            { plate: "XYZ-5678", model: "Hyundai Tucson 2023", status: "Disponible",  ok: true  },
            { plate: "DEF-9012", model: "Kia Sportage 2024",   status: "Reservado",   ok: null  },
            { plate: "GHI-3456", model: "Nissan Sentra 2023",  status: "Disponible",  ok: true  },
          ].map(v => (
            <div key={v.plate} style={tableRow}>
              <span style={{ fontSize: "8px", fontWeight: 800, color: "#f59e0b" }}>{v.plate}</span>
              <span style={{ fontSize: "7.5px", color: "#cbd5e1" }}>{v.model}</span>
              <span style={{ fontSize: "7px", color: v.ok === true ? "#10b981" : v.ok === false ? "#f87171" : "#f59e0b", fontWeight: 700 }}>{v.status}</span>
            </div>
          ))}
        </Panel>
        <Panel title="Última Inspección" color="#f59e0b">
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            {[
              { item: "Carrocería exterior", ok: true },
              { item: "Neumáticos 4/4",      ok: true },
              { item: "Nivel de combustible", ok: false },
              { item: "Documentos en regla", ok: true },
              { item: "Seguro vigente",       ok: true },
            ].map(c => (
              <div key={c.item} style={{ display: "flex", justifyContent: "space-between", fontSize: "8px", padding: "3px 0", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                <span>{c.item}</span>
                <span style={{ color: c.ok ? "#10b981" : "#f87171" }}>{c.ok ? "✓" : "✗"}</span>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </div>,

    // ── 2. CLIMUP ────────────────────────────────────────────────
    <div key="climup" style={laptopBase("#10b981")}>
      <TopBar color="#10b981" title="CLIMUP" subtitle="Sistema de Climatización · Control Total" />
      <div style={grid(4)}>
        {[
          { label: "Clientes Activos", val: 214,  icon: "🏢", color: "#10b981" },
          { label: "Servicios Mes",    val: 89,   icon: "🔧", color: "#60a5fa" },
          { label: "Próx. 5 días",     val: 12,   icon: "⚠️", color: "#f59e0b" },
          { label: "Firmas Pendientes",val: 4,    icon: "✍️", color: "#a78bfa" },
        ].map(k => (
          <StatCard key={k.label} label={k.label} icon={k.icon} color={k.color}>
            <Counter target={k.val} color={k.color} />
          </StatCard>
        ))}
      </div>
      <div style={grid(2, 8)}>
        <Panel title="Próximos Mantenimientos" color="#10b981">
          {[
            { client: "Empresa López S.A.",   days: 2,  period: "120 días" },
            { client: "Hotel Caribe",          days: 3,  period: "150 días" },
            { client: "Centro Comercial Sur",  days: 5,  period: "120 días" },
            { client: "Clínica Santa Rosa",    days: 5,  period: "150 días" },
          ].map(m => (
            <div key={m.client} style={tableRow}>
              <span style={{ fontSize: "8px", fontWeight: 700 }}>{m.client}</span>
              <span style={{ fontSize: "7.5px", color: "#94a3b8" }}>{m.period}</span>
              <span style={{ fontSize: "7px", color: m.days <= 2 ? "#f87171" : "#f59e0b", fontWeight: 700 }}>En {m.days}d</span>
            </div>
          ))}
        </Panel>
        <Panel title="Estado de Firmas Digitales" color="#10b981">
          {[
            { client: "Tech Innovate Inc.",  status: "Firmado ✓",  ok: true  },
            { client: "Restaurante El Mar",  status: "Pendiente…", ok: false },
            { client: "Oficinas Centrales",  status: "Firmado ✓",  ok: true  },
            { client: "Distribuidora Norte", status: "Enviado",     ok: null  },
          ].map(f => (
            <div key={f.client} style={tableRow}>
              <span style={{ fontSize: "8px", fontWeight: 700 }}>{f.client}</span>
              <span style={{ fontSize: "7px", color: f.ok === true ? "#10b981" : f.ok === false ? "#f59e0b" : "#60a5fa", fontWeight: 700 }}>{f.status}</span>
            </div>
          ))}
        </Panel>
      </div>
    </div>,

    // ── 3. Firma Digital ─────────────────────────────────────────
    <div key="firma" style={laptopBase("#8b5cf6")}>
      <TopBar color="#8b5cf6" title="Firma Digital" subtitle="Contratos · PDF · Validación Cripto" />
      <div style={grid(4)}>
        {[
          { label: "Docs Este Mes",  val: 387,  icon: "📄", color: "#8b5cf6" },
          { label: "Firmados Hoy",   val: 23,   icon: "✅", color: "#10b981" },
          { label: "Pendientes",     val: 8,    icon: "⏳", color: "#f59e0b" },
          { label: "Rechazados",     val: 2,    icon: "❌", color: "#f87171" },
        ].map(k => (
          <StatCard key={k.label} label={k.label} icon={k.icon} color={k.color}>
            <Counter target={k.val} color={k.color} />
          </StatCard>
        ))}
      </div>
      <div style={grid(2, 8)}>
        <Panel title="Documentos Recientes" color="#8b5cf6">
          {[
            { name: "Contrato Mantenimiento #2341", signer: "J. Rodríguez", status: "Firmado" },
            { name: "Acuerdo Servicio Técnico",      signer: "M. López",     status: "Pendiente" },
            { name: "Constancia de Garantía",        signer: "C. Pérez",     status: "Firmado"   },
            { name: "Contrato de Alquiler #1890",    signer: "A. García",    status: "Enviado"   },
          ].map(d => (
            <div key={d.name} style={tableRow}>
              <span style={{ fontSize: "7.5px", fontWeight: 700, maxWidth: "130px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{d.name}</span>
              <span style={{ fontSize: "7px", color: "#94a3b8" }}>{d.signer}</span>
              <span style={{ fontSize: "7px", color: d.status === "Firmado" ? "#10b981" : d.status === "Pendiente" ? "#f59e0b" : "#60a5fa", fontWeight: 700 }}>{d.status}</span>
            </div>
          ))}
        </Panel>
        <Panel title="Previsualización PDF" color="#8b5cf6">
          <div style={{ background: "#fff", borderRadius: "6px", padding: "8px", minHeight: "90px" }}>
            <div style={{ height: "6px", background: "#e2e8f0", borderRadius: "3px", marginBottom: "6px", width: "80%" }} />
            <div style={{ height: "4px", background: "#e2e8f0", borderRadius: "2px", marginBottom: "4px", width: "60%" }} />
            <div style={{ height: "4px", background: "#e2e8f0", borderRadius: "2px", marginBottom: "4px", width: "90%" }} />
            <div style={{ height: "4px", background: "#e2e8f0", borderRadius: "2px", marginBottom: "10px", width: "70%" }} />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
              <div>
                <div style={{ fontSize: "6px", color: "#64748b", marginBottom: "2px" }}>FIRMA CLIENTE</div>
                <svg viewBox="0 0 80 25" style={{ width: "70px", height: "20px" }}>
                  <path d="M5 18 Q20 5 35 14 T65 10" fill="none" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <div style={{ height: "1px", background: "#94a3b8", width: "70px" }} />
              </div>
              <div style={{ fontSize: "6.5px", color: "#10b981", fontWeight: 800, background: "rgba(16,185,129,0.1)", padding: "2px 6px", borderRadius: "4px" }}>✓ VERIFICADO</div>
            </div>
          </div>
        </Panel>
      </div>
    </div>,

    // ── 4. E-Commerce ────────────────────────────────────────────
    <div key="ecommerce" style={laptopBase("#ec4899")}>
      <TopBar color="#ec4899" title="E-Commerce" subtitle="Tienda Online · Stripe · PayPal" />
      <div style={grid(4)}>
        {[
          { label: "Ventas Hoy",    val: 53420, icon: "💳", color: "#ec4899", prefix: "$" },
          { label: "Pedidos",       val: 247,   icon: "📦", color: "#60a5fa" },
          { label: "Productos",     val: 1839,  icon: "🛍️", color: "#f59e0b" },
          { label: "Conversión",    val: 34,    icon: "📈", color: "#10b981", suffix: "%" },
        ].map(k => (
          <StatCard key={k.label} label={k.label} icon={k.icon} color={k.color}>
            <Counter target={k.val} prefix={k.prefix} suffix={k.suffix} color={k.color} />
          </StatCard>
        ))}
      </div>
      <div style={grid(2, 8)}>
        <Panel title="Últimas Ventas" color="#ec4899">
          {[
            { product: "Pack Diseño Web Pro",    price: "$1,200", payment: "Stripe"  },
            { product: "App Móvil React Native", price: "$3,500", payment: "PayPal"  },
            { product: "Mantenimiento 12 meses", price: "$600",   payment: "Cripto"  },
            { product: "Landing Page Premium",   price: "$850",   payment: "Stripe"  },
          ].map(v => (
            <div key={v.product} style={tableRow}>
              <span style={{ fontSize: "7.5px", fontWeight: 700 }}>{v.product}</span>
              <span style={{ fontSize: "8px", color: "#10b981", fontWeight: 800 }}>{v.price}</span>
              <span style={{ fontSize: "7px", color: "#94a3b8" }}>{v.payment}</span>
            </div>
          ))}
        </Panel>
        <Panel title="Top Productos" color="#ec4899">
          {[
            { name: "Sistema SaaS Completo", pct: 92 },
            { name: "App Móvil Nativa",       pct: 78 },
            { name: "E-Commerce + Pagos",     pct: 65 },
            { name: "Landing + SEO",          pct: 51 },
          ].map(p => (
            <div key={p.name} style={{ marginBottom: "8px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "8px", marginBottom: "3px" }}>
                <span style={{ fontWeight: 700 }}>{p.name}</span>
                <span style={{ color: "#ec4899", fontWeight: 800 }}>{p.pct}%</span>
              </div>
              <div style={progressBg}>
                <div style={{ ...progressBar, width: `${p.pct}%`, background: `linear-gradient(90deg, #ec4899, #a855f7)` }} />
              </div>
            </div>
          ))}
        </Panel>
      </div>
    </div>,
  ];

  return (
    <>
      {/* Animate transition when system changes */}
      <style>{`
        @keyframes fadeInSlide {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <div key={activeIndex} style={{ animation: "fadeInSlide 0.35s ease forwards", width: "100%", height: "100%" }}>
        {screens[activeIndex]}
      </div>

      {/* Live indicator badge (always visible) */}
      <div style={{
        position: "absolute",
        top: "10px",
        right: "10px",
        display: "flex",
        alignItems: "center",
        gap: "5px",
        background: "rgba(0,0,0,0.65)",
        backdropFilter: "blur(8px)",
        border: `1px solid ${sys.color}55`,
        borderRadius: "20px",
        padding: "3px 10px",
        zIndex: 10,
      }}>
        <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: sys.color, boxShadow: `0 0 8px ${sys.color}`, display: "inline-block", animation: "livePulse 1.4s ease-in-out infinite" }} />
        <span style={{ fontSize: "9px", fontWeight: 700, color: sys.color, fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: "0.5px" }}>
          DEMO EN VIVO
        </span>
      </div>
    </>
  );
};

// ─────────────────────────────────────────────────────────────
// PHONE SCREEN — compact mobile version of each system
// ─────────────────────────────────────────────────────────────
export const PhoneScreenContent: React.FC<{ activeIndex: number }> = ({ activeIndex }) => {
  const sys = SYSTEMS_LIST[activeIndex];

  const phoneScreens = [
    // TravelOS Mobile
    <div key="t" style={phoneBase(sys.color)}>
      <PhoneStatusBar color={sys.color} />
      <PhoneHeader icon="✈️" title="TravelOS VIP" color={sys.color} subtitle="Mi Agencia" />
      <div style={phoneStat(sys.color, "Reservas Hoy")}>
        <Counter target={142} color={sys.color} />
      </div>
      <PhoneMini color={sys.color} items={["Punta Cana · Confirmado ✓","Dubai · En proceso ⏳","Maldivas · Confirmado ✓"]} />
      <PhoneAction color={sys.color} label="Nueva Reserva +" />
    </div>,

    // AutoOS Mobile
    <div key="a" style={phoneBase(sys.color)}>
      <PhoneStatusBar color={sys.color} />
      <PhoneHeader icon="🚗" title="AutoOS ILORA" color={sys.color} subtitle="Mi Flota" />
      <div style={{ display: "flex", gap: "5px", marginBottom: "8px" }}>
        {[{l:"Disponibles", v:19, c:"#10b981"},{l:"En uso", v:21, c:"#f87171"},{l:"Reservados", v:8, c:sys.color}].map(s=>(
          <div key={s.l} style={{ flex:1, background:"rgba(255,255,255,0.05)", borderRadius:"6px", padding:"5px", textAlign:"center", border:`1px solid ${s.c}33` }}>
            <div style={{ fontSize:"12px", fontWeight:900, color:s.c }}>{s.v}</div>
            <div style={{ fontSize:"6.5px", color:"#94a3b8" }}>{s.l}</div>
          </div>
        ))}
      </div>
      <PhoneMini color={sys.color} items={["ABC-1234 · En Alquiler 🔑","XYZ-5678 · Disponible ✅","DEF-9012 · Reservado 🔒"]} />
      <PhoneAction color={sys.color} label="Ver Contrato PDF" />
    </div>,

    // CLIMUP Mobile
    <div key="c" style={phoneBase(sys.color)}>
      <PhoneStatusBar color={sys.color} />
      <PhoneHeader icon="❄️" title="CLIMUP" color={sys.color} subtitle="Alertas" />
      <div style={{ background:`rgba(245,158,11,0.12)`, border:`1px solid rgba(245,158,11,0.3)`, borderRadius:"8px", padding:"8px", marginBottom:"8px" }}>
        <div style={{ fontSize:"7.5px", color:"#f59e0b", fontWeight:800 }}>⚠️ MANTENIMIENTO URGENTE</div>
        <div style={{ fontSize:"8px", fontWeight:700, marginTop:"3px" }}>Hotel Caribe</div>
        <div style={{ fontSize:"7px", color:"#94a3b8" }}>Período 150 días · Vence en 3 días</div>
      </div>
      <PhoneMini color={sys.color} items={["Empresa López · 2 días ⚠️","Centro Comercial · 5 días","Clínica Rosa · 5 días"]} />
      <PhoneAction color={sys.color} label="Enviar Recordatorio" />
    </div>,

    // Firma Digital Mobile
    <div key="f" style={phoneBase(sys.color)}>
      <PhoneStatusBar color={sys.color} />
      <PhoneHeader icon="✍️" title="Firma Digital" color={sys.color} subtitle="Contratos" />
      <div style={{ background:"#ffffff", borderRadius:"8px", padding:"8px", marginBottom:"8px" }}>
        <div style={{ fontSize:"6.5px", color:"#64748b", marginBottom:"6px", textTransform:"uppercase" }}>Contrato de Mantenimiento</div>
        <svg viewBox="0 0 120 35" style={{ width:"100%", height:"28px" }}>
          <path d="M10 25 Q30 8, 50 18 T90 12 Q105 8 115 15" fill="none" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginTop:"4px" }}>
          <div style={{ height:"1px", background:"#cbd5e1", flex:1, marginRight:"8px" }} />
          <span style={{ fontSize:"6px", color:"#10b981", fontWeight:800, background:"rgba(16,185,129,0.1)", padding:"2px 5px", borderRadius:"4px" }}>✓ VERIFICADO</span>
        </div>
      </div>
      <PhoneAction color={sys.color} label="Enviar PDF por WhatsApp" />
    </div>,

    // E-Commerce Mobile
    <div key="e" style={phoneBase(sys.color)}>
      <PhoneStatusBar color={sys.color} />
      <PhoneHeader icon="🛍️" title="Mi Tienda" color={sys.color} subtitle="Dashboard" />
      <div style={phoneStat(sys.color, "Ventas de Hoy")}>
        <Counter target={53420} prefix="$" color={sys.color} />
      </div>
      <PhoneMini color={sys.color} items={["Sistema SaaS · $1,200 ✓","App Móvil · $3,500 ✓","Landing Pro · $850 ✓"]} />
      <PhoneAction color={sys.color} label="Ver Pedidos →" />
    </div>,
  ];

  return (
    <>
      <style>{`
        @keyframes fadeInSlide {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <div key={activeIndex} style={{ animation: "fadeInSlide 0.35s ease forwards", width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
        {phoneScreens[activeIndex]}
      </div>
    </>
  );
};

// ─────────────────────────────────────────────────────────────
// SHARED STYLE HELPERS
// ─────────────────────────────────────────────────────────────
function laptopBase(accent: string): React.CSSProperties {
  return {
    width: "100%", height: "100%",
    background: "#050b14",
    color: "#ffffff",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    padding: "12px 14px 10px",
    fontSize: "10px",
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    overflow: "hidden",
    boxSizing: "border-box",
    borderTop: `2px solid ${accent}55`,
  };
}

function phoneBase(accent: string): React.CSSProperties {
  return {
    width: "100%", height: "100%",
    background: "#050b14",
    color: "#ffffff",
    display: "flex",
    flexDirection: "column",
    gap: "7px",
    padding: "10px 10px 14px",
    fontSize: "10px",
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    overflow: "hidden",
    boxSizing: "border-box",
    borderTop: `2px solid ${accent}55`,
  };
}

const grid = (cols: number, gap: number = 6): React.CSSProperties => ({
  display: "grid",
  gridTemplateColumns: `repeat(${cols}, 1fr)`,
  gap: `${gap}px`,
});

const tableRow: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "4px 0",
  borderBottom: "1px solid rgba(255,255,255,0.05)",
  gap: "4px",
};

const progressBg: React.CSSProperties = {
  height: "4px",
  background: "rgba(255,255,255,0.08)",
  borderRadius: "2px",
  overflow: "hidden",
};

const progressBar: React.CSSProperties = {
  height: "100%",
  borderRadius: "2px",
  transition: "width 0.6s ease",
};

// Stat card for laptop grid
const StatCard: React.FC<{ label: string; icon: string; color: string; children: React.ReactNode }> = ({
  label, icon, color, children,
}) => (
  <div style={{
    background: `${color}0d`,
    border: `1px solid ${color}33`,
    borderRadius: "8px",
    padding: "8px",
    display: "flex",
    flexDirection: "column",
    gap: "3px",
  }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <span style={{ fontSize: "12px" }}>{icon}</span>
      <span style={{ fontSize: "6.5px", color: "#64748b", fontWeight: 600 }}>{label}</span>
    </div>
    <div style={{ fontSize: "16px", fontWeight: 900, lineHeight: 1 }}>{children}</div>
  </div>
);

// Panel with title
const Panel: React.FC<{ title: string; color: string; children: React.ReactNode }> = ({ title, color, children }) => (
  <div style={{
    background: "rgba(255,255,255,0.025)",
    border: "1px solid rgba(255,255,255,0.06)",
    borderRadius: "8px",
    padding: "8px",
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    overflow: "hidden",
  }}>
    <div style={{ fontSize: "8px", fontWeight: 800, color, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "2px" }}>
      {title}
    </div>
    {children}
  </div>
);

// Top bar for laptop screens
const TopBar: React.FC<{ color: string; title: string; subtitle: string }> = ({ color, title, subtitle }) => (
  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(255,255,255,0.07)", paddingBottom: "6px" }}>
    <div>
      <div style={{ fontSize: "13px", fontWeight: 900, color, letterSpacing: "-0.3px" }}>{title}</div>
      <div style={{ fontSize: "8px", color: "#64748b" }}>{subtitle}</div>
    </div>
    <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
      <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#f87171" }} />
      <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#f59e0b" }} />
      <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#10b981" }} />
    </div>
  </div>
);

// Phone status bar
const PhoneStatusBar: React.FC<{ color: string }> = ({ color: _color }) => (
  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "7.5px", color: "#94a3b8", marginBottom: "4px" }}>
    <span style={{ fontWeight: 800, color: "#fff" }}>9:41</span>
    <div style={{ width: "36px", height: "10px", background: "#000", borderRadius: "10px" }} />
    <span>5G ●</span>
  </div>
);

// Phone app header
const PhoneHeader: React.FC<{ icon: string; title: string; color: string; subtitle: string }> = ({ icon, title, color, subtitle }) => (
  <div style={{ display: "flex", alignItems: "center", gap: "6px", paddingBottom: "6px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
    <span style={{ fontSize: "16px" }}>{icon}</span>
    <div>
      <div style={{ fontSize: "10px", fontWeight: 900, color }}>{title}</div>
      <div style={{ fontSize: "7px", color: "#64748b" }}>{subtitle}</div>
    </div>
  </div>
);

// Phone main stat
function phoneStat(color: string, _label: string): React.CSSProperties {
  return {
    background: `${color}0d`,
    border: `1px solid ${color}33`,
    borderRadius: "8px",
    padding: "8px",
    textAlign: "center",
  } as React.CSSProperties;
}

// (we use it differently — keep as helper)
const PhoneMini: React.FC<{ color: string; items: string[] }> = ({ color, items }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: "4px", flex: 1 }}>
    {items.map((item, i) => (
      <div key={i} style={{ fontSize: "7.5px", padding: "5px 7px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "6px", color: "#cbd5e1", borderLeft: `2px solid ${color}66` }}>
        {item}
      </div>
    ))}
  </div>
);

const PhoneAction: React.FC<{ color: string; label: string }> = ({ color, label }) => (
  <div style={{ background: color, color: "#050b14", fontWeight: 800, fontSize: "8.5px", padding: "6px", borderRadius: "8px", textAlign: "center", marginTop: "auto" }}>
    {label}
  </div>
);
