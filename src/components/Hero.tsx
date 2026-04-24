import { HeroPill } from "./HeroPill";
import { ProductMockup } from "./ProductMockup";

export function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-5 pt-[100px] pb-[60px] text-center md:px-6 md:pt-[120px] md:pb-20">
      <p
        className="r mb-9 text-[11px] font-normal uppercase text-[var(--color-g3)]"
        style={{ letterSpacing: "1.8px" }}
      >
        UX evolution engine
      </p>
      <h1
        className="r mb-5 max-w-[820px] font-medium text-white"
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(44px, 6.5vw, 76px)",
          lineHeight: 1.05,
          letterSpacing: "-3px",
        }}
      >
        Your interface,
        <br />
        continuously evolving.
      </h1>
      <p
        className="r mb-10 max-w-[460px] text-base font-normal text-[var(--color-g2)]"
        style={{ letterSpacing: "-0.15px", lineHeight: 1.65 }}
      >
        AI agents analyse real user behaviour, design better flows, and ship
        the winner — automatically.
      </p>
      <HeroPill />
      <ProductMockup />
    </section>
  );
}
