"use client";

import React from "react";
import ShadowTitle from "@/app/components/ShadowTitle";
import PageTitle from "@/app/components/PageTitle";
import PageSubtitle from "@/app/components/PageSubtitle";

import PortfolioItemHero from "@/app/components/PortfolioItemHero";
import PortfolioItemSolution from "@/app/components/PortfolioItemSolution";
import PortfolioItemGallery from "@/app/components/PortfolioItemGallery";

const portfolioData = {
  title: "Lucky Pet",
  subtitle: "премиум корм для домашних питомцев",
  hero: [
    {
      alt: "Lucky Pet",
      src: "/assets/jpg/portfolio/items/luckypet/luckypet.jpg",
      text: "Интернет магазин Lucky Pet был разработан с целью предоставления посетителям веб сайта компании выполнять заказ на приобретения премиум корма для кошек и собак, с возможностью выбора доставки и оплаты прямо на сайте."
    }
  ],
  solution: {
    imageSrc: "/assets/jpg/portfolio/items/luckypet/luckypet-1.jpg",
    imageAlt: "Lucky Pet",
    taskTitle: "Задача",
    taskText: `
      <p>Наша задача заключалась в том, что бы разработать интернет магазин, на котором можно будет выкладывать товары компании Lucky Pet премиум сегмента.</p>
      <p>Предоставить возможность заказа товаров корма для собак и кошек прямо сайте компании Lucky Pet, с возможностью оплатить его резе Яндекс Касса.</p>
      <p>Предоставить возможность администраторам веб сайта создавать собственные виды доставки для клиентов компании.</p>
    `,
    solutionTitle: "Решение",
    solutionText: `
      <p>Мы долго не стали думать над выбором CMS и сразу приняли решения делать веб сайт на CMS Drupal, что устроило клиента сразу, так как ему не хотелось решения на 1С Битрикс.</p>
      <p>На сайте был разработан модуль оплаты Яндекс Кассы, так как это было основное требование клиента, что бы посетители сайта при заказе товаров могли совершать сразу же оплату на сайте, и именно через сервис Яндекс Кассы.</p>
      <p>Так же была разработана система скидок и промо кодов для клиентов, а так же партнеров компании Lucky Pet.</p>
    `
  },
  gallery: [
    "/assets/jpg/portfolio/items/luckypet/luckypet-2.jpg",
    "/assets/jpg/portfolio/items/luckypet/luckypet-3.jpg",
    "/assets/jpg/portfolio/items/luckypet/luckypet-5.jpg",
    "/assets/jpg/portfolio/items/luckypet/luckypet-6.jpg",
    "/assets/jpg/portfolio/items/luckypet/luckypet-7.jpg",
    "/assets/jpg/portfolio/items/luckypet/luckypet-9.jpg"
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
