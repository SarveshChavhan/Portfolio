export const portfolioData = {
  name: "Sarvesh Chavhan",
  title: "Full Stack Developer & AI Enthusiast",
  tagline: "Building beautiful, scalable web experiences with modern technologies",
  email: "your.email@example.com",
  phone: "+1 (XXX) XXX-XXXX",
  location: "City, Country",
  about: `I'm a passionate Information Technology graduate with a strong foundation in web development, 
  machine learning, and modern web technologies. I love building intuitive user experiences and solving complex problems 
  with code. I'm constantly learning and exploring new technologies to stay ahead in this fast-paced tech world.`,
  
  skills: {
    frontend: ["React", "Tailwind CSS", "Next.js", "Vite", "HTML/CSS"],
    backend: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "REST APIs"],
    mobile: ["React Native", "Firebase"],
    aiml: ["Python", "TensorFlow", "Pandas", "Scikit-learn", "Data Analysis"],
    tools: ["Git", "Docker", "VS Code", "Figma", "Postman", "Linux"],
  },

  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with product management, user authentication, and payment integration.",
      longDescription: "Built a complete e-commerce solution featuring:",
      details: [
        "User authentication with JWT",
        "Product catalog with filtering and search",
        "Shopping cart and checkout process",
        "Payment gateway integration (Stripe)",
        "Admin dashboard for inventory management"
      ],
      stack: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://via.placeholder.com/400x250?text=E-Commerce",
      liveLink: "https://example.com",
      githubLink: "https://github.com",
      featured: true,
    },
    {
      id: 2,
      title: "AI Chat Bot",
      description: "An intelligent chatbot powered by NLP that can handle customer queries and provide smart responses.",
      longDescription: "Created an AI chatbot with:",
      details: [
        "Natural Language Processing for intent recognition",
        "Machine Learning model training",
        "Real-time response generation",
        "Integration with web interface",
        "Sentiment analysis capabilities"
      ],
      stack: ["Python", "TensorFlow", "Flask", "React"],
      image: "https://via.placeholder.com/400x250?text=AI+Chatbot",
      liveLink: "https://example.com",
      githubLink: "https://github.com",
      featured: true,
    },
    {
      id: 3,
      title: "Real-time Notification System",
      description: "A scalable notification service with WebSocket support and database persistence.",
      longDescription: "Built a real-time notification system with:",
      details: [
        "WebSocket implementation for live updates",
        "Database event streaming",
        "User preference management",
        "Email and SMS integration",
        "Analytics dashboard"
      ],
      stack: ["Node.js", "WebSocket", "Redis", "PostgreSQL"],
      image: "https://via.placeholder.com/400x250?text=Notifications",
      liveLink: "https://example.com",
      githubLink: "https://github.com",
      featured: false,
    },
    {
      id: 4,
      title: "Movie Recommendation System",
      description: "ML-based recommendation engine using collaborative filtering and content-based algorithms.",
      longDescription: "Implemented a recommendation system with:",
      details: [
        "Collaborative filtering algorithm",
        "Content-based recommendation engine",
        "User preference analysis",
        "Movie rating prediction",
        "REST API backend"
      ],
      stack: ["Python", "Scikit-learn", "Flask", "React"],
      image: "https://via.placeholder.com/400x250?text=Recommendations",
      liveLink: "https://example.com",
      githubLink: "https://github.com",
      featured: false,
    },
  ],

  experience: [
    {
      id: 1,
      company: "Tech Startup XYZ",
      position: "Full Stack Intern",
      duration: "Jun 2024 - Dec 2024",
      description: "Developed RESTful APIs and contributed to frontend development using React and TypeScript.",
      highlights: [
        "Built 5+ REST endpoints with Node.js and Express",
        "Implemented responsive UI components",
        "Improved app performance by 40% through optimization",
        "Collaborated with 3-person team using Agile methodology"
      ],
      skills: ["React", "Node.js", "MongoDB"]
    },
    {
      id: 2,
      company: "Tech Company ABC",
      position: "Frontend Developer (Freelance)",
      duration: "Jan 2024 - May 2024",
      description: "Designed and implemented user interfaces for multiple client projects.",
      highlights: [
        "Created responsive web designs for 3 clients",
        "Achieved 95% Lighthouse performance score",
        "Implemented accessible components following WCAG guidelines",
        "Delivered projects 2 weeks ahead of schedule"
      ],
      skills: ["React", "Tailwind CSS", "TypeScript"]
    },
  ],

  education: [
    {
      id: 1,
      institution: "University Name",
      degree: "Bachelor of Technology in Information Technology",
      duration: "2021 - 2025",
      gpa: "3.8/4.0",
      highlights: [
        "Relevant Coursework: Web Development, Database Systems, AI/ML, Mobile Development",
        "Dean's List: 2022, 2023, 2024",
        "Active Member of Tech Club"
      ]
    },
    {
      id: 2,
      institution: "Online Learning Platform",
      degree: "Deep Learning Specialization",
      duration: "2023 - 2024",
      gpa: null,
      highlights: [
        "Completed all 5 courses in neural networks and deep learning",
        "Final project: Image Classification using CNNs"
      ]
    },
  ],

  achievements: [
    {
      id: 1,
      title: "Google Cloud Certified Associate",
      issuer: "Google Cloud",
      date: "2024",
      description: "Cloud Associate certification covering cloud architecture and deployment",
      icon: "award"
    },
    {
      id: 2,
      title: "Hackathon Winner",
      issuer: "TechFest 2024",
      date: "2024",
      description: "Won first prize in the Full Stack Track for an innovative e-commerce solution",
      icon: "award"
    },
    {
      id: 3,
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2023",
      description: "Foundational AWS certification for cloud services",
      icon: "award"
    },
    {
      id: 4,
      title: "Open Source Contributor",
      issuer: "GitHub",
      date: "2023 - Present",
      description: "Contributed to 5+ open-source projects with 50+ merged pull requests",
      icon: "award"
    },
  ],

  social: {
    github: "https://github.com/yourprofile",
    linkedin: "https://linkedin.com/in/yourprofile",
    twitter: "https://twitter.com/yourprofile",
    email: "your.email@example.com",
  },

  resumeUrl: "https://drive.google.com/file/d/1aOD0pvk2SKXnM7aTx1XnomeOswEVIV4n/view?usp=sharing",
};

export const navigationItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];
