import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";


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
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white">

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

      <section
        id="pricing"
        className="relative z-10 px-6 py-32"
      >
        <div className="mx-auto max-w-7xl">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
            className="text-center"
          >

            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-5 py-2">

              <Zap
                className="text-red-400"
                size={16}
              />

              <span className="text-sm uppercase tracking-[4px] text-red-300">
                Pricing
              </span>

            </div>

            <h2 className="mt-8 text-5xl font-bold leading-tight md:text-7xl">

              Simple Pricing

              <br />

              <span className="bg-gradient-to-r from-red-500 to-orange-300 bg-clip-text text-transparent">

                For Everyone

              </span>

            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">

              Upgrade anytime and unlock the full power of NEW AI.
              No hidden fees. Cancel whenever you want.

            </p>

          </motion.div>

          <div className="mt-24 grid gap-8 lg:grid-cols-3">

        {plans.map((plan, index) => (
  <motion.div
    key={plan.name}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{
      delay: index * 0.15,
      duration: 0.6,
    }}
    whileHover={{
      y: -12,
      scale: 1.02,
    }}
    className={`group relative overflow-hidden rounded-[32px] border backdrop-blur-xl transition-all duration-500 ${
      plan.popular
        ? "border-red-500 bg-[#111111]/90 shadow-[0_25px_80px_rgba(239,68,68,.28)]"
        : "border-white/10 bg-[#111111]/80 hover:border-red-500/40 hover:shadow-[0_20px_80px_rgba(239,68,68,.15)]"
    }`}
  >
    {/* Glow */}

    <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">

      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-red-600/20 blur-[120px]" />

    </div>

    {plan.popular && (
      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-red-600 to-red-800 px-5 py-2 text-xs font-bold uppercase tracking-wider shadow-xl shadow-red-900/40">

        <div className="flex items-center gap-2">

          <Zap size={14} />

          Most Popular

        </div>

      </div>
    )}

    <div className="relative z-10 p-8">

      <h3 className="text-2xl font-bold">

        {plan.name}

      </h3>

      <p className="mt-3 leading-7 text-gray-400">

        {plan.description}

      </p>

      <div className="mt-8 flex items-end gap-2 border-b border-white/10 pb-8">

        <span className="bg-gradient-to-r from-red-500 to-orange-300 bg-clip-text text-6xl font-bold text-transparent">

          {plan.price}

        </span>

        <span className="mb-2 text-gray-500">

          /month

        </span>

      </div>

      <div className="mt-8 space-y-5">

        {plan.features.map((feature) => (
  <div
    key={feature}
    className="flex items-center gap-4"
  >
    <div
      className={`flex h-8 w-8 items-center justify-center rounded-full ${
        plan.popular
          ? "bg-gradient-to-r from-red-500 to-red-700 shadow-lg shadow-red-600/30"
          : "bg-red-500/15"
      }`}
    >
      <Check
        size={15}
        strokeWidth={3}
        className={plan.popular ? "text-white" : "text-red-500"}
      />
    </div>

    <span className="text-gray-300">
      {feature}
    </span>
  </div>
))}

</div>

<button
  className={`mt-10 w-full rounded-2xl py-4 font-semibold transition-all duration-300 hover:scale-105 ${
    plan.popular
      ? "bg-gradient-to-r from-red-500 to-red-700 text-white shadow-xl shadow-red-600/30"
      : "border border-red-500/30 bg-white/5 text-white hover:bg-red-500/10"
  }`}
>
  Get Started
</button>

</div>

</motion.div>
))}
</div>

</div>

</section>

</main>
);
}
