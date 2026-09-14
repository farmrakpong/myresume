import {
  certifications,
  education,
  languages,
  preferences,
} from "@/data/resume";
import { Reveal } from "./Reveal";

function SpecCard({
  title,
  children,
  delay = 0,
}: {
  title: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <Reveal
      delay={delay}
      className="avoid-break print-plain rounded-3xl bg-card p-7 shadow-[0_1px_2px_rgba(0,0,0,0.06)]"
    >
      <h3 className="text-[13px] font-semibold tracking-[0.12em] text-muted uppercase">
        {title}
      </h3>
      <div className="mt-5">{children}</div>
    </Reveal>
  );
}

export function Specs() {
  return (
    <section id="specs" className="sec-light px-5 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="t-eyebrow">The details</p>
          <h2 className="t-head mt-2">Specs.</h2>
        </Reveal>

        <div className="mt-14 grid gap-4 lg:grid-cols-2">
          <SpecCard title="Career preferences">
            <dl className="divide-y divide-line">
              {preferences.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-wrap justify-between gap-x-6 gap-y-1 py-2.5 first:pt-0 last:pb-0"
                >
                  <dt className="text-[14px] text-muted">{item.label}</dt>
                  <dd className="text-[14px] font-medium tracking-tight sm:text-right">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </SpecCard>

          <div className="grid gap-4">
            <SpecCard title="Education" delay={80}>
              <p className="text-[17px] font-semibold tracking-tight">
                {education.degree}
              </p>
              <p className="mt-1 text-[14px] text-muted">{education.school}</p>
              <p className="mt-2 text-[13px] text-muted">
                Graduated {education.graduated} · GPA {education.gpa}
              </p>
            </SpecCard>

            <SpecCard title="Training & certifications" delay={140}>
              <ul className="space-y-2">
                {certifications.map((cert) => (
                  <li key={cert.title}>
                    <p className="text-[15px] font-medium tracking-tight">
                      {cert.title}
                    </p>
                    <p className="text-[13px] text-muted">
                      {cert.issuer} · {cert.date}
                    </p>
                  </li>
                ))}
              </ul>
            </SpecCard>
          </div>

          <SpecCard title="Languages" delay={200}>
            <ul className="space-y-4">
              {languages.map((lang) => (
                <li key={lang.name}>
                  <p className="text-[15px] font-medium tracking-tight">
                    {lang.name}
                  </p>
                  <p className="mt-1 text-[13px] text-muted">{lang.detail}</p>
                </li>
              ))}
            </ul>
          </SpecCard>
        </div>
      </div>
    </section>
  );
}
