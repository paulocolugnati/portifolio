import React, { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Enviar email usando EmailJS
      await emailjs.sendForm(
        'service_gykmukh', 
        'template_dfq5qgd', 
        formRef.current!, 
        'OD7zI2EAWTDCZPGtF'
      );
      
      alert(t('contact.form.success'));
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Falha ao enviar mensagem:', error);
      alert(t('contact.form.error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: 'fab fa-linkedin',
      title: t('contact.server'),
      value: 'Paulo Colugnati',
      link: 'https://www.linkedin.com/in/paulocolugnati',
      color: 'accent-green'
    },
    {
      icon: 'fab fa-github',
      title: 'GitHub',
      value: 'PhachunterBr',
      link: 'https://github.com/paulocolugnati',
      color: 'neutral-700'
    },
    {
      icon: 'fas fa-envelope',
      title: 'E-mail',
      value: 'paulo.colugnati@hotmail.com',
      link: 'mailto:paulo.colugnati@hotmail.com',
      color: 'accent-orange'
    }
  ];

  return (
    <section
      id="contato"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-background to-neutral-50"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className={`${isVisible ? 'slide-up' : 'opacity-0'}`}>
            <h3 className="text-2xl font-bold text-primary mb-8">
              {t('contact.info.title')}
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={info.title}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="flex items-center p-4 card-gradient rounded-lg shadow-card hover-lift transition-all duration-300 group"
                >
                  <div className={`flex items-center justify-center w-12 h-12 rounded-full text-${info.color} bg-${info.color}/10 mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <i className={`${info.icon} text-xl`} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">{info.title}</h4>
                    <p className="text-neutral-600">{info.value}</p>
                  </div>
                  <i className="fas fa-external-link-alt text-neutral-400 ml-auto group-hover:text-primary transition-colors duration-300" />
                </a>
              ))}
            </div>

          </div>

          {/* Contact Form */}
          <div className={`${isVisible ? 'fade-in' : 'opacity-0'}`}>
            <div className="card-gradient rounded-lg p-8 shadow-premium">
              <h3 className="text-2xl font-bold text-primary mb-6">
                {t('contact.form.title')}
              </h3>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                    {t('contact.form.name')}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={t('contact.form.messageName')}
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                    {t('contact.form.email')}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={t('contact.form.messageEmail')}
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                    {t('contact.form.message')}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={t('contact.form.messagePlaceholder')}
                    rows={6}
                    className="w-full resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full hero-gradient text-white hover:shadow-glow transition-all duration-300"
                  size="lg"
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner animate-spin mr-2" />
                      {t('contact.form.sending')}
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane mr-2" />
                      {t('contact.form.send')}
                    </>
                  )}
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t border-border text-center">
                <p className="text-sm text-neutral-600 mb-4">
                  {t('contact.linkedin.text')}
                </p>
                <Button
                  variant="outline"
                  onClick={() => window.open('https://www.linkedin.com/in/paulocolugnati', '_blank')}
                  className="border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-white"
                >
                  <i className="fab fa-linkedin mr-2" />
                  {t('contact.linkedin.button')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;