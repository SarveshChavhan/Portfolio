import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const Experience = () => {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
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
              Experience & <span className="text-green-500">Internships</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              My professional journey and roles
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="space-y-8">
            {portfolioData.experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className="relative"
              >
                {/* Timeline Line */}
                {index !== portfolioData.experience.length - 1 && (
                  <div className="absolute left-8 top-20 w-1 h-24 bg-gradient-to-b from-blue-500 to-purple-600 md:left-12"></div>
                )}

                {/* Card */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="grid md:grid-cols-12 gap-6 items-start"
                >
                  {/* Timeline Dot */}
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="md:col-span-1 flex justify-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg flex items-center justify-center text-white">
                      <Briefcase size={24} />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="md:col-span-11 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {exp.position}
                        </h3>
                        <p className="text-blue-500 font-semibold">{exp.company}</p>
                      </div>
                      <span className="text-gray-600 dark:text-gray-400 font-semibold whitespace-nowrap">
                        {exp.duration}
                      </span>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900 dark:text-white">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-start space-x-3 text-gray-600 dark:text-gray-400"
                          >
                            <span className="text-blue-500 font-bold mt-1">✓</span>
                            <span>{highlight}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.skills.map((skill, idx) => (
                        <motion.span
                          key={idx}
                          whileHover={{ scale: 1.1 }}
                          className="px-3 py-1 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 rounded-full text-xs font-semibold cursor-pointer"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
