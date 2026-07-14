import { motion } from "framer-motion";
import {
  Sparkles,
  Bot,
  Code2,
  FileText,
  Image,
  ArrowRight,
  BrainCircuit,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function AIShowcase() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-28">

      {/* Background Glow */}

      <div className="absolute left-0 top-20 w-[420px] h-[420px] rounded-full bg-red-700/10 blur-[170px]" />

      <div className="absolute right-0 bottom-0 w-[520px] h-[520px] rounded-full bg-red-600/10 blur-[190px]" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
        >

          <span className="inline-flex items-center gap-2 bg-red-900/20 border border-red-700 px-4 py-2 rounded-full text-red-400 text-sm">

            <Sparkles size={16} />

            AI Experience

          </span>

          <h2 className="text-5xl lg:text-6xl font-black mt-6 leading-tight">

            One AI.

            <span className="block bg-gradient-to-r from-red-500 via-red-400 to-red-700 bg-clip-text text-transparent">

              Unlimited Possibilities

            </span>

          </h2>

          <p className="text-gray-400 text-lg leading-9 mt-8 max-w-xl">

            NEW AI helps you write code, generate images,
            summarize documents, answer questions,
            analyze files and improve productivity —
            all from one powerful assistant.

          </p>

          {/* Features */}

          <div className="grid grid-cols-2 gap-5 mt-12">

            <div className="flex items-center gap-3 bg-[#111111] border border-[#202020] rounded-2xl p-4">

              <Bot className="text-red-500" />

              <span>AI Chat</span>

            </div>

            <div className="flex items-center gap-3 bg-[#111111] border border-[#202020] rounded-2xl p-4">

              <Code2 className="text-red-500" />

              <span>Code Assistant</span>

            </div>

            <div className="flex items-center gap-3 bg-[#111111] border border-[#202020] rounded-2xl p-4">

              <FileText className="text-red-500" />

              <span>PDF Analysis</span>

            </div>

            <div className="flex items-center gap-3 bg-[#111111] border border-[#202020] rounded-2xl p-4">

              <Image className="text-red-500" />

              <span>Image Generator</span>

            </div>

          </div>

          {/* Bottom Cards */}

          <div className="grid grid-cols-2 gap-5 mt-8">

            <div className="bg-[#111111] border border-[#202020] rounded-2xl p-5">

              <BrainCircuit className="text-red-500 mb-4" />

              <h3 className="font-semibold">
                Faster Thinking
              </h3>

              <p className="text-gray-500 text-sm mt-2">
                Get accurate responses in seconds.
              </p>

            </div>

            <div className="bg-[#111111] border border-[#202020] rounded-2xl p-5">

              <ShieldCheck className="text-red-500 mb-4" />

              <h3 className="font-semibold">
                Secure AI
              </h3>

              <p className="text-gray-500 text-sm mt-2">
                Your conversations stay protected.
              </p>

            </div>

          </div>

          <Link
            to="/chat"
            className="
            inline-flex
            items-center
            gap-3
            mt-10
            px-8
            py-4
            rounded-xl
            bg-gradient-to-r
            from-red-600
            to-red-800
            hover:scale-105
            transition
            shadow-xl
            shadow-red-900/30
            "
          >

            Start Chat

            <ArrowRight size={20} />

          </Link>

        </motion.div>
                {/* Right */}

        <motion.div
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          animate={{
            y: [0, -10, 0],
          }}
        >

          <div className="relative rounded-3xl border border-[#262626] bg-[#111111]/90 backdrop-blur-xl overflow-hidden shadow-2xl">

            {/* Header */}

            <div className="flex items-center justify-between border-b border-[#262626] p-5">

              <div className="flex items-center gap-3">

                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-red-600 to-red-900 flex items-center justify-center text-xl">

                  🤖

                </div>

                <div>

                  <h3 className="font-bold">
                    NEW AI Assistant
                  </h3>

                  <p className="text-sm text-green-500">
                    ● Online
                  </p>

                </div>

              </div>

              <Sparkles className="text-red-500" />

            </div>

            {/* Conversation */}

            <div className="p-6 space-y-5">

              <div className="ml-auto max-w-sm rounded-2xl bg-[#1b1b1b] p-4">

                <p className="text-gray-300">
                  Build a modern AI dashboard with React & Tailwind CSS.
                </p>

              </div>

              <div className="rounded-2xl border border-red-700/30 bg-gradient-to-r from-red-600/15 to-red-900/15 p-5">

                <p className="text-red-300 font-medium">
                  NEW AI
                </p>

                <p className="mt-3 text-gray-200 leading-8">

                  Sure! I'll generate a complete production-ready dashboard including:

                </p>

                <div className="grid grid-cols-2 gap-3 mt-5">

                  {[
                    "Responsive Layout",
                    "Sidebar",
                    "Analytics",
                    "Charts",
                    "Dark Theme",
                    "Tailwind CSS",
                  ].map((item) => (

                    <div
                      key={item}
                      className="rounded-xl bg-[#171717] border border-[#262626] px-4 py-3 text-sm"
                    >
                      ✅ {item}
                    </div>

                  ))}

                </div>

              </div>

              {/* AI Typing */}

              <div className="flex items-center gap-3 border-t border-[#262626] pt-5">

                <div className="flex gap-1">

                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>

                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse delay-150"></span>

                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse delay-300"></span>

                </div>

                <span className="text-sm text-gray-500">

                  AI is generating your project...

                </span>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}