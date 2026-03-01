const Navbar = () => {
  const links = ["HOME", "ABOUT", "HYDRA ENERGY", "CONTACT US", "FAQs"];

  return (
    <nav className="bg-teal sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-14">
        {/* Logo */}
        <a href="#" className="font-display text-2xl text-foreground tracking-wider">
          HYDRA<span className="text-orange-brand">⚡</span>
        </a>

        {/* Links */}
        <div className="hidden md:flex items-center gap-2">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="px-4 py-1.5 rounded-full border-2 border-foreground text-foreground font-display text-xs tracking-widest hover:bg-foreground hover:text-accent-foreground transition-all duration-200"
            >
              {link}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#"
          className="bg-orange-brand text-foreground font-display text-sm tracking-widest px-6 py-2.5 rounded-sm hover:opacity-90 transition-opacity"
        >
          Contact Us
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
