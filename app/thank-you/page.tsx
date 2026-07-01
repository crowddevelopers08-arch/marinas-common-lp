import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "../components/landing/Header";
import { Icon } from "../components/landing/Icon";
import { button, cardShadow, cx, displayFont, section, wrap } from "../components/landing/styles";

export const metadata: Metadata = {
  title: "Request received - Marina's Clinic",
};

export default async function ThankYouPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const first = (value: string | string[] | undefined) => (Array.isArray(value) ? value[0] : value) || "";

  const name = first(params.name);
  const phone = first(params.phone);
  const condition = first(params.condition);
  const slot = first(params.slot);
  const note = first(params.note);

  const text = `New consultation request\n\nName: ${name}\nPhone: ${phone}\nCondition: ${condition}\nPreferred: ${slot || "Either"}${note ? `\nNote: ${note}` : ""}`;
  const waHref = `https://wa.me/919884000171?text=${encodeURIComponent(text)}`;

  return (
    <>
      <Header />
      <main className={cx(section, "min-h-[70vh]")}>
        <div className={cx(wrap, "flex justify-center")}>
          <div className={cx("w-full max-w-[540px] rounded-3xl bg-white p-[34px] text-center text-[#14241f] max-[760px]:p-[26px_22px]", cardShadow)}>
            <div className="mx-auto mb-[18px] flex size-16 items-center justify-center rounded-full bg-[#dff6f9] text-[#3aaeba]">
              <Icon className="size-[30px] stroke-current stroke-[3]" name="check" />
            </div>
            <h1 className={cx(displayFont, "mb-2 text-[26px]")}>Request received{name ? `, ${name}` : ""}!</h1>
            <p className="mb-5 text-sm text-[#46554f]">Thank you. Our team will call you shortly to confirm your slot{slot ? ` (${slot})` : ""}. Prefer to talk now? Message us on WhatsApp.</p>
            <div className="flex flex-col items-center gap-3">
              <a className={cx(button.primary, button.block, button.lg)} href={waHref} target="_blank" rel="noopener">Continue on WhatsApp</a>
              <Link className="text-sm font-bold text-[#3aaeba] hover:text-[#2c8791]" href="/">Back to home</Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
