import { useState } from 'react';
import { Menu, X, Moon, Sun, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { navigationItems, portfolioData } from '../data/portfolio';

interface NavbarProps {
  isDark: boolean;
  onToggleDark: () => void;
}

export const Navbar = ({ isDark, onToggleDark }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const downloadResume = () => {
    window.open(portfolioData.resumeUrl, '_blank');
  };

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow-lg z-50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex-shrink-0"
          >
            <button
              onClick={() => scrollToSection('home')}
              className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              Portfolio
            </button>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.05 }}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors font-medium"
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* Right Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={downloadResume}
              className="hidden lg:flex items-center space-x-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
            >
              <Download size={18} />
              <span>Resume</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={onToggleDark}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-yellow-400 transition-colors"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={onToggleDark}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-yellow-400"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={downloadResume}
              className="w-full mt-4 flex items-center justify-center space-x-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
            >
              <Download size={18} />
              <span>Download Resume</span>
            </button>
          </div>
        </motion.div>
      </div>
    </nav>
  );
};
