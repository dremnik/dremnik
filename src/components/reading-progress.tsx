"use client";

import { useEffect, useRef, useState } from "react";

// Thin fixed bar at the top of the viewport that fills as you scroll. The fill
// eases toward the scroll position each frame (lerp) rather than snapping, so
// it trails with a smooth, calm motion.
export function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  const target = useRef(0);
  const current = useRef(0);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const tick = () => {
      // Ease factor: lower = slower / calmer trailing.
      current.current += (target.current - current.current) * 0.08;
      if (Math.abs(target.current - current.current) < 0.05) {
        current.current = target.current;
        setProgress(current.current);
        raf.current = null;
        return;
      }
      setProgress(current.current);
      raf.current = requestAnimationFrame(tick);
    };

    const onScroll = () => {
      const max =
        document.documentElement.scrollHeight - window.innerHeight;
      target.current = max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0;
      if (raf.current == null) raf.current = requestAnimationFrame(tick);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf.current != null) {
        cancelAnimationFrame(raf.current);
        raf.current = null;
      }
    };
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-50 h-[3px]">
      <div className="h-full bg-ink" style={{ width: `${progress}%` }} />
    </div>
  );
}
