"use client";

import { useState } from "react";
import { Icon } from "./Icon";
import { videos } from "./data";
import { cx, displayFont, eyebrow, h2, lead, sectionTight, wrap } from "./styles";

const videoStories = [
  {
    src: videos[0],
    title: "Clinic guidance",
    description: "Watch short clinic videos to understand the doctor, the care approach and what patients can expect.",
    type: "video/mp4",
  },
  {
    src: videos[1],
    title: "Meet the surgeon",
    description: "Watch short clinic videos to understand the doctor, the care approach and what patients can expect.",
    type: "video/mp4",
  },
  {
    src: videos[2],
    title: "Patient clarity",
    description: "Watch short clinic videos to understand the doctor, the care approach and what patients can expect.",
    type: "video/mp4",
  },
  // {
  //   src: "https://ik.imagekit.io/tpucbav8z/marinias1_squished.mp4",
  //   title: "Marinas care",
  //   description: "A closer look at the clinic experience and the support patients receive through treatment.",
  //   type: "video/mp4",
  // },
  // {
  //   src: "https://ik.imagekit.io/tpucbav8z/output%201hernia_squished.mp4",
  //   title: "Hernia care",
  //   description: "See how focused consultation and treatment planning help patients move with more confidence.",
  //   type: "video/mp4",
  // },
];

export function VideoStories() {
  const [active, setActive] = useState(1);
  const activeVideo = videoStories[active];

  return (
    <section className={cx(sectionTight, "overflow-hidden bg-[radial-gradient(90%_90%_at_85%_10%,rgba(80,192,208,.28)_0%,rgba(80,192,208,0)_58%),linear-gradient(160deg,#14241f_0%,#2c8791_100%)] text-[#f2fbfc]")}>
      <div className={wrap}>
        <div className="mx-auto max-w-[760px] text-center">
          <span className={cx(eyebrow, "mx-auto flex w-fit justify-center text-[#bfeff5] before:hidden")}>What Doctor Say</span>
          <h2 className={cx(h2, "mx-auto text-white")}>Stories From Those Who Chose Change</h2>
          <p className={cx(lead, "mx-auto text-[#c9e7eb]")}>Watch short clinic videos to understand the doctor, the care approach and what patients can expect.</p>
        </div>

        <div className="mx-auto mt-[46px] grid max-w-[1080px] items-stretch gap-5 lg:grid-cols-[minmax(0,520px)_440px]">
          <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[.06] p-3 shadow-[0_18px_50px_-20px_rgba(10,40,40,.28)]">
            <div className="absolute left-6 top-6 z-[2] rounded-full bg-[#14241f]/80 px-4 py-2 text-[12px] font-bold uppercase tracking-[.1em] text-[#f2fbfc] backdrop-blur-md">
              {activeVideo.title}
            </div>
            <video className="block aspect-[4/5] w-full rounded-[24px] bg-[#1e3f44] object-cover" key={activeVideo.src} controls playsInline preload="metadata">
              <source src={activeVideo.src} type={activeVideo.type} />
            </video>
          </div>

          <div className="grid gap-3 rounded-[30px] border border-white/10 bg-white/[.06] p-4">
            {videoStories.map((video, index) => (
              <button
                className={cx(
                  "group grid cursor-pointer grid-cols-[86px_1fr] items-center gap-4 rounded-[18px] border p-2.5 text-left transition",
                  active === index ? "border-[#50c0d0] bg-white/10" : "border-white/10 bg-white/[.035] hover:border-white/20 hover:bg-white/[.07]",
                )}
                key={video.src}
                type="button"
                onClick={() => setActive(index)}
              >
                <span className="relative overflow-hidden rounded-[14px] bg-[#1e3f44]">
                  <video className="aspect-[4/3] w-full object-cover" muted playsInline preload="metadata">
                    <source src={video.src} type={video.type} />
                  </video>
                  <span className="absolute inset-0 grid place-items-center bg-[#14241f]/35 text-white">
                    <span className="flex size-8 items-center justify-center rounded-full bg-[#50c0d0]">
                      <Icon className="size-3.5 stroke-white stroke-[3]" name="arrow" />
                    </span>
                  </span>
                </span>
                <span>
                  <span className={cx(displayFont, "block text-[18px] text-white")}>{video.title}</span>
                  <span className="mt-1 block text-[13px] leading-[1.45] text-[#c9e7eb]">{video.description}</span>
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-8 flex max-w-[760px] flex-col items-center gap-4 text-center">
          <p className="m-0 text-[15px] leading-[1.65] text-[#c9e7eb]">
            Want to watch the full videos and more patient education clips? Follow Dr. Preethi Mrinalini on Instagram.
          </p>
          <a
            className="inline-flex items-center justify-center gap-2.5 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-bold text-white transition hover:border-[#50c0d0] hover:bg-white/15"
            href="https://www.instagram.com/dr.preethimrinalini?igsh=YWkzdmlsc3l0aWF5"
            target="_blank"
            rel="noopener"
          >
            <Icon className="size-4 fill-current" name="instagram" />
            Watch full videos on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
