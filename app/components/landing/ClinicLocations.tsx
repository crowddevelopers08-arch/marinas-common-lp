import { button, cx, displayFont, eyebrow, h2, lead, lens, section, wrap } from "./styles";
import { Reveal } from "./Reveal";

export function ClinicLocations() {
  return (
    <section className={cx(section, "bg-[#effbfc]")} id="locations">
      <div className={wrap}>
        <Reveal className="max-w-[760px]">
          <span className={eyebrow}>Visit us</span>
          <h2 className={h2}>Two familiar Chennai locations.</h2>
          <p className={lead}>Choose the clinic timing and location that fits your day, then book a focused consultation slot.</p>
        </Reveal>
        <div className="mt-[42px] grid grid-cols-2 gap-[18px] max-[760px]:grid-cols-1">
          {[
            ["Evening clinic", "Marina's Clinic, Nungambakkam", "40 & 54, Josier St, Nungambakkam, Chennai 600034", "Mon - Sat, 4:30 PM - 7:00 PM"],
            ["Morning consultation", "Apollo Hospital, Greams Road", "21, Greams Lane, Thousand Lights, Chennai 600006", "Mon - Sat, 10 AM - 2 PM"],
          ].map(([pill, title, addr, hours]) => (
            <div className="reveal rounded-[18px] border border-[#d5eef2] bg-white p-7" key={title}>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#dff6f9] px-3 py-1.5 text-[12.5px] font-bold tracking-[.04em] text-[#3aaeba]"><span className={cx(lens, "size-2")} />{pill}</span>
              <h3 className={cx(displayFont, "mb-1 mt-3.5 text-[21px]")}>{title}</h3>
              <p className="mb-3.5 text-[14.5px] text-[#46554f]">{addr}</p>
              <div className="flex items-center gap-2.5 border-t border-dashed border-[#d5eef2] pt-3.5 text-[14.5px] font-semibold text-[#14241f]"><span className={cx(lens, "size-2")} />{hours}</div>
            </div>
          ))}
        </div>
        <div className="mt-[30px] flex flex-wrap gap-3">
          <a className={button.ink} href="https://www.google.com/maps/search/?api=1&query=Marina%27s+Clinic+Josier+Street+Nungambakkam+Chennai" target="_blank" rel="noopener">
            Open map
          </a>
          <a className={button.ghost} href="tel:+919884000171">
            Call now
          </a>
        </div>
      </div>
    </section>
  );
}
