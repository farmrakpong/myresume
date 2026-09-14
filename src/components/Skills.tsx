import { skillGroups } from "@/data/resume";
import { Reveal } from "./Reveal";

export function Skills() {
  return (
    <section id="skills" className="sec-light px-5 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="t-eyebrow">Technical skills</p>
          <h2 className="t-head mt-2">The whole stack, not a slice of it.</h2>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {skillGroups.map((group, index) => (
            <Reveal
              key={group.title}
              delay={index * 80}
              className="avoid-break print-plain rounded-3xl bg-card p-7 shadow-[0_1px_2px_rgba(0,0,0,0.06)]"
            >
              <h3 className="text-[13px] font-semibold tracking-[0.12em] text-muted uppercase">
                {group.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-x-2.5 gap-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-line px-3.5 py-1.5 text-[14px] font-medium tracking-tight"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
