import { useState } from "react";
import { motion } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";

import Sidebar from "../components/chat/Sidebar";
import Topbar from "../components/chat/Topbar";

export default function MainLayout() {
  const location = useLocation();

  const isChatPage = location.pathname === "/chat";

  const [mobileOpen, setMobileOpen] = useState(false);
  return (
   <div className="h-screen bg-[#050505] text-white">
      {/* Layout */}

      <div className="flex h-screen overflow-visible">

        {/* Fixed Sidebar */}

        <Sidebar
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
        />
        {/* Right Section */}

        <div
           className="
    flex flex-1 flex-col overflow-visible
    lg:ml-0
  "
>

          {/* Fixed Topbar */}

          {!isChatPage && (
            <div className="shrink-0">
              <Topbar setMobileOpen={setMobileOpen} />
            </div>
          )}

          {/* Scrollable Content */}

          <motion.main
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .25 }}
           className="
flex-1
overflow-y-auto
overflow-x-visible
w-full
"
          >
            <Outlet />
          </motion.main>

        </div>

      </div>

    </div>
  );
}