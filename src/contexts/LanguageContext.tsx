import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  language: 'pt' | 'en';
  setLanguage: (lang: 'pt' | 'en') => void;
  t: (key: string) => string;
}

const translations = {
  pt: {
    // Header
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.services': 'Habilidades',
    'nav.portfolio': 'Projetos',
    'nav.resume': 'Currículo',
    'nav.contact': 'Contato',
    
    // Hero
    'hero.welcome': 'Olá, eu sou',
    'hero.name': 'Paulo Henrique de Andrade Colugnati',
    'hero.description': 'Desenvolvedor apaixonado por tecnologia, especializado em front-end, back-end e scripts para FiveM. Transformo ideias em soluções inovadoras.',
    'hero.linkedin': 'Abra meu LinkedIn',
    'hero.learnMore': 'Saiba Mais',
    
    // About
    'about.title': 'Sobre Paulo Henrique de Andrade Colugnati',
    'about.intro': 'Olá! Meu nome é Paulo Henrique de Andrade Colugnati, e sou um jovem programador de 16 anos, atualmente no segundo ano do ensino médio. Tenho interesse em diversas áreas da programação, como Front-End, Back-End e SQL, onde exploro o desenvolvimento completo de projetos.',
    'about.experience': 'Tenho experiência em criar sites modernos, scripts de automação usando Python, scripts para jogos (FiveM/GTARP), configurações e NUI\'s para FiveM.',
    'about.journey': 'Minha jornada começou em 2020, quando descobri o FiveM e me apaixonei pelo jogo, o que me levou a aprender Lua, a linguagem padrão do FiveM, para criar e editar scripts. Com o tempo, percebi a necessidade de aprimorar minhas NUI\'s, o que me motivou a estudar Front-End.',
    'about.growth': 'Paralelamente, mergulhei em cursos de Back-End e SQL, expandindo meu conhecimento e equilibrando estudos com essa paixão por tecnologia. Hoje, vendo meus produtos e serviços oferecendo soluções de qualidade a um custo acessível.',
    'about.services.title': 'Meus serviços incluem:',
    'about.services.fivem': 'Scripts personalizados para FiveM',
    'about.services.nui': 'Desenvolvimento de NUI\'s interativas',
    'about.services.websites': 'Criação de sites responsivos',
    'about.services.consulting': 'Consultoria em desenvolvimento',
    'about.quote': '"Transformando paixão por tecnologia em soluções inovadoras!"',
    'about.role': 'Full-Stack Developer & FiveM Specialist',
    'about.stats.experience': 'Anos de Experiência',
    'about.stats.projects': 'Projetos Concluídos',
    'about.stats.satisfaction': 'Satisfação',
    
    // Services
    'services.title': 'Minhas Habilidades',
    // 'services.subtitle': 'Desde criação de sites, desenvolvimento de servidores de FiveM, estou preparado para te atender de todas as formas!',
    'services.web.title': 'Desenvolvimento Web',
    'services.web.description': 'Sites responsivos e modernos com as mais recentes tecnologias',
    'services.fivem.title': 'Scripts FiveM',
    'services.fivem.description': 'Scripts personalizados para servidores de roleplay',
    'services.nui.title': 'NUI Development',
    'services.nui.description': 'Interfaces interativas e intuitivas para FiveM',
    'services.consulting.title': 'Consultoria',
    'services.consulting.description': 'Orientação especializada para seus projetos',
    'services.skills.title': 'Minhas Habilidades',
    'services.technologies.title': 'Tecnologias & Ferramentas',
    'services.technologies.description': 'Sempre atualizado com as últimas tecnologias do mercado para oferecer as melhores soluções.',
    
    // Portfolio
    'portfolio.title': 'Meus Projetos',
    'portfolio.subtitle': 'Conheça alguns dos projetos que desenvolvi com paixão e dedicação',
    'portfolio.viewDetails': 'Ver Detalhes',
    'portfolio.features': 'Principais Características:',
    'portfolio.technologies': 'Tecnologias Utilizadas:',
    'portfolio.status.completed': 'Concluído',
    'portfolio.status.development': 'Em Desenvolvimento',
    
    // Resume
    'resume.title': 'Meu Currículo',
    'resume.subtitle': 'Conheça minha trajetória, formação e experiências profissionais',
    'resume.education.title': 'Formação',
    'resume.education.current': 'Ensino Médio - 2º Ano',
    'resume.education.school': 'Em andamento',
    'resume.experience.title': 'Experiência',
    'resume.experience.developer': 'Desenvolvedor Full-Stack',
    'resume.experience.period': '2020 - Presente',
    'resume.experience.description': 'Desenvolvimento de sites, scripts para FiveM e soluções personalizadas',
    'resume.skills.title': 'Competências Técnicas',
    'resume.languages.title': 'Idiomas',
    'resume.languages.portuguese': 'Português - Nativo',
    'resume.languages.english': 'Inglês - Intermediário',
    'resume.skills.titler': 'Currículo Completo',
    'resume.skills.subtitle': 'Baixe meu currículo completo em PDF para mais detalhes sobre minha experiência e projetos.',
    'resume.download': 'Baixar Currículo',
    
    // Contact
    'contact.title': 'Entre em Contato',
    'contact.subtitle': 'Vamos conversar sobre seu próximo projeto!',
    'contact.info.title': 'Informações de Contato',
    'contact.form.title': 'Envie uma mensagem para mim',
    'contact.form.name': 'Nome Completo',
    'contact.form.email': 'E-mail',
    'contact.form.message': 'Mensagem',
    'contact.form.messageEmail': 'seu.email@exemplo.com',
    'contact.form.messageName': 'Seu nome',
    'contact.form.messagePlaceholder': 'Conte-me sobre seu projeto ou como posso ajudá-lo...',
    'contact.form.send': 'Enviar Mensagem',
    'contact.form.sending': 'Enviando...',
    'contact.form.success': 'Mensagem enviada com sucesso! Entrarei em contato em breve.',
    'contact.linkedin.text': 'Entre no meu linkedin!',
    'contact.linkedin.button': 'Abrir LinkedIn',
    'contact.personal': 'linkedin Pessoal',
    'contact.server': 'LinkedIn',
    
    // Footer
    'footer.description': 'Desenvolvedor especializado em soluções web',
    'footer.rights': 'Todos os direitos reservados.',
  },
en: {
  // Header
  'nav.home': 'Home',
  'nav.about': 'About',
  'nav.services': 'Skills',
  'nav.portfolio': 'Projects',
  'nav.resume': 'Resume',
  'nav.contact': 'Contact',
  
  // Hero
  'hero.welcome': 'Hello, I am',
  'hero.name': 'Paulo Henrique de Andrade Colugnati',
  'hero.description': 'Passionate developer in technology, specialized in front-end, back-end, and FiveM scripts. I transform ideas into innovative solutions.',
  'hero.linkedin': 'Open my LinkedIn',
  'hero.learnMore': 'Learn More',
  
  // About
  'about.title': 'About Paulo Henrique de Andrade Colugnati',
  'about.intro': 'Hello! My name is Paulo Henrique de Andrade Colugnati, and I am a 16-year-old programmer currently in my second year of high school. I am passionate about various programming fields, including Front-End, Back-End, and SQL, where I explore full-stack project development.',
  'about.experience': 'I have experience building modern websites, automation scripts using Python, game scripts (FiveM/GTARP), and configurations and NUIs for FiveM.',
  'about.journey': 'My journey began in 2020 when I discovered FiveM and fell in love with the game, leading me to learn Lua, the standard language for FiveM, to create and edit scripts. Over time, I recognized the need to enhance my NUIs, which motivated me to study Front-End.',
  'about.growth': 'In parallel, I dove into Back-End and SQL courses, expanding my knowledge while balancing studies with my passion for technology. Today, I offer my products and services, delivering high-quality solutions at an affordable cost.',
  'about.services.title': 'My services include:',
  'about.services.fivem': 'Custom FiveM scripts',
  'about.services.nui': 'Interactive NUI development',
  'about.services.websites': 'Responsive website creation',
  'about.services.consulting': 'Development consulting',
  'about.quote': '"Transforming passion for technology into innovative solutions!"',
  'about.role': 'Full-Stack Developer & FiveM Specialist',
  'about.stats.experience': 'Years of Experience',
  'about.stats.projects': 'Completed Projects',
  'about.stats.satisfaction': 'Satisfaction',
  
  // Services
  'services.title': 'My Skills',
  'services.web.title': 'Web Development',
  'services.web.description': 'Responsive and modern websites built with the latest technologies',
  'services.fivem.title': 'FiveM Scripts',
  'services.fivem.description': 'Custom scripts tailored for roleplay servers',
  'services.nui.title': 'NUI Development',
  'services.nui.description': 'Interactive and intuitive interfaces for FiveM',
  'services.consulting.title': 'Consulting',
  'services.consulting.description': 'Expert guidance for your projects',
  'services.skills.title': 'My Skills',
  'services.technologies.title': 'Technologies & Tools',
  'services.technologies.description': 'Always up-to-date with the latest market technologies to deliver the best solutions.',
  
  // Portfolio
  'portfolio.title': 'My Projects',
  'portfolio.subtitle': 'Explore some of the projects I developed with passion and dedication',
  'portfolio.viewDetails': 'View Details',
  'portfolio.features': 'Key Features:',
  'portfolio.technologies': 'Technologies Used:',
  'portfolio.status.completed': 'Completed',
  'portfolio.status.development': 'In Development',
  
  // Resume
  'resume.title': 'My Resume',
  'resume.subtitle': 'Learn about my journey, education, and professional experiences',
  'resume.education.title': 'Education',
  'resume.education.current': 'High School - 2nd Year',
  'resume.education.school': 'In progress',
  'resume.experience.title': 'Experience',
  'resume.experience.developer': 'Full-Stack Developer',
  'resume.experience.period': '2020 - Present',
  'resume.experience.description': 'Development of websites, FiveM scripts, and custom solutions',
  'resume.skills.title': 'Technical Skills',
  'resume.languages.title': 'Languages',
  'resume.languages.portuguese': 'Portuguese - Native',
  'resume.languages.english': 'English - Intermediate',
  'resume.skills.titler': 'Full Resume',
  'resume.skills.subtitle': 'Download my complete resume in PDF for more details about my experience and projects.',
  'resume.download': 'Download Resume',
  
  // Contact
  'contact.title': 'Get in Touch',
  'contact.subtitle': 'Let\'s talk about your next project!',
  'contact.info.title': 'Contact Information',
  'contact.form.title': 'Send me a message',
  'contact.form.name': 'Full Name',
  'contact.form.email': 'Email',
  'contact.form.message': 'Message',
  'contact.form.messageName': 'Your name',
  'contact.form.messageEmail': 'your.email@example.com',
  'contact.form.messagePlaceholder': 'Tell me about your project or how I can assist you...',
  'contact.form.send': 'Send Message',
  'contact.form.sending': 'Sending...',
  'contact.form.success': 'Message sent successfully! I will reach out to you soon.',
  'contact.linkedin.text': 'Want to connect directly? Visit my LinkedIn!',
  'contact.linkedin.button': 'Open LinkedIn',
  'contact.personal': 'Personal LinkedIn',
  'contact.server': 'LinkedIn',
  
  // Footer
  'footer.description': 'Developer specialized in web solutions',
  'footer.rights': 'All rights reserved.',
}
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'pt' | 'en'>('pt');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['pt']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};