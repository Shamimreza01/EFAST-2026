import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Map({ theme, styles }) {
  const mapRef = useRef(null);
  const isInView = useInView(mapRef, { once: true, margin: "-100px" });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const mapVariants = {
    hidden: { opacity: 0, scale: 0.9 },
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
      opacity: [1, 0.7, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section id="venue" className="py-20 px-6 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 border-2 border-blue-500 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-32 left-32 w-24 h-24 border-2 border-purple-500 rotate-45"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-20 h-20 border-2 border-cyan-500 rounded-lg"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto" ref={mapRef}>
        {/* Enhanced Section Header - Left Aligned */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className={`text-5xl md:text-6xl font-bold mb-6 ${styles.text}`}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Conference <span className={styles.accent}>Venue</span>
          </motion.h2>
          <motion.p
            className={`text-xl text-center mx-auto md:text-2xl ${styles.textSecondary} max-w-4xl leading-relaxed`}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Join us at Pabna University of Science and Technology, in
            collaboration with Universiti Malaysia Perlis (UniMAP)
          </motion.p>
        </motion.div>

        {/* Main Content - TEXT BOXES LEFT, MAPS RIGHT */}
        <motion.div
          className="max-w-6xl"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Pabna University Section */}
          <motion.div className="mb-16" variants={itemVariants}>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-start">
              {/* Text Box - LEFT */}
              <motion.div
                className={`p-8 rounded-3xl border-2 shadow-2xl transition-all duration-300 h-full flex flex-col justify-center ${
                  theme === "light"
                    ? "border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-100"
                    : "border-cyan-500/30 bg-gradient-to-br from-gray-900/80 to-blue-900/40"
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
                    className={`p-4 rounded-2xl ${
                      theme === "light"
                        ? "bg-blue-100 text-blue-600 shadow-lg"
                        : "bg-cyan-500/20 text-cyan-400 shadow-lg"
                    }`}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg
                      className="w-8 h-8"
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
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className={`text-3xl font-bold ${styles.accent}`}>
                        Venue 1
                      </h3>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          theme === "light"
                            ? "bg-green-100 text-green-600"
                            : "bg-green-500/20 text-green-400"
                        }`}
                      >
                        Venue 1
                      </span>
                    </div>
                    <h4
                      className={`text-2xl font-semibold mb-4 ${styles.text}`}
                    >
                      Pabna University of Science and Technology
                    </h4>
                    <p
                      className={`mb-6 ${styles.textSecondary} leading-relaxed text-lg`}
                    >
                      The venue 1 for EFAST 2026, featuring state-of-the-art
                      facilities, modern auditoriums, and comfortable learning
                      environments for all conference activities, workshops, and
                      technical sessions.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <svg
                          className={`w-5 h-5 ${styles.accent}`}
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
                      <div className="flex items-center space-x-3">
                        <svg
                          className={`w-5 h-5 ${styles.accent}`}
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
                          June 27-28, 2026
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Map Container - RIGHT */}
              <motion.div
                className="relative rounded-3xl overflow-hidden shadow-2xl"
                variants={mapVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.4 },
                }}
              >
                {/* Animated Border Glow */}
                <motion.div
                  className={`absolute inset-0 rounded-3xl border-4 ${
                    theme === "light"
                      ? "border-blue-400/30"
                      : "border-cyan-400/30"
                  }`}
                  animate={{
                    opacity: [0.2, 0.5, 0.2],
                    scale: [1, 1.02, 1],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                {/* Map Iframe */}
                <div className="relative rounded-3xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1932.5961956933425!2d89.2783056952526!3d24.013338722811053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe84f0ec23a72b%3A0x775d6cd53cbdad8b!2sPabna%20University%20of%20Science%20and%20Technology!5e0!3m2!1sen!2sbd!4v1762542161541!5m2!1sen!2sbd"
                    width="100%"
                    height="400"
                    style={{
                      border: 0,
                      filter:
                        theme === "dark"
                          ? "invert(90%) hue-rotate(180deg) contrast(90%)"
                          : "none",
                    }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-3xl"
                  />

                  {/* Enhanced Animated Location Marker */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    variants={pulseVariants}
                    initial="initial"
                    animate="pulse"
                  >
                    <div className="relative">
                      <motion.div
                        className={`w-12 h-12 rounded-full ${
                          theme === "light" ? "bg-red-500" : "bg-cyan-400"
                        } shadow-2xl flex items-center justify-center`}
                        whileHover={{ scale: 1.3 }}
                        transition={{ duration: 0.3 }}
                      >
                        <svg
                          className="w-6 h-6 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </motion.div>

                      {/* Multiple Pulse Rings */}
                      {[1, 2, 3].map((ring) => (
                        <motion.div
                          key={ring}
                          className={`absolute inset-0 border-2 ${
                            theme === "light"
                              ? "border-red-500"
                              : "border-cyan-400"
                          } rounded-full`}
                          animate={{
                            scale: [1, 1.5 + ring * 0.5, 1],
                            opacity: [0.7, 0, 0.7],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeOut",
                            delay: ring * 0.5,
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>

                  {/* Enhanced Map Overlay Info */}
                  <motion.div
                    className={`absolute bottom-6 left-6 right-6 p-6 rounded-2xl backdrop-blur-lg border ${
                      theme === "light"
                        ? "bg-white/95 border-blue-200 shadow-2xl"
                        : "bg-gray-900/95 border-cyan-500/30 shadow-2xl"
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.6, delay: 1 }}
                  >
                    <div className="flex items-center space-x-4">
                      <motion.div
                        className={`p-3 rounded-xl ${
                          theme === "light"
                            ? "bg-blue-100 text-blue-600"
                            : "bg-cyan-500/20 text-cyan-400"
                        }`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
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
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                        </svg>
                      </motion.div>
                      <div>
                        <h3 className={`font-bold text-lg ${styles.text}`}>
                          Pabna University of Science & Technology
                        </h3>
                        <p className={`text-sm ${styles.textSecondary} mt-1`}>
                          Pabna, Bangladesh • Main Conference Venue
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* UniMAP Section */}
          <motion.div variants={itemVariants}>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-start">
              {/* Text Box - LEFT */}
              <motion.div
                className={`p-8 rounded-3xl border-2 shadow-2xl transition-all duration-300 h-full flex flex-col justify-center ${
                  theme === "light"
                    ? "border-purple-200 bg-gradient-to-br from-purple-50 to-pink-100"
                    : "border-purple-500/30 bg-gradient-to-br from-gray-900/80 to-purple-900/40"
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
                    className={`p-4 rounded-2xl ${
                      theme === "light"
                        ? "bg-purple-100 text-purple-600 shadow-lg"
                        : "bg-purple-500/20 text-purple-400 shadow-lg"
                    }`}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9"
                      />
                    </svg>
                  </motion.div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className={`text-3xl font-bold ${styles.accent}`}>
                        Venue 2
                      </h3>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          theme === "light"
                            ? "bg-purple-100 text-purple-600"
                            : "bg-purple-500/20 text-purple-400"
                        }`}
                      >
                        International Partner
                      </span>
                    </div>
                    <h4
                      className={`text-2xl font-semibold mb-4 ${styles.text}`}
                    >
                      Universiti Malaysia Perlis
                    </h4>
                    <p
                      className={`mb-6 ${styles.textSecondary} leading-relaxed text-lg`}
                    >
                      Our esteemed international partner contributing to the
                      global perspective and academic excellence of EFAST 2026.
                      UniMAP brings cutting-edge research facilities and
                      international collaboration opportunities to the
                      conference.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <svg
                          className={`w-5 h-5 ${styles.accent}`}
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
                </div>
              </motion.div>

              {/* Map Container - RIGHT */}
              <motion.div
                className="relative rounded-3xl overflow-hidden shadow-2xl"
                variants={mapVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.4 },
                }}
              >
                {/* Animated Border Glow */}
                <motion.div
                  className={`absolute inset-0 rounded-3xl border-4 ${
                    theme === "light"
                      ? "border-purple-400/30"
                      : "border-purple-400/30"
                  }`}
                  animate={{
                    opacity: [0.2, 0.5, 0.2],
                    scale: [1, 1.02, 1],
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                />

                {/* Map Iframe */}
                <div className="relative rounded-3xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5177.755044600869!2d100.34905512776221!3d6.459655433906487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304ca358dcb2b3fd%3A0x8ed2c725d247c7e!2sUniversiti%20Malaysia%20Perlis%20(UniMAP)!5e0!3m2!1sen!2sbd!4v1763225632075!5m2!1sen!2sbd"
                    width="100%"
                    height="400"
                    style={{
                      border: 0,
                      filter:
                        theme === "dark"
                          ? "invert(90%) hue-rotate(180deg) contrast(90%)"
                          : "none",
                    }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-3xl"
                  />

                  {/* Enhanced Animated Location Marker */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    variants={pulseVariants}
                    initial="initial"
                    animate="pulse"
                  >
                    <div className="relative">
                      <motion.div
                        className={`w-12 h-12 rounded-full ${
                          theme === "light" ? "bg-purple-500" : "bg-purple-400"
                        } shadow-2xl flex items-center justify-center`}
                        whileHover={{ scale: 1.3 }}
                        transition={{ duration: 0.3 }}
                      >
                        <svg
                          className="w-6 h-6 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </motion.div>

                      {/* Multiple Pulse Rings */}
                      {[1, 2, 3].map((ring) => (
                        <motion.div
                          key={ring}
                          className={`absolute inset-0 border-2 ${
                            theme === "light"
                              ? "border-purple-500"
                              : "border-purple-400"
                          } rounded-full`}
                          animate={{
                            scale: [1, 1.5 + ring * 0.5, 1],
                            opacity: [0.7, 0, 0.7],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeOut",
                            delay: ring * 0.5,
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>

                  {/* Enhanced Map Overlay Info */}
                  <motion.div
                    className={`absolute bottom-6 left-6 right-6 p-6 rounded-2xl backdrop-blur-lg border ${
                      theme === "light"
                        ? "bg-white/95 border-purple-200 shadow-2xl"
                        : "bg-gray-900/95 border-purple-500/30 shadow-2xl"
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.6, delay: 1.2 }}
                  >
                    <div className="flex items-center space-x-4">
                      <motion.div
                        className={`p-3 rounded-xl ${
                          theme === "light"
                            ? "bg-purple-100 text-purple-600"
                            : "bg-purple-500/20 text-purple-400"
                        }`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
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
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                        </svg>
                      </motion.div>
                      <div>
                        <h3 className={`font-bold text-lg ${styles.text}`}>
                          Universiti Malaysia Perlis (UniMAP)
                        </h3>
                        <p className={`text-sm ${styles.textSecondary} mt-1`}>
                          Perlis, Malaysia • International Partner
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
