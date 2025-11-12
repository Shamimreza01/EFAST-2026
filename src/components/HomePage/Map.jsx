import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import QuantumCircuit from "../BackGround/QuantumCircuit";

export default function Map({ theme, styles }) {
  const mapRef = useRef(null);
  const isInView = useInView(mapRef, { once: true, margin: "-100px" });

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
      <QuantumCircuit />
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
            Conference <span className={styles.accent}>Venues</span>
          </motion.h2>
          <motion.p
            className={`text-xl md:text-2xl ${styles.textSecondary} max-w-3xl mx-auto leading-relaxed`}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Join us at both locations for a truly international hybrid
            experience
          </motion.p>
        </motion.div>

        {/* Dual Maps Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* PUST Map */}
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

            <div className="relative rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1932.5961956933425!2d89.2783056952526!3d24.013338722811053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe84f0ec23a72b%3A0x775d6cd53cbdad8b!2sPabna%20University%20of%20Science%20and%20Technology!5e0!3m2!1sen!2sbd!4v1762542161541!5m2!1sen!2sbd"
                width="100%"
                height="400"
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

          {/* UniMAP Map */}
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
                theme === "light"
                  ? "border-purple-500/20"
                  : "border-purple-400/20"
              }`}
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            />

            <div className="relative rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1930.5194766740299!2d100.35100274401293!3d6.460448487237271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304ca358dcb2b3fd%3A0x8ed2c725d247c7e!2sUniversiti%20Malaysia%20Perlis%20(UniMAP)!5e0!3m2!1sen!2sbd!4v1762986359228!5m2!1sen!2sbd"
                width="100%"
                height="400"
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
                      theme === "light" ? "bg-purple-500" : "bg-purple-400"
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
                      theme === "light"
                        ? "border-purple-500"
                        : "border-purple-400"
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
                </div>
              </motion.div>
            </div>

            {/* Map Overlay Info */}
            <motion.div
              className={`absolute bottom-4 left-4 right-4 p-4 rounded-xl backdrop-blur-md border ${
                theme === "light"
                  ? "bg-white/90 border-purple-200"
                  : "bg-gray-900/90 border-purple-500/20"
              } shadow-lg`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <div className="flex items-center space-x-3">
                <div
                  className={`p-2 rounded-lg ${
                    theme === "light"
                      ? "bg-purple-100 text-purple-600"
                      : "bg-purple-500/20 text-purple-400"
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
                    Universiti Malaysia Perlis (UniMAP)
                  </h3>
                  <p className={`text-sm ${styles.textSecondary}`}>
                    Perlis, Malaysia
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Venue Details */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* PUST Details */}
          <motion.div
            className={`p-8 rounded-2xl border-2 shadow-xl transition-all duration-300 ${
              theme === "light"
                ? "border-blue-500/30 bg-gradient-to-br from-blue-50 to-indigo-50"
                : "border-cyan-500/30 bg-gradient-to-br from-cyan-900/20 to-blue-900/20"
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
                className={`p-4 rounded-xl ${
                  theme === "light"
                    ? "bg-blue-100 text-blue-600"
                    : "bg-cyan-500/20 text-cyan-400"
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
                <h3 className={`text-3xl font-bold mb-4 ${styles.accent}`}>
                  PUST Campus
                </h3>
                <h4 className={`text-xl font-semibold mb-4 ${styles.text}`}>
                  Pabna University of Science and Technology
                </h4>
                <p
                  className={`mb-6 ${styles.textSecondary} leading-relaxed text-lg`}
                >
                  The primary venue for EFAST 2026, featuring state-of-the-art
                  facilities and comfortable learning environments for all
                  conference activities in Bangladesh.
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
                    <span className={`text-lg ${styles.textSecondary}`}>
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
                    <span className={`text-lg ${styles.textSecondary}`}>
                      June 27-28, 2026
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* UniMAP Details */}
          <motion.div
            className={`p-8 rounded-2xl border-2 shadow-xl transition-all duration-300 ${
              theme === "light"
                ? "border-purple-500/30 bg-gradient-to-br from-purple-50 to-pink-50"
                : "border-purple-500/30 bg-gradient-to-br from-purple-900/20 to-pink-900/20"
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
                className={`p-4 rounded-xl ${
                  theme === "light"
                    ? "bg-purple-100 text-purple-600"
                    : "bg-purple-500/20 text-purple-400"
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
                <h3 className={`text-3xl font-bold mb-4 ${styles.accent}`}>
                  UniMAP Campus
                </h3>
                <h4 className={`text-xl font-semibold mb-4 ${styles.text}`}>
                  Universiti Malaysia Perlis
                </h4>
                <p
                  className={`mb-6 ${styles.textSecondary} leading-relaxed text-lg`}
                >
                  Our esteemed international partner contributing to the global
                  perspective and academic excellence of EFAST 2026 with
                  simultaneous hosting in Malaysia.
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
                    <span className={`text-lg ${styles.textSecondary}`}>
                      Perlis, Malaysia
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
                    <span className={`text-lg ${styles.textSecondary}`}>
                      June 27-28, 2026
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Conference Mode Notice */}
        <motion.div
          className={`mt-12 p-6 rounded-2xl text-center ${
            theme === "light"
              ? "bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200"
              : "bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-cyan-500/20"
          }`}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <h3 className={`text-2xl font-bold mb-4 ${styles.accent}`}>
            Hybrid Conference Experience
          </h3>
          <p className={`text-lg ${styles.textSecondary} max-w-4xl mx-auto`}>
            EFAST 2026 is a truly international hybrid conference. Attend
            in-person at either
            <span className={`font-semibold ${styles.accent}`}>
              {" "}
              PUST, Bangladesh
            </span>{" "}
            or
            <span className={`font-semibold ${styles.accent}`}>
              {" "}
              UniMAP, Malaysia
            </span>
            , or join us online from anywhere in the world. All sessions will be
            synchronized across both physical venues.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
