import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Brain,
  ShieldCheck,
  Code2,
  Image as ImageIcon,
  MessageSquare,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center bg-[#050505] pt-28">

      {/* Background Glow */}

      <div className="absolute w-[700px] h-[700px] bg-red-700/20 blur-[180px] rounded-full -top-40 -right-40"></div>

      <div className="absolute w-[500px] h-[500px] bg-red-500/10 blur-[160px] rounded-full bottom-0 left-0"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <div className="inline-flex items-center gap-2 bg-red-900/20 border border-red-700 px-4 py-2 rounded-full mb-6">

            <Sparkles className="text-red-500" size={18} />

            <span className="text-sm text-red-400">
              Next Generation Artificial Intelligence
            </span>

          </div>

          <h1 className="text-6xl lg:text-7xl font-black leading-tight">

            The Future of

            <span className="block bg-gradient-to-r from-red-500 via-red-400 to-red-700 bg-clip-text text-transparent">

              AI Conversations

            </span>

          </h1>

          <p className="text-gray-400 text-xl mt-8 leading-9 max-w-xl">

            Build apps, generate code, create images,
            analyze files and solve complex problems with
            one intelligent AI assistant.

          </p>

          {/* AI Models */}

          <div className="flex flex-wrap gap-3 mt-8">

            {["GPT-5", "Claude", "Gemini", "Llama 3.3"].map((item) => (

              <span
                key={item}
                className="px-4 py-2 rounded-full bg-[#111111] border border-[#262626] text-sm text-gray-300"
              >
                {item}
              </span>

            ))}

          </div>

          <div className="flex flex-wrap gap-5 mt-10">

            <Link
              to="/chat"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-red-600 to-red-800 hover:scale-105 transition-all flex items-center gap-2 shadow-lg shadow-red-900/50"
            >

              Start Free

              <ArrowRight size={20} />

            </Link>

            <Link
              to="/login"
              className="px-8 py-4 rounded-xl border border-red-700 hover:bg-red-900/20 transition"
            >

              View Features

            </Link>

          </div>

          {/* Features */}

          <div className="grid grid-cols-3 gap-8 mt-16">

            <div>

              <h2 className="text-3xl font-bold text-red-500">
                ⚡
              </h2>

              <p className="text-gray-400 mt-2">
                Fast Responses
              </p>

            </div>

            <div>

              <h2 className="text-3xl font-bold text-red-500">
                🔒
              </h2>

              <p className="text-gray-400 mt-2">
                Secure AI
              </p>

            </div>

            <div>

              <h2 className="text-3xl font-bold text-red-500">
                🌍
              </h2>

              <p className="text-gray-400 mt-2">
                Available 24/7
              </p>

            </div>

          </div>

        </motion.div>
                {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{
            opacity: 1,
            x: 0,
            y: [0, -12, 0],
          }}
          transition={{
            opacity: { duration: 1 },
            x: { duration: 1 },
            y: {
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            },
          }}
          className="relative"
        >

          <div className="rounded-3xl border border-red-900/40 bg-[#111111]/90 backdrop-blur-xl p-8 shadow-2xl shadow-red-900/20">

            {/* Header */}

            <div className="flex items-center gap-3">

              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-red-500 to-red-800 flex items-center justify-center text-xl">

                🤖

              </div>

              <div>

                <h3 className="font-bold">
                  NEW AI
                </h3>

                <p className="text-green-500 text-sm">
                  ● Online
                </p>

              </div>

            </div>

            {/* Conversation */}

            <div className="mt-8 space-y-4">

              <div className="bg-[#1b1b1b] rounded-xl p-4">

                <p className="text-sm text-gray-400 mb-2">
                  You
                </p>

                <p className="text-gray-200">

                  Build a modern React dashboard using
                  Tailwind CSS with analytics cards,
                  charts and a responsive sidebar.

                </p>

              </div>

              <div className="bg-gradient-to-r from-red-600/20 to-red-900/20 rounded-xl p-5 border border-red-700/30">

                <p className="text-sm text-red-300 mb-2">
                  NEW AI
                </p>

                <p className="text-gray-200 leading-7">

                  Sure! I'll generate a professional dashboard
                  including:

                </p>

                <ul className="mt-4 space-y-2 text-gray-300">

                  <li>✅ Responsive Sidebar</li>

                  <li>✅ Analytics Cards</li>

                  <li>✅ Interactive Charts</li>

                  <li>✅ Dark Theme UI</li>

                  <li>✅ Mobile Friendly Layout</li>

                </ul>

              </div>

            </div>

            {/* Features */}

            <div className="grid grid-cols-3 gap-5 mt-10">

              <div className="bg-[#1b1b1b] rounded-xl p-5 text-center">

                <MessageSquare
                  className="mx-auto text-red-500"
                />

                <p className="mt-3 text-sm">
                  Chat
                </p>

              </div>

              <div className="bg-[#1b1b1b] rounded-xl p-5 text-center">

                <Code2
                  className="mx-auto text-red-500"
                />

                <p className="mt-3 text-sm">
                  Code
                </p>

              </div>

              <div className="bg-[#1b1b1b] rounded-xl p-5 text-center">

                <ImageIcon
                  className="mx-auto text-red-500"
                />

                <p className="mt-3 text-sm">
                  Images
                </p>

              </div>

            </div>

          </div>

        </motion.div>
              </div>

    </section>
  );
}