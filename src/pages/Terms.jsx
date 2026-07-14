import {
  FileText,
  CheckCircle,
  AlertCircle,
} from "lucide-react";


export default function Terms() {


  const rules = [
    "Use NEW AI responsibly and follow applicable laws.",
    "Do not use the service for harmful or illegal activities.",
    "Keep your account information secure.",
    "AI responses should be verified before important decisions."
  ];


  return (

    <div className="min-h-screen bg-[#050505] text-white p-10">


      <div className="max-w-6xl mx-auto">


        <div className="flex items-center gap-4">

          <FileText
            size={40}
            className="text-red-500"
          />

          <h1 className="text-4xl font-bold">
            Terms & Conditions
          </h1>

        </div>



        <p className="text-gray-400 mt-4 max-w-3xl">

          Please read these terms carefully before using NEW AI.
          By accessing our platform, you agree to these conditions.

        </p>




        <div className="mt-10 bg-[#111111] border border-[#262626] rounded-3xl p-8">


          <h2 className="text-2xl font-bold mb-6">
            Usage Guidelines
          </h2>



          <div className="space-y-5">


            {rules.map((rule,index)=>(


              <div
                key={index}
                className="flex gap-4 items-start"
              >

                <CheckCircle
                  className="text-red-500 mt-1"
                  size={22}
                />


                <p className="text-gray-300">
                  {rule}
                </p>


              </div>


            ))}


          </div>


        </div>





        <div className="mt-8 bg-[#111111] border border-[#262626] rounded-3xl p-8">


          <div className="flex gap-3 items-center">


            <AlertCircle
              className="text-red-500"
            />


            <h2 className="text-xl font-bold">
              Important Notice
            </h2>


          </div>



          <p className="text-gray-400 mt-4 leading-7">

            NEW AI uses artificial intelligence technology.
            Responses may not always be perfect, so always review
            important information before using it.

          </p>


        </div>



      </div>


    </div>

  );

}