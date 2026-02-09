import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, RotateCcw, Trophy, Zap, Target, Brain, Palette, Clock, Gamepad2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SectionHeader, Button, Card } from '../shared';

/**
 * MiniGame Component - Multiple interactive games
 */
const MiniGame = () => {
  const { t } = useTranslation();
  const [selectedGame, setSelectedGame] = useState(null);

  const games = [
    {
      id: 'neon-blast',
      name: t('miniGame.games.neonBlast.name'),
      icon: <Target className="w-8 h-8" />,
      description: t('miniGame.games.neonBlast.description'),
      color: 'neon-pink',
    },
    {
      id: 'memory-match',
      name: t('miniGame.games.memoryMatch.name'),
      icon: <Brain className="w-8 h-8" />,
      description: t('miniGame.games.memoryMatch.description'),
      color: 'neon-cyan',
    },
    {
      id: 'color-rush',
      name: t('miniGame.games.colorRush.name'),
      icon: <Palette className="w-8 h-8" />,
      description: t('miniGame.games.colorRush.description'),
      color: 'neon-purple',
    },
    {
      id: 'reaction-time',
      name: t('miniGame.games.reactionTime.name'),
      icon: <Clock className="w-8 h-8" />,
      description: t('miniGame.games.reactionTime.description'),
      color: 'neon-orange',
    },
  ];

  return (
    <section id="mini-game" className="py-20 bg-dark-navy relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-pink/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-cyan/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          title={t('miniGame.title')}
          subtitle={t('miniGame.subtitle')}
          alignment="center"
        />

        {!selectedGame ? (
          <GameSelector games={games} onSelectGame={setSelectedGame} />
        ) : (
          <div>
            <div className="text-center mb-8">
              <Button
                variant="ghost"
                onClick={() => setSelectedGame(null)}
              >
                ← {t('miniGame.backToGames')}
              </Button>
            </div>
            {selectedGame === 'neon-blast' && <NeonBlast />}
            {selectedGame === 'memory-match' && <MemoryMatch />}
            {selectedGame === 'color-rush' && <ColorRush />}
            {selectedGame === 'reaction-time' && <ReactionTime />}
          </div>
        )}
      </div>
    </section>
  );
};

/**
 * Game Selector Component
 */
const GameSelector = ({ games, onSelectGame }) => {
  const { t } = useTranslation();
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {games.map((game, index) => (
        <motion.div
          key={game.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card variant="glass" hover glowColor={game.color.split('-')[1]}>
            <button
              onClick={() => onSelectGame(game.id)}
              className="w-full p-8 text-center transition-all"
            >
              <div className={`text-${game.color} mb-4 flex justify-center`}>
                {game.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {game.name}
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                {game.description}
              </p>
              <Button variant="outline" size="sm" className="w-full">
                {t('miniGame.playNow')}
              </Button>
            </button>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

/**
 * Game 1: Neon Blast
 */
const NeonBlast = () => {
  const { t } = useTranslation();
  const [gameState, setGameState] = useState('idle'); // idle, playing, gameOver
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [targets, setTargets] = useState([]);
  const [clicks, setClicks] = useState(0);
  const [accuracy, setAccuracy] = useState(100);

  // Load high score from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('arcadium-high-score');
    if (saved) setHighScore(parseInt(saved));
  }, []);

  // Game timer
  useEffect(() => {
    if (gameState === 'playing' && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(prev => prev - 1), 1000);
      return () => clearTimeout(timer);
    } else if (gameState === 'playing' && timeLeft === 0) {
      endGame();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameState, timeLeft]);

  // Spawn targets during gameplay
  useEffect(() => {
    if (gameState === 'playing') {
      const interval = setInterval(() => {
        spawnTarget();
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [gameState]);

  // Remove targets after 2 seconds
  useEffect(() => {
    if (targets.length > 0) {
      const timeout = setTimeout(() => {
        setTargets(prev => prev.slice(1));
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [targets]);

  const spawnTarget = () => {
    const newTarget = {
      id: Date.now(),
      x: Math.random() * 80 + 10, // 10-90% to keep within bounds
      y: Math.random() * 70 + 10,
      color: ['neon-pink', 'neon-cyan', 'neon-purple', 'neon-orange'][Math.floor(Math.random() * 4)],
      points: Math.floor(Math.random() * 3) + 1, // 1-3 points
    };
    setTargets(prev => [...prev, newTarget]);
  };

  const startGame = () => {
    setGameState('playing');
    setScore(0);
    setTimeLeft(30);
    setTargets([]);
    setClicks(0);
    setAccuracy(100);
  };

  const endGame = () => {
    setGameState('gameOver');
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem('arcadium-high-score', score.toString());
    }
  };

  const handleTargetClick = (targetId, points) => {
    setScore(prev => prev + points * 10);
    setTargets(prev => prev.filter(t => t.id !== targetId));
    setClicks(prev => prev + 1);
    updateAccuracy(true);
  };

  const handleMissClick = () => {
    if (gameState === 'playing') {
      setClicks(prev => prev + 1);
      updateAccuracy(false);
    }
  };

  const updateAccuracy = (hit) => {
    setAccuracy(prev => {
      const newClicks = clicks + 1;
      const hits = hit ? (prev * clicks / 100) + 1 : (prev * clicks / 100);
      return Math.round((hits / newClicks) * 100);
    });
  };

  return (
    <div className="grid lg:grid-cols-3 gap-8">
          {/* Game Stats */}
          <div className="lg:col-span-1 space-y-4">
            <Card variant="glass">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Trophy className="w-6 h-6 text-neon-yellow" />
                  <h3 className="text-xl font-bold text-white">{t('miniGame.neonBlast.stats')}</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-400 text-sm">{t('miniGame.neonBlast.currentScore')}</p>
                    <p className="text-3xl font-bold neon-text-pink">{score}</p>
                  </div>
                  
                  <div>
                    <p className="text-gray-400 text-sm">{t('miniGame.neonBlast.highScore')}</p>
                    <p className="text-2xl font-bold neon-text-cyan">{highScore}</p>
                  </div>
                  
                  {gameState === 'playing' && (
                    <>
                      <div>
                        <p className="text-gray-400 text-sm">{t('miniGame.neonBlast.timeLeft')}</p>
                        <p className="text-2xl font-bold text-white">{timeLeft}s</p>
                      </div>
                      
                      <div>
                        <p className="text-gray-400 text-sm">{t('miniGame.neonBlast.accuracy')}</p>
                        <p className="text-xl font-bold text-neon-purple">{accuracy}%</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </Card>

            {/* How to Play */}
            <Card variant="glass">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-6 h-6 text-neon-cyan" />
                  <h3 className="text-lg font-bold text-white">{t('miniGame.neonBlast.howToPlay')}</h3>
                </div>
                
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <Zap className="w-4 h-4 text-neon-pink mt-1 flex-shrink-0" />
                    {t('miniGame.neonBlast.instructions.1')}
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="w-4 h-4 text-neon-cyan mt-1 flex-shrink-0" />
                    {t('miniGame.neonBlast.instructions.2')}
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="w-4 h-4 text-neon-purple mt-1 flex-shrink-0" />
                    {t('miniGame.neonBlast.instructions.3')}
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="w-4 h-4 text-neon-orange mt-1 flex-shrink-0" />
                    {t('miniGame.neonBlast.instructions.4')}
                  </li>
                </ul>
              </div>
            </Card>
          </div>

          {/* Game Area */}
          <div className="lg:col-span-2">
            <Card variant="neon" glowColor="cyan">
              <div 
                className="relative bg-dark-navy/50 rounded-lg overflow-hidden"
                style={{ height: '500px' }}
                onClick={handleMissClick}
              >
                {/* Idle State */}
                {gameState === 'idle' && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Gamepad2 className="w-24 h-24 text-neon-pink mb-6" />
                    </motion.div>
                    <h3 className="text-3xl font-bold text-white mb-4">{t('miniGame.neonBlast.readyToPlay')}</h3>
                    <p className="text-gray-300 mb-8">{t('miniGame.neonBlast.readyDescription')}</p>
                    <Button
                      variant="primary"
                      size="lg"
                      onClick={startGame}
                      icon={<Play className="w-5 h-5" />}
                    >
                      {t('miniGame.neonBlast.startGame')}
                    </Button>
                  </div>
                )}

                {/* Playing State */}
                {gameState === 'playing' && (
                  <>
                    {/* Timer Bar */}
                    <div className="absolute top-0 left-0 right-0 h-2 bg-white/10">
                      <motion.div
                        className="h-full bg-gradient-to-r from-neon-pink to-neon-cyan"
                        initial={{ width: '100%' }}
                        animate={{ width: `${(timeLeft / 30) * 100}%` }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>

                    {/* Score Display */}
                    <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                      <div className="text-2xl font-bold neon-text-pink">
                        {t('miniGame.neonBlast.score')}: {score}
                      </div>
                      <div className="text-xl font-bold text-white">
                        {timeLeft}s
                      </div>
                    </div>

                    {/* Targets */}
                    <AnimatePresence>
                      {targets.map((target) => (
                        <motion.button
                          key={target.id}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                          className={`absolute w-16 h-16 rounded-full cursor-pointer border-4 border-${target.color} bg-${target.color}/20 hover:bg-${target.color}/40 transition-all shadow-${target.color}`}
                          style={{
                            left: `${target.x}%`,
                            top: `${target.y}%`,
                            transform: 'translate(-50%, -50%)',
                          }}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleTargetClick(target.id, target.points);
                          }}
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <span className="text-white font-bold text-xl">
                            {target.points}
                          </span>
                        </motion.button>
                      ))}
                    </AnimatePresence>
                  </>
                )}

                {/* Game Over State */}
                {gameState === 'gameOver' && (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="absolute inset-0 flex flex-col items-center justify-center"
                  >
                    <Trophy className="w-24 h-24 text-neon-yellow mb-6 animate-pulse" />
                    <h3 className="text-4xl font-bold neon-text-cyan mb-4">{t('miniGame.neonBlast.gameOver')}</h3>
                    <p className="text-2xl text-white mb-2">{t('miniGame.neonBlast.finalScore')} <span className="neon-text-pink font-bold">{score}</span></p>
                    <p className="text-lg text-gray-300 mb-2">{t('miniGame.neonBlast.accuracy')}: {accuracy}%</p>
                    {score > highScore && (
                      <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-xl text-neon-yellow font-bold mb-6"
                      >
                        {t('miniGame.neonBlast.newHighScore')}
                      </motion.p>
                    )}
                    <Button
                      variant="primary"
                      size="lg"
                      onClick={startGame}
                      icon={<RotateCcw className="w-5 h-5" />}
                    >
                      {t('miniGame.neonBlast.playAgain')}
                    </Button>
                  </motion.div>
                )}
              </div>
            </Card>

            {/* Game Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-6 text-center"
            >
              <p className="text-gray-400">
                {t('miniGame.neonBlast.tasteOfAction')}
              </p>
            </motion.div>
          </div>
    </div>
  );
};

/**
 * Game 2: Memory Match
 */
const MemoryMatch = () => {
  const { t } = useTranslation();
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);
  const [gameState, setGameState] = useState('idle');
  const [time, setTime] = useState(0);

  const symbols = ['🎮', '🕹️', '👾', '🎯', '⭐', '💎', '🔥', '⚡'];

  useEffect(() => {
    if (gameState === 'playing') {
      const timer = setInterval(() => setTime(prev => prev + 1), 1000);
      return () => clearInterval(timer);
    }
  }, [gameState]);

  useEffect(() => {
    if (matched.length === cards.length && cards.length > 0) {
      setGameState('won');
    }
  }, [matched, cards]);

  const startGame = () => {
    const shuffled = [...symbols, ...symbols]
      .sort(() => Math.random() - 0.5)
      .map((symbol, i) => ({ id: i, symbol }));
    setCards(shuffled);
    setFlipped([]);
    setMatched([]);
    setMoves(0);
    setTime(0);
    setGameState('playing');
  };

  const handleCardClick = (id) => {
    if (flipped.length === 2 || flipped.includes(id) || matched.includes(id)) return;

    const newFlipped = [...flipped, id];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setMoves(prev => prev + 1);
      const [first, second] = newFlipped;
      if (cards[first].symbol === cards[second].symbol) {
        setMatched([...matched, first, second]);
        setFlipped([]);
      } else {
        setTimeout(() => setFlipped([]), 1000);
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card variant="glass">
        <div className="p-8">
          <div className="flex justify-between items-center mb-6">
            <div>
              <p className="text-gray-400 text-sm">{t('miniGame.memoryMatch.moves')}</p>
              <p className="text-2xl font-bold neon-text-cyan">{moves}</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">{t('miniGame.memoryMatch.time')}</p>
              <p className="text-2xl font-bold neon-text-pink">{time}s</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">{t('miniGame.memoryMatch.matched')}</p>
              <p className="text-2xl font-bold neon-text-purple">{matched.length / 2}/{symbols.length}</p>
            </div>
          </div>

          <div className="min-h-[400px] flex items-center justify-center">
            {gameState === 'idle' && (
              <div className="text-center">
                <Brain className="w-24 h-24 text-neon-cyan mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">{t('miniGame.memoryMatch.title')}</h3>
                <p className="text-gray-300 mb-8">{t('miniGame.memoryMatch.findPairs')}</p>
                <Button variant="primary" size="lg" onClick={startGame}>
                  {t('miniGame.memoryMatch.startGame')}
                </Button>
              </div>
            )}

            {gameState === 'playing' && (
              <div className="grid grid-cols-4 gap-4 w-full">
                {cards.map((card) => (
                  <motion.button
                    key={card.id}
                    onClick={() => handleCardClick(card.id)}
                    className={`aspect-square rounded-lg text-4xl flex items-center justify-center transition-all ${
                      flipped.includes(card.id) || matched.includes(card.id)
                        ? 'bg-neon-cyan/20 border-2 border-neon-cyan'
                        : 'bg-white/5 border-2 border-white/10 hover:border-neon-pink'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {(flipped.includes(card.id) || matched.includes(card.id)) ? card.symbol : '?'}
                  </motion.button>
                ))}
              </div>
            )}

            {gameState === 'won' && (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center"
              >
                <Trophy className="w-24 h-24 text-neon-yellow mx-auto mb-6" />
                <h3 className="text-3xl font-bold neon-text-cyan mb-4">{t('miniGame.memoryMatch.youWon')}</h3>
                <p className="text-xl text-white mb-2">{t('miniGame.memoryMatch.time')}: {time}s</p>
                <p className="text-xl text-white mb-8">{t('miniGame.memoryMatch.moves')}: {moves}</p>
                <Button variant="primary" size="lg" onClick={startGame}>
                  {t('miniGame.memoryMatch.playAgain')}
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

/**
 * Game 3: Color Rush
 */
const ColorRush = () => {
  const { t } = useTranslation();
  const [gameState, setGameState] = useState('idle');
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(20);
  const [targetColor, setTargetColor] = useState('');
  const [options, setOptions] = useState([]);

  const colors = [
    { name: 'Pink', class: 'bg-neon-pink', text: 'text-neon-pink' },
    { name: 'Cyan', class: 'bg-neon-cyan', text: 'text-neon-cyan' },
    { name: 'Purple', class: 'bg-neon-purple', text: 'text-neon-purple' },
    { name: 'Orange', class: 'bg-neon-orange', text: 'text-neon-orange' },
  ];

  useEffect(() => {
    if (gameState === 'playing' && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(prev => prev - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setGameState('gameOver');
    }
  }, [gameState, timeLeft]);

  const startGame = () => {
    setGameState('playing');
    setScore(0);
    setTimeLeft(20);
    generateRound();
  };

  const generateRound = () => {
    const shuffled = [...colors].sort(() => Math.random() - 0.5);
    setTargetColor(shuffled[0].name);
    setOptions(shuffled);
  };

  const handleColorClick = (colorName) => {
    if (colorName === targetColor) {
      setScore(prev => prev + 10);
      generateRound();
    } else {
      setScore(prev => Math.max(0, prev - 5));
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <Card variant="glass">
        <div className="p-8 text-center">
          <div className="flex justify-around mb-8">
            <div>
              <p className="text-gray-400 text-sm">{t('miniGame.colorRush.score')}</p>
              <p className="text-3xl font-bold neon-text-pink">{score}</p>
            </div>
            {gameState === 'playing' && (
              <div>
                <p className="text-gray-400 text-sm">{t('miniGame.colorRush.time')}</p>
                <p className="text-3xl font-bold neon-text-cyan">{timeLeft}s</p>
              </div>
            )}
          </div>

          <div className="min-h-[300px] flex items-center justify-center">
            {gameState === 'idle' && (
              <div>
                <Palette className="w-24 h-24 text-neon-purple mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">{t('miniGame.colorRush.title')}</h3>
                <p className="text-gray-300 mb-8">{t('miniGame.colorRush.description')}</p>
                <Button variant="primary" size="lg" onClick={startGame}>
                  {t('miniGame.colorRush.startGame')}
                </Button>
              </div>
            )}

            {gameState === 'playing' && (
              <div className="w-full">
                <h3 className="text-3xl font-bold text-white mb-8">
                  {t('miniGame.colorRush.click')} <span className={colors.find(c => c.name === targetColor)?.text}>{t(`miniGame.colorRush.colors.${targetColor}`)}</span>
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  {options.map((color) => (
                    <motion.button
                      key={color.name}
                      onClick={() => handleColorClick(color.name)}
                      className={`${color.class} h-32 rounded-xl text-white font-bold text-xl transition-all hover:scale-105 shadow-lg`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {t(`miniGame.colorRush.colors.${color.name}`)}
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {gameState === 'gameOver' && (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
              >
                <Trophy className="w-24 h-24 text-neon-yellow mx-auto mb-6" />
                <h3 className="text-3xl font-bold neon-text-purple mb-4">{t('miniGame.colorRush.gameOver')}</h3>
                <p className="text-2xl text-white mb-8">{t('miniGame.colorRush.finalScore')} <span className="neon-text-pink font-bold">{score}</span></p>
                <Button variant="primary" size="lg" onClick={startGame}>
                  {t('miniGame.colorRush.playAgain')}
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

/**
 * Game 4: Reaction Time
 */
const ReactionTime = () => {
  const { t } = useTranslation();
  const [gameState, setGameState] = useState('idle');
  const [waiting, setWaiting] = useState(false);
  const [reactionTime, setReactionTime] = useState(null);
  const [bestTime, setBestTime] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [attempts, setAttempts] = useState(0);

  const startGame = () => {
    setGameState('ready');
    setAttempts(0);
    setReactionTime(null);
  };

  const startRound = () => {
    setWaiting(true);
    setReactionTime(null);
    const delay = 2000 + Math.random() * 3000;
    setTimeout(() => {
      setWaiting(false);
      setStartTime(Date.now());
    }, delay);
  };

  const handleClick = () => {
    if (waiting) {
      setGameState('tooEarly');
      setTimeout(() => setGameState('ready'), 1500);
    } else if (startTime && !reactionTime) {
      const time = Date.now() - startTime;
      setReactionTime(time);
      setAttempts(prev => prev + 1);
      if (!bestTime || time < bestTime) {
        setBestTime(time);
      }
      setStartTime(null);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <Card variant="glass">
        <div className="p-8">
          <div className="flex justify-around mb-8 text-center">
            {reactionTime && (
              <div>
                <p className="text-gray-400 text-sm">{t('miniGame.reactionTime.lastTime')}</p>
                <p className="text-3xl font-bold neon-text-cyan">{reactionTime}ms</p>
              </div>
            )}
            {bestTime && (
              <div>
                <p className="text-gray-400 text-sm">{t('miniGame.reactionTime.bestTime')}</p>
                <p className="text-3xl font-bold neon-text-pink">{bestTime}ms</p>
              </div>
            )}
            {attempts > 0 && (
              <div>
                <p className="text-gray-400 text-sm">{t('miniGame.reactionTime.attempts')}</p>
                <p className="text-3xl font-bold neon-text-purple">{attempts}</p>
              </div>
            )}
          </div>

          <div className="min-h-[300px] flex items-center justify-center">
            {gameState === 'idle' && (
              <div className="text-center">
                <Clock className="w-24 h-24 text-neon-orange mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">{t('miniGame.reactionTime.title')}</h3>
                <p className="text-gray-300 mb-8">{t('miniGame.reactionTime.description')}</p>
                <Button variant="primary" size="lg" onClick={startGame}>
                  {t('miniGame.reactionTime.startTest')}
                </Button>
              </div>
            )}

            {gameState === 'ready' && (
              <div className="text-center w-full">
                {!startTime && !waiting && !reactionTime && (
                  <Button variant="primary" size="lg" onClick={startRound}>
                    {t('miniGame.reactionTime.clickToBegin')}
                  </Button>
                )}
                {waiting && (
                  <motion.div
                    className="w-full h-64 bg-red-600 rounded-xl flex items-center justify-center cursor-pointer"
                    onClick={handleClick}
                  >
                    <p className="text-3xl font-bold text-white">{t('miniGame.reactionTime.wait')}</p>
                  </motion.div>
                )}
                {startTime && (
                  <motion.div
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    className="w-full h-64 bg-neon-green rounded-xl flex items-center justify-center cursor-pointer shadow-neon-green"
                    onClick={handleClick}
                  >
                    <p className="text-4xl font-bold text-dark-navy">{t('miniGame.reactionTime.clickNow')}</p>
                  </motion.div>
                )}
                {reactionTime && (
                  <div className="text-center">
                    <p className="text-2xl text-gray-300 mb-6">
                      {reactionTime < 200 ? t('miniGame.reactionTime.feedback.lightningFast') :
                       reactionTime < 300 ? t('miniGame.reactionTime.feedback.greatReflexes') :
                       reactionTime < 400 ? t('miniGame.reactionTime.feedback.goodJob') :
                       t('miniGame.reactionTime.feedback.tryFaster')}
                    </p>
                    <Button variant="primary" onClick={startRound}>
                      {t('miniGame.reactionTime.tryAgain')}
                    </Button>
                  </div>
                )}
              </div>
            )}

            {gameState === 'tooEarly' && (
              <div className="text-center">
                <p className="text-3xl font-bold text-red-500 mb-4">{t('miniGame.reactionTime.tooEarly')}</p>
                <p className="text-gray-300">{t('miniGame.reactionTime.waitForGreen')}</p>
              </div>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default MiniGame;

