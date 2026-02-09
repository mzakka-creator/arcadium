import React, { useEffect, useRef, useState } from 'react';

function About() {
    const [stats, setStats] = useState({ events: 0, games: 0, guests: 0 });
    const statsRef = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !hasAnimated) {
                        animateCounters();
                        setHasAnimated(true);
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => {
            if (statsRef.current) {
                observer.unobserve(statsRef.current);
            }
        };
    }, [hasAnimated]);

    const animateCounters = () => {
        const targets = { events: 500, games: 50, guests: 10000 };
        const duration = 2000;
        const steps = 50;
        const stepTime = duration / steps;

        let currentStep = 0;
        const timer = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;
            
            setStats({
                events: Math.floor(targets.events * progress),
                games: Math.floor(targets.games * progress),
                guests: Math.floor(targets.guests * progress)
            });

            if (currentStep >= steps) {
                setStats(targets);
                clearInterval(timer);
            }
        }, stepTime);
    };

    return (
        <section id="about" className="about">
            <div className="container">
                <div className="about-content">
                    <div className="about-text">
                        <h2 className="section-title">Welcome to Arcadium</h2>
                        <p className="lead">We bring joy and nostalgia through gaming, creating unforgettable experiences for events of all sizes.</p>
                        <p>Whether you're planning a birthday bash, corporate team-building event, wedding reception, or community celebration, Arcadium transforms your venue into an entertainment destination.</p>
                        
                        <div className="why-choose">
                            <h3>Why Choose Arcadium</h3>
                            <div className="features-grid">
                                <div className="feature-card">
                                    <div className="feature-icon">🎮</div>
                                    <h4>Wide Game Selection</h4>
                                    <p>From retro classics to modern VR experiences</p>
                                </div>
                                <div className="feature-card">
                                    <div className="feature-icon">⚙️</div>
                                    <h4>Professional Setup</h4>
                                    <p>We handle delivery, setup, and teardown</p>
                                </div>
                                <div className="feature-card">
                                    <div className="feature-icon">👥</div>
                                    <h4>Perfect for All Ages</h4>
                                    <p>Entertainment that brings everyone together</p>
                                </div>
                                <div className="feature-card">
                                    <div className="feature-icon">✨</div>
                                    <h4>Hassle-Free Experience</h4>
                                    <p>Sit back and let us create the magic</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="stat-counter" ref={statsRef}>
                            <div className="stat">
                                <div className="stat-number">{stats.events.toLocaleString()}</div>
                                <div className="stat-label">Events Delivered</div>
                            </div>
                            <div className="stat">
                                <div className="stat-number">{stats.games.toLocaleString()}</div>
                                <div className="stat-label">Games Available</div>
                            </div>
                            <div className="stat">
                                <div className="stat-number">{stats.guests.toLocaleString()}</div>
                                <div className="stat-label">Happy Guests</div>
                            </div>
                        </div>
                    </div>
                    <div className="about-image">
                        <div className="image-placeholder">
                            <div className="neon-frame"></div>
                            <div className="placeholder-content">
                                <span>📸</span>
                                <p>Arcade Setup Photo</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;

