"use client";
import ShadowTitle from "@/app/components/ShadowTitle";
import CasesSlider, { Project } from "@/app/components/CasesSlider";

const projects: Project[] = [
  {
    id: 1,
    title: "SnabExpress",
    description: "Пример B2B площадки по промышленному оборудованию.",
    category: "Веб разработка",
    images: [
      "/assets/jpg/portfolio/snabexpress-1.jpg",
      "/assets/jpg/portfolio/snabexpress-2.jpg",
      "/assets/jpg/portfolio/snabexpress-3.jpg"
    ],
    link: "#"
  },
  {
    id: 2,
    title: "LuckyPet",
    description: "Онлайн-магазин товаров для домашних животных.",
    category: "Веб разработка",
    images: [
      "/assets/jpg/portfolio/luckypet-1.jpg",
      "/assets/jpg/portfolio/luckypet-2.jpg",
      "/assets/jpg/portfolio/luckypet-3.jpg"
    ],
    link: "#"
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
