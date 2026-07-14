import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Alex Carter",
    role: "Frontend Developer",
    image: "https://i.pravatar.cc/150?img=11",
    review:
      "NEW AI completely changed my workflow. Code generation is incredibly fast and accurate.",
  },
  {
    name: "Sophia Lee",
    role: "UI/UX Designer",
    image: "https://i.pravatar.cc/150?img=32",
    review:
      "Beautiful interface, amazing AI responses and the experience feels premium.",
  },
  {
    name: "Michael Brown",
    role: "Software Engineer",
    image: "https://i.pravatar.cc/150?img=55",
    review:
      "This is one of the most polished AI assistants I've ever used. Highly recommended.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#050505] py-28 px-6 relative overflow-hidden">

      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-red-700/10 blur-[170px] rounded-full"></div>

      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center mb-20"
        >

          <span className="text-red-500 uppercase tracking-[4px] font-semibold">
            Testimonials
          </span>

          <h2 className="text-5xl font-black mt-4">

            Loved by Developers

          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg">

            Thousands of developers and creators trust NEW AI
            to increase productivity every single day.

          </p>

        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">

          {reviews.map((user, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * .2 }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="bg-[#111111] border border-[#262626] rounded-3xl p-8 hover:border-red-600 transition"
            >

              <div className="flex gap-1 text-red-500">

                <Star fill="currentColor" size={18}/>
                <Star fill="currentColor" size={18}/>
                <Star fill="currentColor" size={18}/>
                <Star fill="currentColor" size={18}/>
                <Star fill="currentColor" size={18}/>

              </div>

              <p className="text-gray-300 leading-8 mt-8">

                "{user.review}"

              </p>

              <div className="flex items-center gap-4 mt-8">

                <img
                  src={user.image}
                  alt={user.name}
                  className="w-14 h-14 rounded-full object-cover border border-red-700"
                />

                <div>

                  <h3 className="font-bold">

                    {user.name}

                  </h3>

                  <p className="text-gray-500 text-sm">

                    {user.role}

                  </p>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}