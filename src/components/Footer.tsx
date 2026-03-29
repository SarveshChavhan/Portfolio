import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Sitemap', href: '#' },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-400 dark:text-gray-500 transition-colors duration-300">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Top Section */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Column 1 - Branding */}
            <motion.div
              whileHover={{ y: -5 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Portfolio
              </h3>
              <p className="text-sm leading-relaxed">
                A showcase of my skills, projects, and journey as a developer. 
                Always learning, always building.
              </p>
            </motion.div>

            {/* Column 2 - Quick Links */}
            <motion.div className="space-y-4">
              <h4 className="font-semibold text-white">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { label: 'About', id: 'about' },
                  { label: 'Projects', id: 'projects' },
                  { label: 'Contact', id: 'contact' },
                ].map((link) => (
                  <li key={link.id}>
                    <motion.button
                      whileHover={{ x: 5 }}
                      onClick={() => {
                        const element = document.getElementById(link.id);
                        element?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                    >
                      → {link.label}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Column 3 - Resources */}
            <motion.div className="space-y-4">
              <h4 className="font-semibold text-white">Resources</h4>
              <ul className="space-y-2">
                {footerLinks.map((link, idx) => (
                  <li key={idx}>
                    <motion.a
                      whileHover={{ x: 5 }}
                      href={link.href}
                      className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                    >
                      → {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"
          ></motion.div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm text-center md:text-left"
            >
              © {currentYear} Your Name. All rights reserved.
            </motion.p>

            {/* Made with Love */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-1 text-sm"
            >
              <span>Made with</span>
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="inline-block"
              >
                <Heart size={16} className="text-red-500 fill-red-500" />
              </motion.span>
              <span>by Me</span>
            </motion.div>

            {/* Back to Top Button */}
            <motion.button
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="p-2 bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp size={20} className="text-white" />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500 to-purple-600"></div>
      </div>
    </footer>
  );
};
