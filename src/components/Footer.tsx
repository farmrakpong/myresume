import { additional, profile } from "@/data/resume";

export function Footer() {
  return (
    <footer className="sec-light border-t border-line px-5 py-12">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-[13px] font-semibold tracking-[0.12em] text-muted uppercase">
          Additional information
        </h2>
        <dl className="mt-4 grid gap-x-10 gap-y-2 sm:grid-cols-2">
          {additional.map((item) => (
            <div key={item.label} className="avoid-break flex gap-2 text-[12px]">
              <dt className="shrink-0 text-muted">{item.label}:</dt>
              <dd className="min-w-0 flex-1">{item.value}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-8 border-t border-line pt-6 text-[12px] text-muted">
          {profile.name} — {profile.headline}. Built with Next.js.
        </p>
      </div>
    </footer>
  );
}
