# 🎮 Arcadium - Event Arcade Rental Landing Page

A modern, vibrant React landing page for Arcadium, featuring retro-futuristic arcade aesthetics with neon colors, smooth animations, and interactive components.

## ✨ Features

- 🎨 **Retro-Futuristic Design**: Neon colors, glowing effects, and 80s/90s arcade vibes
- ⚡ **Smooth Animations**: Framer Motion for scroll animations and micro-interactions
- 📱 **Fully Responsive**: Mobile-first design that looks great on all devices
- 🎯 **Interactive Components**:
  - Multi-step event builder with live quote calculator
  - Tabbed game showcase with category filtering
  - Image gallery with lightbox
  - Testimonial carousel
  - Contact form with validation
- 🚀 **Performance Optimized**: Lazy loading, intersection observers, and code splitting
- ♿ **Accessible**: WCAG AA compliant with keyboard navigation and ARIA labels
- 🎭 **Context API**: State management for cross-component data

## 🛠️ Tech Stack

- **Framework**: React 18+
- **Styling**: Tailwind CSS + Custom CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Form Handling**: Custom hooks with validation
- **State Management**: React Context API

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/arcadium.git
   cd arcadium
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize the neon color palette:

```javascript
colors: {
  'neon-pink': '#FF006E',
  'neon-cyan': '#00F5FF',
  'neon-purple': '#8B00FF',
  // ... more colors
}
```

### Content

Update data in `src/utils/constants.js`:

- `GAMES` - Game collection data
- `PACKAGES` - Pricing tier information
- `TESTIMONIALS` - Customer reviews
- `CONTACT_INFO` - Business contact details

### Forms

To enable form submissions:

1. **EmailJS Integration** (Recommended for quick setup):
   ```bash
   npm install @emailjs/browser
   ```
   
   Update `src/components/Contact/Contact.jsx` with your EmailJS credentials.

2. **Or use Formspree**:
   Replace the form submission endpoint in the Contact component.

## 📁 Project Structure

```
src/
├── components/
│   ├── Hero/                 # Landing hero section
│   ├── About/                # About section
│   ├── GamesShowcase/        # Game catalog with tabs
│   ├── BuildYourArcade/      # Multi-step form builder
│   ├── HowItWorks/           # Process timeline
│   ├── Gallery/              # Photo gallery
│   ├── Testimonials/         # Customer reviews carousel
│   ├── Contact/              # Contact form
│   ├── Footer/               # Footer component
│   ├── FloatingElements/     # WhatsApp & Scroll to Top
│   └── shared/               # Reusable components
├── context/
│   └── EventContext.js       # Global state management
├── hooks/
│   ├── useIntersectionObserver.js
│   ├── useScrollAnimation.js
│   └── useForm.js
├── utils/
│   ├── constants.js          # Static data
│   └── helpers.js            # Utility functions
└── App.js                    # Main app component
```

## 🎯 Key Components

### Hero
Full-screen landing section with animated logo, CTAs, and floating particles.

### GamesShowcase
Tabbed game browser with category filters and add-to-event functionality.

### BuildYourArcade
4-step wizard for customizing event packages:
1. Select event type
2. Choose games
3. Enter event details
4. View summary and estimate

### Contact
Contact form with validation, WhatsApp integration, and contact information display.

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag and drop the 'build' folder to Netlify
```

### GitHub Pages
```bash
npm install gh-pages --save-dev
# Add to package.json:
# "homepage": "https://yourusername.github.io/arcadium"
# "predeploy": "npm run build"
# "deploy": "gh-pages -d build"
npm run deploy
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Focus visible states
- Color contrast compliance (WCAG AA)
- Reduced motion support

## 📄 License

MIT License - feel free to use this project for your own business!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For questions or issues, please open an issue on GitHub or contact us at hello@arcadiumsa.com.

## 🎉 Acknowledgments

- Design inspiration from retro arcade aesthetics
- Framer Motion for amazing animation capabilities
- Tailwind CSS for rapid UI development

---

**Made with ❤️ for gamers everywhere** 🎮✨
