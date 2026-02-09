// Game Categories and Data
export const GAMES = [
  {
    id: 1,
    name: "Pac-Man Arcade Machine",
    category: "retro",
    description: "Classic 1980s arcade cabinet with authentic joystick controls",
    image: "/images/games/pacman.jpg",
    specs: {
      players: "1-2",
      space: "2ft x 3ft",
      power: "Standard outlet"
    },
    tags: ["Classic", "Family Friendly"],
    popular: true
  },
  {
    id: 2,
    name: "Street Fighter II",
    category: "retro",
    description: "The legendary fighting game that defined a generation",
    image: "/images/games/streetfighter.jpg",
    specs: {
      players: "1-2",
      space: "2.5ft x 3ft",
      power: "Standard outlet"
    },
    tags: ["Fighting", "Competitive"],
    popular: true
  },
  {
    id: 3,
    name: "Dance Dance Revolution",
    category: "modern",
    description: "Get the party moving with this rhythm game phenomenon",
    image: "/images/games/ddr.jpg",
    specs: {
      players: "1-2",
      space: "4ft x 6ft",
      power: "Standard outlet"
    },
    tags: ["Dancing", "Party Game"],
    popular: true
  },
  {
    id: 4,
    name: "VR Racing Simulator",
    category: "vr",
    description: "Immersive virtual reality racing experience",
    image: "/images/games/vr-racing.jpg",
    specs: {
      players: "1",
      space: "6ft x 6ft",
      power: "Standard outlet"
    },
    tags: ["VR", "Racing", "Modern"],
    popular: false
  },
  {
    id: 5,
    name: "Mario Kart Arcade",
    category: "racing",
    description: "Race with your favorite Nintendo characters",
    image: "/images/games/mariokart.jpg",
    specs: {
      players: "1-2",
      space: "4ft x 4ft",
      power: "Standard outlet"
    },
    tags: ["Racing", "Family Friendly"],
    popular: true
  }
];

// Package Tiers
export const PACKAGES = [
  {
    id: "starter",
    name: "Starter Pack",
    games: "3-4 games",
    duration: "3 hours",
    guests: "Up to 30",
    price: "Starting at $499",
    features: [
      "Delivery & setup included",
      "Mix of retro & modern games",
      "Basic on-site support",
      "Standard game rotation"
    ],
    color: "neon-pink",
    recommended: false
  },
  {
    id: "premium",
    name: "Premium Experience",
    games: "6-8 games",
    duration: "5 hours",
    guests: "Up to 75",
    price: "Starting at $899",
    features: [
      "Everything in Starter",
      "Premium game selection",
      "Dedicated attendant",
      "Custom game lineup",
      "Photo booth add-on available"
    ],
    color: "neon-cyan",
    recommended: true
  },
  {
    id: "ultimate",
    name: "Ultimate Arcade",
    games: "10+ games",
    duration: "8 hours",
    guests: "100+",
    price: "Starting at $1,499",
    features: [
      "Everything in Premium",
      "VR stations included",
      "Multiple attendants",
      "Custom branding options",
      "Tournament organization",
      "Prize coordination"
    ],
    color: "neon-purple",
    recommended: false
  }
];

// Testimonials
export const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Johnson",
    eventType: "Birthday Party",
    rating: 5,
    quote: "Arcadium made my son's 10th birthday unforgettable! The kids couldn't stop playing and the setup was seamless.",
    image: "/images/testimonials/sarah.jpg",
    location: "San Antonio, TX"
  },
  {
    id: 2,
    name: "Michael Chen",
    eventType: "Corporate Event",
    rating: 5,
    quote: "We hired Arcadium for our company retreat and it was a massive hit. Great for team building and everyone had a blast!",
    image: "/images/testimonials/michael.jpg",
    location: "Austin, TX"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    eventType: "Wedding Reception",
    rating: 5,
    quote: "The arcade games were the perfect addition to our wedding reception. Our guests are still talking about it!",
    image: "/images/testimonials/emily.jpg",
    location: "Houston, TX"
  },
  {
    id: 4,
    name: "David Thompson",
    eventType: "School Fundraiser",
    rating: 5,
    quote: "Professional, punctual, and the games were in perfect condition. Arcadium helped us raise more than expected!",
    image: "/images/testimonials/david.jpg",
    location: "Dallas, TX"
  }
];

// Event Timeline Data
export const TIMELINE_EVENTS = [
  {
    id: 1,
    title: "Arrival & Setup",
    time: "2 hours before",
    description: "Our professional team arrives and sets up all games with precision and care",
    image: "/images/timeline/setup.jpg",
    icon: "truck"
  },
  {
    id: 2,
    title: "Game Testing",
    time: "1 hour before",
    description: "Every game is tested and calibrated to ensure perfect performance",
    image: "/images/timeline/testing.jpg",
    icon: "settings"
  },
  {
    id: 3,
    title: "Event Time!",
    time: "Event start",
    description: "Your guests enjoy an unforgettable arcade experience",
    image: "/images/timeline/party.jpg",
    icon: "party-popper"
  },
  {
    id: 4,
    title: "Breakdown & Pickup",
    time: "After event",
    description: "We handle all the teardown and cleanup - zero stress for you",
    image: "/images/timeline/cleanup.jpg",
    icon: "check-circle"
  }
];

// How It Works Steps
export const HOW_IT_WORKS_STEPS = [
  {
    id: 1,
    title: "Choose Your Games",
    description: "Browse our collection and select games that match your event vibe",
    icon: "gamepad-2"
  },
  {
    id: 2,
    title: "Get a Quote",
    description: "Tell us about your event and receive a custom quote within 24 hours",
    icon: "calculator"
  },
  {
    id: 3,
    title: "We Deliver & Setup",
    description: "Our team brings and sets up everything - you just enjoy the party",
    icon: "truck"
  },
  {
    id: 4,
    title: "Level Up!",
    description: "Your event becomes legendary while we handle all the details",
    icon: "trophy"
  }
];

// Space Planning Layouts
export const SPACE_LAYOUTS = [
  {
    id: "compact",
    name: "Compact Setup",
    games: "3-4 games",
    space: "10ft x 15ft",
    ideal: "Small parties, home events",
    description: "Perfect for intimate gatherings and home parties",
    image: "/images/layouts/compact.jpg"
  },
  {
    id: "standard",
    name: "Standard Setup",
    games: "6-8 games",
    space: "15ft x 20ft",
    ideal: "Medium events, venues",
    description: "Great balance for most event spaces",
    image: "/images/layouts/standard.jpg"
  },
  {
    id: "full",
    name: "Full Arcade",
    games: "10+ games",
    space: "20ft x 30ft",
    ideal: "Large events, conventions",
    description: "Complete arcade experience for big celebrations",
    image: "/images/layouts/full.jpg"
  }
];

// Contact Information
export const CONTACT_INFO = {
  phone: "+966 53 525 0707",
  email: "arcadiumsa@gmail.com",
  whatsapp: "+966535250707",
  instagram: "@arcadiumsa",
  facebook: "ArcadiumSA",
  hours: "Mon-Sun: 9AM - 10PM",
  location: "San Antonio, TX",
  serviceArea: "San Antonio & surrounding areas (up to 50 miles)"
};

// Event Types
export const EVENT_TYPES = [
  { id: "birthday", label: "Birthday Party", icon: "cake" },
  { id: "corporate", label: "Corporate Event", icon: "briefcase" },
  { id: "wedding", label: "Wedding", icon: "heart" },
  { id: "school", label: "School Event", icon: "graduation-cap" },
  { id: "fundraiser", label: "Fundraiser", icon: "dollar-sign" },
  { id: "other", label: "Other", icon: "star" }
];

// Featured Game of the Month
export const FEATURED_GAME = {
  id: 999,
  name: "Time Crisis",
  category: "arcade-shooter",
  description: "Take cover and blast your way through this action-packed light gun shooter. Perfect for competitive players!",
  image: "/images/featured/timecrisis.jpg",
  video: "/videos/timecrisis-gameplay.mp4",
  specs: {
    players: "1-2",
    space: "4ft x 4ft",
    power: "Standard outlet"
  },
  funFacts: [
    "Released in 1995, revolutionized arcade shooters",
    "Features innovative pedal-based cover system",
    "Most requested game at corporate events",
    "Available in 1 or 2-player configurations"
  ],
  tags: ["Action", "Shooter", "Competitive"],
  eventTypes: ["Corporate", "Birthday", "Team Building"]
};

// Animation Variants for Framer Motion
export const ANIMATION_VARIANTS = {
  fadeInUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.6 }
    }
  },
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  },
  scaleIn: {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  },
  slideInLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  },
  slideInRight: {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  }
};

const constants = {
  GAMES,
  PACKAGES,
  TESTIMONIALS,
  TIMELINE_EVENTS,
  HOW_IT_WORKS_STEPS,
  SPACE_LAYOUTS,
  CONTACT_INFO,
  EVENT_TYPES,
  FEATURED_GAME,
  ANIMATION_VARIANTS
};

export default constants;

