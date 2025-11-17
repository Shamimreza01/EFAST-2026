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
import conferenceData from "./data/data";

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
      <div className="flex flex-col ">
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
                Submit Paper
              </a>
            </div>
            <div className="flex items-center gap-4">
              <a
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
              </a>
              <a
                href="https://facebook.com/yourprofile"
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
                href="https://linkedin.com/in/yourprofile"
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
                Submit Paper
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

        <section id="about" className="py-20 px-6 relative overflow-hidden">
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {conferenceData.highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  className={`rounded-xl p-6 border shadow-sm hover:shadow-md transition-all duration-300 ${styles.card}`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  viewport={{ once: true }}
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
