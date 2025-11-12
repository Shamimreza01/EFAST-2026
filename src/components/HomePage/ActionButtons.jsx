import { motion } from "framer-motion";
export default function ActionButtons({ theme, styles, isHeroInView }) {
  return (
    <motion.div
      className="flex flex-col sm:flex-row gap-4 justify-center items-center"
      initial={{ opacity: 0, y: 30 }}
      animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay: 1.3 }}
    >
      {/* Primary Button */}
      <motion.button
        className={`relative px-10 py-4 rounded-full font-bold text-lg shadow-2xl transition-all overflow-hidden group ${styles.buttonPrimary}`}
        whileHover={{
          scale: 1.05,
          boxShadow:
            theme === "light"
              ? "0 20px 40px rgba(59, 130, 246, 0.4)"
              : "0 20px 40px rgba(34, 211, 238, 0.4)",
        }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Animated background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
          whileHover={{
            scale: 1.1,
          }}
          transition={{ duration: 0.3 }}
        />
        <span className="relative z-10 text-white flex items-center gap-2">
          Register Now
          <motion.span
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            →
          </motion.span>
        </span>
      </motion.button>

      {/* Secondary Button */}
      <motion.button
        className={`px-10 py-4 rounded-full font-bold text-lg backdrop-blur-xl transition-all border-2 ${
          theme === "light"
            ? "border-blue-500 text-blue-600 bg-white/80 hover:bg-blue-50"
            : "border-cyan-400 text-cyan-400 bg-gray-800/60 hover:bg-cyan-900/20"
        } shadow-lg`}
        whileHover={{
          scale: 1.05,
          y: -2,
        }}
        whileTap={{ scale: 0.98 }}
      >
        Submit Paper
      </motion.button>
    </motion.div>
  );
}
