import React, { useState, useEffect } from 'react';
import { EventProvider } from './context/EventContext';
import './App.css';

// Import all components
import AppBar from './components/AppBar/AppBar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import GamesShowcase from './components/GamesShowcase/GamesShowcase';
import BuildYourArcade from './components/BuildYourArcade/BuildYourArcade';
import HowItWorks from './components/HowItWorks/HowItWorks';
import MiniGame from './components/MiniGame/MiniGame';
import Gallery from './components/Gallery/Gallery';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

// Import floating elements
import { WhatsAppFloat, ScrollToTop } from './components/FloatingElements';

/**
 * Main App Component
 */
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Simulate component loading with progress
    const timer = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + 10;
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <EventProvider>
      <div className="App min-h-screen bg-dark-navy text-white overflow-x-hidden">
        {/* Loading Screen */}
        {isLoading && (
          <div 
            className="fixed inset-0 bg-dark-navy z-50 flex flex-col items-center justify-center transition-opacity duration-500"
            style={{ opacity: isLoading ? 1 : 0 }}
          >
            <div className="text-center">
              <h1 className="font-heading text-6xl md:text-8xl font-bold neon-text-pink tracking-wider mb-8 animate-glow-pulse">
                ARCADIUM
              </h1>
              
              <div className="w-80 h-1 bg-white/10 rounded-full overflow-hidden mb-4 mx-auto">
                <div 
                  className="h-full bg-gradient-to-r from-neon-pink to-neon-cyan transition-all duration-300 shadow-neon-cyan"
                  style={{ width: `${loadingProgress}%` }}
                ></div>
              </div>
              
              <p className="text-gray-400 font-body tracking-wider text-center">
                Loading... {loadingProgress}%
              </p>
              
              <div className="mt-8 flex justify-center">
                <div className="w-12 h-12 border-4 border-neon-pink border-t-transparent rounded-full animate-spin"></div>
              </div>
            </div>
          </div>
        )}

        {/* Main Content */}
        {!isLoading && (
          <>
            {/* Navigation Bar */}
            <AppBar />

            {/* All Sections */}
            <Hero />
            <About />
            <GamesShowcase />
            <BuildYourArcade />
            <HowItWorks />
            <MiniGame />
            <Gallery />
            <Testimonials />
            <Contact />
            <Footer />

            {/* Floating Elements */}
            <WhatsAppFloat />
            <ScrollToTop />
          </>
        )}
      </div>
    </EventProvider>
  );
}

export default App;
