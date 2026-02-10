// ========================================
// ARCADIUM - INTERACTIVE FEATURES
// ========================================

// Global Variables
let currentBuilderStep = 1;
let currentTestimonial = 0;
let selectedEventType = '';
let selectedGames = [];

// ========================================
// INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    initScrollEffects();
    initStatCounters();
    initBackToTop();
    initAnimations();
});

// ========================================
// HEADER & NAVIGATION
// ========================================

// Sticky Header on Scroll
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    
    mobileMenu.classList.toggle('active');
    menuBtn.classList.toggle('active');
}

// Smooth Scroll to Sections
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function scrollToContact() {
    scrollToSection('contact');
}

// ========================================
// GAMES SECTION - TAB SWITCHING
// ========================================

function switchTab(tabName) {
    // Hide all tab panes
    const panes = document.querySelectorAll('.tab-pane');
    panes.forEach(pane => pane.classList.remove('active'));
    
    // Remove active class from all buttons
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Show selected tab pane
    const selectedPane = document.getElementById(tabName);
    if (selectedPane) {
        selectedPane.classList.add('active');
    }
    
    // Add active class to clicked button
    event.target.classList.add('active');
}

// Add game to event (for game cards)
function addToEvent(gameName) {
    alert(`${gameName} added to your event! Scroll down to build your arcade or contact us to finalize your booking.`);
    // In a real implementation, this would add to a cart/selection
}

// ========================================
// PACKAGE SELECTION
// ========================================

function selectPackage(packageType) {
    const packageNames = {
        'starter': 'Starter Pack',
        'party': 'Party Pack',
        'ultimate': 'Ultimate Experience'
    };
    
    // Scroll to contact form and pre-fill event type
    scrollToContact();
    
    // Add slight delay to ensure scroll completes
    setTimeout(() => {
        const messageField = document.getElementById('message');
        if (messageField) {
            messageField.value = `I'm interested in the ${packageNames[packageType]}. `;
            messageField.focus();
        }
    }, 800);
}

// ========================================
// BUILDER SECTION - STEP-BY-STEP FLOW
// ========================================

function nextBuilderStep() {
    if (currentBuilderStep < 4) {
        // Validate current step
        if (currentBuilderStep === 1 && !selectedEventType) {
            alert('Please select an event type to continue.');
            return;
        }
        
        if (currentBuilderStep === 2) {
            // Get selected games
            const checkboxes = document.querySelectorAll('.game-select-item input[type="checkbox"]:checked');
            selectedGames = Array.from(checkboxes).map(cb => cb.value);
            
            if (selectedGames.length === 0) {
                alert('Please select at least one game to continue.');
                return;
            }
        }
        
        currentBuilderStep++;
        updateBuilderUI();
        
        // If moving to step 4, update summary
        if (currentBuilderStep === 4) {
            updateBuilderSummary();
        }
    }
}

function prevBuilderStep() {
    if (currentBuilderStep > 1) {
        currentBuilderStep--;
        updateBuilderUI();
    }
}

function updateBuilderUI() {
    // Update step indicators
    const steps = document.querySelectorAll('.step');
    steps.forEach((step, index) => {
        if (index + 1 === currentBuilderStep) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }
    });
    
    // Update content panes
    const panes = document.querySelectorAll('.builder-pane');
    panes.forEach((pane, index) => {
        if (index + 1 === currentBuilderStep) {
            pane.classList.add('active');
        } else {
            pane.classList.remove('active');
        }
    });
}

function selectEventType(type) {
    selectedEventType = type;
    
    // Update UI - remove selected class from all buttons
    const buttons = document.querySelectorAll('.event-type-btn');
    buttons.forEach(btn => btn.classList.remove('selected'));
    
    // Add selected class to clicked button
    event.target.closest('.event-type-btn').classList.add('selected');
    
    // Auto advance to next step after brief delay
    setTimeout(() => {
        nextBuilderStep();
    }, 500);
}

function updateDuration(value) {
    document.getElementById('durationValue').textContent = value;
}

function updateBuilderSummary() {
    // Event Type
    const eventTypeMap = {
        'birthday': 'Birthday Party',
        'corporate': 'Corporate Event',
        'wedding': 'Wedding',
        'school': 'School Event',
        'other': 'Other'
    };
    document.getElementById('summaryEventType').textContent = eventTypeMap[selectedEventType] || '-';
    
    // Games
    document.getElementById('summaryGames').textContent = selectedGames.join(', ') || '-';
    
    // Duration
    const duration = document.getElementById('duration').value;
    document.getElementById('summaryDuration').textContent = `${duration} hours`;
    
    // Guests
    const guests = document.getElementById('guests').value;
    document.getElementById('summaryGuests').textContent = guests || '-';
    
    // Calculate estimate (simple calculation)
    const basePrice = selectedGames.length * 100;
    const durationMultiplier = parseInt(duration) / 4;
    const estimate = Math.round(basePrice * durationMultiplier);
    document.getElementById('estimatePrice').textContent = `$${estimate}`;
}

function requestQuote() {
    // Scroll to contact form and pre-fill information
    scrollToContact();
    
    setTimeout(() => {
        const eventTypeField = document.getElementById('eventType');
        const gamesField = document.getElementById('gamesInterested');
        const guestCountField = document.getElementById('guestCount');
        const messageField = document.getElementById('message');
        
        if (eventTypeField) {
            eventTypeField.value = selectedEventType;
        }
        
        if (gamesField) {
            gamesField.value = selectedGames.join(', ');
        }
        
        if (guestCountField) {
            const guests = document.getElementById('guests').value;
            guestCountField.value = guests;
        }
        
        if (messageField) {
            const duration = document.getElementById('duration').value;
            messageField.value = `Built custom arcade: ${selectedGames.length} games, ${duration} hours. `;
        }
    }, 800);
}

// ========================================
// SPACE PLANNER
// ========================================

function selectSpaceOption(option) {
    const cards = document.querySelectorAll('.space-card');
    cards.forEach(card => card.style.transform = 'scale(1)');
    
    event.currentTarget.style.transform = 'scale(1.05)';
    
    // Optional: Show more details or scroll to contact
    setTimeout(() => {
        event.currentTarget.style.transform = 'scale(1)';
    }, 2000);
}

// ========================================
// TESTIMONIALS SLIDER
// ========================================

function showTestimonial(index) {
    const cards = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.nav-dot');
    
    // Hide all testimonials
    cards.forEach(card => card.style.display = 'none');
    
    // Remove active class from all dots
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Show selected testimonial
    if (cards[index]) {
        cards[index].style.display = 'block';
    }
    
    // Add active class to selected dot
    if (dots[index]) {
        dots[index].classList.add('active');
    }
    
    currentTestimonial = index;
}

// Auto-rotate testimonials every 5 seconds
setInterval(() => {
    const cards = document.querySelectorAll('.testimonial-card');
    currentTestimonial = (currentTestimonial + 1) % cards.length;
    showTestimonial(currentTestimonial);
}, 5000);

// ========================================
// CONTACT FORM
// ========================================

function submitQuoteForm(event) {
    event.preventDefault();
    
    // Get form data
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    // In a real implementation, this would send to a server
    console.log('Form submitted:', data);
    
    // Show success modal
    const modal = document.getElementById('successModal');
    modal.classList.add('active');
    
    // Reset form
    event.target.reset();
    
    // Hide modal after 3 seconds
    setTimeout(() => {
        closeModal();
    }, 3000);
}

function closeModal() {
    const modal = document.getElementById('successModal');
    modal.classList.remove('active');
}

// Close modal when clicking outside
document.addEventListener('click', function(event) {
    const modal = document.getElementById('successModal');
    if (event.target === modal) {
        closeModal();
    }
});

// ========================================
// BACK TO TOP BUTTON
// ========================================

function initBackToTop() {
    const backToTop = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ========================================
// ANIMATED STATISTICS COUNTER
// ========================================

function initStatCounters() {
    const stats = document.querySelectorAll('.stat-number');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                animateCounter(entry.target, target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    stats.forEach(stat => observer.observe(stat));
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const duration = 2000;
    const stepTime = duration / 50;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target.toLocaleString();
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current).toLocaleString();
        }
    }, stepTime);
}

// ========================================
// SCROLL ANIMATIONS
// ========================================

function initScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for scroll animations
    const animatedElements = document.querySelectorAll(
        '.feature-card, .game-card, .package-card, .timeline-item, .story-item, .testimonial-card'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ========================================
// ADDITIONAL ANIMATIONS
// ========================================

function initAnimations() {
    // Add subtle parallax effect to hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const hero = document.querySelector('.hero');
        
        if (hero && scrolled < window.innerHeight) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
    
    // Animate game cards on hover
    const gameCards = document.querySelectorAll('.game-card');
    gameCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });
    
    // Add click effect to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.5)';
            ripple.style.width = '20px';
            ripple.style.height = '20px';
            ripple.style.left = e.offsetX + 'px';
            ripple.style.top = e.offsetY + 'px';
            ripple.style.transform = 'translate(-50%, -50%)';
            ripple.style.animation = 'ripple 0.6s ease-out';
            ripple.style.pointerEvents = 'none';
            
            this.style.position = 'relative';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Add ripple animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            width: 100px;
            height: 100px;
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ========================================
// KEYBOARD NAVIGATION
// ========================================

document.addEventListener('keydown', function(e) {
    // Close modal on Escape
    if (e.key === 'Escape') {
        closeModal();
        
        // Close mobile menu
        const mobileMenu = document.getElementById('mobileMenu');
        if (mobileMenu.classList.contains('active')) {
            toggleMobileMenu();
        }
    }
    
    // Navigate testimonials with arrow keys
    if (e.key === 'ArrowLeft') {
        const cards = document.querySelectorAll('.testimonial-card');
        currentTestimonial = (currentTestimonial - 1 + cards.length) % cards.length;
        showTestimonial(currentTestimonial);
    }
    
    if (e.key === 'ArrowRight') {
        const cards = document.querySelectorAll('.testimonial-card');
        currentTestimonial = (currentTestimonial + 1) % cards.length;
        showTestimonial(currentTestimonial);
    }
});

// ========================================
// PERFORMANCE OPTIMIZATION
// ========================================

// Lazy load images (if images are added later)
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ========================================
// CONSOLE EASTER EGG
// ========================================

console.log('%c🕹️ ARCADIUM 🕹️', 'font-size: 50px; color: #FF006E; text-shadow: 0 0 10px #FF006E;');
console.log('%cLevel Up Your Event with Arcade Entertainment!', 'font-size: 16px; color: #00F0FF;');
console.log('%cLooking for a developer? Contact us!', 'font-size: 14px; color: #8B00FF;');

// ========================================
// ACCESSIBILITY IMPROVEMENTS
// ========================================

// Add focus visible styles for keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-nav');
});

// Announce dynamic content changes for screen readers
function announceChange(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    document.body.appendChild(announcement);
    
    setTimeout(() => {
        announcement.remove();
    }, 1000);
}

// Add screen reader only class to CSS
const srOnlyStyle = document.createElement('style');
srOnlyStyle.textContent = `
    .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
    }
    
    body.keyboard-nav *:focus {
        outline: 3px solid #00F0FF;
        outline-offset: 2px;
    }
`;
document.head.appendChild(srOnlyStyle);

// ========================================
// UTILITY FUNCTIONS
// ========================================

// Get current date for event date picker minimum
window.addEventListener('load', function() {
    const eventDateInput = document.getElementById('eventDate');
    if (eventDateInput) {
        const today = new Date().toISOString().split('T')[0];
        eventDateInput.setAttribute('min', today);
    }
});

// Prevent form submission on Enter in text inputs (except textareas)
document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
        if (e.target.tagName === 'INPUT' && e.target.type !== 'submit') {
            e.preventDefault();
        }
    }
});

console.log('🎮 Arcadium website loaded successfully!');



