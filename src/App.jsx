import {
  AnimatePresence,
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

const SciTechConferenceWithTheme = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [particleCount, setParticleCount] = useState(0);
  const [theme, setTheme] = useState(
    localStorage.getItem("conference-theme") || "light"
  );
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: containerRef });

  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  // Detect system theme preference
  useEffect(() => {
    // Listen for system theme changes
    const handleChange = (e) => {
      setTheme(e.matches ? "dark" : "light");
    };
  }, []);

  // Save theme preference
  useEffect(() => {
    localStorage.setItem("conference-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

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

  // Conference data
  const conferenceData = {
    title: "EFAST-2026",
    subtitle:
      "International Conference on Emerging Frontiers in Advanced Science and Technology",
    date: "June 15-18, 2026",
    location: "Pabna University of Science and Technology, Bangladesh",

    highlights: [
      {
        icon: "🔬",
        title: "Quantum Computing",
        desc: "Next-gen computational paradigms",
      },
      {
        icon: "🧬",
        title: "Synthetic Biology",
        desc: "Engineering life for a better future",
      },
      {
        icon: "🤖",
        title: "AI & Robotics",
        desc: "The sentient machine revolution",
      },
      { icon: "🌐", title: "Neurotech", desc: "Brain-computer interfaces" },
      {
        icon: "🚀",
        title: "Space Tech",
        desc: "Interplanetary human civilization",
      },
      {
        icon: "⚡",
        title: "Energy Systems",
        desc: "Fusion and zero-point energy",
      },
    ],

    speakers: [
      {
        name: "Dr. Aris Thorne",
        title: "Quantum Computing Pioneer",
        bio: "Leading the development of fault-tolerant quantum systems",
        image: "Q",
      },
      {
        name: "Dr. Li Chen",
        title: "Neuro-Interface Specialist",
        bio: "Revolutionizing human-computer symbiosis",
        image: "N",
      },
      {
        name: "Dr. Elena Volkov",
        title: "Space Architect",
        bio: "Designing sustainable habitats for Mars colonization",
        image: "S",
      },
      {
        name: "Dr. Kenji Sato",
        title: "AI Ethicist",
        bio: "Establishing frameworks for conscious AI rights",
        image: "A",
      },
    ],

    schedule: [
      {
        day: "Day 1",
        theme: "Quantum Leaps",
        events: [
          {
            time: "09:00",
            title: "Opening Ceremony",
            speaker: "Conference Chair",
          },
          {
            time: "10:30",
            title: "Quantum Supremacy Panel",
            speaker: "Dr. Aris Thorne & Team",
          },
          {
            time: "14:00",
            title: "Post-Quantum Cryptography",
            speaker: "Dr. Maria Schmidt",
          },
        ],
      },
      {
        day: "Day 2",
        theme: "The Conscious Machine",
        events: [
          {
            time: "09:30",
            title: "AI Consciousness Symposium",
            speaker: "Dr. Kenji Sato",
          },
          {
            time: "11:00",
            title: "Neural Interface Demo",
            speaker: "Dr. Li Chen",
          },
          {
            time: "15:00",
            title: "Human-Machine Ethics",
            speaker: "Global Ethics Board",
          },
        ],
      },
      {
        day: "Day 3",
        theme: "Interplanetary Future",
        events: [
          {
            time: "10:00",
            title: "Mars Habitat Design",
            speaker: "Dr. Elena Volkov",
          },
          {
            time: "13:30",
            title: "Space Elevator Tech",
            speaker: "Orbital Engineering Corp",
          },
          {
            time: "16:00",
            title: "Terraforming Workshop",
            speaker: "Planetary Science Institute",
          },
        ],
      },
    ],

    stats: [
      { value: "2045", label: "Year of Innovation", suffix: "" },
      { value: "150", label: "Countries", suffix: "+" },
      { value: "10", label: "Keynote Speakers", suffix: "K+" },
      { value: "50", label: "Tech Demos", suffix: "+" },
    ],
  };

  // Theme-aware styles
  const themeStyles = {
    light: {
      bg: "bg-gradient-to-br from-white to-blue-50",
      nav: "bg-white/80 backdrop-blur-md border-blue-200",
      text: "text-gray-800",
      textSecondary: "text-gray-600",
      card: "bg-white/70 backdrop-blur-lg border-blue-200",
      cardHover: "bg-white/90",
      buttonPrimary: "bg-gradient-to-r from-blue-500 to-purple-600 text-white",
      buttonSecondary: "border border-blue-500 text-blue-600 bg-white/80",
      accent: "text-blue-600",
      accentGradient: "from-blue-600 to-purple-600",
      sectionAlt: "bg-blue-50/50",
      footer: "bg-white border-blue-200",
      input: "bg-white border-blue-300 focus:ring-blue-400",
    },
    dark: {
      bg: "bg-gradient-to-br from-gray-900 to-blue-900",
      nav: "bg-gray-900/80 backdrop-blur-md border-cyan-500/20",
      text: "text-white",
      textSecondary: "text-gray-300",
      card: "bg-gray-800/50 backdrop-blur-lg border-cyan-500/20",
      cardHover: "bg-gray-800/70",
      buttonPrimary: "bg-gradient-to-r from-cyan-500 to-blue-600 text-white",
      buttonSecondary: "border border-cyan-400 text-cyan-400 bg-gray-800/50",
      accent: "text-cyan-400",
      accentGradient: "from-cyan-400 to-blue-500",
      sectionAlt: "bg-gray-800/30",
      footer: "bg-gray-900 border-cyan-500/20",
      input: "bg-gray-700/50 border-cyan-500/30 focus:ring-cyan-400",
    },
  };

  const styles = themeStyles[theme];

  // Particle Background Component - Theme Aware
  const ParticleBackground = () => (
    <div className="absolute inset-0 overflow-hidden">
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

  // DNA Helix Component - Theme Aware
  const DNAHelix = ({ size = 200 }) => (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className="mx-auto"
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    >
      <defs>
        <linearGradient id="dnaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
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

      {[...Array(12)].map((_, i) => {
        const angle = i * (Math.PI / 6);
        const x1 = 50 + 30 * Math.cos(angle);
        const y1 = 50 + 30 * Math.sin(angle);
        const x2 = 50 - 30 * Math.cos(angle);
        const y2 = 50 - 30 * Math.sin(angle);

        return (
          <motion.line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="url(#dnaGradient)"
            strokeWidth="1"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, theme === "light" ? 0.8 : 1, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        );
      })}
    </motion.svg>
  );

  // Quantum Circuit Component - Theme Aware
  const QuantumCircuit = () => (
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

  // Binary Rain Component - Theme Aware
  const BinaryRain = () => {
    const [binaryElements, setBinaryElements] = useState([]);

    useEffect(() => {
      const elements = [];
      for (let i = 0; i < 70; i++) {
        elements.push({
          id: i,
          value: Math.random() > 0.5 ? "1" : "0",
          left: `${Math.random() * 100}%`,
          delay: Math.random() * 5,
          duration: 5 + Math.random() * 10,
        });
      }
      setBinaryElements(elements);
    }, []);

    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {binaryElements.map((element) => (
          <motion.div
            key={element.id}
            className={`text-${
              theme === "light" ? "blue-600" : "cyan-400"
            } text-xs font-mono opacity-75 absolute`}
            style={{ left: element.left }}
            initial={{ top: "-10px", opacity: 0 }}
            animate={{ top: "100vh", opacity: [0, 0.3, 0] }}
            transition={{
              duration: element.duration,
              repeat: Infinity,
              delay: element.delay,
            }}
          >
            {element.value}
          </motion.div>
        ))}
      </div>
    );
  };

  // Navigation Component - Theme Aware
  const Navigation = () => (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 backdrop-blur-md border-b ${styles.nav}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div
          className="text-xl font-bold tracking-wider"
          whileHover={{ scale: 1.05 }}
        >
          <span
            className={`bg-clip-text text-transparent bg-gradient-to-r ${styles.accentGradient}`}
          >
            {conferenceData.title}
          </span>
        </motion.div>

        <div className="flex items-center space-x-6">
          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            className={`p-2 rounded-full ${
              theme === "light"
                ? "bg-blue-100 text-blue-600"
                : "bg-gray-800 text-cyan-400"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Switch to ${
              theme === "light" ? "dark" : "light"
            } mode`}
          >
            {theme === "light" ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </motion.button>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {[
              "Home",
              "Scopes",
              "Speakers",
              "Schedule",
              "Venue",
              "Call For Paper",
              "Register",
              "submit paper",
            ].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`py-2 px-1 relative ${
                  activeSection === item.toLowerCase()
                    ? `${styles.accent}`
                    : `${styles.textSecondary} hover:${styles.text}`
                } transition-colors`}
                onClick={() => setActiveSection(item.toLowerCase())}
                whileHover={{ y: -2 }}
              >
                {item}
                {activeSection === item.toLowerCase() && (
                  <motion.div
                    className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                      theme === "light" ? "bg-blue-500" : "bg-cyan-400"
                    }`}
                    layoutId="navIndicator"
                  />
                )}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden flex flex-col w-6 h-6 justify-between"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          <motion.span
            className={`w-full h-0.5 ${
              theme === "light" ? "bg-gray-700" : "bg-white"
            } block`}
            animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          />
          <motion.span
            className={`w-full h-0.5 ${
              theme === "light" ? "bg-gray-700" : "bg-white"
            } block`}
            animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
          />
          <motion.span
            className={`w-full h-0.5 ${
              theme === "light" ? "bg-gray-700" : "bg-white"
            } block`}
            animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          />
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className={`md:hidden absolute top-full left-0 right-0 backdrop-blur-lg border-b ${
              theme === "light"
                ? "bg-white/95 border-blue-200"
                : "bg-gray-900/95 border-cyan-500/20"
            }`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 py-4 space-y-4">
              {[
                "Home",
                "Scopes",
                "Speakers",
                "Schedule",
                "Venue",
                "Call For Paper",
                "Register",
                "submit paper",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`block py-2 ${
                    activeSection === item.toLowerCase()
                      ? `${styles.accent}`
                      : `${styles.textSecondary}`
                  } transition-colors`}
                  onClick={() => {
                    setActiveSection(item.toLowerCase());
                    setIsMenuOpen(false);
                  }}
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );

  return (
    <div
      ref={containerRef}
      className={`h-screen overflow-y-auto scroll-smooth transition-colors duration-300 ${styles.bg} ${styles.text}`}
    >
      <Navigation />
      <BinaryRain />

      {/* Hero Section */}
      <section
        id="home"
        ref={heroRef}
        className="min-h-screen relative flex items-center justify-center px-6 overflow-hidden"
      >
        <ParticleBackground />
        <QuantumCircuit />

        <motion.div
          className="text-center z-10 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isHeroInView
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span
              className={`bg-clip-text text-transparent bg-gradient-to-r ${styles.accentGradient}`}
            >
              {conferenceData.title}
            </span>
          </motion.h1>

          <motion.p
            className={`text-xl md:text-2xl mb-4 ${styles.textSecondary}`}
            initial={{ opacity: 0 }}
            animate={isHeroInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {conferenceData.subtitle}
          </motion.p>

          <motion.p
            className={`text-lg mb-8 font-semibold ${styles.accent}`}
            initial={{ opacity: 0 }}
            animate={isHeroInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            {conferenceData.date} | {conferenceData.location}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={
              isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 1, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              className={`px-8 py-3 rounded-full font-semibold text-lg shadow-lg ${styles.buttonPrimary}`}
              whileHover={{
                scale: 1.05,
                boxShadow:
                  theme === "light"
                    ? "0 10px 30px rgba(0, 102, 204, 0.4)"
                    : "0 10px 30px rgba(6, 182, 212, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Register Now
            </motion.button>

            <motion.button
              className={`px-8 py-3 rounded-full font-semibold text-lg backdrop-blur-sm ${styles.buttonSecondary}`}
              whileHover={{
                scale: 1.05,
                backgroundColor:
                  theme === "light"
                    ? "rgba(0, 102, 204, 0.1)"
                    : "rgba(6, 182, 212, 0.1)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              View Schedule
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Important Dates Section */}
        {/* Important Dates Section */}
        <motion.section
          className="py-12 md:py-16 px-4 sm:px-6 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Important <span className={styles.accent}>Dates</span>
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                {
                  title: "Abstract Submission",
                  date: "January 15, 2026",
                  status: "Open",
                  icon: "📝",
                  highlight: true,
                  description: "Submit your research abstract",
                },
                {
                  title: "Full Paper Deadline",
                  date: "February 28, 2026",
                  status: "Upcoming",
                  icon: "📄",
                  highlight: false,
                  description: "Complete paper submission",
                },
                {
                  title: "Acceptance Notification",
                  date: "April 15, 2026",
                  status: "Pending",
                  icon: "✅",
                  highlight: false,
                  description: "Review results announced",
                },
                {
                  title: "Early Bird Registration",
                  date: "May 1, 2026",
                  status: "Open Soon",
                  icon: "🎯",
                  highlight: true,
                  description: "Discounted registration ends",
                },
              ].map((date, index) => (
                <motion.div
                  key={date.title}
                  className={`relative rounded-xl p-4 sm:p-6 border-2 shadow-lg transition-all duration-300 ${
                    date.highlight
                      ? theme === "light"
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
                  {/* Status Badge */}
                  <div className="absolute -top-2 -right-2">
                    <span
                      className={`
              px-2 py-1 text-xs font-semibold rounded-full backdrop-blur-sm
              ${
                date.status === "Open"
                  ? theme === "light"
                    ? "bg-green-500 text-white"
                    : "bg-green-400 text-gray-900"
                  : date.status === "Upcoming"
                  ? theme === "light"
                    ? "bg-orange-500 text-white"
                    : "bg-orange-400 text-gray-900"
                  : theme === "light"
                  ? "bg-purple-500 text-white"
                  : "bg-purple-400 text-gray-900"
              }
            `}
                    >
                      {date.status}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-center">
                    {date.icon}
                  </div>

                  {/* Content */}
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

                  {/* Progress indicator for upcoming dates */}
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

                  {/* Highlight glow effect - only on desktop */}
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
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              className="mt-8 sm:mt-12 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <p
                className={`text-sm sm:text-lg mb-4 sm:mb-6 ${styles.textSecondary} px-2`}
              >
                All deadlines are at 11:59 PM AoE (Anywhere on Earth)
              </p>

              <motion.button
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base backdrop-blur-sm ${
                  theme === "light"
                    ? "bg-white border border-blue-500 text-blue-600 hover:bg-blue-50"
                    : "bg-gray-800 border border-cyan-400 text-cyan-400 hover:bg-gray-700"
                } transition-colors`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Full Schedule
              </motion.button>
            </motion.div>
          </div>
        </motion.section>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className={`flex flex-col items-center ${styles.accent}`}>
            <span className="text-sm mb-2">Scroll</span>
            <div
              className={`w-6 h-10 border-2 rounded-full flex justify-center ${
                theme === "light" ? "border-blue-500" : "border-cyan-400"
              }`}
            >
              <motion.div
                className={`w-1 h-3 rounded-full mt-2 ${
                  theme === "light" ? "bg-blue-500" : "bg-cyan-400"
                }`}
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Highlights Section */}
      <section id="about" className="py-20 px-6 relative overflow-hidden">
        <QuantumCircuit />
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Conference <span className={styles.accent}>Highlights</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {conferenceData.highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                className={`rounded-xl p-6 border shadow-sm hover:shadow-md transition-all ${styles.card}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="text-4xl mb-4">{highlight.icon}</div>
                <h3 className={`text-xl font-semibold mb-2 ${styles.accent}`}>
                  {highlight.title}
                </h3>
                <p className={styles.textSecondary}>{highlight.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {conferenceData.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.div
                  className={`text-3xl md:text-5xl font-bold mb-2 ${styles.accent}`}
                  whileInView={{ scale: [0.5, 1.2, 1] }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  {stat.value}
                  <span
                    className={
                      theme === "light" ? "text-purple-600" : "text-purple-400"
                    }
                  >
                    {stat.suffix}
                  </span>
                </motion.div>
                <div
                  className={`uppercase text-sm tracking-wider ${styles.textSecondary}`}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Speakers Section */}
      {/* <SpeakersSection
        conferenceData={conferenceData}
        theme={theme}
        styles={styles}
        DNAHelix={DNAHelix}
        motion={motion}
      /> */}

      {/* Schedule Section */}
      {/* <ScheduleSection
            conferenceData={conferenceData}
            theme={theme}
            styles={styles}
            motion={motion}
          /> */}

      {/* Registration Section */}
      {/* <RegistrationSection
        conferenceData={conferenceData}
        theme={theme}
        styles={styles}
      /> */}

      {/* Footer */}
      <footer className={`py-12 px-6 border-t ${styles.footer}`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              className="text-2xl font-bold mb-6 md:mb-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              <span
                className={`bg-clip-text text-transparent bg-gradient-to-r ${styles.accentGradient}`}
              >
                {conferenceData.title}
              </span>
            </motion.div>

            <div className="flex space-x-6">
              {["Twitter", "LinkedIn", "Instagram", "YouTube"].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  className={`${styles.textSecondary} hover:${styles.accent} transition-colors`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social}
                </motion.a>
              ))}
            </div>
          </div>

          <motion.div
            className={`mt-8 pt-8 border-t text-center text-sm ${styles.textSecondary}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <p>
              © International Conference on Emerging Frontiers in Advanced
              Science and Technology. All rights reserved.
            </p>
            <p className="mt-2">PUST </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default SciTechConferenceWithTheme;
