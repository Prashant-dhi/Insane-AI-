import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is NEW AI?",
    answer:
      "NEW AI is an advanced AI assistant that helps with coding, writing, research, image generation, document analysis, and much more."
  },
  {
    question: "Can I upload PDFs and Images?",
    answer:
      "Yes. NEW AI supports PDF, DOCX, TXT, Images and many more file types for AI analysis."
  },
  {
    question: "Does NEW AI support coding?",
    answer:
      "Absolutely. It can generate, explain, debug and optimize code in multiple programming languages."
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. Your chats are encrypted and protected using modern security standards."
  },
  {
    question: "Can I generate AI Images?",
    answer:
      "Yes. Simply type your prompt and NEW AI can generate stunning AI images."
  }
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="relative overflow-hidden bg-[#050505] py-32 px-6 text-white">

      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute left-1/2 top-[-250px] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-red-600/20 blur-[180px]" />

        <div className="absolute bottom-[-220px] right-[-120px] h-[500px] w-[500px] rounded-full bg-red-500/10 blur-[170px]" />

      </div>

      {/* Square Grid */}

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px,transparent 1px),linear-gradient(90deg,#ffffff 1px,transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">

        <div className="max-w-5xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >

            <span className="uppercase tracking-[5px] text-red-500 font-semibold">
              FAQ
            </span>
            <h2 className="mt-8 text-5xl md:text-7xl font-bold leading-tight">

              Frequently Asked

              <br />

              <span className="bg-gradient-to-r from-red-500 to-orange-300 bg-clip-text text-transparent">

                Questions

              </span>

            </h2>

            <p className="mt-8 max-w-3xl mx-auto text-lg leading-8 text-gray-400">
              Everything you need to know about NEW AI.
            </p>

          </motion.div>

          <div className="space-y-5">

            {faqs.map((item, index) => (

              <motion.div
                key={index}
                layout
                className="
group
relative
overflow-hidden
rounded-[28px]
border
border-white/10
bg-[#111111]/80
backdrop-blur-xl
transition-all
duration-500
hover:border-red-500/40
hover:shadow-[0_20px_80px_rgba(239,68,68,.15)]
"
              >

                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-red-600/20 blur-[120px]" />
                </div>

                <button
                  onClick={() => setOpen(open === index ? -1 : index)}
                  className="relative z-10 flex w-full items-center justify-between px-8 py-7"
                >

                  <span className="font-semibold text-lg">
                    {item.question}
                  </span>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500/10">

                    {open === index ? (
                      <Minus className="text-red-400" size={18} />
                    ) : (
                      <Plus className="text-red-400" size={18} />
                    )}

                  </div>

                </button>

                <AnimatePresence>

                  {open === index && (

                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: .3 }}
                    >

                      <div className="px-7 pb-6 text-gray-400 leading-8">

                        {item.answer}

                      </div>

                    </motion.div>

                  )}

                </AnimatePresence>

              </motion.div>

            ))}


          </div>
        </div>

      </div>

    </section>
  );
}