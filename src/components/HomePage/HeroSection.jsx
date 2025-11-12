import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import confData from "../../data/confData.js";
// import conferenceData from "../../data/data.js";
import galleryImages from "../../data/GalleryImages.js";
import ParticleBackground from "../BackGround/ParticleBackground.jsx";
import QuantumCircuit from "../BackGround/QuantumCircuit";
import ScrollIndicator from "../BackGround/ScrollIndicator.jsx";
import ActionButtons from "./ActionButtons.jsx";
import DateAndMode from "./DateAndMode.jsx";
import ImportantDates from "./ImportantDates.jsx";
import OrganizedBy from "./OrganizedBy.jsx";

const HeroSection = ({ theme, styles }) => {
  console.log(confData);
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
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
      <ParticleBackground />
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
        className="text-center p-3  rounded-3xl z-10 max-w-4xl mx-auto md:mb-25"
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
          {conferenceData.name}
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
            {conferenceData.short_name}
          </span>
        </motion.h1>

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
