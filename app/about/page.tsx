"use client";

import React from "react";
import { Image } from "@heroui/react";
import ShadowTitle from "@/app/components/ShadowTitle";
import PageTitle from "@/app/components/PageTitle";
import PageSubtitle from "@/app/components/PageSubtitle";

export default function AboutPage() {
  return (
    <div className="container flex-grow mx-auto mt-5 mb-5 px-6 min-h-screen max-w-[1280px]">
      <ShadowTitle text="О студии" ratio={0.3} />
      <section className="block z-10 relative">
        <PageTitle title="О студии" />
        <PageSubtitle subtitle="Мы создаем мощные бренды и инновационные решения" />
      </section>

      <section className="block z-10 relative">
        <div className="img-wrap mt-7 lg:mt-16">
          <Image
            alt="ASB Studio"
            src="/assets/jpg/about.jpg"
            width={1200}
            className="img-mask"
          />
        </div>
      </section>

      <section className="block text-dark-2 dark:text-white z-10 relative mt-16 mb-16">
        <h2 className="text-4xl font-magistral font-bold mb-0">
          Что мы предлагаем
        </h2>
        <p className="font-magistral-light-italic mb-8 text-lg">
          и на чем мы специализируемся
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ul className="space-y-2">
            <li className="relative pl-9 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:content-[''] before:h-[1px] before:w-6 dark:before:bg-gray-100 before:bg-dark-1">
              Drupal разработка
            </li>
            <li className="relative pl-9 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:content-[''] before:h-[1px] before:w-6 dark:before:bg-gray-100 before:bg-dark-1">
              Front-end разработка
            </li>
            <li className="relative pl-9 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:content-[''] before:h-[1px] before:w-6 dark:before:bg-gray-100 before:bg-dark-1">
              Back-end разработка
            </li>
            <li className="relative pl-9 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:content-[''] before:h-[1px] before:w-6 dark:before:bg-gray-100 before:bg-dark-1">
              Разработка iOS Apps
            </li>
            <li className="relative pl-9 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:content-[''] before:h-[1px] before:w-6 dark:before:bg-gray-100 before:bg-dark-1">
              Разработка Android Apps
            </li>
          </ul>
          <ul className="space-y-2">
            <li className="relative pl-9 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:content-[''] before:h-[1px] before:w-6 dark:before:bg-gray-100 before:bg-dark-1">
              Веб дизайн
            </li>
            <li className="relative pl-9 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:content-[''] before:h-[1px] before:w-6 dark:before:bg-gray-100 before:bg-dark-1">
              Веб анимация
            </li>
            <li className="relative pl-9 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:content-[''] before:h-[1px] before:w-6 dark:before:bg-gray-100 before:bg-dark-1">
              Брендирование
            </li>
            <li className="relative pl-9 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:content-[''] before:h-[1px] before:w-6 dark:before:bg-gray-100 before:bg-dark-1">
              SEO оптимизация | Прототипирование
            </li>
            <li className="relative pl-9 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:content-[''] before:h-[1px] before:w-6 dark:before:bg-gray-100 before:bg-dark-1">
              ADV контекстная реклама
            </li>
          </ul>
          <ul className="space-y-2">
            <li className="relative pl-9 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:content-[''] before:h-[1px] before:w-6 dark:before:bg-gray-100 before:bg-dark-1">
              Security Awareness
            </li>
            <li className="relative pl-9 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:content-[''] before:h-[1px] before:w-6 dark:before:bg-gray-100 before:bg-dark-1">
              Penetration Testing
            </li>
            <li className="relative pl-9 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:content-[''] before:h-[1px] before:w-6 dark:before:bg-gray-100 before:bg-dark-1">
              API Testing
            </li>
            <li className="relative pl-9 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:content-[''] before:h-[1px] before:w-6 dark:before:bg-gray-100 before:bg-dark-1">
              Trainings
            </li>
            <li className="relative pl-9 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:content-[''] before:h-[1px] before:w-6 dark:before:bg-gray-100 before:bg-dark-1">
              Vuln Scan
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
