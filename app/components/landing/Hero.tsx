import { doctor, videos } from "./data";
import { button, cardShadow, cx, displayFont, eyebrowDark, lens, smallShadow, wrap } from "./styles";

const heroBackgrounds = [
  doctor,
  videos[0].replace("/video/upload/", "/video/upload/so_1/").replace(".mp4", ".jpg"),
  videos[2].replace("/video/upload/", "/video/upload/so_1/").replace(".mp4", ".jpg"),
];

const BgLayers = () => (
  <div className="absolute inset-0" aria-hidden="true">
    {heroBackgrounds.map((src, index) => (
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0 [animation:hero-bg-fade_18s_linear_infinite]"
        key={src}
        style={{ animationDelay: `${index * 6}s`, backgroundImage: `url(${src})` }}
      />
    ))}
    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,36,31,.74)_0%,rgba(20,36,31,.9)_42%,rgba(20,36,31,.96)_100%)]" />
    <div className="absolute inset-0 bg-[radial-gradient(80%_80%_at_85%_8%,rgba(80,192,208,.26)_0%,rgba(80,192,208,0)_58%)]" />
  </div>
);

const badges = ["No-pressure guidance", "Reports reviewed", "Insurance support"];
const infoGrid = [["Clinic", "Nungambakkam"], ["Timing", "5-8 PM"], ["Surgeon", "Female"], ["Care", "Keyhole"]];

export function Hero() {
  return (
    <>
      {/* Desktop */}
      <section className="relative hidden overflow-hidden bg-[#14241f] text-[#f2fbfc] md:block">
        <BgLayers />
        <div className={cx(wrap, "relative grid grid-cols-2 items-center gap-[58px] py-[32px]")}>
          <div className="w-full max-w-[560px] justify-self-start">
            <span className={eyebrowDark}>Advanced surgical care in Chennai</span>
            <h1 className={cx(displayFont, "mt-5 max-w-[11ch] text-[clamp(38px,5.4vw,66px)] text-white")}>
              Stop guessing. Get a clear surgical opinion from a <em className="italic text-[#bfeff5]">specialist</em>.
            </h1>
            <p className="mt-[22px] max-w-[58ch] text-[clamp(16px,1.55vw,19px)] leading-[1.72] text-[#d7f0f3]">
              Hernia, gallstones, acid reflux, piles, obesity and more. Book a focused consultation with Dr. Preethi Mrinalini, advanced laparoscopic and bariatric surgeon.
            </p>
            <div className="mt-[28px] flex flex-wrap gap-2.5">
              {badges.map((item) => (
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-2 text-[13px] font-semibold text-[#f2fbfc] backdrop-blur-sm" key={item}>
                  <span className={cx(lens, "size-2 border-2")} /> {item}
                </span>
              ))}
            </div>
            <div className="mt-[34px] flex flex-wrap gap-3">
              <a className={cx(button.primary, button.lg)} href="#book">Book my consultation</a>
              <a className={cx(button.ghostDark, button.lg)} href="#selfcheck">Check my symptoms</a>
            </div>
            <p className="mt-4 text-[13px] text-[#c9e7eb]">Limited clinic slots each week at Nungambakkam and Apollo, Greams Road.</p>
          </div>
          <div className="w-full max-w-[560px] justify-self-end">
            <div className={cx("relative overflow-hidden rounded-[28px] border border-white/15 bg-[#1e3f44]", cardShadow)}>
              <span className="absolute left-4 top-4 z-[2] rounded-full bg-[#14241f]/80 px-3.5 py-2 text-[11.5px] font-bold uppercase tracking-[.08em] text-[#f2fbfc] backdrop-blur-md">Meet the surgeon</span>
              <video className="block aspect-[16/13] w-full bg-[#1e3f44] object-cover" autoPlay muted loop playsInline preload="metadata">
                <source src={videos[1]} type="video/mp4" />
              </video>
            </div>
            <div className={cx("relative mt-3 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[#d5eef2] bg-[#d5eef2] text-[#14241f]", smallShadow)}>
              {infoGrid.map(([label, value]) => (
                <div className="bg-white px-4 py-4 text-center" key={label}>
                  <span className="block text-[11px] font-bold uppercase tracking-[.1em] text-[#46554f]">{label}</span>
                  <b className={cx(displayFont, "mt-1 block text-[17px]")}>{value}</b>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile — eyebrow → h1 → p → video → info → badges → buttons → note */}
      <section className="relative overflow-hidden bg-[#14241f] text-[#f2fbfc] md:hidden">
        <BgLayers />
        <div className={cx(wrap, "relative flex flex-col gap-6 py-10")}>
          <span className={eyebrowDark}>Advanced surgical care in Chennai</span>
          <h1 className={cx(displayFont, "text-[clamp(34px,8vw,52px)] text-white")}>
            Stop guessing. Get a clear surgical opinion from a <em className="italic text-[#bfeff5]">specialist</em>.
          </h1>
          <p className="text-[clamp(15px,4vw,17px)] leading-[1.72] text-[#d7f0f3]">
            Hernia, gallstones, acid reflux, piles, obesity and more. Book a focused consultation with Dr. Preethi Mrinalini, advanced laparoscopic and bariatric surgeon.
          </p>
          <div className={cx("relative overflow-hidden rounded-[22px] border border-white/15 bg-[#1e3f44]", cardShadow)}>
            <span className="absolute left-4 top-4 z-[2] rounded-full bg-[#14241f]/80 px-3.5 py-2 text-[11.5px] font-bold uppercase tracking-[.08em] text-[#f2fbfc] backdrop-blur-md">Meet the surgeon</span>
            <video className="block aspect-[8/12] w-full bg-[#1e3f44] object-cover" autoPlay muted loop playsInline preload="metadata">
              <source src={videos[1]} type="video/mp4" />
            </video>
          </div>
          <div className={cx("grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[#d5eef2] bg-[#d5eef2] text-[#14241f]", smallShadow)}>
            {infoGrid.map(([label, value]) => (
              <div className="bg-white px-4 py-4 text-center" key={label}>
                <span className="block text-[11px] font-bold uppercase tracking-[.1em] text-[#46554f]">{label}</span>
                <b className={cx(displayFont, "mt-1 block text-[17px]")}>{value}</b>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {badges.map((item) => (
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-2 text-[13px] font-semibold text-[#f2fbfc] backdrop-blur-sm" key={item}>
                <span className={cx(lens, "size-2 border-2")} /> {item}
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <a className={cx(button.primary, button.lg, "flex-1 text-center")} href="#book">Book my consultation</a>
            <a className={cx(button.ghostDark, button.lg, "flex-1 text-center")} href="#selfcheck">Check my symptoms</a>
          </div>
          <p className="text-[13px] text-[#c9e7eb]">Limited clinic slots each week at Nungambakkam and Apollo, Greams Road.</p>
        </div>
      </section>
    </>
  );
}
