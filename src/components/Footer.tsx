export function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-[10px] border-t border-white/[0.04] px-5 py-6 md:px-14">
      <span className="text-[13.5px] font-medium text-white/30">savory</span>
      <span className="text-xs text-white/[0.16]">© 2025 Savory AI</span>
      <a
        href="mailto:contact@savory.ai"
        className="text-xs text-white/20 transition-colors duration-150 hover:text-white/45"
      >
        contact@savory.ai
      </a>
    </footer>
  );
}
