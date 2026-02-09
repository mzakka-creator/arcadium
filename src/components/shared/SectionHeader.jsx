import React from 'react';
import { motion } from 'framer-motion';

/**
 * Reusable Section Header component
 * @param {string} title - Main heading text
 * @param {string} subtitle - Subheading text
 * @param {string} alignment - Text alignment (left, center, right)
 * @param {string} titleColor - Title color class
 * @param {boolean} animated - Enable animation
 * @param {string} className - Additional classes
 */
const SectionHeader = ({ 
  title, 
  subtitle, 
  alignment = 'center',
  titleColor = 'neon-text-pink',
  animated = true,
  className = '' 
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const containerClasses = `${alignmentClasses[alignment]} mb-12 ${className}`;

  const AnimatedDiv = animated ? motion.div : 'div';
  const AnimatedH2 = animated ? motion.h2 : 'h2';
  const AnimatedP = animated ? motion.p : 'p';

  const animationProps = animated ? {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  } : {};

  const subtitleAnimationProps = animated ? {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.6, delay: 0.2 }
  } : {};

  return (
    <AnimatedDiv className={containerClasses} {...animationProps}>
      <AnimatedH2 
        className={`text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 ${titleColor}`}
      >
        {title}
      </AnimatedH2>
      {subtitle && (
        <AnimatedP 
          className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
          {...subtitleAnimationProps}
        >
          {subtitle}
        </AnimatedP>
      )}
      {alignment === 'center' && (
        <motion.div 
          className="w-24 h-1 bg-gradient-to-r from-neon-pink via-neon-cyan to-neon-purple mx-auto mt-6"
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      )}
    </AnimatedDiv>
  );
};

export default SectionHeader;

