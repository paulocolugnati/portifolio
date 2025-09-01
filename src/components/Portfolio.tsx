import React, { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [projects, setProjects] = useState<any[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    // Buscar projetos do arquivo JSON
    fetch('/projects.json')
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error('Erro ao carregar projetos:', error));

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

  const closeModal = () => {
    setSelectedProject(null);
  };

  const handleTitleClick = (e: React.MouseEvent<HTMLHeadingElement>, project: any) => {
    e.stopPropagation();
    if (project.projectLink) {
      window.open(project.projectLink, '_blank', 'noopener,noreferrer');
    }
  };

  const selectedProjectData = selectedProject
    ? projects.find((p) => p.id === selectedProject)
    : null;

  return (
    <section
      id="projetos"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-neutral-50 to-background"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            {t('portfolio.title')}
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            {t('portfolio.subtitle')}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group cursor-pointer ${
                isVisible ? 'scale-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => setSelectedProject(project.id)}
            >
              <div className="card-gradient rounded-xl overflow-hidden shadow-card hover-lift transition-all duration-300 hover:shadow-premium">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <i className="fas fa-eye text-white text-2xl" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        project.status === 'Concluído'
                          ? 'bg-accent-green text-white'
                          : 'bg-accent-orange text-white'
                      }`}
                    >
                      {project.status === 'Concluído'
                        ? t('portfolio.status.completed')
                        : t('portfolio.status.development')}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-accent-blue font-medium">
                      {project.category}
                    </span>
                    <span className="text-sm text-neutral-500">{project.year}</span>
                  </div>

                  {project.projectLink ? (
                    <h3
                      className="text-xl font-bold text-primary mb-3 group-hover:text-primary-light transition-colors cursor-pointer hover:underline"
                      onClick={(e) => handleTitleClick(e, project)}
                    >
                      {project.name}
                      <span className="ml-2 text-sm opacity-70">↗</span>
                    </h3>
                  ) : (
                    <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-primary-light transition-colors">
                      {project.name}
                    </h3>
                  )}

                  <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                    {project.description.substring(0, 100)}...
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech: string) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-neutral-100 text-neutral-600 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full group-hover:bg-primary group-hover:text-white transition-all duration-300"
                  >
                    {t('portfolio.viewDetails')}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && selectedProjectData && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div
              className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProjectData.image}
                  alt={selectedProjectData.name}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-neutral-600 hover:bg-white transition-colors"
                >
                  <i className="fas fa-times" />
                </button>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-1">
                      {selectedProjectData.name}
                    </h3>
                    <span className="text-accent-blue font-medium">
                      {selectedProjectData.category}
                    </span>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      selectedProjectData.status === 'Concluído'
                        ? 'bg-accent-green text-white'
                        : 'bg-accent-orange text-white'
                    }`}
                  >
                    {selectedProjectData.status === 'Concluído'
                      ? t('portfolio.status.completed')
                      : t('portfolio.status.development')}
                  </span>
                </div>

                <p className="text-neutral-600 mb-6 leading-relaxed">
                  {selectedProjectData.description}
                </p>

                {selectedProjectData.projectLink && (
                  <div className="mb-6">
                    <a
                      href={selectedProjectData.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                    >
                      Visitar Site <i className="fas fa-external-link-alt ml-2" />
                    </a>
                  </div>
                )}

                <h4 className="font-semibold text-primary mb-3">
                  {t('portfolio.features')}
                </h4>
                <ul className="space-y-2 mb-6">
                  {selectedProjectData.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-center">
                      <i className="fas fa-check text-accent-green mr-3" />
                      <span className="text-neutral-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="font-semibold text-primary mb-3">
                  {t('portfolio.technologies')}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProjectData.technologies.map((tech: string) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;