import { profile } from "@/data/resume";
import { Reveal } from "./Reveal";

const tel = profile.phone.replace(/-/g, "");

export function Contact() {
  return (
    <section
      id="contact"
      className="sec-dark relative isolate overflow-hidden px-5 py-28 text-center sm:py-36"
    >
      <div aria-hidden className="no-print pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 h-[26rem] w-[46rem] max-w-[130vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(120,150,255,0.18),transparent_65%)] blur-3xl" />
      </div>

      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="t-eyebrow">Available within 1 month</p>
          <h2 className="t-head mt-2">Let&apos;s talk.</h2>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`mailto:${profile.email}`}
              className="print-plain w-full max-w-xs rounded-full bg-accent px-7 py-3.5 text-[15px] font-medium text-white transition hover:brightness-110 sm:w-auto print:text-black"
            >
              {profile.email}
            </a>
            <a
              href={`tel:${tel}`}
              className="print-plain w-full max-w-xs rounded-full border border-line px-7 py-3.5 text-[15px] font-medium text-fg transition hover:bg-white/5 sm:w-auto"
            >
              {profile.phone}
            </a>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-8 text-[14px] text-muted">{profile.location}</p>
        </Reveal>
      </div>
    </section>
  );
}
