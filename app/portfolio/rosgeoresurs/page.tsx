"use client";

import React from "react";
import ShadowTitle from "@/app/components/ShadowTitle";
import PageTitle from "@/app/components/PageTitle";
import PageSubtitle from "@/app/components/PageSubtitle";

import PortfolioItemHero from "@/app/components/PortfolioItemHero";
import PortfolioItemSolution from "@/app/components/PortfolioItemSolution";
import PortfolioItemGallery from "@/app/components/PortfolioItemGallery";

const portfolioData = {
  title: "Росгеоресурс",
  subtitle:
    "корпоративный сайт по бурению скважин на воду",
  hero: [
    {
      alt: "Росгеоресурс",
      src: "/assets/jpg/portfolio/items/rosgeoresurs/rosgeoresurs.jpg",
      text: "Компания Росгеоресурс уже более 10 лет на рынке в сфере услуг бурения скважин на воду. Они представляют все виды бурения скважин на воду. Также компания выполняет работы по всей сопроводительной документации по бурению скважины на воду."
    }
  ],
  solution: {
    imageSrc: "/assets/jpg/portfolio/items/rosgeoresurs/rosgeoresurs-1.jpg",
    imageAlt: "Росгеоресурс",
    taskTitle: "Задача",
    taskText: `
      <p>Наша задача заключалась в том, чтобы менеджеры компании Росгеоресурс смогли грамотно рассказать о предоставляемых ими услугах удаленно клиентам. Показывая нужный раздел услуги на веб сайте для визуального восприятия клиента, какие работы будут проделаны по бурению скважины на воду, а так же этапы выполняемых работ.</p>
    `,
    solutionTitle: "Решение",
    solutionText: `
      <p>Мы разработали интерактивную инфографику на каждый раздел для визуального понимания структуры скважины на воду.</p>
      <p>Самое главное было то, что мы сделали в инфографике расположения буровой для бурения скважины на воду. Для визуального восприятия клиента компании Росгеоресурс сколько места понадобиться для того, что бы буровая смогла заехать на место бурения, и расположения инструментов для бурения скважины на воду.</p>
      <p>Была проведена большая работа по разработки полного брендбука компании Росгеоресурс.</p>
    `
  },
  gallery: [
    "/assets/jpg/portfolio/items/rosgeoresurs/rosgeoresurs-7.jpg",
    "/assets/jpg/portfolio/items/rosgeoresurs/rosgeoresurs-7.jpg",
    "/assets/jpg/portfolio/items/rosgeoresurs/rosgeoresurs-11.jpg",
    "/assets/jpg/portfolio/items/rosgeoresurs/rosgeoresurs-16.jpg",
    "/assets/jpg/portfolio/items/rosgeoresurs/rosgeoresurs-3.jpg",
    "/assets/jpg/portfolio/items/rosgeoresurs/rosgeoresurs-18.jpg"
  ]
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      <div className="container flex-grow mx-auto mt-5 mb-5 px-6 max-w-[1280px]">
        <ShadowTitle text={portfolioData.title} ratio={0.3} />
        <section className="relative overflow-hidden pb-[50px]">
          <div className="block text-dark-2 z-10 relative">
            <PageTitle title={portfolioData.title} />
            <PageSubtitle subtitle={portfolioData.subtitle} />
          </div>
        </section>
        {portfolioData.hero.map((item, index) => (
          <PortfolioItemHero
            key={index}
            alt={item.alt}
            src={item.src}
            text={item.text}
          />
        ))}
        <PortfolioItemSolution
          imageSrc={portfolioData.solution.imageSrc}
          imageAlt={portfolioData.solution.imageAlt}
          taskTitle={portfolioData.solution.taskTitle}
          taskText={portfolioData.solution.taskText}
          solutionTitle={portfolioData.solution.solutionTitle}
          solutionText={portfolioData.solution.solutionText}
        />
        <PortfolioItemGallery images={portfolioData.gallery} />
      </div>
    </div>
  );
}
