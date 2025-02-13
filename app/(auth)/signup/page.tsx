"use client";

import React, { FormEvent, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Input, Button } from "@heroui/react";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";

export default function SignupPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible((prev) => !prev);

  // Проверяем роль пользователя при монтировании (и при смене session/status).
  useEffect(() => {
    // Пока статус = "loading", NextAuth ещё не знает, залогинен ли пользователь.
    if (status === "loading") return;

    // Если пользователь не авторизован — отправляем на /login.
    if (!session) {
      router.replace("/login");
      return;
    }

    // Если авторизован, но не ADMIN, можно редиректить куда угодно,
    // например, на главную или на страницу /403 (нет доступа).
    if (session.user.role !== "ADMIN") {
      router.replace("/");
    }
  }, [status, session, router]);

  // Сам обработчик формы
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });
      if (res.ok) {
        alert("Регистрация успешна");
        router.push("/login");
      } else {
        const data = await res.json();
        alert(data.error || "Ошибка при регистрации");
      }
    } catch {
      alert("Произошла ошибка при регистрации");
    }
  };

  // Пока статус "loading" — можно показать спиннер/заглушку
  if (status === "loading") {
    return <p className="text-center mt-10">Загрузка...</p>;
  }

  // Если пользователь не admin — скрываем форму (или показываем пустую страницу),
  // так как уже есть редирект в useEffect.
  // На случай, если редирект не сработает мгновенно.
  if (!session || session.user.role !== "ADMIN") {
    return null;
  }

  return (
    <div className="min-h-screen text-gray-900 dark:text-gray-100 flex flex-col mt-10">
      <div className="flex flex-col items-center px-6 py-12 sm:mx-auto sm:w-full sm:max-w-lg">
        <h2 className="text-center text-2xl font-bold tracking-tight sm:text-2xl/9">
          Создать учётную запись
        </h2>
        <form
          onSubmit={handleSubmit}
          className="mt-10 w-full flex flex-col gap-6"
        >
          <Input
            type="email"
            label="Email"
            placeholder="Введите ваш email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            variant="bordered"
            radius="sm"
          />
          <Input
            label="Пароль"
            placeholder="Введите ваш пароль"
            type={isVisible ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            variant="bordered"
            radius="sm"
            endContent={
              <button
                type="button"
                onClick={toggleVisibility}
                className="focus:outline-none"
                aria-label="toggle password visibility"
              >
                {isVisible ? (
                  <EyeOff className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <Eye className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
          />
          <Button
            type="submit"
            color="primary"
            radius="sm"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-sm h-14"
          >
            Зарегистрироваться
          </Button>
        </form>
        <p className="mt-10 text-center text-sm text-gray-500 dark:text-gray-400">
          Уже есть учётная запись?{" "}
          <Link
            href="/login"
            className="font-semibold text-blue-600 hover:text-blue-500 dark:text-blue-400"
          >
            Войти
          </Link>
        </p>
      </div>
    </div>
  );
}
