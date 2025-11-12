import { motion } from "framer-motion";
import { useState } from "react";
import confData from "../../data/confData.js";

function TracksSection({ styles }) {
  const [expandedTrack, setExpandedTrack] = useState(null);

  const toggleTrack = (index) => {
    setExpandedTrack(expandedTrack === index ? null : index);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {confData.conference.tracks.map((track, index) => {
        const TrackIcon = track.icon;
        const isExpanded = expandedTrack === index;

        return (
          <motion.div
            key={track.track_title}
            className={`rounded-xl border shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer ${
              isExpanded ? "p-6" : "p-4"
            } ${styles.card}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            viewport={{ once: true }}
            onClick={() => toggleTrack(index)}
            title={isExpanded ? "Click to collapse" : "Click to expand"}
          >
            {/* Always visible: Icon and Title */}
            <div className="flex items-center gap-4">
              <div className="text-4xl mb-4">
                {track.icon} {/* Directly use the emoji string */}
              </div>
              <h3
                className={`font-semibold ${
                  isExpanded ? "text-lg" : "text-md"
                } ${styles.accent}`}
              >
                {track.track_title}
              </h3>
              <div className="ml-auto text-lg">{isExpanded ? "−" : "+"}</div>
            </div>

            {/* Expandable content */}
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
                className="mt-4"
              >
                <h4 className="font-medium mb-2 text-gray-700">Topics:</h4>
                <ul className={`space-y-1 ${styles.textSecondary}`}>
                  {track.topics.map((topic, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span className="text-sm">{topic}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
export default TracksSection;
