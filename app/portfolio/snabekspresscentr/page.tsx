"use client";

import React from "react";
import ShadowTitle from "@/app/components/ShadowTitle";
import PageTitle from "@/app/components/PageTitle";
import PageSubtitle from "@/app/components/PageSubtitle";

import PortfolioItemHero from "@/app/components/PortfolioItemHero";
import PortfolioItemSolution from "@/app/components/PortfolioItemSolution";
import PortfolioItemGallery from "@/app/components/PortfolioItemGallery";

const portfolioData = {
  title: "СнабЭкспрессЦентр",
  subtitle:
    "Продажа промышленного оборудования, запасные части и комплектующие",
  hero: [
    {
      alt: "СнабЭкспрессЦентр",
      src: "/assets/jpg/portfolio/items/snabexpress/snabexpress.jpg",
      text: "Основными направлениями деятельности нашей организации является поставка электрооборудования и комплектующих от зарубежных и отечественных производителей, а также решение технических задач по проектированию и монтажу систем автоматизации зданий и сооружений."
    }
  ],
  solution: {
    imageSrc: "/assets/jpg/portfolio/items/snabexpress/snabexpress-1.jpg",
    imageAlt: "СнабЭкспрессЦентр",
    taskTitle: "Задача",
    taskText: `
      <p>Разработать новый веб сайт с каталогом производителей комплектующих и промышленного оборудования. Так же предоставить посетителям веб сайта каталог товаров, в котором они смогут заказать промышленные комплектующие от Европейских производителей.</p>
      <p>Предоставить возможность посетителем ознакомиться с производителями и сформировать приглашение компании СнабЭкспрессЦентр на участие в тендере.</p>
    `,
    solutionTitle: "Решение",
    solutionText: `
      <p>Был полностью пересмотрен вебсайт, и проделано масса работы по анализу и статистики проекта. Из чего было принято переделать полностью концепт веб сайта доработав новые разделы: каталог товаров, каталог производителей.</p>
      <p>Предоставить посетителям веб сайта формировать заказы, положив товары в корзину и совершить полноценное оформления заказа как в интернет-магазине.</p>
      <p>Предоставить посетителем вебсайта удобно понятный интерфейс, с человека понятным каталогом продукции, которую продает компания СнабЭкспрессЦентр.</p>
    `
  },
  gallery: [
    "/assets/jpg/portfolio/items/snabexpress/snabexpress-4.jpg",
    "/assets/jpg/portfolio/items/snabexpress/snabexpress-16.jpg",
    "/assets/jpg/portfolio/items/snabexpress/snabexpress-7.jpg",
    "/assets/jpg/portfolio/items/snabexpress/snabexpress-8.jpg",
    "/assets/jpg/portfolio/items/snabexpress/snabexpress-9.jpg",
    "/assets/jpg/portfolio/items/snabexpress/snabexpress-10.jpg",
    "/assets/jpg/portfolio/items/snabexpress/snabexpress-11.jpg",
    "/assets/jpg/portfolio/items/snabexpress/snabexpress-14.jpg",
    "/assets/jpg/portfolio/items/snabexpress/snabexpress-15.jpg",
    "/assets/jpg/portfolio/items/snabexpress/snabexpress-6.jpg"
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
