"use client";

import { useEffect, useMemo, useState } from "react";
import { Reveal } from "./Reveal";
import { reviews } from "./data";
import { cx, displayFont, eyebrow, h2, leadDark, wrap } from "./styles";

function GoogleReviewBadge() {
  return (
    <div className="mb-4 flex items-center gap-2.5 text-[12.5px] font-bold text-[#46554f]">
      <span className="flex size-8 items-center justify-center rounded-full bg-white text-[18px] shadow-[0_1px_2px_rgba(10,40,40,.08)]">
        <span className="text-[#4285f4]">G</span>
      </span>
      <span>Google review</span>
      <span className="tracking-[1.5px] text-[#fbbc04]" aria-label="5 star rating">★★★★★</span>
    </div>
  );
}

export function ReviewsServicesLocations() {
  const pageCount = Math.ceil(reviews.length / 2);
  const [reviewPage, setReviewPage] = useState(0);
  const visibleReviews = useMemo(
    () => [reviews[(reviewPage * 2) % reviews.length], reviews[(reviewPage * 2 + 1) % reviews.length]],
    [reviewPage],
  );

  useEffect(() => {
    const timer = window.setInterval(() => setReviewPage((page) => (page + 1) % pageCount), 6000);
    return () => window.clearInterval(timer);
  }, [pageCount]);

  return (
    <>
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fff_0%,#dff6f9_100%)] py-[64px] text-[#14241f] max-sm:py-[20px]" id="reviews">
        <button
          className="absolute left-3 top-1/2 z-[2] -translate-y-1/2 flex size-10 items-center justify-center rounded-full border border-[#d5eef2] bg-white shadow-[0_2px_8px_rgba(10,40,40,.10)] transition hover:border-[#50c0d0] hover:bg-[#50c0d0] hover:text-white text-[#3aaeba] lg:left-6 lg:size-11"
          type="button"
          aria-label="Previous review"
          onClick={() => setReviewPage((page) => (page - 1 + pageCount) % pageCount)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <button
          className="absolute right-3 top-1/2 z-[2] -translate-y-1/2 flex size-10 items-center justify-center rounded-full border border-[#d5eef2] bg-white shadow-[0_2px_8px_rgba(10,40,40,.10)] transition hover:border-[#50c0d0] hover:bg-[#50c0d0] hover:text-white text-[#3aaeba] lg:right-6 lg:size-11"
          type="button"
          aria-label="Next review"
          onClick={() => setReviewPage((page) => (page + 1) % pageCount)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
        </button>

        <div className={wrap}>
          <div className="mx-auto max-w-[760px] text-center">
            <span className={cx(eyebrow, "mx-auto flex w-fit justify-center before:hidden")}>Patient reviews</span>
            <h2 className={cx(h2, "mx-auto")}>Calm words from people who came in worried.</h2>
          </div>

          <div className="mt-10 grid gap-9 lg:grid-cols-2 lg:gap-12">
            {visibleReviews.map(([initials, name, role, text], i) => (
              <div className={cx("grid items-center gap-5 md:grid-cols-[104px_1fr]", i === 1 && "hidden md:grid")} key={name}>
                <div className="mx-auto flex size-[96px] items-center justify-center rounded-full bg-[#50c0d0] text-[21px] font-extrabold text-white shadow-[0_18px_50px_-24px_rgba(20,36,31,.35)]">
                  {initials}
                </div>
                <div>
                  <div className="max-sm:mt-6 flex items-center gap-4">
                    <span className={cx(displayFont, "text-[38px] leading-none text-[#50c0d0]")}>&ldquo;</span>
                  </div>
                  <GoogleReviewBadge />
                  <p className="max-w-[520px] text-[17px] font-semibold leading-[1.65] text-[#14241f]">{text}</p>
                  <div className="mt-5 max-sm:mt-3">
                    <b className="block text-[15px] font-bold tracking-[.02em] text-[#14241f]">{name}, {role}</b>
                  </div>
                  <div className="flex justify-end">
                    <span className={cx(displayFont, "text-[38px] leading-none text-[#50c0d0]")}>&rdquo;</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="hidden" aria-hidden="true">
        <div className={wrap}>
          <Reveal className="max-w-[760px]">
            <span className={cx(eyebrow, "text-[#bfeff5]")}>Patient reviews</span>
            <h2 className={cx(h2, "text-white")}>Calm words from people who came in worried.</h2>
            <p className={leadDark}>Real experiences from patients who wanted clarity before making a surgical decision.</p>
          </Reveal>
          <div className="mt-[42px] grid grid-cols-3 gap-4 max-[980px]:grid-cols-2 max-[760px]:grid-cols-1">
            {reviews.map(([initials, name, role, text]) => (
              <div className="reveal rounded-[18px] border border-white/10 bg-white/10 p-6" key={name}>
                <div className="text-[15px] tracking-[3px] text-[#50c0d0]">★★★★★</div>
                <p className="my-3.5 mb-[18px] text-[14.5px] text-[#e3f7fa]">{text}</p>
                <div className="flex items-center gap-3">
                  <span className="flex size-[42px] shrink-0 items-center justify-center rounded-full bg-[#50c0d0] text-sm font-extrabold text-white">{initials}</span>
                  <span>
                    <b className="block text-[14.5px] text-white">{name}</b>
                    <span className="text-[12.5px] text-[#b6d6db]">{role}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
