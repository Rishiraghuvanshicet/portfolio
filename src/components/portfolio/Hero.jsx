import { motion as Motion, useScroll, useTransform } from "framer-motion";
import { btnStyle } from "./shared";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 160]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section
      id="about"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        padding: "4rem 1.2rem",
      }}
    >
      {/* Background grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `linear-gradient(rgba(0,247,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,247,255,0.04) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Glow blobs (responsive) */}
      <div className="blob1" />
      <div className="blob2" />

      <Motion.div
        style={{
          y,
          opacity,
          textAlign: "center",
          zIndex: 1,
          maxWidth: 900,
          width: "100%",
        }}
      >
        {/* PROFILE IMAGE */}
        <Motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "1.5rem" }}
        >
          <div className="profile-wrapper">
            <div className="profile-ring" />
            <img src="/rishi.jpg" alt="Rishi" className="profile-img" />
          </div>
        </Motion.div>

        {/* ROLE */}
        <Motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="role-text"
        >
          {"< Full Stack Developer />"}
        </Motion.p>

        {/* NAME */}
        <Motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="hero-title"
        >
          Rishi <br />
          <span className="stroke-text">Raghuvanshi</span>
        </Motion.h1>

        {/* DESCRIPTION */}
        <Motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="hero-desc"
        >
          Crafting performant, pixel-perfect web experiences with the MERN stack.
          Turning ideas into production-ready products.
        </Motion.p>

        {/* BUTTONS */}
        <Motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65 }}
          className="hero-buttons"
        >
          <a href="#" style={btnStyle("#00f7ff")}>GitHub ↗</a>
          <a href="#" style={btnStyle("transparent", true)}>LinkedIn ↗</a>
          <a href="#" style={btnStyle("transparent", true)}>Email Me</a>
        </Motion.div>

        {/* SCROLL */}
        <Motion.div className="scroll-indicator">
          <span>scroll</span>
          <div className="scroll-line" />
        </Motion.div>
      </Motion.div>

      {/* RESPONSIVE STYLES */}
      <style>
        {`
        .profile-wrapper {
          position: relative;
          width: 120px;
          height: 120px;
          margin: auto;
        }

        .profile-ring {
          position: absolute;
          inset: -3px;
          border-radius: 50%;
          background: conic-gradient(#00f7ff, #ff6ef7, #ffe94d, #00f7ff);
          animation: spin 4s linear infinite;
        }

        .profile-img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid #04040c;
          position: relative;
        }

        .role-text {
          font-size: 0.75rem;
          letter-spacing: 0.2em;
          color: #00f7ff;
          margin-bottom: 0.8rem;
        }

        .hero-title {
          font-size: clamp(2.2rem, 7vw, 6rem);
          color: #fff;
          font-weight: 800;
          line-height: 1;
        }

        .stroke-text {
          -webkit-text-stroke: 2px #00f7ff;
          color: transparent;
        }

        .hero-desc {
          font-size: 1rem;
          color: rgba(255,255,255,0.6);
          max-width: 500px;
          margin: 1rem auto 2rem;
          line-height: 1.6;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .scroll-indicator {
          margin-top: 3rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          font-size: 0.6rem;
          color: rgba(255,255,255,0.3);
        }

        .scroll-line {
          width: 1px;
          height: 50px;
          background: linear-gradient(to bottom, rgba(0,247,255,0.6), transparent);
        }

        .blob1 {
          position: absolute;
          width: 300px;
          height: 300px;
          top: 10%;
          right: 10%;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0,247,255,0.08), transparent);
        }

        .blob2 {
          position: absolute;
          width: 250px;
          height: 250px;
          bottom: 10%;
          left: 5%;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,110,247,0.07), transparent);
        }

        @media (min-width: 768px) {
          .profile-wrapper {
            width: 140px;
            height: 140px;
          }
          .hero-desc {
            font-size: 1.1rem;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 2rem;
          }
          .hero-desc {
            font-size: 0.9rem;
          }
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        `}
      </style>
    </section>
  );
}