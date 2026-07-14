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
    <section className="bg-[#050505] py-28 px-6">

      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity:0, y:40 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          className="text-center mb-16"
        >

          <span className="uppercase tracking-[5px] text-red-500 font-semibold">
            FAQ
          </span>

          <h2 className="text-5xl font-black mt-5">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-400 mt-6">
            Everything you need to know about NEW AI.
          </p>

        </motion.div>

        <div className="space-y-5">

          {faqs.map((item,index)=>(

            <motion.div
              key={index}
              layout
              className="rounded-2xl border border-[#262626] bg-[#111111] overflow-hidden"
            >

              <button
                onClick={()=>setOpen(open===index?-1:index)}
                className="w-full flex justify-between items-center px-7 py-6"
              >

                <span className="font-semibold text-lg">
                  {item.question}
                </span>

                {open===index ? (
                  <Minus className="text-red-500"/>
                ) : (
                  <Plus className="text-red-500"/>
                )}

              </button>

              <AnimatePresence>

                {open===index && (

                  <motion.div
                    initial={{height:0,opacity:0}}
                    animate={{height:"auto",opacity:1}}
                    exit={{height:0,opacity:0}}
                    transition={{duration:.3}}
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

    </section>
  );
}