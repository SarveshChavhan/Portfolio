import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

export const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  const skillCategories = [
    { title: 'Frontend', skills: portfolioData.skills.frontend, color: 'bg-blue-100 dark:bg-blue-900' },
    { title: 'Backend', skills: portfolioData.skills.backend, color: 'bg-purple-100 dark:bg-purple-900' },
    { title: 'Mobile', skills: portfolioData.skills.mobile, color: 'bg-pink-100 dark:bg-pink-900' },
    { title: 'AI/ML', skills: portfolioData.skills.aiml, color: 'bg-green-100 dark:bg-green-900' },
    { title: 'Tools & DevOps', skills: portfolioData.skills.tools, color: 'bg-orange-100 dark:bg-orange-900' },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
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
              My <span className="text-purple-500">Skills</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Technologies and tools I work with
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                className="space-y-4"
              >
                {/* Category Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>

                {/* Skills */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      whileHover={{ x: 10 }}
                      className={`p-3 rounded-lg ${category.color} transition-all duration-300 cursor-pointer`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-gray-900 dark:text-white">
                          {skill}
                        </span>
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: skillIndex * 0.1 }}
                          className="w-2 h-2 rounded-full bg-current opacity-50"
                        ></motion.div>
                      </div>
                      {/* Animated progress bar */}
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.05 }}
                        className="h-1 mt-2 bg-current opacity-30 rounded-full"
                      ></motion.div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Expertise Level */}
          <motion.div
            variants={itemVariants}
            className="mt-12 p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Expertise Breakdown
            </h3>
            <div className="space-y-6">
              {[
                { label: 'Web Development', level: 90 },
                { label: 'Backend Development', level: 75 },
                { label: 'AI/ML', level: 65 },
              ].map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {item.label}
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {item.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
