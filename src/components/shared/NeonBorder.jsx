import React from 'react';
import { motion } from 'framer-motion';

/**
 * Animated neon border wrapper component
 * @param {React.ReactNode} children - Content to wrap
 * @param {string} color - Border color (pink, cyan, purple, orange, multi)
 * @param {string} intensity - Glow intensity (low, medium, high)
 * @param {boolean} animated - Enable pulsing animation
 * @param {string} className - Additional classes
 */
const NeonBorder = ({ 
  children, 
  color = 'pink',
  intensity = 'medium',
  animated = true,
  className = '' 
}) => {
  const colorClasses = {
    pink: 'border-neon-pink shadow-neon-pink',
    cyan: 'border-neon-cyan shadow-neon-cyan',
    purple: 'border-neon-purple shadow-neon-purple',
    orange: 'border-neon-orange shadow-neon-orange',
    multi: 'border-transparent',
  };

  const intensityStyles = {
    low: { boxShadow: '0 0 5px currentColor' },
    medium: { boxShadow: '0 0 10px currentColor, 0 0 20px currentColor' },
    high: { boxShadow: '0 0 15px currentColor, 0 0 30px currentColor, 0 0 45px currentColor' },
  };

  const multiGradient = color === 'multi' 
    ? 'linear-gradient(45deg, #FF006E, #00F5FF, #8B00FF, #FF6B00) 1'
    : '';

  const borderStyle = color === 'multi' 
    ? { borderImage: multiGradient, borderWidth: '2px', borderStyle: 'solid' }
    : {};

  const classes = `
    rounded-lg border-2 overflow-hidden
    ${colorClasses[color]}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  if (animated) {
    return (
      <motion.div
        className={classes}
        style={{ ...borderStyle, ...intensityStyles[intensity] }}
        animate={{
          boxShadow: [
            intensityStyles[intensity].boxShadow,
            '0 0 20px currentColor, 0 0 40px currentColor',
            intensityStyles[intensity].boxShadow,
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div 
      className={classes}
      style={{ ...borderStyle, ...intensityStyles[intensity] }}
    >
      {children}
    </div>
  );
};

export default NeonBorder;

