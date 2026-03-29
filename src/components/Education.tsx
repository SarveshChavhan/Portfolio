import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const Education = () => {
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
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800 transition-colors duration-300">
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
              <span className="text-orange-500">Education</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              My academic background and learning journey
            </p>
          </motion.div>

          {/* Education List */}
          <div className="grid md:grid-cols-2 gap-6">
            {portfolioData.education.map((edu) => (
              <motion.div
                key={edu.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="relative bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-200 dark:border-orange-800"
              >
                {/* Icon */}
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute top-4 right-4 p-3 bg-orange-100 dark:bg-orange-900/50 rounded-lg"
                >
                  <BookOpen size={24} className="text-orange-600 dark:text-orange-300" />
                </motion.div>

                {/* Content */}
                <div className="space-y-4">
                  {/* Degree */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-orange-600 dark:text-orange-300 font-semibold">
                      {edu.institution}
                    </p>
                  </div>

                  {/* Duration and GPA */}
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                    <span className="text-gray-600 dark:text-gray-400 font-semibold">
                      {edu.duration}
                    </span>
                    {edu.gpa && (
                      <motion.span
                        whileHover={{ scale: 1.1 }}
                        className="px-4 py-2 bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300 rounded-full font-bold text-sm"
                      >
                        GPA: {edu.gpa}
                      </motion.span>
                    )}
                  </div>

                  {/* Divider */}
                  <div className="w-12 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full"></div>

                  {/* Highlights */}
                  <div className="space-y-2">
                    {edu.highlights.map((highlight, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start space-x-3 text-gray-700 dark:text-gray-300 text-sm"
                      >
                        <span className="text-orange-500 font-bold mt-1">›</span>
                        <span>{highlight}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications Note */}
          <motion.div
            variants={itemVariants}
            className="p-6 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800"
          >
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              📚 Continuous Learning
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              I believe in continuous learning and regularly take online courses and certifications to stay updated with the latest technologies and industry best practices.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
