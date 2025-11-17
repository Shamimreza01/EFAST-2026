import { motion } from "framer-motion";
import confData from "../../data/confData.js";
<<<<<<< HEAD
import CalendarIcon from "../Icon/CalendarIcon.jsx";
=======
>>>>>>> redesign
export default function DateAndMode({ theme, styles, isHeroInView }) {
  return (
    <motion.div
      className="mb-5 sm:mb-[-20px]"
      initial={{ opacity: 0 }}
      animate={isHeroInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8, delay: 0.7 }}
    >
      <div
        className={`inline-flex items-center gap-3 px-6 py-4 rounded-2xl backdrop-blur-sm border ${
          theme === "light"
            ? "bg-white/60 border-blue-200 shadow-lg"
            : "bg-gray-800/60 border-cyan-500/30 shadow-xl"
        }`}
      >
<<<<<<< HEAD
        <CalendarIcon
          className={`w-6 h-6 ${
            theme === "light" ? "text-green-600" : "text-green-400"
          }`}
        />
=======
        <p className="text-xl md:text-xl text-blue-500 font-semibold">
          Conference Date:{" "}
        </p>

        {/* <CalendarIcon
          className={`w-6 h-6 ${
            theme === "light" ? "text-green-600" : "text-green-400"
          }`}
        /> */}
>>>>>>> redesign
        <span className={`text-xl md:text-2xl font-bold ${styles.accent}`}>
          {confData.conference.conference_date}
        </span>
        <div
          className={`w-1 h-8 rounded-full ${
            theme === "light" ? "bg-blue-300" : "bg-cyan-400"
          }`}
        />
        <span className={`text-lg font-semibold ${styles.textSecondary}`}>
<<<<<<< HEAD
          Hybrid Conference
=======
          Hybrid Mode
>>>>>>> redesign
        </span>
      </div>
    </motion.div>
  );
}
