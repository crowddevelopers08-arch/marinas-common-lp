import { doctor } from "./data";
import { cardShadow, cx, displayFont, eyebrowDark, leadDark, section, wrap } from "./styles";

export function Surgeon() {
  return (
    <section className={cx(section, "bg-[linear-gradient(160deg,#3aaeba_0%,#2c8791_100%)] text-[#f2fbfc]")} id="surgeon">
      <div className={wrap}>
        <div className="mx-auto mb-12 max-w-[760px] text-center">
          <span className={cx(eyebrowDark, "mx-auto flex w-fit justify-center before:hidden")}>Your surgeon</span>
          <h2 className={cx(displayFont, "mx-auto mt-3.5 max-w-[ch] text-[clamp(28px,3.6vw,42px)] text-white")}>Experienced, clear and calm surgical guidance.</h2>
          <p className={cx(leadDark, "mx-auto")}>Dr. Preethi brings specialist surgical training with a practical, patient-first consultation style.</p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1fr_360px]">
          <div className="order-2 lg:order-none rounded-[28px] border border-white/10 bg-white/[.06] p-7 md:p-9">
            <div className="mb-8 inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-[15px] font-bold tracking-[.02em] text-[#bfeff5]">
              Gastro, laparoscopic and bariatric surgery
            </div>

            <p className="max-w-[62ch] text-[18px] leading-[1.75] text-[#d7f0f3]">The goal is clarity: what is happening, what can wait, what cannot, and what the right next step looks like.</p>

            <div className={cx(displayFont, "mt-8 max-w-[30ch] border-l-[3px] border-[#50c0d0] pl-5 text-[clamp(22px,2.6vw,34px)] italic leading-[1.18] text-white")}>&ldquo;Patients deserve an honest explanation before they are asked to make a surgical decision.&rdquo;</div>

            <div className="mt-10 grid grid-cols-2 gap-3.5 md:grid-cols-4">
              {[
                ["10k+", "Patients guided"],
                ["15+", "Years experience"],
                ["2", "Chennai locations"],
                ["100%", "Focused review"],
              ].map(([num, label]) => (
                <div className="rounded-[16px] border border-white/10 bg-white/10 p-[18px_14px] text-center" key={label}>
                  <b className="block font-[family-name:var(--font-fraunces)] text-[30px] font-semibold leading-none text-white">{num}</b>
                  <span className="mt-1.5 block text-[11.5px] tracking-[.04em] text-[#bfeff5]">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-none rounded-[28px] border border-white/10 bg-white/[.06] p-4">
            <div className="overflow-hidden rounded-[22px] bg-white/10">
              <img className={cx("aspect-[4/5] w-full object-cover object-top", cardShadow)} src={doctor} alt="Dr. Preethi Mrinalini K" />
            </div>
            <div className={cx("relative mx-3 -mt-8 rounded-[16px] bg-white p-[16px_18px] text-center text-[#14241f]", cardShadow)}>
              <b className="block font-[family-name:var(--font-fraunces)] text-[16px]">Dr. Preethi Mrinalini K</b>
              <span className="text-[11.5px] tracking-[.04em] text-[#46554f]">Advanced laparoscopic & bariatric surgeon</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
