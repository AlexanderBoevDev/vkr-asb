"use client";

import { useEffect } from "react";

export function useCursor() {
  useEffect(() => {
    const cursor1 = document.getElementById("cursor");
    const cursor2 = document.getElementById("cursor2");
    const cursor3 = document.getElementById("cursor3");

    // Проверяем, что все элементы существуют:
    if (!cursor1 || !cursor2 || !cursor3) return;

    function handlePointerMove(e: PointerEvent) {
      const x = e.clientX + "px";
      const y = e.clientY + "px";

      // Оператор "!" говорит TS: "тут гарантированно не null"
      cursor1!.style.left = x;
      cursor1!.style.top = y;
      cursor2!.style.left = x;
      cursor2!.style.top = y;
      cursor3!.style.left = x;
      cursor3!.style.top = y;
    }

    function handlePointerOver(e: PointerEvent) {
      const target = e.target as HTMLElement;
      const clickable = target.closest(
        "a, button, input, select, textarea, .hover-target"
      );

      if (clickable) {
        cursor2!.classList.add("cursor-hover");
        cursor3!.classList.add("cursor-hover");
      } else {
        cursor2!.classList.remove("cursor-hover");
        cursor3!.classList.remove("cursor-hover");
      }
    }

    // Ставим слушателей
    document.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("pointerover", handlePointerOver);

    return () => {
      document.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerover", handlePointerOver);
    };
  }, []);
}
