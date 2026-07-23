import { motion } from "framer-motion";
import {
  Brain,
  Code2,
  Image,
  Search,
  FileText,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Chat",
    desc: "Ask anything and receive intelligent answers instantly powered by advanced AI models.",
  },
  {
    icon: Code2,
    title: "Code Assistant",
    desc: "Generate, debug and explain React, JavaScript, Python and many more languages.",
  },
  {
    icon: Image,
    title: "Image Generation",
    desc: "Create stunning AI generated images from simple prompts within seconds.",
  },
  {
    icon: Search,
    title: "Smart Search",
    desc: "Search the web, summarize articles and discover trusted information instantly.",
  },
  {
    icon: FileText,
    title: "Document Analysis",
    desc: "Upload PDFs and documents to summarize, translate and understand any file.",
  },
  {
    icon: ShieldCheck,
    title: "Private Workspace",
    desc: "Your chats remain secure with cloud sync, encrypted storage and private history.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-[#050505] py-32 text-white"
    >
      {/* Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-250px] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-red-600/20 blur-[180px]" />

        <div className="absolute bottom-[-200px] right-[-100px] h-[500px] w-[500px] rounded-full bg-red-500/10 blur-[170px]" />
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

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="rounded-full border border-red-500/20 bg-red-500/10 px-5 py-2 text-sm uppercase tracking-[4px] text-red-400">
            Features
          </span>

          <h2 className="mt-8 text-5xl font-bold md:text-7xl">
            Everything You Need
            <br />

            <span className="bg-gradient-to-r from-red-500 to-orange-300 bg-clip-text text-transparent">
              In One Workspace
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            Powerful AI tools designed to help you chat, code, create images,
            summarize documents and boost productivity.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="mt-24 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.12,
                  duration: 0.5,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-[#111111]/80 p-8 backdrop-blur-xl transition-all duration-500 hover:border-red-500/40 hover:shadow-[0_20px_80px_rgba(239,68,68,.15)]"
              >
                {/* Hover Glow */}

                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-red-600/20 blur-[120px]" />
                </div>

                <div className="relative z-10">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-red-500 to-red-700 shadow-xl shadow-red-600/20">
                    <Icon size={30} />
                  </div>

                  <h3 className="mt-8 text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-5 leading-8 text-gray-400">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}