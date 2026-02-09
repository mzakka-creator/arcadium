import React from 'react';
import { motion } from 'framer-motion';

/**
 * Reusable Button component with neon effects
 * @param {string} variant - Button style variant (primary, secondary, outline, ghost)
 * @param {string} size - Button size (sm, md, lg)
 * @param {React.ReactNode} children - Button content
 * @param {Function} onClick - Click handler
 * @param {string} href - Link URL (renders as anchor if provided)
 * @param {string} className - Additional classes
 * @param {boolean} isLoading - Loading state
 * @param {boolean} disabled - Disabled state
 * @param {string} icon - Icon component (optional)
 */
const Button = ({ 
  variant = 'primary', 
  size = 'md',
  children, 
  onClick, 
  href, 
  className = '',
  isLoading = false,
  disabled = false,
  icon = null,
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-bold transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-navy';
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const variantClasses = {
    primary: 'bg-neon-pink text-white hover:shadow-neon-pink hover:scale-105 focus:ring-neon-pink',
    secondary: 'bg-neon-cyan text-dark-navy hover:shadow-neon-cyan hover:scale-105 focus:ring-neon-cyan',
    outline: 'border-2 border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-white hover:shadow-neon-pink focus:ring-neon-pink',
    ghost: 'text-white hover:bg-white/10 focus:ring-white',
    purple: 'bg-neon-purple text-white hover:shadow-neon-purple hover:scale-105 focus:ring-neon-purple',
  };

  const disabledClasses = 'opacity-50 cursor-not-allowed hover:scale-100 hover:shadow-none';
  
  const classes = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${disabled || isLoading ? disabledClasses : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  const content = (
    <>
      {isLoading && (
        <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {icon && !isLoading && <span className="mr-2">{icon}</span>}
      {children}
    </>
  );

  if (href && !disabled && !isLoading) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={classes}
      onClick={onClick}
      disabled={disabled || isLoading}
      whileHover={!disabled && !isLoading ? { scale: 1.05 } : {}}
      whileTap={!disabled && !isLoading ? { scale: 0.95 } : {}}
      {...props}
    >
      {content}
    </motion.button>
  );
};

export default Button;

