"use client";

import { useEffect, useMemo, useState } from "react";
import { Reveal } from "./Reveal";
import { reviews } from "./data";
import { cx, displayFont, eyebrow, h2, leadDark, wrap } from "./styles";

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
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fff_0%,#dff6f9_100%)] max-sm:py-[20px] py-[92px] text-[#14241f]" id="reviews">
        <button className="absolute left-8 top-1/2 hidden -translate-y-1/2 text-[52px] font-light leading-none text-[#14241f]/10 transition hover:text-[#14241f]/20 lg:block" type="button" aria-label="Previous review" onClick={() => setReviewPage((page) => (page - 1 + pageCount) % pageCount)}>
          &lsaquo;
        </button>
        <button className="absolute right-8 top-1/2 hidden -translate-y-1/2 text-[52px] font-light leading-none text-[#14241f]/10 transition hover:text-[#14241f]/20 lg:block" type="button" aria-label="Next review" onClick={() => setReviewPage((page) => (page + 1) % pageCount)}>
          &rsaquo;
        </button>

        <div className={wrap}>
          <div className="mx-auto max-w-[760px] text-center">
            <span className={cx(eyebrow, "mx-auto flex w-fit justify-center before:hidden")}>Patient reviews</span>
            <h2 className={cx(h2, "mx-auto")}>Calm words from people who came in worried.</h2>
          </div>

          <div className="mt-[70px] grid gap-14 lg:grid-cols-2 lg:gap-20">
            {visibleReviews.map(([initials, name, role, text], i) => (
              <div className={cx("grid items-center gap-7 md:grid-cols-[124px_1fr]", i === 1 && "hidden md:grid")} key={name}>
                <div className="mx-auto flex size-[112px] items-center justify-center rounded-full bg-[#50c0d0] text-[22px] font-extrabold text-white shadow-[0_18px_50px_-24px_rgba(20,36,31,.35)]">
                  {initials}
                </div>
                <div>
                  <div className="mb-6 flex items-center gap-4">
                    <span className={cx(displayFont, "text-[44px] leading-none text-[#50c0d0]")}>&ldquo;</span>
                    <span className="h-px flex-1 bg-[#14241f]/15" />
                  </div>
                  <p className="max-w-[520px] text-[17px] font-semibold leading-[1.65] text-[#14241f]">{text}</p>
                  <div className="mt-9 max-sm:mt-3">
                    <b className="block text-[15px] font-bold tracking-[.02em] text-[#14241f]">{name}, {role}</b>
                    <span className="mt-8 block h-px w-[250px] max-w-full bg-[#14241f]/15" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-[78px] max-sm:mt-[30px] flex justify-center gap-2.5">
            {Array.from({ length: pageCount }).map((_, index) => (
              <button
                aria-label={`Show review set ${index + 1}`}
                className={cx("h-1 w-12 rounded-full transition", index === reviewPage ? "bg-[#50c0d0]" : "bg-[#14241f]/15")}
                key={index}
                type="button"
                onClick={() => setReviewPage(index)}
              />
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
