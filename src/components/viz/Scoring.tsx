type ScoreRow = {
  name: string;
  value: number;
  warn?: boolean;
  last?: boolean;
  lastDotBright?: boolean;
};

const rows: ScoreRow[] = [
  { name: "UX Behaviour", value: 81 },
  { name: "UI Clarity", value: 47, warn: true },
  { name: "Conversion Impact", value: 68 },
  { name: "Accessibility", value: 39, warn: true },
  { name: "Flow Efficiency", value: 74, last: true, lastDotBright: true },
];

export function Scoring() {
  return (
    <div className="w-full max-w-[380px]">
      {rows.map((r, i) => (
        <Row key={i} {...r} />
      ))}
    </div>
  );
}

function Row({ name, value, warn, last, lastDotBright }: ScoreRow) {
  return (
    <div className="flex items-start gap-[14px]">
      {/* Rail */}
      <div className="flex w-[18px] shrink-0 flex-col items-center pt-[5px]">
        <div
          className="z-[1] h-2 w-2 shrink-0 rounded-full border-[1.5px] bg-[var(--color-bg)]"
          style={{
            borderColor: warn
              ? "rgba(220,130,80,0.5)"
              : lastDotBright
                ? "rgba(255,255,255,0.35)"
                : "rgba(255,255,255,0.2)",
          }}
        />
        {!last && (
          <div
            className="min-h-[32px] w-px flex-1"
            style={{
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
            }}
          />
        )}
      </div>

      {/* Body */}
      <div className={`flex-1 ${last ? "pb-0" : "pb-6"}`}>
        <div className="mb-[7px] flex items-center justify-between">
          <span
            className="text-[13px] font-medium text-[var(--color-g1)]"
            style={{ letterSpacing: "-0.3px" }}
          >
            {name}
          </span>
          <span
            className={`text-xs font-medium ${warn ? "text-[rgba(220,130,80,0.65)]" : "text-white/35"}`}
            style={{ fontVariantNumeric: "tabular-nums" }}
          >
            {value}
          </span>
        </div>
        <div className="h-[2px] overflow-hidden rounded-[2px] bg-white/[0.07]">
          <div
            className={`h-full rounded-[2px] ${warn ? "bg-[rgba(220,130,80,0.45)]" : "bg-white/[0.22]"}`}
            style={{ width: `${value}%` }}
          />
        </div>
      </div>
    </div>
  );
}
