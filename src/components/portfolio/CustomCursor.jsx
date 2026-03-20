import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const dotPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", move);

    let raf = 0;
    const animate = () => {
      dotPos.current.x += (pos.current.x - dotPos.current.x) * 0.12;
      dotPos.current.y += (pos.current.y - dotPos.current.y) * 0.12;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${pos.current.x - 4}px, ${pos.current.y - 4}px)`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dotPos.current.x - 18}px, ${dotPos.current.y - 18}px)`;
      }

      raf = requestAnimationFrame(animate);
    };

    animate();
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "#00f7ff",
          pointerEvents: "none",
          zIndex: 10000,
          mixBlendMode: "difference",
        }}
      />
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 36,
          height: 36,
          borderRadius: "50%",
          border: "1.5px solid rgba(0,247,255,0.4)",
          pointerEvents: "none",
          zIndex: 9999,
          transition: "border-color 0.3s",
        }}
      />
    </>
  );
}

