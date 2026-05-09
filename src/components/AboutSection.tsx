import React from "react";

const AboutSection = () => {
  const features = [
    { label: "Taurine", value: "0.4%", icon: "⚡", desc: "Amino acid for mental focus" },
    { label: "Caffeine", value: "0.03%", icon: "☕", desc: "Sustained energy boost" },
    { label: "B-Vitamins", value: "B2·B3·B6·B12", icon: "💊", desc: "Metabolic support" },
    { label: "Volume", value: "300ml", icon: "🥤", desc: "Bold single serve" },
  ];

  return (
    <section id="about" className="bg-background py-24 px-4 relative overflow-hidden">
      {/* Decorative ring */}
      <div
        className="absolute -right-40 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 border-2 border-grape pointer-events-none"
        style={{ animation: "spin-slow 25s linear infinite" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Badge */}
        <div className="flex justify-center mb-4">
          <span className="font-display text-xs tracking-[0.4em] text-teal border border-teal/30 px-4 py-1.5 rounded-full">
            EST. 2022 · INDIA
          </span>
        </div>

        {/* Year watermark */}
        <div className="flex justify-center mb-2">
          <span className="font-bebas text-[10rem] md:text-[14rem] text-muted opacity-[0.06] leading-none select-none">
            2022
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center -mt-16 md:-mt-28 relative">
          {/* Left */}
          <div>
            <h2 className="font-bebas leading-tight mb-6" style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}>
              <span className="text-foreground">WHY HYDRA<br /></span>
              <span className="text-gradient-grape">IS YOUR HERO?</span>
            </h2>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-4">
              Born in 2022, Hydra Energy is the caffeinated beverage that fuels every grind.
              With B-vitamins, taurine, and a bold Black Grape flavour, it's not just an energy drink —
              it's a <span className="highlight-grape">flavourful potion of energy.</span>
            </p>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-8">
              Packed with Vitamins B2, B3, B6 & B12, Hydra Energy supports your metabolism
              and keeps you powered through every challenge.
            </p>

            {/* Timeline */}
            <div className="space-y-4">
              {[
                { year: "2022", event: "Hydra Energy launched in India" },
                { year: "2023", event: "Greedy Grapes becomes fan favourite" },
                { year: "2024", event: "Expanded distribution nationwide" },
                { year: "2025+", event: "New flavours in development" },
              ].map((item) => (
                <div key={item.year} className="flex items-center gap-4 group">
                  <span className="font-display text-sm text-grape min-w-[60px] group-hover:text-orange-brand transition-colors">
                    {item.year}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-grape flex-shrink-0 pulse-ring" />
                  <span className="font-body text-muted-foreground text-sm group-hover:text-foreground transition-colors">
                    {item.event}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: feature cards */}
          <div className="grid grid-cols-2 gap-4">
            {features.map((feat) => (
              <div
                key={feat.label}
                className="glass border border-white/8 rounded-xl p-6 hover:border-grape transition-all duration-300 group card-lift"
              >
                <span className="text-3xl mb-3 block">{feat.icon}</span>
                <p className="font-display text-2xl text-foreground group-hover:text-gradient-grape transition-colors">
                  {feat.value}
                </p>
                <p className="font-body font-bold text-foreground text-sm mt-1">{feat.label}</p>
                <p className="font-body text-muted-foreground text-xs mt-1">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
