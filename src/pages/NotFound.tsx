import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-neutral-50">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <div className="text-8xl font-bold text-primary mb-4">404</div>
          <h1 className="text-3xl font-bold text-primary mb-4">Página não encontrada</h1>
          <p className="text-lg text-neutral-600 mb-8">
            Ops! A página que você está procurando não existe ou foi movida.
          </p>
        </div>
        
        <div className="space-y-4">
          <Button
            onClick={() => window.location.href = '/'}
            className="hero-gradient text-white hover:shadow-glow transition-all duration-300 px-8 py-3"
          >
            <i className="fas fa-home mr-2" />
            Voltar ao Início
          </Button>
          
          <div className="text-sm text-neutral-500">
            <p>Precisa de ajuda? Entre em contato conosco:</p>
            <a 
              href="mailto:paulo.colugnati@hotmail.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-accent-blue hover:text-primary transition-colors duration-300 font-medium"
            >
              paulo.colugnati@hotmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
