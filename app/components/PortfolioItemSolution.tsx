"use client";

import Image from "next/image";

interface TaskSolutionProps {
  imageSrc: string;
  imageAlt: string;
  taskTitle: string;
  taskText: string;
  solutionTitle: string;
  solutionText: string;
}

export default function PortfolioItemSolution({
  imageSrc,
  imageAlt,
  taskTitle,
  taskText,
  solutionTitle,
  solutionText
}: TaskSolutionProps) {
  return (
    <section
      className="
        relative
        flex
        flex-col-reverse
        lg:flex-row
        items-start
        lg:items-center
        w-full
        mt-10
      "
    >
      <div
        className="
          w-full
          lg:w-1/2
          lg:pr-16
          xl:px-16
          flex
          flex-col
          justify-center
          xl:min-h-[400px]
        "
      >
        <h3 className="text-xl md:text-2xl font-magistral-bold mb-2">
          {taskTitle}
        </h3>
        <div
          className="text-md md:text-lg mb-8 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: taskText }}
        />

        <h3 className="text-xl md:text-2xl font-magistral-bold mb-2">
          {solutionTitle}
        </h3>
        <div
          className="text-md md:text-lg leading-relaxed"
          dangerouslySetInnerHTML={{ __html: solutionText }}
        />
      </div>
      <div
        className="
          w-full
          lg:w-1/2
          lg:order-last
          mb-6 lg:mb-0
          flex
          justify-center
        "
      >
        <div className="relative w-full max-w-[600px] lg:max-w-none lg:ml-auto">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={800}
            height={600}
            className="object-cover lg:object-contain mx-auto lg:mx-0"
          />
        </div>
      </div>
    </section>
  );
}
