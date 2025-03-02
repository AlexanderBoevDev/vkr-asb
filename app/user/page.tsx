import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import ShadowTitle from "@/app/components/ShadowTitle";
import PageTitle from "@/app/components/PageTitle";
import PageSubtitle from "@/app/components/PageSubtitle";
import React from "react";
import UserDashboardClient from "@/app/components/UserDashboardClient";

export default async function UserPage() {
  // Проверяем сессию на сервере
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen">
      <div className="container flex-grow mx-auto mt-5 mb-5 px-6 max-w-[1280px]">
        <ShadowTitle text="Личный кабинет" ratio={0.3} />
        <section className="relative">
          <div className="block text-dark-2 z-10 relative">
            <PageTitle title="Личный кабинет" />
            <PageSubtitle subtitle="Личный кабинет администратора" />
          </div>
        </section>
        <section className="relative z-20">
          <div className="mt-6">
            <UserDashboardClient />
          </div>
        </section>
      </div>
    </div>
  );
}
