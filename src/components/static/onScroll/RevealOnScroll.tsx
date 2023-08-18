import React, { useEffect, useRef, useState } from 'react';
import "./RevealOnScroll.css";

interface RevealOnScrollProps {
  children: React.ReactNode;
  threshold?: number;
  className?: string;
}

const RevealOnScroll: React.FC<RevealOnScrollProps> = ({
  children,
  threshold = 0.5,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold]);

  return (
    <div ref={elementRef} className={`reveal-on-scroll ${className} ${isVisible ? 'visible' : ''}`}>
      {children}
    </div>
  );
};

export default RevealOnScroll;
