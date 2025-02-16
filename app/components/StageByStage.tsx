"use client";

import React from "react";
import { StageByStageProps } from "@/types/stage-by-stage";

export default function StageByStage({
  heading,
  subtitle,
  stage
}: StageByStageProps) {
  return (
    <section className="block text-dark-2 dark:text-white z-10 relative mt-20 mb-20">
      <h2 className="text-4xl font-magistral font-bold mb-0">{heading}</h2>
      {subtitle && (
        <p className="font-magistral-light-italic text-lg">{subtitle}</p>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-8 relative">
        {stage.map((item, index) => {
          const IconComponent = item.icon;
          const isLast = index === stage.length - 1;

          return (
            <div
              key={index}
              className={`
                relative flex items-center p-1 sm:p-3 lg:p-4 xl:p-6
                ${
                  !isLast
                    ? "after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:-right-0 sm:after:-right-2 xl:after:-right-5 after:rotate-45 sm:after:-rotate-45 after:w-4 after:h-4 after:border-r-2 after:border-b-2 dark:after:border-gray-100 after:border-dark-1 after:opacity-60"
                    : ""
                }
              `}
            >
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
