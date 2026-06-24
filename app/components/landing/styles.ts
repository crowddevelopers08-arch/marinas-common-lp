export const colors = {
  ink: "#14241f",
  inkSoft: "#46554f",
  petrol: "#3aaeba",
  petrolDeep: "#2c8791",
  petrol700: "#349aa4",
  coral: "#50c0d0",
  coralDeep: "#36aebb",
  sage: "#50c0d0",
  sageSoft: "#dff6f9",
  mist: "#effbfc",
  line: "#d5eef2",
  sand: "#effbfc",
};

export const wrap = "w-full max-w-[1180px] mx-auto px-6";
export const section = "scroll-mt-[86px] py-[28px] max-[760px]:py-[20px]";
export const sectionTight = "scroll-mt-[86px] py-16 max-[760px]:py-[60px]";
export const displayFont = "font-[family-name:var(--font-fraunces)] font-semibold leading-[1.06] tracking-normal";
export const eyebrow =
  "inline-flex items-center gap-2.5 text-[12.5px] font-bold uppercase tracking-[.16em] text-[#3aaeba] before:block before:h-px before:w-[22px] before:bg-[#50c0d0]";
export const eyebrowDark =
  "inline-flex items-center gap-2.5 text-[12.5px] font-bold uppercase tracking-[.16em] text-[#bfeff5] before:block before:h-px before:w-[22px] before:bg-[#50c0d0]";
export const h2 = `${displayFont} mt-4 max-w-[18ch] text-[clamp(28px,4vw,46px)]`;
export const lead = "mt-[18px] max-w-[60ch] text-[clamp(16px,1.6vw,19px)] text-[#46554f]";
export const leadDark = "mt-[18px] max-w-[60ch] text-[clamp(16px,1.6vw,19px)] text-[#c9e7eb]";
export const lens = "inline-block size-[9px] shrink-0 rounded-full border-[2.5px] border-[#50c0d0]";

const btnBase =
  "inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-full border border-transparent px-[26px] py-[15px] text-[15.5px] font-bold transition active:translate-y-px";

export const button = {
  primary: `${btnBase} bg-[#50c0d0] text-white shadow-[0_12px_26px_-10px_rgba(80,192,208,.55)] hover:bg-[#36aebb]`,
  ink: `${btnBase} bg-[#14241f] text-white hover:bg-[#1f3438]`,
  ghost: `${btnBase} border-[#d5eef2] bg-transparent text-[#14241f] hover:border-[#3aaeba] hover:text-[#3aaeba]`,
  ghostDark: `${btnBase} border-white/30 bg-transparent text-white hover:border-white hover:bg-white/10`,
  lg: "px-8 py-[17px] text-[16.5px]",
  block: "w-full",
};

export const cardShadow = "shadow-[0_18px_50px_-20px_rgba(10,40,40,.28)]";
export const smallShadow = "shadow-[0_1px_2px_rgba(10,40,40,.06),0_6px_18px_rgba(10,40,40,.05)]";

export function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
