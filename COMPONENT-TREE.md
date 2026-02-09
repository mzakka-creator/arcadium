# 🌳 Arcadium React Component Tree

## Visual Component Hierarchy

```
App.js (Main Container)
│
├─── 🔄 Loading Screen
│    ├── Logo
│    ├── Progress Bar
│    ├── Loading Text
│    └── Spinner
│
├─── 📱 Header
│    ├── Logo
│    ├── Navigation Menu
│    │   ├── Home Link
│    │   ├── About Link
│    │   ├── Games Link
│    │   ├── Gallery Link
│    │   └── Contact Link
│    ├── Book Now Button
│    └── Mobile Menu Toggle
│         └── Mobile Menu Drawer
│
├─── 🎯 Hero
│    ├── Animated Grid Background
│    ├── Logo Large
│    ├── Title
│    ├── Subtitle
│    ├── CTA Buttons
│    │   ├── Book Your Event
│    │   └── Explore Games
│    ├── Trust Badges
│    │   ├── Fully Insured
│    │   ├── 5-Star Rated
│    │   └── Professional Setup
│    └── Scroll Indicator
│
├─── 📖 About
│    ├── Section Title
│    ├── Lead Text
│    ├── Description
│    ├── Why Choose Section
│    │   └── Feature Cards (4)
│    │       ├── Wide Game Selection
│    │       ├── Professional Setup
│    │       ├── Perfect for All Ages
│    │       └── Hassle-Free Experience
│    ├── Statistics Counter
│    │   ├── Events Delivered (500)
│    │   ├── Games Available (50)
│    │   └── Happy Guests (10,000)
│    └── Image Placeholder
│
├─── 🎮 Games
│    ├── Section Title
│    ├── Tab Navigation
│    │   ├── Retro Arcade Tab
│    │   ├── Modern Gaming Tab
│    │   ├── VR Experiences Tab
│    │   ├── Racing Simulators Tab
│    │   └── Photo Booth Tab
│    ├── Tab Content Panels
│    │   └── Game Cards (per tab)
│    │       ├── Game Icon
│    │       ├── Game Name
│    │       ├── Description
│    │       ├── Specs
│    │       └── Add to Event Button
│    └── Packages Section
│        └── Package Cards (3)
│            ├── Starter Pack
│            ├── Party Pack (Featured)
│            └── Ultimate Experience
│
├─── 🏗️ Builder
│    ├── Section Title
│    ├── Step Indicators (4)
│    │   ├── Step 1: Event Type
│    │   ├── Step 2: Select Games
│    │   ├── Step 3: Duration
│    │   └── Step 4: Review
│    └── Step Content
│        ├── Step 1: Event Type Buttons
│        │   ├── Birthday Party
│        │   ├── Corporate Event
│        │   ├── Wedding
│        │   ├── School Event
│        │   └── Other
│        ├── Step 2: Game Selector
│        │   └── Game Checkboxes (6)
│        ├── Step 3: Configuration
│        │   ├── Duration Slider
│        │   └── Guest Count Input
│        └── Step 4: Summary & Estimate
│            ├── Summary Items
│            ├── Price Estimate
│            └── Request Quote Button
│
├─── 📸 Gallery
│    ├── Section Title
│    ├── Subtitle
│    ├── Gallery Grid
│    │   └── Gallery Items (6)
│    └── Instagram CTA
│        └── Follow Button
│
├─── ⭐ Testimonials
│    ├── Section Title
│    ├── Testimonial Slider
│    │   └── Testimonial Cards (3)
│    │       ├── Star Rating
│    │       ├── Quote Text
│    │       └── Author Info
│    ├── Navigation Dots
│    └── Review Platform Link
│
├─── 📞 Contact
│    ├── Section Title
│    ├── Subtitle
│    ├── Contact Form
│    │   ├── Name Input
│    │   ├── Email Input
│    │   ├── Phone Input
│    │   ├── Event Date Input
│    │   ├── Event Type Select
│    │   ├── Guest Count Input
│    │   ├── Games Interested Input
│    │   ├── Message Textarea
│    │   └── Submit Button
│    └── Contact Direct
│        ├── Contact Methods
│        │   ├── Phone Link
│        │   ├── Email Link
│        │   └── WhatsApp Link
│        ├── Business Hours
│        └── Instagram QR
│
├─── 🦶 Footer
│    ├── Footer Content
│    │   ├── Brand Section
│    │   │   ├── Logo
│    │   │   ├── Tagline
│    │   │   └── Social Icons (4)
│    │   ├── Quick Links
│    │   ├── Services
│    │   └── Contact Info
│    ├── Footer Bottom
│    │   ├── Legal Links
│    │   └── Copyright
│    ├── WhatsApp Float Button
│    └── Back to Top Button
│
└─── 🎉 Success Modal
     ├── Thank You Message
     └── Close Button
```

## 🔄 State Flow

```
App.js (Root State)
├── showModal → Contact → Modal
├── isLoading → Loading Screen
├── scrollToSection → Header, Hero, Games, Builder
└── scrollToContact → Header, Hero, Games, Builder

Header (Local State)
├── isScrolled → Header styling
└── isMobileMenuOpen → Mobile menu visibility

About (Local State)
├── stats → Animated counters
└── hasAnimated → Animation trigger

Games (Local State)
└── activeTab → Tab content display

Builder (Local State)
├── currentStep → Step visibility
├── selectedEventType → Event selection
├── selectedGames → Game selection
├── duration → Duration value
└── guests → Guest count

Testimonials (Local State)
└── currentTestimonial → Active testimonial

Contact (Local State)
└── formData → Form field values

Footer (Local State)
└── showBackToTop → Button visibility
```

## 📦 Props Flow

```
App.js
│
├── scrollToSection ──→ Header
│                    └→ Hero
│
├── scrollToContact ──→ Header
│                    ├→ Hero
│                    ├→ Games
│                    └→ Builder
│
├── scrollToTop ──────→ Footer
│
└── showModal ────────→ Contact
```

## 🎯 Event Handlers

```
User Interactions
│
├── Click Navigation Link ──→ Header.handleNavClick()
│                          └→ App.scrollToSection()
│
├── Toggle Mobile Menu ───→ Header.toggleMobileMenu()
│
├── Switch Game Tab ──────→ Games.setActiveTab()
│
├── Select Event Type ────→ Builder.handleEventTypeSelect()
│
├── Toggle Game ──────────→ Builder.handleGameToggle()
│
├── Change Duration ──────→ Builder.setDuration()
│
├── Submit Form ──────────→ Contact.handleSubmit()
│                         └→ App.handleShowModal()
│
├── Navigate Testimonial ─→ Testimonials.setCurrentTestimonial()
│
└── Scroll Window ────────→ Header (scroll detection)
                          └→ Footer (back-to-top visibility)
```

## 🔍 Component Relationships

### Parent-Child
- **App** is parent to all sections
- Each section is self-contained
- Props flow down from App

### Sibling Communication
- Through App.js shared functions
- No direct sibling communication
- Clean separation of concerns

### State Management
- Local state in each component
- Shared functions passed as props
- No global state library needed

---

*This tree shows the complete structure of your React application!*

