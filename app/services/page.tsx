"use client";

import ShadowTitle from "@/app/components/ShadowTitle";
import PageTitle from "@/app/components/PageTitle";
import PageSubtitle from "@/app/components/PageSubtitle";

export default function ServicesPage() {
  return (
    <div className="container flex-grow mx-auto mt-5 mb-5 px-6 min-h-screen max-w-[1280px]">
      <ShadowTitle text="Услуги веб-разработки" ratio={0.3} />
      <section className="block text-default z-10 relative">
        <PageTitle title="Услуги веб-разработки" />
        <PageSubtitle subtitle="Мы создаем мощные бренды и инновационные решения" />
      </section>
    </div>
  );
}
