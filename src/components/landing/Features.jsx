import { motion } from "framer-motion";
import {
  Bot,
  Code2,
  Image,
  Mic,
  FileText,
  ShieldCheck,
  Sparkles,
  Brain,
  ArrowUpRight,
} from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI Chat",
    description:
      "Have natural conversations with an intelligent AI assistant.",
  },
  {
    icon: Code2,
    title: "Code Generation",
    description:
      "Generate React, JavaScript, Python, Java and many more languages.",
  },
  {
    icon: Image,
    title: "AI Images",
    description:
      "Turn simple prompts into stunning AI generated artwork.",
  },
  {
    icon: FileText,
    title: "Document AI",
    description:
      "Upload PDFs and documents to get instant answers.",
  },
  {
    icon: Mic,
    title: "Voice Assistant",
    description:
      "Interact naturally using voice powered conversations.",
  },
  {
    icon: Brain,
    title: "Smart Reasoning",
    description:
      "Solve coding, maths and complex logical problems quickly.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy",
    description:
      "Your chats stay secure with modern protection.",
  },
  {
    icon: Sparkles,
    title: "Fast Performance",
    description:
      "Lightning fast responses with premium AI models.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-[#050505] py-28"
    >
      <div className="absolute right-0 top-0 w-[500px] h-[500px] rounded-full bg-red-700/10 blur-[180px]" />

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >

          <span className="inline-flex items-center gap-2 bg-red-900/20 border border-red-700 px-4 py-2 rounded-full text-red-400 text-sm">

            <Sparkles size={16} />

            Powerful Features

          </span>

          <h2 className="text-5xl lg:text-6xl font-black mt-8">

            Everything You Need

          </h2>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto mt-6 leading-8">

            NEW AI combines intelligent chat, coding assistance,
            image generation, document analysis and productivity
            tools into one modern platform.

          </p>

        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-7">
                    {features.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div

                key={item.title}

                initial={{
                  opacity: 0,
                  y: 40,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                viewport={{
                  once: true,
                }}

                transition={{
                  delay: index * 0.08,
                  duration: 0.5,
                }}

                whileHover={{
                  y: -10,
                }}

                className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-[#262626]
                bg-[#111111]
                p-7
                transition
                hover:border-red-600
                "

              >

                <div className="absolute -right-12 -top-12 w-32 h-32 rounded-full bg-red-600/10 blur-3xl opacity-0 group-hover:opacity-100 transition" />

                <div className="relative">

                  <div
                    className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-gradient-to-br
                    from-red-600
                    to-red-900
                    flex
                    items-center
                    justify-center
                    shadow-lg
                    shadow-red-900/30
                    "
                  >

                    <Icon
                      size={30}
                      className="text-white"
                    />

                  </div>

                  <h3 className="text-2xl font-bold mt-7">

                    {item.title}

                  </h3>

                  <p className="text-gray-400 leading-8 mt-4">

                    {item.description}

                  </p>

                 <div className="mt-8 flex items-center justify-between">
  <span className="text-sm text-gray-500">
    Included
  </span>

  <ArrowUpRight
    size={18}
    className="
      text-red-500
      group-hover:translate-x-1
      group-hover:-translate-y-1
      transition
    "
  />
</div>

                </div>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>

  );

}