import { motion } from "framer-motion";

import ChatHeader from "../components/chat/ChatHeader";
import ChatWindow from "../components/chat/ChatWindow";
import ChatInput from "../components/chat/ChatInput";

export default function Chat() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
      className="
        relative
        flex
        h-full
        min-h-0
        flex-col
        overflow-hidden
        bg-[#050505]
        text-white
      "
    >
      {/* Background Effects */}

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="
            absolute
            -top-40
            left-1/2
            h-[650px]
            w-[650px]
            -translate-x-1/2
            rounded-full
            bg-red-600/10
            blur-[180px]
          "
        />

        <div
          className="
            absolute
            bottom-[-120px]
            right-[-100px]
            h-[420px]
            w-[420px]
            rounded-full
            bg-red-700/10
            blur-[170px]
          "
        />

        <div
          className="
            absolute
            top-1/2
            left-[-120px]
            h-[260px]
            w-[260px]
            rounded-full
            bg-red-500/10
            blur-[120px]
          "
        />
      </div>

      {/* Header */}

      <div className="relative z-20 shrink-0">
        <ChatHeader />
      </div>

      {/* Chat Window */}

      <div className="relative z-10 flex-1 min-h-0 overflow-hidden">
        <ChatWindow />
      </div>

      {/* Input */}

      <div className="relative z-20 shrink-0">
        <ChatInput />
      </div>
    </motion.div>
  );
}