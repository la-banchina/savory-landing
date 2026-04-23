import { CursorGlow } from "~/components/CursorGlow";
import { Features } from "~/components/Features";
import { Footer } from "~/components/Footer";
import { Hero } from "~/components/Hero";
import { Nav } from "~/components/Nav";
import { ScrollReveal } from "~/components/ScrollReveal";
import { Waitlist } from "~/components/Waitlist";

export default function HomePage() {
  return (
    <>
      <CursorGlow />
      <ScrollReveal />
      <div className="relative z-[2]">
        <Nav />
        <Hero />
        <Features />
        <Waitlist />
        <Footer />
      </div>
    </>
  );
}
