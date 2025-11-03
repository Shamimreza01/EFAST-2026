export default function RegistrationSection({ conferenceData, theme, styles }) {
  return (
    <section
      id="register"
      className={`py-20 px-6 relative overflow-hidden ${styles.sectionAlt}`}
    >
      <DNAHelix size={400} />
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.accent}>Register</span> Now
        </motion.h2>

        <motion.div
          className={`rounded-xl p-8 border shadow-sm ${styles.card}`}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className={`block mb-2 ${styles.textSecondary}`}>
                  Full Name
                </label>
                <input
                  type="text"
                  className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:border-transparent ${styles.input}`}
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className={`block mb-2 ${styles.textSecondary}`}>
                  Email
                </label>
                <input
                  type="email"
                  className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:border-transparent ${styles.input}`}
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className={`block mb-2 ${styles.textSecondary}`}>
                  Organization
                </label>
                <input
                  type="text"
                  className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:border-transparent ${styles.input}`}
                  placeholder="Your company or institution"
                />
              </div>
              <div>
                <label className={`block mb-2 ${styles.textSecondary}`}>
                  Ticket Type
                </label>
                <select
                  className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:border-transparent ${styles.input}`}
                >
                  <option>Standard Pass</option>
                  <option>VIP Pass</option>
                  <option>Student Pass</option>
                </select>
              </div>
            </div>

            <div>
              <label className={`block mb-2 ${styles.textSecondary}`}>
                Special Requirements
              </label>
              <textarea
                rows="4"
                className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:border-transparent ${styles.input}`}
                placeholder="Any special requirements or notes"
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className={`w-full py-4 rounded-lg font-semibold text-lg shadow-md ${styles.buttonPrimary}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Complete Registration
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
