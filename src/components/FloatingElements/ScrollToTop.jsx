import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

/**
 * ScrollToTop Component - Floating scroll to top button
 */
const ScrollToTop = () => {
  const { scrollY } = useScrollAnimation(300);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(scrollY > 300);
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-40 w-10 h-10 sm:w-12 sm:h-12 bg-neon-cyan rounded-full flex items-center justify-center text-dark-navy shadow-lg hover:shadow-neon-cyan transition-all"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;

