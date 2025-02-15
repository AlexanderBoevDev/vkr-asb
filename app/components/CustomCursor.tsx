"use client";

import { useCursor } from "@/hooks/useCursor";

export function CustomCursor() {
  useCursor();

  return (
    <>
      <div
        id="cursor"
        className={`
          cursor
          fixed
          w-0 h-0
          pointer-events-none
          rounded-full
          z-[99999]
          -translate-x-1/2 -translate-y-1/2
          dark:bg-white
          bg-dark-4
        `}
      />
      <div
        id="cursor2"
        className={`
          cursor2
          fixed
          w-9 h-9
          pointer-events-none
          rounded-full
          z-[99998]
          -translate-x-1/2 -translate-y-1/2
          transition-all duration-300 ease-out
          border-[1px]
          shadow-[0_0_22px_rgba(20,21,26,0.3)]
          dark:shadow-[0_0_22px_rgba(255,255,255,0.6)]
                    dark:border-white
          border-dark-4
        `}
      />
      <div
        id="cursor3"
        className={`
          cursor3
          fixed
          w-9 h-9
          pointer-events-none
          rounded-full
          z-[99998]
          -translate-x-1/2 -translate-y-1/2
          transition-all duration-300 ease-out
        `}
      />
    </>
  );
}
