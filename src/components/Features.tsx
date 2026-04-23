import { FeatureSection } from "./FeatureSection";
import { Heatmap } from "./viz/Heatmap";
import { Scoring } from "./viz/Scoring";
import { Funnel } from "./viz/Funnel";

export function Features() {
  return (
    <div className="py-10">
      <FeatureSection
        num="01 — Behavioural intelligence"
        title="Reads what your users can't say."
        body="Savory tracks mouse hesitation, scroll depth, rage clicks, and micro-pauses — the signals that reveal confusion long before a user drops off. Traditional analytics tell you what happened. Savory tells you why."
        visual={<Heatmap />}
      />
      <FeatureSection
        flip
        num="02 — Multi-dimensional scoring"
        title="Built on behavioural science to improve your flow."
        body="Savory evaluates your interface across five criteria — behavioural patterns, visual clarity, conversion impact, accessibility, and flow efficiency — so you know exactly what to fix and why."
        visual={<Scoring />}
      />
      <FeatureSection
        num="03 — Flow optimisation"
        title="See exactly where your users get stuck."
        body="Grounded in UX principles and behavioural science, Savory maps the real journey through your product — identifying the precise steps where momentum breaks down, attention drops, and users abandon. Then it fixes them."
        visual={<Funnel />}
      />
    </div>
  );
}
