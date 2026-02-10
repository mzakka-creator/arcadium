import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SectionHeader, Card, Button } from '../shared';
import { CONTACT_INFO } from '../../utils/constants';
import { useForm } from '../../hooks/useForm';
import { isValidEmail, isValidPhone, generateWhatsAppLink } from '../../utils/helpers';

// WhatsApp Icon Component
const WhatsAppIcon = ({ className = "w-5 h-5" }) => (
  <svg 
    className={className}
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

/**
 * Contact Component - Booking form and contact information
 */
const Contact = () => {
  const { t } = useTranslation();
  const [submitStatus, setSubmitStatus] = useState(null);

  const validate = (values) => {
    const errors = {};
    
    if (!values.name || values.name.trim().length < 2) {
      errors.name = t('contact.validation.nameRequired');
    }
    
    if (!values.email || !isValidEmail(values.email)) {
      errors.email = t('contact.validation.emailRequired');
    }
    
    if (!values.phone || !isValidPhone(values.phone)) {
      errors.phone = t('contact.validation.phoneRequired');
    }
    
    if (!values.eventDate) {
      errors.eventDate = t('contact.validation.dateRequired');
    }
    
    if (!values.message || values.message.trim().length < 10) {
      errors.message = t('contact.validation.messageRequired');
    }
    
    return errors;
  };

  const handleSubmit = async (values) => {
    try {
      // Here you would integrate with EmailJS, Formspree, or your backend
      console.log('Form submitted:', values);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus('success');
      
      // Reset after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
        resetForm();
      }, 5000);
      
    } catch (error) {
      setSubmitStatus('error');
      console.error('Form submission error:', error);
    }
  };

  const {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit: onSubmit,
    resetForm,
  } = useForm(
    {
      name: '',
      email: '',
      phone: '',
      eventDate: '',
      eventType: '',
      guestCount: '',
      message: '',
    },
    handleSubmit,
    validate
  );

  // Use regular WhatsApp message
  const whatsappMessage = t('contact.whatsapp.message');
  const whatsappLink = generateWhatsAppLink(CONTACT_INFO.whatsapp, whatsappMessage);

  return (
    <section id="contact" className="py-20 bg-dark-navy relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-background opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          title={t('contact.title')}
          subtitle={t('contact.subtitle')}
          alignment="center"
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card variant="glass">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  {t('contact.requestQuote')}
                </h3>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-neon-green/20 border border-neon-green rounded-lg flex items-center gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-neon-green" />
                    <div>
                      <p className="text-white font-semibold">{t('contact.success')}</p>
                      <p className="text-sm text-gray-300">{t('contact.successMessage')}</p>
                    </div>
                  </motion.div>
                )}

                <form onSubmit={onSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      {t('contact.form.name')} {t('contact.form.required')}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white focus:outline-none transition-colors ${
                        errors.name ? 'border-red-500' : 'border-white/10 focus:border-neon-cyan'
                      }`}
                      placeholder={t('contact.form.namePlaceholder')}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email & Phone */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white font-semibold mb-2">
                        {t('contact.form.email')} {t('contact.form.required')}
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white focus:outline-none transition-colors ${
                          errors.email ? 'border-red-500' : 'border-white/10 focus:border-neon-cyan'
                        }`}
                        placeholder={t('contact.form.emailPlaceholder')}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-white font-semibold mb-2">
                        {t('contact.form.phone')} {t('contact.form.required')}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={values.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white focus:outline-none transition-colors ${
                          errors.phone ? 'border-red-500' : 'border-white/10 focus:border-neon-cyan'
                        }`}
                        placeholder={t('contact.form.phonePlaceholder')}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Event Date & Type */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white font-semibold mb-2">
                        {t('contact.form.eventDate')} {t('contact.form.required')}
                      </label>
                      <input
                        type="date"
                        name="eventDate"
                        value={values.eventDate}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white focus:outline-none transition-colors ${
                          errors.eventDate ? 'border-red-500' : 'border-white/10 focus:border-neon-cyan'
                        }`}
                      />
                      {errors.eventDate && (
                        <p className="text-red-500 text-sm mt-1">{errors.eventDate}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-white font-semibold mb-2">
                        {t('contact.form.eventType')}
                      </label>
                      <select
                        name="eventType"
                        value={values.eventType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-neon-cyan focus:outline-none"
                      >
                        <option value="" style={{ color: 'black' }}>{t('contact.form.selectType')}</option>
                        <option value="birthday" style={{ color: 'black' }}>{t('eventTypes.birthday')}</option>
                        <option value="corporate" style={{ color: 'black' }}>{t('eventTypes.corporate')}</option>
                        <option value="wedding" style={{ color: 'black' }}>{t('eventTypes.wedding')}</option>
                        <option value="school" style={{ color: 'black' }}>{t('eventTypes.school')}</option>
                        <option value="other" style={{ color: 'black' }}>{t('eventTypes.other')}</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      {t('contact.form.tellUs')} {t('contact.form.required')}
                    </label>
                    <textarea
                      name="message"
                      value={values.message}
                      onChange={handleChange}
                      rows="4"
                      className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white focus:outline-none transition-colors resize-none ${
                        errors.message ? 'border-red-500' : 'border-white/10 focus:border-neon-cyan'
                      }`}
                      placeholder={t('contact.form.messagePlaceholder')}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    isLoading={isSubmitting}
                    icon={<Send className="w-5 h-5" />}
                  >
                    {isSubmitting ? t('contact.form.sending') : t('contact.form.requestQuoteButton')}
                  </Button>
                </form>
              </div>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Card variant="glass">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  {t('contact.info.title')}
                </h3>

                <div className="space-y-6">
                  <ContactItem
                    icon={<Phone className="w-6 h-6" />}
                    label={t('contact.info.phone')}
                    value={CONTACT_INFO.phone}
                    href={`tel:${CONTACT_INFO.phone}`}
                    color="neon-pink"
                  />

                  <ContactItem
                    icon={<Mail className="w-6 h-6" />}
                    label={t('contact.info.email')}
                    value={CONTACT_INFO.email}
                    href={`mailto:${CONTACT_INFO.email}`}
                    color="neon-cyan"
                  />

                  <ContactItem
                    icon={<MapPin className="w-6 h-6" />}
                    label={t('contact.info.serviceArea')}
                    value={CONTACT_INFO.serviceArea}
                    color="neon-purple"
                  />

                  <ContactItem
                    icon={<Clock className="w-6 h-6" />}
                    label={t('contact.info.hours')}
                    value={CONTACT_INFO.hours}
                    color="neon-orange"
                  />
                </div>
              </div>
            </Card>

            {/* WhatsApp CTA */}
            <Card variant="neon" glowColor="green">
              <div className="p-6 text-center">
                <h4 className="text-xl font-bold text-white mb-3">
                  {t('contact.whatsapp.title')}
                </h4>
                <p className="text-gray-300 mb-4">
                  {t('contact.whatsapp.description')}
                </p>
                <Button
                  variant="secondary"
                  size="lg"
                  href={whatsappLink}
                  className="w-full bg-[#25D366] hover:shadow-[0_0_20px_rgba(37,211,102,0.6)]"
                  icon={<WhatsAppIcon className="w-5 h-5" />}
                >
                  {t('contact.whatsapp.button')}
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/**
 * ContactItem Component
 */
const ContactItem = ({ icon, label, value, href, color }) => {
  const content = (
    <div className="flex items-start gap-4">
      <div className={`text-${color} flex-shrink-0 mt-1`}>
        {icon}
      </div>
      <div>
        <p className="text-gray-400 text-sm mb-1">{label}</p>
        <p className="text-white font-semibold">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a 
        href={href}
        className="block hover:bg-white/5 p-2 -m-2 rounded-lg transition-colors"
      >
        {content}
      </a>
    );
  }

  return <div>{content}</div>;
};

export default Contact;

