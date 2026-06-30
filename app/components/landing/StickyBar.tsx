"use client";

import { useEffect, useMemo, useState } from "react";
import { button, cx, wrap } from "./styles";

export function StickyBar() {
  const [show, setShow] = useState(false);
  const [seconds, setSeconds] = useState(15 * 60);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const timer = window.setInterval(() => setSeconds((s) => Math.max(0, s - 1)), 1000);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.clearInterval(timer);
    };
  }, []);

  const time = useMemo(() => `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`, [seconds]);

  return (
    <div className={cx("fixed inset-x-0 bottom-0 z-[70] border-t-2 border-[#50c0d0] bg-[#14241f] text-white transition-transform duration-300", show ? "translate-y-0" : "translate-y-[110%]")}>
      <div className={cx(wrap, "flex items-center justify-between gap-4 py-3")}>
        <div className="flex min-w-0 items-center gap-3.5"><span className="size-2 shrink-0 animate-pulse rounded-full bg-[#50c0d0]" /><b className="truncate whitespace-nowrap text-sm font-bold">Limited consultation slots <span className="max-[760px]:hidden">this week</span></b><span className="shrink-0 rounded-lg bg-[#50c0d0]/10 px-2.5 py-[3px] text-sm font-extrabold tabular-nums text-[#50c0d0]">{time}</span></div>
        <div className="flex shrink-0 gap-2.5"><a className={button.primary} href="#booking">Reserve my slot</a></div>
      </div>
    </div>
  );
}
