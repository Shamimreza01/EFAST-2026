import { motion } from "framer-motion";
import confData from "../../data/confData";

export default function ImportantDates({ theme, styles }) {
  const getStatusColor = (status) => {
    const baseStyles =
      "px-2 py-1 text-xs font-semibold rounded-full backdrop-blur-sm";

    switch (status) {
      case "Open":
        return theme === "light"
          ? `${baseStyles} bg-green-500 text-white`
          : `${baseStyles} bg-green-400 text-gray-900`;
      case "Upcoming":
        return theme === "light"
          ? `${baseStyles} bg-orange-500 text-white`
          : `${baseStyles} bg-orange-400 text-gray-900`;
      case "Open Soon":
        return theme === "light"
          ? `${baseStyles} bg-purple-500 text-white`
          : `${baseStyles} bg-purple-400 text-gray-900`;
      default:
        return theme === "light"
          ? `${baseStyles} bg-gray-500 text-white`
          : `${baseStyles} bg-gray-400 text-gray-900`;
    }
  };
  return (
    <motion.section
      className="py-6  md:py-4 px-1 sm:px-2 relative mt-1"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl md:max-w-3xl lg:max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-3">
          {confData.conference.important_dates.map((date, index) => (
            <motion.div
              key={date.title}
              className={`relative rounded-xl pt-2 sm:pt-2 sm:pl-3 sm:pr-3 sm:pb-2 border-2 shadow-lg transition-all duration-300 w-64 min-h-[180px] md:h-full md:w-full  ${
                date.highlight
                  ? theme === "light"
                    ? "border-blue-500 bg-blue-50/50"
                    : "border-cyan-400 bg-cyan-900/20"
                  : styles.card
              }`}
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
              viewport={{ once: true }}
            >
              <div className="absolute -top-2 -right-2">
                <span className={getStatusColor(date.status)}>
                  {date.status}
                </span>
              </div>

              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-center">
                {date.icon}
              </div>

              <h3
                className={`text-base sm:text-lg font-bold text-center mb-2 sm:mb-3 ${
                  date.highlight ? styles.accent : styles.text
                }`}
              >
                {date.title}
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
                    theme === "light" ? "border-blue-400" : "border-cyan-500"
                  } opacity-50`}
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.02, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-8 sm:mt-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.button
            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base backdrop-blur-sm transition-colors ${
              theme === "light"
                ? "bg-white border border-blue-500 text-blue-600 hover:bg-blue-50"
                : "bg-gray-800 border border-cyan-400 text-cyan-400 hover:bg-gray-700"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Full Schedule
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}
