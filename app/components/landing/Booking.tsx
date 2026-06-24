"use client";

import { FormEvent, useState } from "react";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { conditions } from "./data";
import { button, cardShadow, cx, displayFont, eyebrowDark, leadDark, section, wrap } from "./styles";

export function Booking({ selectedCondition }: { selectedCondition: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [invalid, setInvalid] = useState<string[]>([]);
  const [phone, setPhone] = useState("");
  const [condition, setCondition] = useState(selectedCondition);
  const [waHref, setWaHref] = useState("https://wa.me/919884000171");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const cond = String(data.get("condition") || "").trim();
    const slot = String(data.get("slot") || "").trim();
    const note = String(data.get("msg") || "").trim();
    const bad = [name.length < 2 && "name", !/^[6-9]\d{9}$/.test(phone) && "phone", !cond && "condition"].filter(Boolean) as string[];
    setInvalid(bad);
    if (bad.length) return;

    const text = `New consultation request\n\nName: ${name}\nPhone: ${phone}\nCondition: ${cond}\nPreferred: ${slot || "Either"}${note ? `\nNote: ${note}` : ""}`;
    setWaHref(`https://wa.me/919884000171?text=${encodeURIComponent(text)}`);
    setSubmitted(true);
  }

  const fieldClass = (name: string) => invalid.includes(name);
  const control =
    "w-full rounded-[11px] border-[1.5px] border-[#d5eef2] bg-white px-[15px] py-[13px] font-[inherit] text-[15px] text-[#14241f] transition focus:border-[#3aaeba] focus:outline-none focus:ring-4 focus:ring-[#3aaeba]/10";

  return (
    <section className={cx(section, "relative overflow-hidden bg-[#14241f] text-[#f2fbfc] after:absolute after:right-[-150px] after:top-[-120px] after:size-[420px] after:rounded-full after:border after:border-white/10 after:content-['']")} id="book">
      <div className={cx(wrap, "relative grid grid-cols-2 gap-[46px] max-[980px]:grid-cols-1 max-[980px]:gap-9")}>
        <Reveal>
          <span className={eyebrowDark}>Book a consultation</span>
          <h2 className={cx(displayFont, "mt-3.5 text-[clamp(28px,3.6vw,42px)] text-white")}>Reserve a focused consultation with Dr. Preethi.</h2>
          <p className={leadDark}>Share a few details and the team will call you to confirm the right slot and location.</p>
          <ul className="mt-[30px] grid gap-[11px]">
            {["Symptom and history review", "Reports and scan review", "Clear explanation of options", "No-pressure surgical guidance"].map((item) => (
              <li className="flex list-none items-start gap-3 text-[15px] text-[#e3f7fa]" key={item}><span className="mt-px flex size-[22px] shrink-0 items-center justify-center rounded-full bg-[#bfeff5]/20 text-[#bfeff5]"><Icon className="size-3 stroke-current stroke-[3]" name="check" /></span>{item}</li>
            ))}
          </ul>
          <div className="mt-7 rounded-2xl border border-white/10 bg-white/[.05] p-[20px_22px]">
            <h4 className="mb-3 text-[13px] font-bold uppercase tracking-[.1em] text-[#bfeff5]">Best for people with</h4>
            <ul className="m-0 grid gap-2 p-0">
              <li className="flex list-none items-start gap-[9px] text-sm text-[#d7f0f3] before:mt-2 before:size-[7px] before:shrink-0 before:rounded-full before:bg-[#50c0d0] before:content-['']">Recurring pain, swelling, bleeding or reflux</li>
              <li className="flex list-none items-start gap-[9px] text-sm text-[#d7f0f3] before:mt-2 before:size-[7px] before:shrink-0 before:rounded-full before:bg-[#50c0d0] before:content-['']">Scan-confirmed gallstones, hernia or appendix concerns</li>
              <li className="flex list-none items-start gap-[9px] text-sm text-[#d7f0f3] before:mt-2 before:size-[7px] before:shrink-0 before:rounded-full before:bg-[#50c0d0] before:content-['']">Weight-related health problems needing specialist guidance</li>
            </ul>
          </div>
        </Reveal>
        <Reveal>
          <div className={cx("rounded-3xl bg-white p-[34px] text-[#14241f] max-[760px]:p-[26px_22px]", cardShadow)}>
            {!submitted ? (
              <div>
                <h3 className={cx(displayFont, "mb-1 text-[23px]")}>Request your slot</h3>
                <p className="mb-[22px] text-[13.5px] text-[#46554f]">Takes less than a minute.</p>
                <form onSubmit={submit} noValidate>
                  <div className="mb-[15px]">
                    <label className="mb-[7px] block text-[13px] font-bold text-[#14241f]" htmlFor="name">Full name</label>
                    <input className={cx(control, fieldClass("name") && "border-[#50c0d0]")} type="text" id="name" name="name" placeholder="Your name" autoComplete="name" />
                    {fieldClass("name") && <div className="mt-1.5 text-[12.5px] font-semibold text-[#36aebb]">Please enter your name.</div>}
                  </div>
                  <div className="mb-[15px]">
                    <label className="mb-[7px] block text-[13px] font-bold text-[#14241f]" htmlFor="phone">Phone number</label>
                    <input className={cx(control, fieldClass("phone") && "border-[#50c0d0]")} type="tel" id="phone" name="phone" placeholder="10-digit mobile number" autoComplete="tel" inputMode="numeric" maxLength={10} value={phone} onChange={(event) => setPhone(event.target.value.replace(/\D/g, "").slice(0, 10))} />
                    {fieldClass("phone") && <div className="mt-1.5 text-[12.5px] font-semibold text-[#36aebb]">Please enter a valid 10-digit number.</div>}
                  </div>
                  <div className="mb-[15px]">
                    <label className="mb-[7px] block text-[13px] font-bold text-[#14241f]" htmlFor="condition">What&apos;s bothering you?</label>
                    <select className={cx(control, fieldClass("condition") && "border-[#50c0d0]")} id="condition" name="condition" value={condition} onChange={(event) => setCondition(event.target.value)}>
                      <option value="">Select a condition</option>
                      {conditions.map(([title]) => <option key={title}>{title}</option>)}
                      <option>Not sure - need guidance</option>
                    </select>
                    {fieldClass("condition") && <div className="mt-1.5 text-[12.5px] font-semibold text-[#36aebb]">Please choose what&apos;s bothering you.</div>}
                  </div>
                  <div className="mb-[15px]">
                    <label className="mb-[7px] block text-[13px] font-bold text-[#14241f]" htmlFor="slot">Preferred time</label>
                    <select className={control} id="slot" name="slot" defaultValue="">
                      <option value="">Choose a preference</option>
                      <option>Morning - Apollo, Greams Road (10 AM - 2 PM)</option>
                      <option>Evening - Marina&apos;s Clinic, Nungambakkam (5 PM - 8 PM)</option>
                      <option>Either works</option>
                    </select>
                  </div>
                  <div className="mb-[15px]">
                    <label className="mb-[7px] block text-[13px] font-bold text-[#14241f]" htmlFor="msg">Anything you&apos;d like to add (optional)</label>
                    <textarea className={cx(control, "min-h-[78px] resize-y")} id="msg" name="msg" placeholder="Symptoms, how long, any reports you have..." />
                  </div>
                  <button type="submit" className={cx(button.primary, button.block, button.lg)}>Request my consultation</button>
                  <p className="mt-3.5 text-center text-xs text-[#46554f]">Your details are kept private and used only to contact you about your appointment.</p>
                </form>
                <div className="my-[18px] flex items-center gap-3 text-[12.5px] font-semibold text-[#46554f] before:h-px before:flex-1 before:bg-[#d5eef2] before:content-[''] after:h-px after:flex-1 after:bg-[#d5eef2] after:content-['']">or reach us directly</div>
                <div className="grid grid-cols-2 gap-2.5 max-[760px]:grid-cols-1">
                  <a className="flex items-center justify-center gap-[9px] rounded-[11px] border-[1.5px] border-[#d5eef2] bg-[#effbfc] p-[13px] text-sm font-bold text-[#3aaeba] transition hover:border-[#50c0d0] hover:text-[#2c8791]" href="https://wa.me/919884000171?text=Hi%2C%20I%27d%20like%20to%20book%20a%20consultation%20at%20Marina%27s%20Clinic." target="_blank" rel="noopener"><Icon className="size-[17px]" name="whatsapp" /> WhatsApp us</a>
                  <a className="flex items-center justify-center gap-[9px] rounded-[11px] border-[1.5px] border-[#d5eef2] p-[13px] text-sm font-bold text-[#14241f] transition hover:border-[#3aaeba] hover:text-[#3aaeba]" href="tel:+919884000171"><Icon className="size-4" name="phone" /> Call now</a>
                </div>
              </div>
            ) : (
              <div className="px-2.5  py-[30px] text-center">
                <div className="mx-auto mb-[18px] flex size-16 items-center justify-center rounded-full bg-[#dff6f9] text-[#3aaeba]"><Icon className="size-[30px] stroke-current stroke-[3]" name="check" /></div>
                <h3 className={cx(displayFont, "mb-2 text-[23px]")}>Request received</h3>
                <p className="mb-5 text-sm text-[#46554f]">Thank you. Our team will call you shortly to confirm your slot. Prefer to talk now? Message us on WhatsApp.</p>
                <a className={button.primary} href={waHref} target="_blank" rel="noopener">Continue on WhatsApp</a>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
