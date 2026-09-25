"use client";

import { useMemo, useState } from "react";
import Button from "@/components/Button";
import { SOLUTION_PATHS } from "@/lib/seo/paths";

function toNumber(value: string) {
  const n = Number(value);
  return Number.isFinite(n) && n >= 0 ? n : 0;
}

export default function WattsToKwhCalculator() {
  const [powerMode, setPowerMode] = useState<"watts" | "kw">("watts");
  const [power, setPower] = useState("1000");
  const [hours, setHours] = useState("1");
  const [days, setDays] = useState("1");

  const result = useMemo(() => {
    const watts =
      powerMode === "kw" ? toNumber(power) * 1000 : toNumber(power);
    const h = toNumber(hours);
    const d = toNumber(days);
    const kwh = (watts * h * d) / 1000;
    return { watts, hours: h, days: d, kwh };
  }, [power, hours, days, powerMode]);

  return (
    <div className="mx-auto max-w-xl space-y-6 rounded-[16px] border border-black/5 bg-white/60 p-6 sm:p-8">
      <div className="flex gap-2">
        <button
          type="button"
          className={`rounded-md px-3 py-1.5 text-sm font-medium ${
            powerMode === "watts"
              ? "bg-[#0B1F33] text-white"
              : "bg-black/5 text-zen-text"
          }`}
          onClick={() => setPowerMode("watts")}
        >
          Watts
        </button>
        <button
          type="button"
          className={`rounded-md px-3 py-1.5 text-sm font-medium ${
            powerMode === "kw"
              ? "bg-[#0B1F33] text-white"
              : "bg-black/5 text-zen-text"
          }`}
          onClick={() => setPowerMode("kw")}
        >
          kW
        </button>
      </div>

      <label className="block space-y-1.5">
        <span className="text-sm font-medium">
          {powerMode === "watts" ? "Power (Watts)" : "Power (kW)"}
        </span>
        <input
          type="number"
          min={0}
          step="any"
          value={power}
          onChange={(e) => setPower(e.target.value)}
          className="w-full rounded-md border border-black/10 bg-white px-3 py-2 text-base"
        />
      </label>

      <label className="block space-y-1.5">
        <span className="text-sm font-medium">Hours of use per day</span>
        <input
          type="number"
          min={0}
          step="any"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          className="w-full rounded-md border border-black/10 bg-white px-3 py-2 text-base"
        />
      </label>

      <label className="block space-y-1.5">
        <span className="text-sm font-medium">Number of days</span>
        <input
          type="number"
          min={0}
          step="any"
          value={days}
          onChange={(e) => setDays(e.target.value)}
          className="w-full rounded-md border border-black/10 bg-white px-3 py-2 text-base"
        />
      </label>

      <div className="rounded-[12px] bg-[#0B1F33] px-5 py-6 text-white">
        <p className="text-sm text-white/70 m-0">Estimated energy use</p>
        <p className="mt-2 text-3xl font-semibold m-0">
          {result.kwh.toLocaleString(undefined, { maximumFractionDigits: 4 })}{" "}
          kWh
        </p>
        <p className="mt-2 text-sm text-white/80 m-0">
          That is also{" "}
          <strong>
            {result.kwh.toLocaleString(undefined, { maximumFractionDigits: 4 })}{" "}
            units
          </strong>
          , because 1 unit = 1 kWh.
        </p>
      </div>

      <p className="text-sm text-muted m-0">
        Formula: kWh = (Watts × Hours × Days) / 1000. With{" "}
        {result.watts.toLocaleString()} W × {result.hours} h × {result.days}{" "}
        day(s).
      </p>

      <div className="border-t border-black/10 pt-6">
        <h2 className="text-h3 m-0">Utility software from Zenium</h2>
        <p className="mt-2 text-p2 text-muted">
          Ready to move from household energy math to enterprise Advanced
          Metering Infrastructure (AMI)?
        </p>
        <div className="mt-4 flex flex-wrap gap-[10px]">
          <Button href={SOLUTION_PATHS.ami}>AMI</Button>
          <Button href={SOLUTION_PATHS.hes} outline>
            Head-End System (HES)
          </Button>
          <Button href={SOLUTION_PATHS.mdms} outline>
            Meter Data Management System (MDMS)
          </Button>
        </div>
      </div>
    </div>
  );
}
