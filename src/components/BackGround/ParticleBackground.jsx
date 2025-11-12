import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext.jsx";
export default function ParticleBackground() {
  const [particleCount, setParticleCount] = useState(0);

  useEffect(() => {
    const count = window.innerWidth < 768 ? 30 : 80;
    setParticleCount(count);

    const handleResize = () => {
      const newCount = window.innerWidth < 768 ? 30 : 80;
      setParticleCount(newCount);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const [isDark] = useContext(ThemeContext);
  const theme = isDark ? "dark" : "light";
  return (
    <div className="absolute inset-0 overflow-hidden hidden sm:block">
      <svg
        className="w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <radialGradient id="particleGlow" cx="50%" cy="50%" r="50%">
            <stop
              offset="0%"
              stopColor={theme === "light" ? "#0066CC" : "#00F0FF"}
              stopOpacity={theme === "light" ? "0.4" : "0.7"}
            />
            <stop
              offset="100%"
              stopColor={theme === "light" ? "#0099FF" : "#0055FF"}
              stopOpacity="0"
            />
          </radialGradient>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop
              offset="0%"
              stopColor={theme === "light" ? "#0066CC" : "#00F0FF"}
            />
            <stop
              offset="100%"
              stopColor={theme === "light" ? "#9900CC" : "#FF00E5"}
            />
          </linearGradient>
        </defs>

        {/* Animated grid lines */}
        {[...Array(20)].map((_, i) => (
          <motion.line
            key={`h-line-${i}`}
            x1="0"
            y1={i * 5}
            x2="100"
            y2={i * 5}
            stroke="url(#lineGradient)"
            strokeWidth="0.1"
            strokeOpacity={theme === "light" ? "0.2" : "0.3"}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              delay: i * 0.1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}

        {[...Array(20)].map((_, i) => (
          <motion.line
            key={`v-line-${i}`}
            x1={i * 5}
            y1="0"
            x2={i * 5}
            y2="100"
            stroke="url(#lineGradient)"
            strokeWidth="0.1"
            strokeOpacity={theme === "light" ? "0.2" : "0.3"}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              delay: i * 0.1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}

        {/* Floating particles */}
        {[...Array(particleCount)].map((_, i) => (
          <motion.circle
            key={`particle-${i}`}
            cx={Math.random() * 100}
            cy={Math.random() * 100}
            r={Math.random() * 0.5 + 0.1}
            fill="url(#particleGlow)"
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: [0, theme === "light" ? 0.6 : 1, 0],
              scale: [0, 1, 0],
              cx: [Math.random() * 100, Math.random() * 100],
              cy: [Math.random() * 100, Math.random() * 100],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}

        {/* Central orb */}
        <motion.circle
          cx="50"
          cy="50"
          r="5"
          fill="url(#particleGlow)"
          initial={{ scale: 0 }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        {/* Pulsing rings */}
        <motion.circle
          cx="50"
          cy="50"
          r="10"
          stroke="url(#lineGradient)"
          strokeWidth="0.3"
          fill="none"
          initial={{ scale: 0, opacity: theme === "light" ? 0.6 : 1 }}
          animate={{ scale: 3, opacity: 0 }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        <motion.circle
          cx="50"
          cy="50"
          r="15"
          stroke="url(#lineGradient)"
          strokeWidth="0.3"
          fill="none"
          initial={{ scale: 0, opacity: theme === "light" ? 0.6 : 1 }}
          animate={{ scale: 4, opacity: 0 }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />
      </svg>
    </div>
  );
}
