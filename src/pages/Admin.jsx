export default function Admin() {

  return (
    <div className="min-h-screen bg-[#050505] text-white p-10">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold">
          Admin Panel
        </h1>

        <p className="text-gray-400 mt-3">
          Manage NEW AI users, settings and system data.
        </p>


        <div className="grid md:grid-cols-3 gap-6 mt-10">


          <div className="bg-[#111111] border border-[#262626] rounded-2xl p-6">

            <h2 className="text-2xl font-bold">
              Users
            </h2>

            <p className="text-gray-400 mt-2">
              1,248 Registered Users
            </p>

          </div>


          <div className="bg-[#111111] border border-[#262626] rounded-2xl p-6">

            <h2 className="text-2xl font-bold">
              Chats
            </h2>

            <p className="text-gray-400 mt-2">
              45,892 AI Conversations
            </p>

          </div>


          <div className="bg-[#111111] border border-[#262626] rounded-2xl p-6">

            <h2 className="text-2xl font-bold">
              System
            </h2>

            <p className="text-green-500 mt-2">
              ● Online
            </p>

          </div>


        </div>


      </div>

    </div>
  );
}