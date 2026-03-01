const AboutSection = () => {
  return (
    <section id="about" className="bg-background py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Year badge */}
        <div className="flex justify-center mb-6">
          <span className="font-display text-8xl md:text-[10rem] text-muted opacity-20 leading-none select-none">
            2022
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center -mt-16 md:-mt-24 relative z-10">
          {/* Left: story */}
          <div>
            <h2 className="font-display text-5xl md:text-7xl text-foreground leading-tight mb-6">
              WHY HYDRA<br />
              <span className="text-gradient-grape">IS YOUR HERO?</span>
            </h2>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-6">
              Born in 2022, Hydra Energy is the caffeinated beverage that fuels every grind. 
              With B-vitamins, taurine, and a bold Black Grape flavour, it's not just an energy drink — 
              it's a <span className="text-foreground font-semibold">flavourful potion of energy.</span>
            </p>
            <p className="font-body text-muted-foreground text-lg leading-relaxed">
              Packed with Vitamins B2, B3, B6 & B12, Hydra Energy supports your metabolism 
              and keeps you powered through every challenge.
            </p>
          </div>

          {/* Right: feature pills */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Taurine", value: "0.4%", icon: "⚡" },
              { label: "Caffeine", value: "0.03%", icon: "☕" },
              { label: "B-Vitamins", value: "B2·B3·B6·B12", icon: "💊" },
              { label: "Volume", value: "300ml", icon: "🥤" },
            ].map((feat) => (
              <div
                key={feat.label}
                className="bg-card border border-border rounded-lg p-6 hover:border-grape transition-colors duration-300 group"
                style={{ "--hover-border": "hsl(282,60%,45%)" } as React.CSSProperties}
              >
                <span className="text-3xl mb-2 block">{feat.icon}</span>
                <p className="font-display text-2xl text-foreground group-hover:text-grape transition-colors">
                  {feat.value}
                </p>
                <p className="font-body text-muted-foreground text-sm mt-1">{feat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
