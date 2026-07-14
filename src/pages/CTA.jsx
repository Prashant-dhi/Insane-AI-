import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="relative py-32 bg-[#050505] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[700px] h-[700px] bg-red-600/10 blur-[180px] rounded-full"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative max-w-6xl mx-auto px-8"
      >
        <div className="rounded-[35px] border border-red-900/40 bg-gradient-to-br from-[#111111] to-[#0b0b0b] p-16 shadow-[0_0_80px_rgba(229,9,20,.15)]">

          <div className="text-center">

            <div className="inline-flex items-center gap-3 bg-red-900/20 border border-red-700/30 px-5 py-3 rounded-full mb-8">

              <Sparkles className="text-red-500" size={18} />

              <span className="text-red-400 font-medium">
                AI Powered Future
              </span>

            </div>

            <h2 className="text-6xl font-black leading-tight">

              Ready to Experience

              <span className="block mt-2 bg-gradient-to-r from-red-500 via-red-400 to-red-700 bg-clip-text text-transparent">

                NEW AI?

              </span>

            </h2>

            <p className="text-gray-400 text-xl max-w-3xl mx-auto mt-8 leading-9">

              Join thousands of developers, creators and businesses
              using NEW AI to code faster, write smarter and
              create amazing content.

            </p>

            <div className="flex flex-wrap justify-center gap-6 mt-14">

              <Link
                to="/signup"
                className="px-10 py-5 rounded-2xl bg-gradient-to-r from-red-600 to-red-800 hover:scale-105 transition duration-300 flex items-center gap-3 font-semibold shadow-lg shadow-red-900/40"
              >
                Get Started Free

                <ArrowRight size={20} />

              </Link>

              <Link
                to="/chat"
                className="px-10 py-5 rounded-2xl border border-red-700 hover:bg-red-900/20 transition duration-300 font-semibold"
              >
                Open Demo
              </Link>

            </div>

            {/* Stats */}

            <div className="grid md:grid-cols-3 gap-10 mt-20">

              <div>

                <h3 className="text-5xl font-black text-red-500">

                  100K+

                </h3>

                <p className="text-gray-500 mt-2">

                  Happy Users

                </p>

              </div>

              <div>

                <h3 className="text-5xl font-black text-red-500">

                  10M+

                </h3>

                <p className="text-gray-500 mt-2">

                  AI Conversations

                </p>

              </div>

              <div>

                <h3 className="text-5xl font-black text-red-500">

                  99.9%

                </h3>

                <p className="text-gray-500 mt-2">

                  Uptime

                </p>

              </div>

            </div>

          </div>

        </div>

      </motion.div>

    </section>
  );
}