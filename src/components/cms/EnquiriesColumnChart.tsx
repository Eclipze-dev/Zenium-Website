"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { useCmsDark } from "@/components/cms/useCmsDark";

type EnquiryPoint = {
  label: string;
  total: number;
  color: string;
};

const COLUMN_COLORS = [
  "#67b7dc",
  "#6794dc",
  "#6771dc",
  "#8067dc",
  "#a367dc",
  "#c767dc",
  "#dc67ce",
  "#dc67ab",
  "#dc6788",
  "#dc6967",
  "#dc8c67",
  "#dcaf67",
];

const HEIGHT = 320;
const PAD_LEFT = 36;
const PAD_RIGHT = 28;
const PAD_TOP = 12;
const PAD_BOTTOM = 32;

function axisScale(maxValue: number) {
  const max = Math.max(0, maxValue);
  let step = 2;
  let top = 10;
  if (max > 10) {
    const stepped = Math.ceil(max / 2) * 2;
    if (stepped <= 20) {
      top = stepped;
    } else {
      const rough = stepped / 5;
      const magnitude = 10 ** Math.floor(Math.log10(rough));
      const error = rough / magnitude;
      const nice = error <= 1 ? 1 : error <= 2 ? 2 : error <= 5 ? 5 : 10;
      step = Math.max(2, nice * magnitude);
      top = Math.ceil(max / step) * step;
    }
  }
  const ticks: number[] = [];
  for (let value = 0; value <= top + step / 1000; value += step) {
    ticks.push(Math.round(value));
  }
  return { top, ticks };
}

function columnPath(x: number, y: number, width: number, height: number) {
  const radius = Math.min(5, width / 2, height);
  if (radius <= 0) return "";
  return [
    `M ${x} ${y + height}`,
    `L ${x} ${y + radius}`,
    `Q ${x} ${y} ${x + radius} ${y}`,
    `L ${x + width - radius} ${y}`,
    `Q ${x + width} ${y} ${x + width} ${y + radius}`,
    `L ${x + width} ${y + height}`,
    "Z",
  ].join(" ");
}

export default function EnquiriesColumnChart({ rows }: { rows: EnquiryPoint[] }) {
  const host = useRef<HTMLDivElement>(null);
  const dark = useCmsDark();
  const [width, setWidth] = useState(420);
  const [hover, setHover] = useState<number | null>(null);

  useLayoutEffect(() => {
    const element = host.current;
    if (!element) return;
    const measure = () => {
      setWidth(Math.max(element.clientWidth, 180));
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const labelColor = dark ? "#94a3b8" : "#6b7280";
  const gridColor = dark ? "#334155" : "#e5e7eb";
  const plotLeft = PAD_LEFT;
  const plotTop = PAD_TOP;
  const plotWidth = Math.max(width - PAD_LEFT - PAD_RIGHT, 1);
  const plotHeight = HEIGHT - PAD_TOP - PAD_BOTTOM;
  const plotBottom = plotTop + plotHeight;
  const { top, ticks } = axisScale(Math.max(...rows.map((row) => row.total), 0));
  const slot = rows.length > 0 ? plotWidth / rows.length : plotWidth;
  const barWidth = Math.max(slot * 0.62, 1);
  const active = hover == null ? null : rows[hover];

  return (
    <div ref={host} className="relative h-80 w-full min-w-0 max-w-full overflow-hidden">
      <svg
        width={width}
        height={HEIGHT}
        viewBox={`0 0 ${width} ${HEIGHT}`}
        role="img"
        aria-label="Enquiries over the last 7 days"
        className="block"
      >
        {ticks.map((tick) => {
          const y = plotBottom - (tick / top) * plotHeight;
          return (
            <g key={tick}>
              <line x1={plotLeft} x2={plotLeft + plotWidth} y1={y} y2={y} stroke={gridColor} />
              <text
                x={plotLeft - 8}
                y={y}
                textAnchor="end"
                dominantBaseline="middle"
                fill={labelColor}
                fontSize={12}
                fontFamily="inherit"
              >
                {tick}
              </text>
            </g>
          );
        })}
        {rows.map((row, index) => {
          const x = plotLeft + slot * index + (slot - barWidth) / 2;
          const height = top === 0 ? 0 : (row.total / top) * plotHeight;
          const y = plotBottom - height;
          const color = COLUMN_COLORS[index % COLUMN_COLORS.length];
          return (
            <g key={`${row.label}-${index}`}>
              <rect
                x={plotLeft + slot * index}
                y={plotTop}
                width={slot}
                height={plotHeight}
                fill="transparent"
                onPointerEnter={() => setHover(index)}
                onPointerLeave={() => setHover((current) => (current === index ? null : current))}
              />
              {height > 0 ? (
                <path d={columnPath(x, y, barWidth, height)} fill={color} pointerEvents="none" />
              ) : null}
              <text
                x={plotLeft + slot * index + slot / 2}
                y={plotBottom + 18}
                fill={labelColor}
                fontSize={12}
                fontFamily="inherit"
                textAnchor="middle"
              >
                {row.label}
              </text>
            </g>
          );
        })}
      </svg>
      {active ? (
        <div
          className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-full rounded-sm px-1.5 py-1 text-[12px] leading-none text-white"
          style={{
            left: plotLeft + slot * (hover ?? 0) + slot / 2,
            top: plotBottom - ((active.total / top) * plotHeight || 0) - 8,
            background: COLUMN_COLORS[(hover ?? 0) % COLUMN_COLORS.length],
          }}
        >
          {active.total}
        </div>
      ) : null}
    </div>
  );
}
