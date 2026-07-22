import { motion } from "framer-motion";
import {
  Brain,
  Image,
  Code2,
  FileText,
  Search,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Chat",
    desc: "Ask anything and receive intelligent responses instantly powered by the latest AI models.",
  },
  {
    icon: Code2,
    title: "Code Assistant",
    desc: "Generate production-ready React, JavaScript, Python and SQL code in seconds.",
  },
  {
    icon: Image,
    title: "Image Generation",
    desc: "Create stunning AI-generated images from simple prompts with one click.",
  },
  {
    icon: Search,
    title: "Smart Search",
    desc: "Search the web, summarize information and get trusted answers instantly.",
  },
  {
    icon: FileText,
    title: "Documents",
    desc: "Upload PDFs and documents for summaries, explanations and AI-powered analysis.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Workspace",
    desc: "Your conversations stay private with secure authentication and cloud storage.",
  },
];

export default function Features() {
  return (
    <section className="bg-[#050505] py-32">

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span className="text-red-500 uppercase tracking-[5px] text-sm">
            FEATURES
          </span>

          <h2 className="mt-6 text-5xl md:text-6xl font-bold">
            Everything you need
            <br />
            to work faster.
          </h2>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
            Powerful AI tools designed to help you write, code,
            create, search and stay productive from one workspace.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-20">

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (

              <motion.div

                key={index}

                initial={{
                  opacity: 0,
                  y: 50,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                viewport={{
                  once: true,
                }}

                transition={{
                  delay: index * 0.1,
                }}

                whileHover={{
                  y: -10,
                }}

                className="group rounded-3xl border border-[#202020] bg-[#101010] p-8 transition"

              >

                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-red-600 to-red-800 flex items-center justify-center mb-8 group-hover:scale-110 transition">

                  <Icon size={28} />

                </div>

                <h3 className="text-2xl font-bold">

                  {feature.title}

                </h3>

                <p className="mt-5 leading-8 text-gray-400">

                  {feature.desc}

                </p>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}