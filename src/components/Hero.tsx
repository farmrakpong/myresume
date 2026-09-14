import { hero, profile, stats } from "@/data/resume";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section
      id="top"
      className="sec-dark relative isolate overflow-hidden px-5 pt-[calc(var(--nav-h)+4rem)] pb-24 text-center sm:pb-28"
    >
      {/* Ambient glow behind the lettering */}
      <div aria-hidden className="no-print pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-[12%] left-1/2 h-[34rem] w-[52rem] max-w-[130vw] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(120,150,255,0.20),transparent_62%)] blur-3xl" />
        <div className="absolute top-[42%] left-1/2 h-[26rem] w-[38rem] max-w-[110vw] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(227,169,81,0.16),transparent_65%)] blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="text-[19px] font-semibold tracking-tight text-fg sm:text-[21px]">
            {hero.eyebrow}
          </p>
        </Reveal>

        <Reveal delay={90}>
          <h1 className="t-hero chrome mt-1">{hero.headline}</h1>
        </Reveal>

        <Reveal delay={180}>
          <p className="mx-auto mt-6 max-w-xl text-[17px] leading-relaxed text-muted sm:text-[19px]">
            {hero.tagline}
          </p>
        </Reveal>

        <Reveal delay={260}>
          <div className="no-print mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
            <a
              href="#contact"
              className="rounded-full bg-accent px-6 py-3 text-[15px] font-medium text-white transition hover:brightness-110"
            >
              Get in touch
            </a>
            <a
              href="#experience"
              className="text-[15px] text-[#2997ff] transition hover:underline"
            >
              See the experience&nbsp;›
            </a>
          </div>
        </Reveal>

        <Reveal delay={340}>
          <p className="mt-5 text-[13px] text-muted">
            {profile.headline} · {profile.location}
          </p>
          {/* Kept in the flow so a printed copy carries contact details at the top. */}
          <p className="mt-1.5 text-[13px] text-muted">
            <a className="hover:text-fg" href={`tel:${profile.phone.replace(/-/g, "")}`}>
              {profile.phone}
            </a>
            {" · "}
            <a className="hover:text-fg" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </p>
        </Reveal>
      </div>

      {/* Glass stat plate */}
      <Reveal delay={420}>
        <div className="print-plain mx-auto mt-16 grid max-w-4xl gap-px overflow-hidden rounded-[28px] border border-white/12 bg-white/[0.06] backdrop-blur-xl sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="avoid-break px-6 py-8">
              <p className="t-stat chrome">{stat.value}</p>
              <p className="mt-1 text-[11px] tracking-[0.14em] text-gold uppercase">
                {stat.unit}
              </p>
              <p className="mx-auto mt-3 max-w-[15rem] text-[13px] leading-snug text-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
