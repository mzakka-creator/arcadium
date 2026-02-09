import { useEffect, useState } from 'react';

/**
 * Custom hook to track scroll position and trigger animations
 * @param {number} threshold - Scroll position threshold in pixels
 * @returns {Object} - Scroll state information
 */
export const useScrollAnimation = (threshold = 100) => {
  const [scrollState, setScrollState] = useState({
    scrollY: 0,
    scrollDirection: 'up',
    isScrolled: false,
  });

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollState = () => {
      const currentScrollY = window.pageYOffset;
      const direction = currentScrollY > lastScrollY ? 'down' : 'up';
      
      setScrollState({
        scrollY: currentScrollY,
        scrollDirection: direction,
        isScrolled: currentScrollY > threshold,
      });

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', updateScrollState, { passive: true });
    
    return () => window.removeEventListener('scroll', updateScrollState);
  }, [threshold]);

  return scrollState;
};

export default useScrollAnimation;

