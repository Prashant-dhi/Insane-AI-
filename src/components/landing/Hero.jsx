import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  MessageSquare,
  Code2,
  Image as ImageIcon,
  Bot,
  Plus,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white">

      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute left-1/2 top-[-250px] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-red-600/20 blur-[180px]" />

        <div className="absolute bottom-[-250px] right-[-150px] h-[500px] w-[500px] rounded-full bg-red-500/10 blur-[170px]" />

      </div>

      {/* Grid */}

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px,transparent 1px),linear-gradient(90deg,#ffffff 1px,transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <section className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-20">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .7 }}
          >

            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-5 py-2">

              <Sparkles
                size={16}
                className="text-red-400"
              />

              <span className="text-sm text-red-300">

                GPT-5 • Claude • Gemini • Llama

              </span>

            </div>

            <h1 className="mt-8 text-5xl font-bold leading-tight md:text-7xl">

              AI that feels

              <br />

              <span className="bg-gradient-to-r from-red-500 to-orange-300 bg-clip-text text-transparent">

                effortless.

              </span>

            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">

              Chat, generate images, write code, summarize documents,
              brainstorm ideas and work faster using the world's
              smartest AI models — all in one beautiful workspace.

            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                to="/signup"
                className="flex items-center gap-2 rounded-xl bg-red-600 px-8 py-4 font-semibold transition hover:bg-red-700"
              >
                Get Started
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/login"
                className="rounded-xl border border-[#2d2d2d] px-8 py-4 font-semibold transition hover:border-red-600"
              >
                Login
              </Link>

            </div>

            <div className="mt-14 flex gap-12">

              <div>
                <h2 className="text-3xl font-bold">
                  100K+
                </h2>
                <p className="text-gray-500">
                  Users
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold">
                  10M+
                </h2>
                <p className="text-gray-500">
                  Messages
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold">
                  99.9%
                </h2>
                <p className="text-gray-500">
                  Uptime
                </p>
              </div>

            </div>

          </motion.div>

                  {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#111111] shadow-2xl">

            {/* Header */}

            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-600">
                  <Sparkles size={18} />
                </div>

                <div>
                  <h3 className="font-semibold">NEW AI</h3>
                  <p className="text-xs text-gray-500">
                    GPT-5 Selected
                  </p>
                </div>

              </div>

              <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs text-green-400">
                Online
              </span>

            </div>

            {/* Chat */}

            <div className="space-y-5 p-6">

              <div className="flex justify-end">

                <div className="max-w-[75%] rounded-2xl bg-red-600 px-5 py-4 text-sm text-white">
                  Create a beautiful React dashboard with Tailwind CSS.
                </div>

              </div>

              <div className="flex">

                <div className="max-w-[85%] rounded-2xl bg-[#1a1a1a] px-5 py-4 text-sm leading-7 text-gray-300">

                  Absolutely! I'll create:

                  <ul className="mt-3 space-y-2 text-gray-400">

                    <li>• Modern Sidebar</li>
                    <li>• Analytics Dashboard</li>
                    <li>• Charts & Statistics</li>
                    <li>• Responsive Layout</li>
                    <li>• Beautiful Dark UI</li>

                  </ul>

                </div>

              </div>

            </div>

            {/* Input */}

            <div className="border-t border-white/10 p-5">

              <div className="flex items-center rounded-2xl bg-[#1a1a1a] px-4 py-3">

                <Plus
                  size={18}
                  className="text-gray-500"
                />

                <input
                  disabled
                  placeholder="Message NEW AI..."
                  className="flex-1 bg-transparent px-3 text-sm outline-none placeholder:text-gray-500"
                />

                <ArrowRight
                  size={18}
                  className="text-red-500"
                />

              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>

      {/* Features */}

      <section className="py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <p className="text-red-500 font-medium">
              Everything you need
            </p>

            <h2 className="mt-3 text-4xl md:text-5xl font-bold">
              Powerful AI Features
            </h2>

            <p className="mt-5 max-w-2xl mx-auto text-gray-400">
              Everything is built inside one clean workspace.
              Chat, code, images and productivity.
            </p>

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">

            {[
              {
                icon: MessageSquare,
                title: "AI Chat",
                desc: "Ask questions, brainstorm ideas and receive intelligent responses instantly."
              },

              {
                icon: Code2,
                title: "Code Assistant",
                desc: "Generate, explain and debug code in multiple programming languages."
              },

              {
                icon: ImageIcon,
                title: "Image Generator",
                desc: "Turn simple prompts into beautiful AI generated images."
              }

            ].map((item, index) => {

              const Icon = item.icon;

              return (

                <motion.div

                  key={index}

                  whileHover={{
                    y: -8,
                  }}
                >

                  <div className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-red-600/20
                  flex
                  items-center
                  justify-center
                  text-red-500
                  ">

                    <Icon size={28} />

                  </div>

                  <h3 className="mt-6 text-2xl font-semibold">

                    {item.title}

                  </h3>

                  <p className="mt-4 text-gray-400 leading-7">

                    {item.desc}

                  </p>

                </motion.div>

              );

            })}

          </div>

        </div>

      </section>

     
    </main>

  );

}
