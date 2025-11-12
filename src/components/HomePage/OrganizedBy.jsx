import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function OrganizedBy({
  theme,
  styles,
  isHeroInView,
  handleGalleryClick,
}) {
  const [hoveredUniversity, setHoveredUniversity] = useState(null);

  return (
    <motion.div
      className="mb-5 sm:mb-[-15px]"
      initial={{ opacity: 0, y: 20 }}
      animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8, delay: 0.9 }}
    >
      <div className="flex flex-col items-center space-y-6">
        <div className="flex items-center justify-center gap-8 md:gap-12">
          {/* PUST Logo */}
          <motion.div
            className="relative flex flex-col items-center group cursor-pointer"
            onClick={handleGalleryClick}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onHoverStart={() => setHoveredUniversity("pust")}
            onHoverEnd={() => setHoveredUniversity(null)}
          >
            {/* Tooltip */}
            <AnimatePresence>
              {hoveredUniversity === "pust" && (
                <motion.div
                  className="absolute -top-20 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none"
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  <div
                    className={`px-4 py-3 rounded-lg shadow-2xl ${
                      theme === "light"
                        ? "bg-gray-800 text-white"
                        : "bg-white text-gray-800"
                    }`}
                  >
                    <p className="text-sm font-semibold whitespace-nowrap">
                      Pabna University of Science and Technology
                    </p>
                    {/* Tooltip Arrow */}
                    <div
                      className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-3 rotate-45 ${
                        theme === "light" ? "bg-gray-800" : "bg-white"
                      }`}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Logo Container */}
            <div
              className={`p-3 rounded-2xl relative overflow-hidden ${
                theme === "light"
                  ? "bg-white shadow-lg border border-blue-100"
                  : "bg-gray-800 shadow-xl border border-cyan-500/20"
              } group-hover:shadow-2xl transition-all duration-300`}
            >
              {/* Hover Overlay */}
              <motion.div
                className={`absolute inset-0 rounded-2xl ${
                  theme === "light" ? "bg-blue-500/10" : "bg-cyan-400/10"
                }`}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <img
                src="/pust_logo.png"
                alt="Pabna University of Science and Technology"
                className="w-16 h-16 md:w-20 md:h-20 object-contain relative z-10"
              />
            </div>

            {/* University Name */}
            <div className="text-center mt-3">
              <span
                className={`text-lg font-semibold ${styles.textSecondary} group-hover:${styles.accent} transition-colors duration-300`}
              >
                PUST
              </span>
              <span className={`text-sm ${styles.textTertiary} mt-1 block`}>
                Bangladesh
              </span>
            </div>
          </motion.div>

          {/* Collaboration Text */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ scale: 0 }}
            animate={isHeroInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <div
              className={`text-center px-4 py-2 rounded-lg ${
                theme === "light"
                  ? "bg-blue-50 border border-blue-200"
                  : "bg-cyan-900/20 border border-cyan-500/20"
              }`}
            >
              <p className={`text-sm ${styles.textTertiary}`}>
                • In-person at PUST, Bangladesh & UniMAP, Malaysia
                <br />• Online participation available
              </p>
            </div>
          </motion.div>

          {/* UniMAP Logo */}
          <motion.div
            className="relative flex flex-col items-center group"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onHoverStart={() => setHoveredUniversity("unimap")}
            onHoverEnd={() => setHoveredUniversity(null)}
          >
            {/* Tooltip */}
            <AnimatePresence>
              {hoveredUniversity === "unimap" && (
                <motion.div
                  className="absolute -top-20 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none"
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  <div
                    className={`px-4 py-3 rounded-lg shadow-2xl ${
                      theme === "light"
                        ? "bg-gray-800 text-white"
                        : "bg-white text-gray-800"
                    }`}
                  >
                    <p className="text-sm font-semibold whitespace-nowrap">
                      Universiti Malaysia Perlis
                    </p>
                    {/* Tooltip Arrow */}
                    <div
                      className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-3 rotate-45 ${
                        theme === "light" ? "bg-gray-800" : "bg-white"
                      }`}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Logo Container */}
            <div
              className={`p-3 rounded-2xl relative overflow-hidden ${
                theme === "light"
                  ? "bg-white shadow-lg border border-blue-100"
                  : "bg-gray-800 shadow-xl border border-cyan-500/20"
              } group-hover:shadow-2xl transition-all duration-300`}
            >
              {/* Hover Overlay */}
              <motion.div
                className={`absolute inset-0 rounded-2xl ${
                  theme === "light" ? "bg-blue-500/10" : "bg-cyan-400/10"
                }`}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <img
                src="/UniMAP_logo.png"
                alt="Universiti Malaysia Perlis"
                className="w-16 h-16 md:w-20 md:h-20 object-contain relative z-10"
              />
            </div>

            {/* University Name */}
            <div className="text-center mt-3">
              <span
                className={`text-lg font-semibold ${styles.textSecondary} group-hover:${styles.accent} transition-colors duration-300`}
              >
                UniMAP
              </span>
              <span className={`text-sm ${styles.textTertiary} mt-1 block`}>
                Malaysia
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
