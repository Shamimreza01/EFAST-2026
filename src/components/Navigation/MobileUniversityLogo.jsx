import { motion } from "framer-motion";
const MobileUniversityLogo = ({ styles, confData }) => (
  <motion.div
    className="flex items-center space-x-2"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <img
      src="/EFAST_logo.JPG"
      alt="EFAST 2026 Logo"
      className="h-12 w-12 rounded-full shadow-sm"
    />
    <div className="flex flex-col">
      <motion.span
        className={`text-sm font-bold tracking-tight ${styles.text}`}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        EFAST 2026
      </motion.span>
      <motion.span
        className={`text-[10px] font-medium tracking-tight ${styles.textSecondary} mt-0.5`}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        PUST and UniMAP
      </motion.span>
    </div>
  </motion.div>
);
export default MobileUniversityLogo;
