import hydraCan from "@/assets/hydra-can.png";
import { useState } from "react";

const tabs = ["OVERVIEW", "BENEFITS", "HOW TO DRINK"];

const tabContent: Record<string, React.ReactNode> = {
  "OVERVIEW": (
    <div className="space-y-4">
      <p className="font-body text-muted-foreground text-lg leading-relaxed">
        The bold Black Grape flavour that hits different. Caffeine + Taurine +
        B-Vitamins in one electrifying 300ml can. Your daily power-up has arrived.
      </p>
      <div className="flex flex-wrap gap-3">
        {["B2 Vitamin", "B3 Vitamin", "B6 Vitamin", "B12 Vitamin", "Taurine", "Caffeine"].map((badge) => (
          <span key={badge} className="font-display text-xs tracking-widest px-4 py-2 rounded-full border border-grape/50 text-grape">
            {badge}
          </span>
        ))}
      </div>
    </div>
  ),
  "BENEFITS": (
    <ul className="space-y-3">
      {[
        { icon: "⚡", text: "Instant energy surge within 20 minutes" },
        { icon: "🧠", text: "Sharpens mental focus & alertness" },
        { icon: "💪", text: "Supports physical endurance" },
        { icon: "🔥", text: "Boosts metabolism via B-vitamins" },
        { icon: "🍇", text: "Bold Black Grape taste you'll crave" },
      ].map(({ icon, text }) => (
        <li key={text} className="flex items-center gap-3 font-body text-muted-foreground">
          <span className="text-xl">{icon}</span>
          <span>{text}</span>
        </li>
      ))}
    </ul>
  ),
  "HOW TO DRINK": (
    <ol className="space-y-4">
      {[
        { step: "01", text: "Chill the can to 4–6°C for best flavour" },
        { step: "02", text: "Crack it open and let the aroma hit first" },
        { step: "03", text: "Sip steadily — don't chug all at once" },
        { step: "04", text: "Max 1 can per day. Consume responsibly." },
      ].map(({ step, text }) => (
        <li key={step} className="flex gap-4 items-start">
          <span className="font-bebas text-3xl text-grape leading-none">{step}</span>
          <span className="font-body text-muted-foreground pt-1">{text}</span>
        </li>
      ))}
    </ol>
  ),
};

const ProductSection = () => {
  const [activeTab, setActiveTab] = useState("OVERVIEW");

  return (
    <section id="product" className="py-24 px-4 relative overflow-hidden" style={{ backgroundColor: "hsl(230,15%,8%)" }}>
      {/* Decorative bg text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-bebas text-[22vw] opacity-[0.04] whitespace-nowrap" style={{ color: "hsl(282,60%,65%)" }}>
          GREEDY GRAPES
        </span>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Can with orbit rings */}
          <div className="flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center">
              {/* Orbit ring 1 */}
              <div className="absolute inset-0 rounded-full border border-grape/20 spin-slow" />
              {/* Orbit ring 2 */}
              <div className="absolute inset-4 rounded-full border border-teal/10" style={{ animation: "spin-slow 15s linear infinite reverse" }} />
              {/* Glow blob */}
              <div className="absolute inset-0 rounded-full blur-3xl opacity-30" style={{ background: "radial-gradient(circle, hsl(282,70%,50%), transparent 60%)" }} />
              {/* Floating badges */}
              <div className="absolute top-4 right-0 glass border border-grape/30 rounded-full px-3 py-1 text-xs font-display text-grape">300ml</div>
              <div className="absolute bottom-8 left-0 glass border border-teal/30 rounded-full px-3 py-1 text-xs font-display text-teal">TAURINE</div>
              <div className="absolute top-1/2 -right-4 glass border border-orange/30 rounded-full px-3 py-1 text-xs font-display text-orange-brand">90mg</div>
              <img
                src={hydraCan}
                alt="Hydra Energy 300ml Can"
                className="relative w-48 md:w-64 drop-shadow-2xl float"
              />
            </div>
          </div>

          {/* Details */}
          <div>
            <span className="font-display text-xs tracking-[0.4em] text-teal block mb-4">
              HYDRA ENERGY · CAFFEINATED BEVERAGE
            </span>
            <h2 className="font-bebas leading-tight mb-6" style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)", color: "hsl(0,0%,98%)" }}>
              GREEDY<br />
              <span className="text-gradient-grape">GRAPES</span>
            </h2>

            {/* Tabs */}
            <div className="flex border-b border-white/10 mb-6 gap-4">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`font-display text-xs tracking-widest pb-3 transition-colors ${
                    activeTab === tab ? "tab-active" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="mb-8 min-h-[160px]">{tabContent[activeTab]}</div>

            <div className="flex gap-4 flex-wrap">
              <a href="#ingredients" className="btn-primary">VIEW NUTRITION</a>
              <a href="#contact" className="btn-outline">BUY NOW</a>
            </div>

            {/* Trust badges */}
            <div className="flex gap-6 mt-8 pt-6 border-t border-white/8">
              {[
                { icon: "🇮🇳", text: "Made in India" },
                { icon: "✅", text: "FSSAI Approved" },
                { icon: "🚚", text: "Fast Delivery" },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-2">
                  <span>{icon}</span>
                  <span className="font-body text-muted-foreground text-xs">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
