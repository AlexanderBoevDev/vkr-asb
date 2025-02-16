"use client";

import React from "react";
import { SuggestProps } from "@/types/suggest";

export default function Suggest({ heading, subtitle, items }: SuggestProps) {
  return (
    <section className="block text-dark-2 dark:text-white z-10 relative mt-20 mb-20">
      <h2 className="text-4xl font-magistral font-bold mb-0">{heading}</h2>
      <p className="font-magistral-light-italic mb-8 text-lg">{subtitle}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {items.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div
              key={index}
              className="relative flex items-start p-6 rounded-lg bg-gray-100 dark:bg-dark-1"
            >
              <div className="absolute top-5 right-5 opacity-10 dark:opacity-50 pointer-events-none">
                <IconComponent width={80} height={80} />
              </div>
              <div className="mr-4 flex-shrink-0">
                <IconComponent
                  width={48}
                  height={48}
                  className="fill-current"
                />
              </div>
              <div>
                <h3 className="text-xl font-magistral font-bold mb-2">
                  {item.heading}
                </h3>
                <p className="leading-[1.4] relative z-10">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
