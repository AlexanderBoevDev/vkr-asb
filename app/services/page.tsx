"use client";

import React from "react";
import ShadowTitle from "@/app/components/ShadowTitle";
import PageTitle from "@/app/components/PageTitle";
import PageSubtitle from "@/app/components/PageSubtitle";
import { useStripesObserver } from "@/hooks/useStripesObserver";
import { UncoverImage, ServiceItem } from "@/app/components/UncoverImage";

export default function ServicesPage() {
  useStripesObserver({ rootMargin: "-25% 0px -25% 0px", threshold: 0.1 });

  const servicesData: ServiceItem[] = [
    {
      id: 1,
      src: "https://asb-studio.ru/sites/default/files/styles/image_teaser_service/public/node/service/Website-development.jpg",
      orientation: "vertical",
      title: "Разработка сайтов",
      description:
        "Получите современный сайт, поднимающий бизнес на новый уровень!",
      link: "/about"
    },
    {
      id: 2,
      src: "https://asb-studio.ru/sites/default/files/styles/image_teaser_service/public/node/service/Website-development.jpg",
      orientation: "horizontal",
      title: "Drupal разработка",
      description:
        "Раскройте потенциал Drupal, создавая быстрые и безопасные сайты!",
      link: "#"
    },
    {
      id: 3,
      src: "https://asb-studio.ru/sites/default/files/styles/image_teaser_service/public/node/service/Website-development.jpg",
      orientation: "vertical",
      title: "Мобильная разработка",
      description:
        "Запустим приложение, которое привлечёт клиентов и увеличит продажи.",
      link: "#"
    },
    {
      id: 4,
      src: "https://asb-studio.ru/sites/default/files/styles/image_teaser_service/public/node/service/Website-development.jpg",
      orientation: "horizontal",
      title: "Разработка Ui/Ux",
      description:
        "Создаём удобные интерфейсы, повышающие конверсию и лояльность аудитории.",
      link: "#"
    },
    {
      id: 5,
      src: "https://asb-studio.ru/sites/default/files/styles/image_teaser_service/public/node/service/Website-development.jpg",
      orientation: "vertical",
      title: "Комплексное решение",
      description: "Охватываем цикл: от идеи до запуска, экономя ресурсы.",
      link: "#"
    },
    {
      id: 6,
      src: "https://asb-studio.ru/sites/default/files/styles/image_teaser_service/public/node/service/Website-development.jpg",
      orientation: "horizontal",
      title: "Веб-поддержка",
      description:
        "Поддержим сайт стабильно, развиваем функции, гарантируя спокойствие бизнеса.",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="container flex-grow mx-auto mt-5 mb-5 px-6 max-w-[1280px]">
        <ShadowTitle text="Услуги веб-разработки" ratio={0.3} />

        <section className="relative overflow-hidden pb-[50px]">
          <div className="block text-dark-2 z-10 relative">
            <PageTitle title="Услуги веб-разработки" />
            <PageSubtitle subtitle="Мы создаем мощные бренды и инновационные решения" />
          </div>
        </section>

        <section className="relative overflow-hidden z-10">
          <UncoverImage
            services={servicesData}
            slicesTotal={5}
            slicesColor="#1f2029"
            covered={true}
          />
        </section>
      </div>
    </div>
  );
}
