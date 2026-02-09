import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Calculator, Truck, Trophy } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SectionHeader } from '../shared';
import { HOW_IT_WORKS_STEPS } from '../../utils/constants';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

/**
 * HowItWorks Component - Process timeline
 */
const HowItWorks = () => {
  const { t } = useTranslation();
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1, once: true });

  const iconMap = {
    'gamepad-2': <Gamepad2 className="w-8 h-8 sm:w-10 sm:h-10" />,
    'calculator': <Calculator className="w-8 h-8 sm:w-10 sm:h-10" />,
    'truck': <Truck className="w-8 h-8 sm:w-10 sm:h-10" />,
    'trophy': <Trophy className="w-8 h-8 sm:w-10 sm:h-10" />,
  };

  return (
    <section id="how-it-works" className="py-20 bg-dark-navy relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-neon-purple/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          title={t('howItWorks.title')}
          subtitle={t('howItWorks.subtitle')}
          alignment="center"
        />

        <div ref={ref} className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-neon-pink via-neon-cyan to-neon-purple transform -translate-y-1/2"></div>

          {/* Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {HOW_IT_WORKS_STEPS.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Step Number */}
                <div className="flex justify-center mb-4 sm:mb-6">
                  <motion.div
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-neon-pink to-neon-cyan flex items-center justify-center shadow-lg relative"
                    animate={{
                      boxShadow: [
                        '0 0 20px rgba(255, 0, 110, 0.5)',
                        '0 0 40px rgba(0, 245, 255, 0.8)',
                        '0 0 20px rgba(255, 0, 110, 0.5)',
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                  >
                    <div className="text-white">
                      {iconMap[step.icon]}
                    </div>
                    <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-neon-pink rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-neon-pink">
                      {step.id}
                    </div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
                    {t(`howItWorks.steps.${step.id}.title`)}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300">
                    {t(`howItWorks.steps.${step.id}.description`)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

