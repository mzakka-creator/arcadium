import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Zap, Heart, Shield, Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SectionHeader, Card } from '../shared';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

/**
 * About Component - Why Choose Arcadium section
 */
const About = () => {
  const { t } = useTranslation();
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1, once: true });

  const features = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: t('about.features.premiumSelection.title'),
      description: t('about.features.premiumSelection.description'),
      color: 'neon-pink',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: t('about.features.expertSetup.title'),
      description: t('about.features.expertSetup.description'),
      color: 'neon-cyan',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: t('about.features.instantFun.title'),
      description: t('about.features.instantFun.description'),
      color: 'neon-purple',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: t('about.features.memorableExperiences.title'),
      description: t('about.features.memorableExperiences.description'),
      color: 'neon-orange',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: t('about.features.fullyInsured.title'),
      description: t('about.features.fullyInsured.description'),
      color: 'neon-pink',
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: t('about.features.flexiblePackages.title'),
      description: t('about.features.flexiblePackages.description'),
      color: 'neon-cyan',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-dark-navy to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-background opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          title={t('about.title')}
          subtitle={t('about.subtitle')}
          alignment="center"
        />

        {/* Main Content Grid */}
        <div ref={ref} className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="glass-card p-6 sm:p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-neon-pink/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-neon-cyan/20 rounded-full blur-3xl"></div>
              
              <h3 className="text-2xl sm:text-3xl font-heading font-bold mb-4 sm:mb-6 neon-text-cyan">
                {t('about.difference')}
              </h3>
              <div className="space-y-3 sm:space-y-4 text-gray-300">
                <p className="text-base sm:text-lg">
                  {t('about.description1')} <span className="text-neon-pink font-bold">500 {t('about.events')}</span> {t('about.description2')}
                </p>
                <p className="text-base sm:text-lg">
                  {t('about.description3')}
                </p>
                <p className="text-base sm:text-lg">
                  {t('about.description4')} <span className="text-neon-cyan font-bold">{t('about.maintained')}</span> {t('about.description5')}
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8">
                <div className="text-center p-3 sm:p-4 bg-white/5 rounded-lg">
                  <div className="text-2xl sm:text-3xl font-bold neon-text-pink">50+</div>
                  <div className="text-xs sm:text-sm text-gray-400">{t('about.stats.gamesAvailable')}</div>
                </div>
                <div className="text-center p-3 sm:p-4 bg-white/5 rounded-lg">
                  <div className="text-2xl sm:text-3xl font-bold neon-text-cyan">24/7</div>
                  <div className="text-xs sm:text-sm text-gray-400">{t('about.stats.customerSupport')}</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid gap-4">
              {features.slice(0, 4).map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <Card variant="glass" hover glowColor={feature.color.split('-')[1]}>
                    <div className="p-4 sm:p-6 flex gap-3 sm:gap-4">
                      <div className={`text-${feature.color} flex-shrink-0`}>
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">
                          {feature.title}
                        </h4>
                        <p className="text-sm sm:text-base text-gray-300">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {features.slice(4).map((feature, index) => (
            <Card key={index} variant="glass" hover glowColor={feature.color.split('-')[1]}>
              <div className="p-4 sm:p-6 flex gap-3 sm:gap-4 items-start">
                <div className={`text-${feature.color} flex-shrink-0`}>
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-sm sm:text-base text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;

