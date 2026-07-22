import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Features",
      path: "/#features",
    },
    {
      name: "Pricing",
      path: "/pricing",
    },
    {
      name: "Help",
      path: "/help",
    },
  ];

  return (

    <motion.header

      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}

      className="
      fixed
      top-0
      left-0
      right-0
      z-50
      backdrop-blur-2xl
      bg-[#050505]/70
      border-b
      border-[#1f1f1f]
      "

    >

      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        h-20
        flex
        items-center
        justify-between
        "
      >

        {/* Logo */}

        <Link
          to="/"
          className="flex items-center gap-3"
        >

          <div
            className="
            w-11
            h-11
            rounded-2xl
            bg-gradient-to-r
            from-red-600
            to-red-800
            flex
            items-center
            justify-center
            shadow-lg
            shadow-red-900/40
            "
          >

            <Sparkles size={20} />

          </div>

          <div>

            <h1 className="font-bold text-xl">

              INSANE AI

            </h1>

            <p className="text-xs text-gray-500">

              Intelligent Assistant

            </p>

          </div>

        </Link>

        {/* Desktop Menu */}

        <div className="hidden lg:flex items-center gap-8">

          {navLinks.map((item) => (

            <NavLink

              key={item.name}

              to={item.path}

              className={({ isActive }) =>

                `transition ${
                  isActive
                    ? "text-red-500"
                    : "text-gray-300 hover:text-white"
                }`

              }

            >

              {item.name}

            </NavLink>

          ))}

        </div>

        {/* Desktop Buttons */}

        <div className="hidden lg:flex items-center gap-3">

          <Link

            to="/login"

            className="
            px-5
            py-2.5
            rounded-xl
            border
            border-[#2c2c2c]
            hover:border-red-600
            hover:bg-[#111]
            transition
            "

          >

            Login

          </Link>

          <Link

            to="/signup"

            className="
            px-5
            py-2.5
            rounded-xl
            bg-gradient-to-r
            from-red-600
            to-red-800
            hover:scale-105
            transition
            "

          >

            Get Started

          </Link>

        </div>

        {/* Mobile */}

        <button

          onClick={() => setOpen(!open)}

          className="
          lg:hidden
          w-11
          h-11
          rounded-xl
          bg-[#111]
          flex
          items-center
          justify-center
          "

        >

          {open ? <X size={22} /> : <Menu size={22} />}

        </button>

      </div>
            <AnimatePresence>

        {open && (

          <motion.div

            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}

            className="
            lg:hidden
            border-t
            border-[#202020]
            bg-[#090909]
            "

          >

            <div className="p-6 space-y-3">

              {navLinks.map((item) => (

                <NavLink

                  key={item.name}

                  to={item.path}

                  onClick={() => setOpen(false)}

                  className={({ isActive }) =>

                    `
                    block
                    rounded-xl
                    px-4
                    py-3
                    transition

                    ${
                      isActive
                        ? "bg-red-600 text-white"
                        : "text-gray-300 hover:bg-[#151515]"
                    }
                    `

                  }

                >

                  {item.name}

                </NavLink>

              ))}

              <div className="pt-4 space-y-3">

                <Link

                  to="/login"

                  onClick={() => setOpen(false)}

                  className="
                  block
                  w-full
                  text-center
                  py-3
                  rounded-xl
                  border
                  border-[#2a2a2a]
                  hover:border-red-600
                  transition
                  "

                >

                  Login

                </Link>

                <Link

                  to="/signup"

                  onClick={() => setOpen(false)}

                  className="
                  block
                  w-full
                  text-center
                  py-3
                  rounded-xl
                  bg-gradient-to-r
                  from-red-600
                  to-red-800
                  hover:scale-[1.02]
                  transition
                  "

                >

                  Get Started

                </Link>

              </div>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </motion.header>

  );

}