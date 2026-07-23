import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Sparkles,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

import { FaGoogle, FaGithub } from "react-icons/fa";

import {
  signup,
  loginWithGoogle,
  loginWithGithub,
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
      setLoading(true);

      await loginWithGoogle();

      navigate("/dashboard");
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
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

    <div className="relative min-h-screen overflow-hidden bg-[#050505] text-white">

  {/* Background Glow */}
  <div className="absolute inset-0">

    <div className="absolute left-1/2 -translate-x-1/2 -top-72 h-[900px] w-[900px] rounded-full bg-red-600/20 blur-[220px]" />

    <div className="absolute right-[-220px] top-0 h-[600px] w-[600px] rounded-full bg-red-700/15 blur-[180px]" />

    <div className="absolute left-[-200px] bottom-[-150px] h-[500px] w-[500px] rounded-full bg-red-500/10 blur-[180px]" />

  </div>

  {/* Grid */}
  <div
    className="absolute inset-0 opacity-[0.04]"
    style={{
      backgroundImage:
        "linear-gradient(rgba(255,255,255,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.05) 1px,transparent 1px)",
      backgroundSize: "60px 60px",
    }}
  />

  <motion.div
    initial={{
      opacity: 0,
      y: 40,
    }}
    animate={{
      opacity: 1,
      y: 0,
    }}
    transition={{
      duration: .7,
    }}
    className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-8 lg:px-10 py-10"
  >

    <div
      className="
      flex
      w-full
      max-w-7xl
      h-auto
lg:min-h-[780px]
      overflow-hidden
      rounded-[34px]
      border
      border-white/10
      bg-[#0d0d0d]/70
      backdrop-blur-3xl
      shadow-[0_40px_120px_rgba(0,0,0,.6)]
      "
    >

      {/* ================= LEFT AI PANEL ================= */}

      <div className="relative hidden lg:flex lg:w-[58%] overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#141414] via-[#101010] to-[#090909]" />

        {/* Glow */}
        <div className="absolute -top-32 right-[-100px] h-[420px] w-[420px] rounded-full bg-red-600/20 blur-[140px]" />

        <div className="absolute bottom-[-150px] left-[-80px] h-[320px] w-[320px] rounded-full bg-red-500/10 blur-[130px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.05) 1px,transparent 1px)",
            backgroundSize: "55px 55px",
          }}
        />

       <div className="relative z-10 flex h-full w-full flex-col justify-center p-16">

                    {/* Top */}

          <div>

            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2">

              <Sparkles size={16} className="text-red-400" />

              <span className="text-sm text-red-300">

                JOIN NEW AI

              </span>

            </div>

            <h2 className="mt-10 text-6xl font-black leading-tight">

              Create
              <br />

              Your Future.

            </h2>

            <p className="mt-8 max-w-lg text-lg leading-8 text-gray-400">

              Join thousands of creators, developers and
              businesses using the next generation AI workspace
              to build, learn and create smarter every day.

            </p>

          </div>

          {/* Center Illustration */}

         <div className="relative my-10 flex justify-center">

            <div className="relative h-[320px] w-[320px]">

              <div className="absolute inset-0 rounded-full border border-red-500/20" />

              <div className="absolute inset-8 rounded-full border border-red-500/20" />

              <div className="absolute inset-16 rounded-full border border-red-500/20" />

              <div className="absolute inset-0 animate-spin rounded-full border-t-2 border-red-500 duration-[8000ms]" />

              <div className="absolute inset-8 animate-spin rounded-full border-r border-red-400 duration-[12000ms]" />

              <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl bg-gradient-to-br from-red-500 to-red-700 shadow-[0_25px_70px_rgba(239,68,68,.45)]">

                <ShieldCheck
                  size={40}
                  className="text-white"
                />

              </div>

            </div>

          </div>

          {/* Bottom Card */}

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h3 className="text-xl font-bold">

              Everything In One Workspace

            </h3>

            <p className="mt-3 leading-7 text-gray-400">

              AI Chat, Image Generation, Code Assistant,
              Cloud Sync, Secure Authentication and Premium
              Performance — all inside one modern platform.

            </p>

          </div>

        </div>

      </div>

      {/* ================= RIGHT SIGNUP PANEL ================= */}

     <div
className="
w-full
lg:w-[42%]
flex
flex-col
justify-center
px-12
py-16
border-l
border-white/10
"
>

       <div className="mx-auto w-full max-w-md">
          {/* Header */}

<div className="mb-8">

  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-red-700 shadow-xl">

    <Sparkles size={28} />

  </div>

  <h1 className="mt-8 text-4xl font-black">

    Create Account

  </h1>

  <p className="mt-3 leading-7 text-gray-400">

    Create your NEW AI account and start using powerful AI
    tools in just a few seconds.

  </p>

</div>

{/* ================= FORM ================= */}

<form
  onSubmit={handleSignup}
  className="space-y-5"
>

  {/* Name */}

  <div className="relative">

    <User
      size={18}
      className="absolute left-5 top-1/2 -translate-y-1/2 text-red-400"
    />

    <input
      type="text"
      placeholder="Full Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      required
      className="
      w-full
      rounded-2xl
      border
      border-white/10
      bg-white/5
      py-4
      pl-14
      pr-5
      text-white
      placeholder:text-gray-500
      backdrop-blur-xl
      outline-none
      transition-all
      duration-300
      focus:border-red-500
      focus:ring-4
      focus:ring-red-500/20
      "
    />

  </div>

  {/* Email */}

  <div className="relative">

    <Mail
      size={18}
      className="absolute left-5 top-1/2 -translate-y-1/2 text-red-400"
    />

    <input
      type="email"
      placeholder="Email Address"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
      className="
      w-full
      rounded-2xl
      border
      border-white/10
      bg-white/5
      py-4
      pl-14
      pr-5
      text-white
      placeholder:text-gray-500
      backdrop-blur-xl
      outline-none
      transition-all
      duration-300
      focus:border-red-500
      focus:ring-4
      focus:ring-red-500/20
      "
    />

  </div>

  {/* Password */}

  <div className="relative">

    <Lock
      size={18}
      className="absolute left-5 top-1/2 -translate-y-1/2 text-red-400"
    />

    <input
      type={showPassword ? "text" : "password"}
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
      className="
      w-full
      rounded-2xl
      border
      border-white/10
      bg-white/5
      py-4
      pl-14
      pr-14
      text-white
      placeholder:text-gray-500
      backdrop-blur-xl
      outline-none
      transition-all
      duration-300
      focus:border-red-500
      focus:ring-4
      focus:ring-red-500/20
      "
    />

    <button
      type="button"
      onClick={() => setShowPassword(!showPassword)}
      className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
    >

      {showPassword ? (
        <EyeOff size={20} />
      ) : (
        <Eye size={20} />
      )}

    </button>

  </div>

  {/* Create Account Button */}

  <motion.button

    whileHover={{ scale: 1.02 }}

    whileTap={{ scale: .98 }}

    disabled={loading}

    className="
    w-full
    rounded-2xl
    bg-gradient-to-r
    from-red-600
    via-red-500
    to-red-700
    py-4
    font-semibold
    shadow-[0_15px_45px_rgba(239,68,68,.35)]
    transition
    "

  >

    {loading ? "Creating Account..." : "Create Account"}

  </motion.button>

</form>

{/* Divider */}

<div className="my-8 flex items-center">

  <div className="h-px flex-1 bg-white/10" />

  <span className="mx-4 text-xs uppercase tracking-[4px] text-gray-500">

    OR

  </span>

  <div className="h-px flex-1 bg-white/10" />

</div>

{/* Google */}

<motion.button

  type="button"

  whileHover={{ scale: 1.02 }}

  whileTap={{ scale: .98 }}

  onClick={handleGoogle}

  disabled={loading}

  className="
  mb-4
  flex
  w-full
  items-center
  justify-center
  gap-3
  rounded-2xl
  border
  border-white/10
  bg-white/5
  py-4
  text-white
  backdrop-blur-xl
  transition-all
  duration-300
  hover:border-red-500
  hover:bg-red-500/10
  "

>

  <FaGoogle className="text-lg text-red-400" />

  Continue with Google

</motion.button>

{/* Github */}

<motion.button

  type="button"

  whileHover={{ scale: 1.02 }}

  whileTap={{ scale: .98 }}

  onClick={handleGithub}

  disabled={loading}

  className="
  flex
  w-full
  items-center
  justify-center
  gap-3
  rounded-2xl
  border
  border-white/10
  bg-white/5
  py-4
  text-white
  backdrop-blur-xl
  transition-all
  duration-300
  hover:border-red-500
  hover:bg-red-500/10
  "

>

  <FaGithub className="text-lg" />

  Continue with GitHub

</motion.button>

{/* Login Link */}

<div className="mt-8 text-center">

  <p className="text-gray-400">

    Already have an account?

  </p>

  <Link

    to="/login"

    className="
    mt-3
    inline-flex
    items-center
    gap-2
    font-semibold
    text-red-400
    transition
    hover:text-red-300
    "

  >

    Login Now

    <ArrowRight size={16} />

  </Link>

</div>

        </div>

      </div>

      {/* ================= END RIGHT PANEL ================= */}

    </div>

  </motion.div>

</div>

  );

}