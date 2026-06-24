import { Icon, IconName } from "./Icon";
import { cx, displayFont, eyebrow, h2, lead, section, wrap } from "./styles";

const services: [IconName, string, string][] = [
  ["calendar", "OP Consultation", "Focused, unhurried sessions with the surgeon."],
  ["lab", "Blood Tests", "On-site sample collection and diagnostics."],
  ["heart", "Master Health Check-ups", "Comprehensive packages to stay ahead of problems."],
  ["bag", "Minor Theatre & Pharmacy", "An attached minor OT and in-house pharmacy."],
];

export function ClinicServices() {
  return (
    <section className={cx(section, "overflow-hidden")}>
      <div className={wrap}>
        <div className="mx-auto max-w-[760px] text-center">
          <span className={eyebrow}>Clinic services</span>
          <h2 className={cx(h2, "mx-auto")}>Everything around the consultation is close by.</h2>
          <p className={cx(lead, "mx-auto")}>Support services are available around the visit so assessment, tests and next steps feel easier.</p>
        </div>
        {/* Desktop grid */}
        <div className="mt-[42px] hidden grid-cols-4 gap-4 md:grid max-[980px]:grid-cols-2">
          {services.map(([icon, title, text]) => (
            <div className="reveal rounded-[18px] border border-[#d5eef2] bg-white p-6" key={title}>
              <span className="mb-3.5 flex size-11 items-center justify-center rounded-xl bg-[#effbfc]">
                <Icon className="size-[22px] stroke-[#3aaeba] stroke-[1.6]" name={icon} />
              </span>
              <h3 className={cx(displayFont, "mb-1.5 text-[17px]")}>{title}</h3>
              <p className="m-0 text-[13.5px] text-[#46554f]">{text}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Mobile marquee */}
      <div className="mt-[42px] md:hidden">
        <div
          className="flex w-max animate-marquee gap-4 px-4"
          style={{ animationDuration: "16s" }}
        >
          {[...services, ...services].map(([icon, title, text], i) => (
            <div className="w-[260px] shrink-0 rounded-[18px] border border-[#d5eef2] bg-white p-6" key={i}>
              <span className="mb-3.5 flex size-11 items-center justify-center rounded-xl bg-[#effbfc]">
                <Icon className="size-[22px] stroke-[#3aaeba] stroke-[1.6]" name={icon} />
              </span>
              <h3 className={cx(displayFont, "mb-1.5 text-[17px]")}>{title}</h3>
              <p className="m-0 text-[13.5px] text-[#46554f]">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
