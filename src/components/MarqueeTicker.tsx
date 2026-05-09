interface MarqueeTickerProps {
  text: string;
  bgClass?: string;
  textClass?: string;
  reverse?: boolean;
}

const MarqueeTicker = ({ text, bgClass = "bg-foreground", textClass = "text-background", reverse = false }: MarqueeTickerProps) => {
  const repeated = Array(12).fill(text);
  return (
    <div className={`${bgClass} py-3 marquee-wrapper overflow-hidden`}>
      <div className={`${reverse ? "marquee-track-reverse" : "marquee-track"}`}>
        {repeated.map((t, i) => (
          <span key={i} className={`${textClass} font-display text-sm tracking-[0.3em] mx-6 whitespace-nowrap`}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeTicker;
