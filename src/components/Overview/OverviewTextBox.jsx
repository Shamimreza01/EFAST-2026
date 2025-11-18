import { motion } from "framer-motion";
export default function OverviewTextBox({ confData, theme, styles }) {
  return (
    <motion.div
      className="lg:col-span-2"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      viewport={{ once: true }}
    >
      <div
        className={`relative p-8 rounded-2xl backdrop-blur-sm border ${
          theme === "light"
            ? "bg-white/80 border-blue-200 shadow-xl"
            : "bg-gray-900/80 border-cyan-500/20 shadow-2xl"
        }`}
      >
        {/* Decorative Corner */}
        <div
          className={`absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 ${
            theme === "light" ? "border-blue-500" : "border-cyan-400"
          }`}
        />
        <div
          className={`absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 ${
            theme === "light" ? "border-blue-500" : "border-cyan-400"
          }`}
        />

        <p
          className={`text-lg md:text-xl leading-relaxed ${styles.textParagraph} 
                    first-letter:text-7xl first-letter:font-bold first-letter:float-left 
                    first-letter:mr-4 first-letter:mt-2 first-letter:leading-none
                    first-letter:bg-gradient-to-r first-letter:bg-clip-text first-letter:text-transparent
                    first-letter:from-blue-600 first-letter:to-purple-600`}
        >
          {confData.conference.overview}
        </p>
      </div>
    </motion.div>
  );
}
