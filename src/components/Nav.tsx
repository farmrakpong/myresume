"use client";

import { useEffect, useState } from "react";
import { navLinks, profile } from "@/data/resume";

export function Nav() {
  const [active, setActive] = useState<string>("");
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => Boolean(el));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Sections"
      className={`no-print fixed inset-x-0 top-0 z-50 h-[var(--nav-h)] border-b transition-colors duration-300 ${
        solid
          ? "border-white/10 bg-black/70 backdrop-blur-xl backdrop-saturate-150"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-full max-w-5xl items-center justify-between gap-4 px-5">
        <a
          href="#top"
          className="shrink-0 text-[15px] font-semibold tracking-tight text-white/95"
        >
          {profile.name}
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                aria-current={active === link.href ? "true" : undefined}
                className={`text-xs transition-colors ${
                  active === link.href
                    ? "text-white"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="shrink-0 rounded-full bg-accent px-3.5 py-1.5 text-xs font-medium text-white transition hover:brightness-110"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
