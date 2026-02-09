import React from 'react';

function Hero({ scrollToSection, scrollToContact }) {
    return (
        <section id="hero" className="hero">
            <div className="animated-grid"></div>
            <div className="container">
                <div className="hero-content">
                    <div className="hero-logo">
                        <div className="logo-large">ARCADIUM</div>
                        <div className="logo-subtitle">EVENT ARCADE RENTALS</div>
                    </div>
                    <h1 className="hero-title">Level Up Your Event with Arcade Entertainment</h1>
                    <p className="hero-subtitle">Mobile arcade game rentals for parties, corporate events, weddings, and celebrations</p>
                    <div className="hero-buttons">
                        <button className="btn btn-primary btn-large" onClick={scrollToContact}>
                            <span>Book Your Event</span>
                        </button>
                        <button className="btn btn-secondary btn-large" onClick={() => scrollToSection('games')}>
                            <span>Explore Games</span>
                        </button>
                    </div>
                    <div className="trust-badges">
                        <div className="badge">
                            <span className="badge-icon">✓</span>
                            <span>Fully Insured</span>
                        </div>
                        <div className="badge">
                            <span className="badge-icon">★</span>
                            <span>5-Star Rated</span>
                        </div>
                        <div className="badge">
                            <span className="badge-icon">⚡</span>
                            <span>Professional Setup</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="scroll-indicator">
                <div className="scroll-arrow"></div>
            </div>
        </section>
    );
}

export default Hero;

