"use client";

import React, { useState, useRef, useEffect } from "react";

interface PageSubtitleProps {
  subtitle: string;
}

export default function PageSubtitle({ subtitle }: PageSubtitleProps) {
  const [scrollPos, setScrollPos] = useState(0);
  const [intersectionRatio, setIntersectionRatio] = useState(1);

  const scrollPosRef = useRef(0);
  const scrollTargetRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);

  // Коэффициент "плавности" скролла
  const LERP = 0.07;

  // Отслеживаем скролл и плавное «дотягивание» (LERP)
  useEffect(() => {
    const animate = () => {
      const diff = scrollTargetRef.current - scrollPosRef.current;
      scrollPosRef.current += diff * LERP;
      setScrollPos(scrollPosRef.current);

      if (Math.abs(diff) > 0.9) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        rafRef.current = null;
      }
    };

    const handleScroll = () => {
      scrollTargetRef.current = window.scrollY;
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  // Используем IntersectionObserver с root: null (viewport)
  useEffect(() => {
    if (!subtitleRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIntersectionRatio(entry.intersectionRatio);
      },
      {
        root: null, // Отслеживаем внутри viewport
        threshold: Array.from({ length: 101 }, (_, i) => i / 100)
      }
    );

    observer.observe(subtitleRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Вычисляем «прозрачность» в зависимости от scrollPos и intersectionRatio
  const baseOpacity = Math.max(1 - scrollPos / 400, 0);
  const finalOpacity = baseOpacity * intersectionRatio;

  return (
    <h2
      ref={subtitleRef}
      style={{
        position: "relative",
        transform: `translateY(${scrollPos}px)`,
        opacity: finalOpacity,
        willChange: "transform, opacity"
      }}
      className="text-xl font-magistral-light-italic tracking-widest text-gray-600 dark:text-gray-300 mt-2 pl-10"
    >
      - {subtitle}
    </h2>
  );
}
