import Link from "next/link";

export function Nav() {
  return (
    <nav
      className="sticky top-0 z-[100] flex h-[60px] items-center justify-between border-b border-white/[0.07] px-5 md:px-14"
      style={{
        backdropFilter: "blur(32px) saturate(1.8) brightness(1.05)",
        WebkitBackdropFilter: "blur(32px) saturate(1.8) brightness(1.05)",
        background: "rgba(255,255,255,0.04)",
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.07), 0 1px 24px rgba(0,0,0,0.25)",
      }}
    >
      <span
        className="font-medium text-white/90"
        style={{ fontSize: "14.5px", letterSpacing: "-0.3px" }}
      >
        savory
      </span>
      <Link
        href="#waitlist"
        className="text-[13px] font-normal text-[var(--color-g2)] transition-colors duration-150 hover:text-white"
      >
        Join waitlist →
      </Link>
    </nav>
  );
}
