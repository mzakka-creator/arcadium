# 🎮 Arcadium - Quick Reference Guide

## 🚀 Your App is Running!

**Local URL**: http://localhost:3001  
**Network URL**: http://10.2.0.2:3001

The development server is running and your Arcadium landing page is live! 🎉

## ⚡ Quick Commands

```bash
npm start          # Start dev server (already running!)
npm run build      # Build for production
npm test           # Run tests
```

## 📝 Quick Customization Checklist

### 1. Update Business Info (5 minutes)
📁 File: `src/utils/constants.js`

```javascript
export const CONTACT_INFO = {
  phone: "+1-YOUR-PHONE",           // ← Change this
  email: "your@email.com",          // ← Change this
  whatsapp: "+1YOURWHATSAPP",       // ← Change this
  instagram: "@yourhandle",         // ← Change this
  facebook: "YourPage",             // ← Change this
  hours: "Mon-Sun: 9AM - 10PM",
  location: "Your City, State",
  serviceArea: "Your service area"
};
```

### 2. Add Your Games (10 minutes)
📁 File: `src/utils/constants.js`

Find the `GAMES` array and add/edit:

```javascript
{
  id: 1,
  name: "Your Game Name",
  category: "retro", // retro, modern, vr, racing
  description: "Short description",
  image: "/images/games/yourgame.jpg",
  specs: {
    players: "1-2",
    space: "2ft x 3ft",
    power: "Standard outlet"
  },
  tags: ["Tag1", "Tag2"],
  popular: true // Show "POPULAR" badge
}
```

### 3. Update Pricing (5 minutes)
📁 File: `src/utils/constants.js`

Edit the `PACKAGES` array:

```javascript
{
  id: "starter",
  name: "Starter Pack",
  games: "3-4 games",
  duration: "3 hours",
  guests: "Up to 30",
  price: "Starting at $499",  // ← Your price
  features: [
    "Feature 1",
    "Feature 2",
    // ...
  ]
}
```

### 4. Add Testimonials (5 minutes)
📁 File: `src/utils/constants.js`

Edit the `TESTIMONIALS` array:

```javascript
{
  id: 1,
  name: "Customer Name",
  eventType: "Birthday Party",
  rating: 5,
  quote: "Your customer's review here",
  image: "/images/testimonials/customer.jpg",
  location: "City, State"
}
```

## 🎨 Quick Color Changes

📁 File: `tailwind.config.js`

```javascript
colors: {
  'neon-pink': '#FF006E',    // ← Change these
  'neon-cyan': '#00F5FF',
  'neon-purple': '#8B00FF',
  'neon-orange': '#FF6B00',
  // ...
}
```

## 📧 Setup Contact Form

### Option 1: EmailJS (Easiest)

1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Get your credentials
3. Edit `src/components/Contact/Contact.jsx`:

```javascript
import emailjs from '@emailjs/browser';

const handleSubmit = async (values) => {
  await emailjs.send(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    values,
    'YOUR_PUBLIC_KEY'
  );
};
```

## 📁 File Structure Quick Reference

```
src/
├── components/
│   ├── Hero/              ← Landing section
│   ├── About/             ← About section
│   ├── GamesShowcase/     ← Game catalog
│   ├── BuildYourArcade/   ← Event builder
│   ├── Contact/           ← Contact form
│   └── shared/            ← Reusable components
├── utils/
│   └── constants.js       ← ⭐ EDIT THIS FIRST!
└── App.js                 ← Main app
```

## 🖼️ Adding Images

1. **Game Images**: Place in `public/images/games/`
2. **Gallery**: Place in `public/images/gallery/`
3. **Testimonials**: Place in `public/images/testimonials/`

Update paths in `constants.js`:

```javascript
image: "/images/games/pacman.jpg"  // Your image path
```

## 🎯 Key Sections to Customize

| Section | File | What to Change |
|---------|------|----------------|
| Contact Info | `constants.js` | Phone, email, WhatsApp |
| Games | `constants.js` | Add your game collection |
| Pricing | `constants.js` | Update package prices |
| Testimonials | `constants.js` | Add customer reviews |
| Colors | `tailwind.config.js` | Change neon colors |
| Logo Text | `Hero.jsx` | Change "ARCADIUM" text |

## 🚀 Deploy to Production

### Vercel (Recommended)

```bash
# 1. Push to GitHub
git add .
git commit -m "Initial commit"
git push origin main

# 2. Go to vercel.com
# 3. Import your GitHub repo
# 4. Click Deploy
# Done! 🎉
```

### Build Locally

```bash
npm run build
# Upload the 'build' folder to your host
```

## 🐛 Troubleshooting

### Issue: Styles not working
**Fix**: Restart dev server (`npm start`)

### Issue: Images not showing
**Fix**: Check image paths start with `/images/`

### Issue: Form not submitting
**Fix**: Setup EmailJS (see above)

### Issue: WhatsApp not working
**Fix**: Update phone number in `constants.js`

## 📱 Test Before Launch

- [ ] Test on mobile device
- [ ] Click all navigation links
- [ ] Submit contact form
- [ ] Test WhatsApp button
- [ ] Check all images load
- [ ] Test on different browsers

## 🎨 Component Overview

| Component | Purpose | Location |
|-----------|---------|----------|
| Hero | Landing section | `components/Hero/` |
| About | Company info | `components/About/` |
| GamesShowcase | Game catalog | `components/GamesShowcase/` |
| BuildYourArcade | Event builder | `components/BuildYourArcade/` |
| HowItWorks | Process steps | `components/HowItWorks/` |
| Gallery | Photo gallery | `components/Gallery/` |
| Testimonials | Reviews | `components/Testimonials/` |
| Contact | Contact form | `components/Contact/` |
| Footer | Footer | `components/Footer/` |

## 🔧 Useful Snippets

### Add a New Game

```javascript
// In constants.js - GAMES array
{
  id: 9,
  name: "New Game",
  category: "modern",
  description: "Description here",
  image: "/images/games/newgame.jpg",
  specs: {
    players: "1-4",
    space: "3ft x 3ft",
    power: "Standard outlet"
  },
  tags: ["Fun", "Multiplayer"],
  popular: false
}
```

### Change Hero Title

```javascript
// In Hero.jsx
<h1 className="...">
  YOUR BUSINESS NAME  {/* ← Change this */}
</h1>
```

### Update Tagline

```javascript
// In Hero.jsx
<h2 className="...">
  Your Custom Tagline  {/* ← Change this */}
</h2>
```

## 📞 Support

- **Documentation**: See `README.md`
- **Getting Started**: See `GETTING_STARTED.md`
- **Features**: See `FEATURES.md`
- **Project Summary**: See `PROJECT_SUMMARY.md`

## 🎉 You're Ready!

Your Arcadium landing page is running at:
**http://localhost:3001**

1. ✅ Customize your content
2. ✅ Add your images
3. ✅ Setup contact form
4. ✅ Test everything
5. ✅ Deploy!

**Let's level up your business! 🎮✨**

---

**Need help?** All components are well-commented. Just open the file and read!

