import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "HOME", href: "#" },
    { label: "ABOUT", href: "#about" },
    { label: "PRODUCT", href: "#product" },
    { label: "NUTRITION", href: "#ingredients" },
    { label: "REVIEWS", href: "#reviews" },
    { label: "FAQs", href: "#faqs" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <>
      <nav
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "glass-dark border-b border-white/10 py-2"
            : "bg-teal py-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-14">
          {/* Logo */}
          <a href="#" className="font-display text-2xl text-foreground tracking-wider group">
            HYDRA<span className="text-orange-brand group-hover:scale-110 inline-block transition-transform">⚡</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="animated-underline px-3 py-1.5 text-foreground font-display text-xs tracking-widest hover:text-grape transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Cart */}
            <button className="relative p-2 text-foreground hover:text-orange-brand transition-colors hidden md:block">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 01-8 0"/>
              </svg>
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-orange-brand rounded-full text-xs flex items-center justify-center text-black font-bold">
                  {cartCount}
                </span>
              )}
            </button>

            {/* CTA */}
            <a
              href="#contact"
              className="bg-orange-brand text-black font-display text-xs tracking-widest px-5 py-2 rounded-sm hover:opacity-90 hover:glow-orange transition-all hidden md:block"
            >
              BUY NOW
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 text-foreground"
            >
              <div className="w-5 space-y-1.5">
                <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden glass-dark border-t border-white/10 px-4 py-4 space-y-2">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block font-display text-sm tracking-widest text-foreground hover:text-grape py-2 border-b border-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" className="block btn-primary text-center mt-4">BUY NOW</a>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
