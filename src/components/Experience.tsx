import { experience } from "@/data/resume";
import { Reveal } from "./Reveal";

export function Experience() {
  return (
    <section id="experience" className="sec-dark px-5 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="t-eyebrow">Work experience</p>
          <h2 className="t-head mx-auto mt-2 max-w-[14ch] text-balance sm:max-w-[18ch]">
            Five years. Three teams. One growing title.
          </h2>
        </Reveal>

        <ol className="mt-16 space-y-5">
          {experience.map((job, index) => (
            <Reveal
              as="li"
              key={`${job.company}-${job.period}`}
              delay={index * 90}
              className="avoid-break print-plain overflow-hidden rounded-[28px] border border-line bg-card"
            >
              <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-3 border-b border-line px-7 py-6 sm:px-9">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="t-sub text-[1.3rem] sm:text-[1.6rem]">
                      {job.role}
                    </h3>
                    {job.current && (
                      <span className="rounded-full border border-gold/40 px-2.5 py-0.5 text-[10px] font-medium tracking-[0.1em] text-gold uppercase">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-[15px] text-muted">{job.company}</p>
                </div>
                <p className="shrink-0 text-right text-[13px] leading-relaxed text-muted">
                  {job.period}
                  <br />
                  {job.location}
                </p>
              </div>

              <ul className="grid gap-x-8 gap-y-3 px-7 py-7 sm:grid-cols-2 sm:px-9">
                {job.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="relative pl-5 text-[14.5px] leading-relaxed text-muted before:absolute before:top-[0.62em] before:left-0 before:size-1.5 before:rounded-full before:bg-gold/70"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
