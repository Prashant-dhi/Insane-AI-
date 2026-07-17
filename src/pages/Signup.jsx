import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Globe,
} from "lucide-react";

import {
  signup,
  loginWithGoogle,
  loginWithGithub
} from "../services/auth";

export default function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await signup(name, email, password);

      navigate("/dashboard");
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    try {
      await loginWithGoogle();
      navigate("/dashboard");
    } catch (err) {
      alert(err.message);
    }
  };
  const handleGithub = async () => {
    try {
      setLoading(true);

      await loginWithGithub();

      navigate("/dashboard");

    } catch (err) {
      alert(err.message);

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center px-6">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(229,9,20,.15),transparent_60%)]" />

      <div className="relative w-full max-w-md">

        <div className="bg-[#111111]/90 backdrop-blur-xl border border-[#262626] rounded-3xl p-8 shadow-2xl">

          <div className="text-center mb-8">

            <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r from-red-600 to-red-800 flex items-center justify-center text-3xl font-bold">
              N
            </div>

            <h1 className="text-3xl font-bold mt-6 text-white">
              Create Account
            </h1>

            <p className="text-gray-400 mt-2">
              Join NEW AI today
            </p>

          </div>

          <form onSubmit={handleSignup} className="space-y-5">

            <div className="relative">

              <User
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                size={18}
              />

              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-[#181818] rounded-xl border border-[#262626] focus:border-red-600 outline-none text-white"
              />

            </div>

            <div className="relative">

              <Mail
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                size={18}
              />

              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-12 pr-4 py-4 bg-[#181818] rounded-xl border border-[#262626] focus:border-red-600 outline-none text-white"
              />

            </div>

            <div className="relative">

              <Lock
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                size={18}
              />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full pl-12 pr-12 py-4 bg-[#181818] rounded-xl border border-[#262626] focus:border-red-600 outline-none text-white"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>

            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-red-600 to-red-800 font-semibold hover:scale-[1.02] transition"
            >
              {loading ? "Creating..." : "Create Account"}
            </button>

          </form>

          <div className="flex items-center my-6">

            <div className="flex-1 h-px bg-[#262626]" />

            <span className="px-4 text-gray-500">
              OR
            </span>

            <div className="flex-1 h-px bg-[#262626]" />

          </div>

          <div className="space-y-3">

            <button
              onClick={handleGoogle}
              className="w-full py-3 rounded-xl border border-[#262626] hover:border-red-600 flex justify-center items-center gap-3"
            >
              <Globe size={20} />
              Continue with Google
            </button>

            <button
              onClick={handleGithub}
              disabled={loading}
              className="w-full py-3 rounded-xl border border-[#262626] hover:border-red-600 flex justify-center items-center gap-3 transition"
            >
              <Globe size={20} />
              Continue with GitHub
            </button>
          </div>

          <p className="text-center text-gray-400 mt-8">

            Already have an account?

            <Link
              to="/login"
              className="text-red-500 ml-2"
            >
              Login
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}