import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../../utils/constants';
import { generateWhatsAppLink } from '../../utils/helpers';

/**
 * WhatsAppFloat Component - Floating WhatsApp button
 */
const WhatsAppFloat = () => {
  const whatsappMessage = `Hi Arcadium! I'm interested in learning more about your arcade game rentals.`;
  const whatsappLink = generateWhatsAppLink(CONTACT_INFO.whatsapp, whatsappMessage);

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-neon-green rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-neon-green transition-all group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, type: 'spring' }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      
      {/* Pulse Animation */}
      <span className="absolute inset-0 rounded-full bg-neon-green opacity-75 animate-ping"></span>
      
      {/* Tooltip */}
      <div className="absolute right-full mr-3 px-3 py-2 bg-dark-navy rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        <span className="text-sm text-white font-semibold">Chat on WhatsApp</span>
        <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 bg-dark-navy rotate-45"></div>
      </div>
    </motion.a>
  );
};

export default WhatsAppFloat;

