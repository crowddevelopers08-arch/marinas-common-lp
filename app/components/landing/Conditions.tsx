import { Icon } from "./Icon";
import { conditions } from "./data";
import { cx, eyebrow, h2, lead, section, wrap } from "./styles";

export function Conditions({ onPick }: { onPick: () => void }) {
  return (
    <section className={cx(section, "overflow-hidden")} id="conditions">
      <div className={wrap}>
        <div className="mx-auto max-w-[760px] text-center">
          <span className={eyebrow}>What we assess</span>
          <h2 className={cx(h2, "mx-auto")}>
            Common problems people delay for <em className="italic text-[#50c0d0]">months</em>.
          </h2>
          <p className={cx(lead, "mx-auto")}>Tap a condition to open a fresh consultation form and get to the right conversation faster.</p>
        </div>
        {/* Desktop grid */}
        <div className="mt-[22px] hidden grid-cols-4 gap-4 md:grid max-[980px]:grid-cols-2 max-[760px]:grid-cols-1">
          {conditions.map(([title, text]) => (
            <button className="group flex min-h-[190px] cursor-pointer flex-col rounded-[20px] border border-[#d5eef2] bg-[linear-gradient(180deg,#fff_0%,#effbfc_100%)] p-5 text-left transition hover:-translate-y-1 hover:border-[#50c0d0] hover:shadow-[0_18px_50px_-20px_rgba(10,40,40,.28)] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#50c0d0]" key={title} type="button" onClick={onPick}>
              <span className="mb-5 flex items-center justify-between gap-3">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-white text-[#3aaeba] shadow-[0_1px_2px_rgba(10,40,40,.06),0_6px_18px_rgba(10,40,40,.05)] transition group-hover:bg-[#50c0d0] group-hover:text-white">
                  <Icon className="size-[22px] stroke-current stroke-[1.7]" name="search" />
                </span>
                <span className="flex size-8 items-center justify-center rounded-full border border-[#d5eef2] bg-white text-[#50c0d0] transition group-hover:border-[#50c0d0] group-hover:bg-[#50c0d0] group-hover:text-white">
                  <Icon className="size-3.5 stroke-current" name="arrow" />
                </span>
              </span>
              <h3 className="font-[family-name:var(--font-fraunces)] text-[19px] font-semibold leading-[1.08] text-[#14241f]">{title}</h3>
              <p className="m-0 mt-3 flex-1 text-[13.5px] leading-[1.6] text-[#46554f]">{text}</p>
              <span className="mt-5 inline-flex w-fit items-center rounded-full bg-white px-3 py-1.5 text-[12.5px] font-bold text-[#3aaeba] ring-1 ring-[#d5eef2] transition group-hover:text-[#2c8791]">Book for this</span>
            </button>
          ))}
        </div>
      </div>
      {/* Mobile marquee */}
      <div className="mt-[22px] md:hidden">
        <div
          className="flex w-max animate-marquee gap-4 px-4"
          style={{ animationDuration: "22s" }}
        >
          {[...conditions, ...conditions].map(([title, text], i) => (
            <button
              className="group flex w-[260px] shrink-0 cursor-pointer flex-col rounded-[20px] border border-[#d5eef2] bg-[linear-gradient(180deg,#fff_0%,#effbfc_100%)] p-5 text-left transition hover:border-[#50c0d0] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#50c0d0]"
              key={i}
              type="button"
              onClick={onPick}
            >
              <span className="mb-5 flex items-center justify-between gap-3">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-white text-[#3aaeba] shadow-[0_1px_2px_rgba(10,40,40,.06),0_6px_18px_rgba(10,40,40,.05)] transition group-hover:bg-[#50c0d0] group-hover:text-white">
                  <Icon className="size-[22px] stroke-current stroke-[1.7]" name="search" />
                </span>
                <span className="flex size-8 items-center justify-center rounded-full border border-[#d5eef2] bg-white text-[#50c0d0] transition group-hover:border-[#50c0d0] group-hover:bg-[#50c0d0] group-hover:text-white">
                  <Icon className="size-3.5 stroke-current" name="arrow" />
                </span>
              </span>
              <h3 className="font-[family-name:var(--font-fraunces)] text-[19px] font-semibold leading-[1.08] text-[#14241f]">{title}</h3>
              <p className="m-0 mt-3 flex-1 text-[13.5px] leading-[1.6] text-[#46554f]">{text}</p>
              <span className="mt-5 inline-flex w-fit items-center rounded-full bg-white px-3 py-1.5 text-[12.5px] font-bold text-[#3aaeba] ring-1 ring-[#d5eef2] transition group-hover:text-[#2c8791]">Book for this</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
