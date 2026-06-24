"use client";

import { useState } from "react";
import { Icon } from "./Icon";
import { videos } from "./data";
import { cx, displayFont, eyebrow, h2, lead, sectionTight, wrap } from "./styles";

const videoTitles = ["Clinic guidance", "Meet the surgeon", "Patient clarity"];

export function VideoStories() {
  const [active, setActive] = useState(1);
  const activeVideo = videos[active];

  return (
    <section className={cx(sectionTight, "overflow-hidden bg-[radial-gradient(90%_90%_at_85%_10%,rgba(80,192,208,.28)_0%,rgba(80,192,208,0)_58%),linear-gradient(160deg,#14241f_0%,#2c8791_100%)] text-[#f2fbfc]")}>
      <div className={wrap}>
        <div className="mx-auto max-w-[760px] text-center">
          <span className={cx(eyebrow, "mx-auto flex w-fit justify-center text-[#bfeff5] before:hidden")}>Patient stories</span>
          <h2 className={cx(h2, "mx-auto text-white")}>Hear from the clinic.</h2>
          <p className={cx(lead, "mx-auto text-[#c9e7eb]")}>Watch short clinic videos to understand the doctor, the care approach and what patients can expect.</p>
        </div>

        <div className="mx-auto mt-[46px] grid max-w-[1080px] items-stretch gap-5 lg:grid-cols-[minmax(0,520px)_440px]">
          <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[.06] p-3 shadow-[0_18px_50px_-20px_rgba(10,40,40,.28)]">
            <div className="absolute left-6 top-6 z-[2] rounded-full bg-[#14241f]/80 px-4 py-2 text-[12px] font-bold uppercase tracking-[.1em] text-[#f2fbfc] backdrop-blur-md">
              {videoTitles[active]}
            </div>
            <video className="block aspect-[4/5] w-full rounded-[24px] bg-[#1e3f44] object-cover" key={activeVideo} controls playsInline preload="metadata">
              <source src={activeVideo} type="video/mp4" />
            </video>
          </div>

          <div className="grid gap-3 rounded-[30px] border border-white/10 bg-white/[.06] p-4">
            {videos.map((src, index) => (
              <button
                className={cx(
                  "group grid cursor-pointer grid-cols-[86px_1fr] items-center gap-4 rounded-[18px] border p-2.5 text-left transition",
                  active === index ? "border-[#50c0d0] bg-white/10" : "border-white/10 bg-white/[.035] hover:border-white/20 hover:bg-white/[.07]",
                )}
                key={src}
                type="button"
                onClick={() => setActive(index)}
              >
                <span className="relative overflow-hidden rounded-[14px] bg-[#1e3f44]">
                  <video className="aspect-[4/3] w-full object-cover" muted playsInline preload="metadata">
                    <source src={src} type="video/mp4" />
                  </video>
                  <span className="absolute inset-0 grid place-items-center bg-[#14241f]/35 text-white">
                    <span className="flex size-8 items-center justify-center rounded-full bg-[#50c0d0]">
                      <Icon className="size-3.5 stroke-white stroke-[3]" name="arrow" />
                    </span>
                  </span>
                </span>
                <span>
                  <span className={cx(displayFont, "block text-[18px] text-white")}>{videoTitles[index]}</span>
                  <span className="mt-1 block text-[13px] leading-[1.45] text-[#c9e7eb]">Watch short clinic videos to understand the doctor, the care approach and what patients can expect.</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
