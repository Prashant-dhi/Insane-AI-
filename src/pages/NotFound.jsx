import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

export default function NotFound() {

  return (
    <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center px-6">

      <div className="text-center">


        <div className="w-24 h-24 mx-auto rounded-3xl bg-red-600/20 flex items-center justify-center">

          <AlertTriangle 
            size={45}
            className="text-red-500"
          />

        </div>



        <h1 className="text-7xl font-bold mt-8">
          404
        </h1>


        <h2 className="text-3xl font-semibold mt-4">
          Page Not Found
        </h2>


        <p className="text-gray-400 mt-4 max-w-md">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>



        <Link
          to="/Login"
          className="inline-block mt-8 bg-gradient-to-r from-red-600 to-red-800 px-8 py-3 rounded-xl font-semibold"
        >
          Go To Dashboard
        </Link>



      </div>

    </div>
  );
}