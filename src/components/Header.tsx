import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageToggle from '@/components/LanguageToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'inicio', label: t('nav.home') },
    { id: 'sobre', label: t('nav.about') },
    { id: 'habilidades', label: t('nav.services') },
    { id: 'projetos', label: t('nav.portfolio') },
    { id: 'curriculo', label: t('nav.resume') },
    { id: 'contato', label: t('nav.contact') }
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 glass shadow-card py-3 transition-all duration-300 bg-white/80 backdrop-blur-md"
    >
      <nav className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div
          className="text-2xl font-bold text-primary cursor-pointer hover:text-primary-light transition-colors duration-300"
          onClick={() => scrollToSection('inicio')}
        >
          Paulo Henrique
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-neutral-700 hover:text-primary font-medium transition-colors duration-300 relative group"
            >
              {item.label}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
          <LanguageToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        {/* Mobile Navigation */}
        <div
          className={`fixed inset-0 bg-background/95 backdrop-blur-md transition-all duration-300 ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          } md:hidden`}
        >
          <div className="flex flex-col items-center justify-center min-h-screen space-y-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-2xl font-medium text-neutral-700 hover:text-primary transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
            <div className="mt-8">
              <LanguageToggle />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;