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
      <section className="relative overflow-hidden bg-[#050505] px-6 py-32 text-white">

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

        {/* ambient glows */}
        <div className="pointer-events-none absolute -left-20 top-0 h-[400px] w-[400px] rounded-full bg-red-700/10 blur-[170px]" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-[400px] w-[400px] rounded-full bg-red-700/10 blur-[170px]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-20 max-w-2xl text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-5 py-2">

              <Star className="text-red-400" size={16} />

              <span className="text-red-300 text-sm uppercase tracking-[4px]">
                Testimonials
              </span>

            </div>



            <br />

            <span className="bg-gradient-to-r from-red-500 to-orange-300 bg-clip-text text-transparent">

              Trusted by Developers Worldwide

            </span>
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
                className="
group
relative
overflow-hidden
rounded-[30px]
border
border-white/10
bg-[#111111]/80
backdrop-blur-xl
p-8
transition-all
duration-500
hover:-translate-y-3
hover:border-red-500/40
hover:shadow-[0_20px_80px_rgba(239,68,68,.18)]
"
              >

                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">

                  <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-red-600/20 blur-[120px]" />

                </div>
                {/* quote mark */}
                <Quote
                  className="absolute right-8 top-8 text-red-500/20 transition duration-500 group-hover:text-red-500/40"
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
                    className="h-16 w-16 rounded-full border-2 border-red-500 shadow-lg shadow-red-600/30 object-cover"
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
            className="
mt-20
grid
grid-cols-1
gap-8
rounded-[32px]
border
border-white/10
bg-[#111111]/80
backdrop-blur-xl
p-12
sm:grid-cols-3
"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-red-500 to-orange-300 bg-clip-text text-transparent">
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