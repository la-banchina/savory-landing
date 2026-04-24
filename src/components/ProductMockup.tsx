export function ProductMockup() {
  return (
    <div
      className="r w-full max-w-[720px] overflow-hidden rounded-xl border border-white/[0.06] bg-[#111111]"
      style={{
        boxShadow:
          "0 0 0 1px rgba(255,255,255,0.02), 0 32px 80px rgba(0,0,0,0.6), 0 0 100px rgba(180,60,20,0.06)",
      }}
    >
      {/* Browser bar */}
      <div className="flex items-center gap-[7px] border-b border-white/[0.04] bg-[#0d0d0d] px-4 py-[11px]">
        <div className="h-2 w-2 rounded-full bg-white/[0.09]" />
        <div className="h-2 w-2 rounded-full bg-white/[0.09]" />
        <div className="h-2 w-2 rounded-full bg-white/[0.09]" />
        <div className="ml-2 flex h-5 flex-1 items-center gap-[6px] rounded border border-white/[0.05] bg-white/[0.03] px-[10px]">
          <div className="h-[5px] w-[5px] rounded-full bg-white/10" />
          <span
            className="text-[10.5px] text-white/[0.22]"
            style={{ fontFamily: "'SF Mono', 'Fira Code', monospace" }}
          >
            savory.ai/analysis
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="px-[26px] pt-[22px] pb-[26px]">
        {/* Input row */}
        <div className="mb-4 flex items-center gap-[9px]">
          <div className="flex h-[34px] flex-1 items-center gap-2 rounded-md border border-white/[0.06] bg-white/[0.03] px-3">
            <div className="h-[10px] w-[10px] shrink-0 rounded-full border-[1.5px] border-white/[0.15]" />
            <span
              className="text-[11px] text-white/[0.22]"
              style={{ fontFamily: "'SF Mono', 'Fira Code', monospace" }}
            >
              https://yourapp.com/checkout
            </span>
          </div>
          <div className="h-[34px] rounded-md border border-white/[0.08] bg-white/[0.055] px-[14px] text-[11.5px] font-medium whitespace-nowrap text-white/45 leading-[34px]">
            Analyse
          </div>
        </div>

        {/* Status */}
        <div className="mb-4 flex items-center gap-[9px] rounded-lg border border-white/[0.042] bg-white/[0.018] px-[13px] py-[11px]">
          <div className="animate-pu h-[6px] w-[6px] shrink-0 rounded-full bg-[rgba(100,200,100,0.6)]" />
          <span
            className="text-[11.5px] text-white/30"
            style={{ letterSpacing: "-0.1px" }}
          >
            Analysing user flows — collecting behavioural signals...
          </span>
          <div className="ml-auto h-[2px] w-[100px] overflow-hidden rounded-[2px] bg-white/[0.05]">
            <div className="animate-pf h-full w-[62%] rounded-[2px] bg-[rgba(200,80,30,0.45)]" />
          </div>
        </div>

        {/* Rows */}
        <div className="flex flex-col">
          <Row label="Drop-off at checkout step 3" value="67% exit rate" tone="w" />
          <Row label="Avg. hesitation before CTA" value="4.2s median" tone="w" />
          <Row label="Scroll depth, pricing section" value="38%" />
          <Row
            label="Session completion after optimisation"
            value="+12%"
            tone="g"
          />
        </div>
      </div>
    </div>
  );
}

function Row({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone?: "w" | "g";
}) {
  const valColor =
    tone === "w"
      ? "text-[rgba(235,140,70,0.6)]"
      : tone === "g"
        ? "text-[rgba(100,200,100,0.55)]"
        : "text-white/40";
  return (
    <div className="flex items-center justify-between border-b border-white/[0.038] py-[10px] last:border-b-0">
      <span className="text-[11.5px] text-white/[0.28]">{label}</span>
      <span
        className={`text-[11.5px] font-medium ${valColor}`}
        style={{ fontVariantNumeric: "tabular-nums" }}
      >
        {value}
      </span>
    </div>
  );
}
