import { motion } from "framer-motion";
import {
  Sparkles,
  Brain,
  Image,
  Code2,
  Globe,
  FileText,
} from "lucide-react";

const models = [
  {
    icon: Brain,
    title: "GPT-5",
    desc: "Advanced reasoning and conversations.",
  },
  {
    icon: Code2,
    title: "Code Assistant",
    desc: "Generate production ready code instantly.",
  },
  {
    icon: Image,
    title: "Image AI",
    desc: "Create stunning AI generated artwork.",
  },
  {
    icon: Globe,
    title: "Web Search",
    desc: "Find accurate answers from the internet.",
  },
  {
    icon: FileText,
    title: "Documents",
    desc: "Summarize PDF, DOCX and text files.",
  },
  {
    icon: Sparkles,
    title: "Creative AI",
    desc: "Write blogs, captions and stories.",
  },
];

export default function AIShowcase() {
  return (
    <section className="relative py-32 bg-[#050505]">

      <div className="max-w-7xl mx-auto px-6">

        <motion.div

          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}

          className="text-center"

        >

          <span className="text-red-500 uppercase tracking-[4px] text-sm">

            AI MODELS

          </span>

          <h2 className="mt-5 text-5xl md:text-6xl font-bold">

            Everything you need.

            <br />

            One AI Platform.

          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-gray-400 text-lg">

            Access multiple powerful AI tools from a
            single beautiful workspace.

          </p>

        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {models.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div

                key={index}

                initial={{
                  opacity: 0,
                  y: 40,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                transition={{
                  delay: index * .1,
                  duration: .6,
                }}

                viewport={{
                  once: true,
                }}

                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}

                className="group relative overflow-hidden rounded-3xl border border-[#202020] bg-[#101010] p-8"

              >

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">

                  <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-red-600/20 blur-[90px]" />

                </div>

                <div className="relative z-10">

                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-red-600 to-red-800 flex items-center justify-center">

                    <Icon size={28} />

                  </div>

                  <h3 className="mt-7 text-2xl font-bold">

                    {item.title}

                  </h3>

                  <p className="mt-3 text-gray-400 leading-7">

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