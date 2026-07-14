import {
  Bell,
  Search,
  Settings,
  User,
  Sparkles,
  Plus,
  ChevronDown,
  Menu,
} from "lucide-react";
import { useNotification } from "../../context/NotificationContext";

import { Link, useNavigate } from "react-router-dom";
import { useChat } from "../../context/ChatContext";

export default function Topbar({ setMobileOpen }) {

  const { notifications } = useNotification();

  const unreadCount = notifications.filter(
    (item) => !item.read
  ).length;

  const navigate = useNavigate();
  const { createChat } = useChat();

  return (
    <header
      className="
      sticky
      top-0
      z-40
      h-16
      border-b
      border-[#202020]
      bg-[#090909]/90
      backdrop-blur-xl
      supports-[backdrop-filter]:bg-[#090909]/70
      "
    >
      <div
        className="
        flex
        h-full
        items-center
        justify-between
        px-4
        md:px-6
        "
      >

        {/* Left */}

        <div className="flex items-center gap-3">

          {/* Mobile Menu */}

          <button
            onClick={() => setMobileOpen(true)}
            className="
            flex
            lg:hidden
            w-10
            h-10
            items-center
            justify-center
            rounded-xl
            border
            border-[#262626]
            bg-[#111111]
            hover:border-red-600
            transition
            "
          >
            <Menu size={20} />
          </button>


          <div>

            <h1 className="text-xl md:text-2xl font-bold">
              NEW AI
            </h1>

            <p className="hidden md:block text-xs text-gray-500">
              Premium Assistant
            </p>

          </div>

          <button
            className="
            hidden
            xl:flex
            items-center
            gap-2
            rounded-xl
            border
            border-[#262626]
            bg-[#111111]
            px-3
            py-2
            text-sm
            hover:border-red-600
            transition
            "
          >

            <Sparkles size={16} />

            GPT-5

            <ChevronDown size={15} />

          </button>

        </div>
        {/* Center Search */}

        <div
          className="
          hidden
          md:flex
          flex-1
          max-w-xl
          mx-8
          "
        >

          <div
            className="
            flex
            items-center
            w-full
            rounded-2xl
            border
            border-[#262626]
            bg-[#111111]
            px-4
            transition
            focus-within:border-red-600
            "
          >

            <Search
              size={18}
              className="text-gray-500"
            />

            <input
              type="text"
              placeholder="Search chats, prompts..."
              className="
              flex-1
              bg-transparent
              px-3
              py-3
              text-sm
              outline-none
              placeholder:text-gray-500
              "
            />

          </div>

        </div>

        {/* Right Actions */}

        <div className="flex items-center gap-2 md:gap-3">

          <button
            onClick={() => {
              createChat();
              navigate("/chat");
            }}
            className="
            hidden
            sm:flex
            items-center
            gap-2
            rounded-xl
            bg-gradient-to-r
            from-red-600
            to-red-800
            px-4
            py-2.5
            font-medium
            hover:scale-[1.03]
            transition
            "
          >

            <Plus size={18} />

            <span>New Chat</span>

          </button>

          <Link
            to="/notifications"
            className="
    relative
    flex
    h-11
    w-11
    items-center
    justify-center
    rounded-xl
    border
    border-[#262626]
    bg-[#111111]
    transition
    hover:border-red-600
  "
          >
            <Bell size={18} />

            {unreadCount > 0 && (
              <span
                className="
        absolute
        -top-2
        -right-2
        flex
        h-5
        min-w-[20px]
        items-center
        justify-center
        rounded-full
        bg-red-600
        px-1
        text-[11px]
        font-bold
        text-white
      "
              >
                {unreadCount > 99 ? "99+" : unreadCount}
              </span>
            )}
          </Link>
          <Link
            to="/settings"
            className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            border
            border-[#262626]
            bg-[#111111]
            transition
            hover:border-red-600
            "
          >

            <Settings size={18} />

          </Link>

          <Link
            to="/profile"
            className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            bg-gradient-to-r
            from-red-600
            to-red-800
            shadow-lg
            shadow-red-900/30
            "
          >

            <User size={18} />

          </Link>

        </div>

      </div>

    </header>

  );
}