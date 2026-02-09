import React, { useState, useEffect } from 'react';

function Footer({ scrollToTop }) {
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowBackToTop(window.scrollY > 500);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-section">
                            <div className="footer-logo">ARCADIUM</div>
                            <p>Bringing joy and nostalgia through gaming since 2020</p>
                            <div className="social-icons">
                                <a href="https://instagram.com/arcadiumsa" target="_blank" rel="noopener noreferrer" className="social-icon">📱</a>
                                <a href="https://facebook.com/arcadium" target="_blank" rel="noopener noreferrer" className="social-icon">📘</a>
                                <a href="https://tiktok.com/@arcadium" target="_blank" rel="noopener noreferrer" className="social-icon">🎵</a>
                                <a href="https://youtube.com/@arcadium" target="_blank" rel="noopener noreferrer" className="social-icon">📺</a>
                            </div>
                        </div>
                        
                        <div className="footer-section">
                            <h4>Quick Links</h4>
                            <ul>
                                <li><a href="#hero">Home</a></li>
                                <li><a href="#about">About Us</a></li>
                                <li><a href="#games">Games & Packages</a></li>
                                <li><a href="#gallery">Gallery</a></li>
                                <li><a href="#contact">Contact</a></li>
                                <li><a href="#faq">FAQ</a></li>
                            </ul>
                        </div>
                        
                        <div className="footer-section">
                            <h4>Services</h4>
                            <ul>
                                <li><a href="#games">Retro Arcade Rentals</a></li>
                                <li><a href="#games">Modern Gaming Consoles</a></li>
                                <li><a href="#games">VR Experiences</a></li>
                                <li><a href="#games">Racing Simulators</a></li>
                                <li><a href="#games">Photo Booths</a></li>
                            </ul>
                        </div>
                        
                        <div className="footer-section">
                            <h4>Contact Info</h4>
                            <ul>
                                <li>📞 (123) 456-7890</li>
                                <li>✉️ info@arcadium.com</li>
                                <li>📍 Service Area: [Your City & Region]</li>
                                <li>📱 Instagram: @arcadiumsa</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="footer-bottom">
                        <div className="footer-legal">
                            <a href="#">Privacy Policy</a>
                            <span>•</span>
                            <a href="#">Terms of Service</a>
                        </div>
                        <div className="footer-copyright">
                            © 2026 Arcadium. All rights reserved.
                        </div>
                    </div>
                </div>
            </footer>

            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="whatsapp-float" title="Chat on WhatsApp">
                <span>💬</span>
            </a>

            <button 
                className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
                onClick={scrollToTop} 
                title="Back to top"
            >
                <span>↑</span>
            </button>
        </>
    );
}

export default Footer;

