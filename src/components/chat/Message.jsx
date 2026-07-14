import {
  Bot,
  User,
  Copy,
  Check,
  RotateCcw,
  ThumbsUp,
  ThumbsDown,
  Share2,
} from "lucide-react";

import { motion } from "framer-motion";
import { useState } from "react";
import { useChat } from "../../context/ChatContext";
import { askAI } from "../../services/ai";

import MarkdownRenderer from "./MarkdownRenderer";

export default function Message({ message }) {
  const {
    currentChat,
    selectedModel,
    addMessage,
    startStreamingMessage,
    updateStreamingMessage,
    regenerateLastResponse,
    isTyping,
    setIsTyping,
  } = useChat();

  const [copied, setCopied] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const regenerate = async () => {
    if (isTyping) return;

    const prompt = regenerateLastResponse();

    if (!prompt) return;

    setIsTyping(true);

    try {
      const memory =
        currentChat?.messages?.map((msg) => ({
          role: msg.type === "user" ? "user" : "assistant",
          content: msg.text,
        })) || [];

      const streamId = startStreamingMessage();

      await askAI(prompt, {
        model: selectedModel,
        memory,

        systemPrompt: `
You are NEW AI.

Always reply professionally.

Current Model: ${selectedModel}
`,

        onToken(text) {
          updateStreamingMessage(streamId, text);
        },
      });
    } catch (error) {
      addMessage({
        id: Date.now(),
        type: "ai",
        text: error.message,
        time: "Just now",
      });
    } finally {
      setIsTyping(false);
    }
  };

const shareMessage = async () => {
  try {
    if (navigator.share) {
      await navigator.share({
        title: "NEW AI",
        text: message.text,
      });
    } else {
      await navigator.clipboard.writeText(message.text);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1500);

      alert("Message copied. Share it anywhere.");
    }
  } catch (err) {
    console.log(err);
  }
};

  const copyMessage = async () => {
    try {
      
      await navigator.clipboard.writeText(message?.text || "");

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch (err) {
      console.error(err);
    }
  };
  const text = message?.text || "";

  // ==========================
  // USER MESSAGE
  // ==========================

  if (message.type === "user") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="flex justify-end"
      >
        <div className="flex items-end gap-3 max-w-[78%]">
          <div
            className="
            rounded-3xl
            rounded-br-lg
            bg-gradient-to-br
            from-red-600
            to-red-700
            px-6
            py-4
            border
            border-red-500/20
            shadow-lg
            shadow-red-900/20
          "
          >
            <p className="whitespace-pre-wrap leading-7 text-[15px] text-white">
              {text}
              
            </p>
            {message.image && (
  <div className="mt-4">
    <img
      src={message.image}
      alt="Uploaded"
      className="
        max-w-sm
        rounded-2xl
        border
        border-[#2a2a2a]
        shadow-lg
        cursor-pointer
        hover:scale-[1.02]
        transition
      "
    />
  </div>
)}

{message.file && (
  <div
    className="
      mt-4
      flex
      items-center
      gap-3
      rounded-xl
      border
      border-[#252525]
      bg-[#111]
      p-4
    "
  >
    📄

    <div>
      <p className="font-medium">
        {message.file.name}
      </p>

      <p className="text-xs text-gray-400">
        {(message.file.size / 1024).toFixed(1)} KB
      </p>
    </div>
  </div>
)}
          </div>

          <div
            className="
            w-10
            h-10
            rounded-full
            bg-gradient-to-br
            from-red-600
            to-red-700
            flex
            items-center
            justify-center
            shrink-0
          "
          >
            <User size={17} />
          </div>
        </div>
      </motion.div>
    );
  }

  // ==========================
  // AI MESSAGE
  // ==========================

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="group flex gap-4"
    >
      {/* Avatar */}

      <div
        className="
        w-10
        h-10
        rounded-full
        bg-gradient-to-br
        from-red-600
        to-red-700
        flex
        items-center
        justify-center
        shrink-0
      "
      >
        <Bot size={17} />
      </div>

      {/* <div className="flex-1 min-w-0"> */}
        {/* Card */}

        <div
          className="
          overflow-hidden
          rounded-3xl
          border
          border-[#222]
          bg-gradient-to-b
          from-[#131313]
          to-[#0d0d0d]
          shadow-xl
        "
        >
          {/* Header */}

          <div
            className="
            flex
            items-center
            justify-between
            border-b
            border-[#202020]
            px-6
            py-4
          "
          >
            <div className="flex items-center gap-3">
              <div
                className="
                h-9
                w-9
                rounded-xl
                bg-gradient-to-br
                from-red-600
                to-red-700
                flex
                items-center
                justify-center
              "
              >
                <Bot size={16} />
              </div>

              <div>
                <h3 className="font-semibold">NEW AI</h3>

                <p className="text-xs text-gray-500">
                  GPT Assistant
                </p>
              </div>
            </div>

            <span className="text-xs text-gray-500">
              {message.time || "Just now"}
            </span>
          </div>

          {/* Message */}
<div className="px-6 py-6">
  <div className="prose prose-invert max-w-none">
    <MarkdownRenderer content={text} />
  </div>

  {message.image && (
    <div className="mt-5">
      <img
        src={message.image}
        alt="AI"
        className="
          max-w-md
          rounded-2xl
          border
          border-[#2a2a2a]
          shadow-lg
        "
      />
    </div>
  )}

  {message.file && (
    <div
      className="
        mt-5
        flex
        items-center
        gap-3
        rounded-xl
        border
        border-[#252525]
        bg-[#111]
        p-4
      "
    >
      📄

      <div>
        <p className="font-medium">
          {message.file.name}
        </p>

        <p className="text-xs text-gray-400">
          {(message.file.size / 1024).toFixed(1)} KB
        </p>
      </div>
    </div>
  )}
<div className="px-6 pb-5">
  <div
    className="
      mt-4
      flex
      flex-wrap
      items-center
      gap-2
      border-t
      border-[#202020]
      pt-4
      opacity-0
      transition
      group-hover:opacity-100
    "
  >
          <button
            onClick={copyMessage}
            className="
            h-9
            w-9
            rounded-lg
            bg-[#171717]
            hover:bg-[#242424]
            flex
            items-center
            justify-center
            transition
          "
          >
            {copied ? (
              <Check size={16} />
            ) : (
              <Copy size={16} />
            )}
          </button>

          <button
            onClick={regenerate}
            disabled={
              isTyping ||
              currentChat?.messages?.[currentChat.messages.length - 1]?.id !== message.id
            }
            className="
    h-9
    w-9
    rounded-lg
    bg-[#171717]
    hover:bg-[#242424]
    flex
    items-center
    justify-center
    transition
    disabled:opacity-50
    disabled:cursor-not-allowed
  "
          >
            <RotateCcw size={16} />
          </button>

          <button
            onClick={() => setFeedback("like")}
            className={`
            h-9
            w-9
            rounded-lg
            flex
            items-center
            justify-center
            transition
            ${feedback === "like"
                ? "bg-red-600"
                : "bg-[#171717] hover:bg-[#242424]"
              }
          `}
          >
            <ThumbsUp size={16} />
          </button>

          <button
            onClick={() => setFeedback("dislike")}
            className={`
            h-9
            w-9
            rounded-lg
            flex
            items-center
            justify-center
            transition
            ${feedback === "dislike"
                ? "bg-red-600"
                : "bg-[#171717] hover:bg-[#242424]"
              }
          `}
          >
            <ThumbsDown size={16} />
          </button>

          <button
            onClick={shareMessage}
            className="
    h-9
    w-9
    rounded-lg
    bg-[#171717]
    hover:bg-[#242424]
    flex
    items-center
    justify-center
    transition
  "
          >
            <Share2 size={16} />
          </button>
  <span className="ml-2 text-xs text-gray-500">
            AI responses may contain mistakes.
          </span>
        </div>
      </div>
    </div>
  </div>
</motion.div>
 );
}