'use client';
import { useMemo } from 'react';
import { geoMercator, geoContains, geoPath } from 'd3-geo';
import { feature } from 'topojson-client';
import world from 'world-atlas/countries-50m.json';

const ORANGE = '#F07F25';

const hubs = [
  { name: 'Srinagar', lon: 74.86, lat: 34.09 },
  { name: 'Delhi', lon: 77.21, lat: 28.61 },
  { name: 'Mumbai', lon: 72.88, lat: 19.07 },
  { name: 'Bengaluru', lon: 77.59, lat: 12.97 },
  { name: 'Hyderabad', lon: 78.49, lat: 17.38 },
  { name: 'Chennai', lon: 80.27, lat: 13.08 },
  { name: 'Kolkata', lon: 88.36, lat: 22.57 },
  { name: 'Ahmedabad', lon: 72.57, lat: 23.02 },
  { name: 'Pune', lon: 73.86, lat: 18.52 },
  { name: 'Jaipur', lon: 75.79, lat: 26.91 },
  { name: 'Kochi', lon: 76.27, lat: 9.93 },
  { name: 'Lucknow', lon: 80.95, lat: 26.85 },
];

const routes: [string, string][] = [
  ['Srinagar', 'Delhi'],
  ['Mumbai', 'Delhi'],
  ['Mumbai', 'Bengaluru'],
  ['Mumbai', 'Ahmedabad'],
  ['Delhi', 'Jaipur'],
  ['Delhi', 'Lucknow'],
  ['Delhi', 'Kolkata'],
  ['Bengaluru', 'Chennai'],
  ['Bengaluru', 'Hyderabad'],
  ['Bengaluru', 'Kochi'],
  ['Hyderabad', 'Chennai'],
  ['Hyderabad', 'Kolkata'],
  ['Pune', 'Mumbai'],
  ['Chennai', 'Kolkata'],
];

type Hub = { name: string; lon: number; lat: number; x: number; y: number };

const networkPoints: [number, number][] = [
  [90, 310], [130, 230], [455, 280], [500, 360], [270, 130], [340, 220], [410, 470], [250, 520], [180, 570],
];

export default function IndiaBuiltMap() {
  const width = 620;
  const height = 760;

  const india = useMemo(() => {
    const worldObj = world as unknown as { objects: { countries: unknown } };
    const countries = feature(world as never, worldObj.objects.countries as never) as unknown as {
      features: { properties: { name?: string; NAME?: string } }[];
    };
    return countries.features.find(
      (d) => d.properties.name === 'India' || d.properties.NAME === 'India',
    );
  }, []);

  const projection = useMemo(() => {
    return geoMercator().fitExtent(
      [
        [40, 20],
        [580, 700],
      ],
      india as never,
    );
  }, [india]);

  const pathGenerator = geoPath(projection);

  const dots = useMemo(() => {
    const result: { x: number; y: number; key: string }[] = [];
    for (let lat = 6; lat <= 38; lat += 0.45) {
      for (let lon = 67; lon <= 98; lon += 0.45) {
        const point: [number, number] = [lon, lat];
        if (geoContains(india as never, point)) {
          const [x, y] = projection(point)!;
          result.push({ x, y, key: `${lat}-${lon}` });
        }
      }
    }
    return result;
  }, [india, projection]);

  const projectedHubs = useMemo<Hub[]>(() => {
    return hubs.map((hub) => {
      const [x, y] = projection([hub.lon, hub.lat])!;
      return { ...hub, x, y };
    });
  }, [projection]);

  const hubMap = Object.fromEntries(projectedHubs.map((hub) => [hub.name, hub])) as Record<string, Hub>;

  const routePaths = routes.map(([from, to], index) => {
    const a = hubMap[from];
    const b = hubMap[to];
    if (!a || !b) return null;

    const midX = (a.x + b.x) / 2;
    const midY = (a.y + b.y) / 2;
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const curveAmount = Math.min(90, distance * 0.35);
    const controlX = midX - dy * (curveAmount / distance);
    const controlY = midY + dx * (curveAmount / distance);
    const pathD = `M ${a.x} ${a.y} Q ${controlX} ${controlY} ${b.x} ${b.y}`;

    return (
      <g key={`${from}-${to}`}>
        <path
          d={pathD}
          className="fill-none stroke-[#F07F25] [stroke-width:1.25] [stroke-linecap:round] [stroke-dasharray:4_5] opacity-70 [filter:drop-shadow(0_0_3px_rgba(240,127,37,0.5))] animate-route-flow"
          style={{ animationDelay: `${index * 0.25}s` }}
        />
        <circle
          r={3}
          className="fill-[#F07F25] [filter:drop-shadow(0_0_6px_rgba(240,127,37,1))] animate-pulse-travel"
          style={{ offsetPath: `path('${pathD}')`, animationDelay: `${index * 0.35}s` }}
        />
      </g>
    );
  });

  return (
    <div className="relative w-full max-w-[620px] overflow-hidden  [aspect-ratio:620/760] max-lg:mx-auto max-md:max-w-[500px] max-sm:max-w-[390px]">
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full block overflow-visible">
        <defs>
          <filter id="orangeGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="softGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <radialGradient id="hubGlow">
            <stop offset="0%" stopColor={ORANGE} stopOpacity="0.8" />
            <stop offset="40%" stopColor={ORANGE} stopOpacity="0.2" />
            <stop offset="100%" stopColor={ORANGE} stopOpacity="0" />
          </radialGradient>
        </defs>

        <path
          d={pathGenerator(india as never)!}
          className="fill-[rgba(240,127,37,0.015)] stroke-[rgba(240,127,37,0.12)] [stroke-width:0.5]"
        />

        <g className="opacity-95">
          {dots.map((dot, index) => (
            <circle
              key={dot.key}
              cx={dot.x}
              cy={dot.y}
              r={1.25}
              className="fill-[var(--svg-fill-muted)] animate-dot-appear animate-dot-flicker"
              style={{ animationDelay: `${(index % 80) * 0.018}s` }}
            />
          ))}
        </g>

        <g>{routePaths}</g>

        <g>
          {projectedHubs.map((hub) => (
            <g key={hub.name} className="cursor-pointer transition-transform duration-300" transform={`translate(${hub.x}, ${hub.y})`}>
              <circle r={28} fill="url(#hubGlow)" className="animate-hub-glow opacity-50" />
              <circle
                r={13}
                className="fill-[var(--svg-hub-fill)] stroke-[#F07F25] [stroke-width:1] transition-all duration-300"
              />
              <circle
                r={8}
                className="fill-[var(--svg-hub-fill)] stroke-[#F07F25] [stroke-width:1.5] transition-all duration-300"
              />
              <circle
                r={4}
                className="fill-[#F07F25] [filter:drop-shadow(0_0_5px_rgba(240,127,37,1))] animate-center-pulse"
              />
              <circle
                r={18}
                className="fill-none stroke-[#F07F25] [stroke-width:1] opacity-0 animate-hub-pulse"
              />
              <text
                y={-22}
                textAnchor="middle"
                className="fill-[var(--svg-muted)] [font-family:Inter,Arial,sans-serif] text-[9px] font-semibold [letter-spacing:0.04em] [pointer-events:none] uppercase"
              >
                {hub.name}
              </text>
            </g>
          ))}
        </g>

        <g>
          {networkPoints.map(([x, y], index) => (
            <circle
              key={index}
              cx={x}
              cy={y}
              r={2}
              className="fill-[#F07F25] [filter:drop-shadow(0_0_4px_rgba(240,127,37,0.9))] animate-network-pulse-alt"
              style={{ animationDelay: `${index * 0.4}s` }}
            />
          ))}
        </g>

        <g className="cursor-pointer" transform="translate(450 620)">
          <circle
            r={66}
            className="fill-none stroke-[#F07F25] [stroke-width:1] opacity-[0.18] animate-badge-pulse"
          />
          <circle
            r={56}
            className="fill-[var(--svg-hub-fill)] stroke-[#F07F25] [stroke-width:1.5] transition-all duration-300"
          />
          <text
            y={-5}
            textAnchor="middle"
            className="fill-[var(--svg-text)] [font-family:Inter,Arial,sans-serif] text-[17px] font-bold [letter-spacing:1px] max-md:text-[15px] max-sm:text-[13px]"
          >
            INDIA
          </text>
          <text
            y={23}
            textAnchor="middle"
            className="fill-[#F07F25] [font-family:Inter,Arial,sans-serif] text-[19px] font-extrabold [letter-spacing:1px] max-md:text-[17px] max-sm:text-[15px]"
          >
            BUILT
          </text>
        </g>
      </svg>
    </div>
  );
}
