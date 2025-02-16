"use client";

import React from "react";
import ShadowTitle from "@/app/components/ShadowTitle";
import PageTitle from "@/app/components/PageTitle";
import PageSubtitle from "@/app/components/PageSubtitle";
import {
  Icon15,
  Icon16,
  Icon17,
  Icon30,
  Icon31,
  Icon32,
  Icon33,
  Icon34
} from "@/app/components/Icons";
import Image from "next/image";
import Advantages from "@/app/components/Advantages";
import Suggest from "@/app/components/Suggest";

export default function WebSupportPage() {
  const advantagesData = [
    {
      icon: Icon30,
      title: "Проектирование и дизайн"
    },
    {
      icon: Icon15,
      title: "Разработка функциональности"
    },
    {
      icon: Icon16,
      title: "Работа с каталогом товаров/услуг"
    },
    {
      icon: Icon17,
      title: "Устранение ошибок в коде"
    }
  ];

  const suggestData = [
    {
      icon: Icon31,
      heading: "100% довольных клиентов",
      description:
        "Мы можем похвастаться 100 успешно выполненными проектами различной сложности-от модификации модулей до создания высоконагруженных веб-ресурсов."
    },
    {
      icon: Icon32,
      heading: "Обратная связь и отчетность",
      description:
        "Мы обеспечиваем регулярную обратную связь и поддержку. Вы всегда можете следить за ходом реализации проекта и запрашивать необходимую информацию у наших специалистов."
    },
    {
      icon: Icon34,
      heading: "Прозрачность и безопасность",
      description:
        "Мы гарантируем прозрачное и безопасное сотрудничество, наши проект менеджеры следят за процессом выполнения работы и гарантируют полную конфиденциальность разработанного кода."
    },
    {
      icon: Icon33,
      heading: "Надежные разработчики",
      description:
        "Все наши специалисты имеют высокую квалификацию и большой опыт. У нас вы найдете разработчиков, чьи навыки будут полностью соответствовать вашим требованиям."
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="container flex-grow mx-auto mt-5 mb-5 px-6 max-w-[1280px]">
        <ShadowTitle text="Поддержка веб сайтов" ratio={0.3} />
        <section className="relative overflow-hidden pb-[50px]">
          <div className="block text-dark-2 z-10 relative">
            <PageTitle title="Поддержка веб сайтов" />
            <PageSubtitle subtitle="решаем любые поставленные задачи по веб сайту" />
          </div>
        </section>
        <section className="block z-10 relative">
          <div className="img-wrap mt-7 lg:mt-16">
            <Image
              alt="Поддержка веб сайтов"
              src="/assets/jpg/managed-services.jpg"
              width={1200}
              height={500}
              className="img-mask"
            />
          </div>
        </section>

        <Advantages
          heading="Что входит в обслуживание веб сайта"
          subtitle="перечень услуг поддержки ваших веб проектов"
          advantages={advantagesData}
        />

        <Suggest heading="Преимущества работы с нами" items={suggestData} />
      </div>
    </div>
  );
}
