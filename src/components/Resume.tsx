import React, { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Download } from 'lucide-react';

const Resume = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
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

  const handleDownload = () => {
    setIsDownloading(true);
    
    // Simular tempo de download
    setTimeout(() => {
      // Criar um link temporário para download
      const link = document.createElement('a');
      
      // URL do arquivo (ajuste conforme necessário)
      // Se o arquivo estiver na pasta public, use o caminho relativo
      link.href = '/public/curriculo.pdf'; // Ajuste este caminho
      
      // Nome do arquivo que será baixado
      link.download = 'curriculo.pdf';
      
      // Adicionar ao DOM, clicar e remover
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setIsDownloading(false);
    }, 1000);
  };

  const skills = [
    { name: 'Lua', level: 85, color: 'accent-blue' },
    { name: 'JavaScript', level: 75, color: 'accent-green' },
    { name: 'React', level: 75, color: 'accent-orange' },
    { name: 'CSS', level: 85, color: 'primary' },
    { name: 'HTML', level: 90, color: 'accent-green' },
    { name: 'PHP', level: 75, color: 'accent-blue' },
    { name: 'Python', level: 75, color: 'accent-orange' }
  ];

  return (
    <section
      id="curriculo"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-background to-neutral-50"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            {t('resume.title')}
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            {t('resume.subtitle')}
          </p>
        </div>

        {/* Download Button Section */}
        <div className="card-gradient rounded-xl p-6 shadow-card text-center">
          <div className="card-gradient rounded-xl p-6 shadow-card text-center">
            <div className="mb-4">
              <i className="fas fa-download text-4xl text-primary mb-4" />
              <h3 className="text-xl font-bold text-primary mb-2">{t('resume.skills.titler')}</h3>
              <p className="text-neutral-600 mb-6">
                {t('resume.skills.subtitle')}
              </p>
            </div>
            <Button
                className="hero-gradient text-white hover:shadow-glow transition-all duration-300"
                size="lg"
                onClick={handleDownload}
                disabled={isDownloading}
            >
              {isDownloading ? (
                <>
                  <i className="fas fa-spinner animate-spin mr-2" />
                  {t('resume.downloading')}
                </>
              ) : (
                <>
                  <i className="fas fa-download mr-2" />
                  {t('resume.download')}
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;