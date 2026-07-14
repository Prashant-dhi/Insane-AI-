import { useState, useRef } from "react";
import {
  Send,
  Paperclip,
  Mic,
  Image,
  Smile,
  Globe,
  Brain,
  Square,
} from "lucide-react";

import { extractPDFText } from "../../services/pdf";

import { SYSTEM_PROMPT } from "../../services/ai/prompts";

import { motion } from "framer-motion";

import EmojiPicker from "emoji-picker-react";

import { useChat } from "../../context/ChatContext";

import { askAI, stopAI } from "../../services/ai";

export default function ChatInput() {

  const [pdfText, setPdfText] = useState("");

  const [message, setMessage] = useState("");

  const [webSearch, setWebSearch] = useState(false);

  const [thinking, setThinking] = useState(false);

  const [isRecording, setIsRecording] = useState(false);

  const [showEmoji, setShowEmoji] = useState(false);

  const [selectedImage, setSelectedImage] = useState(null);

  const [selectedFile, setSelectedFile] = useState(null);

  const textareaRef = useRef(null);

  const recognitionRef = useRef(null);

  const imageInputRef = useRef(null);

  const fileInputRef = useRef(null);
  
  const {
    addMessage,
    startStreamingMessage,
    updateStreamingMessage,
    currentChat,
    selectedModel,
    isTyping,
    setIsTyping,
  } = useChat();

  // ==========================
  // Auto Resize
  // ==========================

  const resizeTextarea = (e) => {
    const el = e.target;

    el.style.height = "0px";

    el.style.height =
      Math.min(el.scrollHeight, 180) + "px";

    setMessage(el.value);
  };

  // ==========================
  // Voice Input
  // ==========================

  const toggleVoiceInput = () => {
    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert(
        "Speech Recognition not supported."
      );
      return;
    }

    if (isRecording) {
      recognitionRef.current?.stop();
      return;
    }

    const recognition =
      new SpeechRecognition();

    recognition.lang = "en-US";

    recognition.interimResults = true;

    recognition.continuous = false;

    recognition.onstart = () => {
      setIsRecording(true);
    };

    recognition.onresult = (event) => {
      let transcript = "";

      for (
        let i = event.resultIndex;
        i < event.results.length;
        i++
      ) {
        transcript +=
          event.results[i][0].transcript;
      }

      setMessage(transcript);

      if (textareaRef.current) {
        textareaRef.current.style.height =
          "0px";

        textareaRef.current.style.height =
          textareaRef.current.scrollHeight +
          "px";
      }
    };

    recognition.onend = () => {
      setIsRecording(false);
    };

    recognition.onerror = () => {
      setIsRecording(false);
    };

    recognitionRef.current = recognition;

    recognition.start();
  };

  // ==========================
  // Image Upload
  // ==========================

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setSelectedImage(file);
  };

  // ==========================
  // File Upload
  // ==========================
  const handleFileUpload = async (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setSelectedFile(file);

    if (file.type === "application/pdf") {
      try {
        const text = await extractPDFText(file);

        setPdfText(text);

        console.log(text);
      } catch (err) {
        console.log(err);
        alert("Unable to read PDF");
      }
    }
  };
  // ==========================
  // Emoji
  // ==========================

  const onEmojiClick = (emojiData) => {
    setMessage((prev) => prev + emojiData.emoji);

    setShowEmoji(false);

    setTimeout(() => {
      if (textareaRef.current) {
        textareaRef.current.focus();
      }
    }, 100);
  };
  // ==========================
  // Send Message
  // ==========================

  const handleStop = () => {
    stopAI();
    setIsTyping(false);
  };

 const handleSend = async () => {
  try {
    if (isTyping) return;

    if (
      !message.trim() &&
      !selectedImage &&
      !selectedFile
    ) {
      return;
    }

    let prompt = message.trim();

    // PDF
    if (
      selectedFile &&
      selectedFile.type === "application/pdf"
    ) {
      const pdfText = await extractPDFText(selectedFile);

      prompt = `
You have been given this PDF.

Answer ONLY from this PDF.

If the answer is not present in the PDF reply:

"This information is not available in the uploaded PDF."

--------------------

PDF CONTENT:

${pdfText}

--------------------

User Question:

${message.trim()}
`;
    }

    // Web Search
    if (webSearch) {
      prompt = "[WEB SEARCH ENABLED]\n\n" + prompt;
    }

    // Thinking
    if (thinking) {
      prompt = "[THINK STEP BY STEP]\n\n" + prompt;
    }

    // User Message
    addMessage({
      id: Date.now(),
      type: "user",
      text: message.trim(),
      image: selectedImage
        ? URL.createObjectURL(selectedImage)
        : null,
      file: selectedFile
        ? {
            name: selectedFile.name,
            size: selectedFile.size,
          }
        : null,
      time: "Just now",
    });

    const memory =
      currentChat?.messages?.map((msg) => ({
        role:
          msg.type === "user"
            ? "user"
            : "assistant",
        content: msg.text,
      })) || [];

    const streamId = startStreamingMessage();

    setMessage("");
    setSelectedImage(null);
    setSelectedFile(null);
    setPdfText("");

    if (textareaRef.current) {
      textareaRef.current.style.height = "58px";
    }

    setIsTyping(true);

    await askAI(prompt, {
      model: selectedModel,
      memory,
      systemPrompt: SYSTEM_PROMPT,

      onToken(text) {
        updateStreamingMessage(streamId, text);
      },
    });
  } catch (error) {
    addMessage({
      type: "ai",
      text:
        error.message ||
        "Something went wrong.",
      time: "Just now",
    });
  } finally {
    setIsTyping(false);
  }
};

  // ==========================
  // RETURN
  // ==========================

  return (
    <div
      className="
      sticky
      bottom-0
      z-40
      bg-gradient-to-t
      from-[#050505]
      via-[#050505]/95
      to-transparent
      px-4
      pb-5
      pt-3
      "
    >
      {/* Hidden Inputs */}

      <input
        ref={imageInputRef}
        type="file"
        accept="image/*"
        hidden
        onChange={handleImageUpload}
      />

      <input
        ref={fileInputRef}
        type="file"
        hidden
        onChange={handleFileUpload}
      />

      {/* Emoji Picker */}

      {showEmoji && (
        <div className="absolute bottom-28 left-8 z-50">
          <EmojiPicker
            onEmojiClick={onEmojiClick}
            theme="dark"
          />
        </div>
      )}

      {/* Image Preview */}

      {selectedImage && (
        <div
          className="
          mx-auto
          mb-3
          max-w-5xl
          rounded-2xl
          border
          border-[#252525]
          bg-[#111]
          p-4
          "
        >
          <img
            src={URL.createObjectURL(selectedImage)}
            alt="preview"
            className="
            max-h-56
            rounded-xl
            object-cover
            "
          />

          <button
            onClick={() => {
              setSelectedFile(null);
              setPdfText("");
            }}
            className="
            mt-3
            rounded-lg
            bg-red-600
            px-4
            py-2
            text-sm
            "
          >
            Remove Image
          </button>
        </div>
      )}

      {/* File Preview */}

      {selectedFile && (
        <div
          className="
          mx-auto
          mb-3
          flex
          max-w-5xl
          items-center
          justify-between
          rounded-2xl
          border
          border-[#252525]
          bg-[#111]
          px-5
          py-4
          "
        >
          <div>

            <p className="font-medium">

              {selectedFile.name}

            </p>

            <p className="text-xs text-gray-500">

              {(selectedFile.size / 1024).toFixed(1)}
              {" "}KB

            </p>

          </div>

          <button
            onClick={() =>
              setSelectedFile(null)
            }
            className="
            rounded-lg
            bg-red-600
            px-4
            py-2
            text-sm
            "
          >
            Remove
          </button>
        </div>
      )}

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.25,
        }}
        className="
        mx-auto
        max-w-5xl
        overflow-hidden
        rounded-3xl
        border
        border-[#242424]
        bg-[#101010]/95
        backdrop-blur-3xl
        shadow-[0_0_40px_rgba(0,0,0,.45)]
        "
      >
        {/* ==========================
            TEXTAREA
        ========================== */}

        <textarea
          ref={textareaRef}
          rows={1}
          value={message}
          disabled={isTyping}
          onChange={resizeTextarea}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSend();
            }
          }}
          placeholder={`Message ${selectedModel}`}
          className="
            w-full
            resize-none
            bg-transparent
            px-6
            pt-5
            pb-4
            outline-none
            text-[15px]
            leading-7
            text-white
            placeholder:text-gray-500
            min-h-[58px]
            max-h-[180px]
          "
        />

        {/* ==========================
            TOOLBAR
        ========================== */}

        <div
          className="
          flex
          flex-wrap
          items-center
          justify-between
          gap-3
          border-t
          border-[#202020]
          px-4
          py-3
          "
        >

          {/* LEFT */}

          <div className="flex flex-wrap items-center gap-2">

            {/* Attachment */}

            <button
              onClick={() => fileInputRef.current.click()}
              className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              border
              border-[#232323]
              bg-[#171717]
              hover:bg-[#222]
              transition
              "
            >
              <Paperclip size={18} />
            </button>

            {/* Image */}

            <button
              onClick={() => imageInputRef.current.click()}
              className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              border
              border-[#232323]
              bg-[#171717]
              hover:bg-[#222]
              transition
              "
            >
              <Image size={18} />
            </button>

            {/* Voice */}

            <button
              onClick={toggleVoiceInput}
              className={`
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                border
                transition-all

                ${isRecording
                  ? "bg-red-600 border-red-600 animate-pulse"
                  : "bg-[#171717] border-[#232323] hover:bg-[#222]"
                }
              `}
            >
              <Mic size={18} />
            </button>

            {/* Emoji */}

            <button
              onClick={() =>
                setShowEmoji(!showEmoji)
              }
              className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              border
              border-[#232323]
              bg-[#171717]
              hover:bg-[#222]
              transition
              "
            >
              <Smile size={18} />
            </button>

            {/* WEB */}

            <button
              onClick={() =>
                setWebSearch(!webSearch)
              }
              className={`
                flex
                items-center
                gap-2
                h-10
                px-4
                rounded-xl
                border
                transition

                ${webSearch
                  ? "bg-red-600 border-red-600"
                  : "bg-[#171717] border-[#232323]"
                }
              `}
            >
              <Globe size={16} />

              <span className="text-sm">
                Web
              </span>
            </button>

            {/* THINK */}

            <button
              onClick={() =>
                setThinking(!thinking)
              }
              className={`
                flex
                items-center
                gap-2
                h-10
                px-4
                rounded-xl
                border
                transition

                ${thinking
                  ? "bg-red-600 border-red-600"
                  : "bg-[#171717] border-[#232323]"
                }
              `}
            >
              <Brain size={16} />

              <span className="text-sm">
                Think
              </span>
            </button>

          </div>
          {/* ==========================
              SEND BUTTON
          ========================== */}

          <button
            onClick={isTyping ? handleStop : handleSend}
            disabled={
              !isTyping &&
              !message.trim() &&
              !selectedImage &&
              !selectedFile
            }
            className="
    flex
    h-11
    items-center
    gap-2
    rounded-xl
    bg-gradient-to-r
    from-red-600
    to-red-700
    px-5
    font-medium
    transition-all
    duration-200
    hover:scale-105
    hover:shadow-lg
    hover:shadow-red-600/20
    disabled:opacity-50
    disabled:cursor-not-allowed
  "
          >
            {isTyping ? (
              <>
                <Square size={15} />
                Stop
              </>
            ) : (
              <>
                <Send size={17} />
                Send
              </>
            )}
          </button>

        </div>

      </motion.div>

      {/* ==========================
          FOOTER
      ========================== */}

      <p
        className="
          mt-3
          text-center
          text-xs
          text-gray-500
        "
      >
        Current Model :

        <span className="ml-1 font-medium text-red-500">

          {selectedModel}

        </span>

        {webSearch && (
          <span className="ml-3 text-blue-400">
            • Web Search
          </span>
        )}

        {thinking && (
          <span className="ml-3 text-green-400">
            • Thinking
          </span>
        )}

      </p>

    </div>
  );
}