import React from 'react';
import { motion } from 'framer-motion';

/**
 * Reusable Card component with glass morphism and neon effects
 * @param {React.ReactNode} children - Card content
 * @param {string} variant - Card style (glass, neon, solid)
 * @param {string} glowColor - Neon glow color (pink, cyan, purple, orange)
 * @param {string} className - Additional classes
 * @param {boolean} hover - Enable hover effects
 * @param {Function} onClick - Click handler
 */
const Card = ({ 
  children, 
  variant = 'glass',
  glowColor = 'pink',
  className = '',
  hover = false,
  onClick,
  ...props 
}) => {
  const baseClasses = 'rounded-xl overflow-hidden transition-all duration-300';

  const variantClasses = {
    glass: 'glass-card backdrop-blur-lg',
    neon: 'neon-border bg-dark-navy/50',
    solid: 'bg-dark-navy border border-white/10',
  };

  const glowClasses = {
    pink: 'hover:shadow-neon-pink',
    cyan: 'hover:shadow-neon-cyan',
    purple: 'hover:shadow-neon-purple',
    orange: 'hover:shadow-neon-orange',
  };

  const hoverClasses = hover ? `${glowClasses[glowColor]} hover:scale-105 cursor-pointer` : '';

  const classes = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${hoverClasses}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  const MotionCard = onClick ? motion.div : motion.div;

  return (
    <MotionCard
      className={classes}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {children}
    </MotionCard>
  );
};

export default Card;

