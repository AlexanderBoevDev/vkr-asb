"use client";

import React, { useState, useEffect } from "react";
import { SessionProvider } from "next-auth/react";
import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  // Ждём, пока приложение смонтируется, чтобы избежать ошибок SSR/CSR
  useEffect(() => {
    setMounted(true);
  }, []);

  // Пока не смонтировано — не рендерим (иначе может «мигать» тема)
  if (!mounted) {
    return null;
  }

  return (
    <SessionProvider>
      <NextThemesProvider
        attribute="class"
        defaultTheme="dark" // По умолчанию подтягиваем системную тему
        enableSystem // Разрешаем учитывать OS настройки
      >
        <HeroUIProvider>{children}</HeroUIProvider>
      </NextThemesProvider>
    </SessionProvider>
  );
}
