export default function SpeakersSection({
  conferenceData,
  theme,
  styles,
  DNAHelix,
  motion,
}) {
  return (
    <section
      id="speakers"
      className={`py-20 px-6 relative overflow-hidden ${styles.sectionAlt}`}
    >
      <DNAHelix size={300} />
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Featured <span className={styles.accent}>Speakers</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {conferenceData.speakers.map((speaker, index) => (
            <motion.div
              key={speaker.name}
              className={`rounded-xl p-6 border shadow-sm hover:shadow-md transition-all ${styles.card}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div
                className={`w-20 h-20 rounded-full mb-4 mx-auto flex items-center justify-center text-white font-bold text-xl ${
                  theme === "light"
                    ? "bg-gradient-to-r from-blue-500 to-purple-600"
                    : "bg-gradient-to-r from-cyan-500 to-blue-600"
                }`}
              >
                {speaker.image}
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">
                {speaker.name}
              </h3>
              <p className={`text-center mb-2 ${styles.accent}`}>
                {speaker.title}
              </p>
              <p className={`text-sm text-center ${styles.textSecondary}`}>
                {speaker.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
