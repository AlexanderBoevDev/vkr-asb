import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import ShadowTitle from "@/app/components/ShadowTitle";
import PageTitle from "@/app/components/PageTitle";
import PageSubtitle from "@/app/components/PageSubtitle";
import React from "react";

export default async function UserPage() {
  // получаем сессию на сервере
  const session = await getServerSession(authOptions);

  // если нет сессии — перенаправляем на /login (или любую другую)
  if (!session) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen">
      <div className="container flex-grow mx-auto mt-5 mb-5 px-6 max-w-[1280px]">
        <ShadowTitle text="Личный кабинет" ratio={0.3} />
        <section className="relative overflow-hidden pb-[50px]">
          <div className="block text-dark-2 z-10 relative">
            <PageTitle title="Личный кабинет" />
            <PageSubtitle subtitle="Личный кабинет администратора" />
          </div>
        </section>
        <section className="relative overflow-hidden z-10">
          <p>Добро пожаловать, {session.user?.email}!</p>
        </section>
      </div>
    </div>
  );
}
