"use client";
import ShadowTitle from "@/app/components/ShadowTitle";
import CasesSlider from "@/app/components/CasesSlider";
import { Project } from "@/types/cases-slider";

const projects: Project[] = [
  {
    id: 1,
    title: "SnabExpress",
    description: "Пример B2B площадки по промышленному оборудованию.",
    category: "Веб разработка",
    images: [
      "/assets/jpg/portfolio/items/snabexpress/snabexpress-4.jpg",
      "/assets/jpg/portfolio/items/snabexpress/snabexpress-6.jpg",
      "/assets/jpg/portfolio/items/snabexpress/snabexpress-7.jpg"
    ],
    link: "/portfolio/snabekspresscentr"
  },
  {
    id: 2,
    title: "LuckyPet",
    description: "Онлайн-магазин товаров для домашних животных.",
    category: "Веб разработка",
    images: [
      "/assets/jpg/portfolio/items/luckypet/luckypet-3.jpg",
      "/assets/jpg/portfolio/items/luckypet/luckypet-5.jpg",
      "/assets/jpg/portfolio/items/luckypet/luckypet-6.jpg"
    ],
    link: "/portfolio/luckypet"
  },
  {
    id: 3,
    title: "Росгеоресурс",
    description: "Корпоративный сайт по бурению скважин на воду.",
    category: "Веб разработка",
    images: [
      "/assets/jpg/portfolio/items/rosgeoresurs/rosgeoresurs-16.jpg",
      "/assets/jpg/portfolio/items/rosgeoresurs/rosgeoresurs-11.jpg",
      "/assets/jpg/portfolio/items/rosgeoresurs/rosgeoresurs-5.jpg"
    ],
    link: "/portfolio/rosgeoresurs"
  }
];

export default function CasesPage() {
  return (
    <div className="relative w-full h-[calc(100vh-150px)] overflow-hidden">
      <div className="container flex-grow mx-auto mt-5 mb-5 px-6 min-h-screen max-w-[1280px]">
        <ShadowTitle text="Наши Кейсы" ratio={0.3} />
      </div>
      <CasesSlider projects={projects} />
    </div>
  );
}
