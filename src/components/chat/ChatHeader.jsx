import { useState } from "react";
import {
  Sparkles,
  Bell,
  Settings,
  MoreVertical,
  ChevronDown,
  User,
  ShieldCheck,
} from "lucide-react";

import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { useChat } from "../../context/ChatContext";
import { MODEL_LIST } from "../../services/ai/models";

export default function ChatHeader() {
  const {
    selectedModel,
    setSelectedModel,
  } = useChat();

  const [open, setOpen] = useState(false);

  const currentModel =
    MODEL_LIST.find(
      (m) => m.id === selectedModel
    ) || MODEL_LIST[0];

  return (
    <header
      className="
      sticky
      top-0
      z-50
      h-16
      border-b
      border-[#202020]
      bg-[#0b0b0b]/80
      backdrop-blur-2xl
      flex
      items-center
      justify-between
      px-6
    "
    >
      {/* LEFT */}

      <div className="flex items-center gap-4">
        <motion.div
          whileHover={{
            rotate: 10,
            scale: 1.05,
          }}
          className="
          h-11
          w-11
          rounded-2xl
          bg-gradient-to-br
          from-red-600
          to-red-700
          flex
          items-center
          justify-center
          shadow-lg
          shadow-red-900/30
        "
        >
          <Sparkles size={19} />
        </motion.div>

        <div>
          <div className="flex items-center gap-3 relative">

            <h2 className="text-lg font-bold tracking-wide">
              NEW AI
            </h2>

            {/* MODEL DROPDOWN */}

            <button
              onClick={() => setOpen(!open)}
              className="
              flex
              items-center
              gap-2
              rounded-lg
              border
              border-[#2d2d2d]
              bg-[#151515]
              px-3
              py-1.5
              text-xs
              hover:border-red-600
              transition
            "
            >
              {currentModel.name}

              <ChevronDown
                size={14}
                className={`transition ${
                  open ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: 10,
                  }}
                  className="
                  absolute
                  top-12
                  left-20
                  w-64
                  rounded-xl
                  border
                  border-[#2a2a2a]
                  bg-[#121212]
                  overflow-hidden
                  shadow-2xl
                  z-50
                "
                >
                  {MODEL_LIST.map((model) => (
                    <button
                      key={model.id}
                      onClick={() => {
                        setSelectedModel(
                          model.id
                        );
                        setOpen(false);
                      }}
                      className={`
                      w-full
                      text-left
                      px-4
                      py-3
                      transition

                      ${
                        selectedModel ===
                        model.id
                          ? "bg-red-600 text-white"
                          : "hover:bg-[#1d1d1d]"
                      }
                    `}
                    >
                      <div className="font-medium">
                        {model.name}
                      </div>

                      <div className="text-xs opacity-70">
                        {model.provider}
                      </div>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="flex items-center gap-2 mt-1">
            <ShieldCheck
              size={12}
              className="text-green-500"
            />

            <span className="text-xs text-green-500">
              Secure Connection
            </span>
          </div>
        </div>
      </div>

      {/* RIGHT */}

      <div className="flex items-center gap-2">

        <div
          className="
          hidden
          lg:flex
          items-center
          rounded-xl
          border
          border-red-600/30
          bg-red-600/10
          px-4
          h-10
          text-sm
        "
        >
          {currentModel.name}
        </div>

        <button
          className="
          h-10
          w-10
          rounded-xl
          border
          border-[#2a2a2a]
          bg-[#131313]
          hover:border-red-600
          transition
          flex
          items-center
          justify-center
        "
        >
          <Bell size={18} />
        </button>

        <Link
          to="/settings"
          className="
          h-10
          w-10
          rounded-xl
          border
          border-[#2a2a2a]
          bg-[#131313]
          hover:border-red-600
          transition
          flex
          items-center
          justify-center
        "
        >
          <Settings size={18} />
        </Link>

        <button
          className="
          h-10
          w-10
          rounded-xl
          border
          border-[#2a2a2a]
          bg-[#131313]
          hover:border-red-600
          transition
          flex
          items-center
          justify-center
        "
        >
          <MoreVertical size={18} />
        </button>

        <Link to="/profile">
          <motion.div
            whileHover={{
              scale: 1.08,
            }}
            className="
            h-11
            w-11
            rounded-full
            bg-gradient-to-br
            from-red-600
            to-red-700
            border
            border-red-400/40
            flex
            items-center
            justify-center
            shadow-lg
            shadow-red-900/30
          "
          >
            <User size={18} />
          </motion.div>
        </Link>

      </div>
    </header>
  );
}