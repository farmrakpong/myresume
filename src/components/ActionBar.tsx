"use client";

import { useEffect, useState } from "react";

export function ActionBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`no-print fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-black/70 backdrop-blur-xl backdrop-saturate-150 transition-transform duration-500 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-5 py-3">
        <p className="text-[13px] text-white/70">
          Available within 1 month ·{" "}
          <span className="text-white">THB 40,000 / month</span>
        </p>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => window.print()}
            className="rounded-full border border-white/25 px-4 py-2 text-[13px] font-medium text-white transition hover:bg-white/10"
          >
            Save as PDF
          </button>
          <a
            href="#contact"
            className="rounded-full bg-accent px-4 py-2 text-[13px] font-medium text-white transition hover:brightness-110"
          >
            Get in touch
          </a>
        </div>
      </div>
    </div>
  );
}
