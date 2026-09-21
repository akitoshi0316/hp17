import { useState, useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import ProductsSection from './components/ProductsSection.tsx';
import AboutTechSection from './components/AboutTechSection.tsx';
import ContactSection from './components/ContactSection.tsx';
import Footer from './components/Footer.tsx';

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('hp17_theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('hp17_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('hp17_theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-[#0a0f1d] text-gray-800 dark:text-gray-100 transition-colors duration-300">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <main className="flex-grow">
        <Hero isDark={isDark} />
        <ProductsSection />
        <AboutTechSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
