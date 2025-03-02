"use client";

import ShadowTitle from "@/app/components/ShadowTitle";
import PageTitle from "@/app/components/PageTitle";
import PageSubtitle from "@/app/components/PageSubtitle";
import { GoogleMapComponent } from "@/app/components/GoogleMapComponent";
import ContactSubmissionSimple from "@/app/components/ContactSubmissionSimple";
import { ToastProvider } from "@heroui/react";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Оборачиваем всю страницу ToastProvider */}
      <ToastProvider placement="top-center" toastOffset={60} />

      <div className="container flex-grow mx-auto mt-5 mb-5 px-6 max-w-[1280px]">
        <ShadowTitle text="Контакты" ratio={0.3} />
        <section className="relative overflow-hidden pb-[50px]">
          <div className="block text-dark-2 z-10 relative">
            <PageTitle title="Наши контакты" />
            <PageSubtitle subtitle="Мы создаем мощные бренды и инновационные решения" />
          </div>
        </section>
        <section className="relative overflow-hidden">
          <div className="block z-10 relative text-dark-2 dark:text-white">
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
              <ContactSubmissionSimple />
              <div className="text-sm text-dark-2 dark:text-white flex flex-col gap-6">
                <div className="bg-gray-100/50 dark:bg-dark-4 p-4 pb-6 lg:p-6 lg:pb-8 rounded-lg">
                  <h3 className="text-xl font-bold uppercase mb-4">
                    Позвонить нам
                  </h3>
                  <p className="mb-3">8 (800) 505-95-91</p>
                  <p>8 (812) 608-69-91</p>
                </div>
                <div className="bg-gray-100/50 dark:bg-dark-4 p-4 pb-6 lg:p-6 lg:pb-8 rounded-lg">
                  <h3 className="text-xl font-bold uppercase mb-4">Где мы</h3>
                  <p className="mb-2">350003, Краснодарский край,</p>
                  <p className="mb-2">г. Краснодар, пр. Чекистов, 4,</p>
                  <p>микрорайон Юбилейный</p>
                </div>
                <div className="bg-gray-100/50 dark:bg-dark-4 p-4 pb-6 lg:p-6 lg:pb-8 rounded-lg">
                  <h3 className="text-xl font-bold uppercase mb-4">
                    Написать нам
                  </h3>
                  <a className="text-xl" href="mailto:support@asb-studio.ru">
                    support@asb-studio.ru
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="relative overflow-hidden mt-10">
        <h5 className="font-magistral tracking-wider text-xl md:text-2xl text-center absolute max-w-[360px] mt-[10%] ml-auto mr-auto left-0 right-0 z-20">
          350003, Краснодарский край, г. Краснодар, пр. Чекистов, 4
        </h5>
        <div className="mt-5">
          <GoogleMapComponent />
        </div>
      </section>
    </div>
  );
}
