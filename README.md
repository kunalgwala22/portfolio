# 🚀 Developer Portfolio — React App

A modern, high-end developer portfolio built with React 18 + Vite.

## ✨ Features

- 🎨 Dark / Light theme toggle
- 🖱️ Custom cursor with magnetic ring
- ✨ Canvas particle animation in Hero
- ⌨️ Typing / role-cycling effect
- 📜 Scroll-reveal animations (IntersectionObserver)
- 📊 Animated skill progress bars
- 🃏 Project cards with hover effects
- 🕐 Animated experience timeline
- 📬 Contact form with loading & success states
- 📱 Fully responsive (mobile-first)
- ⬇️ Floating Resume download button

## 📁 Folder Structure

```
portfolio/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css              ← global styles & CSS variables
    └── components/
        ├── Cursor.jsx / .css
        ├── Navbar.jsx / .css
        ├── Hero.jsx   / .css
        ├── About.jsx  / .css
        ├── Skills.jsx / .css
        ├── Projects.jsx / .css
        ├── Experience.jsx / .css
        ├── Contact.jsx  / .css
        ├── Footer.jsx   / .css
        └── ResumeFloat.jsx / .css
```

## 🛠️ Setup

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build
```

## 🎨 Personalise

| What              | Where                              |
|-------------------|------------------------------------|
| Your name         | `Hero.jsx` → hero-name             |
| Roles / titles    | `Hero.jsx` → ROLES array           |
| About text        | `About.jsx`                        |
| Projects          | `Projects.jsx` → PROJECTS array    |
| Experience        | `Experience.jsx` → EXPERIENCES     |
| Contact links     | `Contact.jsx` → LINKS array        |
| Resume file       | `ResumeFloat.jsx` → onClick handler|
| Theme colours     | `index.css` → :root CSS variables  |

## 📦 Tech Stack

- **React 18** + **Vite 5**
- **CSS custom properties** (no extra CSS framework needed)
- **IntersectionObserver** for scroll animations
- **Canvas API** for particle background
- No external animation libraries required
