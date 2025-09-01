import React, { useEffect, useState } from 'react';

interface ProgressBarProps {
  skill: string;
  percentage: number;
  icon: string;
  delay?: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ skill, percentage, icon, delay = 0 }) => {
  const [width, setWidth] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setWidth(percentage);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isVisible, percentage, delay]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById(`progress-${skill}`);
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [skill]);

  return (
    <div id={`progress-${skill}`} className="mb-8">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className="text-2xl text-primary">
            <i className={icon} />
          </div>
          <span className="text-lg font-semibold text-neutral-700">{skill}</span>
        </div>
        <span className="text-sm font-bold text-primary">{percentage}%</span>
      </div>
      
      <div className="progress-bar h-3">
        <div
          className="progress-fill h-full rounded-full shadow-sm"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;