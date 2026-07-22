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
    <section className="relative overflow-hidden bg-[#050505] py-32">

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

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-5 py-2">

            <Brain size={16} className="text-red-400" />

            <span className="text-red-300 text-sm">
              FEATURES
            </span>

          </div>

          <h2 className="mt-8 text-5xl md:text-7xl font-bold leading-tight">
            Everything.

            <br />

            <span className="bg-gradient-to-r from-red-500 to-orange-300 bg-clip-text text-transparent">

              Powered by AI.

            </span>
          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-lg leading-8 text-gray-400">
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

                className="
group
relative
overflow-hidden
rounded-[30px]
border
border-white/10
bg-[#111111]/80
backdrop-blur-xl
p-8
transition-all
duration-500
hover:-translate-y-3
hover:border-red-500/40
hover:shadow-[0_20px_80px_rgba(239,68,68,.15)]
"
              >

                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">

                  <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-red-600/20 blur-[110px]" />

                </div>

               <div
className="
relative
z-10
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
shadow-red-600/30
transition-all
duration-500
group-hover:scale-110
group-hover:rotate-6
"
>

                  <Icon size={28} />

                </div>

               <h3 className="relative z-10 mt-8 text-2xl font-semibold tracking-tight">

                  {feature.title}

                </h3>

               <p className="relative z-10 mt-4 leading-7 text-gray-400">

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