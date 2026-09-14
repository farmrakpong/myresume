import { highlights, profile } from "@/data/resume";
import { Reveal } from "./Reveal";

export function Overview() {
  return (
    <section id="overview" className="sec-light px-5 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="t-eyebrow">The short version</p>
          <h2 className="t-head mt-2">Builds the backend. Leads the build.</h2>
        </Reveal>

        <Reveal delay={100} className="mx-auto mt-8 max-w-3xl text-center">
          <p className="t-body">{profile.summary}</p>
        </Reveal>

        <ul className="mt-14 grid gap-4 sm:grid-cols-3">
          {highlights.map((item, index) => (
            <Reveal
              as="li"
              key={item.title}
              delay={index * 110}
              className="avoid-break print-plain rounded-3xl bg-card p-7 shadow-[0_1px_2px_rgba(0,0,0,0.06)]"
            >
              <h3 className="t-sub text-[1.25rem] sm:text-[1.35rem]">
                {item.title}
              </h3>
              <p className="t-body mt-2.5 text-[15px]">{item.body}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
