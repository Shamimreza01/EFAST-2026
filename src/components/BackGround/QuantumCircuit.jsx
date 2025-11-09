import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext.jsx";
export default function QuantumCircuit() {
  const [isDark] = useContext(ThemeContext);
  const theme = isDark ? "dark" : "light";
  return (
    <motion.svg
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
      className="absolute inset-0 opacity-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.1 }}
      transition={{ duration: 2 }}
    >
      <defs>
        <linearGradient
          id="circuitGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop
            offset="0%"
            stopColor={theme === "light" ? "#0066CC" : "#00F0FF"}
          />
          <stop
            offset="100%"
            stopColor={theme === "light" ? "#0055AA" : "#0055FF"}
          />
        </linearGradient>
      </defs>

      {/* Circuit paths */}
      <motion.path
        d="M10,10 L40,10 L40,40 L70,40 L70,70 L90,70"
        stroke="url(#circuitGradient)"
        strokeWidth="0.5"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
      />

      <motion.path
        d="M90,10 L60,10 L60,40 L30,40 L30,70 L10,70"
        stroke="url(#circuitGradient)"
        strokeWidth="0.5"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1,
        }}
      />

      {/* Quantum gates */}
      {[
        { cx: 40, cy: 10 },
        { cx: 40, cy: 40 },
        { cx: 70, cy: 40 },
        { cx: 70, cy: 70 },
        { cx: 60, cy: 10 },
        { cx: 60, cy: 40 },
        { cx: 30, cy: 40 },
        { cx: 30, cy: 70 },
      ].map((gate, i) => (
        <motion.circle
          key={i}
          cx={gate.cx}
          cy={gate.cy}
          r="2"
          fill="url(#circuitGradient)"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}
    </motion.svg>
  );
}
