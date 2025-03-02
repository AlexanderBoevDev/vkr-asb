"use client";

import React, { useState, useRef, useEffect } from "react";

interface PageTitleProps {
  title: string;
}

export default function PageTitle({ title }: PageTitleProps) {
  const [scrollPos, setScrollPos] = useState(0);
  const [intersectionRatio, setIntersectionRatio] = useState(1);

  const scrollPosRef = useRef(0);
  const scrollTargetRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  // Коэффициент «плавности» при lerp
  const LERP = 0.07;

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

  // IntersectionObserver с root: null
  useEffect(() => {
    if (!titleRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIntersectionRatio(entry.intersectionRatio);
      },
      {
        root: null, // Следим за появлением в viewport
        threshold: Array.from({ length: 101 }, (_, i) => i / 100)
      }
    );

    observer.observe(titleRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const baseOpacity = Math.max(1 - scrollPos / 400, 0);
  const finalOpacity = baseOpacity * intersectionRatio;

  return (
    <h1
      ref={titleRef}
      style={{
        position: "relative",
        transform: `translateY(${scrollPos}px)`,
        opacity: finalOpacity,
        willChange: "transform, opacity"
      }}
      className="font-magistral-bold tracking-wider text-4xl md:text-7xl font-bold text-dark-1 dark:text-white pt-5 md:pt-10 xl:pt-20 mb-4 z-0"
    >
      {title}
    </h1>
  );
}
