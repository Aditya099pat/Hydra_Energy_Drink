import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 90, unit: "mg", label: "Caffeine per can", suffix: "" },
  { value: 1200, unit: "mg", label: "Taurine per can", suffix: "" },
  { value: 4, unit: "", label: "Essential B-Vitamins", suffix: "+" },
  { value: 300, unit: "ml", label: "Bold grape power", suffix: "" },
];

const useCountUp = (target: number, duration = 1500, started = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, started]);
  return count;
};

const StatCard = ({ value, unit, label, suffix, started }: any) => {
  const count = useCountUp(value, 1400, started);
  return (
    <div className="text-center card-lift glass border border-white/8 rounded-xl p-8 group">
      <div className="stat-number">
        {count}{unit}<span className="text-orange-brand">{suffix}</span>
      </div>
      <p className="font-display text-sm tracking-widest text-muted-foreground mt-2 group-hover:text-grape transition-colors">
        {label}
      </p>
    </div>
  );
};

const StatsSection = () => {
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setStarted(true); obs.disconnect(); }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 px-4 relative overflow-hidden" style={{ backgroundColor: "hsl(230,15%,7%)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="font-display text-xs tracking-[0.5em] text-teal">BY THE NUMBERS</span>
          <h2 className="font-bebas text-5xl md:text-7xl mt-2 text-foreground">
            WHAT'S INSIDE
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <StatCard key={s.label} {...s} started={started} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
