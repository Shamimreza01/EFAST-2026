import { motion } from "framer-motion";
export default function QuickFacts({ theme, styles }) {
  return (
    <motion.div
      className="space-y-8"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      viewport={{ once: true }}
    >
      {/* Quick Facts */}
      <motion.div
        className={`p-6 rounded-2xl backdrop-blur-sm border ${
          theme === "light"
            ? "bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 shadow-lg"
            : "bg-gradient-to-br from-green-900/20 to-emerald-900/20 border-green-500/20 shadow-xl"
        }`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center mb-4">
          <div
            className={`p-3 rounded-xl mr-4 ${
              theme === "light"
                ? "bg-green-100 text-green-600"
                : "bg-green-500/20 text-green-400"
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <h3 className={`text-2xl font-bold ${styles.accent}`}>Quick Facts</h3>
        </div>

        <div className="space-y-3">
          {[
            "ISBN Conference Proceedings",
            "Scopus/SCI Journal Opportunities",
            "Bangladesh-Malaysia Collaboration",
            "Global Research Network",
            "Interdisciplinary Sciences Platform",
            "Peer-Reviewed Publications",
            "Innovation & Technology Focus",
            "International Academic Partnerships",
          ].map((fact, index) => (
            <div key={index} className="flex items-center space-x-3">
              <svg
                className={`w-4 h-4 ${styles.accent}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className={styles.textSecondary}>{fact}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
