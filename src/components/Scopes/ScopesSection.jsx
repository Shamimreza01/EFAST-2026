import { AnimatePresence, motion } from "framer-motion";
import QuantumCircuit from "../BackGround/QuantumCircuit";

export default function ScopesSection({
  confData,
  styles,
  setExpandedTrack,
  expandedTrack,
  theme,
}) {
  return (
    <section id="scopes" className="py-20 px-6 relative overflow-hidden">
      <QuantumCircuit />
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Conference <span className={styles.accent}>Scopes</span>
        </motion.h2>
        <p
          className={`text-lg md:text-xl ${styles.textParagraph} leading-relaxed max-w-4xl mx-auto mb-7`}
        >
          {confData.conference.trackstitle}
        </p>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
          {confData.conference.tracks.map((track, index) => (
            <motion.div
              key={track.track_title}
              className={`break-inside-avoid mb-6 rounded-xl border shadow-sm transition-all duration-300 overflow-hidden cursor-pointer${
                expandedTrack === index
                  ? `${styles.cardHover} shadow-lg ring-2 ring-opacity-50 ${
                      theme === "light" ? "ring-blue-200" : "ring-cyan-500/30"
                    }`
                  : styles.card
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: expandedTrack === index ? 0 : -5 }}
              onClick={() =>
                setExpandedTrack(expandedTrack === index ? null : index)
              }
              layout="position"
            >
              {/* HEADER */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl text-center mb-4">{track.icon}</div>
                  <motion.div
                    animate={{ rotate: expandedTrack === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`p-2 rounded-full ${
                      theme === "light" ? "bg-blue-100" : "bg-gray-700"
                    }`}
                  >
                    <svg
                      className={`w-5 h-5 ${
                        theme === "light" ? "text-blue-600" : "text-cyan-400"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </motion.div>
                </div>

                <h3 className={`text-xl font-semibold mb-3 ${styles.accent}`}>
                  {track.track_title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${styles.textSecondary}`}
                >
                  {track.punchline}
                </p>
              </div>

              {/* EXPANDED CONTENT */}
              <AnimatePresence>
                {expandedTrack === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`border-t ${
                      theme === "light" ? "border-blue-100" : "border-gray-700"
                    }`}
                  >
                    <div className="p-6 pt-4">
                      <h4
                        className={`font-semibold mb-4 text-sm uppercase tracking-wide ${styles.accent}`}
                      >
                        Topics Covered
                      </h4>
                      <motion.ul
                        className="space-y-3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        {track.topics.map((topic, topicIndex) => (
                          <motion.li
                            key={topic}
                            className={`flex items-start text-sm ${
                              theme === "light"
                                ? "text-gray-700"
                                : "text-gray-300"
                            }`}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.4,
                              delay: 0.3 + topicIndex * 0.05,
                            }}
                          >
                            <span
                              className={`mr-3 mt-1 flex-shrink-0 ${
                                theme === "light"
                                  ? "text-blue-500"
                                  : "text-cyan-400"
                              }`}
                            >
                              •
                            </span>
                            <span>{topic}</span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
