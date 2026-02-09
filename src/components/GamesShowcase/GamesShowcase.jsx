import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Zap, Package } from 'lucide-react';
import { SectionHeader, Card, Button, NeonBorder } from '../shared';
import { GAMES, PACKAGES } from '../../utils/constants';
import { useEvent } from '../../context/EventContext';

/**
 * GamesShowcase Component - Tabbed game browser with package tiers
 */
const GamesShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const { toggleGame, isGameSelected } = useEvent();

  const categories = [
    { id: 'all', label: 'All Games', icon: <Package className="w-4 h-4" /> },
    { id: 'retro', label: 'Retro Classics', icon: <Zap className="w-4 h-4" /> },
    { id: 'modern', label: 'Modern', icon: <Zap className="w-4 h-4" /> },
    { id: 'vr', label: 'VR Experiences', icon: <Zap className="w-4 h-4" /> },
    { id: 'racing', label: 'Racing', icon: <Zap className="w-4 h-4" /> },
  ];

  const filteredGames = activeCategory === 'all' 
    ? GAMES 
    : GAMES.filter(game => game.category === activeCategory);

  const scrollToBuilder = () => {
    const element = document.getElementById('builder');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="games" className="py-20 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 bg-neon-pink/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-neon-cyan/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          title="Game Collection"
          subtitle="From retro classics to cutting-edge VR - we've got the perfect games for your event"
          alignment="center"
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`
                px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2
                ${activeCategory === category.id
                  ? 'bg-neon-pink text-white shadow-neon-pink'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10'
                }
              `}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.icon}
              {category.label}
            </motion.button>
          ))}
        </div>

        {/* Games Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16"
          >
            {filteredGames.map((game, index) => (
              <GameCard
                key={game.id}
                game={game}
                index={index}
                isSelected={isGameSelected(game.id)}
                onToggle={() => toggleGame(game)}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Package Tiers */}
        <div className="mt-20">
          <SectionHeader
            title="Package Options"
            subtitle="Choose the perfect package for your event size and budget"
            alignment="center"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {PACKAGES.map((pkg, index) => (
              <PackageTier key={pkg.id} package={pkg} index={index} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button
            variant="primary"
            size="lg"
            onClick={scrollToBuilder}
          >
            Build Your Custom Package
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

/**
 * GameCard Component - Individual game display
 */
const GameCard = ({ game, index, isSelected, onToggle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <Card 
        variant="glass" 
        hover 
        glowColor="cyan"
        className={`h-full cursor-pointer ${isSelected ? 'ring-2 ring-neon-cyan' : ''}`}
        onClick={onToggle}
      >
        {/* Game Image Placeholder */}
        <div className="relative h-48 bg-gradient-to-br from-neon-pink/20 to-neon-cyan/20 flex items-center justify-center">
          {game.popular && (
            <div className="absolute top-2 right-2 bg-neon-pink px-3 py-1 rounded-full text-xs font-bold">
              POPULAR
            </div>
          )}
          <div className="text-6xl">🎮</div>
        </div>

        <div className="p-4">
          <h3 className="text-xl font-bold text-white mb-2">{game.name}</h3>
          <p className="text-gray-400 text-sm mb-4">{game.description}</p>

          {/* Specs */}
          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2 text-sm">
              <Users className="w-4 h-4 text-neon-cyan" />
              <span className="text-gray-300">{game.specs.players} Players</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Package className="w-4 h-4 text-neon-pink" />
              <span className="text-gray-300">{game.specs.space}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {game.tags.map((tag, i) => (
              <span
                key={i}
                className="px-2 py-1 bg-white/5 rounded text-xs text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Select Button */}
          <div className="mt-4">
            <Button
              variant={isSelected ? 'secondary' : 'outline'}
              size="sm"
              className="w-full"
            >
              {isSelected ? 'Selected ✓' : 'Add to Event'}
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

/**
 * PackageTier Component - Pricing tier card
 */
const PackageTier = ({ package: pkg, index }) => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      {pkg.recommended && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-neon-cyan text-dark-navy px-4 py-1 rounded-full text-sm font-bold z-10">
          RECOMMENDED
        </div>
      )}
      
      <NeonBorder 
        color={pkg.color.split('-')[1]} 
        intensity={pkg.recommended ? 'high' : 'medium'}
        animated={pkg.recommended}
      >
        <div className="bg-dark-navy p-8 h-full flex flex-col">
          <h3 className={`text-3xl font-heading font-bold mb-2 neon-text-${pkg.color.split('-')[1]}`}>
            {pkg.name}
          </h3>
          <div className="text-4xl font-bold text-white mb-6">
            {pkg.price}
          </div>

          {/* Package Details */}
          <div className="space-y-3 mb-6 flex-grow">
            <div className="flex items-center gap-2 text-gray-300">
              <Zap className="w-5 h-5 text-neon-cyan flex-shrink-0" />
              <span>{pkg.games}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Zap className="w-5 h-5 text-neon-pink flex-shrink-0" />
              <span>{pkg.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Users className="w-5 h-5 text-neon-purple flex-shrink-0" />
              <span>{pkg.guests}</span>
            </div>
          </div>

          {/* Features */}
          <ul className="space-y-2 mb-8">
            {pkg.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                <span className="text-neon-cyan mt-1">✓</span>
                {feature}
              </li>
            ))}
          </ul>

          <Button
            variant={pkg.recommended ? 'primary' : 'outline'}
            size="md"
            className="w-full"
            onClick={scrollToContact}
          >
            Get Quote
          </Button>
        </div>
      </NeonBorder>
    </motion.div>
  );
};

export default GamesShowcase;

