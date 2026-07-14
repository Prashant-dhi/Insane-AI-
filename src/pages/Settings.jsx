import { useState } from "react";
import {
  Brain,
  Download,
  Trash2,
  User,
  LogOut,
  Info,
  Shield,
  Sparkles,
  ChevronRight,
} from "lucide-react";

import { motion } from "framer-motion";
import { useChat } from "../context/ChatContext";

export default function Settings() {
  const { clearChats } = useChat();

  const [webSearch, setWebSearch] = useState(false);
  const [autoRename, setAutoRename] = useState(true);
  const [typingAnimation, setTypingAnimation] =
    useState(true);

  // Beautiful Toggle
  const Toggle = ({ checked, onChange }) => (
    <button
      onClick={onChange}
      className={`relative w-14 h-8 rounded-full transition-all duration-300 ${
        checked
          ? "bg-gradient-to-r from-red-600 to-red-700"
          : "bg-[#262626]"
      }`}
    >
      <span
        className={`absolute top-1 w-6 h-6 rounded-full bg-white transition-all duration-300 ${
          checked ? "left-7" : "left-1"
        }`}
      />
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#050505] via-[#080808] to-black text-white">

      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <div className="flex items-center gap-4">

            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center shadow-lg shadow-red-900/30">

              <Shield size={24} />

            </div>

            <div>

              <h1 className="text-4xl font-bold">
                Settings
              </h1>

              <p className="text-gray-400 mt-2">
                Customize your NEW AI experience.
              </p>

            </div>

          </div>

        </motion.div>

        <div className="space-y-7">
                    {/* ================= AI SETTINGS ================= */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="
            rounded-3xl
            border
            border-[#262626]
            bg-gradient-to-b
            from-[#131313]
            to-[#0d0d0d]
            overflow-hidden
            "
          >
            {/* Header */}

            <div
              className="
              flex
              items-center
              gap-3
              px-7
              py-5
              border-b
              border-[#222222]
              "
            >
              <div
                className="
                w-11
                h-11
                rounded-xl
                bg-gradient-to-br
                from-red-600
                to-red-700
                flex
                items-center
                justify-center
                "
              >
                <Brain size={20} />
              </div>

              <div>

                <h2 className="text-xl font-semibold">
                  AI Settings
                </h2>

                <p className="text-sm text-gray-500">
                  Configure how NEW AI behaves.
                </p>

              </div>

            </div>

            {/* Body */}

            <div className="divide-y divide-[#202020]">

              {/* Web Search */}

              <div className="flex items-center justify-between px-7 py-5">

                <div>

                  <h3 className="font-medium">
                    Enable Web Search
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    Allow NEW AI to search the internet when required.
                  </p>

                </div>

                <Toggle
                  checked={webSearch}
                  onChange={() =>
                    setWebSearch(!webSearch)
                  }
                />

              </div>

              {/* Auto Rename */}

              <div className="flex items-center justify-between px-7 py-5">

                <div>

                  <h3 className="font-medium">
                    Auto Rename Chats
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    Generate smart titles automatically.
                  </p>

                </div>

                <Toggle
                  checked={autoRename}
                  onChange={() =>
                    setAutoRename(!autoRename)
                  }
                />

              </div>

              {/* Typing */}

              <div className="flex items-center justify-between px-7 py-5">

                <div>

                  <h3 className="font-medium">
                    Typing Animation
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    Show animated AI typing responses.
                  </p>

                </div>

                <Toggle
                  checked={typingAnimation}
                  onChange={() =>
                    setTypingAnimation(!typingAnimation)
                  }
                />

              </div>

            </div>

          </motion.div>
                    {/* ================= DATA ================= */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="
            rounded-3xl
            border
            border-[#262626]
            bg-gradient-to-b
            from-[#131313]
            to-[#0d0d0d]
            overflow-hidden
            "
          >
            {/* Header */}

            <div
              className="
              flex
              items-center
              gap-3
              px-7
              py-5
              border-b
              border-[#222222]
              "
            >
              <div
                className="
                w-11
                h-11
                rounded-xl
                bg-gradient-to-br
                from-red-600
                to-red-700
                flex
                items-center
                justify-center
                "
              >
                <Download size={20} />
              </div>

              <div>

                <h2 className="text-xl font-semibold">
                  Data Management
                </h2>

                <p className="text-sm text-gray-500">
                  Export or delete your conversations.
                </p>

              </div>

            </div>

            <div className="p-7 flex flex-wrap gap-4">

              <button
                className="
                flex
                items-center
                gap-2
                px-6
                py-3
                rounded-xl
                bg-[#191919]
                border
                border-[#2b2b2b]
                hover:border-red-600
                transition-all
                "
              >
                <Download size={18} />
                Export Chats
              </button>

              <button
                onClick={clearChats}
                className="
                flex
                items-center
                gap-2
                px-6
                py-3
                rounded-xl
                bg-red-700
                hover:bg-red-800
                transition-all
                "
              >
                <Trash2 size={18} />
                Clear History
              </button>

            </div>

          </motion.div>

          {/* ================= ACCOUNT ================= */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="
            rounded-3xl
            border
            border-[#262626]
            bg-gradient-to-b
            from-[#131313]
            to-[#0d0d0d]
            overflow-hidden
            "
          >
            <div
              className="
              flex
              items-center
              gap-3
              px-7
              py-5
              border-b
              border-[#222222]
              "
            >
              <div
                className="
                w-11
                h-11
                rounded-xl
                bg-gradient-to-br
                from-red-600
                to-red-700
                flex
                items-center
                justify-center
                "
              >
                <User size={20} />
              </div>

              <div>

                <h2 className="text-xl font-semibold">
                  Account
                </h2>

                <p className="text-sm text-gray-500">
                  Manage your NEW AI account.
                </p>

              </div>

            </div>

            <div className="p-7">

              <button
                className="
                w-full
                flex
                items-center
                justify-between
                rounded-2xl
                border
                border-[#2a2a2a]
                bg-[#171717]
                px-6
                py-4
                hover:border-red-600
                transition-all
                "
              >
                <div className="flex items-center gap-3">

                  <LogOut size={18} />

                  <span>Logout</span>

                </div>

                <ChevronRight size={18} />

              </button>

            </div>

          </motion.div>
                    {/* ================= ABOUT ================= */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="
            rounded-3xl
            border
            border-[#262626]
            bg-gradient-to-b
            from-[#131313]
            to-[#0d0d0d]
            overflow-hidden
            "
          >
            {/* Header */}

            <div
              className="
              flex
              items-center
              gap-3
              px-7
              py-5
              border-b
              border-[#222222]
              "
            >
              <div
                className="
                w-11
                h-11
                rounded-xl
                bg-gradient-to-br
                from-red-600
                to-red-700
                flex
                items-center
                justify-center
                "
              >
                <Info size={20} />
              </div>

              <div>

                <h2 className="text-xl font-semibold">
                  About NEW AI
                </h2>

                <p className="text-sm text-gray-500">
                  Application information
                </p>

              </div>

            </div>

            {/* Body */}

            <div className="p-7 space-y-5">

              <div className="flex items-center justify-between">

                <span className="text-gray-400">
                  Application
                </span>

                <div className="flex items-center gap-2">

                  <Sparkles
                    size={16}
                    className="text-red-500"
                  />

                  <span className="font-medium">
                    NEW AI v1.0
                  </span>

                </div>

              </div>

              <div className="flex items-center justify-between">

                <span className="text-gray-400">
                  Provider
                </span>

                <span>
                  Groq API
                </span>

              </div>

              <div className="flex items-center justify-between">

                <span className="text-gray-400">
                  Model
                </span>

                <span>
                  Llama 3.3 70B Versatile
                </span>

              </div>

              <div className="pt-4 border-t border-[#202020]">

                <p className="text-sm text-gray-500 leading-7">

                  NEW AI is built with React, Tailwind CSS,
                  Framer Motion and Groq API. AI responses
                  may contain mistakes. Please verify
                  important information before relying on
                  them.

                </p>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </div>

  );
}