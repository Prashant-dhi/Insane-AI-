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

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute left-1/2 top-[-250px] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-red-600/20 blur-[180px]" />

        <div className="absolute bottom-[-250px] right-[-150px] h-[500px] w-[500px] rounded-full bg-red-500/10 blur-[170px]" />

      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px,transparent 1px),linear-gradient(90deg,#ffffff 1px,transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">

        <motion.div

          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}

          className="text-center"

        >
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-5 py-2">

            <Sparkles size={16} className="text-red-400" />

            <span className="text-red-300 text-sm">
              AI MODELS
            </span>

          </div>

          <h2 className="mt-8 text-5xl md:text-7xl font-bold leading-tight">

            One Platform.

            <br />

            <span className="bg-gradient-to-r from-red-500 to-orange-300 bg-clip-text text-transparent">

              Unlimited AI.

            </span>

          </h2>

          <p className="mt-8 max-w-2xl mx-auto text-lg leading-8 text-gray-400">

            Use GPT-5, Claude, Gemini, Image AI, Code AI and many more powerful models from one beautiful workspace.

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

                className="
group
relative
overflow-hidden
rounded-[28px]
border
border-white/10
bg-[#111111]/80
backdrop-blur-xl
p-8
transition-all
duration-500
hover:-translate-y-3
hover:border-red-500/40
hover:shadow-[0_20px_80px_rgba(239,68,68,.18)]
"

              >
                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">

                  <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-red-600/20 blur-[110px]" />

                </div>

                <div className="relative z-10">

                  <div
                    className="
flex
h-16
w-16
items-center
justify-center
rounded-2xl
bg-gradient-to-br
from-red-500
to-red-700
shadow-lg
shadow-red-600/20
group-hover:scale-110
transition
duration-500
"
                  >

                    <Icon size={28} />

                  </div>

                 <h3 className="mt-7 text-2xl font-semibold tracking-tight">

                    {item.title}

                  </h3>

                 <p className="mt-4 leading-7 text-gray-400">

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