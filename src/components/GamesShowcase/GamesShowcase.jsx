import React from 'react';
import { motion } from 'framer-motion';
import { Users, Package } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SectionHeader, Card, Button } from '../shared';
import { GAMES } from '../../utils/constants';
import { useEvent } from '../../context/EventContext';
import image1 from '../../assets/1.jpeg';
import image2 from '../../assets/2.jpeg';
import image3 from '../../assets/3.jpeg';
import image4 from '../../assets/4.jpeg';
import image5 from '../../assets/5.jpeg';
import image6 from '../../assets/6.jpeg';

// Map game IDs to images
const gameImages = {
  1: image1,
  2: image2,
  3: image3,
  4: image4,
  5: image5,
  6: image6
};

/**
 * GamesShowcase Component - Game browser with package tiers
 */
const GamesShowcase = () => {
  const { t } = useTranslation();
  const { toggleGame, isGameSelected } = useEvent();

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

        {/* Games Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 items-stretch"
        >
          {GAMES.map((game, index) => (
            <GameCard
              key={game.id}
              game={game}
              index={index}
              isSelected={isGameSelected(game.id)}
              onToggle={() => toggleGame(game)}
            />
          ))}
        </motion.div>

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
          <div className="flex flex-wrap gap-2 flex-shrink-0">
            {game.tags.map((tag, i) => (
              <span
                key={i}
                className="px-2 py-1 bg-white/5 rounded text-xs text-gray-300"
              >
                {t(`games.gamesList.${game.id}.tags.${i + 1}`)}
              </span>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default GamesShowcase;

