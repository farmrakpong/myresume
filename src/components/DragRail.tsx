"use client";

import { useCallback, useEffect, useRef, useState } from "react";

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-4"
      aria-hidden
    >
      <path d={dir === "left" ? "M15 5 8 12l7 7" : "M9 5l7 7-7 7"} />
    </svg>
  );
}

export function DragRail({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) {
  const railRef = useRef<HTMLUListElement>(null);
  // Mouse-drag bookkeeping. Touch keeps the browser's native panning.
  const drag = useRef({ active: false, startX: 0, startScroll: 0, moved: 0 });
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [pad, setPad] = useState<number | null>(null);

  const sync = useCallback(() => {
    const el = railRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft >= max - 4);
  }, []);

  useEffect(() => {
    const el = railRef.current;
    if (!el) return;
    sync();
    el.addEventListener("scroll", sync, { passive: true });
    const observer = new ResizeObserver(sync);
    observer.observe(el);
    return () => {
      el.removeEventListener("scroll", sync);
      observer.disconnect();
    };
  }, [sync]);

  // The CSS fallback derives the gutter from 100vw, which overshoots by half a
  // scrollbar. clientWidth is the real layout width, so measure it instead and
  // use one exact value for both the visual gutter and the snap target.
  useEffect(() => {
    const el = railRef.current;
    if (!el) return;
    // 1024 = max-w-5xl, +20 = that container's own px-5, so cards line up with
    // the section text rather than with the container's outer box.
    const measure = () => setPad(Math.max(20, (el.clientWidth - 1024) / 2 + 20));
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const nudge = (direction: 1 | -1) => {
    const el = railRef.current;
    const first = el?.firstElementChild as HTMLElement | null;
    if (!el || !first) return;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 20;
    el.scrollBy({ left: direction * (first.offsetWidth + gap), behavior: "smooth" });
  };

  const onPointerDown = (event: React.PointerEvent<HTMLUListElement>) => {
    if (event.pointerType !== "mouse" || event.button !== 0) return;
    const el = railRef.current;
    if (!el) return;
    drag.current = {
      active: true,
      startX: event.clientX,
      startScroll: el.scrollLeft,
      moved: 0,
    };
    // Snap fights a scrollLeft that moves under the cursor, so park it for the drag.
    el.style.scrollSnapType = "none";
    el.setPointerCapture(event.pointerId);
    event.preventDefault();
  };

  const onPointerMove = (event: React.PointerEvent<HTMLUListElement>) => {
    const el = railRef.current;
    if (!drag.current.active || !el) return;
    const dx = event.clientX - drag.current.startX;
    drag.current.moved = Math.max(drag.current.moved, Math.abs(dx));
    el.scrollLeft = drag.current.startScroll - dx;
  };

  const endDrag = (event: React.PointerEvent<HTMLUListElement>) => {
    const el = railRef.current;
    if (!drag.current.active || !el) return;
    drag.current.active = false;
    el.style.scrollSnapType = "";
    if (el.hasPointerCapture(event.pointerId)) {
      el.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <div>
      <div className="no-print mx-auto flex max-w-5xl justify-end gap-2 px-5">
        <button
          type="button"
          onClick={() => nudge(-1)}
          disabled={atStart}
          aria-label="Previous projects"
          className="grid size-9 place-items-center rounded-full border border-line bg-card text-fg transition enabled:hover:bg-white/10 disabled:cursor-default disabled:opacity-25"
        >
          <Chevron dir="left" />
        </button>
        <button
          type="button"
          onClick={() => nudge(1)}
          disabled={atEnd}
          aria-label="Next projects"
          className="grid size-9 place-items-center rounded-full border border-line bg-card text-fg transition enabled:hover:bg-white/10 disabled:cursor-default disabled:opacity-25"
        >
          <Chevron dir="right" />
        </button>
      </div>

      <ul
        ref={railRef}
        aria-label={label}
        className="rail mt-5 flex gap-5 overflow-x-auto pb-4"
        style={
          pad === null
            ? undefined
            : { paddingInline: pad, scrollPaddingInline: pad }
        }
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onDragStart={(event) => event.preventDefault()}
        // A drag that ends on a card shouldn't also register as a click on it.
        onClickCapture={(event) => {
          if (drag.current.moved > 6) {
            event.preventDefault();
            event.stopPropagation();
          }
        }}
      >
        {children}
      </ul>

      <p className="no-print mt-2 px-5 text-center text-[12px] text-muted">
        Drag the cards, or use the arrows
      </p>
    </div>
  );
}
