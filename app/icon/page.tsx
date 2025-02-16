"use client";

import ShadowTitle from "@/app/components/ShadowTitle";
import PageTitle from "@/app/components/PageTitle";
import PageSubtitle from "@/app/components/PageSubtitle";
import {
  Icon1,
  Icon2,
  Icon3,
  Icon4,
  Icon5,
  Icon6,
  Icon7,
  Icon8,
  Icon9,
  Icon10,
  Icon11,
  Icon12,
  Icon13,
  Icon14,
  Icon15,
  Icon16,
  Icon17,
  Icon18,
  Icon19,
  Icon20,
  Icon21,
  Icon22,
  Icon23,
  Icon24,
  Icon25,
  Icon26,
  Icon27,
  Icon28,
  Icon29,
  Icon30,
  Icon31,
  Icon32,
  Icon33,
  Icon34,
  Icon35,
  Icon36,
  Icon37,
  Icon38,
  Icon39,
  Icon40,
  Icon41,
  Icon42,
  Icon43,
  Icon44,
  Icon45,
  Icon46,
  Icon47,
  Icon48,
  Icon49,
  Icon50,
  Icon51,
  Icon52,
  Icon53,
  Icon54,
  Icon55,
  Icon56,
  Icon57,
  Icon58,
  Icon59
} from "@/app/components/Icons";

export default function IconsPage() {
  const iconsArray = [
    Icon1,
    Icon2,
    Icon3,
    Icon4,
    Icon5,
    Icon6,
    Icon7,
    Icon8,
    Icon9,
    Icon10,
    Icon11,
    Icon12,
    Icon13,
    Icon14,
    Icon15,
    Icon16,
    Icon17,
    Icon18,
    Icon19,
    Icon20,
    Icon21,
    Icon22,
    Icon23,
    Icon24,
    Icon25,
    Icon26,
    Icon27,
    Icon28,
    Icon29,
    Icon30,
    Icon31,
    Icon32,
    Icon33,
    Icon34,
    Icon35,
    Icon36,
    Icon37,
    Icon38,
    Icon39,
    Icon40,
    Icon41,
    Icon42,
    Icon43,
    Icon44,
    Icon45,
    Icon46,
    Icon47,
    Icon48,
    Icon49,
    Icon50,
    Icon51,
    Icon52,
    Icon53,
    Icon54,
    Icon55,
    Icon56,
    Icon57,
    Icon58,
    Icon59
  ];

  return (
    <div className="container flex-grow mx-auto mt-5 mb-5 px-6 min-h-screen max-w-[1280px]">
      <ShadowTitle text="Иконки демо" ratio={0.3} />
      <section className="block text-default z-10 relative">
        <PageTitle title="Иконки демо" />
        <PageSubtitle subtitle="Мы создаем мощные бренды и инновационные решения" />
      </section>
      <section className="block text-default z-10 relative mt-10">
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-4">
          {iconsArray.map((IconComponent, index) => (
            <div key={index} className="p-4 text-center">
              <IconComponent className="fill-dark-4 dark:fill-white" />
              <p className="text-dark-4 dark:text-white mt-2">{`Icon${index + 1}`}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
