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
        className="relative overflow-hidden bg-[#050505] px-6 py-32"
      >
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

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20 text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-5 py-2">

              <Zap className="text-red-400" size={16} />

              <span className="text-red-300 text-sm uppercase tracking-[4px]">
                Pricing
              </span>

            </div>

            <h2 className="mt-8 text-5xl md:text-7xl font-bold leading-tight">
              Simple Pricing

              <br />

              <span className="bg-gradient-to-r from-red-500 to-orange-300 bg-clip-text text-transparent">

                For Everyone

              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400" >
              Upgrade anytime and unlock the full power of NEW AI. No hidden
              fees, cancel whenever you want.
            </p>
          </motion.div>

          {/* plans */}
          <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">

            <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-red-600/20 blur-[120px]" />

          </div>
          <div className="grid items-stretch gap-8 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                whileHover={{ y: -12 }}
                className={`

group

relative

overflow-hidden

flex

flex-col

rounded-[32px]

border

p-8

backdrop-blur-xl

transition-all

duration-500

hover:-translate-y-3

${plan.popular

                    ? "border-red-500 bg-[#111111]/90 shadow-[0_25px_80px_rgba(239,68,68,.25)]"

                    : "border-white/10 bg-[#111111]/80 hover:border-red-500/40 hover:shadow-[0_20px_80px_rgba(239,68,68,.12)]"

                  }


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
                  <span className="text-6xl font-bold bg-gradient-to-r from-red-500 to-orange-300 bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                  <span className="mb-1.5 text-gray-500">/month</span>
                </div>

                <div className="mt-8 flex-1 space-y-4">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div
                        className={`

flex

h-8

w-8

items-center

justify-center

rounded-full

${plan.popular

                            ? "bg-gradient-to-r from-red-500 to-red-700 shadow-lg shadow-red-600/30"

                            : "bg-red-500/15"

                          }

`}
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
                  className={`

mt-10

w-full

rounded-2xl

py-4

font-semibold

transition-all

duration-300

hover:scale-105

${plan.popular

                      ? "bg-gradient-to-r from-red-500 to-red-700 shadow-xl shadow-red-600/30"

                      : "border border-red-500/30 bg-white/5 hover:bg-red-500/10"

                    }

`}
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