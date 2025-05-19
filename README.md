# Personal Portfolio Website

A clean, responsive portfolio website built with [Astro](https://astro.build/), Tailwind CSS, and JavaScript.

## Features

- 🎨 Clean and modern design
- 📱 Fully responsive layout
- 🔗 Smooth scrolling navigation
- 📊 Skills visualization
- 📂 Project showcase
- 📝 Contact form
- 🎯 Active section highlighting
- 📄 Blog section

## Technologies Used

- [Astro](https://astro.build/) - Fast static site generator
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- JavaScript - For interactive elements
- [Font Awesome](https://fontawesome.com/) - For icons
- [Google Fonts](https://fonts.google.com/) - For typography (Inter)

## Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/victorjosefcaro/web-portfolio.git
   cd web-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open the local server URL (usually [http://localhost:4321](http://localhost:4321)) in your browser.

## Project Structure

```
victorjosefcaro.github.io/
├── public/            # Static assets
│   └── images/
├── src/               # Source code
│   ├── components/    # Reusable UI components
│   │   ├── BlogPostCard.astro
│   │   ├── PortfolioCard.astro
│   │   └── SkillTag.astro
│   ├── data/          # Data files
│   ├── layouts/       # Page layouts
│   │   └── MainLayout.astro
│   ├── pages/         # Page components
│   │   ├── index.astro  # Home page
│   │   ├── api/       # API endpoints
│   │   └── blog/      # Blog pages
│   └── styles/        # Global styles
├── .astro/            # Astro build files
├── package.json       # Project dependencies
├── astro.config.mjs   # Astro configuration
├── tailwind.config.js # Tailwind configuration
└── README.md          # Project documentation
```
