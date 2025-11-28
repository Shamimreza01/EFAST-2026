import { motion } from "framer-motion";
import { useState } from "react";

const KeynoteSpeakerCard = ({ speaker, theme, styles }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className={`relative overflow-hidden rounded-2xl p-6 h-full transition-all duration-300 ${theme === "light"
                    ? "bg-white hover:shadow-xl border-gray-100"
                    : "bg-gray-800 hover:shadow-2xl border-gray-700"
                } border group`}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
        >
            {/* Background Gradient Blob */}
            <div
                className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${styles.accentGradient} opacity-10 rounded-bl-full transition-transform duration-500 transform group-hover:scale-150`}
            />

            {/* Image Container */}
            <div className="relative mb-6 flex justify-center">
                <div className="relative w-32 h-32">
                    <div
                        className={`absolute inset-0 rounded-full bg-gradient-to-r ${styles.accentGradient} opacity-70 blur-md transform group-hover:scale-110 transition-transform duration-300`}
                    />
                    <img
                        src={speaker.image}
                        alt={speaker.name}
                        className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-700 shadow-lg z-10"
                    />
                </div>
            </div>

            {/* Content */}
            <div className="text-center relative z-10">
                <h3 className={`text-xl font-bold mb-1 ${styles.text}`}>
                    {speaker.name}
                </h3>
                <p
                    className={`text-sm font-semibold mb-2 bg-gradient-to-r ${styles.accentGradient} bg-clip-text text-transparent`}
                >
                    {speaker.designation}
                </p>
                <p className={`text-sm mb-4 ${styles.textSecondary}`}>
                    {speaker.institution}
                </p>

                <div className="w-12 h-1 mx-auto bg-gray-200 dark:bg-gray-700 rounded-full mb-4" />

                <p className={`text-sm leading-relaxed mb-6 ${styles.textSecondary}`}>
                    {speaker.bio}
                </p>

                {/* Social Links */}
                <div className="flex justify-center space-x-4">
                    {Object.entries(speaker.socials).map(([platform, link]) => (
                        <motion.a
                            key={platform}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`p-2 rounded-full transition-colors ${theme === "light"
                                    ? "bg-gray-100 hover:bg-blue-50 text-gray-600 hover:text-blue-600"
                                    : "bg-gray-700 hover:bg-gray-600 text-gray-400 hover:text-cyan-400"
                                }`}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="capitalize text-xs font-bold">{platform}</span>
                        </motion.a>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default KeynoteSpeakerCard;
