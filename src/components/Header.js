import React, { useState, useEffect } from 'react';

function Header({ scrollToSection, scrollToContact }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleNavClick = (sectionId) => {
        scrollToSection(sectionId);
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <header id="header" className={`header ${isScrolled ? 'scrolled' : ''}`}>
                <div className="container">
                    <div className="header-content">
                        <div className="logo">ARCADIUM</div>
                        <nav className="nav">
                            <a href="#hero" onClick={(e) => { e.preventDefault(); handleNavClick('hero'); }}>Home</a>
                            <a href="#about" onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}>About</a>
                            <a href="#games" onClick={(e) => { e.preventDefault(); handleNavClick('games'); }}>Games</a>
                            <a href="#gallery" onClick={(e) => { e.preventDefault(); handleNavClick('gallery'); }}>Gallery</a>
                            <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>Contact</a>
                        </nav>
                        <button className="btn btn-primary btn-small" onClick={scrollToContact}>Book Now</button>
                        <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </header>

            <div id="mobileMenu" className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                <a href="#hero" onClick={(e) => { e.preventDefault(); handleNavClick('hero'); }}>Home</a>
                <a href="#about" onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}>About</a>
                <a href="#games" onClick={(e) => { e.preventDefault(); handleNavClick('games'); }}>Games</a>
                <a href="#gallery" onClick={(e) => { e.preventDefault(); handleNavClick('gallery'); }}>Gallery</a>
                <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>Contact</a>
                <button className="btn btn-primary" onClick={() => { scrollToContact(); setIsMobileMenuOpen(false); }}>Book Now</button>
            </div>
        </>
    );
}

export default Header;

