# 🎨 Arcadium Visual Design Guide

## 🌈 Color Palette

### Primary Colors
```
🔴 Neon Pink      #FF006E    RGB(255, 0, 110)
🔵 Electric Cyan  #00F5FF    RGB(0, 245, 255)
🟣 Deep Purple    #8B00FF    RGB(139, 0, 255)
🟠 Neon Orange    #FF6B00    RGB(255, 107, 0)
```

### Accent Colors
```
🟡 Neon Yellow    #FFD600    RGB(255, 214, 0)
🟢 Neon Green     #00FF41    RGB(0, 255, 65)
```

### Background Colors
```
⚫ Dark Navy      #0A0E27    RGB(10, 14, 39)
⚫ Black          #000000    RGB(0, 0, 0)
```

### Usage Guide
- **Pink**: Primary CTAs, headings, important elements
- **Cyan**: Secondary CTAs, links, highlights
- **Purple**: Accents, borders, special elements
- **Orange**: Tertiary accents, warnings
- **Yellow**: Stars, ratings, special badges
- **Green**: Success states, WhatsApp button
- **Navy**: Main background
- **Black**: Section backgrounds, overlays

## 🎭 Visual Effects

### Neon Glow
```css
/* Pink Glow */
box-shadow: 0 0 20px #FF006E, 0 0 40px #FF006E;

/* Cyan Glow */
box-shadow: 0 0 20px #00F5FF, 0 0 40px #00F5FF;

/* Purple Glow */
box-shadow: 0 0 20px #8B00FF, 0 0 40px #8B00FF;
```

### Glass Morphism
```css
background: rgba(10, 14, 39, 0.7);
backdrop-filter: blur(10px);
border: 1px solid rgba(255, 255, 255, 0.1);
```

### Grid Background
```css
background-image: 
  linear-gradient(rgba(0, 245, 255, 0.1) 1px, transparent 1px),
  linear-gradient(90deg, rgba(0, 245, 255, 0.1) 1px, transparent 1px);
background-size: 50px 50px;
```

## 📝 Typography

### Font Families
```
Headings:  'Orbitron', sans-serif
Body:      'Inter', sans-serif
Special:   'Press Start 2P', cursive
```

### Font Sizes (Desktop)
```
Hero Title:     96px (text-9xl)
Section Title:  60px (text-6xl)
Subsection:     36px (text-4xl)
Body Large:     24px (text-2xl)
Body:           16px (text-base)
Small:          14px (text-sm)
Tiny:           12px (text-xs)
```

### Font Weights
```
Light:     300
Regular:   400
Medium:    500
Semibold:  600
Bold:      700
Black:     900
```

## 🎯 Component Anatomy

### Hero Section
```
┌─────────────────────────────────────┐
│     [Animated Grid Background]      │
│                                     │
│          ARCADIUM (96px)            │
│            🎮 Icon                  │
│                                     │
│      Level Up Your Event (48px)     │
│                                     │
│   Mobile Arcade Game Rentals...    │
│   ✨ Serving San Antonio ✨        │
│                                     │
│  [Build Arcade] [Browse Games]     │
│                                     │
│  [50+]  [500+]  [5★]  [100%]       │
│  Games  Events  Rating  Fun        │
│                                     │
│         Scroll to Explore ↓         │
└─────────────────────────────────────┘
```

### Game Card
```
┌──────────────────────┐
│   [Game Image]       │ ← 192px height
│   [POPULAR Badge]    │
├──────────────────────┤
│ Game Name            │ ← Bold, 20px
│ Description...       │ ← Gray, 14px
│                      │
│ 👥 1-2 Players       │
│ 📦 2ft x 3ft         │
│                      │
│ [Tag1] [Tag2]        │
│                      │
│ [Add to Event]       │ ← Button
└──────────────────────┘
```

### Package Card
```
┌──────────────────────────┐
│    RECOMMENDED           │ ← Badge (if applicable)
├──────────────────────────┤
│  Premium Experience      │ ← Title (36px)
│  Starting at $899        │ ← Price (48px)
│                          │
│  ⚡ 6-8 games            │
│  ⚡ 5 hours              │
│  👥 Up to 75             │
│                          │
│  ✓ Feature 1             │
│  ✓ Feature 2             │
│  ✓ Feature 3             │
│                          │
│  [Get Quote]             │ ← CTA Button
└──────────────────────────┘
```

### Contact Form
```
┌─────────────────────────────────┐
│  Request a Quote                │
│                                 │
│  Name *                         │
│  [________________]             │
│                                 │
│  Email *          Phone *       │
│  [_______]        [_______]     │
│                                 │
│  Event Date *     Type          │
│  [_______]        [▼_____]      │
│                                 │
│  Expected Guests                │
│  [________________]             │
│                                 │
│  Tell us about your event *     │
│  [________________________]     │
│  [________________________]     │
│  [________________________]     │
│                                 │
│  [✉ Request Quote]              │
└─────────────────────────────────┘
```

## 🎬 Animation Patterns

### Fade In Up
```
Initial: opacity: 0, y: 50
Animate: opacity: 1, y: 0
Duration: 0.6s
```

### Scale In
```
Initial: scale: 0.8, opacity: 0
Animate: scale: 1, opacity: 1
Duration: 0.5s
```

### Slide In (Left/Right)
```
Initial: opacity: 0, x: ±50
Animate: opacity: 1, x: 0
Duration: 0.6s
```

### Glow Pulse
```
Keyframes:
  0%, 100%: filter: drop-shadow(0 0 10px)
  50%:      filter: drop-shadow(0 0 20px)
Duration: 2s infinite
```

### Float
```
Keyframes:
  0%, 100%: translateY(0)
  50%:      translateY(-10px)
Duration: 3s infinite
```

## 📐 Spacing System

### Padding/Margin Scale
```
xs:   4px    (p-1)
sm:   8px    (p-2)
md:   16px   (p-4)
lg:   24px   (p-6)
xl:   32px   (p-8)
2xl:  48px   (p-12)
3xl:  64px   (p-16)
4xl:  80px   (p-20)
```

### Section Spacing
```
Section Padding (Y):  80px (py-20)
Section Padding (X):  16-32px (px-4 to px-8)
Container Max Width:  1280px (max-w-7xl)
```

## 🎨 Button Styles

### Primary Button
```
Background:  #FF006E (Neon Pink)
Text:        White
Padding:     24px 32px
Border:      None
Hover:       Scale 1.05 + Pink Glow
```

### Secondary Button
```
Background:  #00F5FF (Cyan)
Text:        Dark Navy
Padding:     24px 32px
Border:      None
Hover:       Scale 1.05 + Cyan Glow
```

### Outline Button
```
Background:  Transparent
Text:        Neon Pink
Padding:     24px 32px
Border:      2px solid Neon Pink
Hover:       Fill Pink + White Text
```

## 🖼️ Image Guidelines

### Recommended Sizes
```
Game Images:       400x300px (4:3 ratio)
Gallery Images:    800x600px (4:3 ratio)
Testimonial:       200x200px (1:1 ratio)
OG Image:          1200x630px (1.91:1 ratio)
```

### Format Recommendations
```
Photos:      WebP (with JPG fallback)
Icons:       SVG
Logos:       SVG or PNG (transparent)
```

### Optimization
```
Max File Size:  200KB per image
Compression:    70-80% quality
Lazy Load:      Yes (below fold)
```

## 📱 Responsive Breakpoints

```
Mobile:        < 640px   (sm)
Tablet:        640-1024px (md-lg)
Desktop:       1024-1280px (lg-xl)
Large Desktop: > 1280px (xl-2xl)
```

### Layout Changes
```
Mobile:
  - Single column
  - Stacked navigation
  - Larger touch targets
  - Simplified animations

Tablet:
  - 2 columns
  - Horizontal navigation
  - Medium spacing

Desktop:
  - 3-4 columns
  - Full navigation
  - All animations
  - Larger spacing
```

## 🎯 Visual Hierarchy

### Level 1 (Most Important)
- Hero title (ARCADIUM)
- Primary CTAs
- Section titles

### Level 2 (Important)
- Subsection titles
- Secondary CTAs
- Featured content

### Level 3 (Supporting)
- Body text
- Descriptions
- Supporting info

### Level 4 (Least Important)
- Labels
- Metadata
- Fine print

## 🌟 Special Effects

### Particle Animation
```
Count:      20 particles
Size:       8px (w-2 h-2)
Color:      Cyan
Animation:  Float up/down
Duration:   3-5s (random)
Opacity:    0.2-0.8 (animated)
```

### Scroll Indicator
```
Icon:       ChevronDown
Size:       32px
Color:      Cyan → Pink (hover)
Animation:  Bounce (y: 0 → 10px → 0)
Duration:   1.5s infinite
```

### Loading Screen
```
Logo:       ARCADIUM (96px)
Progress:   Bar (320px width)
Spinner:    Rotating circle
Colors:     Pink → Cyan gradient
Duration:   ~1s (simulated)
```

## 🎨 Design Principles

1. **Contrast**: Dark backgrounds + bright neon colors
2. **Hierarchy**: Clear visual levels
3. **Spacing**: Generous white space
4. **Consistency**: Repeated patterns
5. **Motion**: Purposeful animations
6. **Accessibility**: WCAG AA compliant
7. **Performance**: Fast loading
8. **Responsive**: Mobile-first

## 💡 Design Tips

### Do's ✅
- Use neon colors for emphasis
- Add glow effects to important elements
- Maintain consistent spacing
- Use animations purposefully
- Keep text readable
- Test on mobile devices

### Don'ts ❌
- Don't overuse animations
- Don't use too many colors at once
- Don't make text too small
- Don't forget mobile users
- Don't sacrifice performance
- Don't ignore accessibility

---

**This visual guide ensures consistency across your Arcadium brand! 🎨✨**

