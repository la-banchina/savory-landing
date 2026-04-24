import Link from "next/link";

export function HeroPill() {
  return (
    <Link href="#waitlist" className="hero-pill r">
      <span
        className="relative z-[1] px-4 py-2 font-semibold text-white/90"
        style={{ letterSpacing: "-0.2px" }}
      >
        Introducing Savory
      </span>
      <span className="relative z-[1] h-4 w-px shrink-0 bg-white/[0.12]" />
      <span
        className="relative z-[1] px-4 py-2 text-white/45"
        style={{ letterSpacing: "-0.15px" }}
      >
        Join waitlist →
      </span>
    </Link>
  );
}
