import Image from "next/image";
import { cx, eyebrow, h2, lead, section, wrap } from "./styles";

const images = [
  "https://res.cloudinary.com/dxntva1vn/image/upload/v1794027005/bf-1_zuzcmb.png",
  "https://res.cloudinary.com/dxntva1vn/image/upload/v1794027006/bf-2_skgfpd.png",
  "https://res.cloudinary.com/dxntva1vn/image/upload/v1794027015/bf-3_hmvssf.png",
  "https://res.cloudinary.com/dxntva1vn/image/upload/v1794027007/bf-4_ijrzqd.png",
  "https://res.cloudinary.com/dxntva1vn/image/upload/v1794027005/bf-6_wg4rar.png",
  "https://res.cloudinary.com/dxntva1vn/image/upload/v1794027006/bf-7_xy3kyc.png",
];

export function BeforeAfterIImage() {
  // Duplicate images for smooth infinite scrolling
  const carouselImages = [...images, ...images];

  return (
    <section className={cx(section, "overflow-hidden bg-white")}>
      <div className={wrap}>
        <div className="mx-auto max-w-[760px] text-center">
          <span
            className={cx(
              eyebrow,
              "mx-auto flex w-fit justify-center before:hidden"
            )}
          >
            Gallery
          </span>

          <h2 className={cx(h2, "mx-auto")}>
            Real Patient Treatment Results
          </h2>

          <p className={cx(lead, "mx-auto")}>
            See actual treatment outcomes from our patients.
          </p>
        </div>
      </div>

      <div className="mt-10 overflow-hidden px-4 max-[760px]:px-3">
        <div className="flex w-max animate-before-after hover:[animation-play-state:paused]">
          {carouselImages.map((src, index) => (
            <article
              key={index}
              className="mr-4 shrink-0 overflow-hidden rounded-[18px] border border-[#d5eef2] bg-[#effbfc] p-2 shadow-[0_1px_2px_rgba(10,40,40,.06),0_10px_24px_rgba(10,40,40,.08)] max-[760px]:mr-3"
            >
              <Image
                src={src}
                alt={`Patient Result ${index + 1}`}
                width={416}
                height={520}
                className="block aspect-[4/5] w-[min(70vw,260px)] rounded-[14px] object-cover"
                sizes="(max-width:760px) 41vw, 260px"
                priority={index < 6}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
