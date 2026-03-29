import { motion, type Variants } from 'framer-motion';
import { ArrowRight, GitBranch, Briefcase, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import profileImg from '../images/20241225_143606.jpg';

export const Hero = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 pt-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center transition-colors duration-300">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <div className="space-y-6">
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.div
                variants={itemVariants}
                className="inline-block"
              >
                <span className="px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-sm font-semibold">
                  👋 Welcome to my portfolio
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  {portfolioData.name}
                </span>
              </h1>

              <p className="text-2xl text-gray-600 dark:text-gray-300 font-semibold">
                {portfolioData.title}
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                {portfolioData.about}
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToProjects}
                className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold flex items-center space-x-2 transition-colors"
              >
                <span>View My Work</span>
                <ArrowRight size={20} />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`mailto:${portfolioData.email}`}
                className="px-8 py-3 border-2 border-blue-500 text-blue-500 dark:border-blue-400 dark:text-blue-400 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
              >
                Get In Touch
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex space-x-4 pt-4">
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                href={portfolioData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-200 dark:bg-gray-800 rounded-lg text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                <GitBranch size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                href={portfolioData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-200 dark:bg-gray-800 rounded-lg text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                <Briefcase size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                href={`mailto:${portfolioData.email}`}
                className="p-3 bg-gray-200 dark:bg-gray-800 rounded-lg text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                <Mail size={24} />
              </motion.a>
            </motion.div>
          </div>

          {/* Right Side - Illustration */}
          <motion.div
            variants={itemVariants}
            className="hidden md:flex items-center justify-center"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative w-full h-96"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg opacity-10 blur-3xl"></div>
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  src={profileImg}
                  alt="Profile"
                  className="w-64 h-64 rounded-lg shadow-2xl object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center mt-12"
        >
          <div className="w-6 h-10 rounded-full border-2 border-gray-400 dark:border-gray-600 flex items-start justify-center p-2">
            <motion.div className="w-1 h-2 bg-gray-400 dark:bg-gray-600 rounded-full"></motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
