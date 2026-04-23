"use client";

import { useRef, useState } from "react";

export function Waitlist() {
  const [submitted, setSubmitted] = useState(false);
  const [errorFlash, setErrorFlash] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function submit() {
    const v = inputRef.current?.value.trim() ?? "";
    if (!v || !v.includes("@") || !v.includes(".")) {
      setErrorFlash(true);
      inputRef.current?.focus();
      setTimeout(() => setErrorFlash(false), 1600);
      return;
    }
    setSubmitted(true);
  }

  return (
    <section
      id="waitlist"
      className="border-t border-white/[0.04] px-5 py-[100px] text-center md:px-14 md:py-[150px]"
    >
      <h2
        className="r mb-[14px] font-light text-white"
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(40px, 5.5vw, 64px)",
          letterSpacing: "-2.5px",
        }}
      >
        Be the first.
      </h2>
      <p
        className="r mb-11 text-[15px] text-[var(--color-g2)]"
        style={{ letterSpacing: "-0.15px" }}
      >
        Join the waitlist. Rolling out to select teams early.
      </p>

      {!submitted ? (
        <div className="r mx-auto flex max-w-[380px] flex-wrap justify-center gap-[9px]">
          <input
            ref={inputRef}
            type="email"
            placeholder="your@company.com"
            onKeyDown={(e) => {
              if (e.key === "Enter") submit();
            }}
            className="min-w-[200px] flex-1 rounded-[7px] border bg-white/[0.038] px-[17px] py-3 text-[13.5px] text-white outline-none transition-[border-color,background] duration-[180ms] placeholder:text-white/20 focus:border-white/[0.22] focus:bg-white/[0.055]"
            style={{
              borderColor: errorFlash
                ? "rgba(210,70,70,0.4)"
                : "rgba(255,255,255,0.08)",
              letterSpacing: "-0.15px",
            }}
          />
          <button
            onClick={submit}
            className="rounded-[7px] border-none bg-white px-5 py-3 text-[13.5px] font-semibold whitespace-nowrap text-[#07070f] transition-[opacity,transform] duration-150 hover:-translate-y-px hover:opacity-85"
            style={{ letterSpacing: "-0.2px" }}
          >
            Get early access
          </button>
        </div>
      ) : (
        <p className="r text-[15px] text-[var(--color-g2)]">
          You&apos;re on the list — we&apos;ll be in touch.
        </p>
      )}

      <p className="mt-[14px] text-xs text-[var(--color-g3)]">
        No spam. Early access only.
      </p>
    </section>
  );
}
