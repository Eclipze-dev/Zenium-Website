'use client';

import { memo, useEffect, useMemo, useState } from 'react';
import { geoMercator, geoContains, geoPath } from 'd3-geo';
import { feature } from 'topojson-client';
import world from 'world-atlas/countries-50m.json';
import { cn } from '@/lib/cn';

const ORANGE = '#F07F25';
const MAP_WIDTH = 620;
const MAP_HEIGHT = 760;

const hubs = [
  { name: 'Punjab', lon: 75.34, lat: 31.15 },
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
] as const;

const routes: ReadonlyArray<readonly [string, string]> = [
  ['Punjab', 'Delhi'],
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

type RouteSegment = {
  key: string;
  pathD: string;
  index: number;
};

const networkPoints: ReadonlyArray<readonly [number, number]> = [
  [90, 310], [130, 230], [455, 280], [500, 360], [270, 130], [340, 220], [410, 470], [250, 520], [180, 570],
];

function getIndiaFeature() {
  const worldObj = world as unknown as { objects: { countries: unknown } };
  const countries = feature(world as never, worldObj.objects.countries as never) as unknown as {
    features: { properties: { name?: string; NAME?: string } }[];
  };

  return countries.features.find(
    (d) => d.properties.name === 'India' || d.properties.NAME === 'India',
  );
}

function buildMapGeometry() {
  const indiaFeature = getIndiaFeature();
  if (!indiaFeature) {
    return {
      indiaPath: '',
      dots: [] as Array<{ x: number; y: number; key: string }>,
      projectedHubs: [] as Hub[],
      routeSegments: [] as RouteSegment[],
    };
  }

  const projection = geoMercator().fitExtent(
    [
      [40, 20],
      [580, 700],
    ],
    indiaFeature as never,
  );

  const indiaPath = geoPath(projection)(indiaFeature as never) ?? '';

  const dots: Array<{ x: number; y: number; key: string }> = [];
  for (let lat = 6; lat <= 38; lat += 0.52) {
    for (let lon = 67; lon <= 98; lon += 0.52) {
      const point: [number, number] = [lon, lat];
      if (geoContains(indiaFeature as never, point)) {
        const projected = projection(point);
        if (!projected) continue;
        const [x, y] = projected;
        dots.push({ x, y, key: `${lat}-${lon}` });
      }
    }
  }

  const projectedHubs: Hub[] = hubs.map((hub) => {
    const [x, y] = projection([hub.lon, hub.lat])!;
    return { ...hub, x, y };
  });

  const hubMap = Object.fromEntries(projectedHubs.map((hub) => [hub.name, hub])) as Record<string, Hub>;

  const routeSegments: RouteSegment[] = [];
  routes.forEach(([from, to], index) => {
    const a = hubMap[from];
    const b = hubMap[to];
    if (!a || !b) return;

    const midX = (a.x + b.x) / 2;
    const midY = (a.y + b.y) / 2;
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    if (distance === 0) return;

    const curveAmount = Math.min(90, distance * 0.35);
    const controlX = midX - (dy * curveAmount) / distance;
    const controlY = midY + (dx * curveAmount) / distance;

    routeSegments.push({
      key: `${from}-${to}`,
      pathD: `M ${a.x} ${a.y} Q ${controlX} ${controlY} ${b.x} ${b.y}`,
      index,
    });
  });

  return { indiaPath, dots, projectedHubs, routeSegments };
}

const mapGeometry = buildMapGeometry();

const MapRoute = memo(function MapRoute({
  pathD,
  index,
  reduced,
}: {
  pathD: string;
  index: number;
  reduced: boolean;
}) {
  return (
    <g>
      <path
        d={pathD}
        className={cn(
          'fill-none stroke-[#F07F25] [stroke-width:1.25] [stroke-linecap:round] [stroke-dasharray:4_5] opacity-70',
          !reduced && '[filter:drop-shadow(0_0_3px_rgba(240,127,37,0.5))] animate-route-flow',
        )}
        style={reduced ? undefined : { animationDelay: `${index * 0.25}s` }}
      />
      {!reduced && (
        <circle
          r={3}
          className="fill-[#F07F25] [filter:drop-shadow(0_0_6px_rgba(240,127,37,1))] animate-pulse-travel"
          style={{
            offsetPath: `path('${pathD}')`,
            animationDelay: `${index * 0.35}s`,
          }}
        />
      )}
    </g>
  );
});

const MapHub = memo(function MapHub({ hub, reduced }: { hub: Hub; reduced: boolean }) {
  return (
    <g className="cursor-pointer transition-transform duration-300" transform={`translate(${hub.x}, ${hub.y})`}>
      <circle
        r={28}
        fill="url(#hubGlow)"
        className={cn('opacity-50', !reduced && 'animate-hub-glow')}
      />
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
        className={cn(
          'fill-[#F07F25] [filter:drop-shadow(0_0_5px_rgba(240,127,37,1))]',
          !reduced && 'animate-center-pulse',
        )}
      />
      {!reduced && (
        <circle
          r={18}
          className="fill-none stroke-[#F07F25] [stroke-width:1] opacity-0 animate-hub-pulse"
        />
      )}
      <text
        y={-22}
        textAnchor="middle"
        className="fill-[var(--svg-muted)] [font-family:Inter,Arial,sans-serif] text-[9px] font-semibold [letter-spacing:0.04em] [pointer-events:none] uppercase"
      >
        {hub.name}
      </text>
    </g>
  );
});

const MapDots = memo(function MapDots({
  dots,
  reduced,
}: {
  dots: Array<{ x: number; y: number; key: string }>;
  reduced: boolean;
}) {
  return (
    <g className={cn('opacity-95', !reduced && 'animate-dot-appear')}>
      {dots.map((dot) => (
        <circle
          key={dot.key}
          cx={dot.x}
          cy={dot.y}
          r={1.25}
          className="fill-[var(--svg-fill-muted)]"
        />
      ))}
    </g>
  );
});

export default function IndiaBuiltMap() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const { indiaPath, dots, projectedHubs, routeSegments } = mapGeometry;

  const routeElements = useMemo(
    () =>
      routeSegments.map((route) => (
        <MapRoute
          key={route.key}
          pathD={route.pathD}
          index={route.index}
          reduced={reduced}
        />
      )),
    [routeSegments, reduced],
  );

  const hubElements = useMemo(
    () => projectedHubs.map((hub) => <MapHub key={hub.name} hub={hub} reduced={reduced} />),
    [projectedHubs, reduced],
  );

  return (
    <div className="relative w-full max-w-[620px] overflow-hidden [aspect-ratio:620/760] max-lg:mx-auto max-md:max-w-[500px] max-sm:max-w-[390px]">
      <svg
        viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
        className="block h-full w-full overflow-visible"
        role="img"
        aria-label="Map of India showing Zenium hub locations and network connections"
      >
        <defs>
          <radialGradient id="hubGlow">
            <stop offset="0%" stopColor={ORANGE} stopOpacity="0.8" />
            <stop offset="40%" stopColor={ORANGE} stopOpacity="0.2" />
            <stop offset="100%" stopColor={ORANGE} stopOpacity="0" />
          </radialGradient>
        </defs>

        <path
          d={indiaPath}
          className="fill-[rgba(240,127,37,0.015)] stroke-[rgba(240,127,37,0.12)] [stroke-width:0.5]"
        />

        <MapDots dots={dots} reduced={reduced} />

        <g>{routeElements}</g>

        <g>{hubElements}</g>

        <g>
          {networkPoints.map(([x, y], index) => (
            <circle
              key={`${x}-${y}`}
              cx={x}
              cy={y}
              r={2}
              className={cn(
                'fill-[#F07F25] [filter:drop-shadow(0_0_4px_rgba(240,127,37,0.9))]',
                !reduced && 'animate-network-pulse-alt',
              )}
              style={reduced ? undefined : { animationDelay: `${index * 0.4}s` }}
            />
          ))}
        </g>

        <g className="cursor-pointer" transform="translate(450 620)">
          <circle
            r={66}
            className={cn(
              'fill-none stroke-[#F07F25] [stroke-width:1] opacity-[0.18]',
              !reduced && 'animate-badge-pulse',
            )}
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
