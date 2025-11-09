import { motion } from "framer-motion";
import { useEffect, useState } from "react";
export default function BinaryRain({ theme }) {
  const [binaryElements, setBinaryElements] = useState([]);

  useEffect(() => {
    const elements = [];
    for (let i = 0; i < 70; i++) {
      elements.push({
        id: i,
        value: Math.random() > 0.5 ? "1" : "0",
        left: `${Math.random() * 100}%`,
        delay: Math.random() * 5,
        duration: 5 + Math.random() * 10,
      });
    }
    setBinaryElements(elements);
  }, []);
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {binaryElements.map((element) => (
        <motion.div
          key={element.id}
          className={`text-${
            theme === "light" ? "blue-600" : "cyan-400"
          } text-xs font-mono opacity-75 absolute`}
          style={{ left: element.left }}
          initial={{ y: "-10px", opacity: 0 }}
          animate={{ y: "100vh", opacity: [0, 0.3, 0] }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            delay: element.delay,
          }}
        >
          {element.value}
        </motion.div>
      ))}
    </div>
  );
}
