import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import MoonIcon from "../Icon/MoonIcon";
import SunIcon from "../Icon/SunIcon";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import MobileMenuIcon from "./MobileMenuIcon";
import MobileUniversityLogo from "./MobileUniversityLogo";
import UniversityLogoWithText from "./UniversityLogoWithText";
const Navigation = ({ theme, setTheme, styles, confData, containerRef }) => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [speakersOpen, setSpeakersOpen] = useState(false);
  const [committeeOpen, setCommitteeOpen] = useState(false);
  const [mobileSpeakersOpen, setMobileSpeakersOpen] = useState(false);
  const [mobileCommitteeOpen, setMobileCommitteeOpen] = useState(false);
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
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    localStorage.setItem("conference-theme", newTheme);
    setTheme(newTheme);
  };

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
      <div className="max-w-full mx-auto flex justify-evenly items-center">
        <div className="hidden md:block">
          <UniversityLogoWithText styles={styles} confData={confData} />
        </div>
        <div className="md:hidden">
          <MobileUniversityLogo styles={styles} confData={confData} />
        </div>

        <div className="flex items-center gap-3  md:gap-6">
          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            className={`p-2 ml-10 rounded-full ${
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
          <DesktopMenu
            speakersOpen={speakersOpen}
            setSpeakersOpen={setSpeakersOpen}
            committeeOpen={committeeOpen}
            setCommitteeOpen={setCommitteeOpen}
            menuItems={menuItems}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            theme={theme}
            styles={styles}
            confData={confData}
          />

          {/* Mobile Menu Button */}
          <MobileMenuIcon
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            theme={theme}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        menuItems={menuItems}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        theme={theme}
        styles={styles}
        mobileSpeakersOpen={mobileSpeakersOpen}
        setMobileSpeakersOpen={setMobileSpeakersOpen}
        mobileCommitteeOpen={mobileCommitteeOpen}
        setMobileCommitteeOpen={setMobileCommitteeOpen}
      />
    </motion.nav>
  );
};

export default Navigation;
