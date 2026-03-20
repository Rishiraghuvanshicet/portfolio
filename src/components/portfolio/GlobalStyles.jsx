export default function GlobalStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Mono:wght@300;400;500&family=DM+Sans:wght@300;400;500&display=swap');

      @keyframes spin { to { transform: rotate(360deg); } }

      * {
        cursor: none !important;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      body {
        background: #04040c;
        color: #fff;
        scroll-behavior: smooth;
        overflow-x: hidden;
      }

      ::-webkit-scrollbar { width: 4px; }
      ::-webkit-scrollbar-track { background: #04040c; }
      ::-webkit-scrollbar-thumb { background: #00f7ff44; border-radius: 4px; }

      a { cursor: none !important; }
    `}</style>
  );
}

