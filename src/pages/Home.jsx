import { useContext, useRef, useState } from "react";
import BinaryRain from "../components/BackGround/BinaryRain";
import FooterSection from "../components/Footer/FooterSection";
import ProfessionalGallery from "../components/Gallery/GallerySection";
import HeroSection from "../components/HomePage/HeroSection";
import Map from "../components/HomePage/Map";
import OverviewSection from "../components/Overview/OverviewSection";
import ScopesSection from "../components/Scopes/ScopesSection";
import { ThemeContext } from "../context/ThemeContext";
import confData from "../data/confData";

const SciTechConferenceWithTheme = () => {
  const [expandedTrack, setExpandedTrack] = useState(null);

  const containerRef = useRef(null);

  const [theme, setTheme, styles] = useContext(ThemeContext);

  return (
    <div
      ref={containerRef}
      className={`h-screen overflow-y-auto backdrop-blur-sm scroll-smooth transition-colors duration-300 ${styles.bg} ${styles.text}`}
    >
      <BinaryRain />
      <HeroSection theme={theme} styles={styles} />
      <OverviewSection theme={theme} styles={styles} confData={confData} />

      <ScopesSection
        theme={theme}
        setExpandedTrack={setExpandedTrack}
        expandedTrack={expandedTrack}
        confData={confData}
        styles={styles}
      />

      <ProfessionalGallery id="gallery" styles={styles} />
      <Map theme={theme} styles={styles} />

      {/* Footer */}
      <FooterSection styles={styles} confData={confData} />
    </div>
  );
};

export default SciTechConferenceWithTheme;
