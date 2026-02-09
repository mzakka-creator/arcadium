import React, { useState } from 'react';

function Builder({ scrollToContact }) {
    const [currentStep, setCurrentStep] = useState(1);
    const [selectedEventType, setSelectedEventType] = useState('');
    const [selectedGames, setSelectedGames] = useState([]);
    const [duration, setDuration] = useState(4);
    const [guests, setGuests] = useState(50);

    const eventTypeMap = {
        'birthday': 'Birthday Party',
        'corporate': 'Corporate Event',
        'wedding': 'Wedding',
        'school': 'School Event',
        'other': 'Other'
    };

    const games = [
        { id: 'game1', name: 'Pac-Man', icon: '🕹️' },
        { id: 'game2', name: 'Street Fighter', icon: '🥊' },
        { id: 'game3', name: 'PlayStation 5', icon: '🎮' },
        { id: 'game4', name: 'VR Experience', icon: '🥽' },
        { id: 'game5', name: 'Racing Sim', icon: '🏎️' },
        { id: 'game6', name: 'Photo Booth', icon: '📸' }
    ];

    const handleEventTypeSelect = (type) => {
        setSelectedEventType(type);
        setTimeout(() => setCurrentStep(2), 500);
    };

    const handleGameToggle = (gameName) => {
        setSelectedGames(prev => 
            prev.includes(gameName) 
                ? prev.filter(g => g !== gameName)
                : [...prev, gameName]
        );
    };

    const nextStep = () => {
        if (currentStep === 1 && !selectedEventType) {
            alert('Please select an event type to continue.');
            return;
        }
        if (currentStep === 2 && selectedGames.length === 0) {
            alert('Please select at least one game to continue.');
            return;
        }
        if (currentStep < 4) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const calculateEstimate = () => {
        const basePrice = selectedGames.length * 100;
        const durationMultiplier = duration / 4;
        return Math.round(basePrice * durationMultiplier);
    };

    const requestQuote = () => {
        scrollToContact();
        setTimeout(() => {
            const eventTypeField = document.getElementById('eventType');
            const gamesField = document.getElementById('gamesInterested');
            const guestCountField = document.getElementById('guestCount');
            const messageField = document.getElementById('message');
            
            if (eventTypeField) eventTypeField.value = selectedEventType;
            if (gamesField) gamesField.value = selectedGames.join(', ');
            if (guestCountField) guestCountField.value = guests;
            if (messageField) {
                messageField.value = `Built custom arcade: ${selectedGames.length} games, ${duration} hours. `;
            }
        }, 800);
    };

    return (
        <section id="builder" className="builder">
            <div className="container">
                <h2 className="section-title center">Build Your Arcade</h2>
                <p className="section-subtitle">Create your perfect gaming experience in 4 easy steps</p>
                
                <div className="builder-container">
                    <div className="builder-steps">
                        {[1, 2, 3, 4].map((step, index) => (
                            <React.Fragment key={step}>
                                <div className={`step ${currentStep === step ? 'active' : ''}`}>
                                    <div className="step-number">{step}</div>
                                    <div className="step-label">
                                        {step === 1 && 'Event Type'}
                                        {step === 2 && 'Select Games'}
                                        {step === 3 && 'Duration'}
                                        {step === 4 && 'Review'}
                                    </div>
                                </div>
                                {index < 3 && <div className="step-line"></div>}
                            </React.Fragment>
                        ))}
                    </div>

                    <div className="builder-content">
                        {/* Step 1: Event Type */}
                        <div className={`builder-pane ${currentStep === 1 ? 'active' : ''}`}>
                            <h3>What type of event are you planning?</h3>
                            <div className="event-types">
                                <button className={`event-type-btn ${selectedEventType === 'birthday' ? 'selected' : ''}`} onClick={() => handleEventTypeSelect('birthday')}>
                                    <span className="event-icon">🎂</span>
                                    <span className="event-name">Birthday Party</span>
                                </button>
                                <button className={`event-type-btn ${selectedEventType === 'corporate' ? 'selected' : ''}`} onClick={() => handleEventTypeSelect('corporate')}>
                                    <span className="event-icon">💼</span>
                                    <span className="event-name">Corporate Event</span>
                                </button>
                                <button className={`event-type-btn ${selectedEventType === 'wedding' ? 'selected' : ''}`} onClick={() => handleEventTypeSelect('wedding')}>
                                    <span className="event-icon">💒</span>
                                    <span className="event-name">Wedding</span>
                                </button>
                                <button className={`event-type-btn ${selectedEventType === 'school' ? 'selected' : ''}`} onClick={() => handleEventTypeSelect('school')}>
                                    <span className="event-icon">🎓</span>
                                    <span className="event-name">School Event</span>
                                </button>
                                <button className={`event-type-btn ${selectedEventType === 'other' ? 'selected' : ''}`} onClick={() => handleEventTypeSelect('other')}>
                                    <span className="event-icon">🎉</span>
                                    <span className="event-name">Other</span>
                                </button>
                            </div>
                        </div>

                        {/* Step 2: Select Games */}
                        <div className={`builder-pane ${currentStep === 2 ? 'active' : ''}`}>
                            <h3>Choose your games</h3>
                            <div className="game-selector">
                                {games.map(game => (
                                    <div key={game.id} className="game-select-item">
                                        <input 
                                            type="checkbox" 
                                            id={game.id} 
                                            checked={selectedGames.includes(game.name)}
                                            onChange={() => handleGameToggle(game.name)}
                                        />
                                        <label htmlFor={game.id}>
                                            <span className="game-thumb">{game.icon}</span>
                                            <span>{game.name}</span>
                                        </label>
                                    </div>
                                ))}
                            </div>
                            <div className="builder-actions">
                                <button className="btn btn-secondary" onClick={prevStep}>Back</button>
                                <button className="btn btn-primary" onClick={nextStep}>Next Step</button>
                            </div>
                        </div>

                        {/* Step 3: Duration */}
                        <div className={`builder-pane ${currentStep === 3 ? 'active' : ''}`}>
                            <h3>How long do you need the arcade?</h3>
                            <div className="form-group">
                                <label>Duration (Hours)</label>
                                <input 
                                    type="range" 
                                    id="duration" 
                                    min="2" 
                                    max="8" 
                                    step="1" 
                                    value={duration}
                                    onChange={(e) => setDuration(parseInt(e.target.value))}
                                />
                                <div className="range-value" id="durationValue">{duration} hours</div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="guests">Expected Number of Guests</label>
                                <input 
                                    type="number" 
                                    id="guests" 
                                    min="1" 
                                    value={guests}
                                    onChange={(e) => setGuests(parseInt(e.target.value))}
                                />
                            </div>
                            <div className="builder-actions">
                                <button className="btn btn-secondary" onClick={prevStep}>Back</button>
                                <button className="btn btn-primary" onClick={nextStep}>Review Summary</button>
                            </div>
                        </div>

                        {/* Step 4: Review */}
                        <div className={`builder-pane ${currentStep === 4 ? 'active' : ''}`}>
                            <h3>Review Your Custom Arcade</h3>
                            <div className="builder-summary">
                                <div className="summary-item">
                                    <span className="summary-label">Event Type:</span>
                                    <span className="summary-value" id="summaryEventType">{eventTypeMap[selectedEventType] || '-'}</span>
                                </div>
                                <div className="summary-item">
                                    <span className="summary-label">Games Selected:</span>
                                    <span className="summary-value" id="summaryGames">{selectedGames.join(', ') || '-'}</span>
                                </div>
                                <div className="summary-item">
                                    <span className="summary-label">Duration:</span>
                                    <span className="summary-value" id="summaryDuration">{duration} hours</span>
                                </div>
                                <div className="summary-item">
                                    <span className="summary-label">Expected Guests:</span>
                                    <span className="summary-value" id="summaryGuests">{guests}</span>
                                </div>
                            </div>
                            <div className="estimate-box">
                                <div className="estimate-label">Estimated Starting Price</div>
                                <div className="estimate-price" id="estimatePrice">${calculateEstimate()}</div>
                                <div className="estimate-note">*Final price subject to location, date, and customizations</div>
                            </div>
                            <div className="builder-actions">
                                <button className="btn btn-secondary" onClick={prevStep}>Back</button>
                                <button className="btn btn-primary" onClick={requestQuote}>Request Official Quote</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Builder;

