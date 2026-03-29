import { motion } from 'framer-motion';
import { Trophy, Award, Star } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const Achievements = () => {
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  const getIcon = (achievement: typeof portfolioData.achievements[0]) => {
    switch (achievement.date.slice(0, 4)) {
      case portfolioData.achievements[0].date.slice(0, 4):
        return <Trophy size={32} className="text-yellow-500" />;
      case portfolioData.achievements[1].date.slice(0, 4):
        return <Star size={32} className="text-blue-500" />;
      default:
        return <Award size={32} className="text-purple-500" />;
    }
  };

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
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
              Achievements & <span className="text-yellow-500">Certifications</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Milestones and recognitions in my career
            </p>
          </motion.div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {portfolioData.achievements.map((achievement) => (
              <motion.div
                key={achievement.id}
                variants={itemVariants}
                whileHover={{ y: -10, rotate: 1 }}
                className="relative p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-yellow-500"
              >
                {/* Animated background */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute top-0 right-0 w-32 h-32 bg-yellow-100 dark:bg-yellow-900/20 rounded-full opacity-10 blur-2xl"
                ></motion.div>

                {/* Content */}
                <div className="relative space-y-4">
                  {/* Icon and Title */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg shadow-lg"
                      >
                        {getIcon(achievement)}
                      </motion.div>

                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {achievement.title}
                        </h3>
                        <p className="text-yellow-600 dark:text-yellow-400 font-semibold">
                          {achievement.issuer}
                        </p>
                      </div>
                    </div>

                    {/* Date Badge */}
                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/50 text-yellow-700 dark:text-yellow-300 rounded-full text-xs font-bold whitespace-nowrap ml-2"
                    >
                      {achievement.date}
                    </motion.span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    {achievement.description}
                  </p>

                  {/* Verification Badge */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center space-x-2 pt-2 border-t border-gray-200 dark:border-gray-700"
                  >
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Verified Credential
                    </span>
                  </motion.div>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-1 h-12 bg-gradient-to-b from-yellow-500 to-transparent rounded-bl-lg"></div>
              </motion.div>
            ))}
          </div>

          {/* Stats Bar */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-4 gap-4"
          >
            {[
              { label: 'Certifications', value: '4+', icon: '🏆' },
              { label: 'Awards Won', value: '3+', icon: '🥇' },
              { label: 'Open Source', value: '5+', icon: '⭐' },
              { label: 'Projects', value: '10+', icon: '💻' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.05 }}
                className="p-6 bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 rounded-lg text-center shadow-lg border border-yellow-200 dark:border-yellow-800"
              >
                <p className="text-3xl font-bold mb-2">{stat.icon}</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
