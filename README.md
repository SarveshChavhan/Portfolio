# Modern Portfolio Website

A clean, modern, responsive personal portfolio website built with React, Vite, Tailwind CSS, and Framer Motion. Perfect for students, developers, and professionals looking to showcase their work and skills.

## Features

✨ **Modern & Responsive Design**
- Fully responsive layout (mobile, tablet, desktop)
- Clean, minimalist UI suitable for recruiters
- Smooth animations with Framer Motion
- Beautiful gradient accents and hover effects

🌓 **Dark/Light Mode**
- Toggle between dark and light themes
- User preference is saved to localStorage
- Respects system preference on first visit

⚡ **Performance Optimized**
- Built with Vite for fast development and production builds
- Optimized images and lazy loading
- Smooth scrolling navigation
- Minimal bundle size

📱 **Fully Featured**
- **Hero Section** - Eye-catching introduction with CTA buttons
- **About Me** - Personal introduction and main interests
- **Skills** - Organized by categories with expertise levels
- **Projects** - Featured and other projects with live demos and GitHub links
- **Experience** - Timeline view of internships and work experience
- **Education** - Academic background and certifications
- **Achievements** - Awards, certifications, and milestones
- **Contact** - Contact form, email, phone, and social links
- **Navbar** - Fixed navigation with smooth scrolling and resume download
- **Footer** - Quick links, social links, and back-to-top button

## Tech Stack

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 3.4
- **Animations**: Framer Motion 10
- **Icons**: Lucide React
- **Forms**: HTML5

## Getting Started

### Prerequisites

- Node.js 16+ and npm (or yarn/pnpm)
- Git

### Installation

1. **Clone or navigate to the project directory:**
```bash
cd Portfolio
```

2. **Install dependencies:**
```bash
npm install
```

This will install:
- React and React DOM
- Vite and build tools
- Tailwind CSS and PostCSS
- Framer Motion for animations
- Lucide React for icons

### Running Locally

**Start the development server:**
```bash
npm run dev
```

This will start the Vite dev server, usually at `http://localhost:5173`. The page will auto-reload on file changes.

**Build for production:**
```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

**Preview production build locally:**
```bash
npm run preview
```

## Project Structure

```
Portfolio/
├── src/
│   ├── components/          # React components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── Education.tsx
│   │   ├── Achievements.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   └── index.ts         # Barrel export
│   ├── hooks/
│   │   └── useDarkMode.ts  # Dark mode toggle hook
│   ├── data/
│   │   └── portfolio.ts     # Portfolio content & data
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── style.css            # Global Tailwind imports
├── public/                  # Static assets
│   └── resume.pdf          # Your resume (placeholder)
├── package.json
├── tailwind.config.js       # Tailwind configuration
├── postcss.config.js        # PostCSS configuration
├── tsconfig.json
├── vite.config.ts
└── index.html
```

## Customization Guide

### 1. Update Personal Information

Edit `src/data/portfolio.ts` and update all placeholder content:

```typescript
export const portfolioData = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  // ... update all sections
}
```

**Fields to update:**
- `name` - Your full name
- `title` - Your professional title
- `tagline` - Short description
- `email`, `phone`, `location` - Contact information
- `about` - About section text
- `skills` - Organize by category
- `projects` - Your portfolio projects
- `experience` - Work experience and internships
- `education` - Schools and degrees
- `achievements` - Awards and certifications
- `social` - Links to GitHub, LinkedIn, Twitter
- `resumeUrl` - Path to your resume PDF

### 2. Update Navigation

Update `navigationItems` in `src/data/portfolio.ts` to customize navbar links.

### 3. Add Your Resume

1. Place your resume PDF in the `public/` folder
2. Update `resumeUrl` in `src/data/portfolio.ts`:
```typescript
resumeUrl: "/your-resume.pdf"
```

### 4. Add Project Images

Replace placeholder images in the projects data:
```typescript
image: "https://your-image-url.com/image.jpg"
```

### 5. Customize Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      'primary': '#3B82F6',      // Blue
      'secondary': '#8B5CF6',    // Purple
      'accent': '#EC4899',       // Pink
    },
  },
}
```

### 6. Modify Animations

Framer Motion animations are configurable in each component. Adjust:
- `duration` - Animation speed (in seconds)
- `delay` - When animation starts
- `repeat` - Loop settings
- `transition` effects

Example:
```typescript
animate={{ y: [0, -20, 0] }}
transition={{
  duration: 4,
  repeat: Infinity,
  ease: 'easeInOut',
}}
```

## Editing Sections

### Hero Section
- Edit text and CTA buttons in `src/components/Hero.tsx`
- Update social links in the component
- Modify animated background shapes

### About Section
- Update about text and interests in `portfolio.ts`
- Customize statistics cards
- Modify animation effects

### Skills Section
- Add/remove/reorder skill categories in `portfolio.ts`
- Update skill names and colors
- Adjust expertise levels

### Projects Section
- Add projects to `src/data/portfolio.ts`
- Set `featured: true` for featured projects
- Update live links and GitHub URLs
- Add project images and descriptions

### Experience Section
- Update work experience details in `portfolio.ts`
- Add highlights and key achievements
- Adjust timeline styling

### Education Section
- Add education entries with GPA and highlights
- Update institution names and dates
- Customize colors and styling

### Achievements Section
- Add certifications and awards
- Update issuer names and dates
- Customize badge styling

### Contact Section
- Update contact information
- Test the contact form (currently logs to console)
- Connect to email service for form submissions

### Footer
- Customize quick links
- Update copyright year (auto-updates)
- Modify social links

## Deploying to Production

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will auto-build and deploy
4. Configure custom domain in Vercel dashboard

### Deploy to Netlify

1. Run `npm run build` locally
2. Drag and drop the `dist/` folder to Netlify
3. Or connect your GitHub repo for auto-deploys

### Deploy to Other Platforms

The project builds to a standard static site in the `dist/` folder:

```bash
npm run build
# Deploy dist/ folder to your hosting
```

Works with:
- GitHub Pages
- GitLab Pages
- AWS S3 + CloudFront
- Firebase Hosting
- Any static hosting service

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile browsers supported

## Performance Tips

1. **Optimize Images**: Use WebP format and compress images
2. **Lazy Loading**: Images load as you scroll
3. **Code Splitting**: Vite handles this automatically
4. **Caching**: Long-term caching of static assets

## SEO Optimization

The site is built with SEO best practices:
- Semantic HTML structure
- Meta tags (customize in `index.html`)
- Open Graph support
- Mobile-friendly responsive design
- Fast loading times

**To improve SEO:**
1. Update meta tags in `index.html`
2. Add meta descriptions
3. Add Open Graph images
4. Submit sitemap to Google Search Console
5. Add structured data (JSON-LD)

## Accessibility

The site follows WCAG guidelines:
- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- Color contrast compliance
- Focus indicators

## Troubleshooting

### Port Already in Use
```bash
npm run dev -- --port 3000
```

### Dependencies Not Installing
```bash
rm -rf node_modules package-lock.json
npm install
```

### Dark Mode Not Working
Check browser localStorage and console for errors

### Animations Lagging
- Reduce animation complexity
- Use `will-change` CSS property
- Disable animations on low-end devices

### Build Fails
```bash
npm run build -- --debug
```

## License

This project is open source and available for personal use.

## Support

For issues or questions:
1. Check the troubleshooting section
2. Review the component source code
3. Check Tailwind CSS docs: https://tailwindcss.com
4. Check Framer Motion docs: https://www.framer.com/motion

## Next Steps

1. ✅ Customize `src/data/portfolio.ts` with your information
2. ✅ Add your projects and experience
3. ✅ Update social links
4. ✅ Add your resume PDF to `public/`
5. ✅ Test on multiple devices
6. ✅ Deploy to your preferred hosting
7. ✅ Set up custom domain
8. ✅ Monitor analytics

## Credits

Built with:
- [React](https://react.dev)
- [Vite](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [Lucide Icons](https://lucide.dev)

---

**Happy coding! 🚀**
