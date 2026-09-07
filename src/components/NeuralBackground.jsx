import { useEffect, useRef } from 'react';

// Referencia: 21st.dev @shivendra9795kumar/neural-access-login
// Se conserva el concepto de fondo de "red neuronal" animada, pero coloreada
// con varios tonos de la paleta de marca (teal, tealLight, gold) en vez de un
// solo color sólido.
const PALETTE = ['#12967F', '#5FC9B4', '#E9B949', '#0B6E5C'];

export default function NeuralBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;
    let width, height;
    let nodes = [];

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function resize() {
      width = canvas.width = canvas.offsetWidth * devicePixelRatio;
      height = canvas.height = canvas.offsetHeight * devicePixelRatio;
    }

    function initNodes() {
      const count = Math.floor((canvas.offsetWidth * canvas.offsetHeight) / 18000);
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4 * devicePixelRatio,
        vy: (Math.random() - 0.5) * 0.4 * devicePixelRatio,
        color: PALETTE[Math.floor(Math.random() * PALETTE.length)],
        r: (Math.random() * 1.5 + 1) * devicePixelRatio,
      }));
    }

    function step() {
      ctx.clearRect(0, 0, width, height);
      const linkDist = 140 * devicePixelRatio;

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        a.x += a.vx;
        a.y += a.vy;
        if (a.x < 0 || a.x > width) a.vx *= -1;
        if (a.y < 0 || a.y > height) a.vy *= -1;

        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < linkDist) {
            ctx.strokeStyle = a.color;
            ctx.globalAlpha = (1 - dist / linkDist) * 0.25;
            ctx.lineWidth = devicePixelRatio * 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 0.9;
      for (const n of nodes) {
        ctx.fillStyle = n.color;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      animationId = requestAnimationFrame(step);
    }

    resize();
    initNodes();
    if (!prefersReduced) {
      step();
    } else {
      step(); // dibuja un frame estático, sin loop
    }

    const onResize = () => {
      resize();
      initNodes();
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div className="absolute inset-0 bg-xenco-ink">
      <canvas ref={canvasRef} className="w-full h-full opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-b from-xenco-ink/40 via-transparent to-xenco-ink" />
    </div>
  );
}
