import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import {
  login,
  loginWithGoogle,
  loginWithGithub
} from "../services/auth";

import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Globe,
} from "lucide-react";


export default function Login() {

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/dashboard";


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);



  const handleLogin = async (e) => {

    e.preventDefault();


    try {

      setLoading(true);


      await login(
        email,
        password
      );


      navigate(
        from,
        {
          replace: true
        }
      );


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


      navigate(
        from,
        {
          replace: true
        }
      );


    }
    catch (err) {

      alert(err.message);

    }
    finally {

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

    <div
      className="
  min-h-screen
  bg-[#050505]
  flex
  items-center
  justify-center
  px-6
  py-10
  overflow-y-auto
  "
    >

      <div className="
      absolute
      inset-0
      bg-[radial-gradient(circle_at_top,rgba(229,9,20,.15),transparent_80%)]
      " />



      <div
        className="
  relative
  w-full
  max-w-md
  my-8
  "
      >



        <div
          className="
  bg-[#111111]/60
  backdrop-blur-xl
  border
  border-[#262626]
  rounded-3xl
  p-6
  sm:p-8
  shadow-2xl
  "
        >



          <div className="
          text-center
          mb-6
          ">


            <div className="
            w-20
            h-20
            mx-auto
            rounded-2xl
            bg-gradient-to-r
            from-red-600
            to-red-800
            flex
            items-center
            justify-center
            text-3xl
            font-bold
            ">

              N

            </div>



            <h1 className="
            text-3xl
            font-bold
            mt-6
            ">

              Welcome Back

            </h1>



            <p className="
            text-gray-400
            mt-2
            ">

              Login to continue using NEW AI

            </p>


          </div>






          <form
            onSubmit={handleLogin}
            className="
          space-y-5
          ">



            <div className="
            relative
            ">


              <Mail
                className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-gray-500
              "
                size={18}
              />


              <input

                type="email"

                placeholder="Email Address"

                value={email}

                onChange={(e) => setEmail(e.target.value)}

                required

                className="
              w-full
              pl-12
              py-4
              bg-[#181818]
              rounded-xl
              border
              border-[#262626]
              focus:border-red-600
              outline-none
              text-white
              "

              />


            </div>






            <div className="
            relative
            ">


              <Lock

                className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-gray-500
              "

                size={18}

              />



              <input

                type={
                  showPassword
                    ?
                    "text"
                    :
                    "password"
                }

                placeholder="Password"

                value={password}

                onChange={(e) => setPassword(e.target.value)}

                required


                className="
              w-full
              pl-12
              pr-12
              py-4
              bg-[#181818]
              rounded-xl
              border
              border-[#262626]
              focus:border-red-600
              outline-none
              text-white
              "

              />



              <button

                type="button"

                onClick={() => setShowPassword(!showPassword)}

                className="
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              "

              >

                {
                  showPassword
                    ?
                    <EyeOff size={18} />
                    :
                    <Eye size={18} />
                }


              </button>


            </div>






            <div className="
            flex
            justify-between
            text-sm
            text-gray-400
            ">


              <label className="
              flex
              items-center
              gap-2
              ">

                <input type="checkbox" />

                Remember me

              </label>




              <Link
                to="/forgot-password"
                className="
              text-red-500
              "
              >

                Forgot Password?

              </Link>



            </div>






            <button

              disabled={loading}

              className="
            w-full
            py-4
            rounded-xl
            bg-gradient-to-r
            from-red-600
            to-red-800
            font-semibold
            transition
            disabled:opacity-50
            "

            >

              {
                loading
                  ?
                  "Signing In..."
                  :
                  "Login"
              }


            </button>




          </form>







          <div className="
          flex
          items-center
          my-6
          ">


            <div className="
            flex-1
            h-px
            bg-[#262626]
            " />


            <span className="
            px-4
            text-gray-500
            ">

              OR

            </span>


            <div className="
            flex-1
            h-px
            bg-[#262626]
            " />


          </div>








            <button
              onClick={handleGoogle}
              className="w-full py-3 rounded-xl border border-[#262626] hover:border-red-600 flex justify-center items-center gap-3"
            >
              <Globe size={20} />
              Continue with Google
            </button>

            <button
              onClick={handleGithub}
              disabled={loading}
              className="w-full py-3 rounded-xl border border-[#262626] hover:border-red-600 flex justify-center items-center gap-3 transition"
            >
              <Globe size={20} />
              Continue with GitHub
            </button>
          
          
          <p className="
          text-center
          text-gray-400
          mt-8
          ">


            Don't have an account?


            <Link

              to="/signup"

              className="
            text-red-500
            ml-2
            "

            >

              Sign Up

            </Link>



          </p>





        </div>



      </div>



    </div>

  );

}