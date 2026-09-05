/** Empty-state illustration: chair, desk, laptop, plant, paper plane. */
export default function CareersEmptyIllustration() {
  return (
    <svg
      viewBox="0 0 420 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto h-auto w-full max-w-[420px]"
      role="img"
      aria-label="No openings at the moment"
    >
      <ellipse cx="210" cy="210" rx="170" ry="48" fill="#0A1725" />
      <path
        d="M70 200c20-90 70-140 140-140s120 50 140 140"
        fill="#102033"
      />

      {/* Plant */}
      <rect x="78" y="168" width="28" height="18" rx="3" fill="#1B3A55" />
      <path
        d="M92 168c-10-28-2-48 8-56 4 14 6 30 2 48h-10z"
        fill="#2F6B8A"
      />
      <path
        d="M92 168c12-30 28-42 40-40-8 16-14 32-18 40H92z"
        fill="#3D8AAD"
      />
      <path
        d="M92 168c-2-22 8-38 22-44-2 18-4 32-8 44H92z"
        fill="#4AA0C4"
      />

      {/* Desk */}
      <rect x="130" y="168" width="200" height="12" rx="2" fill="#1A3350" />
      <rect x="148" y="180" width="10" height="36" rx="2" fill="#152A42" />
      <rect x="302" y="180" width="10" height="36" rx="2" fill="#152A42" />

      {/* Laptop */}
      <rect x="188" y="138" width="84" height="30" rx="3" fill="#243B55" />
      <rect x="194" y="143" width="72" height="20" rx="2" fill="#0A1725" />
      <rect x="180" y="168" width="100" height="5" rx="1.5" fill="#2A4666" />

      {/* Chair */}
      <path
        d="M248 120c0-22 16-40 40-40s40 18 40 40v48H248v-48z"
        fill="#2F6B8A"
      />
      <path d="M242 168h100v10H242z" fill="#1B3A55" />
      <rect x="286" y="178" width="10" height="38" rx="2" fill="#152A42" />
      <rect x="268" y="212" width="46" height="8" rx="2" fill="#1A3350" />

      {/* Sign on chair */}
      <g transform="translate(268 128) rotate(-8)">
        <rect width="72" height="36" rx="4" fill="#F4F7FA" />
        <rect x="4" y="4" width="64" height="28" rx="2" fill="#E8EEF4" />
        <text
          x="36"
          y="16"
          textAnchor="middle"
          fill="#0A1725"
          fontSize="7"
          fontFamily="system-ui, sans-serif"
          fontWeight="600"
        >
          No Openings
        </text>
        <text
          x="36"
          y="27"
          textAnchor="middle"
          fill="#0A1725"
          fontSize="6"
          fontFamily="system-ui, sans-serif"
        >
          at the moment
        </text>
      </g>

      {/* Paper plane */}
      <path
        d="M340 72l48 18-48 18 12-18-12-18z"
        fill="#4AA0C4"
        opacity="0.9"
      />
      <path d="M340 72l12 18-12 18" stroke="#1B3A55" strokeWidth="1.5" />
    </svg>
  );
}
