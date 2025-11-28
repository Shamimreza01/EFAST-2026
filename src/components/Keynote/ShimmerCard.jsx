import { motion } from "framer-motion";

const ShimmerCard = ({ theme }) => {
    return (
        <div
            className={`relative overflow-hidden rounded-2xl p-6 h-full ${theme === "light" ? "bg-white" : "bg-gray-800"
                } shadow-lg border ${theme === "light" ? "border-gray-100" : "border-gray-700"
                }`}
        >
            {/* Shimmer Effect Overlay */}
            <motion.div
                className="absolute inset-0 z-10"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "linear",
                }}
                style={{
                    background: `linear-gradient(90deg, transparent 0%, ${theme === "light"
                            ? "rgba(255,255,255,0.5)"
                            : "rgba(255,255,255,0.05)"
                        } 50%, transparent 100%)`,
                }}
            />

            {/* Image Placeholder */}
            <div
                className={`w-32 h-32 mx-auto rounded-full mb-6 ${theme === "light" ? "bg-gray-200" : "bg-gray-700"
                    }`}
            />

            {/* Text Placeholders */}
            <div className="space-y-3">
                <div
                    className={`h-6 w-3/4 mx-auto rounded ${theme === "light" ? "bg-gray-200" : "bg-gray-700"
                        }`}
                />
                <div
                    className={`h-4 w-1/2 mx-auto rounded ${theme === "light" ? "bg-gray-200" : "bg-gray-700"
                        }`}
                />
                <div
                    className={`h-4 w-2/3 mx-auto rounded ${theme === "light" ? "bg-gray-200" : "bg-gray-700"
                        }`}
                />
            </div>

            {/* Bio Placeholder */}
            <div className="mt-6 space-y-2">
                <div
                    className={`h-3 w-full rounded ${theme === "light" ? "bg-gray-200" : "bg-gray-700"
                        }`}
                />
                <div
                    className={`h-3 w-full rounded ${theme === "light" ? "bg-gray-200" : "bg-gray-700"
                        }`}
                />
                <div
                    className={`h-3 w-4/5 rounded ${theme === "light" ? "bg-gray-200" : "bg-gray-700"
                        }`}
                />
            </div>
        </div>
    );
};

export default ShimmerCard;
