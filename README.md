# 🚀 Rakibul Islam - Portfolio

A modern, interactive personal portfolio website showcasing professional work,
technical skills, and completed projects. Built with React, Tailwind CSS, and
advanced animations to create an engaging user experience.

**Live Site:** [View Portfolio](https://programmer-rakibul.netlify.app)

---

## 🎯 Overview

This is a **production-ready single-page application (SPA)** that serves as a
professional portfolio and project showcase. It features:

- **Interactive Navigation** with smooth scrolling and section tracking
- **Dynamic Project Gallery** with detailed project information pages
- **Skill Categories** organized by specialization (Frontend, Backend, Tools)
- **Contact Management** with integrated form messaging
- **Responsive Design** optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations** powered by Framer Motion and GSAP
- **Fast Performance** with Vite's optimized build process

**Developer:** Rakibul Islam  
**Location:** Rangpur City, Dhaka, Bangladesh  
**Email:** rakibul00206@gmail.com

---

## ✨ Features

### 🏠 Home Page Sections

1. **Navigation Bar**
   - Sticky header with glass-morphism effect
   - Smooth scroll navigation to all sections
   - Mobile-responsive hamburger menu
   - Active section tracking using Intersection Observer

2. **Hero Section**
   - Professional introduction with animated entrance
   - Profile image with decorative gradients
   - Experience statistics display
   - Call-to-action buttons

3. **About Section**
   - Professional profile information
   - Social media links (LinkedIn, GitHub, Facebook, X/Twitter)
   - Interactive animations with Framer Motion
   - Responsive card layout

4. **Skills Section**
   - Organized by categories:
     - **Frontend:** React, Next.js, JavaScript, HTML5, CSS3, Tailwind CSS,
       Bootstrap
     - **Backend:** Node.js, Express.js, MongoDB, Firebase
     - **Tools & Platforms:** Git, GitHub, Vercel, Netlify, Postman, Vite, NPM
   - Color-coded icons and gradient backgrounds
   - Hover effects and smooth animations

5. **Projects Section**
   - Showcase of 4 featured projects with preview cards
   - Technology stack display for each project
   - Links to live demos and GitHub repositories
   - Click-through to detailed project pages

6. **Contact Section**
   - Contact information (email, phone, location)
   - Functional contact form with validation
   - Toast notifications for feedback
   - Direct links to social profiles

### 📱 Project Details Page

- Dynamic routing with project-specific information
- Comprehensive project descriptions
- Technical implementation details
- Future improvements and feature possibilities
- Easy navigation back to portfolio

---

## 🛠 Tech Stack

### Frontend Framework & Libraries

- **React** v19.2.1 - UI library with Hooks
- **React Router** v7.10.1 - Client-side routing and navigation
- **Vite** v7.2.4 - Lightning-fast build tool
- **Tailwind CSS** v4.1.17 - Utility-first CSS framework
- **DaisyUI** v5.5.8 - Component library built on Tailwind

### Animations & UI

- **Framer Motion** v12.23.25 - React animation library
- **GSAP** v3.13.0 - Graphics and animation platform
- **PrimeReact** v10.9.7 - UI component library
- **React Icons** v5.5.0 - Icon sets (Heroicons, FontAwesome, etc.)

### Development & Quality

- **ESLint** - Code linting and style enforcement
- **React Hooks ESLint Plugin** - React best practices

---

## 🎨 Project Showcase

### 1. **Labora** - Freelance Job Platform

- **Live Demo:** https://labora-7a232.web.app/
- **GitHub:** https://github.com/programmerrakibul/labora-client.git
- **Tech Stack:** React, Tailwind CSS, Node.js, Express, MongoDB
- **Features:** Job posting system, client-freelancer matching, secure
  authentication

### 2. **KidVenture** - E-Commerce Toy Store

- **Live Demo:** https://kid-venture-119c5.web.app/
- **GitHub:** https://github.com/programmerrakibul/kid-venture.git
- **Tech Stack:** React, Tailwind CSS, Firebase
- **Features:** Product catalog, Firebase authentication, shopping cart

### 3. **CHRONOS** - Blogging Platform

- **Live Demo:** https://chronos-blog.vercel.app/
- **GitHub:** https://github.com/programmerrakibul/chronos.git
- **Tech Stack:** React, Next.js, Tailwind CSS, MongoDB
- **Features:** Server-side rendering, Content Management System, markdown
  support

### 4. **Hero.IO** - Creative Web Application

- **Live Demo:** https://hero-io-by-rakibul.netlify.app/
- **GitHub:** https://github.com/programmerrakibul/hero.io.git
- **Tech Stack:** React, Tailwind CSS, Vite
- **Features:** UI/UX focused design, smooth animations, accessibility best
  practices

---

## 🚀 Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Clone Repository

```bash
git clone https://github.com/programmerrakibul/personal-portfolio.git
cd personal-portfolio
```

### Install Dependencies

```bash
npm install
```

### Local Development

```bash
npm run dev
```

The portfolio will be available at `http://localhost:5173`

---

## 📦 Available Scripts

| Script            | Description                                                |
| ----------------- | ---------------------------------------------------------- |
| `npm run dev`     | Start development server with HMR (Hot Module Replacement) |
| `npm run build`   | Create optimized production build                          |
| `npm run preview` | Preview production build locally                           |
| `npm run lint`    | Run ESLint to check code quality                           |

---

## 📁 Project Structure

```
personal-portfolio/
├── src/
│   ├── components/
│   │   ├── About/          # About section component
│   │   ├── Button/         # Reusable button component (variants: primary, secondary, etc.)
│   │   ├── Contact/        # Contact form & info section
│   │   ├── Container/      # Responsive layout wrapper
│   │   ├── Hero/           # Hero section with intro
│   │   ├── Navbar/         # Navigation bar with scroll tracking
│   │   ├── Projects/       # Projects grid showcase
│   │   └── Skills/         # Skills by category
│   │
│   ├── routes/
│   │   └── router.jsx      # React Router configuration
│   │
│   ├── App.jsx             # Root component with router
│   ├── Home.jsx            # Main homepage displaying all sections
│   ├── Layout.jsx          # Layout wrapper with navbar
│   ├── ProjectDetails.jsx  # Dynamic project detail pages
│   ├── index.css           # Global styles & Tailwind setup
│   └── main.jsx            # React entry point
│
├── public/
│   └── _redirects          # Netlify SPA routing configuration
│
├── vite.config.js          # Vite configuration with Tailwind integration
├── eslint.config.js        # ESLint rules
├── package.json            # Dependencies and scripts
└── README.md               # This file
```

---

## 🎨 Design & Animations

### Responsive Design

- Mobile-first approach with breakpoints for tablets and desktops
- Adaptive grid layouts and typography
- Touch-friendly navigation on mobile devices

### Animation Features

- **Framer Motion:** Staggered animations, smooth scroll reveals, entrance
  effects
- **GSAP:** Advanced graphics animations and transitions
- **Tailwind CSS:** Backdrop blur effects, glass-morphism, gradient overlays
- **Hover Interactions:** Scale transforms, color transitions, smooth effects

### Visual Effects

- Interactive gradient blobs with animated pulsing
- Glass-morphism navigation header
- Smooth hover effects on project cards and buttons
- Fade-in animations on scroll detection

---

## 🌐 Deployment

### Hosted Platforms

This portfolio is optimized for deployment on:

- **Vercel** - Optimal for Next.js and React apps
- **Netlify** - Full SPA support with `_redirects` configuration
- **Firebase Hosting** - Reliable static site hosting

### Netlify Deployment Configuration

The `public/_redirects` file ensures proper SPA routing:

```
/* /index.html 200
```

All routes are redirected to `index.html`, allowing React Router to handle
client-side navigation.

### Build & Deploy Steps

**For Vercel:**

```bash
npm run build
vercel deploy
```

**For Netlify:**

```bash
npm run build
netlify deploy --prod --dir=dist
```

---

## 📱 Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🔗 Connect & Contact

- **Email:** rakibul00206@gmail.com
- **Phone:** +880 188841-9206
- **GitHub:** [@programmerrakibul](https://github.com/programmerrakibul)
- **LinkedIn:**
  [Programmer Rakibul](https://linkedin.com/in/programmer-rakibul/)
- **Location:** Rangpur City, Dhaka, Bangladesh

---

## 📄 License

This project is personal work. Feel free to use it as inspiration for your own
portfolio, but please do not directly copy or reuse without permission.

---

## 🙏 Acknowledgments

- **React & Vite** communities for excellent documentation
- **Tailwind CSS & DaisyUI** for beautiful utility-first design
- **Framer Motion & GSAP** for smooth animation capabilities
- All my clients and collaborators on the featured projects

---

**Last Updated:** March 2025  
**Current Version:** 1.0.0
