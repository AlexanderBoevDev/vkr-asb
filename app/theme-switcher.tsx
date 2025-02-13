"use client";

import { useTheme as useNextTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, SunMoon } from "lucide-react";

/**
 * Переключатель тем: light -> dark -> system -> light -> ...
 */
export default function ThemeSwitcher() {
  const { setTheme } = useNextTheme();
  const [mounted, setMounted] = useState(false);

  // Индекс: 0=light, 1=dark, 2=system
  const [themeIndex, setThemeIndex] = useState(0);

  // Три темы, каждая с иконкой
  const themes = [
    { name: "light", icon: <Sun /> },
    { name: "dark", icon: <Moon /> },
    { name: "system", icon: <SunMoon /> }
  ];

  // По клику переключаем индекс по кругу, применяем тему
  const toggleTheme = () => {
    const nextIndex = (themeIndex + 1) % themes.length;
    setThemeIndex(nextIndex);
    setTheme(themes[nextIndex].name);
  };

  // Когда компонент смонтирован, разрешаем рендер
  useEffect(() => {
    setMounted(true);
  }, []);

  // Если ещё не смонтировались, не рендерим (чтобы избежать «глюков»)
  if (!mounted) return null;

  return (
    <button onClick={toggleTheme} className="ml-4 text-dark-1 dark:text-white">
      {themes[themeIndex].icon}
    </button>
  );
}
