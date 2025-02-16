"use client";

import React from "react";
import { AdvantagesProps } from "@/types/advantage";

export default function Advantages({
  heading,
  subtitle,
  advantages
}: AdvantagesProps) {
  return (
    <section className="block text-dark-2 dark:text-white z-10 relative mt-24 mb-24">
      <h2 className="text-4xl font-magistral font-bold mb-0">{heading}</h2>
      <p className="font-magistral-light-italic mb-8 text-lg">{subtitle}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {advantages.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div key={index} className="flex items-center">
              <div className="flex-shrink-0 w-[48px] h-[48px] mr-4">
                <IconComponent
                  width={48}
                  height={48}
                  className="fill-dark-4 dark:fill-white"
                />
              </div>
              <p className="leading-[1.4]">{item.title}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
