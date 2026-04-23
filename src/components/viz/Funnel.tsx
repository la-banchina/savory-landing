type Step = {
  name: string;
  pct: number;
  drop?: string;
  friction?: boolean;
};

const steps: Step[] = [
  { name: "Landing page", pct: 100 },
  { name: "Product page", pct: 78 },
  { name: "Add to cart", pct: 43, drop: "−35% drop", friction: true },
  { name: "Checkout", pct: 19, drop: "−24% drop", friction: true },
  { name: "Purchase complete", pct: 14 },
];

export function Funnel() {
  return (
    <div className="flex w-full max-w-[400px] flex-col gap-[6px]">
      {steps.map((s, i) => (
        <div key={i}>
          <FunnelStep {...s} />
          {i < steps.length - 1 && (
            <div className="mx-auto h-[6px] w-px bg-white/[0.06]" />
          )}
        </div>
      ))}
    </div>
  );
}

function FunnelStep({ name, pct, drop, friction }: Step) {
  return (
    <div
      className="relative flex items-center gap-[14px] overflow-hidden rounded-lg border px-4 py-3"
      style={{
        borderColor: friction ? "rgba(220,100,80,0.25)" : "rgba(255,255,255,0.055)",
        background: friction ? "rgba(220,100,80,0.04)" : "rgba(255,255,255,0.018)",
      }}
    >
      <div
        className="absolute top-0 bottom-0 left-0 rounded-l-lg transition-[width] duration-[400ms]"
        style={{
          width: `${pct}%`,
          background: friction
            ? "rgba(220,100,80,0.07)"
            : "rgba(255,255,255,0.035)",
        }}
      />
      <span
        className={`relative z-[1] flex-1 text-xs ${friction ? "text-[rgba(255,180,160,0.7)]" : "text-white/45"}`}
        style={{ letterSpacing: "-0.1px" }}
      >
        {name}
      </span>
      <span
        className={`relative z-[1] text-xs font-medium ${friction ? "text-[rgba(220,100,80,0.7)]" : "text-white/30"}`}
        style={{ fontVariantNumeric: "tabular-nums" }}
      >
        {pct}%
      </span>
      {drop && (
        <span
          className="relative z-[1] text-[10.5px] whitespace-nowrap text-[rgba(220,100,80,0.55)]"
        >
          {drop}
        </span>
      )}
    </div>
  );
}
