const Footer = () => {
  const year = new Date().getFullYear();
  const links = {
    "PRODUCT": ["Greedy Grapes", "Nutrition Facts", "Ingredients", "Coming Soon"],
    "COMPANY": ["About Us", "Our Story", "Careers", "Press Kit"],
    "SUPPORT": ["FAQs", "Contact Us", "Wholesale", "Retail Partners"],
    "LEGAL": ["Privacy Policy", "Terms of Use", "Cookie Policy", "Disclaimer"],
  };

  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: "hsl(0,0%,3%)" }}>
      {/* Top divider */}
      <div className="divider-grape" />

      {/* Main footer content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-5 gap-10">
          {/* Brand col */}
          <div className="md:col-span-2">
            <a href="#" className="inline-block mb-4 group">
              <span className="font-bebas text-4xl text-foreground tracking-wider">
                HYDRA<span className="text-orange-brand">⚡</span>ENERGY
              </span>
            </a>
            <p className="font-body text-muted-foreground text-sm leading-relaxed mb-6 max-w-xs">
              Born in 2022, Hydra Energy is India's boldest caffeinated beverage. Fuelling every grind with B-vitamins, taurine, and the iconic Greedy Grapes flavour.
            </p>

            {/* Socials */}
            <div className="flex gap-3">
              {[
                { icon: "ig", label: "Instagram" },
                { icon: "tw", label: "Twitter" },
                { icon: "yt", label: "YouTube" },
                { icon: "li", label: "LinkedIn" },
              ].map(({ icon, label }) => (
                <a
                  key={icon}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 glass border border-white/10 rounded-lg flex items-center justify-center font-display text-xs text-muted-foreground hover:text-foreground hover:border-grape/50 transition-all card-lift"
                >
                  {icon.toUpperCase()}
                </a>
              ))}
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="font-display text-xs tracking-widest text-muted-foreground mb-3">STAY IN THE LOOP</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-grape/50 transition-colors"
                />
                <button className="bg-orange-brand text-black font-display text-xs px-3 py-2 rounded-lg hover:opacity-90 transition-opacity flex-shrink-0">
                  JOIN ⚡
                </button>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([heading, items]) => (
            <div key={heading}>
              <h4 className="font-display text-xs tracking-[0.3em] text-muted-foreground mb-4">{heading}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="font-body text-sm text-muted-foreground hover:text-foreground animated-underline transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 px-4 py-5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center">
          <p className="font-body text-muted-foreground text-xs">
            © {year} Hydra Energy. All rights reserved. · FSSAI Lic. No. xxxxxxxxxxxxxxx
          </p>
          <p className="font-body text-muted-foreground text-xs">
            Caffeine content: 30mg/100ml · Not recommended for children, pregnant or breastfeeding women.
          </p>
          <p className="font-display text-xs text-muted-foreground tracking-widest">
            GET · SET · CAFFEINATE ⚡
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
