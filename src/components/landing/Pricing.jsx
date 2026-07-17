"use client"

import { motion } from "motion/react"
import { Check, Zap } from "lucide-react"

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
]

export default function Page() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <section
        id="pricing"
        className="relative overflow-hidden bg-[#050505] px-6 py-28"
      >
        {/* ambient glows */}
        <div className="pointer-events-none absolute right-0 top-0 h-[450px] w-[450px] rounded-full bg-red-700/10 blur-[180px]" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-[450px] w-[450px] rounded-full bg-red-700/10 blur-[180px]" />

        <div className="relative mx-auto max-w-7xl">
          {/* heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20 text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-red-600/30 bg-red-600/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[4px] text-red-500">
              Pricing
            </span>

            <h2 className="mt-6 text-balance text-4xl font-black leading-tight sm:text-5xl">
              Choose Your <span className="text-red-500">Plan</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-gray-400">
              Upgrade anytime and unlock the full power of NEW AI. No hidden
              fees, cancel whenever you want.
            </p>
          </motion.div>

          {/* plans */}
          <div className="grid items-stretch gap-8 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                whileHover={{ y: -12 }}
                className={`relative flex flex-col rounded-3xl border p-8 transition-colors duration-300 ${
                  plan.popular
                    ? "border-red-600 bg-gradient-to-b from-[#181818] to-[#0d0d0d] shadow-2xl shadow-red-900/30"
                    : "border-[#262626] bg-gradient-to-b from-[#141414] to-[#0d0d0d] hover:border-red-700"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-red-600 px-5 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-red-900/40">
                    <Zap size={14} fill="currentColor" />
                    Most Popular
                  </div>
                )}

                <div className="flex items-baseline justify-between">
                  <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                </div>

                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                  {plan.description}
                </p>

                <div className="mt-8 flex items-end gap-2 border-b border-[#262626] pb-8">
                  <span className="text-5xl font-black text-white">
                    {plan.price}
                  </span>
                  <span className="mb-1.5 text-gray-500">/month</span>
                </div>

                <div className="mt-8 flex-1 space-y-4">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div
                        className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full ${
                          plan.popular ? "bg-red-600" : "bg-red-900/30"
                        }`}
                      >
                        <Check
                          size={14}
                          className={plan.popular ? "text-white" : "text-red-500"}
                          strokeWidth={3}
                        />
                      </div>
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  className={`mt-10 w-full rounded-xl py-4 font-semibold transition-transform duration-200 hover:scale-105 ${
                    plan.popular
                      ? "bg-gradient-to-r from-red-600 to-red-800 text-white shadow-lg shadow-red-900/30"
                      : "border border-red-700 text-white hover:bg-red-900/20"
                  }`}
                >
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}