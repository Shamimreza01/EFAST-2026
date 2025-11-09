export default function Navigation() {
  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 py-4 px-6  backdrop-blur-md border-b ${styles.nav}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div
          className="text-xl font-bold tracking-wider"
          whileHover={{ scale: 1.05 }}
        >
          <img
            src="/EFAST.jpg"
            alt="EFAST 2026 Logo"
            className="h-10 inline-block mr-2"
          />
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
            {theme === "light" ? <MoonIcon /> : <SunIcon />}
          </motion.button>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menu.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`py-2 px-1 relative font-semibold ${
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
              {menu.map((item) => (
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
}
