import hydraCan from "@/assets/hydra-can.png";
import { useState } from "react";

const BuySection = () => {
  const [qty, setQty] = useState(1);
  const price = 50;

  return (
    <section id="buy" className="py-24 px-4 bg-background relative overflow-hidden">
      {/* BG gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-[100px] opacity-10" style={{ background: "hsl(282,60%,45%)" }} />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="font-display text-xs tracking-[0.5em] text-teal block mb-3">GET YOUR CANS</span>
          <h2 className="font-bebas text-foreground" style={{ fontSize: "clamp(3rem,8vw,6rem)" }}>
            ORDER HYDRA
          </h2>
        </div>

        <div className="glass border border-white/8 rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Product display */}
            <div
              className="relative flex items-center justify-center p-12 min-h-64"
              style={{ background: "linear-gradient(135deg, hsl(230,15%,8%), hsl(282,30%,12%))" }}
            >
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, hsl(282,60%,55%) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
              <div className="relative">
                <div className="absolute inset-0 rounded-full blur-2xl opacity-50" style={{ background: "radial-gradient(hsl(282,70%,50%), transparent)" }} />
                <img src={hydraCan} alt="Hydra Energy" className="relative w-40 float drop-shadow-2xl" />
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex justify-center gap-2">
                  {["Greedy Grapes", "Coming Soon", "Coming Soon"].map((f, i) => (
                    <span
                      key={i}
                      className="font-display text-[10px] tracking-widest px-2 py-1 rounded-full"
                      style={{
                        background: i === 0 ? "hsl(282,60%,45%)" : "hsl(0,0%,15%)",
                        color: i === 0 ? "white" : "hsl(0,0%,40%)",
                        opacity: i === 0 ? 1 : 0.5,
                      }}
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Order form */}
            <div className="p-10">
              <h3 className="font-bebas text-3xl text-foreground mb-1">GREEDY GRAPES</h3>
              <p className="font-body text-muted-foreground text-sm mb-6">Caffeinated Energy Drink · 300ml · Black Grape</p>

              <div className="flex items-baseline gap-2 mb-6">
                <span className="font-bebas text-5xl text-foreground">₹{price}</span>
                <span className="font-body text-muted-foreground text-sm">per can</span>
                <span className="font-display text-xs px-2 py-1 bg-grape/20 text-grape rounded ml-2">IN STOCK</span>
              </div>

              {/* Pack options */}
              <div className="mb-6">
                <p className="font-display text-xs tracking-widest text-muted-foreground mb-3">SELECT PACK</p>
                <div className="grid grid-cols-4 gap-2">
                  {[1, 6, 12, 24].map((q) => (
                    <button
                      key={q}
                      onClick={() => setQty(q)}
                      className="py-2 rounded-lg border font-display text-sm transition-all duration-200"
                      style={{
                        borderColor: qty === q ? "hsl(282,60%,45%)" : "hsl(0,0%,18%)",
                        background: qty === q ? "hsl(282,60%,45%/0.15)" : "transparent",
                        color: qty === q ? "hsl(282,55%,65%)" : "hsl(0,0%,60%)",
                      }}
                    >
                      {q === 1 ? "1 CAN" : `${q} PACK`}
                    </button>
                  ))}
                </div>
              </div>

              {/* Total */}
              <div className="glass border border-white/10 rounded-lg p-4 mb-6 flex justify-between items-center">
                <span className="font-display text-sm text-muted-foreground">TOTAL</span>
                <span className="font-bebas text-2xl text-foreground">₹{price * qty}</span>
              </div>

              {/* Badges */}
              <div className="flex gap-2 mb-6 flex-wrap">
                {["Free Delivery >₹500", "Genuine Product", "24hr Dispatch"].map((b) => (
                  <span key={b} className="font-display text-[10px] tracking-widest px-2 py-1 bg-teal/10 text-teal border border-teal/20 rounded-full">
                    ✓ {b}
                  </span>
                ))}
              </div>

              <div className="space-y-3">
                <a href="#contact" className="btn-primary w-full text-center block">⚡ ORDER NOW</a>
                <a href="#contact" className="btn-outline w-full text-center block">CONTACT FOR BULK</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuySection;
