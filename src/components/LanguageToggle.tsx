import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <Button
        variant={language === 'pt' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setLanguage('pt')}
        className="text-xs px-3 py-1"
      >
        PT
      </Button>
      <Button
        variant={language === 'en' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setLanguage('en')}
        className="text-xs px-3 py-1"
      >
        EN
      </Button>
    </div>
  );
};

export default LanguageToggle;