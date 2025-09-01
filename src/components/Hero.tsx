import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import heroBackground from '@/assets/background.jpg';

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(26, 26, 27, 0.73), rgba(13, 37, 63, 0.6)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className={`max-w-4xl mx-auto ${mounted ? 'fade-in' : 'opacity-0'}`}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {t('hero.welcome')}{' '}
            <span className="bg-gradient-to-r from-accent-green to-accent-blue bg-clip-text text-transparent">
              {t('hero.name')}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-neutral-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            {t('hero.description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="hero-gradient text-white hover:shadow-glow transition-all duration-300 px-8 py-4 text-lg font-semibold"
              onClick={() => window.open('https://www.linkedin.com/in/paulocolugnati', '_blank')}
            >
              {t('hero.linkedin')}
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-white text-black hover:bg-white hover:text-primary transition-all duration-300 px-8 py-4 text-lg"
              onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('hero.learnMore')}
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.linkedin.com/in/paulocolugnati"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-accent-blue transition-colors duration-300 text-2xl hover-lift"
              aria-label="Linkedin"
            >
              <i className="fab fa-linkedin" />
            </a>
            <a
              href="https://github.com/paulocolugnati"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-accent-green transition-colors duration-300 text-2xl hover-lift"
              aria-label="GitHub"
            >
              <i className="fab fa-github" />
            </a>
            <a
              href="mailto:paulo.colugnati@hotmail.com"
              className="text-white hover:text-accent-orange transition-colors duration-300 text-2xl hover-lift"
              aria-label="Email"
            >
              <i className="fas fa-envelope" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;