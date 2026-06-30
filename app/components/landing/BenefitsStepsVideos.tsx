"use client";

import { useEffect, useRef, useState } from "react";
import { Icon, IconName } from "./Icon";
import { Reveal } from "./Reveal";
import { benefits, videos } from "./data";
import { cx, displayFont, eyebrow, h2, lead, section, wrap } from "./styles";

function Carousel({ children }: { children: React.ReactNode[] }) {
  const [active, setActive] = useState(0);
  const count = children.length;
  const goPrev = () => setActive((i) => (i - 1 + count) % count);
  const goNext = () => setActive((i) => (i + 1) % count);

  useEffect(() => {
    const timer = setInterval(() => setActive((i) => (i + 1) % count), 7000);
    return () => clearInterval(timer);
  }, [count]);

  return (
    <div className="mt-[42px] md:hidden">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {children.map((child, i) => (
            <div className="w-full shrink-0 px-1" key={i}>{child}</div>
          ))}
        </div>
      </div>
      <div className="mt-5 flex justify-center gap-3">
        <button
          type="button"
          aria-label="Previous slide"
          className="flex size-10 items-center justify-center rounded-full border border-[#d5eef2] bg-white text-[#3aaeba] shadow-[0_1px_2px_rgba(10,40,40,.06)] transition hover:border-[#50c0d0] hover:bg-[#effbfc]"
          onClick={goPrev}
        >
          <Icon className="size-4 rotate-180 stroke-current" name="arrow" />
        </button>
        <button
          type="button"
          aria-label="Next slide"
          className="flex size-10 items-center justify-center rounded-full border border-[#d5eef2] bg-white text-[#3aaeba] shadow-[0_1px_2px_rgba(10,40,40,.06)] transition hover:border-[#50c0d0] hover:bg-[#effbfc]"
          onClick={goNext}
        >
          <Icon className="size-4 stroke-current" name="arrow" />
        </button>
      </div>
    </div>
  );
}

export function BenefitsStepsVideos() {
  const rowRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <section className={section}>
        <div className={wrap}>
          <Reveal className="max-w-[760px]">
            <span className={eyebrow}>Why patients choose us</span>
            <h2 className={h2}>Modern surgical care with human explanations.</h2>
            <p className={lead}>Every part of the consultation is built to reduce confusion and help you understand your options.</p>
          </Reveal>
          {/* Desktop grid */}
          <div className="mt-[42px] hidden grid-cols-3 gap-4 md:grid max-[980px]:grid-cols-2">
            {benefits.map(([icon, title, text]) => (
              <div className="reveal rounded-[18px] border border-[#d5eef2] bg-white p-[26px] transition hover:-translate-y-[3px] hover:shadow-[0_18px_50px_-20px_rgba(10,40,40,.28)]" key={title}>
                <span className="mb-4 flex size-12 items-center justify-center rounded-xl bg-[#dff6f9]">
                  <Icon className="size-6 stroke-[#3aaeba] stroke-[1.6]" name={icon as IconName} />
                </span>
                <h3 className={cx(displayFont, "mb-[7px] text-[19px]")}>{title}</h3>
                <p className="m-0 text-sm text-[#46554f]">{text}</p>
              </div>
            ))}
          </div>
          {/* Mobile carousel */}
          <Carousel>
            {benefits.map(([icon, title, text]) => (
              <div className="rounded-[18px] border border-[#d5eef2] bg-white p-[26px]" key={title}>
                <span className="mb-4 flex size-12 items-center justify-center rounded-xl bg-[#dff6f9]">
                  <Icon className="size-6 stroke-[#3aaeba] stroke-[1.6]" name={icon as IconName} />
                </span>
                <h3 className={cx(displayFont, "mb-[7px] text-[19px]")}>{title}</h3>
                <p className="m-0 text-sm text-[#46554f]">{text}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      <section className={cx(section, "bg-[#effbfc]")}>
        <div className={wrap}>
          <Reveal className="max-w-[760px]">
            <span className={eyebrow}>How it works</span>
            <h2 className={h2}>Three simple steps to stop the guessing.</h2>
            <p className={lead}>From first contact to your consultation, the process stays simple, focused and clear.</p>
          </Reveal>
          {/* Desktop grid */}
          <div className="mt-[42px] hidden grid-cols-3 gap-[18px] md:grid max-[980px]:grid-cols-2">
            {[
              ["1", "Share what is bothering you", "Submit the form or message us on WhatsApp."],
              ["2", "Bring reports if you have them", "Scans, prescriptions or old advice are reviewed together."],
              ["3", "Leave with a clear plan", "You understand the issue, urgency and options."],
            ].map(([n, title, text]) => (
              <div className="reveal relative rounded-[18px] border border-[#d5eef2] bg-white p-[30px_26px]" key={n}>
                <span className="mb-[18px] flex size-[38px] items-center justify-center rounded-full bg-[#50c0d0] font-[family-name:var(--font-fraunces)] text-[15px] font-bold text-white">{n}</span>
                <h3 className={cx(displayFont, "mb-2 text-xl")}>{title}</h3>
                <p className="m-0 text-[14.5px] text-[#46554f]">{text}</p>
                <span className="absolute right-[-26px] top-1/2 z-[2] -translate-y-1/2 text-[#d5eef2] last:hidden max-[980px]:hidden">→</span>
              </div>
            ))}
          </div>
          {/* Mobile carousel */}
          <Carousel>
            {[
              ["1", "Share what is bothering you", "Submit the form or message us on WhatsApp."],
              ["2", "Bring reports if you have them", "Scans, prescriptions or old advice are reviewed together."],
              ["3", "Leave with a clear plan", "You understand the issue, urgency and options."],
            ].map(([n, title, text]) => (
              <div className="relative rounded-[18px] border border-[#d5eef2] bg-white p-[30px_26px]" key={n}>
                <span className="mb-[18px] flex size-[38px] items-center justify-center rounded-full bg-[#50c0d0] font-[family-name:var(--font-fraunces)] text-[15px] font-bold text-white">{n}</span>
                <h3 className={cx(displayFont, "mb-2 text-xl")}>{title}</h3>
                <p className="m-0 text-[14.5px] text-[#46554f]">{text}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      <section className="hidden" aria-hidden="true">
        <div className={wrap}>
          <div className="-mx-6 mt-0 flex snap-x gap-[18px] overflow-x-auto px-6 pb-2 pt-[42px] [scrollbar-color:#d5eef2_transparent]" ref={rowRef}>
            {videos.map((src) => (
              <div className="shrink-0 basis-[280px] snap-start overflow-hidden rounded-[20px] border border-[#d5eef2] bg-[#14241f] shadow-[0_1px_2px_rgba(10,40,40,.06),0_6px_18px_rgba(10,40,40,.05)]" key={src}>
                <video className="block aspect-[9/13] w-full bg-[#1e3f44] object-cover" controls playsInline preload="metadata">
                  <source src={src} type="video/mp4" />
                </video>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
