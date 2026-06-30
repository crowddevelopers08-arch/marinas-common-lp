import Image from "next/image";
import { cx, eyebrow, h2, lead, section, wrap } from "./styles";

const beforeAfterPairs = [
  {
    before: "https://res.cloudinary.com/daclbrdse/image/upload/v1782805703/5_vcpte1.png",
    after: "https://res.cloudinary.com/daclbrdse/image/upload/v1782805703/2_nbkgnk.png",
  },
  {
    before: "https://res.cloudinary.com/daclbrdse/image/upload/v1782805703/3_ilod5l.png",
    after: "https://res.cloudinary.com/daclbrdse/image/upload/v1782805703/1_psrsbj.png",
  },
  // {
  //   before: "",
  //   after: "",
  // },
];

export function BeforeAfterIImage() {
  const beforeAfterImages = [...Array(4)].flatMap(() =>
    beforeAfterPairs.flatMap(({ before, after }) => [
      { label: "Before", src: before },
      { label: "After", src: after },
    ])
  );

  return (
    <section className={cx(section, "overflow-hidden bg-white")}>
      <div className={wrap}>
        <div className="mx-auto max-w-[760px] text-center">
          <span className={cx(eyebrow, "mx-auto flex w-fit justify-center before:hidden")}>Before & after</span>
          <h2 className={cx(h2, "mx-auto")}>Real changes, seen clearly.</h2>
          <p className={cx(lead, "mx-auto")}>A simple visual row showing the difference treatment can make.</p>
        </div>
      </div>

      <div className="mt-[42px] overflow-hidden px-4 max-[760px]:px-3">
        <div className="flex w-max animate-before-after [animation-duration:34s] hover:[animation-play-state:paused]">
          {[0, 1].map((group) => (
            <div className="flex gap-4 pr-4 max-[760px]:gap-3 max-[760px]:pr-3" key={group} aria-hidden={group === 1}>
              {beforeAfterImages.map((image, index) => (
                <ImageCard key={`${group}-${image.src}-${index}`} {...image} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ImageCard({ label, src }: { label: string; src: string }) {
  return (
    <article className="shrink-0 overflow-hidden rounded-[18px] border border-[#d5eef2] bg-[#effbfc] p-2 shadow-[0_1px_2px_rgba(10,40,40,.06),0_10px_24px_rgba(10,40,40,.08)]">
      <ImagePanel label={label} src={src} />
    </article>
  );
}

function ImagePanel({ label, src }: { label: string; src: string }) {
  return (
    <div className="relative w-[min(70vw,260px)] overflow-hidden rounded-[14px] bg-white">
      <span className="absolute left-3 top-3 z-[1] rounded-full bg-[#14241f]/80 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[.08em] text-white backdrop-blur-sm">
        {label}
      </span>
      <Image
        alt={`${label} hernia treatment result`}
        className="block aspect-[4/5] w-full object-cover"
        height={520}
        sizes="(max-width: 760px) 41vw, 260px"
        src={src}
        width={416}
      />
    </div>
  );
}
