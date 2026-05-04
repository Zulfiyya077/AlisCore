// src/hooks/useTheme.ts
import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme-preference');
    // Default first visit is light; dark only after the user toggles to dark (stored in localStorage).
    const shouldUseDark = savedTheme === 'dark';

    setIsDark(shouldUseDark);
    document.documentElement.classList.toggle('dark', shouldUseDark);
  }, []);

  const toggleTheme = () => {
    setIsDark((prev: boolean) => {
      const nextThemeIsDark = !prev;
      document.documentElement.classList.toggle('dark', nextThemeIsDark);
      localStorage.setItem('theme-preference', nextThemeIsDark ? 'dark' : 'light');
      return nextThemeIsDark;
    });
  };

  return { isDark, toggleTheme };
};