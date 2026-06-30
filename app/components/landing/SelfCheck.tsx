"use client";

import { useState } from "react";
import { Icon } from "./Icon";
import { symptoms } from "./data";
import { button, cx, eyebrowDark, h2, leadDark, sectionTight, wrap } from "./styles";

export function SelfCheck() {
  const [checked, setChecked] = useState<string[]>([]);
  const circ = 2 * Math.PI * 64;
  const count = checked.length;
  const msg =
    count === 0
      ? "Tick what applies above to see whether an assessment is worth your time."
      : count <= 2
        ? "Even one ongoing symptom is worth a proper check before it settles in."
        : count <= 4
          ? "That's more than most people ignore for months. A focused assessment will give you real answers."
          : "Several of these together really should not wait. Book a clear assessment with the surgeon.";

  return (
    <section className={sectionTight} id="selfcheck">
      <div className={wrap}>
        <div className="reveal overflow-hidden rounded-[28px] bg-[#14241f] text-[#f2fbfc]">
          <div className="grid grid-cols-2 max-[980px]:grid-cols-1">
            <aside className="flex flex-col justify-between bg-[linear-gradient(180deg,#349aa4,#2c8791)] p-[38px] max-[760px]:p-[26px]">
              <div>
                <span className={eyebrowDark}>Symptom self-check</span>
                <h2 className={cx(h2, "text-white")}>How many of these sound familiar?</h2>
                <p className={leadDark}>This is not a diagnosis. It simply helps you decide whether a focused assessment is worth booking.</p>
              </div>

              <div className="mt-8 rounded-[22px] border border-white/15 bg-white/10 p-5 text-center">
                <div className="relative mx-auto size-[148px]">
                  <svg className="-rotate-90" width="148" height="148" viewBox="0 0 148 148">
                    <circle className="stroke-white/15" cx="74" cy="74" r="64" fill="none" strokeWidth="12" />
                    <circle className="stroke-[#50c0d0] transition-[stroke-dashoffset] duration-500 [stroke-linecap:round]" cx="74" cy="74" r="64" fill="none" strokeWidth="12" strokeDasharray={circ.toFixed(1)} strokeDashoffset={(circ * (1 - count / symptoms.length)).toFixed(1)} />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <b className="font-[family-name:var(--font-fraunces)] text-[40px] font-semibold leading-none text-white">{count}</b>
                    <small className="mt-1 text-[11px] uppercase tracking-[.12em] text-[#bfeff5]">Selected</small>
                  </div>
                </div>
                <p className="my-6 min-h-[42px] text-[14.5px] text-[#e3f7fa]">{msg}</p>
                <a className={cx(button.primary, "w-full whitespace-nowrap max-[350px]:px-4 max-[350px]:py-3.5 max-[350px]:text-[14px]")} href="#booking">
                  Book my consultation
                </a>
              </div>
            </aside>

            <div className="p-[38px] max-[760px]:p-[24px]">
              <div className="grid gap-3">
                {symptoms.map((symptom, index) => (
                  <label className="group flex cursor-pointer items-center gap-4 rounded-2xl border border-white/10 bg-white/[.045] p-[15px_16px] transition hover:bg-white/[.08]" key={symptom}>
                    <input
                      className="peer absolute size-0 opacity-0"
                      type="checkbox"
                      checked={checked.includes(symptom)}
                      onChange={(event) => setChecked((items) => (event.target.checked ? [...items, symptom] : items.filter((item) => item !== symptom)))}
                    />
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-white/[.06] text-[13px] font-bold text-[#bfeff5] ring-1 ring-white/10">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="flex size-[26px] shrink-0 items-center justify-center rounded-[9px] border-2 border-white/35 transition group-hover:border-white/50 peer-checked:border-[#50c0d0] peer-checked:bg-[#50c0d0] peer-focus-visible:outline peer-focus-visible:outline-3 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[#50c0d0] [&>svg]:opacity-0 peer-checked:[&>svg]:opacity-100">
                      <Icon className="size-[13px] stroke-white stroke-[3] transition-opacity" name="check" />
                    </span>
                    <span className="text-[14.5px] font-medium leading-[1.45]">{symptom}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
