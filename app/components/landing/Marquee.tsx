export function Marquee() {
  const items = ["Hernia", "Gallbladder stones", "Acid reflux", "Piles", "Bariatric surgery", "Appendicitis", "Diabetic foot", "Colorectal care"];

  return (
    <div className="overflow-hidden border-y border-white/10 bg-[#2c8791] text-[#dff6f9]">
      <div className="flex w-max animate-marquee gap-[38px] whitespace-nowrap py-[15px] hover:[animation-play-state:paused]">
        {[...items, ...items].map((item, index) => (
          <span className="inline-flex items-center gap-[38px] text-sm font-semibold tracking-[.04em] after:size-1.5 after:rounded-full after:bg-[#50c0d0] after:content-['']" key={`${item}-${index}`}>{item}</span>
        ))}
      </div>
    </div>
  );
}
