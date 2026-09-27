"use client";

import { useState } from "react";
import Button from "@/components/Button";
import { SOLUTION_PATHS } from "@/lib/seo/paths";

type PowerMode = "watts" | "kw";

const amountFormat = { maximumFractionDigits: 4 } as const;
const outlineHover = "#0D1D30";

function toNumber(value: string) {
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : 0;
}

function formatAmount(value: number) {
  return value.toLocaleString(undefined, amountFormat);
}

function calculateEnergy(
  power: string,
  hours: string,
  days: string,
  mode: PowerMode,
) {
  const watts = mode === "kw" ? toNumber(power) * 1000 : toNumber(power);
  const hourCount = toNumber(hours);
  const dayCount = toNumber(days);

  return {
    watts,
    hours: hourCount,
    days: dayCount,
    kwh: (watts * hourCount * dayCount) / 1000,
  };
}

function modeButtonClass(active: boolean) {
  const tone = active
    ? "bg-orange text-white"
    : "bg-black/50 text-zen-text hover:bg-[#0D1D30]";
  return `rounded-md px-3 py-1.5 text-sm font-medium ${tone}`;
}

export default function WattsToKwhCalculator() {
  const [powerMode, setPowerMode] = useState<PowerMode>("watts");
  const [power, setPower] = useState("1000");
  const [hours, setHours] = useState("1");
  const [days, setDays] = useState("1");

  function handleModeClick(event: React.MouseEvent<HTMLButtonElement>) {
    const mode = event.currentTarget.dataset.mode;
    if (mode === "watts" || mode === "kw") setPowerMode(mode);
  }

  function handleFieldChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.currentTarget;
    if (name === "power") setPower(value);
    if (name === "hours") setHours(value);
    if (name === "days") setDays(value);
  }

  const result = calculateEnergy(power, hours, days, powerMode);
  const powerLabel = powerMode === "watts" ? "Power (Watts)" : "Power (kW)";
  const amount = formatAmount(result.kwh);

  return (
    <div className="mx-auto max-w-xl space-y-6 rounded-[16px] border border-black/5 bg-bg2 p-6 sm:p-8">
      <div className="flex gap-2">
        <button
          type="button"
          data-mode="watts"
          onClick={handleModeClick}
          className={modeButtonClass(powerMode === "watts")}
        >
          Watts
        </button>
        <button
          type="button"
          data-mode="kw"
          onClick={handleModeClick}
          className={modeButtonClass(powerMode === "kw")}
        >
          kW
        </button>
      </div>

      <label className="block space-y-1.5">
        <span className="text-sm font-medium">{powerLabel}</span>
        <input
          type="number"
          name="power"
          min={0}
          step="any"
          value={power}
          onChange={handleFieldChange}
          className="w-full rounded-md border border-black/10 bg-white px-3 py-2 text-base"
        />
      </label>

      <label className="block space-y-1.5">
        <span className="text-sm font-medium">Hours of use per day</span>
        <input
          type="number"
          name="hours"
          min={0}
          step="any"
          value={hours}
          onChange={handleFieldChange}
          className="w-full rounded-md border border-black/10 bg-white px-3 py-2 text-base"
        />
      </label>

      <label className="block space-y-1.5">
        <span className="text-sm font-medium">Number of days</span>
        <input
          type="number"
          name="days"
          min={0}
          step="any"
          value={days}
          onChange={handleFieldChange}
          className="w-full rounded-md border border-black/10 bg-white px-3 py-2 text-base"
        />
      </label>

      <div className="rounded-[12px] bg-orange px-5 py-6 text-white">
        <p className="m-0 text-sm text-white/70">Estimated energy use</p>
        <p className="m-0 mt-2 text-3xl font-semibold">{amount} kWh</p>
        <p className="m-0 mt-2 text-sm text-white/80">
          That is also <strong>{amount} units</strong>, because 1 unit = 1 kWh.
        </p>
      </div>

      <p className="m-0 text-sm text-muted">
        Formula: kWh = (Watts × Hours × Days) / 1000. With{" "}
        {result.watts.toLocaleString()} W × {result.hours} h × {result.days}{" "}
        day(s).
      </p>

      <div className="border-t border-white/25 pt-6">
        <h2 className="m-0 text-h3">Utility software from Zenium</h2>
        <p className="mt-2 text-button text-muted">
          Ready to move from household energy math to enterprise Advanced
          Metering Infrastructure (AMI)?
        </p>
        <div className="mt-4 flex flex-wrap gap-[10px]">
          <Button href={SOLUTION_PATHS.ami}>AMI</Button>
          <Button href={SOLUTION_PATHS.hes} outline hoverBg={outlineHover}>
            Head-End System (HES)
          </Button>
          <Button href={SOLUTION_PATHS.mdms} outline hoverBg={outlineHover}>
            Meter Data Management System (MDMS)
          </Button>
        </div>
      </div>
    </div>
  );
}
