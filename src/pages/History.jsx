import {
  Clock,
  MessageSquare,
  Image,
  Code,
  Search,
  Trash2,
  Star,
  Pin,
  ArrowUpRight,
  BarChart3,
  History as HistoryIcon,
} from "lucide-react";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useChat } from "../context/ChatContext";

export default function History() {
  const navigate = useNavigate();

  const {
    chats,
    setCurrentChatId,
    deleteChat,
  } = useChat();

  const [search, setSearch] = useState("");

  // ==========================
  // Filter Chats
  // ==========================

  const filteredChats = useMemo(() => {
    return chats.filter((chat) =>
      chat.title
        ?.toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [search, chats]);

  // ==========================
  // Stats
  // ==========================

  const totalChats = chats.length;

  const pinnedChats = chats.filter(
    (chat) => chat.pinned
  ).length;

  const favoriteChats = chats.filter(
    (chat) => chat.favorite
  ).length;

  // ==========================
  // Chat Icon
  // ==========================

  const getIcon = (chat) => {
    if (
      chat.messages.some((m) =>
        m.text?.toLowerCase().includes("image")
      )
    ) {
      return Image;
    }

    if (
      chat.messages.some((m) =>
        m.text?.toLowerCase().includes("code")
      )
    ) {
      return Code;
    }

    return MessageSquare;
  };

  // ==========================
  // Dashboard Cards
  // ==========================

  const stats = [
    {
      title: "Total Chats",
      value: totalChats,
      icon: HistoryIcon,
    },
    {
      title: "Pinned",
      value: pinnedChats,
      icon: Pin,
    },
    {
      title: "Favorites",
      value: favoriteChats,
      icon: Star,
    },
    {
      title: "Messages",
      value: chats.reduce(
        (acc, chat) => acc + chat.messages.length,
        0
      ),
      icon: BarChart3,
    },
  ];

  return (
        <div className="min-h-screen bg-[#050505] text-white">
      <div className="mx-auto max-w-7xl px-6 py-10">

        {/* Header */}

        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold"
            >
              Chat History
            </motion.h1>

            <p className="mt-3 text-gray-400">
              Browse and manage all your previous AI conversations.
            </p>

          </div>

          {/* Search */}

          <div className="relative w-full lg:w-[420px]">

            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
            />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search conversations..."
              className="
              w-full
              rounded-2xl
              border
              border-[#262626]
              bg-[#111111]
              py-3
              pl-11
              pr-4
              outline-none
              transition
              focus:border-red-600
            "
            />

          </div>

        </div>

        {/* Stats */}

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((item) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                whileHover={{
                  y: -4,
                }}
                className="
                rounded-3xl
                border
                border-[#242424]
                bg-[#101010]
                p-6
                transition
                hover:border-red-600
              "
              >

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-sm text-gray-400">
                      {item.title}
                    </p>

                    <h2 className="mt-3 text-4xl font-bold">
                      {item.value}
                    </h2>

                  </div>

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
                      size={26}
                      className="text-red-500"
                    />

                  </div>

                </div>

              </motion.div>

            );

          })}

        </div>

        {/* Chat List */}

        <div className="mt-10 space-y-5">

          {filteredChats.length === 0 ? (

            <div className="py-24 text-center text-gray-500">

              <Clock
                size={60}
                className="mx-auto mb-6"
              />

              <h2 className="text-3xl font-semibold">
                No Chats Found
              </h2>

              <p className="mt-2">
                Start a new conversation to see it here.
              </p>

            </div>

          ) : (

            filteredChats.map((chat) => {

              const Icon = getIcon(chat);

              return (

                <motion.div
                  key={chat.id}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  whileHover={{
                    scale: 1.01,
                  }}
                  className="
                  rounded-3xl
                  border
                  border-[#242424]
                  bg-[#111111]
                  p-6
                  transition
                  hover:border-red-600
                "
                >
                                  <div className="flex items-start justify-between gap-5">

                    {/* Left */}

                    <div className="flex flex-1 gap-4">

                      <div
                        className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-2xl
                        bg-red-600/15
                        "
                      >
                        <Icon
                          className="text-red-500"
                          size={22}
                        />
                      </div>

                      <div className="flex-1">

                        <div className="flex flex-wrap items-center gap-2">

                          <h2 className="text-xl font-bold">
                            {chat.title}
                          </h2>

                          {chat.pinned && (
                            <span className="rounded-full bg-yellow-500/20 px-2 py-1 text-xs text-yellow-400">
                              <Pin size={12} className="inline mr-1" />
                              Pinned
                            </span>
                          )}

                          {chat.favorite && (
                            <span className="rounded-full bg-amber-500/20 px-2 py-1 text-xs text-amber-400">
                              <Star
                                size={12}
                                className="inline mr-1 fill-amber-400"
                              />
                              Favorite
                            </span>
                          )}

                        </div>

                        <p className="mt-3 text-gray-400">
                          {chat.messages.length} messages
                        </p>

                        <p className="mt-1 text-sm text-gray-500">
                          Last updated •{" "}
                          {new Date(
                            chat.updatedAt
                          ).toLocaleString()}
                        </p>

                      </div>

                    </div>

                    {/* Right */}

                    <div className="flex items-center gap-3">

                      <button
                        onClick={() => {
                          setCurrentChatId(chat.id);
                          navigate("/chat");
                        }}
                        className="
                        flex
                        items-center
                        gap-2
                        rounded-xl
                        bg-gradient-to-r
                        from-red-600
                        to-red-700
                        px-5
                        py-2.5
                        font-medium
                        transition
                        hover:scale-105
                        "
                      >
                        Open
                        <ArrowUpRight size={16} />
                      </button>

                      <button
                        onClick={() =>
                          deleteChat(chat.id)
                        }
                        className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-xl
                        bg-[#1a1a1a]
                        transition
                        hover:bg-red-600
                        "
                      >
                        <Trash2 size={18} />
                      </button>

                    </div>

                  </div>

                </motion.div>

              );

            })

          )}

        </div>

      </div>

    </div>

  );

}