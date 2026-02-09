import React, { useState, useEffect } from 'react';

function Testimonials() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const testimonials = [
        {
            text: "Arcadium made our corporate event unforgettable! The team was professional, the games were in perfect condition, and our employees are still talking about it weeks later.",
            author: "Sarah Johnson",
            event: "Tech Company Team Building"
        },
        {
            text: "Best birthday party ever! My son and his friends played for hours. Setup was seamless and the variety of games kept everyone entertained. Highly recommend!",
            author: "Michael Chen",
            event: "12th Birthday Party"
        },
        {
            text: "We added Arcadium to our wedding reception and it was a huge hit! It gave guests something fun to do between dances and created a unique atmosphere.",
            author: "Emily & David",
            event: "Wedding Reception"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [testimonials.length]);

    return (
        <section id="testimonials" className="testimonials">
            <div className="container">
                <h2 className="section-title center">What Our Clients Say</h2>
                
                <div className="testimonials-slider">
                    {testimonials.map((testimonial, index) => (
                        <div 
                            key={index} 
                            className="testimonial-card" 
                            style={{ display: index === currentTestimonial ? 'block' : 'none' }}
                        >
                            <div className="stars">★★★★★</div>
                            <p className="testimonial-text">"{testimonial.text}"</p>
                            <div className="testimonial-author">
                                <strong>{testimonial.author}</strong>
                                <span>{testimonial.event}</span>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="testimonials-nav">
                    {testimonials.map((_, index) => (
                        <button 
                            key={index}
                            className={`nav-dot ${index === currentTestimonial ? 'active' : ''}`}
                            onClick={() => setCurrentTestimonial(index)}
                        ></button>
                    ))}
                </div>
                
                <div className="review-platforms">
                    <a href="#" className="platform-link">
                        <span>See more reviews on Google</span>
                        <span className="stars-small">★★★★★ 4.9</span>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;

