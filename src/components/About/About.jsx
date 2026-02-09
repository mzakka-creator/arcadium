import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Zap, Heart, Shield, Star } from 'lucide-react';
import { SectionHeader, Card } from '../shared';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

/**
 * About Component - Why Choose Arcadium section
 */
const About = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1, once: true });

  const features = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: 'Premium Selection',
      description: 'Curated collection of classic and modern arcade games, professionally maintained',
      color: 'neon-pink',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Expert Setup',
      description: 'Professional delivery, setup, and on-site support for stress-free events',
      color: 'neon-cyan',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Instant Fun',
      description: 'All games arrive fully tested and ready to play - plug and play entertainment',
      color: 'neon-purple',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Memorable Experiences',
      description: 'Create lasting memories with nostalgic and cutting-edge gaming experiences',
      color: 'neon-orange',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Fully Insured',
      description: 'Complete insurance coverage and safety protocols for peace of mind',
      color: 'neon-pink',
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Flexible Packages',
      description: 'Customizable options to fit any event size, theme, or budget',
      color: 'neon-cyan',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-dark-navy to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-background opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          title="Why Choose Arcadium?"
          subtitle="We bring the arcade to you with professional service and unforgettable entertainment"
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
            <div className="glass-card p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-neon-pink/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-neon-cyan/20 rounded-full blur-3xl"></div>
              
              <h3 className="text-3xl font-heading font-bold mb-6 neon-text-cyan">
                The Arcadium Difference
              </h3>
              <div className="space-y-4 text-gray-300">
                <p className="text-lg">
                  Founded by gaming enthusiasts, we've transformed over <span className="text-neon-pink font-bold">500 events</span> into
                  legendary experiences since our inception.
                </p>
                <p className="text-lg">
                  Our passion is bringing people together through the timeless joy of arcade gaming.
                  Whether it's a child's birthday party, corporate team-building event, or a
                  wedding reception with a twist, we deliver entertainment that guests can't stop
                  talking about.
                </p>
                <p className="text-lg">
                  Every game in our collection is <span className="text-neon-cyan font-bold">meticulously maintained</span> and
                  tested before each event. We don't just rent games - we create experiences.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <div className="text-3xl font-bold neon-text-pink">50+</div>
                  <div className="text-sm text-gray-400">Games Available</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <div className="text-3xl font-bold neon-text-cyan">24/7</div>
                  <div className="text-sm text-gray-400">Customer Support</div>
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
                    <div className="p-6 flex gap-4">
                      <div className={`text-${feature.color} flex-shrink-0`}>
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-2">
                          {feature.title}
                        </h4>
                        <p className="text-gray-300">
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
              <div className="p-6 flex gap-4 items-start">
                <div className={`text-${feature.color} flex-shrink-0`}>
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-300">
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

