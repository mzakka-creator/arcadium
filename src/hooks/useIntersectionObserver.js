import { useEffect, useState, useRef } from 'react';

/**
 * Custom hook to detect when an element is visible in the viewport
 * @param {Object} options - Intersection Observer options
 * @returns {Array} [elementRef, isVisible] - Reference and visibility state
 */
export const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optional: stop observing after first intersection
          if (options.once) {
            observer.disconnect();
          }
        } else if (!options.once) {
          setIsVisible(false);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '0px',
        ...options 
      }
    );
    
    const currentElement = elementRef.current;
    
    if (currentElement) {
      observer.observe(currentElement);
    }
    
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options.once, options.threshold, options.rootMargin]);
  
  return [elementRef, isVisible];
};

export default useIntersectionObserver;

