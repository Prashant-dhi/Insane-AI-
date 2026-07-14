import { Mail, ArrowRight } from "lucide-react";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-red-900/20 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[700px] h-[400px] bg-red-700/10 blur-[180px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-5 gap-10">

          {/* Logo */}
          <div className="lg:col-span-2">

            <div className="flex items-center gap-3">

              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-red-600 to-red-800 flex items-center justify-center text-xl font-bold">
                N
              </div>

              <div>
                <h2 className="text-2xl font-black text-white">
                  NEW AI
                </h2>

                <p className="text-gray-500">
                  Next Generation Artificial Intelligence
                </p>
              </div>

            </div>

            <p className="text-gray-400 leading-8 mt-8 max-w-md">
              Build faster. Think smarter. Create amazing experiences
              with the power of AI.
            </p>

            {/* Newsletter */}

            <div className="mt-10">

              <h3 className="font-semibold mb-4">
                Subscribe Newsletter
              </h3>

              <div className="flex">

                <input
                  type="email"
                  placeholder="Enter your email..."
                  className="flex-1 bg-[#111111] border border-[#262626] rounded-l-xl px-5 py-4 outline-none text-white"
                />

                <button className="px-6 bg-gradient-to-r from-red-600 to-red-800 rounded-r-xl hover:opacity-90 transition">
                  <ArrowRight size={20} />
                </button>

              </div>

            </div>

          </div>

          {/* Product */}

          <div>

            <h3 className="text-lg font-bold mb-6">
              Product
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li className="hover:text-red-500 cursor-pointer">
                AI Chat
              </li>

              <li className="hover:text-red-500 cursor-pointer">
                Image Generator
              </li>

              <li className="hover:text-red-500 cursor-pointer">
                Dashboard
              </li>

              <li className="hover:text-red-500 cursor-pointer">
                Pricing
              </li>

              <li className="hover:text-red-500 cursor-pointer">
                API
              </li>

            </ul>

          </div>

          {/* Company */}

          <div>

            <h3 className="text-lg font-bold mb-6">
              Company
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li className="hover:text-red-500 cursor-pointer">
                About
              </li>

              <li className="hover:text-red-500 cursor-pointer">
                Careers
              </li>

              <li className="hover:text-red-500 cursor-pointer">
                Contact
              </li>

              <li className="hover:text-red-500 cursor-pointer">
                Blog
              </li>

              <li className="hover:text-red-500 cursor-pointer">
                Privacy
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-lg font-bold mb-6">
              Contact
            </h3>

            <div className="space-y-5 text-gray-400">

              <div className="flex items-center gap-3">
                <Mail className="text-red-500" size={18} />
                <span>support@newai.com</span>
              </div>

              <div className="flex gap-4 mt-8">

                <a
                  href="#"
                  className="w-12 h-12 rounded-xl bg-[#111111] hover:bg-red-700 transition flex items-center justify-center"
                >
                  <FaGithub size={20} />
                </a>

                <a
                  href="#"
                  className="w-12 h-12 rounded-xl bg-[#111111] hover:bg-red-700 transition flex items-center justify-center"
                >
                  <FaTwitter size={20} />
                </a>

                <a
                  href="#"
                  className="w-12 h-12 rounded-xl bg-[#111111] hover:bg-red-700 transition flex items-center justify-center"
                >
                  <FaLinkedin size={20} />
                </a>

                <a
                  href="#"
                  className="w-12 h-12 rounded-xl bg-[#111111] hover:bg-red-700 transition flex items-center justify-center"
                >
                  <FaInstagram size={20} />
                </a>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-[#262626] mt-20 pt-8 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-500">
            © 2026 NEW AI. All Rights Reserved.
          </p>

          <div className="flex gap-8 mt-5 md:mt-0">

            <span className="text-gray-500 hover:text-red-500 cursor-pointer">
              Terms
            </span>

            <span className="text-gray-500 hover:text-red-500 cursor-pointer">
              Privacy
            </span>

            <span className="text-gray-500 hover:text-red-500 cursor-pointer">
              Cookies
            </span>

          </div>

        </div>

      </div>

    </footer>
  );
}