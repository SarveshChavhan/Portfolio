import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const Projects = () => {
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

  const featuredProjects = portfolioData.projects.filter(p => p.featured);
  const otherProjects = portfolioData.projects.filter(p => !p.featured);

  const ProjectCard = ({ project, isFeatured = false }: { project: typeof portfolioData.projects[0]; isFeatured?: boolean }) => (
    <motion.div
      whileHover={{ y: -10 }}
      className={`relative group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white dark:bg-gray-800 ${
        isFeatured ? 'lg:col-span-2' : ''
      }`}
    >
      {/* Background Image or Placeholder */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-400 to-purple-600">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300"></div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
            {project.description}
          </p>

          {/* Details */}
          <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1 mb-4">
            {project.details.map((detail, idx) => (
              <li key={idx} className="flex items-start space-x-2">
                <span className="text-blue-500 mt-1">›</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech, idx) => (
            <motion.span
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full text-xs font-semibold cursor-pointer hover:bg-blue-200 dark:hover:bg-blue-900 transition-colors"
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Links */}
        <div className="flex space-x-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors flex-1 justify-center"
          >
            <ExternalLink size={18} />
            <span>Live Demo</span>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-4 py-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex-1 justify-center"
          >
            <Github size={18} />
            <span>Code</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800 transition-colors duration-300">
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
              My <span className="text-pink-500">Projects</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Explore some of my recent work and side projects
            </p>
          </motion.div>

          {/* Featured Projects */}
          {featuredProjects.length > 0 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Featured Projects</h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid lg:grid-cols-2 gap-6"
              >
                {featuredProjects.map((project) => (
                  <motion.div key={project.id} variants={itemVariants}>
                    <ProjectCard project={project} isFeatured={true} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          )}

          {/* Other Projects */}
          {otherProjects.length > 0 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Other Projects</h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {otherProjects.map((project) => (
                  <motion.div key={project.id} variants={itemVariants}>
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          )}

          {/* Additional Info */}
          <motion.div
            variants={itemVariants}
            className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800"
          >
            <p className="text-blue-900 dark:text-blue-300">
              💡 <span className="font-semibold">Note:</span> All project links are placeholders. Replace them with your actual project URLs, GitHub repositories, and live demos.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
