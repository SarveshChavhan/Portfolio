import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

export const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const interests = [
    { icon: '💻', label: 'Web Development' },
    { icon: '�', label: 'Full Stack Development' },
    { icon: '🤖', label: 'AI/ML' },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              About <span className="text-blue-500">Me</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Get to know more about my background and what drives me
            </p>
          </motion.div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Text */}
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                {portfolioData.about}
              </p>

              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                Currently, I'm pursuing my passion for creating impactful digital solutions. 
                With a strong foundation in full-stack development and growing expertise in AI/ML, 
                I'm excited about building intelligent applications that solve real-world problems.
              </p>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Main Interests</h3>
                <div className="flex flex-wrap gap-4">
                  {interests.map((interest, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-700 dark:text-blue-300 font-semibold flex items-center space-x-2"
                    >
                      <span className="text-2xl">{interest.icon}</span>
                      <span>{interest.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                {[
                  { label: 'Projects', value: '10+' },
                  { label: 'Experience', value: '2+ yrs' },
                  { label: 'Tech Stack', value: '15+' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg text-center"
                  >
                    <p className="text-2xl font-bold text-blue-500">{stat.value}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right - Visual */}
            <motion.div
              variants={itemVariants}
              className="hidden md:flex items-center justify-center"
            >
              <div className="relative w-full max-w-sm">
                {/* Animated background shapes */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg opacity-20 blur-xl"
                ></motion.div>

                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-600 rounded-lg opacity-20 blur-xl"
                ></motion.div>

                <div className="relative p-8 bg-white dark:bg-gray-700 rounded-lg shadow-2xl space-y-6">
                  <div className="space-y-4">
                    <h4 className="font-bold text-gray-900 dark:text-white">Focus Areas</h4>
                    {['Full-Stack Development', 'Mobile Development', 'AI/ML Applications'].map(
                      (area, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: idx * 0.3 }}
                            className="w-3 h-3 rounded-full bg-blue-500"
                          ></motion.div>
                          <span className="text-gray-700 dark:text-gray-300">{area}</span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
