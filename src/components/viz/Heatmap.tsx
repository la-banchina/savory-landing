export function Heatmap() {
  return (
    <div className="relative h-[270px] w-full max-w-[400px] overflow-hidden rounded-[10px] border border-white/[0.046] bg-white/[0.016]">
      {/* Grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* Heat blobs */}
      <Blob className="top-[27%] left-[17%] h-20 w-[120px] bg-[rgba(200,75,25,0.12)]" />
      <Blob className="top-[12%] left-[53%] h-[60px] w-[90px] bg-[rgba(220,110,30,0.09)]" />
      <Blob className="top-[56%] left-[60%] h-[52px] w-[70px] bg-[rgba(190,60,20,0.08)]" />
      <Blob className="top-[66%] left-[28%] h-[42px] w-[50px] bg-[rgba(210,90,30,0.08)]" />

      {/* UI bars */}
      <div className="absolute inset-[22px] flex flex-col gap-[9px]">
        <div className="h-[6px] rounded-[3px] bg-white/[0.048]" style={{ width: "40%" }} />
        <div className="h-[6px] rounded-[3px] bg-white/[0.048]" style={{ width: "66%" }} />
        <div className="h-[6px] rounded-[3px] bg-white/[0.048]" style={{ width: "52%", marginTop: "16px" }} />
        <div className="h-[6px] rounded-[3px] bg-white/[0.048]" style={{ width: "28%", marginTop: "5px" }} />
        <div className="mt-[14px] h-[22px] w-[68px] rounded border border-white/[0.065] bg-white/[0.05]" />
      </div>

      {/* Cursor trail */}
      <div className="pointer-events-none absolute inset-0">
        <Trail top="37%" left="16%" size={3} opacity={0.75} />
        <Trail top="39%" left="20%" size={3} opacity={0.64} />
        <Trail top="41%" left="25%" size={4} opacity={0.53} />
        <Trail top="42%" left="30%" size={4} opacity={0.43} />
        <Trail top="41%" left="36%" size={5} opacity={0.36} />
        <Trail top="39%" left="42%" size={4} opacity={0.27} />
        <Trail top="38%" left="47%" size={3} opacity={0.2} />
        <Ripple top="40%" left="37%" size={16} />
        <Ripple top="40%" left="37%" size={27} subtle />
      </div>
    </div>
  );
}

function Blob({ className }: { className: string }) {
  return (
    <div
      className={`absolute rounded-full ${className}`}
      style={{ filter: "blur(28px)" }}
    />
  );
}

function Trail({
  top,
  left,
  size,
  opacity,
}: {
  top: string;
  left: string;
  size: number;
  opacity: number;
}) {
  return (
    <div
      className="absolute rounded-full bg-white/[0.55]"
      style={{ top, left, width: `${size}px`, height: `${size}px`, opacity }}
    />
  );
}

function Ripple({
  top,
  left,
  size,
  subtle,
}: {
  top: string;
  left: string;
  size: number;
  subtle?: boolean;
}) {
  return (
    <div
      className="absolute rounded-full"
      style={{
        top,
        left,
        width: `${size}px`,
        height: `${size}px`,
        transform: "translate(-50%, -50%)",
        border: `1px solid ${subtle ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.12)"}`,
      }}
    />
  );
}
