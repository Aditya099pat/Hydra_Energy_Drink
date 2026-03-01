import hydraCan from "@/assets/hydra-can.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-background flex flex-col items-center justify-center overflow-hidden">
      {/* Background grape glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, hsl(282,60%,45%), transparent 70%)" }}
        />
      </div>

      {/* Flavor label */}
      <div className="relative z-10 text-center mb-4">
        <span className="font-display text-sm tracking-[0.4em] text-muted-foreground">
          GREEDY GRAPES · BLACK GRAPE FLAVOUR · 300ML
        </span>
      </div>

      {/* Main headline */}
      <div className="relative z-10 text-center px-4 mb-6">
        <h1
          className="font-display leading-[0.9] mb-2"
          style={{ fontSize: "clamp(4rem, 14vw, 12rem)" }}
        >
          <span className="text-foreground">HYDRA</span>
        </h1>
        <h1
          className="font-display leading-[0.9]"
          style={{ fontSize: "clamp(3rem, 10vw, 8rem)" }}
        >
          <span className="text-gradient-grape">ENERGY</span>
        </h1>
      </div>

      {/* Can image */}
      <div className="relative z-10 w-[240px] md:w-[300px] drop-shadow-2xl my-4">
        <img
          src={hydraCan}
          alt="Hydra Energy Can - Black Grape"
          className="w-full object-contain"
        />
      </div>

      {/* Tagline */}
      <div className="relative z-10 text-center px-4 mt-4 max-w-2xl">
        <p className="font-display text-2xl md:text-4xl text-foreground leading-tight">
          Grab a Hydra and{" "}
          <span className="bg-grape-vivid px-2" style={{ backgroundColor: "hsl(282,80%,55%)" }}>
            Fight Through
          </span>{" "}
          Your Day
        </p>
        <p className="font-body text-muted-foreground mt-4 text-lg">
          Swipe for product details below ↓
        </p>
      </div>

      {/* Scroll arrow */}
      <a
        href="#about"
        className="relative z-10 mt-8 w-14 h-14 rounded-full bg-foreground text-background flex items-center justify-center text-xl hover:bg-grape transition-colors duration-300"
        style={{ "--grape-bg": "hsl(282,60%,45%)" } as React.CSSProperties}
      >
        ↓
      </a>
    </section>
  );
};

export default HeroSection;
