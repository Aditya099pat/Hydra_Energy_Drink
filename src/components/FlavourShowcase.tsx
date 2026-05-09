const flavours = [
  {
    name: "GREEDY GRAPES",
    tagline: "The OG. The Bold. The Electrifying.",
    description: "Deep Black Grape flavour with a sparkling finish. Available now.",
    status: "AVAILABLE NOW",
    statusColor: "hsl(282,60%,65%)",
    gradient: "from-purple-900/60 to-violet-950/80",
    glow: "hsl(282,70%,50%)",
    emoji: "🍇",
    badges: ["B-VITAMINS", "TAURINE", "CAFFEINE"],
  },
  {
    name: "ZESTY CITRUS",
    tagline: "Fresh. Sharp. Unstoppable.",
    description: "A tangy citrus burst for those who like it punchy. Coming soon.",
    status: "COMING SOON",
    statusColor: "hsl(38,95%,50%)",
    gradient: "from-yellow-900/60 to-orange-950/80",
    glow: "hsl(38,95%,50%)",
    emoji: "🍋",
    badges: ["B-VITAMINS", "TAURINE", "VITAMIN C"],
  },
  {
    name: "TROPICAL BLAST",
    tagline: "Island Energy. Anywhere.",
    description: "Mango-pineapple fusion to keep summer alive year-round. In development.",
    status: "IN DEVELOPMENT",
    statusColor: "hsl(160,70%,45%)",
    gradient: "from-green-900/60 to-teal-950/80",
    glow: "hsl(160,70%,45%)",
    emoji: "🥭",
    badges: ["B-VITAMINS", "ELECTROLYTES", "TAURINE"],
  },
];

const FlavourShowcase = () => (
  <section id="flavours" className="py-24 px-4 bg-background relative overflow-hidden">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <span className="font-display text-xs tracking-[0.5em] text-teal">OUR LINEUP</span>
        <h2 className="font-bebas text-5xl md:text-7xl mt-2 text-foreground">
          FLAVOUR<br />
          <span className="text-gradient-grape">UNIVERSE</span>
        </h2>
        <p className="font-body text-muted-foreground mt-4 max-w-xl mx-auto">
          Born with Greedy Grapes — more flavours are charging towards you.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {flavours.map((f, i) => (
          <div
            key={f.name}
            className={`relative glass border border-white/8 rounded-2xl overflow-hidden card-lift group transition-all duration-500 hover:border-opacity-60`}
            style={{ "--hover-glow": f.glow } as React.CSSProperties}
          >
            {/* Gradient bg */}
            <div className={`absolute inset-0 bg-gradient-to-br ${f.gradient} opacity-60`} />
            {/* Glow on hover */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl blur-xl"
              style={{ background: f.glow }}
            />

            <div className="relative z-10 p-8">
              {/* Status badge */}
              <div className="mb-4">
                <span
                  className="font-display text-xs tracking-widest px-3 py-1.5 rounded-full border"
                  style={{ color: f.statusColor, borderColor: f.statusColor + "50" }}
                >
                  {f.status}
                </span>
              </div>

              {/* Emoji */}
              <div className="text-6xl mb-4" style={{ filter: `drop-shadow(0 0 20px ${f.glow})` }}>
                {f.emoji}
              </div>

              <h3 className="font-bebas text-3xl text-foreground mb-1">{f.name}</h3>
              <p className="font-display text-xs text-muted-foreground tracking-widest mb-4 italic">{f.tagline}</p>
              <p className="font-body text-muted-foreground text-sm leading-relaxed mb-6">{f.description}</p>

              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                {f.badges.map((b) => (
                  <span key={b} className="font-display text-xs px-2 py-1 rounded glass border border-white/10 text-muted-foreground">
                    {b}
                  </span>
                ))}
              </div>

              {/* Available / notify */}
              <div className="mt-6">
                {i === 0 ? (
                  <a href="#contact" className="btn-grape block text-center text-sm">BUY NOW</a>
                ) : (
                  <a href="#contact" className="btn-outline block text-center text-sm border-white/20">NOTIFY ME</a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FlavourShowcase;
