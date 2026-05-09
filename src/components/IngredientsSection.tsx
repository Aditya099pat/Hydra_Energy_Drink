import { useState } from "react";

const rows = [
  { label: "Energy (kcal)", per100: "34", rda: "1.83", color: "hsl(38,95%,50%)" },
  { label: "Carbohydrate (g)", per100: "8.5", rda: "7.0", color: "hsl(282,60%,55%)" },
  { label: "Total Sugar (g)", per100: "8.4", rda: "–", color: "hsl(282,55%,45%)" },
  { label: "Protein (g)", per100: "0", rda: "–", color: "hsl(180,70%,42%)" },
  { label: "Fat (g)", per100: "0", rda: "–", color: "hsl(180,60%,40%)" },
  { label: "Sodium (mg)", per100: "12", rda: "1.25", color: "hsl(200,70%,50%)" },
  { label: "Taurine (mg)", per100: "400", rda: "–", color: "hsl(290,80%,55%)" },
  { label: "Caffeine (mg)", per100: "30", rda: "–", color: "hsl(38,100%,55%)" },
  { label: "Vitamin B3 (mg)", per100: "2.15", rda: "26.85", color: "hsl(282,70%,65%)" },
  { label: "Vitamin B6 (mg)", per100: "0.25", rda: "31.25", color: "hsl(282,60%,60%)" },
  { label: "Vitamin B2 (mg)", per100: "0.18", rda: "22.5", color: "hsl(282,55%,55%)" },
  { label: "Vitamin B12 (mcg)", per100: "0.625", rda: "156.25", color: "hsl(290,75%,60%)" },
];

const IngredientsSection = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="ingredients" className="py-24 px-4 bg-background relative overflow-hidden">
      {/* Bg decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-grape to-transparent opacity-40" />

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="font-display text-xs tracking-[0.5em] text-teal">TRANSPARENCY FIRST</span>
          <h2 className="font-bebas text-5xl md:text-7xl mt-2 text-foreground">
            WHAT'S IN THE CAN?
          </h2>
        </div>

        {/* Ingredients text */}
        <div className="glass border border-white/8 rounded-xl p-6 mb-12 text-center">
          <p className="font-display text-xs tracking-widest text-teal mb-3">FULL INGREDIENT LIST</p>
          <p className="font-body text-muted-foreground text-base leading-relaxed">
            Carbonated Water, Sugar, Acidity Regulators (INS 330 &amp; INS 331), Taurine (0.4%),
            Caffeine (0.03%), Vitamins (B3, B6, B2 &amp; B12), Maltodextrin, Permitted Class II
            Preservative (INS 211), Artificial Sweetener (INS 955), Synthetic Food Colours (INS
            124 &amp; INS 133) and Flavours (Natural &amp; Nature Identical Flavouring Substances –
            Black Grapes).
          </p>
        </div>

        {/* Nutrition Table */}
        <div className="max-w-3xl mx-auto">
          <div className="nutrition-border rounded-xl overflow-hidden" style={{ borderColor: "hsl(0,0%,15%)" }}>
            {/* Header */}
            <div className="p-5 border-b-4 border-foreground/20 bg-foreground text-background text-center">
              <h3 className="font-bebas text-4xl md:text-5xl tracking-wider">NUTRITION FACTS</h3>
              <p className="font-body text-sm mt-1 opacity-70">Per 100ml serving</p>
            </div>

            {/* Column headers */}
            <div className="grid grid-cols-3 px-6 py-3 font-display text-sm border-b-2 border-white/10 bg-white/5">
              <span className="text-muted-foreground">NUTRIENT</span>
              <span className="text-center text-muted-foreground">PER 100ml</span>
              <span className="text-right text-muted-foreground">%RDA</span>
            </div>

            {/* Rows */}
            {rows.map((row, i) => (
              <div
                key={row.label}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="grid grid-cols-3 px-6 py-3 font-display text-sm border-b border-white/5 cursor-default transition-all duration-200"
                style={{
                  backgroundColor: hovered === i ? `${row.color}18` : i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.02)",
                  borderLeftColor: hovered === i ? row.color : "transparent",
                  borderLeftWidth: "3px",
                }}
              >
                <span className="font-bold text-foreground">{row.label}</span>
                <span className="text-center text-muted-foreground">{row.per100}</span>
                <span className="text-right" style={{ color: row.rda !== "–" ? row.color : "hsl(0,0%,45%)" }}>
                  {row.rda}{row.rda !== "–" ? "%" : ""}
                </span>
              </div>
            ))}

            {/* Footer */}
            <div className="px-6 py-4 bg-white/3 border-t border-white/8">
              <p className="font-body text-xs text-muted-foreground text-center">
                *%RDA = Recommended Dietary Allowance for a 2000 kcal diet. Values may vary slightly.
              </p>
            </div>
          </div>
        </div>

        {/* Allergen / warning note */}
        <div className="mt-8 glass border border-orange/20 rounded-xl p-4 max-w-3xl mx-auto text-center">
          <p className="font-display text-xs tracking-widest text-orange-brand mb-1">⚠ ADVISORY</p>
          <p className="font-body text-muted-foreground text-sm">
            Not recommended for children under 18, pregnant or breastfeeding women, or individuals sensitive to caffeine. Consume responsibly. Maximum 1 can per day.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IngredientsSection;
