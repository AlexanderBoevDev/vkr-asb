"use client";

import React, { useState, useRef, useEffect } from "react";

interface PageTitleProps {
  title: string;
}

export default function PageTitle({ title }: PageTitleProps) {
  // Текущая «отрисованная» позиция
  const [scrollPos, setScrollPos] = useState(0);
  // Храним коэффициент пересечения (от 0 до 1)
  const [intersectionRatio, setIntersectionRatio] = useState(1);

  const scrollPosRef = useRef(0);
  const scrollTargetRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  // Коэффициент «плавности»: чем меньше, тем более «лениво» элемент следует за скроллом
  const LERP = 0.07;

  useEffect(() => {
    // Функция плавного дотягивания (LERP) к текущему scrollY
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

  // Следим через IntersectionObserver, когда элемент выходит за границы родителя
  useEffect(() => {
    // Предположим, что селектор `.relative.overflow-hidden` стоит на <section>
    const parentEl = document.querySelector(".relative.overflow-hidden");
    if (!parentEl || !titleRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        // entry.intersectionRatio: 1, если полностью в пределах родителя
        // 0, если полностью за пределами
        setIntersectionRatio(entry.intersectionRatio);
      },
      {
        root: parentEl,
        threshold: Array.from({ length: 101 }, (_, i) => i / 100)
        // Массив порогов от 0.0 до 1.0 шагом 0.01,
        // чтобы IO чаще обновлял intersectionRatio
      }
    );

    observer.observe(titleRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Основа прозрачности — зависящая от скролла:
  const baseOpacity = Math.max(1 - scrollPos / 400, 0);
  // Но также умножаем на intersectionRatio (0..1), чтобы гасить элемент, когда он «вылетает»
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
