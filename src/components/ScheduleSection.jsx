export default function ScheduleSection({ conferenceData, theme, styles }) {
  return (
    <section id="schedule" className="py-20 px-6 relative overflow-hidden">
      <QuantumCircuit />
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Conference <span className={styles.accent}>Schedule</span>
        </motion.h2>

        <div className="space-y-12">
          {conferenceData.schedule.map((day, dayIndex) => (
            <motion.div
              key={day.day}
              className={`rounded-xl p-6 border shadow-sm ${styles.card}`}
              initial={{ opacity: 0, x: dayIndex % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: dayIndex * 0.2 }}
            >
              <div className="flex items-center mb-6">
                <h3 className={`text-2xl font-bold mr-4 ${styles.accent}`}>
                  {day.day}
                </h3>
                <span
                  className={
                    theme === "light" ? "text-purple-600" : "text-purple-400"
                  }
                >
                  {day.theme}
                </span>
              </div>

              <div className="space-y-4">
                {day.events.map((event, eventIndex) => (
                  <motion.div
                    key={event.time}
                    className={`flex items-start p-4 rounded-lg border-l-4 ${
                      theme === "light"
                        ? "bg-blue-50/50 border-blue-500"
                        : "bg-gray-700/30 border-cyan-400"
                    }`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: dayIndex * 0.2 + eventIndex * 0.1,
                    }}
                  >
                    <div
                      className={`font-mono font-bold w-20 shrink-0 ${styles.accent}`}
                    >
                      {event.time}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg">{event.title}</h4>
                      <p className={styles.textSecondary}>{event.speaker}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
