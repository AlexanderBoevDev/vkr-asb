"use client";

import { useEffect } from "react";
import anime from "animejs";

export type StripesObserverConfig = {
  rootMargin?: string;
  threshold?: number | number[];
};

export function useStripesObserver(config: StripesObserverConfig = {}) {
  useEffect(() => {
    const figures = document.querySelectorAll<HTMLElement>(".services-stripes");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const orientation =
            entry.target.getAttribute("data-orientation") || "vertical";
          const slices =
            entry.target.querySelectorAll<HTMLDivElement>(".uncover__slice");

          if (entry.isIntersecting) {
            anime.remove(slices);
            if (orientation === "vertical") {
              anime({
                targets: slices,
                translateY: ["0%", "100%"],
                translateX: 0,
                duration: 800,
                delay: (_, i) => i * 80,
                easing: "easeInOutQuad"
              });
            } else {
              anime({
                targets: slices,
                translateX: ["0%", "100%"],
                translateY: 0,
                duration: 800,
                delay: (_, i) => i * 80,
                easing: "easeInOutQuad"
              });
            }
          } else {
            anime.remove(slices);
            if (orientation === "vertical") {
              anime({
                targets: slices,
                translateY: ["100%", "0%"],
                translateX: 0,
                duration: 800,
                delay: (_, i) => i * 80,
                easing: "easeInOutQuad"
              });
            } else {
              anime({
                targets: slices,
                translateX: ["100%", "0%"],
                translateY: 0,
                duration: 800,
                delay: (_, i) => i * 80,
                easing: "easeInOutQuad"
              });
            }
          }
        });
      },
      {
        rootMargin: config.rootMargin || "-25% 0px -25% 0px",
        threshold: config.threshold || 0
      }
    );

    figures.forEach((fig) => observer.observe(fig));

    return () => observer.disconnect();
  }, [config]);
}
