import { motion } from "framer-motion";
export default function ScrollIndicator({ theme, styles }) {
  return (
    <motion.div
      className="absolute bottom-8 hidden md:block left-1/2 transform -translate-x-1/2"
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <div className={`flex flex-col items-center ${styles.accent}`}>
        <span className="text-sm mb-2">Scroll</span>
        <div
          className={`w-6 h-10 border-2 rounded-full flex justify-center ${
            theme === "light" ? "border-blue-500" : "border-cyan-400"
          }`}
        >
          <motion.div
            className={`w-1 h-3 rounded-full mt-2 ${
              theme === "light" ? "bg-blue-500" : "bg-cyan-400"
            }`}
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </div>
    </motion.div>
  );
}
