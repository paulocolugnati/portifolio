import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const socialLinks = [
    {
      name: 'Linkedin',
      icon: 'fab fa-linkedin',
      url: 'https://www.linkedin.com/in/paulocolugnati',
      color: 'hover:text-accent-blue'
    },
    {
      name: 'GitHub',
      icon: 'fab fa-github',
      url: 'https://github.com/paulocolugnati',
      color: 'hover:text-neutral-700'
    },
    {
      name: 'Email',
      icon: 'fas fa-envelope',
      url: 'mailto:paulo.colugnati@hotmail.com',
      color: 'hover:text-accent-orange'
    }
  ];

  const quickLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Habilidades', href: '#habilidades' },
    { name: 'Projetos', href: '#projetos' },
    { name: 'Contato', href: '#contato' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-r from-primary-dark to-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-2">
            <div className="mb-4">
              <h3 className="text-2xl font-bold mb-2">Paulo Henrique</h3>
              <p className="text-neutral-200 leading-relaxed">
                {t('footer.description')}
              </p>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-3">Entre em Contato</h4>
              <div className="space-y-2 text-sm text-neutral-200">
                <p>
                  <i className="fab fa-linkedin mr-2 text-accent-blue" />
                  /PauloColugnati
                </p>
                <p>
                  <i className="fas fa-envelope mr-2 text-accent-orange" />
                  paulo.colugnati@hotmail.com
                </p>
              </div>
            </div>

            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target={social.url.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:bg-white/20 hover-lift ${social.color}`}
                  aria-label={social.name}
                >
                  <i className={social.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-neutral-200 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-neutral-200 hover:text-white transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-sm text-neutral-200">
                © {currentYear} Paulo Henrique Colugnati - {t('footer.rights')}
              </p>
              <p className="text-xs text-neutral-300 mt-1">
                Desenvolvido por Paulo Henrique Colugnati
              </p>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-neutral-200">
              <span>Feito com React & TypeScript</span>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-accent-green rounded-full mr-2 animate-pulse" />
                <span>Online</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary text-white rounded-full shadow-lg hover:bg-primary-light transition-all duration-300 hover-lift z-40"
        aria-label="Scroll to top"
      >
        <i className="fas fa-chevron-up" />
      </button>
    </footer>
  );
};

export default Footer;