import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import conferenceData from "../../data/data.js";
import galleryImages from "../../data/GalleryImages.js";
import QuantumCircuit from "../BackGround/QuantumCircuit";
import ScrollIndicator from "../BackGround/ScrollIndicator.jsx";
import HandShakeIcon from "../Icon/HandShakeIcon.jsx";
import LocationIcon from "../Icon/LocationIcon.jsx";
import ImportantDates from "./ImportantDates.jsx";
const HeroSection = ({ theme, styles }) => {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  // const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCurrentImageIndex(
  //       (prevIndex) => (prevIndex + 1) % galleryImages.length
  //     );
  //   }, 5000);
  //   return () => clearInterval(timer);
  // }, []);

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
      className="min-h-screen relative flex  items-center flex-wrap justify-center px-6 overflow-hidden lg:pt-5 pt-20"
    >
      {/* <ParticleBackground /> */}
      <QuantumCircuit />
      {/* <motion.img
        key={galleryImages[currentImageIndex].id}
        src={`${galleryImages[currentImageIndex].src}`}
        alt={galleryImages[currentImageIndex].alt}
        className="absolute inset-0 object-cover h-full w-full opacity-100"
        initial={{ opacity: 0 }}
        animate={isHeroInView ? { opacity: 0.5 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      /> */}
      {/*  */}
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
        className="text-center p-5  rounded-3xl z-10 max-w-4xl mx-auto md:mb-25"
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
          {conferenceData.subtitle}
        </motion.p>
        {/* <motion.img
          src="/EFAST_logo.png"
          alt="Conference Logo"
          className="mx-auto mb-4 h-12 md:h-32 w-12 md:w-32"
          initial={{ opacity: 0 }}
          animate={isHeroInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        /> */}
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
            {conferenceData.title}
          </span>
        </motion.h1>
        <p
          className={`text-lg md:text-xl cursor-pointer ${styles.textSecondary}`}
        >
          {conferenceData.date} |{" "}
          <span onClick={handleGalleryClick}>
            <LocationIcon className="w-6 h-6 inline-block  mr-1" />
            {conferenceData.location}
          </span>
        </p>
        <p className={`text-lg md:text-xl ${styles.textSecondary}`}>and</p>
        <p
          className={`text-lg md:text-xl cursor-pointer ${styles.textSecondary}`}
        >
          <HandShakeIcon className="w-6 h-6 inline-block mr-1" />{" "}
          {conferenceData.location2}
        </p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
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

      {/* Scroll Indicator */}
      <ScrollIndicator theme={theme} styles={styles} />
    </section>
  );
};
export default HeroSection;
