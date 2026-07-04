import Image from "next/image";
import { cx, eyebrow, h2, lead, section, wrap } from "./styles";

const images = [
  "https://res.cloudinary.com/dxntva1vn/image/upload/v1783156158/6_omwd1s.png",
  "https://res.cloudinary.com/dxntva1vn/image/upload/v1783156152/5_zniw5l.png",
  "https://res.cloudinary.com/dxntva1vn/image/upload/v1783156102/5_c52o0m.png",
  "https://res.cloudinary.com/dxntva1vn/image/upload/v1783156095/2_xm5twf.png",
  "https://res.cloudinary.com/dxntva1vn/image/upload/v1783156095/3_jjl6sh.png",
  "https://res.cloudinary.com/dxntva1vn/image/upload/v1783156095/1_bw9jb1.png",
];

export function BeforeAfterImage() {
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
            Real patient treatment results.
          </h2>

          <p className={cx(lead, "mx-auto")}>
            See actual treatment outcomes from our patients.
          </p>
        </div>
      </div>

      <div className="mt-10 overflow-hidden px-4">
        <div className="flex w-max animate-before-after [animation-duration:30s] hover:[animation-play-state:paused]">
          {carouselImages.map((src, index) => (
            <div
              key={index}
              className="mr-4 shrink-0 overflow-hidden rounded-2xl border border-[#d5eef2] bg-[#effbfc] p-2 shadow-[0_1px_2px_rgba(10,40,40,.06),0_10px_24px_rgba(10,40,40,.08)]"
            >
              <Image
                src={src}
                alt={`Patient Result ${index + 1}`}
                width={416}
                height={520}
                className="block aspect-[4/5] w-[min(70vw,260px)] rounded-xl object-cover"
                sizes="(max-width:760px) 41vw, 260px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
