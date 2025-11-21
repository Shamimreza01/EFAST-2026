import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import confData from "../data/confData.js";

const UnderDevelopmentPage = () => {
  const [progress, setProgress] = useState(0);

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
      color: "from-purple-500 to-pink-500",
      description: "Advanced algorithms & computational models",
      elements: ["∞", "Δ", "∫", "π"],
    },
    {
      name: "Physics",
      icon: "⚛",
      color: "from-blue-500 to-cyan-500",
      description: "Quantum mechanics & particle physics",
      elements: ["⚡", "🌌", "🔬", "💫"],
    },
    {
      name: "Chemistry",
      icon: "🧪",
      color: "from-green-500 to-emerald-500",
      description: "Molecular structures & reactions",
      elements: ["⚗", "🔥", "🧬", "💧"],
    },
    {
      name: "Biology",
      icon: "🧬",
      color: "from-red-500 to-orange-500",
      description: "Genetic engineering & biotechnology",
      elements: ["🔬", "🦠", "🧫", "🌱"],
    },
    {
      name: "Statistics",
      icon: "📊",
      color: "from-indigo-500 to-purple-500",
      description: "Data analysis & probability models",
      elements: ["📈", "σ", "μ", "📉"],
    },
    {
      name: "Robotics",
      icon: "🤖",
      color: "from-gray-500 to-blue-500",
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
    <div className=" mt-20 min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-blue-900 flex items-center justify-center p-4">
      {/* Animated Background Elements */}
      <div className="absolute  overflow-hidden">
        {/* Floating Molecules */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white/10 text-2xl"
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
          className="absolute inset-0 w-full h-full opacity-5"
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
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              EFAST-2026
            </span>
          </motion.div>

          <motion.div
            className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6"
            variants={itemVariants}
          >
            <span className="text-white font-semibold text-lg">
              🚧 Under Active Development
              <br />
              comming soon!
            </span>
          </motion.div>
        </motion.div>

        {/* Conference Info */}
        <motion.div
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          variants={itemVariants}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <motion.div whileHover={{ scale: 1.05 }} className="p-4">
              <div className="text-3xl mb-2">📅</div>
              <h4 className="text-white font-semibold mb-2">Conference Date</h4>
              <p className="text-gray-300">
                {confData.conference.conference_date}
              </p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="p-4">
              <div className="text-3xl mb-2">🌐</div>
              <h4 className="text-white font-semibold mb-2">Hybrid Mode</h4>
              <p className="text-gray-300">PUST, UniMAP & Online</p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="p-4">
              <div className="text-3xl mb-2">⚡</div>
              <h4 className="text-white font-semibold mb-2">Launching Soon</h4>
              <p className="text-gray-300">Stay tuned for updates</p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default UnderDevelopmentPage;
