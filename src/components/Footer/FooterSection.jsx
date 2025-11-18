import { motion } from "framer-motion";
import QuantumCircuit from "../BackGround/QuantumCircuit";
export default function FooterSection({ styles, confData }) {
  return (
    <footer className={`py-12 px-6 border-t relative ${styles.footer}`}>
      <QuantumCircuit />
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            className="flex flex-col items-center md:items-start mb-6 md:mb-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <img
              src="/EFAST_logo.JPG"
              alt="EFAST 2026 Logo"
              className="h-16 w-16 rounded-full border-2 border-gray-300 mb-3"
            />
            <span
              className={`bg-clip-text text-transparent bg-liner-to-r ${styles.accentGradient} text-xl font-bold mb-1`}
            >
              {confData.conference.name}
            </span>
            <span
              className={`text-sm ${styles.textSecondary} text-center md:text-left`}
            >
              Pabna University of Science and Technology
            </span>
          </motion.div>

          <div className="flex space-x-6">
            {["Twitter", "LinkedIn", "Instagram", "YouTube"].map((social) => (
              <motion.a
                key={social}
                href="#"
                className={`${styles.textSecondary} hover:${styles.accent} transition-colors`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Follow us on ${social}`}
              >
                {social}
              </motion.a>
            ))}
          </div>
        </div>

        <motion.div
          className={`mt-8 pt-8 border-t text-center text-sm ${styles.textSecondary}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p>
            © International Conference on Emerging Frontiers in Advanced Science
            and Technology. All rights reserved.
          </p>
          <p className="mt-2">Pabna University of Science and Technology</p>
        </motion.div>
      </div>
    </footer>
  );
}
