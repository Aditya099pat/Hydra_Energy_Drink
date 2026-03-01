const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div>
            <span className="font-display text-3xl text-foreground tracking-wider">
              HYDRA<span className="text-orange-brand">⚡</span>ENERGY
            </span>
            <p className="font-body text-muted-foreground text-sm mt-2">
              GET · SET · CAFFEINATE
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-6 justify-center">
            {["Home", "About", "Product", "Ingredients", "FAQs", "Contact"].map((link) => (
              <a
                key={link}
                href="#"
                className="font-display text-sm tracking-widest text-muted-foreground hover:text-foreground transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Contact CTA */}
          <a
            href="mailto:hello@hydraenergy.com"
            className="font-display tracking-widest px-6 py-3 rounded-sm text-sm bg-orange-brand hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "hsl(38,95%,50%)", color: "hsl(0,0%,5%)" }}
          >
            Contact Us
          </a>
        </div>

        <div className="border-t border-border mt-8 pt-6 text-center">
          <p className="font-body text-muted-foreground text-sm">
            © 2024 Hydra Energy. All rights reserved. · Caffeine content: 30mg/100ml · Not recommended for children.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
