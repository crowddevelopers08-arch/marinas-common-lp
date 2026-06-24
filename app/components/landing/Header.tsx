"use client";

import { useState } from "react";
import { Icon } from "./Icon";
import { logo } from "./data";
import { button, cx, wrap } from "./styles";

export function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Conditions", "#conditions"],
    ["Self-check", "#selfcheck"],
    ["Your surgeon", "#surgeon"],
    ["Reviews", "#reviews"],
    ["Visit", "#locations"],
  ];

  return (
    <>
      <div className="relative bg-[#14241f] text-center text-[13.5px] text-[#f2fbfc]" id="top">
        <div className={cx(wrap, "flex min-h-10 items-center justify-center gap-3 py-2.5 max-[760px]:px-4 max-[760px]:text-xs")}>
          <span className="size-[7px] shrink-0 animate-pulse rounded-full bg-[#50c0d0]" />
          <span>
            Focused consultations for <b>gastro, laparoscopic & bariatric surgery</b> in Nungambakkam
          </span>
        </div>
      </div>
      <header className="sticky top-0 z-[60] border-b border-[#d5eef2] bg-white/90 backdrop-blur-md">
        <div className={cx(wrap, "relative flex min-h-[74px] items-center justify-between gap-5 py-3 max-[760px]:min-h-[68px] max-[760px]:gap-3")}>
          <a className="group flex min-w-0 items-center gap-3.5" href="#top" aria-label="Marina's Clinic home">
            <span className="flex size-[80px] items-center justify-center bg-white shadow-[0_8px_22px_-18px_rgba(10,40,40,.28)] transition group-hover:border-[#3aaeba] max-[760px]:size-[60px]">
              <img className="h-[78px] w-auto max-[760px]:h-[59px]" src={logo} alt="Marina's Clinic logo" />
            </span>
          </a>
          <nav
            className={cx(
              "flex items-center gap-1.5 rounded-full border border-[#d5eef2] bg-white/80 p-1.5 shadow-[0_1px_2px_rgba(10,40,40,.04)] max-[760px]:absolute max-[760px]:left-6 max-[760px]:right-6 max-[760px]:top-[calc(100%+1px)] max-[760px]:rounded-2xl max-[760px]:p-2 max-[760px]:shadow-[0_18px_50px_-20px_rgba(10,40,40,.28)]",
              open ? "max-[760px]:flex max-[760px]:flex-col max-[760px]:items-stretch max-[760px]:gap-1" : "max-[760px]:hidden",
            )}
          >
            {links.map(([label, href]) => (
              <a className="rounded-full px-3.5 py-2 text-[14px] font-bold text-[#46554f] transition hover:bg-[#effbfc] hover:text-[#3aaeba] max-[760px]:rounded-xl max-[760px]:px-4 max-[760px]:py-3" key={href} href={href} onClick={() => setOpen(false)}>
                {label}
              </a>
            ))}
          </nav>
          <div className="flex shrink-0 items-center gap-3 max-[760px]:gap-2">
            <a className="flex items-center gap-2 rounded-full px-2.5 py-2 text-[14.5px] font-bold text-[#3aaeba] transition hover:bg-[#effbfc] max-[980px]:hidden" href="tel:+919884000171">
              <span className="flex size-8 items-center justify-center rounded-full bg-[#effbfc] text-[#3aaeba]">
                <Icon className="size-4" name="phone" />
              </span>
              +91 98840 00171
            </a>
            <a className={cx(button.primary, "px-5 py-3.5 text-[14.5px] max-[420px]:hidden")} href="#book">
              Book consultation
            </a>
            <button className="hidden size-11 cursor-pointer items-center justify-center rounded-full border border-[#d5eef2] bg-white text-[#14241f] transition hover:border-[#3aaeba] hover:text-[#3aaeba] max-[760px]:flex" type="button" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(!open)}>
              <span
                className={cx(
                  "relative block h-0.5 w-5 bg-current transition before:absolute before:left-0 before:h-0.5 before:w-5 before:bg-current before:transition before:content-[''] after:absolute after:left-0 after:h-0.5 after:w-5 after:bg-current after:transition after:content-['']",
                  open ? "rotate-45 before:top-0 before:rotate-90 after:top-0 after:opacity-0" : "before:top-[-6px] after:top-1.5",
                )}
              />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
