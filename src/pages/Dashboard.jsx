import {
  MessageSquare,
  Brain,
  Image,
  Clock,
  Sparkles,
  ArrowRight,
  Crown,
  Pin,
  Zap,
  Activity,
  Cpu,
  ShieldCheck,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import { motion } from "framer-motion";
import { useChat } from "../context/ChatContext";

export default function Dashboard() {

  const navigate = useNavigate();

  const {
    chats,
    setCurrentChatId,
  } = useChat();

  const totalMessages = useMemo(() => {

    return chats.reduce(

      (total, chat) => total + chat.messages.length,

      0

    );

  }, [chats]);

  const pinnedChats = chats.filter(

    (chat) => chat.pinned

  ).length;

  const todayChats = chats.filter((chat) => {

    const today = new Date().toDateString();

    return (
      new Date(chat.createdAt).toDateString() ===
      today
    );

  }).length;

  const stats = [

    {
      title: "Total Chats",
      value: chats.length,
      icon: MessageSquare,
    },

    {
      title: "Messages",
      value: totalMessages,
      icon: Brain,
    },

    {
      title: "Today's Chats",
      value: todayChats,
      icon: Clock,
    },

    {
      title: "Pinned",
      value: pinnedChats,
      icon: Pin,
    },

  ];

  const aiModels = [
    {
      name: "GPT-5",
      status: "Online",
      icon: Cpu,
      path: "/chat",
    },
    {
      name: "Gemini",
      status: "Online",
      icon: Sparkles,
      path: "/chat",
    },
    {
      name: "Groq",
      status: "Online",
      icon: Zap,
      path: "/chat",
    },
    {
      name: "Security",
      status: "Protected",
      icon: ShieldCheck,
      path: "/settings",
    },
  ];

  const recentChats = [...chats]
    .sort(
      (a, b) =>
        new Date(b.updatedAt) -
        new Date(a.updatedAt)
    )
    .slice(0, 5);

  return (

    <div
      className="
  w-full
  max-w-[1600px]
  mx-auto
  px-4
  sm:px-6
  lg:px-8
  xl:px-10
  py-6
  space-y-8
"
    >
      {/* Hero */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-[#262626]
        bg-gradient-to-br
        from-[#111111]
        via-[#0d0d0d]
        to-[#090909]
        p-8
        lg:p-10
        "
      >

        <div className="absolute right-[-120px] top-[-120px] h-72 w-72 rounded-full bg-red-600/10 blur-[120px]" />

        <div
          className="
flex
flex-col
xl:flex-row
gap-8
justify-between
"
        >

          <div>

            <span
              className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-red-600/30
              bg-red-600/10
              px-4
              py-2
              text-sm
              text-red-400
              "
            >
              <Sparkles size={16} />
              Welcome to NEW AI
            </span>

            <h1 className="mt-6 text-4xl lg:text-5xl font-bold leading-tight">

              Your Intelligent

              <br />

              AI Workspace

            </h1>

            <p className="mt-5 max-w-2xl text-gray-400 leading-7">

              Chat with powerful AI models, generate images,
              organize conversations and boost productivity
              from one modern dashboard.

            </p>

            <div className="mt-8 flex flex-wrap gap-4">
             
            <Link
  to="/chat"
  className="
rounded-xl
bg-gradient-to-r
from-red-600
to-red-800
px-6
py-3
font-semibold
transition
hover:scale-105
"
>
  Start Chat
</Link>
              <Link
                to="/image-generator"
                className="
                rounded-xl
                border
                border-[#262626]
                bg-[#141414]
                px-6
                py-3
                font-semibold
                transition
                hover:border-red-600
                "
              >
                Generate Image
              </Link>

            </div>

          </div>

          {/* AI Models */}

          <div
            className="
grid
grid-cols-2
sm:grid-cols-2
gap-4
w-full
xl:w-[360px]
"
          >

            {aiModels.map((item) => {

              const Icon = item.icon;

              return (

                <Link
                  key={item.name}
                  to={item.path}
                  className="
      block
      rounded-2xl
      border
      border-[#262626]
      bg-[#111111]
      p-5
      transition
      hover:border-red-600
      hover:-translate-y-1
      hover:shadow-lg
      hover:shadow-red-900/20
      "
                >

                  <Icon
                    className="text-red-500"
                    size={26}
                  />

                  <h3 className="mt-4 font-semibold">
                    {item.name}
                  </h3>

                  <div className="mt-2 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-green-500" />
                    <span className="text-sm text-gray-400">
                      {item.status}
                    </span>
                  </div>

                </Link>

              );
            })}

          </div>

        </div>

      </motion.div>

      {/* Stats */}

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">

        {stats.map((item) => {

          const Icon = item.icon;

          return (

            <motion.div
              key={item.title}
              whileHover={{
                y: -6,
              }}
              className="
              relative
              overflow-hidden
              rounded-3xl
              border
              border-[#262626]
              bg-[#111111]
              p-6
              "
            >

              <div className="absolute right-[-40px] top-[-40px] h-32 w-32 rounded-full bg-red-600/10 blur-3xl" />

              <div className="relative">

                <div
                  className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-red-600/15
                  "
                >

                  <Icon
                    size={28}
                    className="text-red-500"
                  />

                </div>

                <h2 className="mt-6 text-4xl font-bold">

                  {item.value}

                </h2>

                <p className="mt-2 text-gray-400">

                  {item.title}

                </p>

              </div>

            </motion.div>

          );

        })}

      </div>
      {/* Quick Actions + Analytics */}

      <div className="grid xl:grid-cols-3 gap-6">

        {/* Quick Actions */}

        <div className="xl:col-span-2">

          <div className="flex items-center justify-between mb-6">

            <h2 className="text-2xl font-bold">
              Quick Actions
            </h2>

            <span className="text-sm text-gray-500">
              AI Workspace
            </span>

          </div>

          <div className="grid md:grid-cols-2 gap-6">

            <button
              onClick={() => {
                if (chats.length > 0) {
                  setCurrentChatId(chats[0].id);
                }
                navigate("/chat");
              }}
              className="
group
rounded-3xl
bg-[#111111]
border
border-[#262626]
p-6
hover:border-red-600
transition
text-left
w-full
"
            >

              <div className="w-14 h-14 rounded-2xl bg-red-600/15 flex items-center justify-center">

                <MessageSquare
                  className="text-red-500"
                  size={28}
                />

              </div>

              <h3 className="text-xl font-bold mt-5">
                Start New Chat
              </h3>

              <p className="text-gray-400 mt-2">

                Chat with GPT-5, Gemini,
                Claude and Groq.

              </p>

              <div className="flex items-center gap-2 text-red-500 mt-6 group-hover:translate-x-1 transition">

                Open

                <ArrowRight size={18} />

              </div>

            </button>

            <Link
              to="/image-generator"
              className="
              group
              rounded-3xl
              bg-[#111111]
              border
              border-[#262626]
              p-6
              hover:border-red-600
              transition
              "
            >

              <div className="w-14 h-14 rounded-2xl bg-red-600/15 flex items-center justify-center">

                <Image
                  className="text-red-500"
                  size={28}
                />

              </div>

              <h3 className="text-xl font-bold mt-5">
                AI Image Generator
              </h3>

              <p className="text-gray-400 mt-2">

                Generate realistic images
                using AI.

              </p>

              <div className="flex items-center gap-2 text-red-500 mt-6 group-hover:translate-x-1 transition">

                Create

                <ArrowRight size={18} />

              </div>

            </Link>

          </div>

        </div>

        {/* Analytics */}

        <div
          className="
          rounded-3xl
          bg-[#111111]
          border
          border-[#262626]
          p-7
          "
        >

          <div className="flex items-center gap-3">

            <Activity
              className="text-red-500"
              size={24}
            />

            <h2 className="text-xl font-bold">

              AI Usage

            </h2>

          </div>

          <div className="mt-8 space-y-6">

            <div>

              <div className="flex justify-between mb-2">

                <span className="text-gray-400">
                  Chats
                </span>

                <span>{chats.length}</span>

              </div>

              <div className="h-2 rounded-full bg-[#1b1b1b]">

                <div
                  className="h-2 rounded-full bg-red-600"
                  style={{ width: "82%" }}
                />

              </div>

            </div>

            <div>

              <div className="flex justify-between mb-2">

                <span className="text-gray-400">
                  Images
                </span>

                <span>{Math.floor(totalMessages / 2)}</span>

              </div>

              <div className="h-2 rounded-full bg-[#1b1b1b]">

                <div
                  className="h-2 rounded-full bg-red-600"
                  style={{
                    width: `${Math.min(
                      100,
                      Math.floor(totalMessages / 2)
                    )}%`
                  }}
                />

              </div>

            </div>

            <div>

              <div className="flex justify-between mb-2">

                <span className="text-gray-400">
                  AI Responses
                </span>

                <span>{totalMessages}</span>

              </div>

              <div className="h-2 rounded-full bg-[#1b1b1b]">

                <div
                  className="h-2 rounded-full bg-red-600"
                  style={{ width: "95%" }}
                />

              </div>

            </div>

          </div>

        </div>

      </div>
      {/* Bottom Section */}

      <div className="grid xl:grid-cols-3 gap-6">

        {/* Recent Chats */}

        <div
          className="
          xl:col-span-2
          rounded-3xl
          border
          border-[#262626]
          bg-[#111111]
          p-7
          "
        >

          <div className="flex items-center justify-between mb-6">

            <h2 className="text-2xl font-bold">
              Recent Chats
            </h2>

            <Link
              to="/history"
              className="text-red-500 hover:text-red-400"
            >
              View All
            </Link>

          </div>

          {recentChats.length === 0 ? (

            <div className="py-16 text-center">

              <MessageSquare
                size={55}
                className="mx-auto text-gray-600"
              />

              <h3 className="mt-5 text-xl font-semibold">

                No Chats Yet

              </h3>

              <p className="mt-2 text-gray-500">

                Start your first AI conversation.

              </p>

              <Link
                to="/chat"
                className="
                inline-flex
                items-center
                gap-2
                mt-6
                rounded-xl
                bg-gradient-to-r
                from-red-600
                to-red-800
                px-6
                py-3
                font-semibold
                "
              >

                <Sparkles size={18} />

                New Chat

              </Link>

            </div>

          ) : (

            <div className="space-y-4">

              {recentChats.map((chat) => (

                <div
                  key={chat.id}
                  className="
                  flex
                  items-center
                  justify-between
                  rounded-2xl
                  border
                  border-[#262626]
                  bg-[#171717]
                  p-5
                  hover:border-red-600
                  transition
                  "
                >

                  <div className="flex items-center gap-4">

                    <div
                      className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-xl
                      bg-red-600/15
                      "
                    >

                      <MessageSquare
                        size={20}
                        className="text-red-500"
                      />

                    </div>

                    <div>

                      <h3 className="font-semibold">

                        {chat.title}

                      </h3>

                      <p className="text-sm text-gray-500">

                        {chat.messages.length} messages

                      </p>

                    </div>

                  </div>
                  <button
                    onClick={() => {
                      console.log("Clicked:", chat.id);

                      setCurrentChatId(chat.id);

                      setTimeout(() => {
                        navigate("/chat");
                      }, 50);
                    }}
                    className="
rounded-lg
bg-[#202020]
px-4
py-2
text-sm
hover:bg-red-600
transition
"
                  >
                    Open
                  </button>
                </div>

              ))}

            </div>

          )}

        </div>

        {/* Premium */}

        <div
          className="
          rounded-3xl
          bg-gradient-to-br
          from-red-700
          via-red-800
          to-red-950
          p-8
          flex
          flex-col
          justify-between
          "
        >

          <div>

            <Crown size={46} />

            <h2 className="mt-6 text-3xl font-bold">

              NEW AI PRO

            </h2>

            <p className="mt-5 leading-7 text-white/90">

              Unlock GPT-5, Gemini, Claude,
              Groq, unlimited chats,
              AI image generation,
              faster responses,
              premium models and more.

            </p>

          </div>

          <Link
            to="/upgrade"
            className="
    mt-8
    flex
    items-center
    justify-center
    rounded-xl
    bg-white
    py-3
    font-bold
    text-black
   hover:scale-105
hover:shadow-xl
hover:shadow-white/20
    transition
    "
          >
            Upgrade Now
          </Link>

        </div>

      </div>

    </div>

  );

}