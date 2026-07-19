import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {

  const { user, loading } = useAuth();


  if (loading) {

    return (

      <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center">

        <div className="text-center">

          <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-red-600 to-red-800 flex items-center justify-center mx-auto mb-5 animate-pulse">

            N

          </div>


          <h2 className="text-2xl font-bold">
            Loading NEW AI...
          </h2>


          <p className="text-gray-400 mt-2">
            Checking authentication
          </p>


        </div>

      </div>

    );

  }



  if (!user) {
    return <Navigate to="/" replace />;
  }



  return children;

}