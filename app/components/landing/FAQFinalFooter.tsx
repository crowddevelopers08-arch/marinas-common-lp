"use client";

import { useState } from "react";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { faqs, logo } from "./data";
import { button, cx, eyebrow, h2, lead, section, wrap } from "./styles";

export function FAQFinalFooter() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <section className={section}>
        <div className={wrap}>
          <Reveal className="mx-auto max-w-[640px] text-center">
            <span className={eyebrow}>Before you book</span>
            <h2 className={cx(h2, "mx-auto")}>Common questions, answered.</h2>
            <p className={cx(lead, "mx-auto")}>Get clear answers about consultation, reports, surgery decisions and what to expect next.</p>
          </Reveal>
          <div className="mx-auto mt-[42px] max-w-[820px]">
            {faqs.map(([question, answer], index) => (
              <div className={cx("mb-3 overflow-hidden rounded-[14px] border bg-white", open === index ? "border-[#3aaeba] shadow-[0_1px_2px_rgba(10,40,40,.06),0_6px_18px_rgba(10,40,40,.05)]" : "border-[#d5eef2]")} key={question}>
                <button className="flex w-full cursor-pointer items-center justify-between gap-4 bg-transparent p-[20px_22px] text-left font-[family-name:var(--font-fraunces)] text-[16.5px] font-semibold text-[#14241f]" type="button" aria-expanded={open === index} onClick={() => setOpen(open === index ? null : index)}>
                  {question}<span className={cx("flex size-[30px] shrink-0 items-center justify-center rounded-full transition", open === index ? "rotate-45 bg-[#3aaeba] text-white" : "bg-[#effbfc] text-[#3aaeba]")}><Icon className="size-3.5 stroke-current stroke-[2.4]" name="check" /></span>
                </button>
                <div className="overflow-hidden transition-[max-height] duration-300" style={{ maxHeight: open === index ? 180 : 0 }}>
                  <p className="m-0 px-[22px] pb-[22px] text-[14.5px] text-[#46554f]">{answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className={cx(section, "bg-[linear-gradient(160deg,#50c0d0_0%,#36aebb_100%)] text-center text-white")}>
        <Reveal className={wrap}>
          <span className={cx(eyebrow, "justify-center text-white")}>Take the first step</span>
          <h2 className="mx-auto mt-4 max-w-[20ch] font-[family-name:var(--font-fraunces)] text-[clamp(28px,4vw,46px)] font-semibold leading-[1.06]">Ignoring the symptoms will not give you answers. A proper evaluation will.</h2>
          <p className="mx-auto mt-[18px] max-w-[50ch] text-[17px] text-[#e2f7fa]">Reserve your consultation with Dr. Preethi Mrinalini and finally understand your condition before it affects your quality of life.</p>
          <a className={cx(button.ink, button.lg, "mt-[30px]")} href="#booking">Book my consultation</a>
          <div className="mt-6 flex flex-wrap justify-center gap-2.5">
            {["Limited slots each week", "Reports reviewed personally", "No-pressure guidance"].map((chip) => <span className="rounded-full border border-white/25 bg-white/15 px-4 py-2 text-[13px] font-semibold" key={chip}>{chip}</span>)}
          </div>
        </Reveal>
      </section>
      <footer className="bg-[#14241f] py-16 pb-[110px] text-[#c8dde1]">
        <div className={wrap}>
          <div className="grid grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-9 max-[980px]:grid-cols-2 max-[760px]:grid-cols-1">
            <div>
              <img className="mb-4 h-12 w-auto" src={logo} alt="Marina's Clinic" />
              <p className="max-w-[30ch] text-[13.5px] text-[#9db6ba]">Gastro, laparoscopic and bariatric surgical care in Nungambakkam, Chennai, led by Dr. Preethi Mrinalini.</p>
              <div className="mt-[18px] flex gap-2.5">
                <a className="flex size-10 items-center justify-center rounded-full border border-white/15 transition hover:border-[#50c0d0] hover:bg-[#50c0d0]/15" href="https://instagram.com/dr.preethimrinalini" target="_blank" rel="noopener" aria-label="Instagram"><Icon className="size-[18px] fill-[#d7f0f3]" name="instagram" /></a>
                <a className="flex size-10 items-center justify-center rounded-full border border-white/15 transition hover:border-[#50c0d0] hover:bg-[#50c0d0]/15" href="https://www.facebook.com/100066446485702" target="_blank" rel="noopener" aria-label="Facebook"><Icon className="size-[18px] fill-[#d7f0f3]" name="facebook" /></a>
                <a className="flex size-10 items-center justify-center rounded-full border border-white/15 transition hover:border-[#50c0d0] hover:bg-[#50c0d0]/15" href="https://youtube.com/@dr.preethimrinalini" target="_blank" rel="noopener" aria-label="YouTube"><Icon className="size-[18px] fill-[#d7f0f3]" name="youtube" /></a>
              </div>
            </div>
            <FooterLinks title="Conditions" links={["Hernia & Diastasis Recti", "Bariatric / Weight loss", "Gallbladder Stones", "Acid Reflux / GERD", "Piles / Fissure / Fistula"]} />
            <FooterLinks title="Clinic" links={["Your surgeon", "Patient reviews", "Symptom self-check", "Locations & hours", "Book consultation"]} />
            <div>
              <h5 className="mb-4 text-[12.5px] font-bold uppercase tracking-[.12em] text-white">Reach us</h5>
              <ul className="m-0 grid list-none gap-2.5 p-0">
                <li className="mb-3 flex items-start gap-2.5 text-sm text-[#c8dde1]"><Icon className="mt-[3px] size-[17px] shrink-0 stroke-[#bfeff5] stroke-[1.7]" name="map" /><span>40 & 54, Josier St, Nungambakkam, Chennai 600034</span></li>
                <li className="mb-3 flex items-start gap-2.5 text-sm text-[#c8dde1]"><Icon className="mt-[3px] size-[17px] shrink-0 stroke-[#bfeff5] stroke-[1.7]" name="phone" /><a className="hover:text-white" href="tel:+919884000171">+91 98840 00171</a></li>
                <li className="mb-3 flex items-start gap-2.5 text-sm text-[#c8dde1]"><Icon className="mt-[3px] size-[17px] shrink-0 stroke-[#bfeff5] stroke-[1.7]" name="mail" /><span>Mon - Sat, 5 PM - 8 PM (clinic)</span></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-white/10 pt-[26px] text-xs leading-[1.7] text-[#8faab0]">
            <p className="mb-3.5"><b>Medical disclaimer:</b> This page is for general awareness and to help you book a consultation. It is not medical advice, diagnosis or treatment, and the symptom self-check is not a diagnostic tool.</p>
            <div className="flex flex-wrap justify-between gap-3"><span>&copy; 2026 Marina&apos;s Clinic - Gastro & General Surgery. All rights reserved.</span><span>Nungambakkam, Chennai - Tamil Nadu</span></div>
          </div>
        </div>
      </footer>
    </>
  );
}

function FooterLinks({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h5 className="mb-4 text-[12.5px] font-bold uppercase tracking-[.12em] text-white">{title}</h5>
      <ul className="m-0 grid list-none gap-2.5 p-0">
        {links.map((link) => <li key={link}><a className="text-sm text-[#c8dde1] hover:text-white" href="#conditions">{link}</a></li>)}
      </ul>
    </div>
  );
}
