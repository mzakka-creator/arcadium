# 🚀 Quick Start Guide - Arcadium

## Get Up and Running in 30 Seconds!

### Step 1: Start the Server

**Windows:**
```bash
# Double-click this file:
START-SERVER.bat
```

**Mac/Linux or Command Line:**
```bash
npm start
```

That's it! The server will start and your browser will open automatically.

---

## 📂 What You Got

### ✅ Component-Based Architecture
Your landing page is now split into **13 modular components**:

```
components/
├── header.html          ← Navigation & mobile menu
├── hero.html            ← Main hero section
├── about.html           ← About & features
├── games.html           ← Game catalog & packages
├── builder.html         ← Interactive builder
├── how-it-works.html    ← Process timeline
├── gallery.html         ← Photo gallery
├── timeline-story.html  ← Event journey
├── game-spotlight.html  ← Featured game
├── space-planner.html   ← Space planning tool
├── testimonials.html    ← Customer reviews
├── contact.html         ← Contact form
└── footer.html          ← Footer & floating elements
```

### ✅ Key Files

| File | Purpose |
|------|---------|
| `index.html` | Main entry point, loads all components |
| `styles.css` | All styling (neon effects, animations, responsive) |
| `script.js` | All JavaScript functionality |
| `js/component-loader.js` | Loads components dynamically |

---

## ✏️ How to Edit

### Edit a Section

1. **Find the component** in `components/` directory
2. **Open the file** (e.g., `components/hero.html`)
3. **Make your changes**
4. **Save**
5. **Refresh browser** - Changes appear instantly! ✨

### Example: Change the Hero Title

```bash
# Open this file:
components/hero.html

# Find and change:
<h1 class="hero-title">Level Up Your Event with Arcade Entertainment</h1>

# Save and refresh browser
```

---

## 🎨 Customization Guide

### 1. Update Contact Info

**Search for these in all component files:**
- Phone: `(123) 456-7890`
- Email: `info@arcadium.com`
- Instagram: `@arcadiumsa`
- WhatsApp: `1234567890`

**Quick Find & Replace:**
- VS Code: `Ctrl/Cmd + Shift + F`
- Search in: `components` folder
- Replace all instances

### 2. Change Colors

**Open `styles.css` and edit the top section:**

```css
:root {
    --neon-pink: #FF006E;    /* Your primary color */
    --neon-cyan: #00F0FF;    /* Your secondary color */
    --neon-purple: #8B00FF;  /* Accent color */
    --neon-orange: #FF6B00;  /* Highlight color */
    --neon-green: #00FF85;   /* Success color */
}
```

### 3. Add Your Images

Replace these placeholder sections:

| Component | What to Replace |
|-----------|----------------|
| `hero.html` | Logo text with `<img>` tag |
| `about.html` | `.image-placeholder` with real photo |
| `gallery.html` | All `.gallery-placeholder` divs |
| `timeline-story.html` | `.image-placeholder-small` with photos |
| `game-spotlight.html` | `.image-placeholder-large` with game image |

### 4. Update Games & Packages

**File:** `components/games.html`

- **Add/remove games:** Duplicate or delete `.game-card` divs
- **Change prices:** Edit `.package-price` sections
- **Modify packages:** Update `.package-features` lists

### 5. Update Testimonials

**File:** `components/testimonials.html`

- Find `.testimonial-card` sections
- Replace customer names, quotes, and event types
- Add more cards by duplicating the structure

---

## 🔧 Common Tasks

### Add a New Component

```bash
# 1. Create the component file
components/my-new-section.html

# 2. Add to component loader (js/component-loader.js):
{ name: 'my-new-section', target: 'my-new-section-container' }

# 3. Add container in index.html:
<div id="my-new-section-container"></div>

# 4. Add styles to styles.css
# 5. Refresh browser
```

### Remove a Component

```bash
# 1. Remove from component-loader.js (delete the line)
# 2. Remove container from index.html (delete the div)
# 3. (Optional) Delete the component file
```

### Reorder Sections

**Simply reorder the container divs in `index.html`:**

```html
<!-- Want gallery before games? Just swap the order: -->
<div id="gallery-container"></div>  <!-- Now shows first -->
<div id="games-container"></div>    <!-- Now shows second -->
```

---

## 📱 Testing

### Test Responsiveness

1. **Chrome DevTools:** Press `F12` → Click device toggle icon
2. **Test these sizes:**
   - Mobile: 375px
   - Tablet: 768px
   - Desktop: 1440px

### Test Interactive Features

✅ Click navigation links (smooth scroll)  
✅ Toggle mobile menu (hamburger icon)  
✅ Switch game tabs  
✅ Complete the 4-step builder  
✅ Fill out contact form  
✅ Hover over cards (neon glow effects)  
✅ Scroll down (animations trigger)  
✅ Click back to top button  

---

## 🚀 Deployment

### Deploy to Netlify (Easiest)

1. Go to [netlify.com](https://netlify.com)
2. Drag your `arcadium` folder to Netlify
3. Done! You get a live URL instantly

### Deploy to GitHub Pages

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin YOUR_REPO_URL
git push -u origin main

# Then enable GitHub Pages in repo settings
```

### Deploy to Vercel

```bash
npx vercel
```

---

## 🐛 Troubleshooting

### Components Not Loading?

**Problem:** Blank page or loading screen stuck  
**Solution:** Make sure server is running!

```bash
# Run this command:
npm start

# Then open: http://localhost:3000
```

### Changes Not Showing?

**Solution:** Hard refresh browser
- Windows: `Ctrl + Shift + R`
- Mac: `Cmd + Shift + R`

### Port Already in Use?

```bash
# Use a different port:
npx serve -s . -l 3001
```

---

## 📚 Documentation

- **Component Guide:** [`components/README.md`](components/README.md)
- **Architecture:** [`COMPONENT-STRUCTURE.md`](COMPONENT-STRUCTURE.md)
- **Full README:** [`README.md`](README.md)

---

## 🎯 Next Steps

### Immediate:
1. ✅ Start the server (`START-SERVER.bat` or `npm start`)
2. ✅ View the site at http://localhost:3000
3. ✅ Edit `components/hero.html` to see live changes
4. ✅ Update your contact info across all components

### Soon:
5. ⬜ Add your real images
6. ⬜ Update games and pricing
7. ⬜ Customize colors
8. ⬜ Add real testimonials
9. ⬜ Connect form to email
10. ⬜ Deploy to web!

---

## 💡 Pro Tips

### Keyboard Shortcuts
- `Ctrl/Cmd + P` in VS Code: Quick file search
- `Ctrl/Cmd + Shift + F`: Search across all files
- `Ctrl/Cmd + D`: Select next occurrence

### Development Workflow
```
1. Make changes to component → Save
2. Refresh browser → See changes
3. Repeat!
```

### Best Practices
- ✅ Edit one component at a time
- ✅ Test in browser after each change
- ✅ Keep original files as backup
- ✅ Use version control (Git)

---

## 🎮 You're Ready!

Your component-based Arcadium landing page is ready to customize and deploy!

**Need help?** Check the detailed documentation in:
- `components/README.md` - Component system guide
- `README.md` - Full project documentation
- `COMPONENT-STRUCTURE.md` - Architecture details

---

**Game On!** 🕹️✨

*Built with modular architecture for maximum maintainability*


