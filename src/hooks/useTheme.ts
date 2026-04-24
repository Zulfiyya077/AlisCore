// src/hooks/useTheme.ts
import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [isDark] = useState<boolean>(false);

  useEffect(() => {
    // Force light mode globally.
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme-preference', 'light');
  }, []);

  const toggleTheme = () => {
    // Disabled intentionally: project is light-mode only.
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme-preference', 'light');
  };

  return { isDark, toggleTheme };
};