import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Map({ theme, styles }) {
  const mapRef = useRef(null);
  const isInView = useInView(mapRef, { once: true, margin: "-100px" });

  // Map location data
  const locations = [
    {
      name: "Pabna University of Science and Technology",
      address: "Pabna, Bangladesh",
      coordinates: { lat: 24.013339, lng: 89.280454 },
      type: "university",
    },
    {
      name: "UniMAP Collaboration",
      address: "Universiti Malaysia Perlis, Malaysia",
      coordinates: { lat: 6.465422, lng: 100.279369 },
      type: "collaboration",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const mapVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const pulseVariants = {
    initial: { scale: 1, opacity: 1 },
    pulse: {
      scale: [1, 1.1, 1],
      opacity: [1, 0.8, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section id="venue" className="py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-blue-500 rounded-lg"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 border-2 border-purple-500 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 border-2 border-cyan-500 rotate-45"></div>
      </div>

      <div className="max-w-7xl mx-auto" ref={mapRef}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className={`text-5xl md:text-6xl font-bold mb-6 ${styles.text}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Conference <span className={styles.accent}>Venue</span>
          </motion.h2>
          <motion.p
            className={`text-xl md:text-2xl ${styles.textSecondary} max-w-3xl mx-auto leading-relaxed`}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Join us at Pabna University of Science and Technology, in
            collaboration with UniMAP Malaysia
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map Container */}
          <motion.div
            className="relative rounded-2xl overflow-hidden shadow-2xl"
            variants={mapVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            {/* Animated Border */}
            <motion.div
              className={`absolute inset-0 rounded-2xl border-2 ${
                theme === "light" ? "border-blue-500/20" : "border-cyan-500/20"
              }`}
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            {/* Map Iframe */}
            <div className="relative rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1932.5961956933425!2d89.2783056952526!3d24.013338722811053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe84f0ec23a72b%3A0x775d6cd53cbdad8b!2sPabna%20University%20of%20Science%20and%20Technology!5e0!3m2!1sen!2sbd!4v1762542161541!5m2!1sen!2sbd"
                width="100%"
                height="450"
                style={{
                  border: 0,
                  filter:
                    theme === "dark"
                      ? "invert(90%) hue-rotate(180deg)"
                      : "none",
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl"
              />

              {/* Animated Location Marker */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                variants={pulseVariants}
                initial="initial"
                animate="pulse"
              >
                <div className="relative">
                  <motion.div
                    className={`w-8 h-8 rounded-full ${
                      theme === "light" ? "bg-red-500" : "bg-cyan-400"
                    } shadow-lg`}
                    whileHover={{ scale: 1.2 }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </motion.div>

                  {/* Pulse Rings */}
                  <motion.div
                    className={`absolute inset-0 border-2 ${
                      theme === "light" ? "border-red-500" : "border-cyan-400"
                    } rounded-full`}
                    animate={{
                      scale: [1, 2, 1],
                      opacity: [1, 0, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                  />
                  <motion.div
                    className={`absolute inset-0 border-2 ${
                      theme === "light" ? "border-red-500" : "border-cyan-400"
                    } rounded-full`}
                    animate={{
                      scale: [1, 3, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeOut",
                      delay: 1,
                    }}
                  />
                </div>
              </motion.div>
            </div>

            {/* Map Overlay Info */}
            <motion.div
              className={`absolute bottom-4 left-4 right-4 p-4 rounded-xl backdrop-blur-md border ${
                theme === "light"
                  ? "bg-white/90 border-blue-200"
                  : "bg-gray-900/90 border-cyan-500/20"
              } shadow-lg`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="flex items-center space-x-3">
                <div
                  className={`p-2 rounded-lg ${
                    theme === "light"
                      ? "bg-blue-100 text-blue-600"
                      : "bg-cyan-500/20 text-cyan-400"
                  }`}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className={`font-bold ${styles.text}`}>
                    Pabna University of Science & Technology
                  </h3>
                  <p className={`text-sm ${styles.textSecondary}`}>
                    Pabna, Bangladesh
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Location Details */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Main Venue */}
            <motion.div
              className={`p-6 rounded-2xl border-2 shadow-lg transition-all duration-300 ${
                theme === "light"
                  ? "border-blue-500/30 bg-linear-to-br from-blue-50 to-indigo-50"
                  : "border-cyan-500/30 bg-linear-to-br from-cyan-900/20 to-blue-900/20"
              }`}
              variants={itemVariants}
              whileHover={{
                y: -5,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              <div className="flex items-start space-x-4">
                <motion.div
                  className={`p-3 rounded-xl ${
                    theme === "light"
                      ? "bg-blue-100 text-blue-600"
                      : "bg-cyan-500/20 text-cyan-400"
                  }`}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
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
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </motion.div>
                <div className="flex-1">
                  <h3 className={`text-2xl font-bold mb-2 ${styles.accent}`}>
                    Main Venue
                  </h3>
                  <h4 className={`text-xl font-semibold mb-2 ${styles.text}`}>
                    Pabna University of Science and Technology
                  </h4>
                  <p className={`mb-4 ${styles.textSecondary} leading-relaxed`}>
                    The primary venue for EFAST 2026, featuring state-of-the-art
                    facilities and comfortable learning environments for all
                    conference activities.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <svg
                        className={`w-4 h-4 ${styles.accent}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                      </svg>
                      <span className={styles.textSecondary}>
                        Pabna, Bangladesh
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <svg
                        className={`w-4 h-4 ${styles.accent}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className={styles.textSecondary}>
                        November 15-17, 2026
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Collaboration Partner */}
            <motion.div
              className={`p-6 rounded-2xl border-2 shadow-lg transition-all duration-300 ${styles.card}`}
              variants={itemVariants}
              whileHover={{
                y: -5,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              <div className="flex items-start space-x-4">
                <motion.div
                  className={`p-3 rounded-xl ${
                    theme === "light"
                      ? "bg-purple-100 text-purple-600"
                      : "bg-purple-500/20 text-purple-400"
                  }`}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
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
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
                    />
                  </svg>
                </motion.div>
                <div className="flex-1">
                  <h3 className={`text-2xl font-bold mb-2 ${styles.accent}`}>
                    Collaboration Partner
                  </h3>
                  <h4 className={`text-xl font-semibold mb-2 ${styles.text}`}>
                    Universiti Malaysia Perlis (UniMAP)
                  </h4>
                  <p className={`mb-4 ${styles.textSecondary} leading-relaxed`}>
                    Our esteemed international partner contributing to the
                    global perspective and academic excellence of EFAST 2026.
                  </p>
                  <div className="flex items-center space-x-2">
                    <svg
                      className={`w-4 h-4 ${styles.accent}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                    </svg>
                    <span className={styles.textSecondary}>
                      Perlis, Malaysia
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Actions */}
            {/* <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              variants={itemVariants}
            >
              <motion.button
                className={`flex-1 px-6 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-3 ${
                  theme === "light"
                    ? "bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover:shadow-xl"
                    : "bg-cyan-500 hover:bg-cyan-600 text-white shadow-lg hover:shadow-xl"
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
                <span>Get Directions</span>
              </motion.button>

              <motion.button
                className={`flex-1 px-6 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-3 ${
                  theme === "light"
                    ? "border-2 border-blue-500 text-blue-600 hover:bg-blue-50"
                    : "border-2 border-cyan-400 text-cyan-400 hover:bg-gray-800"
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>Contact Venue</span>
              </motion.button>
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
