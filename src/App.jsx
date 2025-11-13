import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import { useRef, useState } from "react";
import BinaryRain from "./components/BackGround/BinaryRain";
import QuantumCircuit from "./components/BackGround/QuantumCircuit";
import ProfessionalGallery from "./components/Gallery/GallerySection";
import HeroSection from "./components/HomePage/HeroSection";
import Map from "./components/HomePage/Map";
import TracksSection from "./components/HomePage/TracksSection";
import FacebookIcon from "./components/Icon/FacebookIcon";
import LinkedInIcon from "./components/Icon/LinkedInIcon";
import MoonIcon from "./components/Icon/MoonIcon";
import SunIcon from "./components/Icon/SunIcon";
import TwitterIcon from "./components/Icon/TwitterIcon";
import confData from "./data/confData";
import conferenceData from "./data/data";

const SciTechConferenceWithTheme = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("conference-theme") || "light"
  );
  const containerRef = useRef(null);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    localStorage.setItem("conference-theme", newTheme);
    setTheme(newTheme);
  };

  const { scrollYProgress } = useScroll({ container: containerRef });
  const progressColor = useTransform(
    scrollYProgress,
    [0, 1],
    [
      "linear-gradient(90deg, rgba(59,130,246,0.9), rgba(147,51,234,0.9))",
      "linear-gradient(90deg, rgba(34,211,238,0.9), rgba(59,130,246,0.9))",
    ]
  );
  const menuItems = [
    "Home",
    "Scopes",
    "Speakers",
    "Schedule",
    "Venue",
    "Call For Paper",
    "Register",
  ];

  // Theme-aware styles
  const themeStyles = {
    light: {
      bg: "bg-gradient-to-br from-white to-blue-50",
      nav: "bg-white/80 backdrop-blur-md border-blue-200",
      text: "text-gray-800",
      textSecondary: "text-[#6a0000]",
      textParagraph: "text-gray-600",
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
      textParagraph: "text-gray-400",
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

  // University Logo with Animated Text Component
  const UniversityLogoWithText = () => (
    <motion.div
      className="flex items-center space-x-3"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <img
        src="/EFAST_logo.JPG"
        alt="EFAST 2026 Logo"
        className="h-14 w-14 rounded-full  shadow-sm"
      />
      <div className="flex flex-col">
        <motion.span
          className={`text-lg font-bold tracking-wider ${styles.text}`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {conferenceData.title}
        </motion.span>
        <motion.span
          className={`text-xs font-medium tracking-wide ${styles.textSecondary} mt-1`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          PUST and UniMAP
        </motion.span>
      </div>
    </motion.div>
  );

  // Mobile University Logo with Text (Simplified)
  const MobileUniversityLogo = () => (
    <motion.div
      className="flex items-center space-x-2"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <img
        src="/EFAST_logo.JPG"
        alt="EFAST 2026 Logo"
        className="h-12 w-12 rounded-full shadow-sm"
      />
      <div className="flex flex-col">
        <motion.span
          className={`text-sm font-bold tracking-tight ${styles.text}`}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          EFAST 2026
        </motion.span>
        <motion.span
          className={`text-[10px] font-medium tracking-tight ${styles.textSecondary} mt-0.5`}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          PUST and UniMAP
        </motion.span>
      </div>
    </motion.div>
  );

  const Navigation = () => (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-60 py-3 px-6 border-b ${styles.nav}`}
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      role="navigation"
      aria-label="Primary"
    >
      {/* Top progress bar */}
      <motion.div
        className="absolute top-0 left-0 h-0.5 origin-left"
        style={{ scaleX: scrollYProgress, background: progressColor }}
      />
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="hidden md:block">
          <UniversityLogoWithText />
        </div>
        <div className="md:hidden">
          <MobileUniversityLogo />
        </div>

        <div className="flex items-center gap-3 md:gap-6">
          {/* Submit Paper CTA on desktop */}

          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            className={`p-2 rounded-full ${
              theme === "light"
                ? "bg-blue-100 text-blue-600"
                : "bg-gray-800 text-cyan-300"
            }`}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            aria-label={`Switch to ${
              theme === "light" ? "dark" : "light"
            } mode`}
          >
            {theme === "light" ? <MoonIcon /> : <SunIcon />}
          </motion.button>
          {/* Add social media icon and links */}

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => {
              const sectionId = item.toLowerCase().replace(/\s+/g, "-");
              const isActive = activeSection === sectionId;
              return (
                <motion.a
                  key={item}
                  href={`#${sectionId}`}
                  className={`relative py-2 px-1 font-semibold transition-colors ${
                    isActive
                      ? styles.accent
                      : `${styles.textSecondary} hover:${styles.text}`
                  }`}
                  onClick={() => setActiveSection(sectionId)}
                  whileHover={{ y: -1.5 }}
                  transition={{ duration: 0.15 }}
                >
                  {item}
                  {isActive && (
                    <motion.span
                      className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                      layoutId="navIndicator"
                      style={{
                        background:
                          theme === "light"
                            ? "linear-gradient(90deg,#3B82F6,#8B5CF6)"
                            : "linear-gradient(90deg,#22D3EE,#3B82F6)",
                      }}
                    />
                  )}
                </motion.a>
              );
            })}
            <div className="hidden md:block">
              <a
                href="#submit-paper"
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${styles.buttonPrimary}`}
              >
                Abstract Submission
              </a>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full ${
                  theme === "light"
                    ? "bg-blue-100 text-blue-600"
                    : "bg-gray-800 text-cyan-300"
                }`}
              >
                <TwitterIcon className="w-6 h-6" />
              </a>
              <a
                href={confData.conference.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full ${
                  theme === "light"
                    ? "bg-blue-100 text-blue-600"
                    : "bg-gray-800 text-cyan-300"
                }`}
              >
                <FacebookIcon className="w-6 h-6" />
              </a>
              <a
                href={confData.conference.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full ${
                  theme === "light"
                    ? "bg-blue-100 text-blue-600"
                    : "bg-gray-800 text-cyan-300"
                }`}
              >
                <LinkedInIcon className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden flex flex-col w-7 h-7 justify-between items-center"
            onClick={() => setIsMenuOpen((v) => !v)}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <motion.span
              className={`w-full h-0.5 block rounded ${
                theme === "light" ? "bg-gray-700" : "bg-white"
              }`}
              animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            />
            <motion.span
              className={`w-full h-0.5 block rounded ${
                theme === "light" ? "bg-gray-700" : "bg-white"
              }`}
              animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            />
            <motion.span
              className={`w-full h-0.5 block rounded ${
                theme === "light" ? "bg-gray-700" : "bg-white"
              }`}
              animate={
                isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }
              }
            />
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            className={`md:hidden absolute top-full left-0 right-0 backdrop-blur-lg border-b ${
              theme === "light"
                ? "bg-white/95 border-blue-200"
                : "bg-gray-900/95 border-cyan-500/20"
            }`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="px-6 py-4 space-y-3">
              {menuItems.map((item, index) => {
                const sectionId = item.toLowerCase().replace(/\s+/g, "-");
                return (
                  <motion.a
                    key={item}
                    href={`#${sectionId}`}
                    className={`block py-2 rounded-lg px-2 transition-colors ${
                      activeSection === sectionId
                        ? styles.accent
                        : styles.textSecondary
                    }`}
                    onClick={() => {
                      setActiveSection(sectionId);
                      setIsMenuOpen(false);
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, delay: index * 0.06 }}
                  >
                    {item}
                  </motion.a>
                );
              })}
              <a
                href="#submit-paper"
                className={`inline-flex px-4 py-2 rounded-full text-sm font-semibold ${styles.buttonPrimary}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Abstract Submission
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );

  return (
    <div className="fixed inset-0">
      <Navigation />
      <div
        ref={containerRef}
        className={`h-screen overflow-y-auto backdrop-blur-sm scroll-smooth transition-colors duration-300 ${styles.bg} ${styles.text}`}
      >
        <BinaryRain />
        <HeroSection theme={theme} styles={styles} />

        {/* NEW OVERVIEW SECTION */}
        <section id="overview" className="py-20 px-6 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 w-32 h-32 border-2 border-blue-500 rounded-full"></div>
            <div className="absolute bottom-32 right-20 w-24 h-24 border-2 border-purple-500 rotate-45"></div>
            <div className="absolute top-1/2 left-1/3 w-20 h-20 border-2 border-cyan-500 rounded-lg"></div>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Conference <span className={styles.accent}>Overview</span>
              </motion.h2>
              <motion.div
                className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
              <motion.p
                className={`text-xl md:text-2xl ${styles.textSecondary} max-w-3xl mx-auto`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Discover the Premier Platform for Advanced Sciences &
                Technologies
              </motion.p>
            </motion.div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              {/* Overview Text - Main Content */}
              <motion.div
                className="lg:col-span-2"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div
                  className={`relative p-8 rounded-2xl backdrop-blur-sm border ${
                    theme === "light"
                      ? "bg-white/80 border-blue-200 shadow-xl"
                      : "bg-gray-900/80 border-cyan-500/20 shadow-2xl"
                  }`}
                >
                  {/* Decorative Corner */}
                  <div
                    className={`absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 ${
                      theme === "light" ? "border-blue-500" : "border-cyan-400"
                    }`}
                  />
                  <div
                    className={`absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 ${
                      theme === "light" ? "border-blue-500" : "border-cyan-400"
                    }`}
                  />

                  <p
                    className={`text-lg md:text-xl leading-relaxed ${styles.textParagraph} 
            first-letter:text-7xl first-letter:font-bold first-letter:float-left 
            first-letter:mr-4 first-letter:mt-2 first-letter:leading-none
            first-letter:bg-gradient-to-r first-letter:bg-clip-text first-letter:text-transparent
            first-letter:from-blue-600 first-letter:to-purple-600`}
                  >
                    {confData.conference.overview}
                  </p>

                  {/* Stats Bar */}
                  <motion.div
                    className="mt-8 pt-6 border-t border-gray-300 dark:border-gray-600"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <div className="grid grid-cols-3 gap-4 text-center">
                      {[
                        { number: "50+", label: "Expert Speakers" },
                        { number: "200+", label: "Research Papers" },
                        { number: "8", label: "Technical Tracks" },
                      ].map((stat, index) => (
                        <div key={index} className="text-center">
                          <div
                            className={`text-2xl md:text-3xl font-bold ${styles.accent}`}
                          >
                            {stat.number}
                          </div>
                          <div
                            className={`text-sm ${styles.textSecondary} mt-1`}
                          >
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Sidebar - Organized By & Conference Mode */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                {/* Organized By Card */}
                <motion.div
                  className={`p-6 rounded-2xl backdrop-blur-sm border ${
                    theme === "light"
                      ? "bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 shadow-lg"
                      : "bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border-cyan-500/20 shadow-xl"
                  }`}
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center mb-4">
                    <div
                      className={`p-3 rounded-xl mr-4 ${
                        theme === "light"
                          ? "bg-blue-100 text-blue-600"
                          : "bg-cyan-500/20 text-cyan-400"
                      }`}
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                    </div>
                    <h3 className={`text-2xl font-bold ${styles.accent}`}>
                      Organized By
                    </h3>
                  </div>

                  <div className="space-y-2">
                    {confData.conference.organized_by.map((org, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center space-x-4 p-2 rounded-lg hover:bg-white/50 dark:hover:bg-gray-800/50 transition-colors"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div
                          className={`w-3 h-3 rounded-full ${
                            theme === "light" ? "bg-blue-500" : "bg-cyan-400"
                          }`}
                        />
                        <span className={`font-medium ${styles.textSecondary}`}>
                          {org}
                        </span>
                      </motion.div>
                    ))}
                    <div className="space-y-3">
                      <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                        <span className="flex items-center space-x-1">
                          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                          <span>In-person (PUST)</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                          <span>In-person (UniMAP)</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                          <span>Online</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Quick Facts */}
                <motion.div
                  className={`p-6 rounded-2xl backdrop-blur-sm border ${
                    theme === "light"
                      ? "bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 shadow-lg"
                      : "bg-gradient-to-br from-green-900/20 to-emerald-900/20 border-green-500/20 shadow-xl"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-4">
                    <div
                      className={`p-3 rounded-xl mr-4 ${
                        theme === "light"
                          ? "bg-green-100 text-green-600"
                          : "bg-green-500/20 text-green-400"
                      }`}
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <h3 className={`text-2xl font-bold ${styles.accent}`}>
                      Quick Facts
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {[
                      "ISBN Conference Proceedings",
                      "Scopus/SCI Journal Opportunities",
                      "Bangladesh-Malaysia Collaboration",
                      "Global Research Network",
                      "Interdisciplinary Sciences Platform",
                      "Peer-Reviewed Publications",
                      "Innovation & Technology Focus",
                      "International Academic Partnerships",
                    ].map((fact, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <svg
                          className={`w-4 h-4 ${styles.accent}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className={styles.textSecondary}>{fact}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

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
            <TracksSection styles={styles} />
            {/* Stats */}
            {/* <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              {conferenceData.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className={`text-3xl md:text-5xl font-bold mb-2 ${styles.accent}`}
                    whileInView={{ scale: [0.5, 1.2, 1] }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    {stat.value}
                    <span
                      className={
                        theme === "light"
                          ? "text-purple-600"
                          : "text-purple-400"
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
            </motion.div> */}
          </div>
        </section>

        {/* Schedule Section */}
        {/* <ScheduleSection
          conferenceData={conferenceData}
          theme={theme}
          styles={styles}
          motion={motion}
        /> */}
        <ProfessionalGallery id="gallery" styles={styles} />
        <Map theme={theme} styles={styles} />

        {/* Footer */}
        <footer className={`py-12 px-6 border-t relative ${styles.footer}`}>
          <QuantumCircuit />
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <motion.div
                className="flex flex-col items-center md:items-start mb-6 md:mb-0"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <img
                  src="/EFAST_logo.JPG"
                  alt="EFAST 2026 Logo"
                  className="h-16 w-16 rounded-full border-2 border-gray-300 mb-3"
                />
                <span
                  className={`bg-clip-text text-transparent bg-liner-to-r ${styles.accentGradient} text-xl font-bold mb-1`}
                >
                  {conferenceData.title}
                </span>
                <span
                  className={`text-sm ${styles.textSecondary} text-center md:text-left`}
                >
                  Pabna University of Science and Technology
                </span>
              </motion.div>

              <div className="flex space-x-6">
                {["Twitter", "LinkedIn", "Instagram", "YouTube"].map(
                  (social) => (
                    <motion.a
                      key={social}
                      href="#"
                      className={`${styles.textSecondary} hover:${styles.accent} transition-colors`}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={`Follow us on ${social}`}
                    >
                      {social}
                    </motion.a>
                  )
                )}
              </div>
            </div>

            <motion.div
              className={`mt-8 pt-8 border-t text-center text-sm ${styles.textSecondary}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <p>
                © International Conference on Emerging Frontiers in Advanced
                Science and Technology. All rights reserved.
              </p>
              <p className="mt-2">Pabna University of Science and Technology</p>
            </motion.div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default SciTechConferenceWithTheme;
