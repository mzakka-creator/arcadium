import React from 'react';

function Gallery() {
    const galleryItems = [
        { id: 1, label: 'Event Photo 1' },
        { id: 2, label: 'Event Photo 2' },
        { id: 3, label: 'Event Photo 3' },
        { id: 4, label: 'Event Photo 4' },
        { id: 5, label: 'Event Photo 5' },
        { id: 6, label: 'Event Photo 6' }
    ];

    return (
        <section id="gallery" className="gallery">
            <div className="container">
                <h2 className="section-title center">See Arcadium in Action</h2>
                <p className="section-subtitle">Check out our latest events and happy customers</p>
                
                <div className="gallery-grid">
                    {galleryItems.map(item => (
                        <div key={item.id} className="gallery-item">
                            <div className="gallery-placeholder">
                                <span>📸</span>
                                <p>{item.label}</p>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="instagram-cta">
                    <p>Follow us for more amazing events</p>
                    <a href="https://instagram.com/arcadiumsa" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        <span>📱 Follow @arcadiumsa</span>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Gallery;

