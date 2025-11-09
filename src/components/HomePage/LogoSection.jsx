import { motion, useInView } from "framer-motion";
import { useRef } from "react";
export default function LogoSection() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  return (
    <div ref={heroRef}>
      <div className="flex flex-col sm:flex-row items-center justify-evenly space-y-6 sm:space-y-0">
        <motion.div
          className="flex-col items-center justify-between space-y-3"
          initial={{ opacity: 0, x: -50 }}
          animate={isHeroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src="/pust_logo.png"
            alt="Pabna University Logo"
            className="w-18 h-18 sm:w-12 sm:h-12 lg:h-20 lg:w-20"
          />
          <motion.div className="text-lg font-semibold">PUST</motion.div>
        </motion.div>

        {/* Conference Logo */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, scale: 0 }}
          animate={
            isHeroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
          }
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img
            src="/EFAST_logo.png"
            alt="EFAST Logo"
            className="w-18 h-18 sm:w-12 sm:h-12 lg:h-40 lg:w-40"
          />
        </motion.div>

        {/* Universiti of Malaysia */}
        <motion.div
          className="flex-col items-center space-x-3"
          initial={{ opacity: 0, x: 50 }}
          animate={isHeroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src="/UniMAP_logo.png"
            alt="Universiti of Malaysia Logo"
            className="w-18 h-18 sm:w-12 sm:h-12 lg:h-20 lg:w-40"
          />
          <motion.div className="text-lg font-semibold">UniMAP</motion.div>
        </motion.div>
      </div>
    </div>
  );
}
