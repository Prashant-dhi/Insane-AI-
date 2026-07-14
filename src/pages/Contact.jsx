export default function Contact() {

  return (
    <div className="min-h-screen bg-[#050505] text-white p-10">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold">
          Contact NEW AI
        </h1>

        <p className="text-gray-400 mt-3">
          Have questions? Contact our support team.
        </p>


        <div className="mt-10 bg-[#111111] border border-[#262626] rounded-3xl p-8">


          <form className="space-y-5">


            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-[#181818] border border-[#262626] rounded-xl p-4 outline-none"
            />


            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-[#181818] border border-[#262626] rounded-xl p-4 outline-none"
            />


            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full bg-[#181818] border border-[#262626] rounded-xl p-4 outline-none"
            />


            <button
              className="bg-gradient-to-r from-red-600 to-red-800 px-8 py-3 rounded-xl font-semibold"
            >
              Send Message
            </button>


          </form>


        </div>


      </div>

    </div>
  );
}