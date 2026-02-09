# 🚀 Getting Started with Arcadium

Welcome to your new Arcadium landing page! Follow these steps to get up and running.

## Quick Start (5 minutes)

### 1. Install Dependencies

Open your terminal in the project directory and run:

```bash
npm install
```

This will install:
- React 18+
- Tailwind CSS
- Framer Motion (animations)
- Lucide React (icons)
- React Hook Form
- EmailJS (for contact forms)
- And more...

### 2. Start Development Server

```bash
npm start
```

Your site will open at `http://localhost:3000`

### 3. Build for Production

When ready to deploy:

```bash
npm run build
```

## 🎨 Customization Guide

### Update Your Business Information

Edit `src/utils/constants.js` and update:

```javascript
export const CONTACT_INFO = {
  phone: "+1-YOUR-PHONE",
  email: "your@email.com",
  whatsapp: "+1YOURWHATSAPP",
  instagram: "@yourinstagram",
  // ... more
};
```

### Add Your Games

In the same file (`src/utils/constants.js`), update the `GAMES` array:

```javascript
export const GAMES = [
  {
    id: 1,
    name: "Your Game Name",
    category: "retro", // or "modern", "vr", "racing"
    description: "Game description",
    image: "/images/games/yourgame.jpg",
    specs: {
      players: "1-2",
      space: "2ft x 3ft",
      power: "Standard outlet"
    },
    tags: ["Tag1", "Tag2"],
    popular: true
  },
  // ... more games
];
```

### Update Packages & Pricing

Edit `PACKAGES` in `src/utils/constants.js`:

```javascript
export const PACKAGES = [
  {
    id: "starter",
    name: "Starter Pack",
    price: "Starting at $XXX",
    // ... features
  },
  // ... more packages
];
```

### Add Real Testimonials

Update `TESTIMONIALS` in the constants file with real customer reviews.

## 📧 Setup Contact Form

### Option 1: EmailJS (Easiest)

1. Sign up at [EmailJS.com](https://www.emailjs.com/)
2. Create an email service
3. Create an email template
4. Get your credentials:
   - Service ID
   - Template ID
   - Public Key

5. In `src/components/Contact/Contact.jsx`, uncomment the EmailJS integration and add your credentials:

```javascript
import emailjs from '@emailjs/browser';

const handleSubmit = async (values) => {
  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      values,
      'YOUR_PUBLIC_KEY'
    );
    // Success handling
  } catch (error) {
    console.error('Error:', error);
  }
};
```

### Option 2: Formspree

1. Sign up at [Formspree.io](https://formspree.io/)
2. Create a form and get your endpoint
3. Update the form submission in Contact.jsx

### Option 3: Your Own Backend

Connect to your own API endpoint in the Contact component.

## 🖼️ Add Real Images

Currently, the site uses emoji placeholders (🎮, 📸). Replace with real images:

1. **Game Images**: Add to `public/images/games/`
2. **Gallery Photos**: Add to `public/images/gallery/`
3. **Testimonials**: Add to `public/images/testimonials/`

Update the image paths in `src/utils/constants.js`.

## 🎨 Customize Colors

Edit `tailwind.config.js` to change the neon color scheme:

```javascript
colors: {
  'neon-pink': '#FF006E',    // Your color
  'neon-cyan': '#00F5FF',    // Your color
  'neon-purple': '#8B00FF',  // Your color
  // ...
}
```

## 🌐 Deploy Your Site

### Vercel (Recommended - Free & Easy)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Click "Deploy"
5. Done! Your site is live 🎉

### Netlify

1. Run `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `build` folder
4. Done!

## 📱 Test Your Site

Before launching, test:

- ✅ All links work
- ✅ Contact form submissions
- ✅ WhatsApp button opens correctly
- ✅ Mobile responsiveness (test on phone)
- ✅ Load time (should be fast!)
- ✅ All images load
- ✅ Animations work smoothly

## 🐛 Common Issues

### Issue: Tailwind styles not working

**Solution**: Make sure you ran `npm install` and the development server is running.

### Issue: Icons not showing

**Solution**: Check that Lucide React is installed: `npm install lucide-react`

### Issue: Animations not smooth

**Solution**: Check if you have hardware acceleration enabled in your browser.

### Issue: Form not submitting

**Solution**: Set up EmailJS or Formspree as described above.

## 📚 Learn More

- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev)

## 💡 Pro Tips

1. **Performance**: Use WebP format for images
2. **SEO**: Update meta tags in `public/index.html`
3. **Analytics**: Add Google Analytics tracking
4. **Speed**: Enable caching on your hosting platform
5. **Backup**: Keep your code in GitHub

## 🆘 Need Help?

- Check the main README.md for detailed documentation
- Review component code - it's well-commented
- Create an issue on GitHub

---

**You're all set! Time to level up your event business! 🎮✨**

