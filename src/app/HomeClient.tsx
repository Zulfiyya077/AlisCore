'use client';

import { useState, useEffect } from 'react';
import type { Language } from '@/types';
import { useTheme } from '@/hooks/useTheme';

// Components
import LoadingSplashScreen from '@/components/common/LoadingSplashScreen';
import { Navbar } from '@/components/common/Navbar';
import { Footer } from '@/components/common/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Services } from '@/components/sections/Services';
import { VendorExperience } from '@/components/sections/VendorExperience';
import { Portfolio } from '@/components/sections/Portfolio';
import { Contact } from '@/components/sections/Contact';

export default function HomeClient() {
  const [currentLang, setCurrentLang] = useState<Language>('en');
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  // Client-side mounting check
  useEffect(() => {
    setIsClient(true);
    // Load saved language
    const savedLang = localStorage.getItem('preferred-language') as Language;
    if (savedLang && ['az', 'en', 'es'].includes(savedLang)) {
      setCurrentLang(savedLang);
    }
  }, []);

  // Loading screen timer
  useEffect(() => {
    if (isClient) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [isClient]);

  // Scroll to section function
  const scrollToSection = (sectionId: string) => {
    if (!isClient) return;
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 64;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Track active section on scroll
  useEffect(() => {
    if (!isClient) return;
    
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'vendors', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isClient]);

  // Handle language change
  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
    if (isClient) {
      localStorage.setItem('preferred-language', lang);
    }
  };

  return (
    <>
      {/* Loading screen */}
      {isLoading && isClient && <LoadingSplashScreen />}
      
      <div 
        className={`min-h-screen transition-colors duration-300 ${
          isDark ? 'dark bg-gray-900 text-white' : 'bg-white text-black'
        } ${(isLoading && isClient) ? 'overflow-hidden' : ''}`}
        style={{
          opacity: (isLoading && isClient) ? 0 : 1,
          transition: 'opacity 0.5s ease-in-out'
        }}
      >
        <Navbar
          currentLang={currentLang}
          onLangChange={handleLanguageChange}
          isDark={isDark}
          onThemeToggle={toggleTheme}
          activeSection={activeSection}
          onNavigate={scrollToSection}
        />

        <main>
          <Hero
            currentLang={currentLang}
            isDark={isDark}
            onContactClick={() => scrollToSection('contact')}
          />

          <About
            currentLang={currentLang}
            isDark={isDark}
          />

          <Services
            currentLang={currentLang}
            isDark={isDark}
          />

          <VendorExperience
            currentLang={currentLang}
            isDark={isDark}
          />

          <Portfolio
            currentLang={currentLang}
            isDark={isDark}
          />

          <Contact
            currentLang={currentLang}
            isDark={isDark}
          />
        </main>

        <Footer
          currentLang={currentLang}
          isDark={isDark}
          onNavigate={scrollToSection}
        />
      </div>
    </>
  );
}
