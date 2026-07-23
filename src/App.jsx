import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";


import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";


import Dashboard from "./pages/Dashboard";
import Chat from "./pages/Chat";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

import History from "./pages/History";
import Search from "./pages/Search";
import ImageGenerator from "./pages/ImageGenerator";
import Notifications from "./pages/Notifications";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import Help from "./pages/Help";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";


import ProtectedRoute from "./components/ProtectedRoute";
import MainLayout from "./layouts/MainLayout";



function App() {

  return (

    <BrowserRouter>

      <Routes>


        {/* Default */}

        <Route
          path="/"
          element={<Landing />}
        />



        {/* Public Authentication */}

        <Route
          path="/login"
          element={<Login />}
        />


        <Route
          path="/signup"
          element={<Signup />}
        />


        <Route
          path="/forgot-password"
          element={<ForgotPassword />}
        />




        {/* Protected App */}

        <Route

          element={

            <ProtectedRoute>

              <MainLayout />

            </ProtectedRoute>

          }

        >


          <Route
            path="/dashboard"
            element={<Dashboard />}
          />


          <Route
            path="/chat"
            element={<Chat />}
          />


          <Route
            path="/profile"
            element={<Profile />}
          />
          <Route
            path="/settings"
            element={<Settings />}
          />


          <Route
            path="/history"
            element={<History />}
          />


          <Route
            path="/search"
            element={<Search />}
          />


          <Route
            path="/image-generator"
            element={<ImageGenerator />}
          />


          <Route
            path="/notifications"
            element={<Notifications />}
          />


          <Route
            path="/about"
            element={<About />}
          />


          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route path="/upgrade" element={<Pricing />} />


          <Route
            path="/help"
            element={<Help />}
          />


          <Route
            path="/privacy"
            element={<Privacy />}
          />


          <Route
            path="/terms"
            element={<Terms />}
          />


          <Route
            path="/admin"
            element={<Admin />}
          />


        </Route>



        {/* 404 */}

        <Route
          path="*"
          element={<NotFound />}
        />


      </Routes>


    </BrowserRouter>

  );
}


export default App;