"use client";

import { useCallback, useEffect, useId, useState } from "react";
import { cn } from "@/lib/cn";

const STAGES = [
  { id: "meter", label: "ENERGY METER" },
  { id: "hes", label: "HES" },
  { id: "mdms", label: "MDMS" },
  { id: "analytics", label: "ANALYTICS" },
] as const;

export type StageId = (typeof STAGES)[number]["id"];

type ZeniumDataFlowProps = {
  className?: string;
  /** Fill parent height (Edge section); scales SVG to available space. */
  fit?: boolean;
  /** Highlight a pipeline stage (e.g. synced with Edge capability carousel). */
  activeStage?: StageId | null;
};

export default function ZeniumDataFlow({
  className,
  fit = false,
  activeStage = null,
}: ZeniumDataFlowProps) {
  const uid = useId().replace(/:/g, "");
  const [hovered, setHovered] = useState<StageId | null>(null);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const handleStageEnter = useCallback((id: StageId) => {
    setHovered(id);
  }, []);

  const handleStageLeave = useCallback(() => {
    setHovered(null);
  }, []);

  const isLit = (id: StageId) => hovered === id || activeStage === id;

  const stageGlow = (id: StageId) =>
    isLit(id) ? `url(#glowStrong-${uid})` : `url(#glowSoft-${uid})`;

  return (
    <div
      className={cn(
        "zenium-data-flow relative mx-auto w-full",
        fit ? "flex h-full max-h-full max-w-none items-center justify-center" : "max-w-[460px]",
        className,
      )}
      aria-label="Zenium data journey from energy meter to analytics"
    >
      <svg
        viewBox="0 0 600 900"
        width="100%"
        height={fit ? "100%" : "auto"}
        preserveAspectRatio="xMidYMid meet"
        className={cn(
          "block overflow-visible",
          fit && "h-full max-h-full w-auto max-w-full",
        )}
        style={{ background: "transparent" }}
        role="img"
      >
        <defs>
          <linearGradient id={`orangeGrad-${uid}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F07F25" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#d96e1d" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id={`surfaceGrad-${uid}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--svg-surface-1)" />
            <stop offset="100%" stopColor="var(--svg-surface-2)" />
          </linearGradient>
          <radialGradient id={`glowSoft-${uid}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(240,127,37,0.35)" />
            <stop offset="100%" stopColor="rgba(240,127,37,0)" />
          </radialGradient>
          <radialGradient id={`glowStrong-${uid}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(240,127,37,0.65)" />
            <stop offset="100%" stopColor="rgba(240,127,37,0)" />
          </radialGradient>
          <filter
            id={`softGlow-${uid}`}
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Outer circuit frame */}
        <g className="outer-zenium-circuit" filter={`url(#softGlow-${uid})`}>
          <path
            d="M 120 60 L 60 60 L 60 840 L 120 840 M 480 60 L 540 60 L 540 840 L 480 840"
            fill="none"
            stroke="rgba(240,127,37,0.28)"
            strokeWidth="1.2"
            strokeDasharray="6 5"
            className={reduced ? "" : "zdf-circuit-flow"}
          />
          {[60, 200, 360, 520, 680, 840].map((y, i) => (
            <g key={i}>
              <circle
                cx="60"
                cy={y}
                r="3.5"
                fill="#F07F25"
                className={reduced ? "" : "zdf-circuit-node"}
                style={{ animationDelay: `${i * 0.4}s` }}
              />
              <circle
                cx="540"
                cy={y}
                r="3.5"
                fill="#F07F25"
                className={reduced ? "" : "zdf-circuit-node"}
                style={{ animationDelay: `${i * 0.4 + 0.2}s` }}
              />
            </g>
          ))}
          {!reduced &&
            [0, 1, 2].map((i) => (
              <circle
                key={`l${i}`}
                r="2.5"
                fill="#F07F25"
                className="zdf-circuit-dot-left"
                style={{ animationDelay: `${i * 2.5}s` }}
              />
            ))}
          {!reduced &&
            [0, 1, 2].map((i) => (
              <circle
                key={`r${i}`}
                r="2.5"
                fill="#F07F25"
                className="zdf-circuit-dot-right"
                style={{ animationDelay: `${i * 2.5 + 1.2}s` }}
              />
            ))}
        </g>

        {/* Wordmark */}
        <g className="zenium-wordmark">
          <text
            x="300"
            y="48"
            textAnchor="middle"
            fill="var(--svg-text)"
            fontSize="26"
            fontWeight="700"
            letterSpacing="0.32em"
            className={reduced ? "" : "zdf-wordmark-glow"}
          >
            ZENIUM
          </text>
          <line
            x1="250"
            y1="62"
            x2="350"
            y2="62"
            stroke="#F07F25"
            strokeWidth="1.5"
            opacity="0.7"
          />
        </g>

        {/* Energy meter */}
        <g
          className={cn("energy-meter zdf-stage", isLit("meter") && "zdf-stage-active")}
          onMouseEnter={() => handleStageEnter("meter")}
          onMouseLeave={handleStageLeave}
          style={{
            transformOrigin: "300px 140px",
            transition: "transform 250ms ease, filter 250ms ease",
          }}
        >
          <g className="zdf-rings" opacity="0.5">
            <circle
              cx="300"
              cy="140"
              r="78"
              fill="none"
              stroke="rgba(240,127,37,0.12)"
              strokeWidth="1"
              className={reduced ? "" : "zdf-ring-pulse"}
            />
            <circle
              cx="300"
              cy="140"
              r="64"
              fill="none"
              stroke="rgba(240,127,37,0.16)"
              strokeWidth="1"
              className={reduced ? "" : "zdf-ring-pulse"}
              style={{ animationDelay: "0.6s" }}
            />
            <circle
              cx="300"
              cy="140"
              r="52"
              fill="none"
              stroke="rgba(240,127,37,0.2)"
              strokeWidth="1"
              className={reduced ? "" : "zdf-ring-pulse"}
              style={{ animationDelay: "1.2s" }}
            />
          </g>
          <circle cx="300" cy="140" r="50" fill={stageGlow("meter")} />
          <rect
            x="258"
            y="108"
            width="84"
            height="64"
            rx="8"
            fill={`url(#surfaceGrad-${uid})`}
            stroke="#F07F25"
            strokeWidth="1.2"
          />
          <rect
            x="268"
            y="118"
            width="64"
            height="20"
            rx="3"
            fill="var(--svg-surface-2)"
            stroke="rgba(240,127,37,0.4)"
            strokeWidth="0.8"
          />
          <text
            x="300"
            y="132"
            textAnchor="middle"
            fill="#F07F25"
            fontSize="10"
            fontFamily="monospace"
            letterSpacing="0.1em"
          >
            01234
          </text>
          <circle
            cx="270"
            cy="156"
            r="2.5"
            fill="#F07F25"
            className={reduced ? "" : "zdf-blink"}
          />
          <circle
            cx="280"
            cy="156"
            r="2.5"
            fill="#F07F25"
            opacity="0.5"
            className={reduced ? "" : "zdf-blink"}
            style={{ animationDelay: "0.5s" }}
          />
          <circle
            cx="290"
            cy="156"
            r="2.5"
            fill="#F07F25"
            opacity="0.3"
            className={reduced ? "" : "zdf-blink"}
            style={{ animationDelay: "1s" }}
          />
          <rect
            x="312"
            y="152"
            width="14"
            height="8"
            rx="2"
            fill="rgba(255,255,255,0.08)"
            stroke="rgba(240,127,37,0.3)"
            strokeWidth="0.6"
          />
          <text
            x="380"
            y="138"
            fill="var(--svg-muted)"
            fontSize="11"
            fontWeight="600"
            letterSpacing="0.14em"
            className="zdf-label"
          >
            ENERGY
          </text>
          <text
            x="380"
            y="152"
            fill="var(--svg-muted)"
            fontSize="11"
            fontWeight="600"
            letterSpacing="0.14em"
            className="zdf-label"
          >
            METER
          </text>
        </g>

        <g className="meter-to-hes-flow">
          <DataFlow
            x={300}
            y1={178}
            y2={258}
            reduced={reduced}
            highlight={isLit("meter") || isLit("hes")}
          />
        </g>

        {/* HES */}
        <g
          className={cn("hes zdf-stage", isLit("hes") && "zdf-stage-active")}
          onMouseEnter={() => handleStageEnter("hes")}
          onMouseLeave={handleStageLeave}
          style={{
            transformOrigin: "300px 320px",
            transition: "transform 250ms ease, filter 250ms ease",
          }}
        >
          <circle cx="300" cy="320" r="50" fill={stageGlow("hes")} />
          <path
            d="M 258 328 C 248 328 244 316 252 310 C 250 296 266 290 274 298 C 280 286 302 286 308 298 C 316 290 332 296 330 310 C 340 314 338 328 328 328 Z"
            fill={`url(#surfaceGrad-${uid})`}
            stroke="#F07F25"
            strokeWidth="1.2"
          />
          <rect
            x="268"
            y="304"
            width="18"
            height="8"
            rx="1.5"
            fill="var(--svg-surface-2)"
            stroke="rgba(240,127,37,0.5)"
            strokeWidth="0.7"
          />
          <rect
            x="291"
            y="304"
            width="18"
            height="8"
            rx="1.5"
            fill="var(--svg-surface-2)"
            stroke="rgba(240,127,37,0.5)"
            strokeWidth="0.7"
          />
          <rect
            x="280"
            y="316"
            width="18"
            height="8"
            rx="1.5"
            fill="var(--svg-surface-2)"
            stroke="rgba(240,127,37,0.5)"
            strokeWidth="0.7"
          />
          <circle
            cx="272"
            cy="308"
            r="1.2"
            fill="#F07F25"
            className={reduced ? "" : "zdf-blink"}
          />
          <circle
            cx="295"
            cy="308"
            r="1.2"
            fill="#F07F25"
            className={reduced ? "" : "zdf-blink"}
            style={{ animationDelay: "0.4s" }}
          />
          <circle
            cx="284"
            cy="320"
            r="1.2"
            fill="#F07F25"
            className={reduced ? "" : "zdf-blink"}
            style={{ animationDelay: "0.8s" }}
          />
          <ellipse
            cx="300"
            cy="338"
            rx="42"
            ry="4"
            fill="none"
            stroke="rgba(240,127,37,0.25)"
            strokeWidth="0.8"
          />
          <text
            x="380"
            y="322"
            fill="var(--svg-muted)"
            fontSize="12"
            fontWeight="600"
            letterSpacing="0.14em"
            className="zdf-label"
          >
            HES
          </text>
        </g>

        <g className="hes-to-mdms-flow">
          <DataFlow
            x={300}
            y1={348}
            y2={448}
            reduced={reduced}
            highlight={isLit("hes") || isLit("mdms")}
          />
        </g>

        {/* MDMS */}
        <g
          className={cn("mdms zdf-stage", isLit("mdms") && "zdf-stage-active")}
          onMouseEnter={() => handleStageEnter("mdms")}
          onMouseLeave={handleStageLeave}
          style={{
            transformOrigin: "300px 510px",
            transition: "transform 250ms ease, filter 250ms ease",
          }}
        >
          <circle cx="300" cy="510" r="52" fill={stageGlow("mdms")} />
          {[0, 1, 2].map((i) => (
            <g key={i}>
              <ellipse
                cx="300"
                cy={486 + i * 20}
                rx="38"
                ry="7"
                fill={`url(#surfaceGrad-${uid})`}
                stroke="#F07F25"
                strokeWidth="1"
                opacity={0.9 - i * 0.15}
              />
              <path
                d={`M 262 ${486 + i * 20} L 262 ${494 + i * 20} A 38 7 0 0 0 338 ${494 + i * 20} L 338 ${486 + i * 20}`}
                fill={`url(#surfaceGrad-${uid})`}
                stroke="#F07F25"
                strokeWidth="1"
                opacity={0.9 - i * 0.15}
              />
              <ellipse
                cx="300"
                cy={486 + i * 20}
                rx="38"
                ry="7"
                fill="none"
                stroke="rgba(240,127,37,0.5)"
                strokeWidth="0.6"
              />
            </g>
          ))}
          <circle
            cx="276"
            cy="486"
            r="1.5"
            fill="#F07F25"
            className={reduced ? "" : "zdf-blink"}
          />
          <circle
            cx="276"
            cy="506"
            r="1.5"
            fill="#F07F25"
            className={reduced ? "" : "zdf-blink"}
            style={{ animationDelay: "0.5s" }}
          />
          <circle
            cx="276"
            cy="526"
            r="1.5"
            fill="#F07F25"
            className={reduced ? "" : "zdf-blink"}
            style={{ animationDelay: "1s" }}
          />
          <ellipse
            cx="300"
            cy="540"
            rx="46"
            ry="4"
            fill="none"
            stroke="rgba(240,127,37,0.25)"
            strokeWidth="0.8"
          />
          <text
            x="380"
            y="508"
            fill="var(--svg-muted)"
            fontSize="12"
            fontWeight="600"
            letterSpacing="0.14em"
            className="zdf-label"
          >
            MDMS
          </text>
        </g>

        <g className="mdms-to-analytics-flow">
          <DataFlow
            x={300}
            y1={548}
            y2={668}
            reduced={reduced}
            highlight={isLit("mdms") || isLit("analytics")}
          />
        </g>

        {/* Analytics */}
        <g
          className={cn(
            "analytics zdf-stage",
            isLit("analytics") && "zdf-stage-active",
          )}
          onMouseEnter={() => handleStageEnter("analytics")}
          onMouseLeave={handleStageLeave}
          style={{
            transformOrigin: "300px 740px",
            transition: "transform 250ms ease, filter 250ms ease",
          }}
        >
          <circle cx="300" cy="740" r="60" fill={stageGlow("analytics")} />
          <rect
            x="240"
            y="690"
            width="120"
            height="92"
            rx="6"
            fill={`url(#surfaceGrad-${uid})`}
            stroke="#F07F25"
            strokeWidth="1.2"
          />
          <g className="zdf-bars">
            {[0, 1, 2, 3].map((i) => (
              <rect
                key={i}
                x={252 + i * 14}
                y={760 - [14, 24, 18, 28][i]}
                width="9"
                height={[14, 24, 18, 28][i]}
                rx="1.5"
                fill="#F07F25"
                opacity={0.85}
                className={reduced ? "" : "zdf-bar-rise"}
                style={{
                  animationDelay: `${i * 0.15}s`,
                  transformOrigin: `center ${760}px`,
                }}
              />
            ))}
          </g>
          <polyline
            points="252,722 266,716 280,724 294,710 308,718 322,706 336,712 348,704"
            fill="none"
            stroke="#F07F25"
            strokeWidth="1.5"
            opacity="0.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={reduced ? "" : "zdf-line-draw"}
          />
          <circle
            cx="346"
            cy="772"
            r="9"
            fill="none"
            stroke="rgba(240,127,37,0.2)"
            strokeWidth="2.5"
          />
          <circle
            cx="346"
            cy="772"
            r="9"
            fill="none"
            stroke="#F07F25"
            strokeWidth="2.5"
            strokeDasharray="28 56"
            strokeLinecap="round"
            transform="rotate(-90 346 772)"
            className={reduced ? "" : "zdf-arc-spin"}
          />
          <circle
            cx="322"
            cy="706"
            r="2"
            fill="#F07F25"
            className={reduced ? "" : "zdf-dot-pulse"}
          />
          <text
            x="380"
            y="730"
            fill="var(--svg-muted)"
            fontSize="11"
            fontWeight="600"
            letterSpacing="0.14em"
            className="zdf-label"
          >
            ANALYTICS
          </text>
        </g>
      </svg>
    </div>
  );
}

function DataFlow({
  x,
  y1,
  y2,
  reduced,
  highlight,
}: {
  x: number;
  y1: number;
  y2: number;
  reduced: boolean;
  highlight: boolean;
}) {
  const midX = x;
  const lines = [-10, -4, 4, 10];

  return (
    <g className="zdf-flow" opacity={highlight ? 1 : 0.55}>
      {/* Soft beam behind streams */}
      <line
        x1={midX}
        y1={y1}
        x2={midX}
        y2={y2 - 4}
        stroke="rgba(240,127,37,0.12)"
        strokeWidth="18"
        strokeLinecap="round"
      />
      {lines.map((dx, i) => (
        <line
          key={i}
          x1={midX + dx}
          y1={y1}
          x2={midX + dx}
          y2={y2}
          stroke={
            highlight ? "rgba(240,127,37,0.35)" : "rgba(240,127,37,0.18)"
          }
          strokeWidth="0.9"
          strokeDasharray="3 4"
          className={reduced ? "" : "zdf-stream-flow"}
          style={{ animationDelay: `${i * 0.3}s` }}
        />
      ))}
      {!reduced &&
        [0, 1, 2, 3].map((i) => (
          <circle key={`p${i}`} r="2.6" fill="#F07F25" opacity="0.95">
            <animateMotion
              dur="2.2s"
              repeatCount="indefinite"
              begin={`${i * 0.45}s`}
              path={`M ${midX + lines[i]} ${y1} L ${midX + lines[i]} ${y2 - 6}`}
              keyPoints="0;1"
              keyTimes="0;1"
              calcMode="linear"
            />
            <animate
              attributeName="opacity"
              values="0;1;1;0"
              keyTimes="0;0.12;0.85;1"
              dur="2.2s"
              begin={`${i * 0.45}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}
      <g className="zdf-arrow">
        <line
          x1={midX}
          y1={y2 - 18}
          x2={midX}
          y2={y2 - 2}
          stroke="#F07F25"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d={`M ${midX - 5.5} ${y2 - 9} L ${midX} ${y2 - 2} L ${midX + 5.5} ${y2 - 9}`}
          fill="none"
          stroke="#F07F25"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
  );
}
