/**
 * Utility helper functions
 */

// Format phone number for display
export const formatPhoneNumber = (phoneNumber) => {
  const cleaned = ('' + phoneNumber).replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3];
  }
  return phoneNumber;
};

// Format price
export const formatPrice = (price) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

// Calculate estimated price based on selections
export const calculateEstimate = (selectedGames, duration, guestCount = 0) => {
  const basePrice = 300;
  const pricePerGame = 75;
  const pricePerHour = 50;
  const guestMultiplier = guestCount > 50 ? 1.2 : 1;
  
  const gamePrice = selectedGames.length * pricePerGame;
  const durationPrice = duration * pricePerHour;
  const subtotal = basePrice + gamePrice + durationPrice;
  
  return Math.round(subtotal * guestMultiplier);
};

// Validate email format
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Validate phone number
export const isValidPhone = (phone) => {
  const cleaned = ('' + phone).replace(/\D/g, '');
  return cleaned.length === 10 || cleaned.length === 11;
};

// Smooth scroll to element
export const scrollToElement = (elementId, offset = 0) => {
  const element = document.getElementById(elementId);
  if (element) {
    const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({
      top,
      behavior: 'smooth'
    });
  }
};

// Generate WhatsApp link with pre-filled message
export const generateWhatsAppLink = (phone, message) => {
  const cleanedPhone = phone.replace(/\D/g, '');
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${cleanedPhone}?text=${encodedMessage}`;
};

// Debounce function for performance
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Lazy load images
export const lazyLoadImage = (imageSrc, placeholder = '/images/placeholder.jpg') => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = imageSrc;
    img.onload = () => resolve(imageSrc);
    img.onerror = () => reject(placeholder);
  });
};

// Get contrasting text color based on background
export const getContrastColor = (hexColor) => {
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5 ? '#000000' : '#FFFFFF';
};

// Generate unique ID
export const generateId = () => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

// Filter games by category
export const filterGamesByCategory = (games, category) => {
  if (category === 'all') return games;
  return games.filter(game => game.category === category);
};

// Get popular games
export const getPopularGames = (games, limit = 6) => {
  return games.filter(game => game.popular).slice(0, limit);
};

const helpers = {
  formatPhoneNumber,
  formatPrice,
  calculateEstimate,
  isValidEmail,
  isValidPhone,
  scrollToElement,
  generateWhatsAppLink,
  debounce,
  lazyLoadImage,
  getContrastColor,
  generateId,
  filterGamesByCategory,
  getPopularGames
};

export default helpers;

