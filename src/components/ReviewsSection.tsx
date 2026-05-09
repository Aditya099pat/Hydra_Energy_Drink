import { useState } from "react";

const reviews = [
  {
    name: "Arjun S.",
    location: "Mumbai",
    rating: 5,
    text: "The grape flavour is addictive! Way better than the international brands. Hits fast and keeps me going through long coding sessions.",
    tag: "DAILY USER",
  },
  {
    name: "Priya M.",
    location: "Bangalore",
    rating: 5,
    text: "Finally an Indian energy drink that doesn't taste like medicine. The B-vitamins actually make a noticeable difference. My gym buddy.",
    tag: "FITNESS",
  },
  {
    name: "Rahul K.",
    location: "Delhi",
    rating: 4,
    text: "Clean energy, no crash. I have one before my morning run and I feel absolutely electric. Great taste too.",
    tag: "RUNNER",
  },
  {
    name: "Sneha T.",
    location: "Pune",
    rating: 5,
    text: "I was skeptical but Hydra totally won me over. The grape flavour is bold and refreshing. Would love more flavour variants!",
    tag: "FIRST TIMER",
  },
  {
    name: "Dev P.",
    location: "Chennai",
    rating: 5,
    text: "Stocked up 24 cans. It's my go-to for late night study sessions. Smooth caffeine kick and the taste is 10/10.",
    tag: "STUDENT",
  },
  {
    name: "Ananya R.",
    location: "Hyderabad",
    rating: 4,
    text: "Love the design, love the taste. Feels premium for the price. Black grape is such an underrated energy drink flavour.",
    tag: "GAMER",
  },
];

const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <span key={i} style={{ color: i < count ? "hsl(38,95%,50%)" : "hsl(0,0%,30%)" }}>★</span>
    ))}
  </div>
);

const ReviewsSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="reviews" className="py-24 px-4 relative overflow-hidden" style={{ backgroundColor: "hsl(230,15%,7%)" }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-grape to-transparent opacity-30" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-grape to-transparent opacity-30" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="font-display text-xs tracking-[0.5em] text-teal">COMMUNITY</span>
          <h2 className="font-bebas text-5xl md:text-7xl mt-2 text-foreground">
            PEOPLE LOVE HYDRA
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-orange-brand text-xl">★</span>
              ))}
            </div>
            <span className="font-display text-sm text-muted-foreground">4.8 / 5 · 500+ REVIEWS</span>
          </div>
        </div>

        {/* Featured review */}
        <div className="mb-8 max-w-2xl mx-auto glass border border-grape/30 rounded-2xl p-8 glow-grape text-center">
          <p className="font-body text-xl text-foreground leading-relaxed mb-6 italic">
            "{reviews[active].text}"
          </p>
          <Stars count={reviews[active].rating} />
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-10 h-10 rounded-full flex items-center justify-center font-bebas text-lg text-foreground" style={{ background: "linear-gradient(135deg, hsl(282,70%,45%), hsl(180,70%,42%))" }}>
              {reviews[active].name[0]}
            </div>
            <div className="text-left">
              <p className="font-display text-sm text-foreground">{reviews[active].name}</p>
              <p className="font-body text-xs text-muted-foreground">{reviews[active].location}</p>
            </div>
            <span className="ml-auto font-display text-xs text-teal border border-teal/30 px-3 py-1 rounded-full">
              {reviews[active].tag}
            </span>
          </div>
        </div>

        {/* Review grid */}
        <div className="grid md:grid-cols-3 gap-4">
          {reviews.map((review, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`text-left glass border rounded-xl p-5 transition-all duration-300 card-lift ${
                active === i ? "border-grape/60 glow-grape" : "border-white/8 hover:border-grape/30"
              }`}
            >
              <Stars count={review.rating} />
              <p className="font-body text-muted-foreground text-sm leading-relaxed mt-3 line-clamp-3">
                "{review.text}"
              </p>
              <div className="flex items-center gap-2 mt-4">
                <div className="w-7 h-7 rounded-full flex items-center justify-center font-bebas text-sm text-foreground" style={{ background: "linear-gradient(135deg, hsl(282,70%,45%), hsl(180,70%,42%))" }}>
                  {review.name[0]}
                </div>
                <span className="font-display text-xs text-foreground">{review.name}</span>
                <span className="font-body text-xs text-muted-foreground ml-auto">{review.location}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
