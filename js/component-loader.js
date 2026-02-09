// ========================================
// ARCADIUM - COMPONENT LOADER SYSTEM
// ========================================

/**
 * Dynamically loads HTML components into the page
 * This enables a modular, maintainable component-based architecture
 */

class ComponentLoader {
    constructor() {
        this.components = [
            { name: 'header', target: 'header-container' },
            { name: 'hero', target: 'hero-container' },
            { name: 'about', target: 'about-container' },
            { name: 'games', target: 'games-container' },
            { name: 'builder', target: 'builder-container' },
            { name: 'how-it-works', target: 'how-it-works-container' },
            { name: 'gallery', target: 'gallery-container' },
            { name: 'timeline-story', target: 'timeline-story-container' },
            { name: 'game-spotlight', target: 'game-spotlight-container' },
            { name: 'space-planner', target: 'space-planner-container' },
            { name: 'testimonials', target: 'testimonials-container' },
            { name: 'contact', target: 'contact-container' },
            { name: 'footer', target: 'footer-container' }
        ];
        
        this.loadedCount = 0;
        this.totalComponents = this.components.length;
    }

    /**
     * Load a single component
     */
    async loadComponent(component) {
        try {
            const response = await fetch(`components/${component.name}.html`);
            
            if (!response.ok) {
                throw new Error(`Failed to load ${component.name}: ${response.status}`);
            }
            
            const html = await response.text();
            const container = document.getElementById(component.target);
            
            if (container) {
                container.innerHTML = html;
                this.loadedCount++;
                this.updateProgress();
            } else {
                console.warn(`Container #${component.target} not found for component ${component.name}`);
            }
        } catch (error) {
            console.error(`Error loading component ${component.name}:`, error);
        }
    }

    /**
     * Load all components
     */
    async loadAll() {
        console.log('🎮 Loading Arcadium components...');
        
        // Show loading indicator
        this.showLoader();
        
        // Load all components in parallel for better performance
        const loadPromises = this.components.map(component => this.loadComponent(component));
        
        await Promise.all(loadPromises);
        
        // Hide loading indicator
        this.hideLoader();
        
        // Initialize the main script after all components are loaded
        this.initializeApp();
        
        console.log('✅ All components loaded successfully!');
    }

    /**
     * Update loading progress
     */
    updateProgress() {
        const percentage = Math.round((this.loadedCount / this.totalComponents) * 100);
        const progressBar = document.querySelector('.loader-progress-bar');
        const progressText = document.querySelector('.loader-text');
        
        if (progressBar) {
            progressBar.style.width = `${percentage}%`;
        }
        
        if (progressText) {
            progressText.textContent = `Loading... ${percentage}%`;
        }
    }

    /**
     * Show loading screen
     */
    showLoader() {
        const loader = document.getElementById('component-loader');
        if (loader) {
            loader.style.display = 'flex';
        }
    }

    /**
     * Hide loading screen with fade out animation
     */
    hideLoader() {
        const loader = document.getElementById('component-loader');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }
    }

    /**
     * Initialize the application after components are loaded
     */
    initializeApp() {
        // Dispatch custom event that components are ready
        const event = new CustomEvent('componentsLoaded');
        document.dispatchEvent(event);
        
        // Re-initialize any script functionality that depends on DOM elements
        if (typeof initScrollEffects === 'function') {
            initScrollEffects();
        }
        
        if (typeof initStatCounters === 'function') {
            initStatCounters();
        }
        
        if (typeof initBackToTop === 'function') {
            initBackToTop();
        }
        
        if (typeof initAnimations === 'function') {
            initAnimations();
        }
    }
}

// Initialize and load components when DOM is ready
document.addEventListener('DOMContentLoaded', async () => {
    const loader = new ComponentLoader();
    await loader.loadAll();
});

// Export for use in other scripts if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ComponentLoader;
}


