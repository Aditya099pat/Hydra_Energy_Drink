interface MarqueeTickerProps {
  text?: string;
  bgClass?: string;
  textClass?: string;
  repeat?: number;
}

const MarqueeTicker = ({
  text = "GET · SET · CAFFEINATE ⚡ FEINATE ⚡",
  bgClass = "bg-foreground",
  textClass = "text-background",
  repeat = 8,
}: MarqueeTickerProps) => {
  const items = Array(repeat).fill(text);

  return (
    <div className={`${bgClass} py-3 marquee-wrapper overflow-hidden`}>
      <div className="marquee-track">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className={`${textClass} font-display text-sm tracking-widest mx-8`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeTicker;
