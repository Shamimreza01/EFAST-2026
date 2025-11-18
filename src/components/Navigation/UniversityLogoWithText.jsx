import { motion } from "framer-motion";
const UniversityLogoWithText = ({ styles, confData }) => (
  <motion.div
    className="flex items-center space-x-3"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <img
      src="/EFAST_logo.JPG"
      alt="EFAST 2026 Logo"
      className="h-14 w-14 rounded-full  shadow-sm"
    />
    <div className="flex flex-col">
      <motion.span
        className={`text-lg font-bold tracking-wider ${styles.text}`}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {confData.conference.short_name}
      </motion.span>
      <motion.span
        className={`text-xs font-medium tracking-wide ${styles.textSecondary} mt-1`}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        PUST and UniMAP
      </motion.span>
    </div>
  </motion.div>
);

export default UniversityLogoWithText;
