import { useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = ["about", "projects", "skills", "journey", "contact"];
    const onScroll = () => {
      let current = "about";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) current = id;
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false); // close menu on click
    }
  };

  const links = ["About", "Projects", "Skills", "Journey", "Contact"];

  return (
    <Motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 500,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1rem 1.5rem",
        background: scrolled ? "rgba(4,4,12,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,247,255,0.1)" : "none",
        transition: "all 0.4s ease",
      }}
    >
      {/* LOGO */}
      <button
        onClick={() => scrollTo("about")}
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "1.3rem",
          fontWeight: 800,
          color: "#fff",
          background: "none",
          border: "none",
        }}
      >
        RR<span style={{ color: "#00f7ff" }}>.</span>
      </button>

      {/* DESKTOP MENU */}
      <div
        className="desktop-menu"
        style={{
          display: "flex",
          gap: "2rem",
        }}
      >
        {links.map((l) => {
          const id = l.toLowerCase();
          const isActive = activeSection === id;

          return (
            <button
              key={l}
              onClick={() => scrollTo(id)}
              style={{
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: isActive ? "#00f7ff" : "rgba(255,255,255,0.6)",
                background: "none",
                border: "none",
                position: "relative",
              }}
            >
              {l}
              {isActive && (
                <Motion.div
                  layoutId="nav-indicator"
                  style={{
                    position: "absolute",
                    bottom: -2,
                    left: 0,
                    right: 0,
                    height: 2,
                    background: "#00f7ff",
                  }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* HAMBURGER */}
      <div
        className="mobile-menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: "none",
          flexDirection: "column",
          gap: "5px",
          cursor: "pointer",
        }}
      >
        <span style={{ width: 22, height: 2, background: "#fff" }} />
        <span style={{ width: 22, height: 2, background: "#fff" }} />
        <span style={{ width: 22, height: 2, background: "#fff" }} />
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <Motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "#050510",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "1.5rem 0",
            gap: "1.5rem",
          }}
        >
          {links.map((l) => {
            const id = l.toLowerCase();
            return (
              <button
                key={l}
                onClick={() => scrollTo(id)}
                style={{
                  color: "#fff",
                  background: "none",
                  border: "none",
                  fontSize: "1rem",
                }}
              >
                {l}
              </button>
            );
          })}
        </Motion.div>
      )}

      {/* MEDIA QUERY */}
      <style>
        {`
          @media (max-width: 768px) {
            .desktop-menu {
              display: none !important;
            }
            .mobile-menu-btn {
              display: flex !important;
            }
          }
        `}
      </style>
    </Motion.nav>
  );
}