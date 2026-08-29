const nodes = [
  { x: 40, y: 30, d: 0 },
  { x: 180, y: 65, d: 1 },
  { x: 380, y: 25, d: 2 },
  { x: 620, y: 45, d: 0 },
  { x: 850, y: 30, d: 1 },
  { x: 1080, y: 60, d: 2 },
  { x: 1180, y: 170, d: 0 },
  { x: 25, y: 140, d: 1 },
  { x: 50, y: 270, d: 2 },
  { x: 30, y: 410, d: 0 },
  { x: 70, y: 530, d: 1 },
  { x: 1175, y: 120, d: 2 },
  { x: 1150, y: 320, d: 0 },
  { x: 1180, y: 450, d: 1 },
  { x: 150, y: 565, d: 2 },
  { x: 370, y: 580, d: 0 },
  { x: 590, y: 565, d: 1 },
  { x: 820, y: 575, d: 2 },
  { x: 1040, y: 560, d: 0 },
  { x: 200, y: 170, d: 1 },
  { x: 270, y: 370, d: 2 },
  { x: 950, y: 150, d: 0 },
  { x: 1010, y: 390, d: 1 },
  { x: 470, y: 110, d: 2 },
  { x: 730, y: 490, d: 0 },
  { x: 130, y: 340, d: 1 },
  { x: 1060, y: 240, d: 2 },
  { x: 510, y: 290, d: 0 },
  { x: 710, y: 270, d: 1 },
];

const connections: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6],
  [7, 8], [8, 9], [9, 10],
  [11, 12], [12, 13],
  [14, 15], [15, 16], [16, 17], [17, 18],
  [0, 7], [7, 19], [19, 20], [20, 9],
  [6, 11], [11, 21], [21, 22], [22, 13],
  [5, 23], [23, 24], [24, 17],
  [19, 25], [25, 14],
  [21, 26], [26, 5],
  [1, 19], [4, 24],
  [20, 27], [22, 28],
];

const dataFlowIndices = [0, 6, 9, 14, 19, 24];

const hexagons = [
  "50,200 100,113 200,113 250,200 200,287 100,287",
  "820,180 885,67 1015,67 1080,180 1015,293 885,293",
  "390,450 445,355 555,355 610,450 555,545 445,545",
  "960,400 1005,322 1095,322 1140,400 1095,478 1005,478",
];

const particles = [
  { x: 320, y: 80, d: 0 },
  { x: 680, y: 520, d: 1 },
  { x: 920, y: 300, d: 2 },
  { x: 140, y: 480, d: 0 },
  { x: 580, y: 200, d: 1 },
  { x: 1080, y: 100, d: 2 },
];

const driftClasses = [
  "animate-cta-net-drift-1",
  "animate-cta-net-drift-2",
  "animate-cta-net-drift-3",
];

export default function CTANetworkBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <svg
        className="w-full h-full"
        viewBox="0 0 1200 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="ctaNetGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F07F25" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#F07F25" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx="600" cy="300" r="350" fill="url(#ctaNetGlow)" />

        {hexagons.map((points, i) => (
          <polygon
            key={`hex-${i}`}
            points={points}
            className="fill-none stroke-[rgba(240,127,37,0.06)] [stroke-width:1] animate-cta-net-mesh"
            style={{ animationDelay: `${i * 1.2}s` }}
          />
        ))}

        {connections.map(([a, b], i) => {
          const isDataFlow = dataFlowIndices.includes(i);
          return (
            <g key={`conn-${i}`}>
              <line
                x1={nodes[a].x}
                y1={nodes[a].y}
                x2={nodes[b].x}
                y2={nodes[b].y}
                className="stroke-[rgba(240,127,37,0.1)] [stroke-width:0.5]"
              />
              {isDataFlow && (
                <line
                  x1={nodes[a].x}
                  y1={nodes[a].y}
                  x2={nodes[b].x}
                  y2={nodes[b].y}
                  className="stroke-[rgba(240,127,37,0.35)] [stroke-width:1] [stroke-dasharray:3_8] [stroke-linecap:round] animate-cta-net-flow"
                  style={{ animationDelay: `${i * 0.5}s` }}
                />
              )}
            </g>
          );
        })}

        {nodes.map((node, i) => {
          const isQuiet = i >= 27;
          return (
            <g
              key={`node-${i}`}
              className={driftClasses[node.d]}
              style={{ animationDelay: `${i * 0.3}s` }}
            >
              <circle
                cx={node.x}
                cy={node.y}
                r={isQuiet ? 5 : 8}
                fill="rgba(240,127,37,0.08)"
                className="animate-cta-net-glow"
                style={{ animationDelay: `${i * 0.4}s` }}
              />
              <circle
                cx={node.x}
                cy={node.y}
                r={isQuiet ? 1.5 : 2.5}
                fill={isQuiet ? "rgba(240,127,37,0.2)" : "rgba(240,127,37,0.4)"}
              />
            </g>
          );
        })}

        {particles.map((p, i) => (
          <circle
            key={`particle-${i}`}
            cx={p.x}
            cy={p.y}
            r={1.5}
            fill="var(--svg-particle)"
            className="animate-cta-net-particle"
            style={{ animationDelay: `${p.d * 1.5}s` }}
          />
        ))}
      </svg>
    </div>
  );
}
