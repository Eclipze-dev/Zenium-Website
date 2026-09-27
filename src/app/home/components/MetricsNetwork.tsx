"use client";

import { useEffect, useRef } from "react";

/**
 * Node field restored from the stashed metrics section.
 * Only this canvas is used; the rest of that stash stays untouched.
 */
export default function MetricsNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dots: Array<{ x: number; y: number; vx: number; vy: number }> = [];
    let width = 0;
    let height = 0;
    let raf = 0;
    let running = true;

    const seed = () => {
      const count = Math.max(18, Math.round((width * height) / 18000));
      dots.length = 0;
      for (let i = 0; i < count; i += 1) {
        dots.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.28,
          vy: (Math.random() - 0.5) * 0.28,
        });
      }
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const link = Math.min(160, Math.max(110, width * 0.12));

      if (!reduce) {
        for (const dot of dots) {
          dot.x += dot.vx;
          dot.y += dot.vy;
          if (dot.x <= 0 || dot.x >= width) dot.vx *= -1;
          if (dot.y <= 0 || dot.y >= height) dot.vy *= -1;
        }
      }

      ctx.lineWidth = 1;
      for (let i = 0; i < dots.length; i += 1) {
        for (let j = i + 1; j < dots.length; j += 1) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist > link) continue;
          ctx.strokeStyle = `rgba(255,255,255,${(1 - dist / link) * 0.32})`;
          ctx.beginPath();
          ctx.moveTo(dots[i].x, dots[i].y);
          ctx.lineTo(dots[j].x, dots[j].y);
          ctx.stroke();
        }
      }

      ctx.fillStyle = "rgba(255,255,255,0.08)";
      for (const dot of dots) {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 1.6, 0, Math.PI * 2);
        ctx.fill();
      }

      if (running && !reduce) raf = window.requestAnimationFrame(draw);
    };

    resize();
    draw();

    const observer = new ResizeObserver(() => {
      resize();
      if (reduce) draw();
    });
    observer.observe(canvas);

    return () => {
      running = false;
      window.cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden
    />
  );
}
