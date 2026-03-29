# 🎨 Quick Customization Guide

This guide will walk you through customizing your portfolio in 15 minutes.

## Step 1: Update Your Personal Info (2 min)

Open `src/data/portfolio.ts` and update:

```typescript
export const portfolioData = {
  name: "John Doe",  // ← Change this
  title: "Full Stack Developer",  // ← Change this
  tagline: "Building beautiful web experiences",  // ← Change this
  email: "john@example.com",  // ← Change this
  phone: "+1 (555) 123-4567",  // ← Change this
  location: "San Francisco, CA",  // ← Change this
  about: "I'm a passionate developer...",  // ← Change this
  // Continue with other fields
}
```

## Step 2: Update Your Photo/Avatar (1 min)

The placeholder uses gradient backgrounds. To add a real photo:

1. In `Hero.tsx`, replace the gradient background with an image:

```typescript
// Find this in Hero.tsx:
<div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg opacity-20 blur-3xl"></div>

// Replace with:
<img src="/your-photo.jpg" alt="Profile" className="w-full h-full rounded-lg object-cover" />
```

2. Add your photo to the `public/` folder

## Step 3: Add Your Projects (3 min)

In `src/data/portfolio.ts`, update the `projects` array:

```typescript
projects: [
  {
    id: 1,
    title: "My Cool Project",  // ← Your project title
    description: "A brief description",  // ← What it does
    longDescription: "Full details about the project",
    details: [  // ← Key features
      "Feature 1",
      "Feature 2",
    ],
    stack: ["React", "TypeScript", "Tailwind"],  // ← Technologies used
    image: "https://example.com/image.jpg",  // ← Project screenshot
    liveLink: "https://myproject.com",  // ← Live demo URL
    githubLink: "https://github.com/myusername/project",  // ← GitHub repo
    featured: true,  // ← Set to true for featured section
  },
]
```

**Tips:**
- Mark 2-3 best projects as `featured: true`
- Use real project links or use your GitHub profile
- Add actual screenshots of your projects

## Step 4: Update Your Skills (2 min)

In `src/data/portfolio.ts`, organize your skills:

```typescript
skills: {
  frontend: ["React", "TypeScript", "Tailwind CSS", "Next.js"],  // ← Your skills
  backend: ["Node.js", "Express", "PostgreSQL"],  // ← Your skills
  mobile: ["React Native", "Kotlin"],  // ← Your skills
  aiml: ["Python", "TensorFlow"],  // ← Your skills
  tools: ["Git", "Docker", "VS Code"],  // ← Your skills
}
```

## Step 5: Add Your Experience (2 min)

Update the `experience` array:

```typescript
experience: [
  {
    id: 1,
    company: "Tech Company XYZ",  // ← Company name
    position: "Junior Developer",  // ← Your position
    duration: "Jun 2024 - Dec 2024",  // ← Dates
    description: "Brief description of your role",
    highlights: [  // ← Key achievements
      "Built feature XYZ",
      "Improved performance by 40%",
    ],
    skills: ["React", "Node.js"],  // ← Technologies used
  },
]
```

## Step 6: Add Your Education (1 min)

Update the `education` array:

```typescript
education: [
  {
    id: 1,
    institution: "University Name",  // ← Your university
    degree: "Bachelor of Technology",  // ← Your degree
    duration: "2021 - 2025",  // ← Graduation year
    gpa: "3.8/4.0",  // ← Your GPA (optional)
    highlights: [
      "Dean's List",
      "Relevant courses: Web Dev, AI/ML",
    ],
  },
]
```

## Step 7: Add Your Achievements (1 min)

Update the `achievements` array:

```typescript
achievements: [
  {
    id: 1,
    title: "AWS Certified",  // ← Certification name
    issuer: "Amazon Web Services",  // ← Who issued it
    date: "2024",  // ← Year earned
    description: "Earned AWS Solutions Architect certification",
    icon: "award",
  },
]
```

## Step 8: Update Social Links (1 min)

In `src/data/portfolio.ts`:

```typescript
social: {
  github: "https://github.com/yourprofile",  // ← Your GitHub
  linkedin: "https://linkedin.com/in/yourprofile",  // ← Your LinkedIn
  twitter: "https://twitter.com/yourprofile",  // ← Your Twitter
  email: "your.email@example.com",  // ← Your email
}
```

## Step 9: Add Your Resume (1 min)

1. Create your resume as a PDF
2. Place it in the `public/` folder (e.g., `public/resume.pdf`)
3. Update in `src/data/portfolio.ts`:

```typescript
resumeUrl: "/resume.pdf"  // ← Change this path
```

## Step 10: Customize Colors (Optional)

Edit `tailwind.config.js` to change the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      'primary': '#3B82F6',  // Blue
      'secondary': '#8B5CF6',  // Purple
      'accent': '#EC4899',  // Pink
    },
  },
}
```

Replace with your brand colors!

## Step 11: Test Everything

```bash
npm run dev
```

- [ ] Hero section looks good
- [ ] Dark mode toggle works
- [ ] Navigation scrolls smoothly
- [ ] Project cards display correctly
- [ ] Contact form works
- [ ] Mobile responsive?
- [ ] All links working?

## Step 12: Deploy! 🚀

Choose one option:

### Option A: Vercel (Easiest)
1. Push to GitHub
2. Go to vercel.com
3. Connect your GitHub repo
4. Done! Auto-deploys on push

### Option B: Netlify
1. Run `npm run build`
2. Go to netlify.com
3. Drag and drop the `dist/` folder
4. Done!

### Option C: Manual
```bash
npm run build
# Upload dist/ folder to any web host
```

## Common Customizations

### Change Navigation Items
In `src/data/portfolio.ts`:
```typescript
export const navigationItems = [
  { id: "home", label: "Home" },  // Section IDs match component id attributes
  { id: "about", label: "About" },
  // Add your custom sections
];
```

### Hide Sections
Comment out sections in `App.tsx`:
```typescript
<Hero />
{/* <About /> */}  {/* ← This section won't show */}
```

### Customize Hero Section Text
Edit `src/components/Hero.tsx` directly

### Add Custom Section
1. Create new component in `src/components/MySection.tsx`
2. Export from `src/components/index.ts`
3. Import and use in `App.tsx`

### Change Font
Update in index.html `<link>` tag and `tailwind.config.js`

### Add Bootstrap Section
Copy an existing section component and modify

## Troubleshooting

### Changes Not Showing?
```bash
# Hard refresh
Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

# Or clear npm cache
npm cache clean --force
npm install
```

### Port 5173 Already in Use?
```bash
npm run dev -- --port 3000
```

### Build Errors?
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

## Need More Help?

1. **Styling Questions** → Check [Tailwind Docs](https://tailwindcss.com)
2. **Animation Questions** → Check [Framer Motion Docs](https://www.framer.com/motion)
3. **React Questions** → Check [React Docs](https://react.dev)
4. **Icon Questions** → Check [Lucide Icons](https://lucide.dev)

---

**That's it! Your portfolio is ready to impress recruiters. 🎉**
