"use client";

import React from "react";
import ShadowTitle from "@/app/components/ShadowTitle";
import PageTitle from "@/app/components/PageTitle";
import PageSubtitle from "@/app/components/PageSubtitle";
import {
  Icon22,
  Icon23,
  Icon24,
  Icon25,
  Icon26,
  Icon27,
  Icon28,
  Icon29
} from "@/app/components/Icons";
import Image from "next/image";
import Advantages from "@/app/components/Advantages";
import Suggest from "@/app/components/Suggest";

export default function MobileDevelopmentPage() {
  const suggestData = [
    {
      icon: Icon22,
      heading: "Нативные приложения",
      description:
        "Мы предоставляем индивидуальные услуги разработки для собственных мобильных приложений, которые обеспечивают высокую степень целостности и производительности. Мы разрабатываем приложение для ключевых платформ, таких как Android и iOS."
    },
    {
      icon: Icon23,
      heading: "Кроссплатформенные приложение",
      description:
        "Кроссплатформенные приложение\n" +
        "Наша команда обладает большим опытом разработки кроссплатформенных мобильных приложений, которые позволят вам ускорить время выхода на рынок вашей деятельности, и сократить затраты."
    }
  ];

  const stageData = [
    {
      icon: Icon24,
      title: "Objective-C"
    },
    {
      icon: Icon25,
      title: "Swift"
    },
    {
      icon: Icon26,
      title: "React Native"
    },
    {
      icon: Icon27,
      title: "Java"
    },
    {
      icon: Icon28,
      title: "Flutter"
    },
    {
      icon: Icon29,
      title: "Kotlin"
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="container flex-grow mx-auto mt-5 mb-5 px-6 max-w-[1280px]">
        <ShadowTitle text="Мобильное приложение" ratio={0.3} />
        <section className="relative overflow-hidden pb-[50px]">
          <div className="block text-dark-2 z-10 relative">
            <PageTitle title="Мобильное приложение" />
            <PageSubtitle subtitle="разработка нативных и кроссплатформенных мобильных приложений" />
          </div>
        </section>
        <section className="block z-10 relative">
          <div className="img-wrap mt-7 lg:mt-16">
            <Image
              alt="Мобильное приложение"
              src="/assets/jpg/mobile-development.jpg"
              width={1200}
              height={500}
              className="img-mask"
            />
          </div>
        </section>
        <Suggest
          heading="Мы предоставляем услуги"
          subtitle="разработка приложения для мобильного устройства"
          items={suggestData}
        />
        <Advantages
          heading="Технологии"
          subtitle="какие технологии мы используем при разработке мобильного приложения"
          advantages={stageData}
        />
      </div>
    </div>
  );
}
