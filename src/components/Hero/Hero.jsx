import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Button from '../shared/Button';
import logoImage from '../../assets/logo.png';
import './Hero.css';

/**
 * Hero Component - Full-screen landing section with animated elements
 */
const Hero = () => {
  const { t } = useTranslation();
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-navy">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 grid-background opacity-30"></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-navy/50 to-dark-navy"></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-neon-cyan rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo/Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-8"
        >
          <motion.div
            animate={{
              filter: [
                'drop-shadow(0 0 10px rgba(255, 0, 110, 0.8))',
                'drop-shadow(0 0 20px rgba(255, 0, 110, 1))',
                'drop-shadow(0 0 10px rgba(255, 0, 110, 0.8))',
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="inline-block mt-12 mb-4"
          >
            <img 
              src={logoImage} 
              alt="Arcadium Logo" 
              className="h-24 sm:h-32 md:h-40 lg:h-48 w-auto object-contain mx-auto"
            />
          </motion.div>
        </motion.div>

        {/* Tagline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold neon-text-pink mb-6"
        >
          {t('hero.tagline')}
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto"
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-md sm:text-lg text-neon-cyan font-semibold mb-12 flex items-center justify-center gap-2"
        >
          <Sparkles className="w-5 h-5" />
          {t('hero.serviceArea')}
          <Sparkles className="w-5 h-5" />
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            variant="primary"
            size="lg"
            onClick={() => scrollToSection('builder')}
          >
            {t('hero.buildYourArcade')}
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollToSection('games')}
          >
            {t('hero.browseGames')}
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { number: '6+', label: t('hero.stats.games') },
            { number: '10+', label: t('hero.stats.events') },
            { number: '5★', label: t('hero.stats.rating') },
            { number: '100%', label: t('hero.stats.funGuaranteed') },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              className="glass-card p-4 rounded-lg"
            >
              <div className="text-3xl md:text-4xl font-bold neon-text-cyan mb-2">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-gray-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-16 mb-8 flex justify-center"
        >
          <motion.button
            onClick={() => scrollToSection('about')}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center text-neon-cyan hover:text-neon-pink transition-colors cursor-pointer bg-transparent border-none"
          >
            <span className="text-sm mb-2 font-body">{t('hero.scrollToExplore')}</span>
            <ChevronDown className="w-8 h-8" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

