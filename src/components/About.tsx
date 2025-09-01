import React, { useEffect, useState, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="sobre"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-background to-neutral-50"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`${isVisible ? 'fade-in' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              {t('about.title')}
            </h2>
            
            <div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
              <p>
                {t('about.intro')}
              </p>
              
              <p>
                {t('about.experience')}
              </p>
              
              <p>
                {t('about.journey')}
              </p>
              
              <p>
                {t('about.growth')}
              </p>
              
              {/* <p>
                {t('about.services.title')}
              </p>
              
              <ul className="space-y-2 ml-6">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent-green rounded-full mr-3" />
                  {t('about.services.fivem')}
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent-blue rounded-full mr-3" />
                  {t('about.services.nui')}
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent-orange rounded-full mr-3" />
                  {t('about.services.websites')}
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                  {t('about.services.consulting')}
                </li>
              </ul> 
              <p className="text-primary font-semibold border-l-4 border-accent-green pl-4 italic">
                {t('about.quote')}
              </p> */}
              
            </div>
          </div>

          {/* Image/Illustration */}
          <div className={`${isVisible ? 'slide-up' : 'opacity-0'}`}>
            <div className="relative">
              <div className="card-gradient rounded-2xl p-8 shadow-premium hover-lift">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full hero-gradient flex items-center justify-center text-6xl text-white shadow-hero">
                    <i className="fas fa-code" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    PhachunterBr
                  </h3>
                  
                  <p className="text-neutral-600 mb-6">
                    {t('about.role')}
                  </p>
                  
                  <div className="flex justify-center space-x-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent-green">4+</div>
                      <div className="text-sm text-neutral-500">{t('about.stats.experience')}</div>
                    </div>
                    <div className="w-px bg-border" />
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent-blue">20+</div>
                      <div className="text-sm text-neutral-500">{t('about.stats.projects')}</div>
                    </div>
                    {/* <div className="w-px bg-border" />
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent-orange">100%</div>
                      <div className="text-sm text-neutral-500">{t('about.stats.satisfaction')}</div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;