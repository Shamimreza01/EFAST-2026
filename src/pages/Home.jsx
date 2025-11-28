import { useContext, useRef, useState } from "react";
import SEO from "../components/SEO";
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
      <SEO
        title="Home"
        description="EFAST 2026 – International Conference on Emerging Frontiers in Advanced Sciences and Technologies. Join global researchers on 27–28 June 2026."
        keywords="EFAST 2026, Conference, Science, Technology, PUST, UniMAP"
        url="https://efast.pust.ac.bd/"
        image="/EFAST.jpg"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Event",
          name: "EFAST 2026",
          description:
            "International Conference on Emerging Frontiers in Advanced Sciences and Technologies",
          startDate: "2026-06-27",
          endDate: "2026-06-28",
          eventStatus: "https://schema.org/EventScheduled",
          eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
          location: [
            {
              "@type": "Place",
              name: "Pabna University of Science and Technology (PUST)",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Pabna",
                addressCountry: "BD",
              },
            },
            {
              "@type": "Place",
              name: "Universiti Malaysia Perlis (UniMAP)",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Perlis",
                addressCountry: "MY",
              },
            },
          ],
          image: ["https://efast.pust.ac.bd/EFAST.jpg"],
          organizer: [
            {
              "@type": "Organization",
              name: "Pabna University of Science and Technology",
              url: "https://pust.ac.bd",
            },
            {
              "@type": "Organization",
              name: "Universiti Malaysia Perlis",
              url: "https://unimap.edu.my",
            },
          ],
        }}
      />
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
