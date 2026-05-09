import { useEffect, useState } from "react";
import hydraCan from "@/assets/hydra-can.png";

const words = ["DOMINATE", "FOCUS", "GRIND", "SURGE", "IGNITE"];

const HeroSection = () => {
  const [wordIdx, setWordIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setWordIdx((i) => (i + 1) % words.length);
        setVisible(true);
      }, 400);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-background flex flex-col items-center justify-center overflow-hidden noise">
      {/* Animated background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-15 blur-[80px]"
          style={{ background: "hsl(282,70%,45%)", animation: "float 8s ease-in-out infinite" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full opacity-10 blur-[60px]"
          style={{ background: "hsl(180,70%,42%)", animation: "float 6s ease-in-out infinite reverse" }}
        />
        <div
          className="absolute top-2/3 left-1/3 w-[200px] h-[200px] rounded-full opacity-10 blur-[50px]"
          style={{ background: "hsl(38,95%,50%)", animation: "float 10s ease-in-out infinite" }}
        />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(hsl(282,60%,45%) 1px, transparent 1px), linear-gradient(90deg, hsl(282,60%,45%) 1px, transparent 1px)",
          backgroundSize: "80px 80px"
        }}
      />

      {/* Large background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-bebas text-[28vw] opacity-[0.03] whitespace-nowrap text-foreground leading-none">
          HYDRA
        </span>
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto w-full">
        {/* Flavor label */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 font-display text-xs tracking-[0.5em] text-teal border border-teal/40 px-4 py-2 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
            GREEDY GRAPES · BLACK GRAPE · 300ML
          </span>
        </div>

        {/* Main headline */}
        <div className="mb-2">
          <h1
            className="font-bebas leading-none text-foreground glow-text-grape"
            style={{ fontSize: "clamp(5rem, 18vw, 16rem)" }}
          >
            HYDRA
          </h1>
        </div>
        <div className="mb-8">
          <h1
            className="font-bebas leading-none text-gradient-grape"
            style={{ fontSize: "clamp(3.5rem, 12vw, 10rem)" }}
          >
            ENERGY
          </h1>
        </div>

        {/* Animated word */}
        <div className="mb-8 h-16 flex items-center justify-center">
          <p
            className="font-display text-3xl md:text-5xl transition-all duration-400"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(-10px)",
            }}
          >
            TIME TO&nbsp;
            <span className="text-gradient-fire">{words[wordIdx]}</span>
          </p>
        </div>

        {/* Can + CTA row */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 mt-4">
          {/* Can */}
          <div className="relative">
            <div
              className="absolute inset-0 rounded-full blur-2xl opacity-50"
              style={{ background: "radial-gradient(circle, hsl(282,70%,50%), transparent)" }}
            />
            <img
              src={hydraCan}
              alt="Hydra Energy Can"
              className="relative w-48 md:w-64 float drop-shadow-2xl"
            />
          </div>

          {/* Info block */}
          <div className="text-left max-w-xs">
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-6">
              The caffeinated beverage that fuels every grind.
              B-vitamins · Taurine · Bold Black Grape.
              Your daily power-up.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              {["Taurine 0.4%", "Caffeine 0.03%", "B2 · B3 · B6 · B12", "300ml"].map((tag) => (
                <span
                  key={tag}
                  className="font-display text-xs tracking-widest px-3 py-1.5 rounded-full glass border border-grape/30 text-grape"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              <a href="#product" className="btn-grape">EXPLORE</a>
              <a href="#contact" className="btn-outline">BUY NOW</a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <span className="font-display text-xs tracking-widest text-muted-foreground">SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-muted-foreground to-transparent" style={{ animation: "fadeInUp 1.5s ease-in-out infinite" }} />
      </div>
    </section>
  );
};

export default HeroSection;
