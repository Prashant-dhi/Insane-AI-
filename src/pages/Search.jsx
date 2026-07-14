import {
  Search as SearchIcon,
  MessageSquare,
  Clock,
  Trash2,
  ArrowUpRight,
} from "lucide-react";

import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useChat } from "../context/ChatContext";

export default function Search() {
  const navigate = useNavigate();

  const {
    chats,
    deleteChat,
    setCurrentChatId,
  } = useChat();

  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return chats.filter((chat) => {
      const q = query.toLowerCase();

      return (
        chat.title.toLowerCase().includes(q) ||
        chat.messages.some((m) =>
          m.text.toLowerCase().includes(q)
        )
      );
    });
  }, [query, chats]);

  return (
    <div className="min-h-screen bg-[#050505] text-white p-10">

      <div className="max-w-6xl mx-auto">

        <div className="flex items-center gap-4">

          <SearchIcon
            size={40}
            className="text-red-500"
          />

          <div>
            <h1 className="text-4xl font-bold">
              Search Chats
            </h1>

            <p className="text-gray-400 mt-2">
              Search through all your conversations.
            </p>
          </div>

        </div>

        <div className="mt-8 bg-[#111111] border border-[#262626] rounded-2xl flex items-center px-5">

          <SearchIcon
            size={20}
            className="text-gray-500"
          />

          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search conversations..."
            className="
              w-full
              bg-transparent
              outline-none
              p-5
              text-white
            "
          />

        </div>

        <div className="mt-10 space-y-5">

          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-500">
              No chats found.
            </div>
          )}

          {filtered.map((chat) => (

            <div
              key={chat.id}
              className="
                bg-[#111111]
                border
                border-[#262626]
                rounded-3xl
                p-6
                hover:border-red-600
                transition
              "
            >

              <div className="flex justify-between gap-5">

                <div className="flex gap-4 flex-1">

                  <div className="w-12 h-12 rounded-2xl bg-red-600/20 flex items-center justify-center">

                    <MessageSquare className="text-red-500" />

                  </div>

                  <div className="flex-1">

                    <h2 className="text-xl font-bold">
                      {chat.title}
                    </h2>

                    <p className="text-gray-400 mt-2 line-clamp-2">
                      {chat.messages.at(-1)?.text ||
                        "No messages"}
                    </p>

                    <div className="flex items-center gap-2 text-gray-500 text-sm mt-3">

                      <Clock size={16} />

                      {new Date(
                        chat.updatedAt
                      ).toLocaleString()}

                    </div>

                  </div>

                </div>

                <div className="flex gap-2">

                  <button
                    onClick={() => {
                      setCurrentChatId(chat.id);
                      navigate("/chat");
                    }}
                    className="
                      px-4
                      py-2
                      rounded-xl
                      bg-red-600
                      hover:bg-red-700
                      flex
                      items-center
                      gap-2
                    "
                  >
                    Open
                    <ArrowUpRight size={16} />
                  </button>

                  <button
                    onClick={() => deleteChat(chat.id)}
                    className="
                      w-11
                      h-11
                      rounded-xl
                      bg-[#181818]
                      hover:bg-red-600
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <Trash2 size={18} />
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}