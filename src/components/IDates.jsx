import React from 'react'

export default function IDates() {
  return (
    <motion.div
                  className={`relative rounded-xl p-4 sm:p-6 border-2 shadow-lg transition-all duration-300 ${
                    theme === "light"
                        ? "border-blue-500 bg-blue-50/50"
                        : "border-cyan-400 bg-cyan-900/20"
                      : styles.card
                  } ${styles.card} min-h-[180px] sm:min-h-[220px]`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{
                    y: -4,
                    scale: 1.02,
                    boxShadow:
                      theme === "light"
                        ? "0 10px 25px rgba(0, 102, 204, 0.15)"
                        : "0 10px 25px rgba(6, 182, 212, 0.15)",
                  }}
                >
                  <div className="absolute -top-2 -right-2">
                    <span
                      className={`
              px-2 py-1 text-xs font-semibold rounded-full backdrop-blur-sm
              ${
                theme === "light"
                    ? "bg-green-500 text-white"
                    : "bg-green-400 text-gray-900"
              }
            `}
                    >
                      Important Dates
                    </span>
                  </div>

                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-center">
                   .
                  </div>

                  <h3
                    className={`text-base sm:text-lg font-bold text-center mb-2 sm:mb-3`}
                  >
                    
                  </h3>

                  <div className="text-center mb-2 sm:mb-3">
                    <div
                      className={`text-xl sm:text-2xl font-bold mb-1 ${
                        date.highlight
                          ? theme === "light"
                            ? "text-blue-600"
                            : "text-cyan-400"
                          : styles.text
                      }`}
                    >
                      {date.date.split(" ")[0]}
                    </div>
                    <div
                      className={`text-sm sm:text-lg font-semibold ${
                        date.highlight
                          ? theme === "light"
                            ? "text-blue-700"
                            : "text-cyan-300"
                          : styles.textSecondary
                      }`}
                    >
                      {date.date.split(" ").slice(1).join(" ")}
                    </div>
                  </div>

                  <p
                    className={`text-xs sm:text-sm text-center ${styles.textSecondary} leading-tight`}
                  >
                    {date.description}
                  </p>

                  {date.status === "Upcoming" && (
                    <motion.div
                      className="mt-3 sm:mt-4 relative h-1 bg-gray-300 rounded-full overflow-hidden"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <motion.div
                        className={`absolute top-0 left-0 h-full ${
                          theme === "light" ? "bg-blue-500" : "bg-cyan-400"
                        }`}
                        initial={{ width: "0%" }}
                        animate={{ width: "65%" }}
                        transition={{ duration: 2, delay: 1 }}
                      />
                    </motion.div>
                  )}

                  {date.highlight && (
                    <motion.div
                      className={`hidden sm:block absolute inset-0 rounded-xl border-2 ${
                        theme === "light"
                          ? "border-blue-400"
                          : "border-cyan-500"
                      } opacity-50`}
                      animate={{
                        opacity: [0.3, 0.6, 0.3],
                        scale: [1, 1.02, 1],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </motion.div>
  )
}
