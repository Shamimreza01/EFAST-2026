import { AnimatePresence, motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import BinaryRain from "../components/BackGround/BinaryRain";
import KeynoteSpeakerCard from "../components/Keynote/KeynoteSpeakerCard";
import ShimmerCard from "../components/Keynote/ShimmerCard";
import SEO from "../components/SEO";
import { ThemeContext } from "../context/ThemeContext";
import confData from "../data/confData";

const KeynoteSpeakers = () => {
  const [theme, setTheme, styles] = useContext(ThemeContext);
  const [loading, setLoading] = useState(true);
  const [speakers, setSpeakers] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const fetchSpeakers = async () => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSpeakers(confData.conference.keynote_speakers);
      setLoading(false);
    };

    fetchSpeakers();
  }, []);

  // Filter speakers by field
  const filteredSpeakers = speakers.filter((speaker) => {
    if (filter === "all") return true;
    return speaker.field === filter;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  // Get unique fields from actual speaker data for dynamic filtering
  const getUniqueFields = () => {
    const fields = speakers.reduce((acc, speaker) => {
      if (speaker.field && !acc.includes(speaker.field)) {
        acc.push(speaker.field);
      }
      return acc;
    }, []);

    const fieldConfigs = {
      quantum: { name: "Quantum Computing", emoji: "⚛️" },
      ai: { name: "Artificial Intelligence", emoji: "🧠" },
      sustainability: { name: "Sustainability", emoji: "🌱" },
      engineering: { name: "Engineering", emoji: "⚙️" },
      biotech: { name: "Biotechnology", emoji: "🧬" },
      robotics: { name: "Robotics", emoji: "🤖" },
      physics: { name: "Physics", emoji: "🔭" },
      "data-science": { name: "Data Science", emoji: "📊" },
    };

    const scienceFields = [
      {
        id: "all",
        name: "All Speakers",
        emoji: "🌟",
        count: speakers.length,
      },
      ...fields.map((field) => ({
        id: field,
        name:
          fieldConfigs[field]?.name ||
          field.charAt(0).toUpperCase() + field.slice(1),
        emoji: fieldConfigs[field]?.emoji || "🔬",
        count: speakers.filter((s) => s.field === field).length,
      })),
    ];

    return scienceFields;
  };

  const scienceFields = getUniqueFields();

  return (
    <div className={`min-h-screen ${styles.bg} transition-colors duration-500`}>
      <SEO
        title="Keynote Speakers | EFAST 2026"
        description="Meet the world-renowned keynote speakers shaping the future of science and technology at EFAST 2026 International Conference."
        keywords="Keynote Speakers, EFAST 2026, International Conference, Science Technology, AI, Physics, Biology, Robotics"
        url={window.location.href}
        image="/EFAST.jpg"
      />

      <BinaryRain intensity="medium" />

      <div className="relative pt-28 pb-16 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            <div className="flex justify-center items-center">
              <motion.h2 className="text-4xl md:text-5xl lg:text-6xl">
                {" "}
                🎤
              </motion.h2>
              <motion.h1
                className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r ${styles.accentGradient} bg-clip-text text-transparent`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                Keynote Speakers
              </motion.h1>
            </div>
            <motion.div
              className="w-32 h-1.5 mx-auto rounded-full mb-8 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"
              initial={{ width: 0 }}
              animate={{ width: "8rem" }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />

            <motion.p
              className={`text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed ${styles.textSecondary}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              Meet the pioneering minds and visionary leaders who are
              <span className={`font-semibold ${styles.accent}`}>
                {" "}
                shaping the future{" "}
              </span>
              of advanced sciences and technology at{" "}
              {confData.conference.short_name}.
            </motion.p>
          </motion.div>

          {/* Enhanced Filter Tabs with Counts */}
          {!loading && speakers.length > 0 && (
            <motion.div
              className="flex flex-wrap justify-center gap-3 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              {scienceFields.map((field) => (
                <motion.button
                  key={field.id}
                  onClick={() => setFilter(field.id)}
                  className={`px-5 py-3 rounded-full font-medium text-sm md:text-base transition-all duration-300 relative ${
                    filter === field.id
                      ? styles.buttonPrimary + " shadow-lg"
                      : theme === "light"
                      ? "bg-white/80 text-gray-700 border border-blue-200 hover:bg-blue-50"
                      : "bg-gray-800/50 text-gray-300 border border-cyan-500/20 hover:bg-gray-700/50"
                  } backdrop-blur-sm`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center gap-2">
                    <span>{field.emoji}</span>
                    {field.name}
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        filter === field.id
                          ? "bg-white/20 text-white"
                          : theme === "light"
                          ? "bg-blue-100 text-blue-600"
                          : "bg-cyan-500/20 text-cyan-400"
                      }`}
                    >
                      {field.count}
                    </span>
                  </span>
                </motion.button>
              ))}
            </motion.div>
          )}

          {/* Speakers Grid */}
          <AnimatePresence mode="wait">
            {loading ? (
              <motion.div
                key="loading"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                {[...Array(8)].map((_, index) => (
                  <motion.div key={`shimmer-${index}`} variants={cardVariants}>
                    <ShimmerCard theme={theme} />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="loaded"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <AnimatePresence>
                  {filteredSpeakers.map((speaker, index) => (
                    <motion.div
                      key={speaker.id}
                      variants={cardVariants}
                      whileHover="hover"
                      layout
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      transition={{
                        delay: index * 0.1,
                        layout: { duration: 0.3 },
                      }}
                    >
                      <KeynoteSpeakerCard
                        speaker={speaker}
                        theme={theme}
                        styles={styles}
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Empty State */}
          {!loading && filteredSpeakers.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className={`text-2xl font-bold mb-4 ${styles.text}`}>
                No speakers found
              </h3>
              <p className={`text-lg ${styles.textSecondary} max-w-md mx-auto`}>
                No keynote speakers match the selected filter. Try selecting a
                different field.
              </p>
            </motion.div>
          )}

          {/* Enhanced CTA Section */}
          {!loading && speakers.length > 0 && (
            <motion.div
              className={`mt-16 text-center p-12 rounded-3xl backdrop-blur-sm border ${
                theme === "light"
                  ? "bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200"
                  : "bg-gradient-to-br from-gray-800/80 to-blue-900/80 border-cyan-500/20"
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <motion.div
                className="text-6xl mb-6"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                🎯
              </motion.div>
              <h3
                className={`text-3xl md:text-4xl font-bold mb-6 ${styles.text}`}
              >
                Ready to Learn from the Best Minds in Science?
              </h3>
              <p
                className={`text-xl mb-8 max-w-2xl mx-auto leading-relaxed ${styles.textSecondary}`}
              >
                Join these brilliant innovators at{" "}
                {confData.conference.short_name} and be part of groundbreaking
                discussions that are shaping the future of technology and
                scientific discovery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  className={`px-8 py-4 rounded-full font-semibold text-lg shadow-lg ${styles.buttonPrimary}`}
                  whileHover={{
                    scale: 1.05,
                    boxShadow:
                      theme === "light"
                        ? "0 20px 40px rgba(59, 130, 246, 0.4)"
                        : "0 20px 40px rgba(6, 182, 212, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Register for {confData.conference.short_name}
                </motion.button>
                <motion.button
                  className={`px-8 py-4 rounded-full font-semibold text-lg backdrop-blur-sm border ${
                    theme === "light"
                      ? "border-blue-500 text-blue-600 bg-white/80 hover:bg-blue-50"
                      : "border-cyan-400 text-cyan-400 bg-gray-800/50 hover:bg-gray-700/50"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Conference Schedule
                </motion.button>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Floating Science Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute text-2xl ${
              theme === "light" ? "text-blue-200/40" : "text-cyan-400/20"
            }`}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.sin(i) * 50, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          >
            {["🧠", "⚛️", "🧬", "🧪", "🤖", "📊", "🔭", "⚙️"][i]}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default KeynoteSpeakers;
