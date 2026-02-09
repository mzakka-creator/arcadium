import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { SectionHeader, Card, Button } from '../shared';
import { CONTACT_INFO } from '../../utils/constants';
import { useForm } from '../../hooks/useForm';
import { isValidEmail, isValidPhone, generateWhatsAppLink } from '../../utils/helpers';

/**
 * Contact Component - Booking form and contact information
 */
const Contact = () => {
  const [submitStatus, setSubmitStatus] = useState(null);

  const validate = (values) => {
    const errors = {};
    
    if (!values.name || values.name.trim().length < 2) {
      errors.name = 'Name is required';
    }
    
    if (!values.email || !isValidEmail(values.email)) {
      errors.email = 'Valid email is required';
    }
    
    if (!values.phone || !isValidPhone(values.phone)) {
      errors.phone = 'Valid phone number is required';
    }
    
    if (!values.eventDate) {
      errors.eventDate = 'Event date is required';
    }
    
    if (!values.message || values.message.trim().length < 10) {
      errors.message = 'Please provide more details about your event';
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

  const whatsappMessage = `Hi! I'm interested in renting arcade games for my event.`;
  const whatsappLink = generateWhatsAppLink(CONTACT_INFO.whatsapp, whatsappMessage);

  return (
    <section id="contact" className="py-20 bg-dark-navy relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-background opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          title="Get Your Quote"
          subtitle="Ready to level up your event? Let's make it happen!"
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
                  Request a Quote
                </h3>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-neon-green/20 border border-neon-green rounded-lg flex items-center gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-neon-green" />
                    <div>
                      <p className="text-white font-semibold">Success!</p>
                      <p className="text-sm text-gray-300">We'll get back to you within 24 hours.</p>
                    </div>
                  </motion.div>
                )}

                <form onSubmit={onSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white focus:outline-none transition-colors ${
                        errors.name ? 'border-red-500' : 'border-white/10 focus:border-neon-cyan'
                      }`}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email & Phone */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white font-semibold mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white focus:outline-none transition-colors ${
                          errors.email ? 'border-red-500' : 'border-white/10 focus:border-neon-cyan'
                        }`}
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-white font-semibold mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={values.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white focus:outline-none transition-colors ${
                          errors.phone ? 'border-red-500' : 'border-white/10 focus:border-neon-cyan'
                        }`}
                        placeholder="(210) 555-0199"
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
                        Event Date *
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
                        Event Type
                      </label>
                      <select
                        name="eventType"
                        value={values.eventType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-neon-cyan focus:outline-none"
                      >
                        <option value="">Select type</option>
                        <option value="birthday">Birthday Party</option>
                        <option value="corporate">Corporate Event</option>
                        <option value="wedding">Wedding</option>
                        <option value="school">School Event</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Guest Count */}
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Expected Guests
                    </label>
                    <input
                      type="number"
                      name="guestCount"
                      value={values.guestCount}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-neon-cyan focus:outline-none"
                      placeholder="e.g., 50"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Tell us about your event *
                    </label>
                    <textarea
                      name="message"
                      value={values.message}
                      onChange={handleChange}
                      rows="4"
                      className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white focus:outline-none transition-colors resize-none ${
                        errors.message ? 'border-red-500' : 'border-white/10 focus:border-neon-cyan'
                      }`}
                      placeholder="Tell us about your event, any specific games you want, or questions you have..."
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
                    {isSubmitting ? 'Sending...' : 'Request Quote'}
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
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <ContactItem
                    icon={<Phone className="w-6 h-6" />}
                    label="Phone"
                    value={CONTACT_INFO.phone}
                    href={`tel:${CONTACT_INFO.phone}`}
                    color="neon-pink"
                  />

                  <ContactItem
                    icon={<Mail className="w-6 h-6" />}
                    label="Email"
                    value={CONTACT_INFO.email}
                    href={`mailto:${CONTACT_INFO.email}`}
                    color="neon-cyan"
                  />

                  <ContactItem
                    icon={<MapPin className="w-6 h-6" />}
                    label="Service Area"
                    value={CONTACT_INFO.serviceArea}
                    color="neon-purple"
                  />

                  <ContactItem
                    icon={<Clock className="w-6 h-6" />}
                    label="Hours"
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
                  Need Instant Help?
                </h4>
                <p className="text-gray-300 mb-4">
                  Chat with us on WhatsApp for quick responses
                </p>
                <Button
                  variant="secondary"
                  size="lg"
                  href={whatsappLink}
                  className="w-full bg-neon-green hover:shadow-neon-green"
                >
                  <span className="text-2xl mr-2">💬</span>
                  Chat on WhatsApp
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

