import Link from "next/link";
import ShadowTitle from "@/app/components/ShadowTitle";
import PageTitle from "@/app/components/PageTitle";
import PageSubtitle from "@/app/components/PageSubtitle";

export default function PageNotFound() {
  return (
    <div className="container flex-grow mx-auto mt-5 mb-5 px-6 min-h-screen max-w-[1280px]">
      <ShadowTitle text="Ошибка 404" ratio={0.3} />
      <section className="block text-default z-10 relative">
        <PageTitle title="Ошибка 404" />
        <PageSubtitle subtitle="Страница не найдена" />
      </section>
      <section className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8 z-10 relative">
        <div className="text-center">
          <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
            Извините, мы не смогли найти страницу, которую вы ищете.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/"
              className="font-magistral-bold text-dark-2 dark:text-white"
            >
              На главную
            </Link>
            <Link
              href="/contact"
              className="font-magistral-bold text-dark-2 dark:text-white"
            >
              Контакты <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
