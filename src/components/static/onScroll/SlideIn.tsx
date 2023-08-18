import React, { useState, useEffect } from 'react';
import './SlideIn.css';

interface SlideInProps {
  children: React.ReactNode;
}

const SlideInComponent: React.FC<SlideInProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY || window.pageYOffset;

    if (scrollY > windowHeight * 0.7) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`slide-in ${isVisible ? 'visible' : ''}`}>
      {children}
    </div>
  );
};

export default SlideInComponent;
