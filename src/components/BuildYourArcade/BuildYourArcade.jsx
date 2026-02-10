import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cake, Briefcase, Heart, GraduationCap, DollarSign, Star,
  ChevronLeft, ChevronRight, Check, Calendar
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SectionHeader, Button, Card } from '../shared';
import { useEvent } from '../../context/EventContext';
import { EVENT_TYPES, GAMES } from '../../utils/constants';
import { CONTACT_INFO } from '../../utils/constants';
import { generateWhatsAppLink } from '../../utils/helpers';

/**
 * BuildYourArcade Component - Multi-step event builder
 */
const BuildYourArcade = () => {
  const { t, i18n } = useTranslation();
  const [currentStep, setCurrentStep] = useState(1);
  const { 
    selectedGames, 
    eventDetails, 
    updateEventDetails, 
    toggleGame 
  } = useEvent();
  
  const isRTL = i18n.language === 'ar';

  const totalSteps = 4;

  const handleNext = () => {
    // Validate step 1: require event type
    if (currentStep === 1 && !eventDetails.eventType) {
      return; // Don't proceed if no event type selected
    }
    
    // Validate step 2: require at least 2 games
    if (currentStep === 2 && selectedGames.length < 2) {
      return; // Don't proceed if less than 2 games selected
    }
    
    // Validate step 3: require venue
    if (currentStep === 3 && !eventDetails.venue) {
      return; // Don't proceed if venue is not filled
    }
    
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    }
  };
  
  const canProceed = (currentStep === 1 && eventDetails.eventType) || 
                     (currentStep === 2 && selectedGames.length >= 2) ||
                     (currentStep === 3 && eventDetails.venue) ||
                     (currentStep !== 1 && currentStep !== 2 && currentStep !== 3);

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="builder" className="py-20 bg-gradient-to-b from-black to-dark-navy relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-background opacity-10"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 overflow-visible">
        <SectionHeader
          title={t('builder.title')}
          subtitle={t('builder.subtitle')}
          alignment="center"
        />

        {/* Progress Indicator */}
        <StepIndicator currentStep={currentStep} totalSteps={totalSteps} />

        {/* Step Content */}
        <div className="mt-12 overflow-visible -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {currentStep === 1 && (
              <Step1EventType 
                key="step1"
                eventDetails={eventDetails}
                updateEventDetails={updateEventDetails}
              />
            )}
            {currentStep === 2 && (
              <Step2GameSelection 
                key="step2"
                selectedGames={selectedGames}
                toggleGame={toggleGame}
              />
            )}
            {currentStep === 3 && (
              <Step3EventDetails 
                key="step3"
                eventDetails={eventDetails}
                updateEventDetails={updateEventDetails}
              />
            )}
            {currentStep === 4 && (
              <Step4Summary 
                key="step4"
                selectedGames={selectedGames}
                eventDetails={eventDetails}
                scrollToContact={scrollToContact}
              />
            )}
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-12 gap-4">
          <Button
            variant="ghost"
            onClick={handlePrev}
            disabled={currentStep === 1}
            icon={isRTL ? <ChevronRight /> : <ChevronLeft />}
            iconPosition={isRTL ? "right" : "left"}
            className="w-full sm:w-auto order-2 sm:order-1"
          >
            {t('builder.previous')}
          </Button>

          <div className="text-gray-400 text-sm order-1 sm:order-2">
            {t('builder.stepOf', { current: currentStep, total: totalSteps })}
          </div>

          {currentStep < totalSteps && (
            <Button
              variant="primary"
              onClick={handleNext}
              disabled={!canProceed}
              icon={isRTL ? <ChevronLeft /> : <ChevronRight />}
              iconPosition={isRTL ? "left" : "right"}
              className="w-full sm:w-auto order-3"
            >
              {t('builder.nextStep')}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

/**
 * Progress Indicator Component
 */
const StepIndicator = ({ currentStep, totalSteps }) => {
  const { t } = useTranslation();
  const steps = [
    { number: 1, label: t('builder.steps.eventType') },
    { number: 2, label: t('builder.steps.selectGames') },
    { number: 3, label: t('builder.steps.details') },
    { number: 4, label: t('builder.steps.summary') },
  ];

  return (
    <div className="flex justify-between items-center max-w-3xl mx-auto px-2">
      {steps.map((step, index) => (
        <React.Fragment key={step.number}>
          <div className="flex flex-col items-center">
            <motion.div
              className={`
                w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-base sm:text-lg
                ${currentStep >= step.number 
                  ? 'bg-neon-pink text-white shadow-neon-pink' 
                  : 'bg-white/10 text-gray-400'
                }
              `}
              animate={currentStep === step.number ? {
                scale: [1, 1.1, 1],
                transition: { duration: 0.5 }
              } : {}}
            >
              {currentStep > step.number ? <Check className="w-4 h-4 sm:w-5 sm:h-5" /> : step.number}
            </motion.div>
            <span className="text-xs sm:text-sm text-gray-400 mt-2 hidden md:block text-center max-w-[80px]">
              {step.label}
            </span>
          </div>
          {index < steps.length - 1 && (
            <div className="flex-1 h-1 mx-1 sm:mx-2 bg-white/10 relative">
              <motion.div
                className="h-full bg-neon-pink"
                initial={{ width: 0 }}
                animate={{ 
                  width: currentStep > step.number ? '100%' : '0%' 
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

/**
 * Step 1: Event Type Selection
 */
const Step1EventType = ({ eventDetails, updateEventDetails }) => {
  const { t } = useTranslation();
  const iconMap = {
    cake: <Cake className="w-8 h-8" />,
    briefcase: <Briefcase className="w-8 h-8" />,
    heart: <Heart className="w-8 h-8" />,
    'graduation-cap': <GraduationCap className="w-8 h-8" />,
    'dollar-sign': <DollarSign className="w-8 h-8" />,
    star: <Star className="w-8 h-8" />,
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
      className="overflow-visible"
    >
      <h3 className="text-2xl font-bold text-center text-white mb-4">
        {t('builder.step1.title')}
      </h3>
      {!eventDetails.eventType && (
        <p className="text-center text-neon-pink mb-6 text-sm font-semibold">
          {t('builder.step1.required')}
        </p>
      )}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
        {EVENT_TYPES.map((type) => (
          <motion.button
            key={type.id}
            onClick={() => updateEventDetails({ eventType: type.id })}
            className={`
              p-6 rounded-xl border-2 transition-all duration-300 text-center
              ${eventDetails.eventType === type.id
                ? 'border-neon-pink bg-neon-pink/10 shadow-neon-pink'
                : 'border-white/10 bg-white/5 hover:border-neon-cyan hover:bg-neon-cyan/5'
              }
            `}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <div className={`
              mb-3 flex justify-center
              ${eventDetails.eventType === type.id ? 'text-neon-pink' : 'text-neon-cyan'}
            `}>
              {iconMap[type.icon]}
            </div>
            <div className="text-lg font-semibold text-white">
              {t(`eventTypes.${type.id}`)}
            </div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

/**
 * Step 2: Game Selection
 */
const Step2GameSelection = ({ selectedGames, toggleGame }) => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
      className="overflow-visible"
    >
      <h3 className="text-2xl font-bold text-center text-white mb-4">
        {t('builder.step2.title')}
      </h3>
      <p className="text-center text-gray-400 mb-2">
        {t('builder.step2.gamesSelected', { count: selectedGames.length })}
      </p>
      {selectedGames.length < 2 && (
        <p className="text-center text-neon-pink mb-6 text-sm font-semibold">
          {t('builder.step2.minimumGames')}
        </p>
      )}
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[500px] overflow-y-auto p-6">
        {GAMES.map((game) => {
          const isSelected = selectedGames.some(g => g.id === game.id);
          return (
            <motion.button
              key={game.id}
              onClick={() => toggleGame(game)}
              className={`
                p-4 rounded-xl border-2 transition-all duration-300
                ${isRTL ? 'text-right' : 'text-left'}
                ${isSelected
                  ? 'border-neon-cyan bg-neon-cyan/10 shadow-neon-cyan'
                  : 'border-white/10 bg-white/5 hover:border-neon-pink'
                }
              `}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="text-2xl">🎮</div>
                {isSelected && (
                  <Check className="w-5 h-5 text-neon-cyan" />
                )}
              </div>
              <h4 className="font-bold text-white text-sm mb-1">
                {t(`games.gamesList.${game.id}.name`)}
              </h4>
              <p className="text-xs text-gray-400">
                {game.specs.players} {t('games.players')}
              </p>
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
};

/**
 * Step 3: Event Details
 */
const Step3EventDetails = ({ eventDetails, updateEventDetails }) => {
  const { t } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
      className="max-w-2xl mx-auto"
    >
      <h3 className="text-2xl font-bold text-center text-white mb-8">
        {t('builder.step3.title')}
      </h3>

      <Card variant="glass">
        <div className="p-8 space-y-6">
          {/* Date */}
          <div>
            <label className="block text-white font-semibold mb-2 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-neon-pink" />
              {t('builder.step3.eventDate')}
            </label>
            <input
              type="date"
              value={eventDetails.date}
              onChange={(e) => updateEventDetails({ date: e.target.value })}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-neon-cyan focus:outline-none"
            />
          </div>

          {/* Duration */}
          <div>
            <label className="block text-white font-semibold mb-2">
              {t('builder.step3.eventDuration', { hours: eventDetails.duration })}
            </label>
            <input
              type="range"
              min="2"
              max="12"
              value={eventDetails.duration}
              onChange={(e) => updateEventDetails({ duration: parseInt(e.target.value) })}
              className="w-full accent-neon-pink"
            />
            <div className="flex justify-between text-sm text-gray-400 mt-1">
              <span>2 {t('builder.step3.hours')}</span>
              <span>12 {t('builder.step3.hours')}</span>
            </div>
          </div>

          {/* Venue */}
          <div>
            <label className="block text-white font-semibold mb-2">
              {t('builder.step3.venue')}
            </label>
            <input
              type="text"
              value={eventDetails.venue}
              onChange={(e) => updateEventDetails({ venue: e.target.value })}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-neon-cyan focus:outline-none"
              placeholder={t('builder.step3.venuePlaceholder')}
            />
            {!eventDetails.venue && (
              <p className="text-neon-pink text-sm font-semibold mt-2">
                {t('builder.step3.venueRequired')}
              </p>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

/**
 * Step 4: Summary
 */
const Step4Summary = ({ selectedGames, eventDetails, scrollToContact }) => {
  const { t } = useTranslation();

  // Generate detailed WhatsApp message with all event details
  const whatsappMessage = useMemo(() => {
    let message = t('contact.whatsapp.message') + '\n\n';
    
    // Event Type
    if (eventDetails.eventType) {
      message += `*${t('builder.step4.type')}:* ${t(`eventTypes.${eventDetails.eventType}`)}\n`;
    }
    
    // Event Date
    if (eventDetails.date) {
      message += `*${t('builder.step4.date')}:* ${eventDetails.date}\n`;
    }
    
    // Duration
    if (eventDetails.duration) {
      message += `*${t('builder.step4.duration')}:* ${eventDetails.duration} ${t('builder.step3.hours')}\n`;
    }
    
    // Venue
    if (eventDetails.venue) {
      message += `*${t('builder.step3.venue')}:* ${eventDetails.venue}\n`;
    }
    
    // Selected Games
    if (selectedGames.length > 0) {
      message += `\n*${t('builder.step4.selectedGames')}:*\n`;
      selectedGames.forEach((game, index) => {
        message += `${index + 1}. ${t(`games.gamesList.${game.id}.name`)}\n`;
      });
    }
    
    return message;
  }, [selectedGames, eventDetails, t]);
  
  const whatsappLink = generateWhatsAppLink(CONTACT_INFO.whatsapp, whatsappMessage);

  const handleWhatsAppClick = () => {
    window.open(whatsappLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
      className="max-w-3xl mx-auto"
    >
      <h3 className="text-2xl font-bold text-center text-white mb-8">
        {t('builder.step4.title')}
      </h3>

      <Card variant="glass">
        <div className="p-8">
          {/* Event Details Summary */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <h4 className="text-neon-cyan font-semibold mb-4">{t('builder.step4.eventDetails')}</h4>
              <div className="space-y-2 text-gray-300">
                <p><span className="text-white font-semibold">{t('builder.step4.type')}:</span> {eventDetails.eventType ? t(`eventTypes.${eventDetails.eventType}`) : t('builder.step4.notSpecified')}</p>
                <p><span className="text-white font-semibold">{t('builder.step4.date')}:</span> {eventDetails.date || t('builder.step4.notSpecified')}</p>
                <p><span className="text-white font-semibold">{t('builder.step4.duration')}:</span> {eventDetails.duration} {t('builder.step3.hours')}</p>
                <p><span className="text-white font-semibold">{t('builder.step3.venue')}:</span> {eventDetails.venue || t('builder.step4.notSpecified')}</p>
              </div>
            </div>

            <div>
              <h4 className="text-neon-pink font-semibold mb-4">{t('builder.step4.selectedGames')} ({selectedGames.length})</h4>
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {selectedGames.length > 0 ? (
                  selectedGames.map(game => (
                    <p key={game.id} className="text-gray-300 flex items-center gap-2">
                      <Check className="w-4 h-4 text-neon-cyan" />
                      {t(`games.gamesList.${game.id}.name`)}
                    </p>
                  ))
                ) : (
                  <p className="text-gray-500 italic">{t('builder.step4.noGamesSelected')}</p>
                )}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8">
            <Button
              variant="primary"
              size="lg"
              className="w-full"
              onClick={handleWhatsAppClick}
            >
              {t('builder.step4.requestQuote')}
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default BuildYourArcade;

