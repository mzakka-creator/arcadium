import React, { useState, useEffect } from 'react';

function Contact({ showModal }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        eventDate: '',
        eventType: '',
        guestCount: '',
        gamesInterested: '',
        message: ''
    });

    useEffect(() => {
        const eventDateInput = document.getElementById('eventDate');
        if (eventDateInput) {
            const today = new Date().toISOString().split('T')[0];
            eventDateInput.setAttribute('min', today);
        }
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        showModal();
        setFormData({
            name: '',
            email: '',
            phone: '',
            eventDate: '',
            eventType: '',
            guestCount: '',
            gamesInterested: '',
            message: ''
        });
    };

    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2 className="section-title center">Ready to Level Up Your Event?</h2>
                <p className="section-subtitle">Get your free custom quote today</p>
                
                <div className="contact-content">
                    <div className="contact-form-container">
                        <h3>Quick Quote Form</h3>
                        <form id="quoteForm" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Your Name *</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    value={formData.name}
                                    onChange={handleChange}
                                    required 
                                />
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="email">Email *</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required 
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone *</label>
                                    <input 
                                        type="tel" 
                                        id="phone" 
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required 
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="eventDate">Event Date *</label>
                                    <input 
                                        type="date" 
                                        id="eventDate" 
                                        name="eventDate"
                                        value={formData.eventDate}
                                        onChange={handleChange}
                                        required 
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="eventType">Event Type *</label>
                                    <select 
                                        id="eventType" 
                                        name="eventType"
                                        value={formData.eventType}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select...</option>
                                        <option value="birthday">Birthday Party</option>
                                        <option value="corporate">Corporate Event</option>
                                        <option value="wedding">Wedding</option>
                                        <option value="school">School Event</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="guestCount">Number of Guests *</label>
                                <input 
                                    type="number" 
                                    id="guestCount" 
                                    name="guestCount"
                                    value={formData.guestCount}
                                    onChange={handleChange}
                                    min="1" 
                                    required 
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="gamesInterested">Games You're Interested In</label>
                                <input 
                                    type="text" 
                                    id="gamesInterested" 
                                    name="gamesInterested"
                                    value={formData.gamesInterested}
                                    onChange={handleChange}
                                    placeholder="e.g., Pac-Man, PS5, VR" 
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Special Requests or Questions</label>
                                <textarea 
                                    id="message" 
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary btn-large">Get Your Free Quote</button>
                        </form>
                    </div>
                    
                    <div className="contact-direct">
                        <h3>Prefer to Talk?</h3>
                        <div className="contact-methods">
                            <a href="tel:+1234567890" className="contact-method">
                                <div className="contact-icon">📞</div>
                                <div className="contact-details">
                                    <strong>Call Us</strong>
                                    <span>(123) 456-7890</span>
                                </div>
                            </a>
                            <a href="mailto:info@arcadium.com" className="contact-method">
                                <div className="contact-icon">✉️</div>
                                <div className="contact-details">
                                    <strong>Email Us</strong>
                                    <span>info@arcadium.com</span>
                                </div>
                            </a>
                            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="contact-method whatsapp">
                                <div className="contact-icon">💬</div>
                                <div className="contact-details">
                                    <strong>WhatsApp</strong>
                                    <span>Chat with us now</span>
                                </div>
                            </a>
                        </div>
                        
                        <div className="business-hours">
                            <h4>Business Hours</h4>
                            <p>Monday - Friday: 9am - 7pm</p>
                            <p>Saturday: 10am - 6pm</p>
                            <p>Sunday: 12pm - 5pm</p>
                        </div>
                        
                        <div className="instagram-qr">
                            <h4>Follow Us on Instagram</h4>
                            <div className="qr-placeholder">
                                <span>QR</span>
                                <p>@arcadiumsa</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;

