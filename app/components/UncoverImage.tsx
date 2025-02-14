"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";

export type ServiceItem = {
  id: number;
  src: string;
  orientation?: "vertical" | "horizontal";
  title?: string;
  description?: string;
  link?: string;
};

type UncoverImageProps = {
  services: ServiceItem[];
  slicesTotal?: number;
  slicesColor?: string;
  covered?: boolean;
};

export function UncoverImage({
  services,
  slicesTotal = 5,
  covered = true
}: UncoverImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const allSlices =
      containerRef.current.querySelectorAll<HTMLDivElement>(".uncover__slice");
    allSlices.forEach((slice) => {
      const parentFigure = slice.closest(
        "[data-orientation]"
      ) as HTMLElement | null;
      const orientation =
        parentFigure?.getAttribute("data-orientation") || "vertical";
      if (orientation === "vertical") {
        slice.style.transform = covered ? "translateY(0%)" : "translateY(100%)";
      } else {
        slice.style.transform = covered ? "translateX(0%)" : "translateX(100%)";
      }
    });
  }, [covered]);

  return (
    <div ref={containerRef} className="flex flex-col gap-20">
      {services.map((item) => {
        const orientation = item.orientation || "vertical";
        return (
          <figure
            key={item.id}
            className={`
              services-stripes
              relative
              group
              overflow-hidden
              w-full
              max-w-[600px]
              ${orientation === "vertical" ? "ml-0" : "ml-auto self-end"}
              opacity-0
              animate-slideInUp
              [animation-delay:0ms]
              mb-0
            `}
            data-orientation={orientation}
          >
            <div
              className="
                w-[800px]
                max-w-full
                min-w-[200px]
                h-[220px]
                sm:h-[380px]
                lg:h-[420px]
                bg-cover
                overflow-hidden
                relative
              "
              style={{ backgroundImage: `url(${item.src})` }}
            >
              <div
                className="
                  w-full
                  h-full
                  bg-cover
                  bg-center
                  absolute
                  top-0
                  left-0
                "
                style={{ backgroundImage: `url(${item.src})` }}
              />
              <div
                className={`
                  absolute
                  top-0
                  left-0
                  w-full
                  h-full
                  flex
                  ${orientation === "vertical" ? "flex-row" : "flex-col"}
                `}
              >
                {Array.from({ length: slicesTotal }).map((_, i) => (
                  <div
                    key={i}
                    className="uncover__slice flex-1 bg-white dark:bg-[#1f2029]"
                  />
                ))}
              </div>
            </div>
            <div
              className="
                absolute
                inset-0
                bg-[linear-gradient(to_bottom,rgba(72,76,97,0)_0%,rgba(72,76,97,0.8)_75%)]
                opacity-0
                translate-y-1/2
                transition-all
                duration-300
                group-hover:opacity-100
                group-hover:translate-y-0
              "
            />
            <figcaption className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
              <h2
                className="
                  text-3xl
                  font-magistral-bold
                  tracking-wide
                  text-dark-4
                  dark:text-dark-1
                  transition-all
                  duration-300
                  transform
                  -translate-y-1/9
                  group-hover:text-white
                  group-hover:-translate-y-[70%]
                  drop-shadow-xl
                "
              >
                {item.title || "IG Design"}
              </h2>
              <p
                className="
                  md:text-xl
                  xl:text-2xl
                  mt-2
                  font-magistral-light-italic
                  opacity-0
                  translate-y-2
                  text-gray-100
                  transition-all
                  duration-300
                  group-hover:opacity-100
                  group-hover:translate-y-0
                "
              >
                {item.description || "Default block description here"}
              </p>
              <Link
                href={item.link || "#"}
                className="
                  mt-4
                  inline-block
             w-fit
                    bg-dark-4
                    hover:bg-dark-3
                    text-white
                  px-4
                  py-2
                  rounded-lg
                  text-sm
                  opacity-0
                  translate-y-2
                  transition-all
                  duration-300
                  group-hover:opacity-100
                  group-hover:translate-y-0
                "
              >
                Подробнее
              </Link>
            </figcaption>
          </figure>
        );
      })}
    </div>
  );
}
