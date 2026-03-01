const IngredientsSection = () => {
  return (
    <section id="ingredients" className="py-24 px-4" style={{ backgroundColor: "hsl(0,0%,97%)" }}>
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className="font-display mb-8 leading-tight"
          style={{ color: "hsl(0,0%,5%)", fontSize: "clamp(2.5rem, 7vw, 5rem)" }}
        >
          INGREDIENTS
        </h2>

        <p
          className="font-body text-lg md:text-xl leading-relaxed mb-16"
          style={{ color: "hsl(0,0%,15%)" }}
        >
          Carbonated Water, Sugar, Acidity Regulators (INS 330 &amp; INS 331), Taurine (0.4%),
          Caffeine (0.03%), Vitamins (B3, B6, B2 &amp; B12), Maltodextrin, Permitted Class II
          Preservative (INS 211), Artificial Sweetener (INS 955), Synthetic Food Colours (INS
          124 &amp; INS 133) And Flavours (Natural &amp; Nature Identical Flavouring Substances –
          Black Grapes).
        </p>

        {/* Nutrition Facts Table */}
        <div
          className="mx-auto max-w-2xl nutrition-border rounded-md overflow-hidden"
          style={{ borderColor: "hsl(0,0%,10%)" }}
        >
          {/* Header */}
          <div className="p-4 border-b-4" style={{ borderColor: "hsl(0,0%,10%)" }}>
            <h3
              className="font-display text-center"
              style={{ color: "hsl(0,0%,5%)", fontSize: "clamp(2rem, 6vw, 3.5rem)" }}
            >
              NUTRITION FACTS
            </h3>
          </div>

          {/* Serving row */}
          <div
            className="flex justify-end px-6 py-3 text-sm font-semibold"
            style={{ color: "hsl(0,0%,10%)", borderBottom: "2px solid hsl(0,0%,10%)" }}
          >
            Total serving: 250ml
          </div>

          {/* Column headers */}
          <div
            className="grid grid-cols-3 px-6 py-2 font-display text-sm border-b-4"
            style={{ color: "hsl(0,0%,10%)", borderColor: "hsl(0,0%,10%)" }}
          >
            <span>Amt. per 100ml</span>
            <span className="text-center"></span>
            <span className="text-right">%RDA per serve</span>
          </div>

          {/* Rows */}
          {[
            { label: "Energy (kcal)", per100: "34", rda: "1.83" },
            { label: "Carbohydrate (g)", per100: "8.5", rda: "7.0" },
            { label: "Total Sugar (g)", per100: "8.4", rda: "–" },
            { label: "Protein (g)", per100: "0", rda: "–" },
            { label: "Fat (g)", per100: "0", rda: "–" },
            { label: "Sodium (mg)", per100: "12", rda: "1.25" },
            { label: "Taurine (mg)", per100: "400", rda: "–" },
            { label: "Caffeine (mg)", per100: "30", rda: "–" },
            { label: "Vitamin B3 (mg)", per100: "2.15", rda: "26.85" },
            { label: "Vitamin B6 (mg)", per100: "0.25", rda: "31.25" },
            { label: "Vitamin B2 (mg)", per100: "0.18", rda: "22.5" },
            { label: "Vitamin B12 (mcg)", per100: "0.625", rda: "156.25" },
          ].map((row, i) => (
            <div
              key={row.label}
              className="grid grid-cols-3 px-6 py-3 font-display text-lg border-b"
              style={{
                color: "hsl(0,0%,10%)",
                borderColor: "hsl(0,0%,85%)",
                backgroundColor: i % 2 === 0 ? "hsl(0,0%,97%)" : "hsl(0,0%,93%)",
              }}
            >
              <span className="font-bold">{row.label}</span>
              <span className="text-center">{row.per100}</span>
              <span className="text-right">{row.rda}</span>
            </div>
          ))}
        </div>

        <p
          className="mt-6 text-xs font-body"
          style={{ color: "hsl(0,0%,45%)" }}
        >
          *%RDA = Recommended Dietary Allowance for a 2000 kcal diet. Actual values may vary slightly.
        </p>
      </div>
    </section>
  );
};

export default IngredientsSection;
