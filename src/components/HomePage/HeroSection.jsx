import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import confData from "../../data/confData.js";
<<<<<<< HEAD
// import conferenceData from "../../data/data.js";
=======
import conferenceData from "../../data/data.js";
>>>>>>> redesign
import galleryImages from "../../data/GalleryImages.js";
import ParticleBackground from "../BackGround/ParticleBackground.jsx";
import QuantumCircuit from "../BackGround/QuantumCircuit";
import ScrollIndicator from "../BackGround/ScrollIndicator.jsx";
<<<<<<< HEAD
import ActionButtons from "./ActionButtons.jsx";
=======
import LocationIcon from "../Icon/LocationIcon.jsx";
>>>>>>> redesign
import DateAndMode from "./DateAndMode.jsx";
import ImportantDates from "./ImportantDates.jsx";
import OrganizedBy from "./OrganizedBy.jsx";

const HeroSection = ({ theme, styles }) => {
  console.log(confData);
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
<<<<<<< HEAD
  const conferenceData = confData.conference;
  // const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCurrentImageIndex(
  //       (prevIndex) => (prevIndex + 1) % galleryImages.length
  //     );
  //   }, 5000);
  //   return () => clearInterval(timer);
  // }, []);
=======
>>>>>>> redesign

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

      <div className="sm:grid hidden grid-cols-2 sm:grid-cols-15 gap-0 mt-12 border-blue-300 border-2 rounded-b-lg overflow-hidden mx-0 my-0">
        {galleryImages.map((image) => (
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
      <motion.div
<<<<<<< HEAD
        className="text-center p-3  rounded-3xl z-10 max-w-4xl mx-auto md:mb-25"
=======
        className="text-center p-2  rounded-3xl z-10 max-w-4xl mx-auto md:mb-25"
>>>>>>> redesign
        initial={{ opacity: 0, y: 50 }}
        animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
      >
        <motion.p
          className={`text-md md:text-2xl mb-2  font-semibold text-[#6a0000] ${styles.textSecondary}`}
          initial={{ opacity: 0 }}
          animate={isHeroInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
<<<<<<< HEAD
          {conferenceData.name}
=======
          {confData.conference.name}
>>>>>>> redesign
        </motion.p>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            isHeroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
          }
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span
            className={`bg-clip-text text-transparent bg-linear-to-r ${styles.accentGradient}`}
          >
<<<<<<< HEAD
            {conferenceData.short_name}
          </span>
        </motion.h1>
=======
            {confData.conference.short_name}
          </span>
        </motion.h1>
        <DateAndMode
          theme={theme}
          styles={styles}
          isHeroInView={isHeroInView}
        />

        <p
          className={`text-lg md:text-xl mt-15 cursor-pointer ${styles.textSecondary}`}
        >
          <span onClick={handleGalleryClick}>
            <LocationIcon className="w-6 h-6 inline-block  mr-1" />
            {conferenceData.location}
          </span>
        </p>
        <p className={`text-lg md:text-xl ${styles.textSecondary}`}>and</p>
        <p
          className={`text-lg md:text-xl cursor-pointer ${styles.textSecondary}`}
        >
          <LocationIcon className="w-6 h-6 inline-block  mr-1" />
          {conferenceData.location2}
        </p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
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
>>>>>>> redesign

        <DateAndMode
          conferenceData={conferenceData}
          styles={styles}
          theme={theme}
          isHeroInView={isHeroInView}
        />
        <OrganizedBy
          theme={theme}
          styles={styles}
          isHeroInView={isHeroInView}
          handleGalleryClick={handleGalleryClick}
        />
        <ActionButtons
          theme={theme}
          styles={styles}
          isHeroInView={isHeroInView}
        />
      </motion.div>

      {/* Important Dates Section */}
      <ImportantDates theme={theme} styles={styles} />

      {/* Scroll Indicator */}
      <ScrollIndicator theme={theme} styles={styles} />
    </section>
  );
};
export default HeroSection;
