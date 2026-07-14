import {
  Shield,
  Lock,
  Database,
  UserCheck,
} from "lucide-react";


export default function Privacy() {


  const sections = [
    {
      icon: Lock,
      title: "Data Protection",
      text: "Your conversations and personal information are protected with modern security practices."
    },
    {
      icon: Database,
      title: "Data Storage",
      text: "Your AI history and preferences are stored securely to improve your experience."
    },
    {
      icon: UserCheck,
      title: "User Control",
      text: "You can manage, export, or delete your data whenever you want."
    }
  ];



  return (

    <div className="min-h-screen bg-[#050505] text-white p-10">


      <div className="max-w-6xl mx-auto">


        <div className="flex items-center gap-4">

          <Shield
            size={40}
            className="text-red-500"
          />

          <h1 className="text-4xl font-bold">
            Privacy Policy
          </h1>

        </div>



        <p className="text-gray-400 mt-4 max-w-3xl">

          At NEW AI, we respect your privacy and focus on keeping your
          information secure.

        </p>




        <div className="grid md:grid-cols-3 gap-6 mt-10">


          {sections.map((item,index)=>{

            const Icon = item.icon;


            return (

              <div
                key={index}
                className="bg-[#111111] border border-[#262626] rounded-3xl p-7 hover:border-red-600 transition"
              >

                <Icon
                  size={35}
                  className="text-red-500"
                />


                <h2 className="text-xl font-bold mt-5">
                  {item.title}
                </h2>


                <p className="text-gray-400 mt-3 leading-7">
                  {item.text}
                </p>


              </div>

            );

          })}


        </div>




        <div className="mt-10 bg-[#111111] border border-[#262626] rounded-3xl p-8">


          <h2 className="text-2xl font-bold">
            Your Privacy Matters
          </h2>


          <p className="text-gray-400 mt-4 leading-8">

            We never sell your personal data. You have full control over
            your account, conversations, and stored information.

          </p>


        </div>


      </div>


    </div>

  );

}