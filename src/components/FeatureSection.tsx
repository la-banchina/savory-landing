import type { ReactNode } from "react";

export function FeatureSection({
  num,
  title,
  body,
  visual,
  flip = false,
}: {
  num: string;
  title: string;
  body: string;
  visual: ReactNode;
  flip?: boolean;
}) {
  return (
    <div
      className="mx-auto grid max-w-[1160px] grid-cols-1 items-center gap-12 border-t border-white/[0.04] px-5 py-20 md:grid-cols-2 md:gap-[100px] md:px-14 md:py-[110px]"
    >
      <div className={`r ${flip ? "md:order-2" : ""}`}>
        <p
          className="mb-5 text-[10.5px] font-normal uppercase text-[var(--color-g3)]"
          style={{ letterSpacing: "1.8px" }}
        >
          {num}
        </p>
        <h2
          className="mb-4 font-medium text-white"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(26px, 2.8vw, 38px)",
            letterSpacing: "-1.8px",
            lineHeight: 1.12,
          }}
        >
          {title}
        </h2>
        <p
          className="max-w-[380px] text-[15px] font-normal text-[var(--color-g2)]"
          style={{ letterSpacing: "-0.1px", lineHeight: 1.72 }}
        >
          {body}
        </p>
      </div>
      <div
        className={`r flex min-h-[280px] items-center justify-center ${flip ? "md:order-1" : ""}`}
      >
        {visual}
      </div>
    </div>
  );
}
