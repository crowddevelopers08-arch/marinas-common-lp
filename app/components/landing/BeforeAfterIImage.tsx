import Image from "next/image";
import { cx, eyebrow, h2, lead, section, wrap } from "./styles";

const beforeAfterPairs = [
  {
    before: "https://res.cloudinary.com/dthj7fakc/image/upload/v1782481294/before1_xgn99k.png",
    after: "https://res.cloudinary.com/dthj7fakc/image/upload/v1782466684/herina-image_dlichk.png",
  },
  {
    before: "https://res.cloudinary.com/dthj7fakc/image/upload/v1782481295/before3_e8uz78.png",
    after: "https://res.cloudinary.com/dthj7fakc/image/upload/v1782466686/herina-image2_bwzqf4.png",
  },
  {
    before: "https://res.cloudinary.com/dthj7fakc/image/upload/v1782481294/before2_u3xi0i.png",
    after: "https://res.cloudinary.com/dthj7fakc/image/upload/v1782466686/herina-image1_xan4cv.png",
  },
];

export function BeforeAfterIImage() {
  const movingPairs = [...beforeAfterPairs, ...beforeAfterPairs];

  return (
    <section className={cx(section, "overflow-hidden bg-white")}>
      <div className={wrap}>
        <div className="mx-auto max-w-[760px] text-center">
          <span className={cx(eyebrow, "mx-auto flex w-fit justify-center before:hidden")}>Before & after</span>
          <h2 className={cx(h2, "mx-auto")}>Real changes, seen clearly.</h2>
          <p className={cx(lead, "mx-auto")}>A simple visual row showing the difference treatment can make.</p>
        </div>
      </div>

      <div className="mt-[42px] overflow-hidden">
        <div className="flex w-max animate-before-after gap-4 px-4 [animation-duration:54s] hover:[animation-play-state:paused] max-[760px]:gap-3 max-[760px]:px-3">
          {movingPairs.map((pair, index) => (
            <BeforeAfterCard key={`${pair.before}-${index}`} {...pair} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BeforeAfterCard({ before, after }: { before: string; after: string }) {
  return (
    <article className="shrink-0 overflow-hidden rounded-[18px] border border-[#d5eef2] bg-[#effbfc] p-2 shadow-[0_1px_2px_rgba(10,40,40,.06),0_10px_24px_rgba(10,40,40,.08)]">
      <div className="grid w-[min(82vw,520px)] grid-cols-2 gap-2">
        <ImagePanel label="Before" src={before} />
        <ImagePanel label="After" src={after} />
      </div>
    </article>
  );
}

function ImagePanel({ label, src }: { label: string; src: string }) {
  return (
    <div className="relative overflow-hidden rounded-[14px] bg-white">
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
