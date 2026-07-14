import { Link } from "react-router-dom";

export default function ForgotPassword() {
  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center text-white">
      <div className="bg-[#111111] p-8 rounded-2xl border border-[#262626] w-[400px]">

        <h1 className="text-3xl font-bold mb-5">
          Forgot Password
        </h1>

        <input
          type="email"
          placeholder="Enter Email"
          className="w-full p-4 rounded-xl bg-[#181818] border border-[#262626] mb-5"
        />

        <button className="w-full bg-red-600 py-3 rounded-xl">
          Reset Password
        </button>

        <Link
          to="/login"
          className="block text-center mt-5 text-red-500"
        >
          Back to Login
        </Link>

      </div>
    </div>
  );
}