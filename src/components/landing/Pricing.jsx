import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for getting started.",
    popular: false,
    features: [
      "10 AI Chats / Day",
      "Basic AI Model",
      "Community Support",
      "Markdown Support",
      "Basic History",
    ],
  },
  {
    name: "Pro",
    price: "$19",
    description: "Best for developers & creators.",
    popular: true,
    features: [
      "Unlimited Chats",
      "Latest AI Models",
      "Image Generation",
      "Voice Chat",
      "Priority Speed",
      "Chat Export",
      "Cloud Sync",
    ],
  },
  {
    name: "Enterprise",
    price: "$99",
    description: "For teams and businesses.",
    popular: false,
    features: [
      "Everything in Pro",
      "Unlimited Team Members",
      "Admin Dashboard",
      "API Access",
      "Analytics",
      "Dedicated Support",
      "Enterprise Security",
    ],
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-[#050505] py-28 px-6 relative overflow-hidden"
    >
      <div className="absolute w-[450px] h-[450px] bg-red-700/10 blur-[180px] rounded-full top-0 right-0"></div>

      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-red-500 uppercase tracking-[4px] font-semibold">
            Pricing
          </span>

          <h2 className="text-5xl font-black mt-4">
            Choose Your Plan
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg">
            Upgrade anytime and unlock the full power of NEW AI.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">

          {plans.map((plan, index) => (

            <motion.div
              key={index}
              initial={{ opacity:0, y:50 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }}
              transition={{ delay:index*.2 }}
              whileHover={{
                y:-12,
                scale:1.02
              }}
              className={`relative rounded-3xl p-8 border transition ${
                plan.popular
                  ? "border-red-600 bg-gradient-to-b from-[#161616] to-[#0f0f0f] shadow-2xl shadow-red-900/30"
                  : "border-[#262626] bg-[#111111]"
              }`}
            >

              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-2 rounded-full bg-red-600 text-sm font-semibold">
                  MOST POPULAR
                </div>
              )}

              <h3 className="text-3xl font-bold">
                {plan.name}
              </h3>

              <p className="text-gray-400 mt-2">
                {plan.description}
              </p>

              <div className="mt-8 flex items-end gap-2">

                <span className="text-6xl font-black">
                  {plan.price}
                </span>

                <span className="text-gray-500 mb-2">
                  /month
                </span>

              </div>

              <div className="mt-10 space-y-5">

                {plan.features.map((feature, i) => (

                  <div
                    key={i}
                    className="flex items-center gap-3"
                  >
                    <div className="w-8 h-8 rounded-full bg-red-900/30 flex items-center justify-center">
                      <Check size={16} className="text-red-500"/>
                    </div>

                    <span className="text-gray-300">
                      {feature}
                    </span>
                  </div>

                ))}

              </div>

              <button
                className={`w-full mt-12 py-4 rounded-xl font-semibold transition ${
                  plan.popular
                    ? "bg-gradient-to-r from-red-600 to-red-800 hover:scale-105"
                    : "border border-red-700 hover:bg-red-900/20"
                }`}
              >
                Get Started
              </button>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}