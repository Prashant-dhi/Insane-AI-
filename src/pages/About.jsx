export default function About() {

  return (
    <div className="min-h-screen bg-[#050505] text-white p-10">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold">
          About NEW AI
        </h1>

        <p className="text-gray-400 mt-5 text-lg">
          NEW AI is a modern AI assistant platform
          built for conversations, productivity,
          image generation and intelligent workflows.
        </p>


        <div className="grid md:grid-cols-3 gap-6 mt-10">


          <div className="bg-[#111111] border border-[#262626] rounded-2xl p-6">
            <h2 className="text-xl font-bold">
              AI Chat
            </h2>

            <p className="text-gray-400 mt-3">
              Chat with advanced AI models.
            </p>
          </div>



          <div className="bg-[#111111] border border-[#262626] rounded-2xl p-6">

            <h2 className="text-xl font-bold">
              Image Generation
            </h2>

            <p className="text-gray-400 mt-3">
              Create images using AI.
            </p>

          </div>



          <div className="bg-[#111111] border border-[#262626] rounded-2xl p-6">

            <h2 className="text-xl font-bold">
              Productivity
            </h2>

            <p className="text-gray-400 mt-3">
              Manage your AI workspace.
            </p>

          </div>


        </div>

      </div>

    </div>
  );
}