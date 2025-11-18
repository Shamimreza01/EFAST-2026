import { motion } from "framer-motion";
import OverviewTextBox from "./OverviewTextBox";
import QuickFacts from "./QuickFacts";
export default function OverviewSection({ theme, styles, confData }) {
  return (
    <section id="overview" className="py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-blue-500 rounded-full"></div>
        <div className="absolute bottom-32 right-20 w-24 h-24 border-2 border-purple-500 rotate-45"></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 border-2 border-cyan-500 rounded-lg"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Conference <span className={styles.accent}>Overview</span>
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          <motion.p
            className={`text-xl md:text-2xl ${styles.textSecondary} max-w-3xl mx-auto`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Discover the Premier Platform for Advanced Sciences & Technologies
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <OverviewTextBox theme={theme} styles={styles} confData={confData} />
          <QuickFacts theme={theme} styles={styles} />
        </div>
      </div>
    </section>
  );
}
