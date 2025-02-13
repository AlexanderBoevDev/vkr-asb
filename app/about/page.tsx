"use client";

import React from "react";
import { Image } from "@heroui/react";
import ShadowTitle from "@/app/components/ShadowTitle";
import PageTitle from "@/app/components/PageTitle";
import PageSubtitle from "@/app/components/PageSubtitle";

const technologies = [
  { name: "jQuery", src: "/assets/svg/jquery.svg" },
  { name: "Acquia", src: "/assets/svg/acquia.svg" },
  { name: "Amazon", src: "/assets/svg/amazon.svg" },
  { name: "Bitrix", src: "/assets/svg/bitrix.svg" },
  { name: "Django", src: "/assets/svg/django.svg" },
  { name: "Drupal", src: "/assets/svg/drupal8.svg" },
  { name: "MySQL", src: "/assets/svg/mysql.svg" },
  { name: "Node.js", src: "/assets/svg/nodejs.svg" },
  { name: "PostgreSQL", src: "/assets/svg/postgresql.svg" },
  { name: "Python", src: "/assets/svg/python.svg" },
  { name: "Swift", src: "/assets/svg/swift.svg" },
  { name: "Xamarin", src: "/assets/svg/xamarin.svg" },
  { name: "Docker", src: "/assets/svg/docker.svg" },
  { name: "Bootstrap", src: "/assets/svg/bootstrap.svg" },
  { name: "AngularJS", src: "/assets/svg/angularjs.svg" },
  { name: "Java EE", src: "/assets/svg/java.svg" },
  { name: "Sass", src: "/assets/svg/sass.svg" },
  { name: "Less", src: "/assets/svg/less.svg" },
  { name: "Symfony", src: "/assets/svg/symfony.svg" },
  { name: "PHP", src: "/assets/svg/php.svg" }
];

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
      <section className="block z-10 relative mt-16 mb-16">
        <h2 className="text-4xl font-magistral font-bold mb-0">Технологии</h2>
        <p className="font-magistral-light-italic mb-8 text-lg">
          что мы используем при работе с проектами
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center justify-center border border-gray-600 bg-[#1f2029] w-full h-[120px] sm:h-[150px] lg:h-[180px]"
            >
              <img
                src={tech.src}
                alt={tech.name}
                className="max-h-[50px] max-w-[60%] opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </section>
      <section className="relative mt-8 lg:mt-24 mb-8 lg:mb-24">
        <div
          className={`
            relative pl-20 text-lg
            before:content-['“']
            before:absolute
            before:top-0
            before:left-0
            before:text-[120px]
            before:leading-[0.9]
            before:font-bold
            before:text-transparent
            before:[-webkit-text-stroke:2px_rgb(97,100,129)]
            before:[text-stroke:2px_rgb(97,100,129)]
            before:font-[Muli,sans-serif]
          `}
        >
          <p className="font-magistral-light-italic mb-8 text-lg lg:text-2xl">
            Веб сайт должен отражать сущность и эстетичность компании, и веб
            сайт не должен быть только снаружи красив, он также должен быть
            оформлен правильно изнутри, что бы приносить удовольствие не только
            посетителям веб сайта но, и разработчикам которые будет работать с
            кодом.
          </p>
          <p className="font-magistral-light-italic mb-8 text-lg lg:text-2xl">
            Поэтому пока одни думают, другие зарабатывают. Оставить заявку на
            разработку вашего личного веб сайта!
          </p>
        </div>
      </section>
    </div>
  );
}
