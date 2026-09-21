import { useEffect, useRef } from 'react';

interface ParticleCanvasProps {
  isDark: boolean;
}

interface Particle3D {
  x: number;
  y: number;
  z: number;
  baseX: number;
  baseY: number;
  baseZ: number;
  size: number;
}

export default function ParticleCanvas({ isDark }: ParticleCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const particleCount = 160;
    const particles: Particle3D[] = [];
    const spread = 700;

    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * spread;
      const y = (Math.random() - 0.5) * spread;
      const z = (Math.random() - 0.5) * spread;
      particles.push({
        x,
        y,
        z,
        baseX: x,
        baseY: y,
        baseZ: z,
        size: Math.random() * 2 + 1.2,
      });
    }

    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;
      targetMouseX = (clientX / width - 0.5) * 0.4;
      targetMouseY = (clientY / height - 0.5) * 0.4;
    };

    window.addEventListener('mousemove', handleMouseMove);

    let angleY = 0;
    let angleX = 0;
    const fov = 350;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse follow
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      angleY += 0.0015;
      angleX += 0.0008;

      const cosY = Math.cos(angleY + mouseX);
      const sinY = Math.sin(angleY + mouseX);
      const cosX = Math.cos(angleX + mouseY);
      const sinX = Math.sin(angleX + mouseY);

      const centerX = width / 2;
      const centerY = height / 2;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // 3D rotation around Y axis
        const x1 = p.baseX * cosY - p.baseZ * sinY;
        const z1 = p.baseZ * cosY + p.baseX * sinY;

        // 3D rotation around X axis
        const y2 = p.baseY * cosX - z1 * sinX;
        const z2 = z1 * cosX + p.baseY * sinX;

        // Depth perspective projection
        const depth = z2 + 450;
        if (depth <= 10) continue;

        const scale = fov / depth;
        const screenX = centerX + x1 * scale;
        const screenY = centerY + y2 * scale;

        const alpha = Math.min(Math.max((depth - 150) / 400, 0.15), 0.75);

        ctx.beginPath();
        ctx.arc(screenX, screenY, p.size * scale, 0, Math.PI * 2);

        if (isDark) {
          ctx.fillStyle = i % 2 === 0 ? `rgba(56, 189, 248, ${alpha})` : `rgba(16, 185, 129, ${alpha})`;
          ctx.shadowBlur = 4;
          ctx.shadowColor = 'rgba(56, 189, 248, 0.4)';
        } else {
          ctx.fillStyle = i % 2 === 0 ? `rgba(2, 132, 199, ${alpha * 0.7})` : `rgba(13, 148, 136, ${alpha * 0.7})`;
          ctx.shadowBlur = 0;
          ctx.shadowColor = 'transparent';
        }

        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isDark]);

  return (
    <canvas
      id="bg-canvas"
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
