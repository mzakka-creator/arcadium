import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SectionHeader, Card } from '../shared';
import { TESTIMONIALS } from '../../utils/constants';

/**
 * Testimonials Component - Customer reviews carousel
 */
const Testimonials = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay]);

  const handlePrev = () => {
    setAutoPlay(false);
    setCurrentIndex((prev) => 
      prev === 0 ? TESTIMONIALS.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-black to-dark-navy relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-neon-cyan/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-neon-pink/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          title={t('testimonials.title')}
          subtitle={t('testimonials.subtitle')}
          alignment="center"
        />

        {/* Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Card variant="glass" className="p-8 md:p-12">
                <div className="flex flex-col items-center text-center">
                  {/* Quote Icon */}
                  <Quote className="w-12 h-12 text-neon-pink mb-6 opacity-50" />

                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(TESTIMONIALS[currentIndex].rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-6 h-6 fill-neon-yellow text-neon-yellow" 
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-xl md:text-2xl text-white mb-8 italic leading-relaxed">
                    "{TESTIMONIALS[currentIndex].quote}"
                  </p>

                  {/* Author Info */}
                  <div>
                    <h4 className="text-lg font-bold text-neon-cyan mb-1">
                      {TESTIMONIALS[currentIndex].name}
                    </h4>
                    <p className="text-gray-400">
                      {TESTIMONIALS[currentIndex].eventType}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      {TESTIMONIALS[currentIndex].location}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 bg-neon-pink rounded-full flex items-center justify-center text-white hover:shadow-neon-pink transition-all"
            aria-label={t('testimonials.previous')}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 bg-neon-cyan rounded-full flex items-center justify-center text-dark-navy hover:shadow-neon-cyan transition-all"
            aria-label={t('testimonials.next')}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setAutoPlay(false);
                setCurrentIndex(index);
              }}
              className={`
                w-3 h-3 rounded-full transition-all
                ${currentIndex === index 
                  ? 'bg-neon-pink w-8' 
                  : 'bg-white/20 hover:bg-white/40'
                }
              `}
              aria-label={t('testimonials.goTo', { number: index + 1 })}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

