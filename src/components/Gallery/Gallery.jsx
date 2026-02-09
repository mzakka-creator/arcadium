import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Instagram, ExternalLink } from 'lucide-react';
import { SectionHeader, Button } from '../shared';
import { CONTACT_INFO } from '../../utils/constants';

/**
 * Gallery Component - Photo gallery with lightbox
 */
const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Placeholder images - replace with actual event photos
  const images = [
    { id: 1, title: 'Birthday Party Setup', category: 'birthday' },
    { id: 2, title: 'Corporate Event', category: 'corporate' },
    { id: 3, title: 'Wedding Reception', category: 'wedding' },
    { id: 4, title: 'School Fundraiser', category: 'school' },
    { id: 5, title: 'Classic Arcade Games', category: 'games' },
    { id: 6, title: 'VR Experience Station', category: 'games' },
    { id: 7, title: 'Happy Guests Playing', category: 'people' },
    { id: 8, title: 'Full Arcade Setup', category: 'setup' },
  ];

  const openLightbox = (image) => {
    setSelectedImage(image);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setTimeout(() => setSelectedImage(null), 300);
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-dark-navy to-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-background opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          title="Event Gallery"
          subtitle="See Arcadium in action at real events"
          alignment="center"
        />

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="relative aspect-square bg-gradient-to-br from-neon-pink/20 to-neon-cyan/20 rounded-lg overflow-hidden cursor-pointer group"
              onClick={() => openLightbox(image)}
            >
              {/* Placeholder - Replace with actual images */}
              <div className="w-full h-full flex items-center justify-center text-6xl">
                📸
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <ExternalLink className="w-8 h-8 text-white" />
              </div>

              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white text-sm font-semibold">{image.title}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-300 mb-4">
            Follow us on Instagram for more event highlights
          </p>
          <Button
            variant="secondary"
            href={`https://instagram.com/${CONTACT_INFO.instagram.replace('@', '')}`}
            icon={<Instagram className="w-5 h-5" />}
          >
            {CONTACT_INFO.instagram}
          </Button>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full aspect-video bg-gradient-to-br from-neon-pink/20 to-neon-cyan/20 rounded-lg flex items-center justify-center"
            >
              <div className="text-8xl">📸</div>
            </motion.div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">
                {selectedImage.title}
              </h3>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;

