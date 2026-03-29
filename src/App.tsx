import { useEffect } from 'react';
import {
  Navbar,
  Hero,
  About,
  Skills,
  Projects,
  Experience,
  Education,
  Achievements,
  Contact,
  Footer,
} from './components';
import { useDarkMode } from './hooks/useDarkMode';
import './style.css';

function App() {
  const { isDark, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        {/* Navigation */}
        <Navbar isDark={isDark} onToggleDark={toggleDarkMode} />

        {/* Main Content */}
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Achievements />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
