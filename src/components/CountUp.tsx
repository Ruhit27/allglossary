"use client";

import { useEffect, useRef } from "react";

const DURATION_MS = 1200;

// Renders the final number on the server, then counts up from 0 on mount.
// Writes to the DOM directly so the animation doesn't re-render every frame.
export default function CountUp({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / DURATION_MS, 1);
      const eased = 1 - (1 - t) ** 3; // ease-out cubic
      el.textContent = Math.round(eased * value).toLocaleString("en-US");
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      el.textContent = value.toLocaleString("en-US");
    };
  }, [value]);

  return <span ref={ref}>{value.toLocaleString("en-US")}</span>;
}
