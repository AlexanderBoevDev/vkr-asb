"use client";

import React from "react";
import ShadowTitle from "@/app/components/ShadowTitle";
import PageTitle from "@/app/components/PageTitle";
import PageSubtitle from "@/app/components/PageSubtitle";

export default function MobileDevelopmentPage() {
  return (
    <div className="min-h-screen">
      <div className="container flex-grow mx-auto mt-5 mb-5 px-6 max-w-[1280px]">
        <ShadowTitle text="Услуги веб-разработки" ratio={0.3} />

        <section className="relative overflow-hidden pb-[50px]">
          <div className="block text-dark-2 z-10 relative">
            <PageTitle title="Услуги веб-разработки" />
            <PageSubtitle subtitle="Мы создаем мощные бренды и инновационные решения" />
          </div>
        </section>

        <section className="relative overflow-hidden z-10"></section>
      </div>
    </div>
  );
}
