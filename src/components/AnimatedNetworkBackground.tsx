"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  glow: boolean;
};

type Palette = {
  node: readonly [number, number, number, number];
  line: readonly [number, number, number, number];
  lineBright: readonly [number, number, number, number];
};

const DARK: Palette = {
  node: [255, 255, 255, 0.45],
  line: [210, 225, 235, 0.18],
  lineBright: [220, 235, 245, 0.28],
};

const LIGHT: Palette = {
  node: [11, 42, 61, 0.22],
  line: [11, 42, 61, 0.12],
  lineBright: [11, 42, 61, 0.2],
};

const MAX_SPEED = 0.35;
const MIN_SPEED = 0.05;
const LINE_WIDTH = 0.6;

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function rand(min: number, max: number) {
  return min + Math.random() * (max - min);
}

function gaussian() {
  let u = 0;
  let v = 0;
  while (u === 0) u = Math.random();
  while (v === 0) v = Math.random();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}

function rgba(color: readonly [number, number, number, number], alpha = color[3]) {
  return `rgba(${color[0]},${color[1]},${color[2]},${alpha})`;
}

function isLightTheme() {
  return document.documentElement.getAttribute("data-theme") === "light";
}

function breakpoint(width: number) {
  if (width < 640) return "mobile" as const;
  if (width < 1024) return "tablet" as const;
  return "desktop" as const;
}

function particleBudget(width: number, height: number) {
  const area = width * height;
  const bp = breakpoint(width);
  if (bp === "desktop") return clamp(Math.round(area / 9000), 70, 100);
  if (bp === "tablet") return clamp(Math.round(area / 11000), 45, 70);
  return clamp(Math.round(area / 14000), 25, 45);
}

function connectionDistance(width: number) {
  const bp = breakpoint(width);
  if (bp === "desktop") return 150;
  if (bp === "tablet") return 120;
  return 90;
}

function randomVelocity(scale = 1) {
  const speed = rand(0.05, 0.25) * scale;
  const angle = Math.random() * Math.PI * 2;
  return { vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed };
}

function clampSpeed(p: Particle) {
  const speed = Math.hypot(p.vx, p.vy);
  if (speed > MAX_SPEED) {
    const s = MAX_SPEED / speed;
    p.vx *= s;
    p.vy *= s;
  } else if (speed > 0 && speed < MIN_SPEED) {
    const s = MIN_SPEED / speed;
    p.vx *= s;
    p.vy *= s;
  }
}

function makeParticle(x: number, y: number, width: number, height: number, slower = false): Particle {
  const vel = randomVelocity(slower ? 0.7 : 1);
  const glow = Math.random() < 0.12;
  return {
    x: clamp(x, 4, Math.max(4, width - 4)),
    y: clamp(y, 4, Math.max(4, height - 4)),
    vx: vel.vx,
    vy: vel.vy,
    r: glow || Math.random() < 0.18 ? rand(2, 2.5) : rand(1, 1.5),
    glow,
  };
}

function seedParticles(width: number, height: number): Particle[] {
  const count = particleBudget(width, height);
  const particles: Particle[] = [];
  const bp = breakpoint(width);

  const anchors = [
    { x: 0.1, y: 0.42 },
    { x: 0.3, y: 0.28 },
    { x: 0.5, y: 0.58 },
    { x: 0.68, y: 0.35 },
    { x: 0.88, y: 0.52 },
  ].map((a) => ({
    x: (a.x + rand(-0.035, 0.035)) * width,
    y: clamp((a.y + rand(-0.12, 0.12)) * height, height * 0.12, height * 0.88),
  }));

  const perClusterMin = bp === "mobile" ? 4 : bp === "tablet" ? 6 : 8;
  const perClusterMax = bp === "mobile" ? 8 : bp === "tablet" ? 12 : 16;
  const clusterTarget = Math.round(count * 0.62);
  const sizes: number[] = [];
  let remaining = clusterTarget;

  for (let i = 0; i < anchors.length; i++) {
    const left = anchors.length - i;
    if (i === anchors.length - 1) {
      sizes.push(clamp(remaining, perClusterMin, perClusterMax));
      break;
    }
    const take = clamp(
      Math.round(clusterTarget / anchors.length + rand(-2, 3)),
      perClusterMin,
      Math.min(perClusterMax, remaining - perClusterMin * (left - 1)),
    );
    sizes.push(take);
    remaining -= take;
  }

  for (let i = 0; i < anchors.length; i++) {
    const anchor = anchors[i];
    const n = sizes[i];
    const radius = rand(bp === "mobile" ? 36 : 50, bp === "mobile" ? 72 : 110);
    particles.push(makeParticle(anchor.x, anchor.y, width, height, true));
    for (let k = 1; k < n; k++) {
      const angle = (k / Math.max(1, n - 1)) * Math.PI * 2 + rand(-0.4, 0.4);
      const dist = radius * (0.22 + Math.min(0.85, Math.abs(gaussian()) * 0.32));
      particles.push(
        makeParticle(
          anchor.x + Math.cos(angle) * dist + gaussian() * 8,
          anchor.y + Math.sin(angle) * dist + gaussian() * 8,
          width,
          height,
          true,
        ),
      );
    }
  }

  const bridges = Math.min(anchors.length - 1, Math.max(2, Math.round(count * 0.08)));
  for (let i = 0; i < bridges; i++) {
    const a = anchors[i];
    const b = anchors[i + 1];
    const t = rand(0.32, 0.68);
    particles.push(
      makeParticle(
        a.x + (b.x - a.x) * t + rand(-18, 18),
        a.y + (b.y - a.y) * t + rand(-28, 28),
        width,
        height,
      ),
    );
  }

  const isolated = Math.min(8, Math.max(3, Math.round(count * 0.12)));
  for (let i = 0; i < isolated; i++) {
    let x = rand(width * 0.04, width * 0.96);
    let y = rand(height * 0.08, height * 0.92);
    for (let attempt = 0; attempt < 4; attempt++) {
      const tooClose = anchors.some((anchor) => {
        const dx = x - anchor.x;
        const dy = y - anchor.y;
        return dx * dx + dy * dy < 150 * 150;
      });
      if (!tooClose) break;
      x = rand(width * 0.04, width * 0.96);
      y = rand(height * 0.08, height * 0.92);
    }
    particles.push(makeParticle(x, y, width, height));
  }

  while (particles.length < count) {
    particles.push(makeParticle(rand(0, width), rand(0, height), width, height));
  }

  return particles.slice(0, count);
}

export default function AnimatedNetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    let width = 0;
    let height = 0;
    let maxDist = 150;
    let maxDistSq = maxDist * maxDist;
    let palette: Palette = isLightTheme() ? LIGHT : DARK;
    let reduced = false;
    let visible = true;
    let raf = 0;
    let lastW = 0;
    let lastH = 0;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const cancelLoop = () => {
      if (raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    };

    const draw = () => {
      if (width < 2 || height < 2) return;
      ctx.clearRect(0, 0, width, height);

      const closeThresh = maxDist * 0.4;
      const count = particles.length;

      for (let i = 0; i < count; i++) {
        const a = particles[i];
        for (let j = i + 1; j < count; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distSq = dx * dx + dy * dy;
          if (distSq >= maxDistSq || distSq === 0) continue;
          const dist = Math.sqrt(distSq);
          const t = 1 - dist / maxDist;
          const color = dist < closeThresh ? palette.lineBright : palette.line;
          const alpha = color[3] * t;
          if (alpha < 0.02) continue;
          ctx.beginPath();
          ctx.strokeStyle = rgba(color, alpha);
          ctx.lineWidth = LINE_WIDTH;
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      for (const p of particles) {
        if (p.glow) {
          ctx.shadowBlur = 4;
          ctx.shadowColor = rgba(palette.node, palette.node[3] * 0.6);
        } else {
          ctx.shadowBlur = 0;
        }
        ctx.beginPath();
        ctx.fillStyle = rgba(palette.node);
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.shadowBlur = 0;
    };

    const update = () => {
      const pad = 3;
      for (const p of particles) {
        p.vx += (Math.random() - 0.5) * 0.008;
        p.vy += (Math.random() - 0.5) * 0.008;
        clampSpeed(p);
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < pad) {
          p.x = pad;
          p.vx = Math.abs(p.vx) * 0.9;
        } else if (p.x > width - pad) {
          p.x = width - pad;
          p.vx = -Math.abs(p.vx) * 0.9;
        }
        if (p.y < pad) {
          p.y = pad;
          p.vy = Math.abs(p.vy) * 0.9;
        } else if (p.y > height - pad) {
          p.y = height - pad;
          p.vy = -Math.abs(p.vy) * 0.9;
        }
      }
    };

    const tick = () => {
      raf = 0;
      if (!visible || reduced) return;
      update();
      draw();
      raf = requestAnimationFrame(tick);
    };

    const startLoop = () => {
      if (reduced || !visible || raf) return;
      raf = requestAnimationFrame(tick);
    };

    const resize = () => {
      const rect = parent.getBoundingClientRect();
      const nextW = Math.max(1, Math.round(rect.width));
      const nextH = Math.max(1, Math.round(rect.height));
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(nextW * dpr);
      canvas.height = Math.floor(nextH * dpr);
      canvas.style.width = `${nextW}px`;
      canvas.style.height = `${nextH}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      width = nextW;
      height = nextH;
      maxDist = connectionDistance(nextW);
      maxDistSq = maxDist * maxDist;

      const areaChanged = Math.abs(nextW - lastW) > 32 || Math.abs(nextH - lastH) > 32;
      const budget = particleBudget(nextW, nextH);
      if (particles.length === 0 || areaChanged || budget !== particles.length) {
        particles = seedParticles(nextW, nextH);
      } else {
        for (const p of particles) {
          p.x = clamp(p.x, 4, nextW - 4);
          p.y = clamp(p.y, 4, nextH - 4);
        }
      }

      lastW = nextW;
      lastH = nextH;
      draw();
    };

    const applyReducedMotion = (matches: boolean) => {
      reduced = matches;
      if (reduced) {
        cancelLoop();
        draw();
      } else {
        startLoop();
      }
    };

    resize();
    applyReducedMotion(motionQuery.matches);

    const resizeObserver = new ResizeObserver(() => {
      resize();
    });
    resizeObserver.observe(parent);

    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        visible = entries.some((entry) => entry.isIntersecting);
        if (visible) startLoop();
        else cancelLoop();
      },
      { rootMargin: "80px" },
    );
    intersectionObserver.observe(parent);

    const onMotionChange = (event: MediaQueryListEvent) => {
      applyReducedMotion(event.matches);
    };
    motionQuery.addEventListener("change", onMotionChange);

    const themeObserver = new MutationObserver(() => {
      palette = isLightTheme() ? LIGHT : DARK;
      draw();
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => {
      cancelLoop();
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      themeObserver.disconnect();
      motionQuery.removeEventListener("change", onMotionChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
