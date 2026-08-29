const reduce = "motion-reduce:animate-none";

export function UtilityNetwork() {
  return (
    <svg
      viewBox="0 0 320 280"
      className="absolute inset-0 h-full w-full opacity-50"
      aria-hidden="true"
    >
      <g fill="none" stroke="var(--svg-line-muted)" strokeWidth="1">
        <path d="M28 210 L92 140 L160 168 L228 88 L292 128" className={`animate-mega-line-flow ${reduce}`} strokeDasharray="4 8" />
        <path d="M48 48 L120 96 L160 168 L200 210 L270 230" className={`animate-mega-line-flow ${reduce}`} strokeDasharray="5 10" style={{ animationDelay: "1s" }} />
        <path d="M20 120 L92 140 L160 72 L240 150" />
      </g>
      {[
        [92, 140],
        [160, 168],
        [228, 88],
        [120, 96],
        [200, 210],
        [160, 72],
      ].map(([cx, cy], i) => (
        <circle
          key={`${cx}-${cy}`}
          cx={cx}
          cy={cy}
          r={i === 1 ? 3.5 : 2.2}
          fill={i % 2 === 0 ? "#F07F25" : "var(--svg-muted)"}
          className={`animate-mega-node-pulse ${reduce}`}
          style={{ animationDelay: `${i * 0.35}s` }}
        />
      ))}
    </svg>
  );
}

export function EcosystemGraph() {
  const nodes = [
    { label: "Utilities", x: 90, y: 28 },
    { label: "Enterprise", x: 210, y: 44 },
    { label: "Industry", x: 236, y: 128 },
    { label: "City", x: 188, y: 214 },
    { label: "Microgrid", x: 72, y: 210 },
    { label: "Prosumer", x: 36, y: 118 },
  ];

  return (
    <svg viewBox="0 0 280 260" className="h-full w-full" aria-hidden="true">
      {nodes.map((node) => (
        <line
          key={node.label}
          x1="140"
          y1="128"
          x2={node.x}
          y2={node.y}
          stroke="rgba(240,127,37,0.28)"
          strokeWidth="1"
          className={`animate-mega-line-flow ${reduce}`}
          strokeDasharray="3 7"
        />
      ))}
      <circle
        cx="140"
        cy="128"
        r="22"
        fill="var(--nav-card)"
        stroke="#F07F25"
        strokeWidth="1.2"
        className={`animate-mega-glow ${reduce}`}
      />
      <text
        x="140"
        y="132"
        textAnchor="middle"
        fill="var(--svg-text)"
        fontSize="8"
        fontWeight="600"
        letterSpacing="0.12em"
      >
        ZENIUM
      </text>
      {nodes.map((node) => (
        <g key={node.label}>
          <circle cx={node.x} cy={node.y} r="3" fill="#F07F25" className={`animate-mega-node-pulse ${reduce}`} />
          <text
            x={node.x}
            y={node.y - 10}
            textAnchor="middle"
            fill="var(--nav-muted)"
            fontSize="8"
          >
            {node.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

export function PartnerFlow() {
  const steps = [
    { label: "Technology", y: 28 },
    { label: "ZENIUM", y: 92, active: true },
    { label: "Integrators", y: 156 },
    { label: "Utilities", y: 220 },
  ];

  return (
    <svg viewBox="0 0 180 250" className="h-full w-full" aria-hidden="true">
      <path
        d="M90 40 L90 210"
        fill="none"
        stroke="var(--svg-line-muted)"
        strokeWidth="1"
      />
      <path
        d="M90 40 L90 210"
        fill="none"
        stroke="#F07F25"
        strokeWidth="1.2"
        strokeDasharray="4 10"
        className={`animate-mega-line-flow ${reduce}`}
        opacity="0.7"
      />
      {steps.map((step) => (
        <g key={step.label}>
          <circle
            cx="90"
            cy={step.y}
            r={step.active ? 16 : 11}
            fill={step.active ? "var(--nav-navy)" : "var(--nav-card)"}
            stroke={step.active ? "#F07F25" : "var(--svg-line-muted)"}
            strokeWidth="1"
            className={step.active ? `animate-mega-glow ${reduce}` : ""}
          />
          <text
            x="90"
            y={step.y + 4}
            textAnchor="middle"
            fill={step.active ? "#F07F25" : "var(--nav-muted)"}
            fontSize={step.active ? "7" : "7.5"}
            fontWeight="600"
            letterSpacing="0.08em"
          >
            {step.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

export function InsightNetwork() {
  return (
    <svg
      viewBox="0 0 280 140"
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      <path
        d="M12 110 C70 20, 140 130, 210 40 S268 20, 268 20"
        fill="none"
        stroke="rgba(240,127,37,0.35)"
        strokeWidth="1"
        strokeDasharray="5 8"
        className={`animate-mega-line-flow ${reduce}`}
      />
      <path
        d="M20 40 C90 90, 150 10, 250 90"
        fill="none"
        stroke="var(--svg-line-muted)"
        strokeWidth="1"
      />
      {[
        [70, 48],
        [140, 86],
        [210, 40],
        [250, 90],
      ].map(([cx, cy], i) => (
        <circle
          key={`${cx}-${cy}`}
          cx={cx}
          cy={cy}
          r="2.4"
          fill="#F07F25"
          className={`animate-mega-node-pulse ${reduce}`}
          style={{ animationDelay: `${i * 0.4}s` }}
        />
      ))}
    </svg>
  );
}

export function DataFlowGraphic() {
  return (
    <svg viewBox="0 0 260 120" className="h-full w-full" aria-hidden="true">
      <path
        d="M16 86 C70 20, 120 110, 180 42 S244 30, 244 30"
        fill="none"
        stroke="rgba(240,127,37,0.4)"
        strokeWidth="1.2"
        strokeDasharray="6 8"
        className={`animate-mega-line-flow ${reduce}`}
      />
      <circle cx="70" cy="42" r="2.5" fill="#F07F25" className={`animate-mega-node-pulse ${reduce}`} />
      <circle cx="180" cy="42" r="2.5" fill="#F07F25" className={`animate-mega-node-pulse ${reduce}`} style={{ animationDelay: "0.8s" }} />
      <circle cx="244" cy="30" r="3.2" fill="#F07F25" className={`animate-mega-glow ${reduce}`} />
    </svg>
  );
}
