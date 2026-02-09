import React, { useState } from 'react';

function Games({ scrollToContact }) {
    const [activeTab, setActiveTab] = useState('retro');

    const addToEvent = (gameName) => {
        alert(`${gameName} added to your event! Scroll down to build your arcade or contact us to finalize your booking.`);
    };

    const selectPackage = (packageType) => {
        const packageNames = {
            'starter': 'Starter Pack',
            'party': 'Party Pack',
            'ultimate': 'Ultimate Experience'
        };
        scrollToContact();
        setTimeout(() => {
            const messageField = document.getElementById('message');
            if (messageField) {
                messageField.value = `I'm interested in the ${packageNames[packageType]}. `;
                messageField.focus();
            }
        }, 800);
    };

    return (
        <section id="games" className="games">
            <div className="container">
                <h2 className="section-title center">Choose Your Arcade Experience</h2>
                
                <div className="tabs">
                    <button className={`tab-btn ${activeTab === 'retro' ? 'active' : ''}`} onClick={() => setActiveTab('retro')}>Retro Arcade</button>
                    <button className={`tab-btn ${activeTab === 'modern' ? 'active' : ''}`} onClick={() => setActiveTab('modern')}>Modern Gaming</button>
                    <button className={`tab-btn ${activeTab === 'vr' ? 'active' : ''}`} onClick={() => setActiveTab('vr')}>VR Experiences</button>
                    <button className={`tab-btn ${activeTab === 'racing' ? 'active' : ''}`} onClick={() => setActiveTab('racing')}>Racing Simulators</button>
                    <button className={`tab-btn ${activeTab === 'photo' ? 'active' : ''}`} onClick={() => setActiveTab('photo')}>Photo Booth</button>
                </div>

                <div className="tab-content">
                    <div className={`tab-pane ${activeTab === 'retro' ? 'active' : ''}`}>
                        <div className="games-grid">
                            <div className="game-card">
                                <div className="game-image">🕹️</div>
                                <h3>Pac-Man Deluxe</h3>
                                <p>The classic maze chase that started it all</p>
                                <div className="game-specs">
                                    <span>👥 1-2 Players</span>
                                    <span>📏 3x3 ft</span>
                                </div>
                                <button className="btn btn-secondary" onClick={() => addToEvent('Pac-Man')}>Add to Event</button>
                            </div>
                            <div className="game-card">
                                <div className="game-image">🥊</div>
                                <h3>Street Fighter II</h3>
                                <p>Legendary fighting game action</p>
                                <div className="game-specs">
                                    <span>👥 1-2 Players</span>
                                    <span>📏 3x3 ft</span>
                                </div>
                                <button className="btn btn-secondary" onClick={() => addToEvent('Street Fighter II')}>Add to Event</button>
                            </div>
                            <div className="game-card">
                                <div className="game-image">👾</div>
                                <h3>Space Invaders</h3>
                                <p>Defend Earth from alien invaders</p>
                                <div className="game-specs">
                                    <span>👥 1-2 Players</span>
                                    <span>📏 2x3 ft</span>
                                </div>
                                <button className="btn btn-secondary" onClick={() => addToEvent('Space Invaders')}>Add to Event</button>
                            </div>
                            <div className="game-card">
                                <div className="game-image">🎯</div>
                                <h3>Galaga</h3>
                                <p>Epic space shooting action</p>
                                <div className="game-specs">
                                    <span>👥 1-2 Players</span>
                                    <span>📏 2x3 ft</span>
                                </div>
                                <button className="btn btn-secondary" onClick={() => addToEvent('Galaga')}>Add to Event</button>
                            </div>
                        </div>
                    </div>
                    <div className={`tab-pane ${activeTab === 'modern' ? 'active' : ''}`}>
                        <div className="games-grid">
                            <div className="game-card">
                                <div className="game-image">🎮</div>
                                <h3>PlayStation 5</h3>
                                <p>Latest generation console gaming</p>
                                <div className="game-specs">
                                    <span>👥 1-4 Players</span>
                                    <span>📏 4x6 ft</span>
                                </div>
                                <button className="btn btn-secondary" onClick={() => addToEvent('PS5')}>Add to Event</button>
                            </div>
                            <div className="game-card">
                                <div className="game-image">🎯</div>
                                <h3>Xbox Series X</h3>
                                <p>Powerful gaming with Game Pass library</p>
                                <div className="game-specs">
                                    <span>👥 1-4 Players</span>
                                    <span>📏 4x6 ft</span>
                                </div>
                                <button className="btn btn-secondary" onClick={() => addToEvent('Xbox Series X')}>Add to Event</button>
                            </div>
                            <div className="game-card">
                                <div className="game-image">🌟</div>
                                <h3>Nintendo Switch</h3>
                                <p>Family-friendly party games</p>
                                <div className="game-specs">
                                    <span>👥 1-4 Players</span>
                                    <span>📏 4x6 ft</span>
                                </div>
                                <button className="btn btn-secondary" onClick={() => addToEvent('Nintendo Switch')}>Add to Event</button>
                            </div>
                        </div>
                    </div>
                    <div className={`tab-pane ${activeTab === 'vr' ? 'active' : ''}`}>
                        <div className="games-grid">
                            <div className="game-card">
                                <div className="game-image">🥽</div>
                                <h3>Meta Quest 3</h3>
                                <p>Immersive virtual reality experiences</p>
                                <div className="game-specs">
                                    <span>👥 1 Player</span>
                                    <span>📏 6x6 ft</span>
                                </div>
                                <button className="btn btn-secondary" onClick={() => addToEvent('Meta Quest 3')}>Add to Event</button>
                            </div>
                            <div className="game-card">
                                <div className="game-image">🎪</div>
                                <h3>VR Adventure Pack</h3>
                                <p>Multiple VR stations for group play</p>
                                <div className="game-specs">
                                    <span>👥 1-4 Players</span>
                                    <span>📏 10x10 ft</span>
                                </div>
                                <button className="btn btn-secondary" onClick={() => addToEvent('VR Adventure Pack')}>Add to Event</button>
                            </div>
                        </div>
                    </div>
                    <div className={`tab-pane ${activeTab === 'racing' ? 'active' : ''}`}>
                        <div className="games-grid">
                            <div className="game-card">
                                <div className="game-image">🏎️</div>
                                <h3>Racing Simulator Pro</h3>
                                <p>Professional racing wheel setup</p>
                                <div className="game-specs">
                                    <span>👥 1 Player</span>
                                    <span>📏 5x6 ft</span>
                                </div>
                                <button className="btn btn-secondary" onClick={() => addToEvent('Racing Sim')}>Add to Event</button>
                            </div>
                            <div className="game-card">
                                <div className="game-image">🏁</div>
                                <h3>Multi-Racing Station</h3>
                                <p>4-player competitive racing</p>
                                <div className="game-specs">
                                    <span>👥 1-4 Players</span>
                                    <span>📏 12x8 ft</span>
                                </div>
                                <button className="btn btn-secondary" onClick={() => addToEvent('Multi-Racing')}>Add to Event</button>
                            </div>
                        </div>
                    </div>
                    <div className={`tab-pane ${activeTab === 'photo' ? 'active' : ''}`}>
                        <div className="games-grid">
                            <div className="game-card">
                                <div className="game-image">📸</div>
                                <h3>Digital Photo Booth</h3>
                                <p>Instant digital photos with custom filters</p>
                                <div className="game-specs">
                                    <span>👥 1-8 Players</span>
                                    <span>📏 6x6 ft</span>
                                </div>
                                <button className="btn btn-secondary" onClick={() => addToEvent('Photo Booth')}>Add to Event</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="packages">
                    <h2 className="section-title center">Popular Packages</h2>
                    <div className="packages-grid">
                        <div className="package-card">
                            <div className="package-header">
                                <h3>Starter Pack</h3>
                                <div className="package-price">From $299</div>
                            </div>
                            <div className="package-features">
                                <div className="feature">✓ 3-4 Games</div>
                                <div className="feature">✓ 2-4 Hours</div>
                                <div className="feature">✓ Up to 30 Guests</div>
                                <div className="feature">✓ Setup & Breakdown</div>
                                <div className="feature">✓ Perfect for Small Parties</div>
                            </div>
                            <button className="btn btn-primary" onClick={() => selectPackage('starter')}>Get Custom Quote</button>
                        </div>
                        <div className="package-card featured">
                            <div className="popular-badge">MOST POPULAR</div>
                            <div className="package-header">
                                <h3>Party Pack</h3>
                                <div className="package-price">From $599</div>
                            </div>
                            <div className="package-features">
                                <div className="feature">✓ 6-8 Games</div>
                                <div className="feature">✓ 4-6 Hours</div>
                                <div className="feature">✓ Up to 75 Guests</div>
                                <div className="feature">✓ Setup & Breakdown</div>
                                <div className="feature">✓ Ideal for Medium Events</div>
                            </div>
                            <button className="btn btn-primary" onClick={() => selectPackage('party')}>Get Custom Quote</button>
                        </div>
                        <div className="package-card">
                            <div className="package-header">
                                <h3>Ultimate Experience</h3>
                                <div className="package-price">From $999</div>
                            </div>
                            <div className="package-features">
                                <div className="feature">✓ 10+ Games</div>
                                <div className="feature">✓ 6-8 Hours</div>
                                <div className="feature">✓ Unlimited Guests</div>
                                <div className="feature">✓ Setup & Breakdown</div>
                                <div className="feature">✓ Full Arcade Experience</div>
                            </div>
                            <button className="btn btn-primary" onClick={() => selectPackage('ultimate')}>Get Custom Quote</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Games;

