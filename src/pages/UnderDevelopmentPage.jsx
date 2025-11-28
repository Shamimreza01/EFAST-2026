import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import SEO from "../components/SEO";
import { ThemeContext } from "../context/ThemeContext";
import confData from "../data/confData.js";

const UnderDevelopmentPage = () => {
  const [progress, setProgress] = useState(0);
  const [theme, setTheme, styles] = useContext(ThemeContext);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const scienceFields = [
    {
      name: "Mathematics",
      icon: "∑",
      lightColor: "from-purple-500 to-pink-500",
      darkColor: "from-purple-600 to-pink-600",
      description: "Advanced algorithms & computational models",
      elements: ["∞", "Δ", "∫", "π"],
    },
    {
      name: "Physics",
      icon: "⚛",
      lightColor: "from-blue-500 to-cyan-500",
      darkColor: "from-blue-600 to-cyan-600",
      description: "Quantum mechanics & particle physics",
      elements: ["⚡", "🌌", "🔬", "💫"],
    },
    {
      name: "Chemistry",
      icon: "🧪",
      lightColor: "from-green-500 to-emerald-500",
      darkColor: "from-green-600 to-emerald-600",
      description: "Molecular structures & reactions",
      elements: ["⚗", "🔥", "🧬", "💧"],
    },
    {
      name: "Biology",
      icon: "🧬",
      lightColor: "from-red-500 to-orange-500",
      darkColor: "from-red-600 to-orange-600",
      description: "Genetic engineering & biotechnology",
      elements: ["🔬", "🦠", "🧫", "🌱"],
    },
    {
      name: "Statistics",
      icon: "📊",
      lightColor: "from-indigo-500 to-purple-500",
      darkColor: "from-indigo-600 to-purple-600",
      description: "Data analysis & probability models",
      elements: ["📈", "σ", "μ", "📉"],
    },
    {
      name: "Robotics",
      icon: "🤖",
      lightColor: "from-gray-500 to-blue-500",
      darkColor: "from-gray-600 to-blue-600",
      description: "AI systems & automation",
      elements: ["⚙", "🔧", "📡", "💡"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div
      className={`mt-20 min-h-screen ${styles.bg} flex items-center justify-center p-4`}
    >
      <SEO
        title="Under Development"
        description="This page is currently under development. Stay tuned for updates on EFAST 2026."
        keywords="Under Development, EFAST 2026, Conference, Coming Soon"
        url={window.location.href}
        image="/EFAST.jpg"
      />
      {/* Animated Background Elements */}
      <div className="absolute overflow-hidden">
        {/* Floating Molecules */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute text-2xl ${theme === "light" ? "text-gray-800/10" : "text-white/10"
              }`}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.sin(i) * 20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          >
            {i % 3 === 0 ? "⚗" : i % 3 === 1 ? "🧬" : "⚛"}
          </motion.div>
        ))}

        {/* Circuit Patterns */}
        <svg
          className={`absolute inset-0 w-full h-full opacity-5 ${theme === "light" ? "text-gray-800" : "text-white"
            }`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <motion.div
        className="max-w-6xl mx-auto text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header Section */}
        <motion.div className="mb-12" variants={itemVariants}>
          <motion.div
            className="text-6xl md:text-8xl font-bold mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <span
              className={`bg-gradient-to-r ${styles.accentGradient} bg-clip-text text-transparent`}
            >
              EFAST-2026
            </span>
          </motion.div>

          <motion.div
            className={`inline-block px-6 py-3 backdrop-blur-sm rounded-full border mb-6 ${theme === "light"
              ? "bg-white/80 border-blue-200 text-gray-800"
              : "bg-gray-800/80 border-cyan-500/20 text-white"
              }`}
            variants={itemVariants}
          >
            <span className="font-semibold text-lg">
              🚧 Under Active Development
              <br />
              Coming soon!
            </span>
          </motion.div>

          <motion.h1
            className={`text-4xl md:text-5xl font-bold mb-4 ${styles.text}`}
            variants={itemVariants}
          >
            Building the Future of Science & Technology
          </motion.h1>
        </motion.div>

        {/* Conference Info */}
        <motion.div
          className={`backdrop-blur-sm rounded-2xl p-8 border ${styles.card}`}
          variants={itemVariants}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <motion.div whileHover={{ scale: 1.05 }} className="p-4">
              <div className="text-3xl mb-2">📅</div>
              <h4 className={`font-semibold mb-2 ${styles.text}`}>
                Conference Date
              </h4>
              <p className={styles.textSecondary}>
                {confData.conference.conference_date}
              </p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="p-4">
              <div className="text-3xl mb-2">🌐</div>
              <h4 className={`font-semibold mb-2 ${styles.text}`}>
                Hybrid Mode
              </h4>
              <p className={styles.textSecondary}>PUST, UniMAP & Online</p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="p-4">
              <div className="text-3xl mb-2">⚡</div>
              <h4 className={`font-semibold mb-2 ${styles.text}`}>
                Launching Soon
              </h4>
              <p className={styles.textSecondary}>Stay tuned for updates</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Floating Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute text-2xl ${theme === "light" ? "text-gray-800/20" : "text-white/20"
                }`}
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                y: [0, -100, 0],
                rotate: [0, 360],
              }}
              transition={{
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            >
              {["∑", "⚛", "🧪", "🧬", "📊", "🤖"][i % 6]}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default UnderDevelopmentPage;
