import { AnimatePresence, motion } from "framer-motion";
export default function MobileMenu({
  isMenuOpen,
  setIsMenuOpen,
  menuItems,
  activeSection,
  setActiveSection,
  theme,
  styles,
  mobileSpeakersOpen,
  setMobileSpeakersOpen,
  mobileCommitteeOpen,
  setMobileCommitteeOpen,
}) {
  return (
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
                      onClick={() => setMobileSpeakersOpen(!mobileSpeakersOpen)}
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
                              activeSection === "technical-program-committee"
                                ? styles.accent
                                : styles.textSecondary
                            }`}
                            onClick={() => {
                              setActiveSection("technical-program-committee");
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
  );
}
