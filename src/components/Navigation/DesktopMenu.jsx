import { AnimatePresence, motion } from "framer-motion";
import SocialMediaLink from "./SocialMediaLink";

export default function DesktopMenu({
  menuItems,
  activeSection,
  setActiveSection,
  theme,
  styles,
  confData,
  speakersOpen,
  setSpeakersOpen,
  committeeOpen,
  setCommitteeOpen,
}) {
  return (
    <div className="hidden md:flex flex-wrap items-center justify-evenly gap-4">
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
                          setActiveSection("technical-program-committee");
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
          className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${styles.buttonPrimary}`}
        >
          Abstract Submission
        </a>
      </div>
      <SocialMediaLink theme={theme} confData={confData} />
    </div>
  );
}
