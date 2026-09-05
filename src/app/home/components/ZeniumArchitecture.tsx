import {
  Brain,
  Check,
  Cloud,
  Layers,
  Lock,
  Puzzle,
  ShieldCheck,
} from "@/components/icons/lucideIcons";

type CapabilityNode = {
  label: string;
  x: number;
  y: number;
  icon: typeof Layers;
  pos: string;
};

const nodes: CapabilityNode[] = [
  { label: 'Scalable', x: 50, y: 8, icon: Layers, pos: 'left-[50%] top-[8%]' },
  { label: 'Secure', x: 15, y: 18, icon: ShieldCheck, pos: 'left-[15%] top-[18%]' },
  { label: 'Interoperable', x: 85, y: 18, icon: Puzzle, pos: 'left-[85%] top-[18%]' },
  { label: 'Flexible', x: 10, y: 40, icon: Cloud, pos: 'left-[10%] top-[40%]' },
  { label: 'Open', x: 90, y: 40, icon: Lock, pos: 'left-[90%] top-[40%]' },
  { label: 'Intelligent', x: 20, y: 58, icon: Brain, pos: 'left-[20%] top-[58%]' },
  { label: 'Reliable', x: 80, y: 58, icon: Check, pos: 'left-[80%] top-[58%]' },
];

const architectureLayers = [
  'APPLICATION & ANALYTICS',
  'DATA & INTELLIGENCE LAYER',
  'INTEGRATION & SERVICES LAYER',
  'PLATFORM LAYER',
  'INFRASTRUCTURE LAYER',
];

const layerIcons = ['▥', '◉', '⌘', '◇', '▤'];

const floatAnims = ['animate-float-a', 'animate-float-b', 'animate-float-c'] as const;

const connDelays = ['', '[animation-delay:0.4s]', '[animation-delay:0.8s]', '[animation-delay:1.2s]', '[animation-delay:1.6s]', '[animation-delay:2s]', '[animation-delay:2.4s]'];

const buildings = [
  { pos: 'left-[31%] h-[45px]' },
  { pos: 'left-[52%] h-[60px]' },
  { pos: 'left-[68%] h-[38px]' },
];

const towers = [
  { pos: 'left-[13%]' },
  { pos: 'right-[13%] h-[125px]' },
];

const winds = [
  { pos: 'left-[20%]' },
  { pos: 'right-[21%] [transform:scale(0.8)]' },
];

const gridNodes = [
  { pos: 'left-[25%] bottom-[25%]' },
  { pos: 'left-[42%] bottom-[18%]' },
  { pos: 'left-[55%] bottom-[28%]' },
  { pos: 'left-[74%] bottom-[20%]' },
  { pos: 'left-[83%] bottom-[35%]' },
];

export default function ZeniumArchitecture() {
  return (
    <div
      className="relative w-full max-w-[760px] min-h-[650px] overflow-hidden isolate text-white [aspect-ratio:0.82] bg-[radial-gradient(circle_at_50%_28%,rgba(240,127,37,0.13),transparent_32%),#1a1a1a] max-lg:min-h-[580px] max-md:max-w-[600px] max-md:mx-auto max-md:min-h-[560px] max-sm:min-h-[500px]"
      aria-label="Zenium architecture capabilities"
    >
      {/* Glow */}
      <div
        className="absolute w-[55%] [aspect-ratio:1] left-[22%] top-[10%] rounded-[50%] bg-[rgba(240,127,37,0.12)] [filter:blur(80px)] animate-architecture-glow"
        aria-hidden="true"
      />

      {/* Technical grid */}
      <div
        className="absolute inset-0 [background-image:linear-gradient(rgba(240,127,37,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(240,127,37,0.035)_1px,transparent_1px)] [background-size:30px_30px] [mask-image:linear-gradient(to_bottom,transparent,#000_15%,#000_80%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,#000_15%,#000_80%,transparent)]"
        aria-hidden="true"
      />

      {/* Orbits */}
      <div className="absolute w-[58%] [aspect-ratio:1] left-[21%] top-[7%] rounded-[50%] border border-[rgba(240,127,37,0.28)] pointer-events-none animate-orbit-rotate" aria-hidden="true" />
      <div className="absolute w-[70%] [aspect-ratio:1] left-[15%] top-[2%] rounded-[50%] border border-[rgba(240,127,37,0.14)] pointer-events-none animate-orbit-rotate-reverse" aria-hidden="true" />
      <div className="absolute w-[44%] [aspect-ratio:1] left-[28%] top-[14%] rounded-[50%] border border-[rgba(240,127,37,0.22)] pointer-events-none animate-orbit-rotate [animation-duration:25s]" aria-hidden="true" />
      <div className="absolute w-[82%] [aspect-ratio:1] left-[9%] top-[-4%] rounded-[50%] border border-[rgba(240,127,37,0.08)] pointer-events-none animate-orbit-rotate-reverse [animation-duration:60s]" aria-hidden="true" />

      {/* Connection layer */}
      <svg className="absolute inset-0 z-[3] w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        {nodes.map((node, index) => (
          <g key={node.label}>
            <line
              className={`stroke-[#f07f25] [stroke-width:0.12] [stroke-dasharray:0.8_0.8] opacity-50 animate-connection-pulse ${connDelays[index]}`}
              x1={node.x}
              y1={node.y}
              x2="50"
              y2="31"
            />
            <circle className="fill-[#f07f25] animate-data-travel [filter:drop-shadow(0_0_5px_rgba(240,127,37,0.9))]" cx="50" cy="31" r="0.65" />
          </g>
        ))}
      </svg>

      {/* Capability nodes */}
      {nodes.map((node, index) => {
        const Icon = node.icon;
        return (
          <div
            key={node.label}
            className={`group absolute ${node.pos} z-[5] flex flex-col items-center gap-[7px] cursor-pointer transition-all duration-300 hover:scale-110 [transform:translate(-50%,-50%)] ${floatAnims[index % 3]}`}
          >
            <div
              className="flex items-center justify-center w-[62px] h-[62px] border border-[#f07f25] rounded-[50%] text-[#f07f25] bg-[radial-gradient(circle,rgba(240,127,37,0.13),#111820_70%)] shadow-[0_0_12px_rgba(240,127,37,0.25),inset_0_0_18px_rgba(240,127,37,0.08)] animate-node-float max-lg:w-[52px] max-lg:h-[52px] max-md:w-[46px] max-md:h-[46px] max-sm:w-[38px] max-sm:h-[38px] group-hover:drop-shadow-[0_0_14px_rgba(240,127,37,0.5)]"
            >
              <Icon className="w-6 h-6 max-md:w-[19px] max-md:h-[19px] [stroke-width:1.6]" />
            </div>
            <span className="text-[rgba(255,255,255,0.92)] text-[13px] font-medium whitespace-nowrap max-md:text-[10px] max-sm:text-[8px]">{node.label}</span>
          </div>
        );
      })}

      {/* Zenium core */}
      <div className="absolute left-[50%] top-[25%] z-10 w-[170px] h-[150px] [transform:translate(-50%,-50%)] max-md:w-[130px] max-md:h-[115px] max-sm:w-[105px] max-sm:h-[92px]" aria-label="Zenium intelligence core">
        <div className="absolute w-[130%] h-[130%] left-[-15%] top-[-15%] rounded-[50%] bg-[rgba(240,127,37,0.13)] [filter:blur(25px)] animate-architecture-glow [animation-duration:3s]" />
        <div className="absolute w-full h-full [transform:perspective(500px)_rotateX(55deg)_rotateZ(45deg)] [transform-style:preserve-3d]">
          <div
            className="absolute z-[4] flex items-center justify-center rounded-[8px] border border-[#f07f25] inset-[15px] bg-[linear-gradient(145deg,#20252a,#0b1014)] shadow-[0_0_20px_rgba(240,127,37,0.35),inset_0_0_20px_rgba(240,127,37,0.08)]"
          >
            <span className="text-[#f07f25] text-[48px] font-extrabold max-md:text-[38px] max-sm:text-[30px] [text-shadow:0_0_18px_rgba(240,127,37,0.7)]">Z</span>
          </div>
          <div className="absolute rounded-[8px] border border-[rgba(240,127,37,0.65)] bg-[#0d1115] inset-[15px] [transform:translateZ(-16px)]" />
          <div className="absolute rounded-[8px] border border-[rgba(240,127,37,0.65)] bg-[#0d1115] inset-[15px] [transform:translateZ(-32px)]" />
        </div>
      </div>

      {/* Data stream */}
      <div className="absolute z-[6] flex justify-around w-[130px] h-[170px] top-[31%] left-[50%] [transform:translateX(-50%)]" aria-hidden="true">
        {Array.from({ length: 9 }, (_, index) => (
          <span
            key={index}
            className="relative w-px h-full opacity-70 bg-[linear-gradient(to_bottom,#f07f25,transparent)]"
          >
            <span
              className={`absolute w-[5px] h-[5px] rounded-[50%] bg-[#f07f25] shadow-[0_0_8px_#f07f25] animate-stream-move left-[-2px] [animation-delay:calc(${index}_*_-0.22s)]`}
              style={{ top: `calc(${index} * 20px)` }}
            />
          </span>
        ))}
      </div>

      {/* Architecture layers */}
      <div className="absolute z-[8] flex flex-col gap-[7px] w-[70%] top-[47%] left-[50%] [transform:translateX(-50%)] max-md:w-[78%] max-sm:w-[84%] max-sm:gap-[5px]">
        {architectureLayers.map((layer, index) => (
          <div
            key={layer}
            className={`group relative flex items-center gap-[18px] h-[52px] px-[25px] overflow-hidden rounded-[10px] border border-[rgba(240,127,37,0.7)] bg-[linear-gradient(90deg,rgba(25,29,32,0.98),rgba(11,15,18,0.96))] shadow-[0_5px_15px_rgba(0,0,0,0.45),inset_0_0_20px_rgba(240,127,37,0.025)] animate-layer-reveal [animation-delay:calc(${index}_*_0.12s)] transition-all duration-300 hover:translate-x-[5px] max-md:h-[46px] max-md:px-[14px] max-md:gap-[10px] max-sm:h-[36px] max-sm:px-[9px] max-sm:gap-[5px]`}
          >
            <span className="absolute inset-y-0 left-0 w-[3px] bg-[#f07f25] opacity-30 shadow-[0_0_8px_#f07f25] transition-opacity duration-300 group-hover:opacity-100" />
            <div className="w-[28px] text-[#f07f25] text-[22px] text-center max-md:w-[20px] max-md:text-[16px] max-sm:w-[14px] max-sm:text-[12px]">{layerIcons[index]}</div>
            <span className="text-[rgba(255,255,255,0.9)] text-[13px] font-semibold tracking-[0.08em] max-md:text-[11px] max-sm:text-[7.5px] max-sm:tracking-[0.04em]">{layer}</span>
          </div>
        ))}
      </div>

      {/* Infrastructure */}
      <div className="absolute right-0 bottom-0 left-0 z-[2] h-[25%] opacity-75 max-sm:opacity-50" aria-hidden="true">
        <div
          className="absolute bottom-[4%] left-[5%] right-[5%] h-full [transform:perspective(300px)_rotateX(58deg)] [transform-origin:bottom] [background-image:linear-gradient(rgba(240,127,37,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(240,127,37,0.12)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:linear-gradient(to_top,#000,transparent)] [-webkit-mask-image:linear-gradient(to_top,#000,transparent)]"
        />
        {buildings.map((b, i) => (
          <div
            key={i}
            className={`absolute bottom-[15px] w-[35px] ${b.pos} border border-[rgba(240,127,37,0.6)] bg-[linear-gradient(to_bottom,#171b1e,#0c1013)] shadow-[0_0_10px_rgba(240,127,37,0.1)]`}
          >
            <div className="absolute inset-2 [background:repeating-linear-gradient(to_bottom,rgba(240,127,37,0.65)_0_3px,transparent_3px_9px)]" />
          </div>
        ))}
        {towers.map((t, i) => (
          <div key={`tower-${i}`} className={`absolute bottom-[10px] w-[28px] h-[110px] ${t.pos}`}>
            <span className="absolute left-1/2 w-px bg-[#f07f25] h-full origin-bottom" />
            <span className="absolute left-1/2 w-px bg-[#f07f25] origin-bottom h-[65%] [transform:rotate(25deg)]" />
            <span className="absolute left-1/2 w-px bg-[#f07f25] origin-bottom h-[65%] [transform:rotate(-25deg)]" />
          </div>
        ))}
        {winds.map((w, i) => (
          <div key={`wind-${i}`} className={`absolute bottom-[15px] w-[4px] h-[80px] bg-[#f07f25] origin-bottom ${w.pos}`}>
            <span className="absolute top-0 left-0 w-[40px] h-px bg-[#f07f25] origin-left" />
            <span className="absolute top-0 left-0 w-[40px] h-px bg-[#f07f25] origin-left [transform:rotate(120deg)]" />
            <span className="absolute top-0 left-0 w-[40px] h-px bg-[#f07f25] origin-left [transform:rotate(240deg)]" />
          </div>
        ))}
        {gridNodes.map((n, i) => (
          <div key={`node-${i}`} className={`absolute ${n.pos} w-[5px] h-[5px] rounded-[50%] bg-[#f07f25] shadow-[0_0_8px_#f07f25] animate-node-pulse`} />
        ))}
      </div>
    </div>
  );
}
