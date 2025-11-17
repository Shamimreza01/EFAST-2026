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
import FacebookIcon from "./components/Icon/FacebookIcon";
import LinkedInIcon from "./components/Icon/LinkedInIcon";
import MoonIcon from "./components/Icon/MoonIcon";
import SunIcon from "./components/Icon/SunIcon";
import confData from "./data/confData";

const SciTechConferenceWithTheme = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedTrack, setExpandedTrack] = useState(null);
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
    "Committee",
    "Schedule",
    "Venue",
    "Call For Papers",
    "Register",
  ];

  // Theme-aware styles
  const themeStyles = {
    light: {
      bg: "bg-gradient-to-br from-white to-blue-50",
      nav: "bg-white/80 backdrop-blur-md border-blue-200",
      text: "text-gray-800",
      textSecondary: "text-[#6a0000]",
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
          {confData.conference.short_name}
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

  const Navigation = () => {
    const [speakersOpen, setSpeakersOpen] = useState(false);
    const [committeeOpen, setCommitteeOpen] = useState(false);
    const [mobileSpeakersOpen, setMobileSpeakersOpen] = useState(false);
    const [mobileCommitteeOpen, setMobileCommitteeOpen] = useState(false);

    return (
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-60 py-3 px-2 border-b ${styles.nav}`}
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
        <div className="max-w-full mx-auto flex justify-between items-center">
          <div className="hidden md:block">
            <UniversityLogoWithText />
          </div>
          <div className="md:hidden">
            <MobileUniversityLogo />
          </div>

          <div className="flex items-center gap-3 md:gap-6">
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

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
              {menuItems.map((item) => {
                const sectionId = item.toLowerCase().replace(/\s+/g, "-");
                const isActive = activeSection === sectionId;

                // Speakers dropdown
                if (item === "Speakers") {
                  return (
                    <div
                      key={item}
                      className="relative"
                      onMouseEnter={() => setSpeakersOpen(true)}
                      onMouseLeave={() => setSpeakersOpen(false)}
                    >
                      <motion.button
                        className={`relative py-2 px-1 font-semibold transition-colors flex items-center gap-1 ${
                          isActive || speakersOpen
                            ? styles.accent
                            : `${styles.textSecondary} hover:${styles.text}`
                        }`}
                        whileHover={{ y: -1.5 }}
                        transition={{ duration: 0.15 }}
                      >
                        {item}
                        <motion.span
                          animate={{ rotate: speakersOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          ⬇️
                        </motion.span>
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
                      </motion.button>

                      {/* Speakers Dropdown */}
                      <AnimatePresence>
                        {speakersOpen && (
                          <motion.div
                            className={`absolute top-full left-0 mt-2 w-48 rounded-lg shadow-lg border ${
                              theme === "light"
                                ? "bg-white border-blue-200"
                                : "bg-gray-800 border-cyan-500/20"
                            }`}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="py-2">
                              <a
                                href="#keynote-speaker"
                                className={`block px-4 py-2 text-md transition-colors ${
                                  theme === "light"
                                    ? "hover:bg-blue-50 text-red-800"
                                    : "hover:bg-gray-700 text-white"
                                }`}
                                onClick={() => {
                                  setActiveSection("keynote-speaker");
                                  setSpeakersOpen(false);
                                }}
                              >
                                Keynote Speaker
                              </a>
                              <a
                                href="#invited-speaker"
                                className={`block px-4 py-2 text-md transition-colors ${
                                  theme === "light"
                                    ? "hover:bg-blue-50 text-red-800"
                                    : "hover:bg-gray-700 text-white"
                                }`}
                                onClick={() => {
                                  setActiveSection("invited-speaker");
                                  setSpeakersOpen(false);
                                }}
                              >
                                Invited Speaker
                              </a>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                // Committee dropdown
                if (item === "Committee") {
                  return (
                    <div
                      key={item}
                      className="relative"
                      onMouseEnter={() => setCommitteeOpen(true)}
                      onMouseLeave={() => setCommitteeOpen(false)}
                    >
                      <motion.button
                        className={`relative py-2 px-1 font-semibold transition-colors flex items-center gap-1 ${
                          isActive || committeeOpen
                            ? styles.accent
                            : `${styles.textSecondary} hover:${styles.text}`
                        }`}
                        whileHover={{ y: -1.5 }}
                        transition={{ duration: 0.15 }}
                      >
                        {item}
                        <motion.span
                          animate={{ rotate: committeeOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          ⬇️
                        </motion.span>
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
                      </motion.button>

                      {/* Committee Dropdown */}
                      <AnimatePresence>
                        {committeeOpen && (
                          <motion.div
                            className={`absolute top-full left-0 mt-2 w-60 rounded-lg shadow-lg border ${
                              theme === "light"
                                ? "bg-white border-blue-200"
                                : "bg-gray-800 border-cyan-500/20"
                            }`}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="py-2">
                              <a
                                href="#organizing-committee"
                                className={`block px-4 py-2 text-md transition-colors ${
                                  theme === "light"
                                    ? "hover:bg-blue-50 text-red-800"
                                    : "hover:bg-gray-700 text-white"
                                }`}
                                onClick={() => {
                                  setActiveSection("organizing-committee");
                                  setCommitteeOpen(false);
                                }}
                              >
                                Organizing Committee
                              </a>
                              <a
                                href="#technical-program-committee"
                                className={`block px-4 py-2 text-md transition-colors ${
                                  theme === "light"
                                    ? "hover:bg-blue-50 text-red-800"
                                    : "hover:bg-gray-700 text-white"
                                }`}
                                onClick={() => {
                                  setActiveSection(
                                    "technical-program-committee"
                                  );
                                  setCommitteeOpen(false);
                                }}
                              >
                                Technical Program Committee
                              </a>
                              <a
                                href="#advisory-committee"
                                className={`block px-4 py-2 text-md transition-colors ${
                                  theme === "light"
                                    ? "hover:bg-blue-50 text-red-800"
                                    : "hover:bg-gray-700 text-white"
                                }`}
                                onClick={() => {
                                  setActiveSection("advisory-committee");
                                  setCommitteeOpen(false);
                                }}
                              >
                                Advisory Committee
                              </a>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                // Regular menu items
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
                  className={`px-4 py-2 text-wrap rounded-full text-sm font-semibold transition-all ${styles.buttonPrimary}`}
                >
                  Abstract Submission
                </a>
              </div>
              <div className="flex items-center gap-4">
                {/* <a
                  href="https://twitter.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full ${
                    theme === "light"
                      ? "bg-blue-100 text-blue-600"
                      : "bg-gray-800 text-cyan-300"
                  }`}
                >
                  <TwitterIcon className="w-6 h-6" />
                </a> */}
                <a
                  href={`${confData.conference.facebook}`}
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
                  href={`${confData.conference.linkedin}`}
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
                animate={
                  isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }
                }
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

                  // Mobile Speakers dropdown
                  if (item === "Speakers") {
                    return (
                      <div key={item} className="space-y-2">
                        <button
                          className={`flex items-center justify-between w-full py-2 rounded-lg px-2 transition-colors ${
                            activeSection.includes("speaker")
                              ? styles.accent
                              : styles.textSecondary
                          }`}
                          onClick={() =>
                            setMobileSpeakersOpen(!mobileSpeakersOpen)
                          }
                        >
                          <span>Speakers</span>
                          <motion.span
                            animate={{ rotate: mobileSpeakersOpen ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            ▼
                          </motion.span>
                        </button>

                        <AnimatePresence>
                          {mobileSpeakersOpen && (
                            <motion.div
                              className="pl-4 space-y-2"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <a
                                href="#keynote-speaker"
                                className={`block py-2 rounded-lg px-2 transition-colors ${
                                  activeSection === "keynote-speaker"
                                    ? styles.accent
                                    : styles.textSecondary
                                }`}
                                onClick={() => {
                                  setActiveSection("keynote-speaker");
                                  setIsMenuOpen(false);
                                  setMobileSpeakersOpen(false);
                                }}
                              >
                                Keynote Speaker
                              </a>
                              <a
                                href="#invited-speaker"
                                className={`block py-2 rounded-lg px-2 transition-colors ${
                                  activeSection === "invited-speaker"
                                    ? styles.accent
                                    : styles.textSecondary
                                }`}
                                onClick={() => {
                                  setActiveSection("invited-speaker");
                                  setIsMenuOpen(false);
                                  setMobileSpeakersOpen(false);
                                }}
                              >
                                Invited Speaker
                              </a>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  // Mobile Committee dropdown
                  if (item === "Committee") {
                    return (
                      <div key={item} className="space-y-2">
                        <button
                          className={`flex items-center justify-between w-full py-2 rounded-lg px-2 transition-colors ${
                            activeSection.includes("committee")
                              ? styles.accent
                              : styles.textSecondary
                          }`}
                          onClick={() =>
                            setMobileCommitteeOpen(!mobileCommitteeOpen)
                          }
                        >
                          <span>Committee</span>
                          <motion.span
                            animate={{ rotate: mobileCommitteeOpen ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            ▼
                          </motion.span>
                        </button>

                        <AnimatePresence>
                          {mobileCommitteeOpen && (
                            <motion.div
                              className="pl-4 space-y-2"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <a
                                href="#organizing-committee"
                                className={`block py-2 rounded-lg px-2 transition-colors ${
                                  activeSection === "organizing-committee"
                                    ? styles.accent
                                    : styles.textSecondary
                                }`}
                                onClick={() => {
                                  setActiveSection("organizing-committee");
                                  setIsMenuOpen(false);
                                  setMobileCommitteeOpen(false);
                                }}
                              >
                                Organizing Committee
                              </a>
                              <a
                                href="#technical-program-committee"
                                className={`block py-2 rounded-lg px-2 transition-colors ${
                                  activeSection ===
                                  "technical-program-committee"
                                    ? styles.accent
                                    : styles.textSecondary
                                }`}
                                onClick={() => {
                                  setActiveSection(
                                    "technical-program-committee"
                                  );
                                  setIsMenuOpen(false);
                                  setMobileCommitteeOpen(false);
                                }}
                              >
                                Technical Program Committee
                              </a>
                              <a
                                href="#advisory-committee"
                                className={`block py-2 rounded-lg px-2 transition-colors ${
                                  activeSection === "advisory-committee"
                                    ? styles.accent
                                    : styles.textSecondary
                                }`}
                                onClick={() => {
                                  setActiveSection("advisory-committee");
                                  setIsMenuOpen(false);
                                  setMobileCommitteeOpen(false);
                                }}
                              >
                                Advisory Committee
                              </a>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  // Regular mobile menu items
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
  };

  return (
    <div className="fixed inset-0">
      <Navigation />
      <div
        ref={containerRef}
        className={`h-screen overflow-y-auto backdrop-blur-sm scroll-smooth transition-colors duration-300 ${styles.bg} ${styles.text}`}
      >
        <BinaryRain />
        <HeroSection theme={theme} styles={styles} />
        <section id="overview" className="py-20 px-6 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 w-32 h-32 border-2 border-blue-500 rounded-full"></div>
            <div className="absolute bottom-32 right-20 w-24 h-24 border-2 border-purple-500 rotate-45"></div>
            <div className="absolute top-1/2 left-1/3 w-20 h-20 border-2 border-cyan-500 rounded-lg"></div>
          </div>

          <div className="max-w-7xl mx-auto">
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {confData.conference.tracks.map((track, index) => (
                <motion.div
                  key={track.track_title}
                  className={`rounded-xl border shadow-sm transition-all duration-300 overflow-hidden cursor-pointer ${
                    expandedTrack === index
                      ? `${styles.cardHover} shadow-lg ring-2 ring-opacity-50 ${
                          theme === "light"
                            ? "ring-blue-200"
                            : "ring-cyan-500/30"
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
                  layout
                >
                  {/* Track Header */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl text-center mb-4">
                        {track.icon}
                      </div>
                      <motion.div
                        animate={{ rotate: expandedTrack === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className={`p-2 rounded-full ${
                          theme === "light" ? "bg-blue-100" : "bg-gray-700"
                        }`}
                      >
                        <svg
                          className={`w-5 h-5 ${
                            theme === "light"
                              ? "text-blue-600"
                              : "text-cyan-400"
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

                    <h3
                      className={`text-xl font-semibold mb-3 ${styles.accent}`}
                    >
                      {track.track_title}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed ${styles.textSecondary}`}
                    >
                      {track.punchline}
                    </p>
                  </div>

                  {/* Subtracks List */}
                  <AnimatePresence>
                    {expandedTrack === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`border-t ${
                          theme === "light"
                            ? "border-blue-100"
                            : "border-gray-700"
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

                          {/* View Details Button */}
                          {/* <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="mt-6 pt-4 border-t border-dashed border-gray-300 dark:border-gray-600"
                          >
                            <button
                              className={`w-full py-2 px-4 rounded-lg text-sm font-medium transition-all ${
                                theme === "light"
                                  ? "bg-blue-50 text-blue-600 hover:bg-blue-100"
                                  : "bg-gray-700 text-cyan-400 hover:bg-gray-600"
                              }`}
                              onClick={(e) => {
                                e.stopPropagation();
                                // You can add functionality to navigate to detailed track page
                                console.log(
                                  `View details for ${track.track_title}`
                                );
                              }}
                            >
                              View Track Details
                            </button>
                          </motion.div> */}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            {/* Expanded View Instructions */}
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
                  {confData.conference.name}
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
