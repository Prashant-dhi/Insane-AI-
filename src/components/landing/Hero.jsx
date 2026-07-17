import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
  Code2,
  Image as ImageIcon,
  MessageSquare,
  Command,
  Plus,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070607] text-[#f4f1ea]">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-64 -right-40 h-[780px] w-[780px] rounded-full bg-[#ff2a2a]/25 blur-[200px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[560px] w-[560px] rounded-full bg-[#ff5f4a]/10 blur-[180px]" />
      {/* Dot grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: "radial-gradient(#ffffff10 1px, transparent 1px)",
          backgroundSize: "3px 3px",
        }}
      />

      {/* NAV */}
      <header className="relative z-20 mx-auto flex max-w-[1400px] items-center justify-between px-8 py-6">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-[#ff3131] to-[#7a0d0d] shadow-[0_0_20px_-4px_#ff3131]">
            <Sparkles className="h-3.5 w-3.5" />
          </div>
          <span className="font-serif text-lg tracking-tight">newai</span>
          <span className="ml-1 rounded-full border border-white/15 px-2 py-0.5 text-[10px] uppercase tracking-widest text-white/50">
            v3
          </span>
        </div>
        <nav className="hidden items-center gap-8 text-sm text-white/60 md:flex">
          <a href="#work" className="hover:text-white">Work</a>
          <a href="#models" className="hover:text-white">Models</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#journal" className="hover:text-white">Journal</a>
        </nav>
        <Link
          to="/login"
          className="inline-flex items-center gap-1.5 rounded-full bg-[#c1272d] px-4 py-2 text-sm text-[#f4f1ea] transition hover:bg-[#ff3131]"
        >
          Open app <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </header>

      {/* HERO */}
      <section className="relative z-10 mx-auto max-w-[1400px] px-8 pb-24 pt-12">
        {/* Meta strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-y border-white/10 py-3 text-[11px] uppercase tracking-[0.2em] text-white/50">
          <span>Issue 001 · Winter 2026</span>
          <span className="hidden md:inline">A dispatch on intelligent tools</span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff3131] shadow-[0_0_8px_#ff3131]" />
            Live · 4 models routing
          </span>
        </div>

        <div className="grid grid-cols-12 gap-6 pt-10 lg:pt-14">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-12 lg:col-span-8"
          >
            <h1 className="font-serif text-[64px] leading-[0.92] tracking-[-0.03em] sm:text-[96px] lg:text-[132px]">
              An assistant
              <br />
              that <em className="text-[#ff3131]">thinks</em>
              <br />
              <span className="inline-flex items-center gap-4">
                with you.
                <span className="inline-block h-2 w-24 translate-y-4 bg-[#ff3131]" />
              </span>
            </h1>

            <div className="mt-10 grid grid-cols-12 items-end gap-6">
              <p className="col-span-12 max-w-md text-base leading-relaxed text-white/65 md:col-span-6">
                One workspace routes every prompt to the best available model —
                GPT-5, Claude, Gemini, Llama — so you spend time on the answer,
                not the tool.
              </p>
              <div className="col-span-12 flex flex-wrap items-center gap-3 md:col-span-6 md:justify-end">
                <Link
                  to="/login"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-[#ff4141] to-[#c81818] px-6 py-3.5 text-sm font-medium text-[#f4f1ea] shadow-[0_10px_40px_-10px_#ff3131] transition hover:shadow-[0_16px_50px_-10px_#ff3131]"
                >
                  Start writing
                  <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
                <Link
                  to="/login"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3.5 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/[0.08]"
                >
                  Watch demo
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right column — chat card */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-12 lg:col-span-4"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative rounded-2xl border border-white/10 bg-[#0d0b0c]/80 p-5 shadow-[0_40px_80px_-30px_rgba(255,49,49,0.35)] backdrop-blur-xl"
            >
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-[#ff3131] to-[#7a0d0d]">
                    <Sparkles className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold">newai</p>
                    <p className="text-[10px] uppercase tracking-widest text-white/40">
                      GPT-5 · routed
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-medium text-emerald-400">
                  Online
                </span>
              </div>

              <div className="mt-4 space-y-3">
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="rounded-xl bg-white/[0.04] p-3 text-[13px] leading-relaxed text-white/85"
                >
                  <p className="mb-1 text-[10px] uppercase tracking-widest text-white/40">You</p>
                  Draft a launch essay in the voice of a design studio, 300 words, warm but precise.
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="rounded-xl border border-[#ff3131]/25 bg-gradient-to-br from-[#ff3131]/[0.12] to-[#ff3131]/[0.03] p-3 text-[13px] leading-relaxed text-white/90"
                >
                  <p className="mb-1 text-[10px] uppercase tracking-widest text-[#ff8a8a]">newai</p>
                  <p className="font-serif text-[15px] italic leading-snug">
                    "There is a quiet kind of intelligence — the sort that doesn't announce itself…"
                  </p>
                  <div className="mt-2 flex items-center gap-2 text-[10px] text-white/45">
                    <span className="flex gap-1">
                      {[0, 1, 2].map((i) => (
                        <motion.span
                          key={i}
                          animate={{ opacity: [0.2, 1, 0.2] }}
                          transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.15 }}
                          className="h-1 w-1 rounded-full bg-[#ff5a5a]"
                        />
                      ))}
                    </span>
                    writing · 284 / 300 words
                  </div>
                </motion.div>
              </div>

              <div className="mt-4 flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2">
                <Plus className="h-4 w-4 text-white/40" />
                <span className="flex-1 text-xs text-white/40">Ask anything…</span>
                <kbd className="flex items-center gap-1 rounded border border-white/15 px-1.5 py-0.5 text-[10px] text-white/60">
                  <Command className="h-3 w-3" /> K
                </kbd>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Capabilities */}
        <div className="mt-20 grid grid-cols-12 gap-6 border-t border-white/10 pt-10">
          <div className="col-span-12 md:col-span-3">
            <p className="text-[11px] uppercase tracking-[0.2em] text-white/40">What it does</p>
          </div>
          {[
            { n: "01", icon: MessageSquare, t: "Writes", d: "Long-form drafts, replies, briefs — in your voice." },
            { n: "02", icon: Code2, t: "Codes", d: "Ships full features across React, Python, SQL." },
            { n: "03", icon: ImageIcon, t: "Designs", d: "Generates, edits and iterates on visuals." },
          ].map(({ n, icon: Icon, t, d }) => (
            <div key={n} className="col-span-12 md:col-span-3">
              <div className="flex items-baseline justify-between text-[11px] uppercase tracking-[0.2em] text-white/40">
                <span>{n}</span>
                <Icon className="h-3.5 w-3.5 text-[#ff6a6a]" />
              </div>
              <h3 className="mt-3 font-serif text-3xl tracking-tight">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{d}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
