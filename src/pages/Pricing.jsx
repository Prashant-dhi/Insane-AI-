import { useState } from "react";
import {
  Check,
  Crown,
  Sparkles,
  X,
  CreditCard,
  ShieldCheck,
  Zap,
} from "lucide-react";

import { usePlan } from "../context/PlanContext";
import { useNotification } from "../context/NotificationContext";

export default function Pricing() {

  const { plan, setPlan } = usePlan();

  const { addNotification } = useNotification();

  const [billing, setBilling] = useState("monthly");
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      id: "free",
      name: "Free",
      price: 0,
      description: "Perfect for getting started.",
      features: [
        "Basic AI Chat",
        "100 Messages / Day",
        "Basic History",
        "Community Support",
      ],
    },

    {
      id: "pro",
      name: "Pro",
      price: 19,
      description: "Best for creators and developers.",
      popular: true,
      features: [
        "Unlimited AI Chat",
        "Unlimited Images",
        "GPT-5 Access",
        "Voice Chat",
        "Priority Speed",
        "Premium Support",
      ],
    },

    {
      id: "enterprise",
      name: "Enterprise",
      price: 99,
      description: "Built for teams & companies.",
      features: [
        "Everything in Pro",
        "Unlimited Team Members",
        "Admin Dashboard",
        "Analytics",
        "Priority Support",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white px-5 py-10 lg:px-10">

      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="text-center">

          <div className="flex justify-center">

            <div className="h-20 w-20 rounded-full bg-red-600/20 flex items-center justify-center">

              <Crown
                className="text-red-500"
                size={42}
              />

            </div>

          </div>

          <h1 className="mt-8 text-5xl font-bold">

            Upgrade to NEW AI Pro

          </h1>

          <p className="mt-5 max-w-2xl mx-auto text-gray-400 leading-7">

            Unlock unlimited AI chats, premium GPT models,
            image generation, lightning-fast responses,
            voice conversations and many more powerful
            productivity tools.

          </p>

          {/* Billing */}

          <div className="mt-10 flex justify-center">

            <div className="rounded-2xl border border-[#262626] bg-[#111111] p-1 flex">

              <button
                onClick={() => setBilling("monthly")}
                className={`px-6 py-3 rounded-xl transition

                ${
                  billing === "monthly"
                    ? "bg-red-600"
                    : "hover:bg-[#1a1a1a]"
                }`}
              >
                Monthly
              </button>

              <button
                onClick={() => setBilling("yearly")}
                className={`px-6 py-3 rounded-xl transition

                ${
                  billing === "yearly"
                    ? "bg-red-600"
                    : "hover:bg-[#1a1a1a]"
                }`}
              >
                Yearly
              </button>

            </div>

          </div>

        </div>

        {/* Pricing Cards */}

        <div className="grid gap-8 mt-16 lg:grid-cols-3">

          {plans.map((item) => {

            const price =
              billing === "monthly"
                ? item.price
                : Math.round(item.price * 10);

            const isCurrent =
              plan === item.id;

            return (

              <div
                key={item.id}
                className={`
                  relative
                  rounded-3xl
                  border
                  bg-[#111111]
                  p-8
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-red-600
                  hover:shadow-2xl
                  hover:shadow-red-900/20

                  ${
                    item.popular
                      ? "border-red-600"
                      : "border-[#262626]"
                  }
                `}
              >

                {item.popular && (

                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-red-600 px-5 py-2 text-sm font-semibold flex items-center gap-2">

                    <Sparkles size={15} />

                    Most Popular

                  </div>

                )}

                {isCurrent && (

                  <div className="absolute top-5 right-5 rounded-full bg-green-600 px-3 py-1 text-xs">

                    Current Plan

                  </div>

                )}

                <h2 className="text-3xl font-bold">

                  {item.name}

                </h2>

                <p className="mt-3 text-gray-400">

                  {item.description}

                </p>

                <div className="mt-8">

                  <span className="text-5xl font-bold">

                    ${price}

                  </span>

                  <span className="text-gray-500">

                    /{billing === "monthly" ? "month" : "year"}

                  </span>

                </div>
                                <button
                  disabled={isCurrent}
                  onClick={() => setSelectedPlan(item)}
                  className={`mt-8 w-full rounded-xl py-3 font-semibold transition

                  ${
                    isCurrent
                      ? "cursor-not-allowed bg-[#1b1b1b] text-gray-500"
                      : "bg-gradient-to-r from-red-600 to-red-800 hover:scale-105"
                  }`}
                >
                  {isCurrent ? "Current Plan" : "Upgrade Now"}
                </button>

                <div className="mt-8 space-y-4">

                  {item.features.map((feature) => (

                    <div
                      key={feature}
                      className="flex items-center gap-3"
                    >

                      <Check
                        size={18}
                        className="text-red-500"
                      />

                      <span className="text-gray-300">
                        {feature}
                      </span>

                    </div>

                  ))}

                </div>

              </div>

            );

          })}

        </div>

        {/* Bottom Benefits */}

        <div className="mt-20 grid gap-6 md:grid-cols-3">

          <div className="rounded-3xl border border-[#262626] bg-[#111111] p-8">

            <Zap className="text-red-500" size={34} />

            <h3 className="mt-5 text-xl font-bold">
              Lightning Fast
            </h3>

            <p className="mt-3 text-gray-400">
              Faster AI responses with priority servers.
            </p>

          </div>

          <div className="rounded-3xl border border-[#262626] bg-[#111111] p-8">

            <CreditCard
              className="text-red-500"
              size={34}
            />

            <h3 className="mt-5 text-xl font-bold">
              Secure Payments
            </h3>

            <p className="mt-3 text-gray-400">
              100% encrypted payment experience.
            </p>

          </div>

          <div className="rounded-3xl border border-[#262626] bg-[#111111] p-8">

            <ShieldCheck
              className="text-red-500"
              size={34}
            />

            <h3 className="mt-5 text-xl font-bold">
              Premium Support
            </h3>

            <p className="mt-3 text-gray-400">
              Dedicated priority customer support.
            </p>

          </div>

        </div>

      </div>

      {/* Payment Modal */}

      {selectedPlan && (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-5">

          <div className="w-full max-w-md rounded-3xl border border-[#262626] bg-[#111111] p-8">

            <div className="flex items-center justify-between">

              <h2 className="text-2xl font-bold">

                Upgrade Plan

              </h2>

              <button
                onClick={() => setSelectedPlan(null)}
              >

                <X />

              </button>

            </div>

            <div className="mt-8 rounded-2xl bg-[#181818] p-6">

              <h3 className="text-3xl font-bold text-red-500">

                {selectedPlan.name}

              </h3>

              <p className="mt-2 text-gray-400">

                Billing:
                {" "}
                {billing}

              </p>

              <p className="mt-2 text-5xl font-bold">

                $

                {billing === "monthly"
                  ? selectedPlan.price
                  : Math.round(selectedPlan.price * 10)}

              </p>

            </div>

            <button
              className="mt-8 w-full rounded-xl bg-gradient-to-r from-red-600 to-red-800 py-3 font-semibold transition hover:scale-105"
              onClick={() => {

                setPlan(selectedPlan.id);

                addNotification({

                  title: "Plan Updated",

                  message: `You upgraded to ${selectedPlan.name}.`,

                  type: "system",

                });

                alert(
                  "Payment Gateway Coming Soon 🚀"
                );

                setSelectedPlan(null);

              }}
            >

              Continue Payment

            </button>

          </div>

        </div>

      )}

    </div>

  );

}