import { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const inputClass = "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-grape/60 transition-colors text-sm";

  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden" style={{ backgroundColor: "hsl(230,15%,7%)" }}>
      <div className="absolute inset-0 bg-stripes pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="font-display text-xs tracking-[0.5em] text-teal">LET'S CONNECT</span>
          <h2 className="font-bebas text-5xl md:text-7xl mt-2 text-foreground">GET IN TOUCH</h2>
          <p className="font-body text-muted-foreground mt-4 max-w-xl mx-auto">
            Interested in stocking Hydra Energy, bulk orders, partnerships, or just want to say hi? We're all ears.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info side */}
          <div className="space-y-6">
            <div className="glass border border-white/8 rounded-xl p-6 card-lift">
              <h3 className="font-display text-lg text-foreground mb-4">CONTACT INFO</h3>
              <div className="space-y-4">
                {[
                  { icon: "📧", label: "Email", value: "hello@hydraenergy.in" },
                  { icon: "📞", label: "Phone", value: "+91 98765 43210" },
                  { icon: "📍", label: "HQ", value: "Mumbai, Maharashtra, India" },
                  { icon: "⏰", label: "Hours", value: "Mon–Sat, 10am–6pm IST" },
                ].map(({ icon, label, value }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="w-10 h-10 glass rounded-lg flex items-center justify-center text-lg flex-shrink-0">
                      {icon}
                    </div>
                    <div>
                      <p className="font-display text-xs tracking-widest text-muted-foreground">{label}</p>
                      <p className="font-body text-foreground text-sm">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social */}
            <div className="glass border border-white/8 rounded-xl p-6">
              <h3 className="font-display text-lg text-foreground mb-4">FOLLOW US</h3>
              <div className="flex gap-3 flex-wrap">
                {[
                  { name: "INSTAGRAM", color: "hsl(290,70%,55%)" },
                  { name: "TWITTER / X", color: "hsl(200,80%,55%)" },
                  { name: "YOUTUBE", color: "hsl(0,90%,55%)" },
                  { name: "LINKEDIN", color: "hsl(210,80%,50%)" },
                ].map(({ name, color }) => (
                  <a
                    key={name}
                    href="#"
                    className="font-display text-xs tracking-widest px-4 py-2 rounded-full border transition-all duration-200 hover:-translate-y-0.5"
                    style={{ borderColor: color + "50", color }}
                  >
                    {name}
                  </a>
                ))}
              </div>
            </div>

            {/* Wholesale CTA */}
            <div className="glass border border-orange/30 rounded-xl p-6">
              <p className="font-display text-sm text-orange-brand mb-2">🏪 WHOLESALE ENQUIRIES</p>
              <p className="font-body text-muted-foreground text-sm">
                Looking to stock Hydra Energy in your store? We offer competitive wholesale pricing and support for retailers of all sizes.
              </p>
            </div>
          </div>

          {/* Form side */}
          <div className="glass border border-white/8 rounded-2xl p-8">
            {submitted ? (
              <div className="text-center py-16 fade-in-up">
                <div className="text-6xl mb-4">⚡</div>
                <h3 className="font-bebas text-4xl text-gradient-grape mb-3">MESSAGE SENT!</h3>
                <p className="font-body text-muted-foreground">
                  Thanks for reaching out. We'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                  className="btn-outline mt-6 inline-block"
                >
                  SEND ANOTHER
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-display text-lg text-foreground mb-2">SEND A MESSAGE</h3>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-display text-xs tracking-widest text-muted-foreground mb-2 block">NAME *</label>
                    <input name="name" value={form.name} onChange={handleChange} required placeholder="Your name" className={inputClass} />
                  </div>
                  <div>
                    <label className="font-display text-xs tracking-widest text-muted-foreground mb-2 block">EMAIL *</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="you@email.com" className={inputClass} />
                  </div>
                </div>

                <div>
                  <label className="font-display text-xs tracking-widest text-muted-foreground mb-2 block">SUBJECT *</label>
                  <select name="subject" value={form.subject} onChange={handleChange} required className={inputClass}>
                    <option value="">Choose a topic...</option>
                    <option>General Enquiry</option>
                    <option>Wholesale / Retail Partnership</option>
                    <option>Media & PR</option>
                    <option>Feedback</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="font-display text-xs tracking-widest text-muted-foreground mb-2 block">MESSAGE *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us what's on your mind..."
                    className={inputClass + " resize-none"}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-grape w-full flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      SENDING...
                    </>
                  ) : "SEND MESSAGE ⚡"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
