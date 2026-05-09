import { useState } from "react";

const faqs = [
  {
    q: "What makes Hydra Energy different from other energy drinks?",
    a: "Hydra Energy combines Taurine, Caffeine, and 4 essential B-Vitamins in a bold Black Grape flavour — giving you both taste and performance in one can. It's proudly made in India, with transparent labelling.",
  },
  {
    q: "How much caffeine is in one can?",
    a: "Each 300ml can contains 90mg of caffeine (0.03% per 100ml), roughly equivalent to one strong cup of coffee. It's enough to give you a clean, focused boost without the jitters.",
  },
  {
    q: "Is Hydra Energy suitable for everyone?",
    a: "Not recommended for children under 18, pregnant or breastfeeding women, or people who are sensitive to caffeine. Always consume responsibly and limit intake to 1 can per day.",
  },
  {
    q: "What flavour does Hydra Energy come in?",
    a: "Currently available in Greedy Grapes — our signature Black Grape flavour. More exciting flavours are in development and coming soon! Follow us to be the first to know.",
  },
  {
    q: "Where can I buy Hydra Energy?",
    a: "Hydra Energy is available in select retail stores and online. Use the contact form on this page to enquire about availability near you or bulk orders.",
  },
  {
    q: "Does Hydra Energy cause a sugar crash?",
    a: "Hydra Energy contains both sugar and an artificial sweetener (INS 955). The caffeine and B-vitamins provide a more sustained energy boost compared to sugar-only drinks, minimising the crash effect.",
  },
  {
    q: "Can I drink Hydra before a workout?",
    a: "Absolutely. The caffeine and taurine combination makes it an excellent pre-workout companion. We recommend consuming it 20–30 minutes before exercise for optimal effect.",
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faqs" className="py-24 px-4 bg-background relative overflow-hidden">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="font-display text-xs tracking-[0.5em] text-teal">GOT QUESTIONS?</span>
          <h2 className="font-bebas text-5xl md:text-7xl mt-2 text-foreground">
            WE GOT ANSWERS
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`glass border rounded-xl overflow-hidden transition-all duration-300 ${
                open === i ? "border-grape/50 glow-grape" : "border-white/8 hover:border-white/20"
              }`}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left group"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <h3 className={`font-display text-base md:text-lg pr-4 transition-colors ${open === i ? "text-grape" : "text-foreground group-hover:text-grape"}`}>
                  {faq.q}
                </h3>
                <span
                  className={`text-grape text-2xl flex-shrink-0 transition-transform duration-300 ${open === i ? "rotate-45" : ""}`}
                >
                  +
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5 fade-in-up">
                  <p className="font-body text-muted-foreground leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center glass border border-teal/20 rounded-xl p-6">
          <p className="font-body text-muted-foreground mb-4">Still have questions? We'd love to hear from you.</p>
          <a href="#contact" className="btn-grape inline-block">ASK US DIRECTLY</a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
