import hydraCan from "@/assets/hydra-can.png";

const ProductSection = () => {
  return (
    <section
      id="product"
      className="py-24 px-4 relative overflow-hidden"
      style={{ backgroundColor: "hsl(230,15%,8%)" }}
    >
      {/* Decorative text bg */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span
          className="font-display text-[20vw] opacity-5 whitespace-nowrap"
          style={{ color: "hsl(282,60%,65%)" }}
        >
          GREEDY GRAPES
        </span>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Can image */}
          <div className="flex justify-center">
            <div className="relative">
              <div
                className="absolute inset-0 rounded-full blur-3xl opacity-40"
                style={{ background: "radial-gradient(circle, hsl(282,70%,50%), transparent)" }}
              />
              <img
                src={hydraCan}
                alt="Hydra Energy 300ml Can"
                className="relative w-72 md:w-96 drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Details */}
          <div>
            <span className="font-display text-sm tracking-[0.4em] text-teal block mb-4">
              HYDRA ENERGY · CAFFEINATED BEVERAGE
            </span>
            <h2
              className="font-display leading-tight mb-6"
              style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)", color: "hsl(0,0%,98%)" }}
            >
              GREEDY<br />
              <span className="text-gradient-grape">GRAPES</span>
            </h2>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-8">
              The bold Black Grape flavour that hits different. Caffeine + Taurine + 
              B-Vitamins in one electrifying 300ml can. Your daily power-up has arrived.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              {["B2 Vitamin", "B3 Vitamin", "B6 Vitamin", "B12 Vitamin", "Taurine", "Caffeine"].map((badge) => (
                <span
                  key={badge}
                  className="font-display text-xs tracking-widest px-4 py-2 rounded-full border"
                  style={{
                    borderColor: "hsl(282,60%,45%)",
                    color: "hsl(282,55%,70%)",
                  }}
                >
                  {badge}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href="#ingredients"
                className="font-display tracking-widest px-8 py-3 rounded-sm text-sm transition-all duration-200 bg-orange-brand hover:opacity-90"
                style={{ backgroundColor: "hsl(38,95%,50%)", color: "hsl(0,0%,5%)" }}
              >
                VIEW NUTRITION
              </a>
              <a
                href="#"
                className="font-display tracking-widest px-8 py-3 rounded-sm text-sm border-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-200"
              >
                BUY NOW
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
