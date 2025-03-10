"use client";

import React from "react";
import ShadowTitle from "@/app/components/ShadowTitle";
import PageTitle from "@/app/components/PageTitle";
import PageSubtitle from "@/app/components/PageSubtitle";
import Advantages from "@/app/components/Advantages";
import {
  Icon1,
  Icon2,
  Icon3,
  Icon4,
  Icon5,
  Icon6,
  Icon7,
  Icon8,
  Icon9,
  Icon10,
  Icon11,
  Icon12,
  Icon13,
  Icon14,
  Icon15,
  Icon16,
  Icon17,
  Icon18,
  Icon19,
  Icon20,
  Icon21
} from "@/app/components/Icons";
import Image from "next/image";
import Suggest from "@/app/components/Suggest";
import StageByStage from "@/app/components/StageByStage";

export default function WebDevelopmentPage() {
  const advantagesData = [
    {
      icon: Icon1,
      title: "Популярная CMS Drupal"
    },
    {
      icon: Icon2,
      title: "Создание стильного и эстетичного дизайна"
    },
    {
      icon: Icon3,
      title: "Регулярное обновление безопасности"
    },
    {
      icon: Icon4,
      title: "Адаптивная верстка под все виды мобильных устройств"
    },
    {
      icon: Icon5,
      title: "Веб-сайт оптимизирован под SEO"
    },
    {
      icon: Icon6,
      title: "Масштабируемость веб-сайта"
    },
    {
      icon: Icon7,
      title: "Удобная панель администрирования веб-сайта"
    },
    {
      icon: Icon8,
      title: "Не нужно платить за лицензии"
    }
  ];

  const suggestData = [
    {
      icon: Icon9,
      heading: "Личный кабинет",
      description:
        "Площадка для индивидуальной работы с вашими клиентами - персональные цены, предложение, скидки и акции, дисплей системы лояльности, оповещение и напоминание."
    },
    {
      icon: Icon10,
      heading: "Корпоративный сайт",
      description:
        "Корпоративный сайт подойдет как среднему, так и крупному бизнесу. Достоинство корпоративного сайта в его гибкости и многообразии информации, например в такой сайт могут быть включены разделы каталога услуг или продукции или блога компании. В корпоративном сайте нет ограничений по количеству страниц."
    },
    {
      icon: Icon11,
      heading: "Интернет-магазин",
      description:
        "Решили продавать в интернете товары или услуги? Интернет-магазин станет неотъемлемой частью Вашего бизнеса в интернете. Принимайте оплату картами или электронными деньгами. Продавайте по всему миру и развивайтесь. Интеграция с бухгалтерией и складом. Сделанный нами магазин будет иметь все инструменты для Вашей торговли онлайн."
    },
    {
      icon: Icon12,
      heading: "Веб портал",
      description:
        "Веб портал – это крупномасштабный портал, для контакта организации с клиентами, и для обмена информацией между посетителями сайта. В крупномасштабный портал входят такие типы веб сайтов как доска объявлений, размещение услуг компаний, объявления о продаже автомобилей, квартир т.п."
    }
  ];

  const stageData = [
    {
      icon: Icon13,
      title: "Согласование структуры и функциональности"
    },
    {
      icon: Icon14,
      title: "Подготовка прототипа и макета веб сайта"
    },
    {
      icon: Icon15,
      title: "Разработка frontend, внешнего вида веб сайта"
    },
    {
      icon: Icon16,
      title: "Backend разработка внутреннего кода веб сайта"
    },
    {
      icon: Icon17,
      title: "Проверка кода на его валидность"
    },
    {
      icon: Icon18,
      title: "Настройка веб хостинга под проект"
    },
    {
      icon: Icon19,
      title: "Тестирование веб сайта на безопасность"
    },
    {
      icon: Icon20,
      title: "Наполнение содержимым и форматирование изображений"
    },
    {
      icon: Icon21,
      title: "Запуск веб сайта"
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="container flex-grow mx-auto mt-5 mb-5 px-6 max-w-[1280px]">
        <ShadowTitle text="Разработка веб сайтов" ratio={0.3} />
        <section className="relative overflow-hidden pb-[50px]">
          <div className="block text-dark-2 z-10 relative">
            <PageTitle title="Разработка веб сайтов" />
            <PageSubtitle subtitle="специализированная разработка сайта" />
          </div>
        </section>
        <section className="block z-10 relative">
          <div className="img-wrap mt-7 lg:mt-16">
            <Image
              alt="Разработка веб сайтов"
              src="/assets/jpg/web-development.jpg"
              width={1200}
              height={500}
              className="img-mask"
            />
          </div>
        </section>

        <Advantages
          heading="Преймущества"
          subtitle="почему у нас выгоднее разработка веб сайта"
          advantages={advantagesData}
        />

        <Suggest
          heading="Мы предлагаем"
          subtitle="создание веб сайта под ключ"
          items={suggestData}
        />

        <StageByStage
          heading="Этапы разработки веб сайта"
          subtitle="этап за этапом до запуска проекта"
          stage={stageData}
        />
      </div>
    </div>
  );
}
