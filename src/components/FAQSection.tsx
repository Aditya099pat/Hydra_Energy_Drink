const FAQSection = () => {
  const faqs = [
    {
      q: "What makes Hydra Energy different?",
      a: "Hydra Energy combines Taurine, Caffeine, and 4 essential B-Vitamins in a bold Black Grape flavour — giving you both taste and performance in one can.",
    },
    {
      q: "How much caffeine is in one can?",
      a: "Each 300ml can contains 90mg of caffeine (0.03% per 100ml), equivalent to roughly one cup of coffee.",
    },
    {
      q: "Is Hydra Energy suitable for everyone?",
      a: "Not recommended for children under 18, pregnant or breastfeeding women, or people sensitive to caffeine. Consume responsibly.",
    },
    {
      q: "What flavour does Hydra Energy come in?",
      a: "Currently available in Greedy Grapes — our signature Black Grape flavour. More flavours coming soon!",
    },
  ];

  return (
    <section id="faqs" className="py-24 px-4 bg-background">
      <div className="max-w-3xl mx-auto">
        <h2
          className="font-display text-center mb-12"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "hsl(0,0%,98%)" }}
        >
          FAQs
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-border rounded-lg p-6 hover:border-grape transition-colors duration-300"
            >
              <h3 className="font-display text-xl text-foreground mb-2">{faq.q}</h3>
              <p className="font-body text-muted-foreground leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
