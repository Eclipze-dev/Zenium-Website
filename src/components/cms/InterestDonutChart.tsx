"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { useCmsDark } from "@/components/cms/useCmsDark";

type InterestPoint = {
  label: string;
  total: number;
  color: string;
};

function point(cx: number, cy: number, radius: number, angle: number) {
  return [cx + radius * Math.cos(angle), cy + radius * Math.sin(angle)] as const;
}

function donutSlice(
  cx: number,
  cy: number,
  outer: number,
  inner: number,
  start: number,
  end: number,
) {
  const sweep = end - start;
  if (sweep >= Math.PI * 2 - 0.001) {
    return [
      `M ${cx + outer} ${cy}`,
      `A ${outer} ${outer} 0 1 1 ${cx - outer} ${cy}`,
      `A ${outer} ${outer} 0 1 1 ${cx + outer} ${cy}`,
      `M ${cx + inner} ${cy}`,
      `A ${inner} ${inner} 0 1 0 ${cx - inner} ${cy}`,
      `A ${inner} ${inner} 0 1 0 ${cx + inner} ${cy}`,
      "Z",
    ].join(" ");
  }
  const [outerStartX, outerStartY] = point(cx, cy, outer, start);
  const [outerEndX, outerEndY] = point(cx, cy, outer, end);
  const [innerEndX, innerEndY] = point(cx, cy, inner, end);
  const [innerStartX, innerStartY] = point(cx, cy, inner, start);
  const large = sweep > Math.PI ? 1 : 0;
  return [
    `M ${outerStartX} ${outerStartY}`,
    `A ${outer} ${outer} 0 ${large} 1 ${outerEndX} ${outerEndY}`,
    `L ${innerEndX} ${innerEndY}`,
    `A ${inner} ${inner} 0 ${large} 0 ${innerStartX} ${innerStartY}`,
    "Z",
  ].join(" ");
}

export default function InterestDonutChart({ rows }: { rows: InterestPoint[] }) {
  const host = useRef<HTMLDivElement>(null);
  const dark = useCmsDark();
  const [size, setSize] = useState({ width: 280, height: 220 });
  const [hover, setHover] = useState<number | null>(null);
  const labelColor = dark ? "#94a3b8" : "#6b7280";
  const stroke = dark ? "#0f172a" : "#ffffff";
  const ring = dark ? "#334155" : "#e5e7eb";

  useLayoutEffect(() => {
    const element = host.current;
    if (!element) return;
    const measure = () => {
      setSize({
        width: Math.max(element.clientWidth, 180),
        height: Math.max(element.clientHeight, 160),
      });
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const visible = rows.filter((row) => row.total > 0);
  const total = visible.reduce((sum, row) => sum + row.total, 0);
  const cx = size.width / 2;
  const cy = size.height / 2;
  const outer = Math.max(Math.min(size.width, size.height) / 2 - 42, 36);
  const inner = outer * 0.5;
  let cursor = -Math.PI / 2;
  const slices = visible.map((row) => {
    const sweep = (row.total / total) * Math.PI * 2;
    const start = cursor;
    const end = cursor + sweep;
    cursor = end;
    return { ...row, start, end };
  });
  const active = hover == null ? null : rows[hover];
  const activeSlice = active ? slices.find((slice) => slice.label === active.label) : undefined;
  const tipPoint = activeSlice
    ? point(cx, cy, outer + 22, (activeSlice.start + activeSlice.end) / 2)
    : ([cx, cy - outer * 0.15] as const);

  return (
    <div className="flex h-72 w-full min-w-0 flex-col">
      <div ref={host} className="relative min-h-0 min-w-0 flex-1 overflow-hidden">
        <svg
          width={size.width}
          height={size.height}
          viewBox={`0 0 ${size.width} ${size.height}`}
          role="img"
          aria-label="Enquiries by interest"
          className="block"
        >
          {total === 0 ? (
            <circle
              cx={cx}
              cy={cy}
              r={(outer + inner) / 2}
              fill="none"
              stroke={ring}
              strokeWidth={outer - inner}
            />
          ) : (
            slices.map((slice) => {
              const mid = (slice.start + slice.end) / 2;
              const [tickX, tickY] = point(cx, cy, outer + 2, mid);
              const [labelX, labelY] = point(cx, cy, outer + 14, mid);
              const anchor = Math.cos(mid) > 0.35 ? "start" : Math.cos(mid) < -0.35 ? "end" : "middle";
              const textWidth = slice.label.length * 6.6;
              const textLeft = anchor === "start" ? labelX : anchor === "end" ? labelX - textWidth : labelX - textWidth / 2;
              const showLabel =
                slice.end - slice.start > 0.35 &&
                textLeft > 2 &&
                textLeft + textWidth < size.width - 2 &&
                labelY > 10 &&
                labelY < size.height - 10;
              const pulled = active?.label === slice.label;
              const shift = pulled ? 10 : 0;
              return (
                <g
                  key={slice.label}
                  style={{
                    transform: `translate(${Math.cos(mid) * shift}px, ${Math.sin(mid) * shift}px)`,
                    opacity: active && !pulled ? 0.4 : 1,
                    transition: "transform 160ms ease, opacity 160ms ease",
                  }}
                >
                  <path
                    d={donutSlice(cx, cy, outer, inner, slice.start, slice.end)}
                    fill={slice.color}
                    stroke={stroke}
                    strokeWidth={2}
                    className="cursor-pointer"
                    onPointerEnter={() => setHover(rows.findIndex((row) => row.label === slice.label))}
                    onPointerLeave={() => setHover(null)}
                  />
                  {showLabel ? (
                    <>
                      <line
                        x1={tickX}
                        y1={tickY}
                        x2={labelX}
                        y2={labelY}
                        stroke={labelColor}
                        strokeOpacity={0.4}
                      />
                      <text
                        x={labelX}
                        y={labelY}
                        fill={labelColor}
                        fontSize={12}
                        fontFamily="inherit"
                        textAnchor={anchor}
                        dominantBaseline="middle"
                      >
                        {slice.label}
                      </text>
                    </>
                  ) : null}
                </g>
              );
            })
          )}
        </svg>
        {active ? (
          <div
            className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-full rounded-sm px-1.5 py-1 text-[12px] leading-none text-white"
            style={{ left: tipPoint[0], top: tipPoint[1], background: active.color }}
          >
            {active.label}: {active.total}
          </div>
        ) : null}
      </div>
      <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 px-2 pb-1 text-[12px]">
        {rows.map((row, index) => (
          <li
            key={row.label}
            className="flex cursor-pointer items-center gap-1.5"
            style={{
              color: hover === index ? row.color : labelColor,
              opacity: hover != null && hover !== index ? 0.4 : 1,
              transition: "opacity 160ms ease, color 160ms ease",
            }}
            onPointerEnter={() => setHover(index)}
            onPointerLeave={() => setHover(null)}
          >
            <span className="h-2.5 w-2.5 shrink-0 rounded-[2px]" style={{ background: row.color }} />
            <span>{row.label}</span>
            <span>{row.total}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
