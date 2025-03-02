"use client";

import { useEffect, useState } from "react";

/**
 * Пример компонента с параллакс-эффектом:
 * Большой вертикальный заголовок, смещающийся при скролле.
 */
interface ShadowTitleProps {
  text: string; // Текст, который отображается вертикально
  ratio?: number; // Насколько быстро перемещать заголовок относительно скролла
}

export default function ShadowTitle({ text, ratio = 0.5 }: ShadowTitleProps) {
  // Храним «смещение» параллакса
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    function handleScroll() {
      // current scrollY
      const scrollY = window.scrollY;
      // Можем менять offset по некому коэффициенту
      setOffset(scrollY * ratio);
    }

    // Вешаем обработчик на scroll
    window.addEventListener("scroll", handleScroll);
    // Убираем при размонтировании
    return () => window.removeEventListener("scroll", handleScroll);
  }, [ratio]);

  /**
   * Для примера:
   * style={{ transform: `translateY(${offset}px)` }}
   * Можно добавить чуть более сложную логику, например: scale, rotate и т.д.
   */
  return (
    <div
      className="shadow-title parallax-top-shadow font-magistral-black tracking-widest z-0"
      style={{
        top: 0,
        transform: `translateY(${offset}px)`
      }}
    >
      {text}
    </div>
  );
}
