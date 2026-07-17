"use client"

import { motion } from "motion/react"
import { Star, Quote } from "lucide-react"

const reviews = [
  {
    name: "Alex Carter",
    role: "Frontend Developer",
    image: "https://i.pravatar.cc/150?img=12",
    review:
      "NEW AI completely changed my workflow. Code generation is incredibly fast and accurate.",
  },
  {
    name: "Sophia Lee",
    role: "UI/UX Designer",
    image: "https://i.pravatar.cc/150?img=47",
    review:
      "Beautiful interface, amazing AI responses and the experience feels premium.",
  },
  {
    name: "Michael Brown",
    role: "Software Engineer",
    image: "https://i.pravatar.cc/150?img=33",
    review:
      "This is one of the most polished AI assistants I've ever used. Highly recommended.",
  },
]

const stats = [
  { value: "50k+", label: "Active Developers" },
  { value: "4.9/5", label: "Average Rating" },
  { value: "1M+", label: "Lines Generated" },
]

export default function Page() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <section className="relative overflow-hidden bg-[#050505] px-6 py-28 text-white">
        {/* ambient glows */}
        <div className="pointer-events-none absolute -left-20 top-0 h-[400px] w-[400px] rounded-full bg-red-700/10 blur-[170px]" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-[400px] w-[400px] rounded-full bg-red-700/10 blur-[170px]" />

        <div className="relative mx-auto max-w-7xl">
          {/* heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-20 max-w-2xl text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-red-600/30 bg-red-600/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[4px] text-red-500">
              Testimonials
            </span>

            <h2 className="mt-6 text-balance text-4xl font-black leading-tight sm:text-5xl">
              Loved by <span className="text-red-500">Developers</span>
            </h2>

            <p className="mx-auto mt-6 text-pretty text-lg leading-relaxed text-gray-400">
              Thousands of developers and creators trust NEW AI to increase
              productivity every single day.
            </p>
          </motion.div>

          {/* review cards */}
          <div className="grid gap-8 lg:grid-cols-3">
            {reviews.map((user, index) => (
              <motion.div
                key={user.name}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="group relative flex flex-col rounded-3xl border border-[#262626] bg-gradient-to-b from-[#141414] to-[#0d0d0d] p-8 transition-colors duration-300 hover:border-red-600"
              >
                {/* quote mark */}
                <Quote
                  className="absolute right-8 top-8 text-red-600/15 transition-colors duration-300 group-hover:text-red-600/30"
                  size={48}
                  fill="currentColor"
                />

                <div className="flex gap-1 text-red-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} fill="currentColor" size={18} />
                  ))}
                </div>

                <p className="mt-8 flex-1 text-lg leading-relaxed text-gray-300">
                  &ldquo;{user.review}&rdquo;
                </p>

                <div className="mt-8 flex items-center gap-4 border-t border-[#262626] pt-6">
                  <img
                    src={user.image || "/placeholder.svg"}
                    alt={`Portrait of ${user.name}`}
                    className="h-14 w-14 rounded-full border-2 border-red-700/60 object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-white">{user.name}</h3>
                    <p className="text-sm text-gray-500">{user.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 grid grid-cols-1 gap-8 rounded-3xl border border-[#262626] bg-[#0d0d0d] p-10 sm:grid-cols-3"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-black text-red-500">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm uppercase tracking-wider text-gray-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  )
}