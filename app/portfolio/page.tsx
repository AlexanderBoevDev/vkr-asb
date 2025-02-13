"use client";

import ShadowTitle from "@/app/components/ShadowTitle";
import PageTitle from "@/app/components/PageTitle";
import PageSubtitle from "@/app/components/PageSubtitle";

export default function PortfolioPage() {
  return (
    <div className="container flex-grow mx-auto mt-5 mb-5 px-6 min-h-screen max-w-[1280px]">
      <ShadowTitle text="Портфолио" ratio={0.3} />
      <section className="block text-default z-10 relative">
        <PageTitle title="Портфолио" />
        <PageSubtitle subtitle="Мы создаем мощные бренды и инновационные решения" />
      </section>
    </div>
  );
}
