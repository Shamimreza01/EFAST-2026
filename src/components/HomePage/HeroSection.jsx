import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import confData from "../../data/confData.js";
import conferenceData from "../../data/data.js";
import galleryImages from "../../data/GalleryImages.js";
import ParticleBackground from "../BackGround/ParticleBackground.jsx";
import QuantumCircuit from "../BackGround/QuantumCircuit";
import ScrollIndicator from "../BackGround/ScrollIndicator.jsx";
import LocationIcon from "../Icon/LocationIcon.jsx";
import DateAndMode from "./DateAndMode.jsx";
import ImportantDates from "./ImportantDates.jsx";
const HeroSection = ({ theme, styles }) => {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  const handleGalleryClick = () => {
    const gallerySection = document.getElementById("gallery");
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen relative flex  items-center flex-wrap justify-center px-2 overflow-hidden lg:pt-5 pt-20"
    >
      <ParticleBackground />
      <QuantumCircuit />
      <div className="sm:grid hidden grid-cols-2 sm:grid-cols-10 gap-0 mt-12 border-blue-300 border-2 rounded-b-lg overflow-hidden mx-0 my-0">
        {galleryImages.slice(9, 19).map((image) => (
          <motion.img
            key={image.id}
            src={image.src}
            alt={image.alt}
            className="object-cover h-full w-full opacity-70 hover:opacity-100 transition-opacity duration-500 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={isHeroInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1 }}
            onClick={handleGalleryClick}
          />
        ))}
      </div>
      <div className="flex min-w-full justify-center lg:justify-center flex-wrap lg:flex-nowrap">
        <motion.div
          className="text-center p-2  rounded-3xl z-10 max-w-full md:max-w-2xl mx-auto md:mb-25 lg:max-w-5xl"
          initial={{ opacity: 0, y: 50 }}
          animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
        >
          <motion.p
            className={`text-md sm:text-xl md:text-2xl lg:text-3xl mb-2 font-semibold text-[#6a0000] ${styles.textSecondary}`}
            initial={{ opacity: 0 }}
            animate={isHeroInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {confData.conference.name}
          </motion.p>
          <motion.h1
            className="text-4xl sm:5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isHeroInView
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span
              className={`bg-clip-text text-transparent bg-linear-to-r ${styles.accentGradient}`}
            >
              {confData.conference.short_name}
            </span>
          </motion.h1>
          <DateAndMode
            theme={theme}
            styles={styles}
            isHeroInView={isHeroInView}
          />
          <motion.div
            className="mt-10 lg:mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={
              isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {/* Organized By Header */}
            <motion.p
              className={`text-xl md:text-2xl font-semibold text-center mb-6 ${styles.accent} flex items-center justify-center gap-3`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                isHeroInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.9 }
              }
              transition={{ duration: 0.6, delay: 1.3 }}
            >
              <svg
                className="w-7 h-7"
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
              Organized By
            </motion.p>

            <div className="inline-block text-center">
              <button
                onClick={handleGalleryClick}
                className={`flex items-center text-center text-lg md:text-xl font-medium cursor-pointer transition-colors hover:text-blue-700 ${styles.textSecondary}`}
              >
                <LocationIcon className="w-6 h-6 mr-2" />
                {conferenceData.location}
              </button>

              <span className={` text-lg md:text-xl ${styles.textSecondary}`}>
                and
              </span>

              <div className="flex items-center text-center text-lg md:text-xl font-medium">
                <LocationIcon className="w-6 h-6 mr-2" />
                <span className={styles.textSecondary}>
                  {conferenceData.location2}
                </span>
              </div>
            </div>
          </motion.div>{" "}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={
              isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 1, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-8 mb-5"
          >
            <motion.button
              className={`px-8 py-3 rounded-full font-semibold text-lg shadow-lg transition-all ${styles.buttonPrimary}`}
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
              className={`px-8 py-3 rounded-full font-semibold text-lg backdrop-blur-sm transition-all ${styles.buttonSecondary}`}
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
        <ImportantDates theme={theme} styles={styles} />
      </div>
      {/* Scroll Indicator */}
      <ScrollIndicator theme={theme} styles={styles} />
    </section>
  );
};
export default HeroSection;
