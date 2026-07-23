import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

import { FaGoogle, FaGithub } from "react-icons/fa";

import {
  login,
  loginWithGoogle,
  loginWithGithub,
} from "../services/auth";

export default function Login() {

  const navigate = useNavigate();
  const location = useLocation();

  const from =
    location.state?.from?.pathname || "/dashboard";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      await login(email, password);

      navigate(from, {
        replace: true,
      });

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

      navigate(from, {
        replace: true,
      });

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

      navigate(from, {
        replace: true,
      });

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
      opacity:0,
      y:40,
    }}

    animate={{
      opacity:1,
      y:0,
    }}

    transition={{
      duration:.7,
    }}

   className="
relative
z-10
flex
items-center
justify-center
min-h-screen
px-4
sm:px-8
lg:px-10
py-10
"

  >

    <div

      className="
      flex
      w-full
      max-w-7xl
      min-h-[720px]
      overflow-hidden
      rounded-[34px]
      border
      border-white/10
      bg-[#0d0d0d]/70
      backdrop-blur-3xl
      shadow-[0_40px_120px_rgba(0,0,0,.6)]
      "

    >

      {/* LEFT LOGIN */}

       <div className="
w-full
lg:w-[42%]
flex
items-center
justify-center
p-12
border-r
border-white/10
">

        <div className="w-full max-w-md">

          <div className="mb-10">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-red-700 shadow-xl">

              <Sparkles size={28} />

            </div>

            <h1 className="mt-8 text-4xl font-black">

              Welcome Back

            </h1>

            <p className="mt-3 text-gray-400 leading-7">

              Login to continue using your AI Workspace.

            </p>

          </div>
          

          <form
  onSubmit={handleLogin}
  className="space-y-5"
>

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
      {showPassword ? <EyeOff size={20}/> : <Eye size={20}/>}
    </button>

  </div>

  {/* Remember */}

  <div className="flex items-center justify-between text-sm">

    <label className="flex items-center gap-2 text-gray-400">

      <input
        type="checkbox"
        className="accent-red-600"
      />

      Remember me

    </label>

    <Link
      to="/forgot-password"
      className="text-red-400 hover:text-red-300"
    >
      Forgot Password?
    </Link>

  </div>

  {/* Login */}

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

    {loading ? "Signing In..." : "Login"}

  </motion.button>

</form>

{/* Divider */}

<div className="my-8 flex items-center">

  <div className="h-px flex-1 bg-white/10" />

  <span className="mx-4 text-xs tracking-[4px] uppercase text-gray-500">

    OR

  </span>

  <div className="h-px flex-1 bg-white/10" />

</div>

<motion.button

  type="button"

  whileHover={{ scale: 1.02 }}

  whileTap={{ scale: .98 }}

  onClick={handleGoogle}

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
  transition
  hover:border-red-500
  "

>

  <FaGoogle />

  Continue with Google

</motion.button>

<motion.button

  type="button"

  whileHover={{ scale: 1.02 }}

  whileTap={{ scale: .98 }}

  onClick={handleGithub}

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
  transition
  hover:border-red-500
  "

>

  <FaGithub />

  Continue with Github

</motion.button>

<div className="mt-8 text-center">

  <p className="text-gray-400">

    Don't have an account?

  </p>

  <Link

    to="/signup"

    className="mt-3 inline-block font-semibold text-red-400"

  >

    Create Account →

  </Link>

</div>

</div>
</div>

{/* LEFT LOGIN END */}

      {/* ================= RIGHT PANEL ================= */}

     <div className="relative hidden lg:flex lg:w-[58%] overflow-hidden">
        {/* Background */}

        <div className="absolute inset-0 bg-gradient-to-br from-[#141414] via-[#101010] to-[#090909]" />

        {/* Red Glow */}

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

        <div className="relative z-10 flex h-full w-full flex-col justify-between p-16">

          {/* Top */}

          <div>

            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2">

              <Sparkles size={16} className="text-red-400" />

              <span className="text-sm text-red-300">

                NEW AI PLATFORM

              </span>

            </div>

            <h2 className="mt-10 text-6xl font-black leading-tight">

              Build
              <br />

              Smarter.

            </h2>

            <p className="mt-8 max-w-lg text-lg leading-8 text-gray-400">

              The next generation AI workspace designed
              for creators, developers and businesses.

            </p>

          </div>

          {/* Center Illustration */}

         <div className="relative flex justify-center py-12">

            <div className="relative h-[280px] w-[280px]">

              <div className="absolute inset-0 rounded-full border border-red-500/20" />

              <div className="absolute inset-8 rounded-full border border-red-500/20" />

              <div className="absolute inset-16 rounded-full border border-red-500/20" />

              <div className="absolute inset-0 animate-spin rounded-full border-t-2 border-red-500 duration-[8000ms]" />

              <div className="absolute inset-8 animate-spin rounded-full border-r border-red-400 duration-[12000ms]" />

              <div className="absolute left-1/2 top-1/2 flex h-23 w-23 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl bg-gradient-to-br from-red-500 to-red-700 shadow-[0_25px_70px_rgba(239,68,68,.45)]">

                <ShieldCheck
                  size={40}
                  className="text-white"
                />

              </div>

            </div>

          </div>

          {/* Bottom Card */}

          <div className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

            <h3 className="text-xl font-bold">

              Enterprise Grade Security

            </h3>

            <p className="mt-3 text-gray-400 leading-7">

              Secure authentication, encrypted sessions,
              cloud synchronization and premium AI
              performance.

            </p>

          </div>

        </div>

      </div>

            {/* ================= END MAIN CARD ================= */}

    </div>

  </motion.div>

</div>

  );

}