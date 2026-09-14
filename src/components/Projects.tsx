import { projects } from "@/data/resume";
import { DragRail } from "./DragRail";
import { Reveal } from "./Reveal";

export function Projects() {
  return (
    <section id="projects" className="sec-dark py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="t-eyebrow">Projects</p>
          <h2 className="t-head mt-2">Things that shipped.</h2>
        </Reveal>
      </div>

      <Reveal delay={120} className="mt-12">
        <DragRail label="Project gallery">
          {projects.map((project) => (
            <li
              key={project.title}
              className="avoid-break print-plain flex w-[min(78vw,20.5rem)] shrink-0 flex-col rounded-[28px] border border-line bg-card p-8"
            >
              {"context" in project && (
                <p className="mb-2 text-[11px] font-semibold tracking-[0.12em] text-gold uppercase">
                  {project.context}
                </p>
              )}
              <h3 className="t-sub text-[1.35rem] leading-snug">
                {project.title}
              </h3>
              <p className="t-body mt-3 text-[15px]">{project.description}</p>

              <ul className="mt-auto flex flex-wrap gap-2 pt-7">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-line px-3 py-1 text-[12px] text-muted"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </DragRail>
      </Reveal>
    </section>
  );
}
