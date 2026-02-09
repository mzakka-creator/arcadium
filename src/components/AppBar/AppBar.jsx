import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Gamepad2 } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import Button from '../shared/Button';

/**
 * AppBar Component - Sticky navigation with mobile menu
 */
const AppBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY, isScrolled } = useScrollAnimation(50);

  // Close mobile menu on scroll
  useEffect(() => {
    if (isMobileMenuOpen && scrollY > 100) {
      setIsMobileMenuOpen(false);
    }
  }, [scrollY, isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'About', target: 'about' },
    { label: 'Games', target: 'games' },
    { label: 'Build', target: 'builder' },
    { label: 'How It Works', target: 'how-it-works' },
    { label: 'Gallery', target: 'gallery' },
    { label: 'Reviews', target: 'testimonials' },
  ];

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass-card border-b border-white/10 shadow-lg'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.button
              onClick={scrollToTop}
              className="flex items-center gap-2 group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Gamepad2 className="w-8 h-8 text-neon-cyan group-hover:text-neon-pink transition-colors" />
              <span className="font-heading text-2xl font-bold neon-text-pink group-hover:neon-text-cyan transition-all">
                ARCADIUM
              </span>
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.target}
                  onClick={() => scrollToSection(link.target)}
                  className="text-gray-300 hover:text-neon-cyan transition-colors font-medium"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Button
                variant="primary"
                size="sm"
                onClick={() => scrollToSection('contact')}
              >
                Get Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-neon-cyan hover:text-neon-pink transition-colors"
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-dark-navy border-l border-neon-pink/30 z-50 lg:hidden overflow-y-auto"
            >
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Gamepad2 className="w-6 h-6 text-neon-cyan" />
                  <span className="font-heading text-xl font-bold neon-text-pink">
                    ARCADIUM
                  </span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-10 h-10 flex items-center justify-center text-neon-cyan hover:text-neon-pink transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <div className="p-6 space-y-1">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.target}
                    onClick={() => scrollToSection(link.target)}
                    className="w-full text-left px-4 py-3 text-lg text-gray-300 hover:text-neon-cyan hover:bg-white/5 rounded-lg transition-all"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    {link.label}
                  </motion.button>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="p-6 border-t border-white/10">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full"
                  onClick={() => scrollToSection('contact')}
                >
                  Get Quote
                </Button>
              </div>

              {/* Mobile Menu Footer */}
              <div className="p-6 text-center text-gray-400 text-sm">
                <p>Level Up Your Event</p>
                <p className="text-neon-cyan mt-2">🎮 San Antonio, TX</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-16 md:h-20" />
    </>
  );
};

export default AppBar;

