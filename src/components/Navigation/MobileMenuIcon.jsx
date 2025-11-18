import { motion } from "framer-motion";
export default function MobileMenuIcon({ isMenuOpen, setIsMenuOpen, theme }) {
  return (
    <motion.button
      className="md:hidden flex flex-col w-7 h-7 justify-between items-center"
      onClick={() => setIsMenuOpen((v) => !v)}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle menu"
      aria-expanded={isMenuOpen}
      aria-controls="mobile-menu"
    >
      <motion.span
        className={`w-full h-0.5 block rounded ${
          theme === "light" ? "bg-gray-700" : "bg-white"
        }`}
        animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
      />
      <motion.span
        className={`w-full h-0.5 block rounded ${
          theme === "light" ? "bg-gray-700" : "bg-white"
        }`}
        animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
      />
      <motion.span
        className={`w-full h-0.5 block rounded ${
          theme === "light" ? "bg-gray-700" : "bg-white"
        }`}
        animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
      />
    </motion.button>
  );
}
