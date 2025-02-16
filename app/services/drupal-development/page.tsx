"use client";

import React from "react";
import ShadowTitle from "@/app/components/ShadowTitle";
import PageTitle from "@/app/components/PageTitle";
import PageSubtitle from "@/app/components/PageSubtitle";
import Advantages from "@/app/components/Advantages";
import {
  Icon5,
  Icon33,
  Icon35,
  Icon36,
  Icon37,
  Icon38,
  Icon39,
  Icon40,
  Icon41,
  Icon42,
  Icon43,
  Icon44,
  Icon45,
  Icon46,
  Icon47,
  Icon48,
  Icon49,
  Icon50,
  Icon51,
  Icon52,
  Icon53,
  Icon54
} from "@/app/components/Icons";
import Image from "next/image";
import Suggest from "@/app/components/Suggest";

export default function DrupalDevelopmentPage() {
  const advantagesData = [
    {
      icon: Icon35,
      title: "Минимизированное время разработки веб сайта"
    },
    {
      icon: Icon36,
      title: "Актуальные цены веб разработки"
    },
    {
      icon: Icon37,
      title: "Код соответствует мировым стандартам"
    },
    {
      icon: Icon33,
      title: "Выделенный менеджер под проект"
    },
    {
      icon: Icon38,
      title: "Веб сайт SEO-оптимизарован"
    },
    {
      icon: Icon39,
      title: "Объективные сроки разработки веб сайта"
    },
    {
      icon: Icon40,
      title: "Учитываем опыт UX/UI"
    },
    {
      icon: Icon41,
      title: "Исправное состояние объекта"
    }
  ];

  const suggestData = [
    {
      icon: Icon5,
      heading: "Drupal разработка",
      description:
        "Наша команда занимается разработкой профессиональных, надежных, высоконагруженных систем в CMS Drupal. Мы можем удовлетворить все потребности клиентов."
    },
    {
      icon: Icon42,
      heading: "Разработка модулей на Drupal",
      description:
        "В зависимости от потребностей заказчика, наша команда специалистов разрабатывает новых с нуля модули под  CMS Drupal, и может доработать функционал любого другого модуля под Drupal соблюдая все API и стандарты ООП."
    },
    {
      icon: Icon43,
      heading: "Разработка темы на Drupal",
      description:
        "Мы участвуем в профессиональном развитии привлекательных, удобных для пользователя, высококачественных кросс-браузерных тем Drupal, что является одним из ключевых аспектов создание успешного и привлекательного веб-сайта."
    },
    {
      icon: Icon44,
      heading: "Интеграция по API",
      description:
        "Наши специалисты разработают модуль для интеграцию с любым внешним источником вашего веб сайта, так как мы имеем большой опыт в данной сфере. К примеру с такими ресурсами как 1С Бухгалтерия, 1С Склад, Битрикс-24, платежные сервисы, сервис доставки и многое другое."
    },
    {
      icon: Icon45,
      heading: "Drupal 8-11 миграция",
      description:
        "Наши специалисты предлагают оптимальное решение для переноса сайта с Drupal 6 или Drupal 7, или любых других CMS на Drupal 8-11, учитывая все текущие и желаемые функциональные возможности, бюджет и цели."
    },
    {
      icon: Icon46,
      heading: "Команда разработчиков",
      description:
        "У нас специализированная команда разработчиков Drupal для решение любой задачи веб-разработки и доработке уже действующего функционала на Drupal."
    }
  ];

  const stageData = [
    {
      icon: Icon47,
      title: "Калькуляторы расчета стоимости"
    },
    {
      icon: Icon48,
      title: "Многоуровневые анкеты-опросники"
    },
    {
      icon: Icon49,
      title: "Импорт каталога из источников"
    },
    {
      icon: Icon50,
      title: "Интеграции с системами аналитики"
    },
    {
      icon: Icon51,
      title: "Интеграции с сервисами доставки"
    },
    {
      icon: Icon52,
      title: "Интеграция с бухгалтерией и складом"
    },
    {
      icon: Icon53,
      title: "Интеграция с любым сервисом оплаты"
    },
    {
      icon: Icon54,
      title: "Сложные фильтры в каталоге товаров"
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="container flex-grow mx-auto mt-5 mb-5 px-6 max-w-[1280px]">
        <ShadowTitle text="Drupal разработка" ratio={0.3} />
        <section className="relative overflow-hidden pb-[50px]">
          <div className="block text-dark-2 z-10 relative">
            <PageTitle title="Drupal разработка" />
            <PageSubtitle subtitle="pазработка, верстка веб сайтов на CMS Drupal" />
          </div>
        </section>
        <section className="block z-10 relative">
          <div className="img-wrap mt-7 lg:mt-16">
            <Image
              alt="Drupal разработка"
              src="/assets/jpg/drupal-development.jpg"
              width={1200}
              height={500}
              className="img-mask"
            />
          </div>
        </section>

        <Advantages
          heading="Разработка на Drupal"
          subtitle="это большие преимущества и хороший фундамент будущего веб сайта"
          advantages={advantagesData}
        />

        <Suggest
          heading="Мы предоставляем следующие услуги"
          items={suggestData}
        />

        <Advantages
          heading="Основной функционал"
          subtitle="почему выбирают Drupal"
          advantages={stageData}
        />
      </div>
    </div>
  );
}
