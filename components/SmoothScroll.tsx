"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger, useReducedMotionPref } from "@/lib/motion";

export default function SmoothScroll({ active }: { active: boolean }) {
  const lenisRef = useRef<Lenis | null>(null);
  const reduced = useReducedMotionPref();

  useEffect(() => {
    if (reduced) return;

    const lenis = new Lenis({
      autoRaf: false,
      lerp: 0.09,
      wheelMultiplier: 1,
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const tick = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as Element | null)?.closest(
        'a[href^="#"]'
      ) as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      if (href === "#") {
        event.preventDefault();
        lenis.scrollTo(0, { duration: 1.2 });
        return;
      }

      const target = document.querySelector(href);
      if (!target) return;

      event.preventDefault();
      lenis.scrollTo(target as HTMLElement, { duration: 1.25 });
    };

    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      gsap.ticker.remove(tick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [reduced]);

  useEffect(() => {
    const lenis = lenisRef.current;
    if (!lenis) return;

    if (active) {
      lenis.start();
      ScrollTrigger.refresh();
    } else {
      lenis.stop();
    }
  }, [active]);

  return null;
}
