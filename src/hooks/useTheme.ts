// src/hooks/useTheme.ts
import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    // Force light mode on every page load.
    setIsDark(false);
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme-preference', 'light');
  }, []);

  const toggleTheme = () => {
    // Keep API compatible for components, but lock theme to light.
    setIsDark(false);
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme-preference', 'light');
  };

  return { isDark, toggleTheme };
};