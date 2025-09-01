import React, { useEffect, useState, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import ProgressBar from './ProgressBar';

const Services = () => {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    { skill: 'Lua', percentage: 85, icon: 'fas fa-code', delay: 0 },
    { skill: 'JavaScript', percentage: 75, icon: 'fab fa-js-square', delay: 200 },
    { skill: 'React', percentage: 75, icon: 'fab fa-react', delay: 400 },
    { skill: 'CSS', percentage: 85, icon: 'fab fa-css3-alt', delay: 600 },
    { skill: 'HTML', percentage: 90, icon: 'fab fa-html5', delay: 800 },
    { skill: 'PHP', percentage: 75, icon: 'fab fa-php', delay: 1000 },
    { skill: 'Python', percentage: 75, icon: 'fab fa-python', delay: 1200 }
  ];

  const services = [
    {
      icon: 'fas fa-globe',
      title: t('services.web.title'),
      description: t('services.web.description'),
      color: 'accent-blue'
    },
    {
      icon: 'fas fa-gamepad',
      title: t('services.fivem.title'),
      description: t('services.fivem.description'),
      color: 'accent-green'
    },
    {
      icon: 'fas fa-desktop',
      title: t('services.nui.title'),
      description: t('services.nui.description'),
      color: 'accent-orange'
    },
    {
      icon: 'fas fa-lightbulb',
      title: t('services.consulting.title'),
      description: t('services.consulting.description'),
      color: 'primary'
    }
  ];

  return (
    <section
      id="habilidades"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-neutral-50 to-background"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            {t('services.title')}
          </h2>
          {/* <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p> */}
        </div>

        {/* Services Grid */}
        {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`card-gradient rounded-xl p-6 text-center shadow-card hover-lift ${
                isVisible ? 'bounce-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full text-${service.color} bg-${service.color}/10 mb-4`}>
                <i className={`${service.icon} text-2xl`} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
              <p className="text-neutral-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div> */}

        {/* Skills Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`${isVisible ? 'slide-up' : 'opacity-0'}`}>
            <h3 className="text-3xl font-bold text-primary mb-8">
              {/* {t('services.skills.title')} */}
            </h3>
            <div className="space-y-6">
              {skills.map((skillData) => (
                <ProgressBar key={skillData.skill} {...skillData} />
              ))}
            </div>
          </div>

          <div className={`${isVisible ? 'fade-in' : 'opacity-0'}`}>
            <div className="card-gradient rounded-xl p-8 shadow-premium">
              <h4 className="text-2xl font-bold text-primary mb-6">
                {t('services.technologies.title')}
              </h4>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 bg-neutral-100 rounded-lg hover-lift">
                  <i className="fab fa-react text-3xl text-accent-blue mb-2" />
                  <div className="text-sm font-medium">React</div>
                </div>
                <div className="text-center p-4 bg-neutral-100 rounded-lg hover-lift">
                  <i className="fab fa-node-js text-3xl text-accent-green mb-2" />
                  <div className="text-sm font-medium">Node.js</div>
                </div>
                <div className="text-center p-4 bg-neutral-100 rounded-lg hover-lift">
                  <i className="fab fa-git-alt text-3xl text-accent-orange mb-2" />
                  <div className="text-sm font-medium">Git</div>
                </div>
              </div>

              <p className="text-neutral-600 text-center leading-relaxed">
                {t('services.technologies.description')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;