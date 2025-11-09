import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const ProfessionalGallery = ({ theme = "light", styles }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [loadedImages, setLoadedImages] = useState({});
  const [activeCategory, setActiveCategory] = useState("all");

  // Gallery images - replace with your actual PUST images
  const galleryImages = [
    {
      id: 1,
      src: "/pust_ele_rainyNight.jpg",
      alt: "PUST Electrical Building at Night",
      category: "campus",
    },
    {
      id: 2,
      src: "/pust01.jpg",
      alt: "PUST Campus Aerial View",
      category: "campus",
    },
    {
      id: 3,
      src: "/pust02.jpg",
      alt: "PUST Library Interior",
      category: "campus",
    },
    {
      id: 4,
      src: "/pust03.jpg",
      alt: "Science Fair at PUST",
      category: "events",
    },
    {
      id: 5,
      src: "/pust04.jpg",
      alt: "PUST Conference Room",
      category: "conference",
    },
    {
      id: 6,
      src: "/pust05.jpg",
      alt: "PUST Laboratory",
      category: "research",
    },
    {
      id: 7,
      src: "/pust06.jpg",
      alt: "Student Presentation at PUST",
      category: "events",
    },
    {
      id: 8,
      src: "/pust07.jpg",
      alt: "PUST Auditorium",
      category: "conference",
    },
    {
      id: 9,
      src: "/pust08.jpg",
      alt: "PUST Research Lab",
      category: "research",
    },
    {
      id: 10,
      src: "/pust09.jpg",
      alt: "PUST Conference Hall",
      category: "conference",
    },
    {
      id: 11,
      src: "/pust10.jpg",
      alt: "PUST Outdoor Event",
      category: "events",
    },
    {
      id: 12,
      src: "/pust11.jpg",
      alt: "PUST Campus at Night",
      category: "campus",
    },
    {
      id: 13,
      src: "/pust12.jpg",
      alt: "PUST Research Presentation",
      category: "research",
    },
    {
      id: 14,
      src: "/pust13.jpg",
      alt: "PUST Innovation Lab",
      category: "research",
    },
  ];

  const categories = [
    { id: "all", name: "All", count: galleryImages.length },
    {
      id: "campus",
      name: "Campus",
      count: galleryImages.filter((img) => img.category === "campus").length,
    },
    {
      id: "events",
      name: "Events",
      count: galleryImages.filter((img) => img.category === "events").length,
    },
    {
      id: "research",
      name: "Research",
      count: galleryImages.filter((img) => img.category === "research").length,
    },
    {
      id: "conference",
      name: "Conference",
      count: galleryImages.filter((img) => img.category === "conference")
        .length,
    },
  ];

  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const handleImageLoad = (id) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;

      if (e.key === "Escape") setSelectedImage(null);
      if (e.key === "ArrowRight") navigateImage(1);
      if (e.key === "ArrowLeft") navigateImage(-1);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  const navigateImage = (direction) => {
    const currentIndex = filteredImages.findIndex(
      (img) => img.id === selectedImage.id
    );
    let newIndex;

    if (direction === 1) {
      newIndex =
        currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    } else {
      newIndex =
        currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    }

    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white "></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Conference <span className={styles.accent}>Gallery</span>
          </motion.h2>
          <motion.p
            className={`text-lg md:text-xl max-w-2xl mx-auto ${styles.textSecondary}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Capturing moments from Pabna University of Science and Technology
          </motion.p>
        </motion.div>

        {/* Filter Tabs - Minimal */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                activeCategory === category.id
                  ? theme === "light"
                    ? "bg-blue-500 text-white shadow-md"
                    : "bg-cyan-500 text-white shadow-md"
                  : theme === "light"
                  ? "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  : "text-gray-400 hover:text-white hover:bg-gray-700"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Masonry Grid Gallery */}
        <motion.div
          className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4"
          layout
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              className="break-inside-avoid mb-4 group relative cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedImage(image)}
              layout
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-700">
                {/* Loading Skeleton */}
                {!loadedImages[image.id] && (
                  <div className="w-full h-64 bg-gray-300 dark:bg-gray-600 animate-pulse rounded-lg"></div>
                )}

                {/* Image */}
                <motion.img
                  src={image.src}
                  alt={image.alt}
                  className={`w-full h-auto rounded-lg transition-all duration-700 ${
                    loadedImages[image.id]
                      ? "opacity-100 group-hover:scale-105"
                      : "opacity-0"
                  }`}
                  onLoad={() => handleImageLoad(image.id)}
                  style={{ display: loadedImages[image.id] ? "block" : "none" }}
                />

                {/* Hover Overlay */}
                <motion.div
                  className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 rounded-lg flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <motion.div
                    className="opacity-0 group-hover:opacity-100 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3-3H7"
                        />
                      </svg>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Gallery Stats */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p
            className={`text-sm uppercase tracking-wider ${styles.textSecondary} mb-2`}
          >
            {filteredImages.length} Images
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <motion.button
              className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/20 transition-all"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelectedImage(null)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </motion.button>

            {/* Image Counter */}
            <div className="absolute top-6 left-6 z-10 text-white/80 text-sm">
              {filteredImages.findIndex((img) => img.id === selectedImage.id) +
                1}{" "}
              / {filteredImages.length}
            </div>

            {/* Navigation Buttons */}
            <motion.button
              className="absolute left-6 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/20 transition-all"
              whileHover={{ scale: 1.1, x: -2 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                navigateImage(-1);
              }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </motion.button>

            <motion.button
              className="absolute right-6 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/20 transition-all"
              whileHover={{ scale: 1.1, x: 2 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                navigateImage(1);
              }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.button>

            {/* Main Image */}
            <motion.div
              className="relative max-w-6xl max-h-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                key={selectedImage.id}
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Image Info */}
              <motion.div
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <p className="text-white text-sm">
                  Image {selectedImage.id} of {galleryImages.length}
                </p>
              </motion.div>
            </motion.div>

            {/* Keyboard Hint */}
            <motion.div
              className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white/60 text-xs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Use ← → keys to navigate • ESC to close
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProfessionalGallery;
