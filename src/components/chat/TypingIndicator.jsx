import { Bot } from "lucide-react";
import { motion } from "framer-motion";

export default function TypingIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.25 }}
      className="flex items-start gap-3 py-3"
    >
      {/* AI Avatar */}
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-red-600 to-red-800 shadow-lg">
        <Bot className="text-white" size={18} />
      </div>

      {/* Typing Bubble */}
      <div className="rounded-2xl border border-[#262626] bg-[#111111] px-4 py-3 shadow-md">
        <div className="flex items-center gap-2">
          {[0, 0.2, 0.4].map((delay, index) => (
            <motion.div
              key={index}
              className="h-2 w-2 rounded-full bg-gray-400"
              animate={{
                y: [0, -5, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 0.8,
                delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}