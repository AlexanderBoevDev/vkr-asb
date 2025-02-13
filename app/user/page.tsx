import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import ShadowTitle from "@/app/components/ShadowTitle";
import PageTitle from "@/app/components/PageTitle";
import PageSubtitle from "@/app/components/PageSubtitle";

export default async function UserPage() {
  // получаем сессию на сервере
  const session = await getServerSession(authOptions);

  // если нет сессии — перенаправляем на /login (или любую другую)
  if (!session) {
    redirect("/login");
  }

  return (
    <div className="container flex-grow mx-auto mt-5 mb-5 px-6 min-h-screen max-w-[1280px]">
      <ShadowTitle text="Личный кабинет" ratio={0.3} />
      <section className="block text-default z-10 relative">
        <PageTitle title="Личный кабинет пользователя" />
        <PageSubtitle subtitle="Мы создаем мощные бренды и инновационные решения" />
      </section>
      <section className="block text-default">
        <p>Добро пожаловать, {session.user?.email}!</p>
      </section>
    </div>
  );
}
