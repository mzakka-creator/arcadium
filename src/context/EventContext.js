import React, { createContext, useContext, useState, useCallback } from 'react';

const EventContext = createContext();

/**
 * Event Context Provider for managing cross-component state
 */
export const EventProvider = ({ children }) => {
  const [selectedGames, setSelectedGames] = useState([]);
  const [eventDetails, setEventDetails] = useState({
    eventType: '',
    date: '',
    duration: 3,
    guestCount: 30,
    venue: '',
  });
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  // Add game to selection
  const addGame = useCallback((game) => {
    setSelectedGames(prev => {
      // Check if game already exists
      if (prev.find(g => g.id === game.id)) {
        return prev;
      }
      return [...prev, game];
    });
  }, []);

  // Remove game from selection
  const removeGame = useCallback((gameId) => {
    setSelectedGames(prev => prev.filter(g => g.id !== gameId));
  }, []);

  // Toggle game selection
  const toggleGame = useCallback((game) => {
    setSelectedGames(prev => {
      const exists = prev.find(g => g.id === game.id);
      if (exists) {
        return prev.filter(g => g.id !== game.id);
      }
      return [...prev, game];
    });
  }, []);

  // Clear all selected games
  const clearGames = useCallback(() => {
    setSelectedGames([]);
  }, []);

  // Update event details
  const updateEventDetails = useCallback((details) => {
    setEventDetails(prev => ({
      ...prev,
      ...details
    }));
  }, []);

  // Update contact information
  const updateContactInfo = useCallback((info) => {
    setContactInfo(prev => ({
      ...prev,
      ...info
    }));
  }, []);

  // Reset all state
  const resetEventState = useCallback(() => {
    setSelectedGames([]);
    setEventDetails({
      eventType: '',
      date: '',
      duration: 3,
      guestCount: 30,
      venue: '',
    });
    setContactInfo({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  }, []);

  // Check if game is selected
  const isGameSelected = useCallback((gameId) => {
    return selectedGames.some(g => g.id === gameId);
  }, [selectedGames]);

  const value = {
    selectedGames,
    eventDetails,
    contactInfo,
    addGame,
    removeGame,
    toggleGame,
    clearGames,
    updateEventDetails,
    updateContactInfo,
    resetEventState,
    isGameSelected,
  };

  return (
    <EventContext.Provider value={value}>
      {children}
    </EventContext.Provider>
  );
};

/**
 * Custom hook to use Event Context
 */
export const useEvent = () => {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error('useEvent must be used within an EventProvider');
  }
  return context;
};

export default EventContext;

