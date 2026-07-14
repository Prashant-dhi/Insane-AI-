export default function Help() {

  const topics = [
    {
      title: "How to use NEW AI?",
      desc: "Start a chat, ask questions and generate content using AI."
    },
    {
      title: "Account & Login",
      desc: "Manage your account, password and authentication settings."
    },
    {
      title: "AI Features",
      desc: "Learn about chat, image generation, voice and documents."
    },
    {
      title: "Billing & Premium",
      desc: "Information about NEW AI Premium plans and payments."
    }
  ];


  return (
    <div className="min-h-screen bg-[#050505] text-white p-10">

      <div className="max-w-6xl mx-auto">


        <h1 className="text-4xl font-bold">
          Help Center
        </h1>

        <p className="text-gray-400 mt-3">
          Find answers and learn how to use NEW AI.
        </p>



        <div className="grid md:grid-cols-2 gap-6 mt-10">


          {topics.map((item)=>(

            <div
              key={item.title}
              className="bg-[#111111] border border-[#262626] rounded-3xl p-7 hover:border-red-600 transition"
            >

              <h2 className="text-xl font-bold">
                {item.title}
              </h2>


              <p className="text-gray-400 mt-3">
                {item.desc}
              </p>


            </div>

          ))}


        </div>



        <div className="mt-10 bg-[#111111] border border-[#262626] rounded-3xl p-8">


          <h2 className="text-2xl font-bold">
            Still need help?
          </h2>


          <p className="text-gray-400 mt-3">
            Contact our support team and we will help you.
          </p>


          <button className="mt-6 bg-gradient-to-r from-red-600 to-red-800 px-6 py-3 rounded-xl">
            Contact Support
          </button>


        </div>



      </div>

    </div>
  );
}