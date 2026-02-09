import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cake, Briefcase, Heart, GraduationCap, DollarSign, Star,
  ChevronLeft, ChevronRight, Check, Calendar, Users as UsersIcon
} from 'lucide-react';
import { SectionHeader, Button, Card } from '../shared';
import { useEvent } from '../../context/EventContext';
import { EVENT_TYPES, GAMES } from '../../utils/constants';
import { calculateEstimate, formatPrice } from '../../utils/helpers';

/**
 * BuildYourArcade Component - Multi-step event builder
 */
const BuildYourArcade = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const { 
    selectedGames, 
    eventDetails, 
    updateEventDetails, 
    toggleGame 
  } = useEvent();

  const totalSteps = 4;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    }
  };

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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          title="Build Your Arcade"
          subtitle="Customize your perfect event package in 4 easy steps"
          alignment="center"
        />

        {/* Progress Indicator */}
        <StepIndicator currentStep={currentStep} totalSteps={totalSteps} />

        {/* Step Content */}
        <div className="mt-12">
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
        <div className="flex justify-between items-center mt-12">
          <Button
            variant="ghost"
            onClick={handlePrev}
            disabled={currentStep === 1}
            icon={<ChevronLeft />}
          >
            Previous
          </Button>

          <div className="text-gray-400 text-sm">
            Step {currentStep} of {totalSteps}
          </div>

          {currentStep < totalSteps ? (
            <Button
              variant="primary"
              onClick={handleNext}
              icon={<ChevronRight />}
            >
              Next Step
            </Button>
          ) : (
            <Button
              variant="primary"
              onClick={scrollToContact}
              icon={<Check />}
            >
              Get Quote
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
  const steps = [
    { number: 1, label: 'Event Type' },
    { number: 2, label: 'Select Games' },
    { number: 3, label: 'Details' },
    { number: 4, label: 'Summary' },
  ];

  return (
    <div className="flex justify-between items-center max-w-3xl mx-auto">
      {steps.map((step, index) => (
        <React.Fragment key={step.number}>
          <div className="flex flex-col items-center">
            <motion.div
              className={`
                w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg
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
              {currentStep > step.number ? <Check /> : step.number}
            </motion.div>
            <span className="text-sm text-gray-400 mt-2 hidden sm:block">
              {step.label}
            </span>
          </div>
          {index < steps.length - 1 && (
            <div className="flex-1 h-1 mx-2 bg-white/10 relative">
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
    >
      <h3 className="text-2xl font-bold text-center text-white mb-8">
        What type of event are you planning?
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className={`
              mb-3 flex justify-center
              ${eventDetails.eventType === type.id ? 'text-neon-pink' : 'text-neon-cyan'}
            `}>
              {iconMap[type.icon]}
            </div>
            <div className="text-lg font-semibold text-white">
              {type.label}
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
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-2xl font-bold text-center text-white mb-4">
        Select Your Games
      </h3>
      <p className="text-center text-gray-400 mb-8">
        {selectedGames.length} game{selectedGames.length !== 1 ? 's' : ''} selected
      </p>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[500px] overflow-y-auto pr-2">
        {GAMES.map((game) => {
          const isSelected = selectedGames.some(g => g.id === game.id);
          return (
            <motion.button
              key={game.id}
              onClick={() => toggleGame(game)}
              className={`
                p-4 rounded-xl border-2 text-left transition-all duration-300
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
                {game.name}
              </h4>
              <p className="text-xs text-gray-400">
                {game.specs.players} Players
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
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
      className="max-w-2xl mx-auto"
    >
      <h3 className="text-2xl font-bold text-center text-white mb-8">
        Event Details
      </h3>

      <Card variant="glass">
        <div className="p-8 space-y-6">
          {/* Date */}
          <div>
            <label className="block text-white font-semibold mb-2 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-neon-pink" />
              Event Date
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
              Event Duration: {eventDetails.duration} hours
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
              <span>2 hours</span>
              <span>12 hours</span>
            </div>
          </div>

          {/* Guest Count */}
          <div>
            <label className="block text-white font-semibold mb-2 flex items-center gap-2">
              <UsersIcon className="w-5 h-5 text-neon-cyan" />
              Expected Guests
            </label>
            <input
              type="number"
              min="10"
              max="500"
              value={eventDetails.guestCount}
              onChange={(e) => updateEventDetails({ guestCount: parseInt(e.target.value) })}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-neon-cyan focus:outline-none"
              placeholder="e.g., 50"
            />
          </div>

          {/* Venue */}
          <div>
            <label className="block text-white font-semibold mb-2">
              Venue/Location
            </label>
            <input
              type="text"
              value={eventDetails.venue}
              onChange={(e) => updateEventDetails({ venue: e.target.value })}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-neon-cyan focus:outline-none"
              placeholder="Enter venue address or name"
            />
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
  const estimate = calculateEstimate(
    selectedGames,
    eventDetails.duration,
    eventDetails.guestCount
  );

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
      className="max-w-3xl mx-auto"
    >
      <h3 className="text-2xl font-bold text-center text-white mb-8">
        Your Event Summary
      </h3>

      <Card variant="glass">
        <div className="p-8">
          {/* Event Details Summary */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <h4 className="text-neon-cyan font-semibold mb-4">Event Details</h4>
              <div className="space-y-2 text-gray-300">
                <p><span className="text-white font-semibold">Type:</span> {eventDetails.eventType || 'Not specified'}</p>
                <p><span className="text-white font-semibold">Date:</span> {eventDetails.date || 'Not specified'}</p>
                <p><span className="text-white font-semibold">Duration:</span> {eventDetails.duration} hours</p>
                <p><span className="text-white font-semibold">Guests:</span> {eventDetails.guestCount}</p>
                <p><span className="text-white font-semibold">Venue:</span> {eventDetails.venue || 'Not specified'}</p>
              </div>
            </div>

            <div>
              <h4 className="text-neon-pink font-semibold mb-4">Selected Games ({selectedGames.length})</h4>
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {selectedGames.length > 0 ? (
                  selectedGames.map(game => (
                    <p key={game.id} className="text-gray-300 flex items-center gap-2">
                      <Check className="w-4 h-4 text-neon-cyan" />
                      {game.name}
                    </p>
                  ))
                ) : (
                  <p className="text-gray-500 italic">No games selected</p>
                )}
              </div>
            </div>
          </div>

          {/* Estimated Price */}
          <div className="border-t border-white/10 pt-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xl text-white font-semibold">Estimated Price:</span>
              <span className="text-3xl font-bold neon-text-pink">
                {formatPrice(estimate)}
              </span>
            </div>
            <p className="text-sm text-gray-400 text-center">
              *Final pricing will be provided in your custom quote
            </p>
          </div>

          {/* CTA */}
          <div className="mt-8">
            <Button
              variant="primary"
              size="lg"
              className="w-full"
              onClick={scrollToContact}
            >
              Request Your Custom Quote
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default BuildYourArcade;

