import { Link } from "react-router-dom";

import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Bot,
  Code2,
  FileText,
  Image as ImageIcon,
  ArrowRight,
  Check,
  Command,
  CornerDownLeft,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function AIShowcase() {


  const verbs = [
    "writes code",
    "creates images",
    "reads PDFs",
    "answers anything",
  ];

  const modes = [
    {
      id: "chat",
      icon: Bot,
      label: "Chat",
    },
    {
      id: "code",
      icon: Code2,
      label: "Code",
    },
    {
      id: "image",
      icon: ImageIcon,
      label: "Images",
    },
    {
      id: "docs",
      icon: FileText,
      label: "Documents",
    },
  ];

  const stats = [
    {
      value: "2.4M+",
      label: "Prompts Daily",
    },
    {
      value: "180ms",
      label: "First Token",
    },
    {
      value: "99.99%",
      label: "Uptime",
    },
  ];

  const [verbIndex, setVerbIndex] = useState(0);

  const [mode, setMode] = useState("code");

  useEffect(() => {
    const interval = setInterval(() => {
      setVerbIndex((prev) => (prev + 1) % verbs.length);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050505] text-white">

      {/* Glow */}

      <div className="pointer-events-none absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-red-600/10 blur-[180px]" />

      <div className="pointer-events-none absolute right-0 bottom-0 h-[550px] w-[550px] rounded-full bg-red-700/10 blur-[220px]" />

      {/* Grid */}

      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff08 1px, transparent 1px),linear-gradient(90deg,#ffffff08 1px,transparent 1px)",
          backgroundSize: "55px 55px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:grid lg:grid-cols-[1.05fr_1fr] lg:gap-20">
        {/* ================= LEFT SIDE ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-red-400">
            <Sparkles size={14} />
            NEW AI Workspace
          </span>

          <h1 className="mt-8 text-5xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
            Your AI that
            <br />

            <span className="relative inline-block h-[80px] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={verbIndex}
                  initial={{
                    y: 50,
                    opacity: 0,
                  }}
                  animate={{
                    y: 0,
                    opacity: 1,
                  }}
                  exit={{
                    y: -50,
                    opacity: 0,
                  }}
                  transition={{
                    duration: .45,
                  }}
                  className="absolute left-0 bg-gradient-to-r from-red-400 via-red-500 to-red-700 bg-clip-text text-transparent"
                >
                  {verbs[verbIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-400">
            Chat naturally, generate production-ready code,
            create AI images, analyze PDFs, summarize
            documents and build anything—all inside one
            beautiful workspace.
          </p>

          {/* ================= Buttons ================= */}

          <div className="mt-10 flex flex-wrap items-center gap-5">

            <Link
              to="/Login"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-red-800 px-7 py-4 text-sm font-semibold transition hover:scale-105"
            >
              Start Chat

              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/Pricing"
              className="rounded-full border border-white/10 px-7 py-4 text-sm text-neutral-300 transition hover:border-red-500 hover:text-white"
            >
              View Pricing
            </Link>

          </div>

          {/* ================= Keyboard ================= */}


          {/* ================= Stats ================= */}

          <div className="mt-16 grid grid-cols-3 divide-x divide-white/10 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl">

            {stats.map((item) => (

              <div
                key={item.label}
                className="px-6 py-6 text-center"
              >
                <h2 className="text-3xl font-bold text-white">
                  {item.value}
                </h2>

                <p className="mt-2 text-xs uppercase tracking-[0.25em] text-neutral-500">
                  {item.label}
                </p>

              </div>

            ))}

          </div>

          {/* ================= Features ================= */}

          <div className="mt-14 space-y-4">

            {[
              "Unlimited AI Chat",
              "Code Generation",
              "Image Generation",
              "Document Analysis",
              "Fast Responses",
            ].map((feature) => (

              <div
                key={feature}
                className="flex items-center gap-3 text-neutral-300"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500/10">

                  <Check
                    size={15}
                    className="text-red-400"
                  />

                </div>

                <span>{feature}</span>

              </div>

            ))}

          </div>

        </motion.div>

        {/* ================= RIGHT SIDE START ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: .15,
            duration: .6,
          }}
          className="relative mt-20 lg:mt-0"
        >
          {/* Window Border */}

          <span className="absolute -left-2 -top-2 h-4 w-4 border-l border-t border-red-500/60" />
          <span className="absolute -right-2 -top-2 h-4 w-4 border-r border-t border-red-500/60" />
          <span className="absolute -left-2 -bottom-2 h-4 w-4 border-l border-b border-red-500/60" />
          <span className="absolute -right-2 -bottom-2 h-4 w-4 border-r border-b border-red-500/60" />

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#090909]/90 backdrop-blur-2xl shadow-[0_0_80px_rgba(255,0,0,.08)]">

            {/* Window Header */}

            <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">

              <span className="h-3 w-3 rounded-full bg-red-500"></span>

              <span className="h-3 w-3 rounded-full bg-yellow-500"></span>

              <span className="h-3 w-3 rounded-full bg-green-500"></span>

              <span className="ml-4 font-mono text-xs text-neutral-500">
                ~/new-ai/workspace
              </span>

            </div>

            {/* Navigation */}

            <div className="flex gap-2 border-b border-white/10 p-3">

              {modes.map((item) => {

                const Icon = item.icon;

                const active = mode === item.id;

                return (

                  <button
                    key={item.id}
                    onClick={() => setMode(item.id)}
                    className={`flex items-center gap-2 rounded-xl px-4 py-2 text-sm transition ${active
                        ? "bg-red-600/10 text-red-400 ring-1 ring-red-500/30"
                        : "text-neutral-500 hover:text-white"
                      }`}
                  >

                    <Icon size={15} />

                    {item.label}

                  </button>

                );

              })}

            </div>

            {/* Content */}

            <div className="min-h-[360px] p-6">

              {mode === "chat" && (

                <div className="space-y-4">

                  <div className="flex justify-end">

                    <div className="max-w-sm rounded-2xl rounded-br-sm bg-white/5 px-5 py-3 text-sm">

                      Create a professional SaaS landing page using React and Tailwind CSS.

                    </div>

                  </div>

                  <div className="max-w-md rounded-2xl rounded-bl-sm border border-red-500/20 bg-red-500/10 px-5 py-4">

                    <p className="text-sm leading-7 text-neutral-300">

                      Absolutely! I'll generate a modern SaaS landing page
                      featuring Hero, Features, Pricing, Testimonials,
                      Contact section, responsive layout, smooth animations,
                      and clean reusable React components.

                    </p>

                  </div>

                </div>

              )}

              {mode === "code" && (

                <>
                  <pre className="overflow-x-auto rounded-2xl border border-white/5 bg-black/50 p-5 font-mono text-[13px] leading-7">

                    {`export default function Hero(){
return(
<section>
<h1>Build AI Apps</h1>
<p>Create anything with NEW AI</p>
<button>
Get Started
</button>
</section>
)
}`}
                  </pre>

                  <div className="mt-5 flex flex-wrap gap-2">

                    {[
                      "React",
                      "Tailwind",
                      "TypeScript",
                      "Responsive",
                      "Dark UI",
                    ].map((tag) => (

                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-400"
                      >
                        {tag}
                      </span>

                    ))}

                  </div>

                </>

              )}
              {mode === "image" && (

                <div className="grid grid-cols-3 gap-3">

                  {[1, 2, 3, 4, 5, 6].map((item) => (

                    <div
                      key={item}
                      className="aspect-square overflow-hidden rounded-xl border border-white/5"
                      style={{
                        background:
                          item % 2 === 0
                            ? "radial-gradient(circle at 30% 30%,#ef4444 0%,#7f1d1d 45%,#050505 100%)"
                            : "radial-gradient(circle at 70% 70%,#fb7185 0%,#450a0a 50%,#050505 100%)",
                      }}
                    />

                  ))}

                </div>

              )}

              {mode === "docs" && (

                <div className="space-y-4">

                  <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4">

                    <FileText
                      size={20}
                      className="text-red-500"
                    />

                    <div className="flex-1">

                      <h3 className="font-medium">

                        AI-Research.pdf

                      </h3>

                      <p className="text-xs text-neutral-500">

                        42 Pages • Uploaded Successfully

                      </p>

                    </div>

                    <Check
                      size={18}
                      className="text-green-500"
                    />

                  </div>

                  <div className="space-y-3 text-sm text-neutral-300">

                    <div className="flex gap-2">

                      <span className="text-red-400">•</span>

                      Revenue increased by 18%.

                    </div>

                    <div className="flex gap-2">

                      <span className="text-red-400">•</span>

                      Customer growth reached 2.3 million users.

                    </div>

                    <div className="flex gap-2">

                      <span className="text-red-400">•</span>

                      AI adoption increased across enterprise customers.

                    </div>

                  </div>

                </div>

              )}

            </div>

            {/* Prompt Bar */}

            <div className="flex items-center gap-3 border-t border-white/10 bg-black/40 px-5 py-4">

              <Sparkles
                size={16}
                className="text-red-500"
              />

              <span className="flex-1 font-mono text-sm text-neutral-500">

                Ask NEW AI anything...

              </span>

              <kbd className="flex items-center gap-1 rounded-lg border border-white/10 px-2 py-1 text-[11px] text-neutral-500">

                <CornerDownLeft size={12} />

              </kbd>

            </div>

          </div>

        </motion.div>

      </div>

    </section>

  );

}


