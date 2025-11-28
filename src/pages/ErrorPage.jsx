import { motion } from "framer-motion";
import SEO from "../components/SEO";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import confData from "../data/confData.js";

const ErrorPage = ({ errorCode = 404, errorMessage = "Page Not Found" }) => {
  const navigate = useNavigate();
  const [theme, setTheme, styles] = useContext(ThemeContext);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
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
      className={`min-h-screen ${styles.bg} flex items-center justify-center p-4`}
    >
      <SEO
        title={`${errorCode} - ${errorMessage}`}
        description="Page not found."
        keywords="Error, 404, EFAST 2026"
        url={window.location.href}
        image="/EFAST.jpg"
      />
      <motion.div
        className="max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Animated Circuit Background */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="circuit"
                x="0"
                y="0"
                width="100"
                height="100"
                patternUnits="userSpaceOnUse"
              >
                <motion.path
                  d="M20,20 L80,20 L80,80 L20,80 Z"
                  stroke={theme === "light" ? "#4B5563" : "#E5E7EB"}
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="8"
                  fill={theme === "light" ? "#4B5563" : "#E5E7EB"}
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)" />
          </svg>
        </div>

        {/* Main Content */}
        <motion.div className="relative z-10" variants={itemVariants}>
          {/* Animated Error Code */}
          <motion.div
            className="text-8xl md:text-9xl font-bold mb-4"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
          >
            <span
              className={`bg-gradient-to-r ${styles.accentGradient} bg-clip-text text-transparent`}
            >
              {errorCode}
            </span>
          </motion.div>

          {/* Pulsing Quantum Dot */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="relative">
              <motion.div
                className={`w-4 h-4 rounded-full ${theme === "light" ? "bg-blue-500" : "bg-cyan-400"
                  }`}
                animate={{
                  scale: [1, 2, 1],
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <motion.div
                className={`absolute inset-0 w-4 h-4 rounded-full ${theme === "light" ? "bg-purple-500" : "bg-blue-500"
                  }`}
                animate={{
                  scale: [1, 3, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1,
                }}
              />
            </div>
          </motion.div>

          {/* Error Message */}
          <motion.h1
            className={`text-3xl md:text-4xl font-bold mb-6 ${styles.text}`}
            variants={itemVariants}
          >
            {errorMessage}
          </motion.h1>

          <motion.p
            className={`text-xl mb-8 max-w-2xl mx-auto ${styles.textSecondary}`}
            variants={itemVariants}
          >
            The page you're looking for has either been redirected or doesn't
            exist in our conference site.
          </motion.p>

          {/* Animated Circuit Diagram */}
          {/* <motion.div
            className="my-12 flex justify-center"
            variants={itemVariants}
          >
            <svg
              width="300"
              height="120"
              viewBox="0 0 300 120"
              className={theme === "light" ? "text-blue-600" : "text-cyan-400"}
            >
             
              <motion.path
                d="M20,60 L80,60 L80,30 L180,30 L180,90 L280,90"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 1 }}
              />

          
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
              >
                <line
                  x1="140"
                  y1="30"
                  x2="160"
                  y2="30"
                  stroke="red"
                  strokeWidth="4"
                />
                <motion.g
                  animate={{ x: [-5, 5, -5] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                >
                  <circle cx="150" cy="30" r="3" fill="red" />
                </motion.g>
              </motion.g>

             
              <motion.circle
                cx="80"
                cy="60"
                r="4"
                fill="currentColor"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.2 }}
              />
              <motion.circle
                cx="180"
                cy="30"
                r="4"
                fill="currentColor"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.4 }}
              />
              <motion.circle
                cx="180"
                cy="90"
                r="4"
                fill="currentColor"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.6 }}
              />

              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
              >
                <motion.path
                  d="M20,55 L20,65"
                  stroke="currentColor"
                  strokeWidth="2"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
                <motion.path
                  d="M280,85 L280,95"
                  stroke="currentColor"
                  strokeWidth="2"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
                />
              </motion.g>
            </svg>
          </motion.div> */}

          {/* Conference Info */}
          <motion.div
            className={`mt-12 pt-8 border-t mb-10 ${theme === "light" ? "border-gray-200" : "border-gray-700"
              }`}
            variants={itemVariants}
          >
            <p className={`mb-4 ${styles.textSecondary}`}>
              While you're here, remember:
            </p>
            <div
              className={`flex flex-wrap justify-center gap-6 text-sm ${theme === "light" ? "text-gray-600" : "text-gray-400"
                }`}
            >
              <motion.div
                className="flex items-center gap-2"
                whileHover={{
                  scale: 1.05,
                  color: theme === "light" ? "#1f2937" : "#fff",
                }}
              >
                <span>📅</span>
                <span>{confData.conference.conference_date}</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2"
                whileHover={{
                  scale: 1.05,
                  color: theme === "light" ? "#1f2937" : "#fff",
                }}
              >
                <span>🌐</span>
                <span>Hybrid Conference</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2"
                whileHover={{
                  scale: 1.05,
                  color: theme === "light" ? "#1f2937" : "#fff",
                }}
              >
                <span>🎯</span>
                <span>PUST & UniMAP</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={itemVariants}
          >
            <motion.button
              onClick={() => navigate("/")}
              className={`px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 ${styles.buttonPrimary}`}
              whileHover={{
                scale: 1.05,
                boxShadow:
                  theme === "light"
                    ? "0 20px 40px rgba(59, 130, 246, 0.3)"
                    : "0 20px 40px rgba(6, 182, 212, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-2">
                <motion.svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ x: [-2, 2, -2] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </motion.svg>
                Back to Homepage
              </span>
            </motion.button>

            <motion.button
              onClick={() => window.history.back()}
              className={`px-8 py-4 backdrop-blur-sm rounded-lg font-semibold text-lg border transition-all duration-300 ${styles.buttonSecondary}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-2">
                <motion.svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ x: [0, -5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </motion.svg>
                Go Back
              </span>
            </motion.button>
          </motion.div>

          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute w-2 h-2 rounded-full ${theme === "light" ? "bg-blue-500" : "bg-cyan-400"
                  }`}
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

// Alternative 500 Error Page Component
export const ServerErrorPage = () => (
  <ErrorPage errorCode={500} errorMessage="Server Quantum Fluctuation" />
);

// Alternative 403 Error Page Component
export const ForbiddenErrorPage = () => (
  <ErrorPage errorCode={403} errorMessage="Access Restricted" />
);

export default ErrorPage;
