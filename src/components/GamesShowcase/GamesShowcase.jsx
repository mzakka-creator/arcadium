import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Zap, Package } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SectionHeader, Card, Button, NeonBorder } from '../shared';
import { GAMES, PACKAGES } from '../../utils/constants';
import { useEvent } from '../../context/EventContext';
import image1 from '../../assets/1.jpeg';
import image2 from '../../assets/2.jpeg';
import image3 from '../../assets/3.jpeg';
import image4 from '../../assets/4.jpeg';
import image5 from '../../assets/5.jpeg';

// Map game IDs to images
const gameImages = {
  1: image1,
  2: image2,
  3: image3,
  4: image4,
  5: image5
};

/**
 * GamesShowcase Component - Tabbed game browser with package tiers
 */
const GamesShowcase = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('all');
  const { toggleGame, isGameSelected } = useEvent();

  const categories = [
    { id: 'all', label: t('games.categories.all'), icon: <Package className="w-4 h-4" /> },
    { id: 'retro', label: t('games.categories.retro'), icon: <Zap className="w-4 h-4" /> },
    { id: 'modern', label: t('games.categories.modern'), icon: <Zap className="w-4 h-4" /> },
    { id: 'vr', label: t('games.categories.vr'), icon: <Zap className="w-4 h-4" /> },
    { id: 'racing', label: t('games.categories.racing'), icon: <Zap className="w-4 h-4" /> },
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
          title={t('games.title')}
          subtitle={t('games.subtitle')}
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
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16 items-stretch"
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
            title={t('games.packageOptions.title')}
            subtitle={t('games.packageOptions.subtitle')}
            alignment="center"
          />

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
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
            {t('games.buildCustom')}
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
  const { t } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="h-full"
    >
      <Card 
        variant="glass" 
        hover 
        glowColor="cyan"
        className={`h-full cursor-pointer flex flex-col ${isSelected ? 'ring-2 ring-neon-cyan' : ''}`}
        onClick={onToggle}
      >
        {/* Game Image */}
        <div className="relative h-48 overflow-hidden flex-shrink-0">
          {game.popular && (
            <div className="absolute top-2 right-2 bg-neon-pink px-3 py-1 rounded-full text-xs font-bold z-10">
              {t('games.popular')}
            </div>
          )}
          <img 
            src={gameImages[game.id]} 
            alt={t(`games.gamesList.${game.id}.name`)}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-white mb-2">{t(`games.gamesList.${game.id}.name`)}</h3>
          <p className="text-gray-400 text-sm mb-4 flex-grow">{t(`games.gamesList.${game.id}.description`)}</p>

          {/* Specs */}
          <div className="space-y-2 mb-4 flex-shrink-0">
            <div className="flex items-center gap-2 text-sm">
              <Users className="w-4 h-4 text-neon-cyan" />
              <span className="text-gray-300">{game.specs.players} {t('games.players')}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Package className="w-4 h-4 text-neon-pink" />
              <span className="text-gray-300">{t(`games.gamesList.${game.id}.space`)}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4 flex-shrink-0">
            {game.tags.map((tag, i) => (
              <span
                key={i}
                className="px-2 py-1 bg-white/5 rounded text-xs text-gray-300"
              >
                {t(`games.gamesList.${game.id}.tags.${i + 1}`)}
              </span>
            ))}
          </div>

          {/* Select Button */}
          <div className="mt-auto flex-shrink-0">
            <Button
              variant={isSelected ? 'secondary' : 'outline'}
              size="sm"
              className="w-full"
            >
              {isSelected ? t('games.selected') : t('games.addToEvent')}
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
  const { t } = useTranslation();
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
      className="relative h-full flex flex-col"
    >
      {pkg.recommended && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-neon-cyan text-dark-navy px-4 py-1 rounded-full text-sm font-bold z-10">
          {t('games.packageOptions.recommended')}
        </div>
      )}
      
      <NeonBorder 
        color={pkg.color.split('-')[1]} 
        intensity={pkg.recommended ? 'high' : 'medium'}
        animated={pkg.recommended}
        className="h-full"
      >
        <div className="bg-dark-navy p-8 h-full flex flex-col min-h-[500px]">
          <h3 className={`text-3xl font-heading font-bold mb-6 neon-text-${pkg.color.split('-')[1]}`}>
            {t(`packages.${pkg.id}.name`)}
          </h3>

          {/* Package Details */}
          <div className="space-y-3 mb-6 flex-grow">
            <div className="flex items-center gap-2 text-gray-300">
              <Zap className="w-5 h-5 text-neon-cyan flex-shrink-0" />
              <span>{t(`packages.${pkg.id}.games`)}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Zap className="w-5 h-5 text-neon-pink flex-shrink-0" />
              <span>{t(`packages.${pkg.id}.duration`)}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Users className="w-5 h-5 text-neon-purple flex-shrink-0" />
              <span>{t(`packages.${pkg.id}.guests`)}</span>
            </div>
          </div>

          {/* Features */}
          <ul className="space-y-2 mb-8">
            {pkg.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                <span className="text-neon-cyan mt-1">✓</span>
                {t(`packages.${pkg.id}.features.${i + 1}`)}
              </li>
            ))}
          </ul>

          <Button
            variant={pkg.recommended ? 'primary' : 'outline'}
            size="md"
            className="w-full"
            onClick={scrollToContact}
          >
            {t('games.getQuote')}
          </Button>
        </div>
      </NeonBorder>
    </motion.div>
  );
};

export default GamesShowcase;

