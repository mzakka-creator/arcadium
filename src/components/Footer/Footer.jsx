import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Mail, Phone, MapPin, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { CONTACT_INFO } from '../../utils/constants';
import logoImage from '../../assets/logo.png';

/**
 * Footer Component
 */
const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-black border-t border-white/10 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-neon-pink/30 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-neon-cyan/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 sm:mb-12">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <img 
                src={logoImage} 
                alt="Arcadium Logo" 
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 mb-4 text-sm sm:text-base">
              {t('footer.description')}
            </p>
            <div className="flex gap-4">
              <SocialLink 
                href={`https://instagram.com/${CONTACT_INFO.instagram.replace('@', '')}`}
                icon={<Instagram className="w-5 h-5" />}
                label="Instagram"
              />
              <SocialLink 
                href={`https://facebook.com/${CONTACT_INFO.facebook}`}
                icon={<Facebook className="w-5 h-5" />}
                label="Facebook"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              <FooterLink onClick={() => scrollToSection('about')}>{t('footer.links.aboutUs')}</FooterLink>
              <FooterLink onClick={() => scrollToSection('games')}>{t('footer.links.ourGames')}</FooterLink>
              <FooterLink onClick={() => scrollToSection('how-it-works')}>{t('footer.links.howItWorks')}</FooterLink>
              <FooterLink onClick={() => scrollToSection('testimonials')}>{t('footer.links.testimonials')}</FooterLink>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">{t('footer.services')}</h4>
            <ul className="space-y-2">
              <FooterLink onClick={() => scrollToSection('builder')}>{t('footer.links.buildYourArcade')}</FooterLink>
              <FooterLink onClick={() => scrollToSection('games')}>{t('footer.links.packageOptions')}</FooterLink>
              <FooterLink onClick={() => scrollToSection('gallery')}>{t('footer.links.eventGallery')}</FooterLink>
              <FooterLink onClick={() => scrollToSection('contact')}>{t('footer.links.getQuote')}</FooterLink>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">{t('footer.getInTouch')}</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400">
                <Phone className="w-4 h-4 text-neon-pink" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-white transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="w-4 h-4 text-neon-cyan" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin className="w-4 h-4 text-neon-purple mt-1 flex-shrink-0" />
                <span>{CONTACT_INFO.serviceArea}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            {t('footer.copyright', { year: currentYear })}
          </p>
          
          <div className="flex items-center gap-1 text-gray-400 text-sm">
            <span>{t('footer.madeWith')}</span>
            <Heart className="w-4 h-4 text-neon-pink fill-neon-pink animate-pulse" />
            <span>{t('footer.forGamers')}</span>
          </div>

          <div className="flex gap-4 text-sm">
            <button onClick={() => {}} className="text-gray-400 hover:text-white transition-colors">
              {t('footer.privacyPolicy')}
            </button>
            <span className="text-gray-600">|</span>
            <button onClick={() => {}} className="text-gray-400 hover:text-white transition-colors">
              {t('footer.termsOfService')}
            </button>
          </div>
        </div>

        {/* Scroll to Top Indicator */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="mt-8 mx-auto flex items-center gap-2 text-neon-cyan hover:text-neon-pink transition-colors"
          whileHover={{ y: -5 }}
        >
          <span className="text-sm">{t('footer.backToTop')}</span>
          <span className="text-xl">↑</span>
        </motion.button>
      </div>
    </footer>
  );
};

/**
 * Social Link Component
 */
const SocialLink = ({ href, icon, label }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-gray-400 hover:text-neon-cyan hover:bg-white/10 transition-all"
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon}
    </motion.a>
  );
};

/**
 * Footer Link Component
 */
const FooterLink = ({ onClick, href, children }) => {
  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <li>
      <a
        href={href || '#'}
        onClick={handleClick}
        className="text-gray-400 hover:text-neon-cyan transition-colors cursor-pointer"
      >
        {children}
      </a>
    </li>
  );
};

export default Footer;

