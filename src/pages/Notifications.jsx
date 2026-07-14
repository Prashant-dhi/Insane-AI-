import {
  Bell,
  Check,
  Trash2,
  CheckCheck,
  Trash,
} from "lucide-react";

import { useState } from "react";
import { useNotification } from "../context/NotificationContext";

export default function Notifications() {
  const {
    notifications,
    markAsRead,
    deleteNotification,
    markAllRead,
    clearAll,
  } = useNotification();

  const [filter, setFilter] = useState("all");

  const filteredNotifications = notifications.filter((item) => {
    if (filter === "all") return true;
    if (filter === "unread") return !item.read;
    return item.type === filter;
  });

  return (
    <div className="min-h-screen bg-[#050505] text-white p-5 lg:p-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}

        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <Bell size={34} className="text-red-500" />

              <h1 className="text-3xl lg:text-4xl font-bold">
                Notifications
              </h1>
            </div>

            <p className="mt-3 text-gray-400">
              Stay updated with your NEW AI activities.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={markAllRead}
              className="flex items-center gap-2 rounded-xl bg-green-600 px-4 py-2 hover:bg-green-500 transition"
            >
              <CheckCheck size={18} />
              Mark All
            </button>

            <button
              onClick={clearAll}
              className="flex items-center gap-2 rounded-xl bg-red-600 px-4 py-2 hover:bg-red-500 transition"
            >
              <Trash size={18} />
              Clear All
            </button>
          </div>
        </div>

        {/* Filter */}

        <div className="mt-8 flex flex-wrap gap-3">
          {[
            ["all", "All"],
            ["unread", "Unread"],
            ["update", "Updates"],
            ["system", "System"],
          ].map(([value, label]) => (
            <button
              key={value}
              onClick={() => setFilter(value)}
              className={`rounded-xl px-5 py-2 transition ${
                filter === value
                  ? "bg-red-600"
                  : "bg-[#171717] hover:bg-[#222]"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Notifications */}

        <div className="mt-10 space-y-5">
          {filteredNotifications.length === 0 ? (
            <div className="rounded-3xl border border-[#262626] bg-[#111111] p-16 text-center">
              <Bell
                size={60}
                className="mx-auto text-gray-600"
              />

              <h2 className="mt-6 text-2xl font-bold">
                No Notifications
              </h2>

              <p className="mt-3 text-gray-500">
                You're all caught up.
              </p>
            </div>
          ) : (
            filteredNotifications.map((item) => (
              <div
                key={item.id}
                className={`rounded-3xl border p-6 transition hover:border-red-600 ${
                  item.read
                    ? "border-[#262626] bg-[#111111]"
                    : "border-red-600/40 bg-[#151010]"
                }`}
              >
                <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-600/20">
                      <Bell
                        size={22}
                        className="text-red-500"
                      />
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold">
                        {item.title}
                      </h2>

                      <p className="mt-2 text-gray-400">
                        {item.message}
                      </p>

                      <div className="mt-3 flex items-center gap-3">
                        <span className="text-sm text-gray-500">
                          {item.time}
                        </span>

                        {!item.read && (
                          <span className="rounded-full bg-red-600 px-2 py-1 text-xs">
                            New
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    {!item.read && (
                      <button
                        onClick={() => markAsRead(item.id)}
                        className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#181818] hover:bg-gray-600 transition"
                      >
                        <Check size={18} />
                      </button>
                    )}

                    <button
                      onClick={() =>
                        deleteNotification(item.id)
                      }
                      className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#181818] hover:bg-red-600 transition"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}