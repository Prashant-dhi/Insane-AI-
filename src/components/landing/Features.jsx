import { motion } from "framer-motion";
import {
  Bot,
  Code2,
  Image as ImageIcon,
  Mic,
  FileText,
  ShieldCheck,
  Sparkles,
  Brain,
  ArrowUpRight,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Smart reasoning",
    description:
      "Solves multi-step problems across code, math and logic — routed through the model that handles it best.",
    span: "md:col-span-2 md:row-span-2",
    featured: true,
  },
  { icon: Bot, title: "AI chat", description: "Natural, contextual conversations that remember what matters." },
  { icon: Code2, title: "Code generation", description: "Ship full features in React, Python, SQL and more." },
  { icon: ImageIcon, title: "AI images", description: "Turn prompts into art, illustrations and product visuals." },
  { icon: FileText, title: "Document AI", description: "Drop in PDFs — get answers, summaries and citations." },
  { icon: Mic, title: "Voice assistant", description: "Hands-free conversations with low-latency speech." },
  { icon: ShieldCheck, title: "Privacy first", description: "Your chats stay yours. Encrypted, never trained on." },
  { icon: Sparkles, title: "Fast performance", description: "Sub-second responses on premium routes." },
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-[#070607] py-28 text-[#f4f1ea]"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-40 right-0 h-[640px] w-[640px] rounded-full bg-[#ff2a2a]/15 blur-[200px]" />
      <div className="pointer-events-none absolute bottom-0 -left-40 h-[480px] w-[480px] rounded-full bg-[#ff5f4a]/10 blur-[180px]" />
      {/* Grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.3]"
        style={{
          backgroundImage: "radial-gradient(#ffffff10 1px, transparent 1px)",
          backgroundSize: "3px 3px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-8">
        {/* Meta strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-y border-white/10 py-3 text-[11px] uppercase tracking-[0.2em] text-white/50">
          <span>§ 003 · Capabilities</span>
          <span className="hidden md:inline">Eight tools, one workspace</span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff3131] shadow-[0_0_8px_#ff3131]" />
            Always on
          </span>
        </div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 grid grid-cols-12 gap-6"
        >
          <h2 className="col-span-12 font-serif text-[52px] leading-[0.95] tracking-[-0.03em] sm:text-[72px] lg:col-span-8 lg:text-[96px]">
            Everything
            <br />
            you need,{" "}
            <em className="text-[#ff3131]">nothing</em>
            <br />
            you don't.
          </h2>
          <p className="col-span-12 max-w-md self-end text-base leading-relaxed text-white/65 lg:col-span-4">
            Chat, code, imagery, documents and voice — unified in one thinking
            surface, powered by the world's leading models.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="mt-16 grid auto-rows-[220px] grid-cols-1 gap-4 md:grid-cols-4">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.06,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`
                  group relative flex flex-col justify-between overflow-hidden rounded-2xl border p-6
                  transition duration-500
                  ${item.featured
                    ? "border-[#ff3131]/30 bg-gradient-to-br from-[#ff3131]/[0.12] via-[#0d0b0c] to-[#0d0b0c] hover:border-[#ff3131]/60"
                    : "border-white/10 bg-[#0d0b0c]/70 hover:border-white/25 hover:bg-[#0d0b0c]"}
                  ${item.span ?? ""}
                `}
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#ff3131]/20 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

                {/* Index label */}
                <div className="relative flex items-start justify-between">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-white/40">
                    {String(index + 1).padStart(2, "0")}
                    {item.featured && (
                      <span className="ml-2 rounded-full border border-[#ff3131]/40 bg-[#ff3131]/10 px-2 py-0.5 text-[9px] text-[#ff8a8a]">
                        Featured
                      </span>
                    )}
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-white/30 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#ff6a6a]"
                  />
                </div>

                {/* Icon */}
                <div className="relative">
                  <div
                    className={`
                      flex items-center justify-center rounded-xl
                      ${item.featured ? "h-16 w-16" : "h-12 w-12"}
                      bg-gradient-to-br from-[#ff3131] to-[#7a0d0d]
                      shadow-[0_10px_30px_-10px_#ff3131]
                    `}
                  >
                    <Icon
                      size={item.featured ? 30 : 22}
                      className="text-[#f4f1ea]"
                    />
                  </div>
                </div>

                {/* Copy */}
                <div className="relative">
                  <h3
                    className={`font-serif tracking-tight ${
                      item.featured ? "text-3xl lg:text-4xl" : "text-xl"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`mt-2 leading-relaxed text-white/60 ${
                      item.featured ? "max-w-md text-base" : "text-sm"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>

                {/* Baseline */}
                <div className="relative mt-4 flex items-center justify-between border-t border-white/[0.06] pt-3 text-[10px] uppercase tracking-[0.2em] text-white/35">
                  <span>Included</span>
                  <span className="h-1 w-1 rounded-full bg-[#ff3131]" />
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Footer strip */}
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-[11px] uppercase tracking-[0.2em] text-white/45">
          <span>All plans · No feature gates</span>
          <a
            href="#pricing"
            className="inline-flex items-center gap-1.5 text-white/80 transition hover:text-[#ff6a6a]"
          >
            See pricing <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
