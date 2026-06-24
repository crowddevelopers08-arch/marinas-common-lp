import { Icon } from "./Icon";
import { cx, displayFont, h2, lead, section, wrap } from "./styles";

const centeredLabel = "mx-auto block w-fit text-center text-[12.5px] font-bold uppercase tracking-[.16em] text-[#3aaeba]";
const awarenessBg = "https://img.freepik.com/free-photo/doctor-with-stethoscope-hands-hospital-background_1423-1.jpg";

export function AwarenessSections() {
  return (
    <div className="relative overflow-hidden bg-[#effbfc]">
      <div className="absolute inset-0 bg-cover bg-center opacity-55" style={{ backgroundImage: `url(${awarenessBg})` }} aria-hidden="true" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(239,251,252,.72)_0%,rgba(255,255,255,.68)_52%,rgba(239,251,252,.76)_100%)]" aria-hidden="true" />

      <section className={cx(section, "relative")}>
        <div className={wrap}>
          <div className="mx-auto max-w-[760px] text-center">
            <span className={centeredLabel}>The hidden cost</span>
            <h2 className={cx(h2, "mx-auto")}>The mistake is waiting until it becomes urgent.</h2>
            <p className={cx(lead, "mx-auto")}>Small symptoms can quietly become daily stress when they are left unexplained.</p>
          </div>
          <div className="mt-[38px] grid grid-cols-2 gap-3.5 max-[760px]:grid-cols-1">
            {["They hope the swelling or pain disappears on its own.", "They avoid it out of fear of surgery.", "They search Google and YouTube for answers instead of clarity.", "They live with the discomfort, every single day."].map((text) => (
              <div className="reveal flex items-start gap-3.5 rounded-[14px] border border-[#d5eef2] bg-white p-5" key={text}>
                <span className="flex size-[30px] shrink-0 items-center justify-center rounded-lg bg-[#e2f7fa] text-[15px] font-extrabold text-[#36aebb]">x</span>
                <p className="m-0 text-[15px] text-[#14241f]">{text}</p>
              </div>
            ))}
          </div>
          <div className={cx(displayFont, "reveal mt-[30px] rounded-[18px] bg-[#14241f] p-[30px_34px] text-[clamp(19px,2.4vw,26px)] leading-[1.3] text-white max-[760px]:p-6")}>
            The reality is simple: <em className="italic text-[#50c0d0]">most abdominal problems do not heal on their own.</em> Delaying usually makes them harder to treat, not easier.
          </div>
        </div>
      </section>
      <section className={cx(section, "relative")}>
        <div className={wrap}>
          <div className="mx-auto max-w-[760px] text-center">
            <span className={centeredLabel}>What changes</span>
            <h2 className={cx(h2, "mx-auto")}>Before clarity vs after a focused consultation.</h2>
            <p className={cx(lead, "mx-auto")}>A proper review turns vague worry into a practical next step you can act on.</p>
          </div>
          <div className="mt-[42px] grid grid-cols-2 gap-5 max-[760px]:grid-cols-1">
            <CompareCard kind="before" title="Before" items={["You keep guessing from symptoms.", "You do not know if surgery is needed.", "You postpone because the next step feels unclear.", "You carry the fear alone."]} />
            <CompareCard kind="after" title="After" items={["Your reports and symptoms are reviewed together.", "You understand non-surgical and surgical options.", "You know how urgent the condition really is.", "You leave with a practical next step."]} />
          </div>
        </div>
      </section>
    </div>
  );
}

function CompareCard({ kind, title, items }: { kind: "before" | "after"; title: string; items: string[] }) {
  return (
    <div className={cx("reveal rounded-[18px] p-[30px]", kind === "before" ? "border border-[#d5eef2] bg-white" : "border border-transparent bg-[#2c8791] text-[#f2fbfc]")}>
      <span className={cx("text-xs font-bold uppercase tracking-[.12em]", kind === "before" ? "text-[#36aebb]" : "text-[#bfeff5]")}>{title}</span>
      <h3 className={cx(displayFont, "my-2 mb-[18px] text-[23px]", kind === "after" && "text-white")}>{kind === "before" ? "Confusion keeps growing" : "The path becomes clear"}</h3>
      <ul className="m-0 grid list-none gap-[13px] p-0">
        {items.map((item) => (
          <li className={cx("flex items-start gap-3 text-[15px]", kind === "before" && "text-[#46554f]")} key={item}>
            <span className={cx("mt-px flex size-[22px] shrink-0 items-center justify-center rounded-full", kind === "before" ? "bg-[#e2f7fa] text-[#36aebb]" : "bg-[#bfeff5]/20 text-[#bfeff5]")}>
              <Icon className="size-3 stroke-current stroke-[3]" name={kind === "before" ? "x" : "check"} />
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
