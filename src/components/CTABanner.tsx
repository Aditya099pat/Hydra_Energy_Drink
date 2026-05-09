const CTABanner = () => (
  <section className="py-24 px-4 relative overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsl(282,60%,20%), hsl(230,25%,10%), hsl(180,50%,15%))" }} />
    <div className="absolute inset-0 bg-stripes opacity-30" />
    {/* Orbs */}
    <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ background: "hsl(282,70%,50%)" }} />
    <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full blur-3xl opacity-15" style={{ background: "hsl(180,70%,42%)" }} />

    <div className="relative z-10 max-w-4xl mx-auto text-center">
      <span className="font-display text-xs tracking-[0.5em] text-teal mb-4 block">DON'T WAIT</span>
      <h2 className="font-bebas leading-none mb-6" style={{ fontSize: "clamp(3.5rem, 10vw, 8rem)" }}>
        <span className="text-foreground">GET YOUR</span><br />
        <span className="text-gradient-grape">HYDRA NOW</span>
      </h2>
      <p className="font-body text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
        The energy drink that actually works. Bold grape. Clean energy. B-vitamins that count.
        Available in India — order yours today.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <a href="#contact" className="btn-primary text-base px-10 py-4 pulse-ring">ORDER NOW ⚡</a>
        <a href="#product" className="btn-outline text-base px-10 py-4">LEARN MORE</a>
      </div>

      {/* Micro stats */}
      <div className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-white/10">
        {[
          { val: "300ml", label: "Per Can" },
          { val: "90mg", label: "Caffeine" },
          { val: "1200mg", label: "Taurine" },
          { val: "4", label: "B-Vitamins" },
        ].map(({ val, label }) => (
          <div key={label} className="text-center">
            <p className="font-bebas text-3xl text-gradient-grape">{val}</p>
            <p className="font-display text-xs tracking-widest text-muted-foreground">{label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CTABanner;
