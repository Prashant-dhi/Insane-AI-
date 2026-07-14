import {
  Plus,
  Search,
  MessageSquare,
  Image,
  User,
  Settings,
  LayoutDashboard,
  LogOut,
  MoreVertical,
  Pencil,
  Trash2,
  Pin,
  Download,
  Crown,
} from "lucide-react";

import {
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";

import { createPortal } from "react-dom";

import { NavLink, useNavigate } from "react-router-dom";

import {
  useMemo,
  useState,
  useEffect,
  useRef,
} from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import { useChat } from "../../context/ChatContext";

export default function Sidebar({
  mobileOpen,
  setMobileOpen,
}) {
  const {
    chats,
    currentChatId,
    setCurrentChatId,
    createChat,
    deleteChat,
    renameChat,
    pinChat,
    exportChat,
  } = useChat();

  const navigate = useNavigate();

  const [collapsed, setCollapsed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(null);
  const [search, setSearch] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  const [menuPosition, setMenuPosition] = useState({
    x: 0,
    y: 0,
  });

  const dropdownRef = useRef(null);

  useEffect(() => {
    const resize = () => {
      const width = window.innerWidth;

      setIsMobile(width < 1024);

      if (width < 1024) {
        setCollapsed(false);
      }

      if (width >= 1024) {
        setMobileOpen(false);
      }
    };

    resize();

    window.addEventListener("resize", resize);

    return () =>
      window.removeEventListener("resize", resize);
  }, [setMobileOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setMenuOpen(null);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

  const menu = [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard",
    },
    {
      title: "Image Generator",
      icon: Image,
      path: "/image-generator",
    },
    {
      title: "Profile",
      icon: User,
      path: "/profile",
    },
    {
      title: "Settings",
      icon: Settings,
      path: "/settings",
    },
    {
      title: "Upgrade",
      icon: Crown,
      path: "/upgrade",
    },
  ];

  const filteredChats = useMemo(() => {
    return [...chats]
      .sort((a, b) => {
        if (a.pinned && !b.pinned) return -1;
        if (!a.pinned && b.pinned) return 1;

        return (
          new Date(b.updatedAt) -
          new Date(a.updatedAt)
        );
      })
      .filter((chat) =>
        chat.title
          .toLowerCase()
          .includes(search.toLowerCase())
      );
  }, [chats, search]);

  const startRename = (chat) => {
    setEditingId(chat.id);
    setEditValue(chat.title);
  };

  const saveRename = (id) => {
    const title = editValue.trim();

    if (title) {
      renameChat(id, title);
    }

    setEditingId(null);
    setEditValue("");
  };


  const openMenu = (e, chatId) => {
    e.stopPropagation();

    const rect = e.currentTarget.getBoundingClientRect();

    setMenuPosition({
      x: rect.right + 8,
      y: rect.top,
    });

    setMenuOpen(menuOpen === chatId ? null : chatId);
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      <AnimatePresence>
        {mobileOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 z-40 bg-black/60"
          />
        )}
      </AnimatePresence>

      <motion.aside
        initial={false}
        animate={{
          x: isMobile
            ? mobileOpen
              ? 0
              : -320
            : 0,
          width: isMobile
            ? 280
            : collapsed
              ? 80
              : 280,
        }}
        transition={{ duration: 0.25 }}
        className={`
          ${isMobile
            ? "fixed left-0 top-0 z-50 h-screen"
            : "relative h-full"
          }
          flex
          flex-col
          bg-[#0B0B0B]
          border-r
          border-[#202020]
          overflow-visible
        `}
      >
        {/* Header */}
        <div className="border-b border-[#202020] p-4">

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3 overflow-hidden">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-600 text-lg font-bold">
                N
              </div>

              {!collapsed && (
                <div className="overflow-hidden">
                  <h2 className="truncate text-base font-semibold">
                    NEW AI
                  </h2>

                  <p className="truncate text-xs text-gray-500">
                    AI Assistant
                  </p>
                </div>
              )}

            </div>

            {!isMobile && (
              <button
                onClick={() => setCollapsed(!collapsed)}
                className="rounded-lg p-2 hover:bg-[#1b1b1b]"
              >
                {collapsed ? (
                  <PanelLeftOpen size={20} />
                ) : (
                  <PanelLeftClose size={20} />
                )}
              </button>
            )}

          </div>

        </div>
        {/* New Chat */}

        <div className="p-4">
          <button
            onClick={() => {
              createChat();
              navigate("/chat");
            }}
            className="
              flex
              h-10
              w-full
              items-center
              justify-center
              gap-2
              rounded-lg
              text-[13px]
              font-normal
              bg-[#E53935]
              font-medium
              transition
              hover:bg-[#d32f2f]
            "
          >
            <Plus size={18} />

            {!collapsed && "New Chat"}
          </button>
        </div>

        {/* Search */}

        {!collapsed && (
          <div className="px-4">
            <div className="flex items-center rounded-xl border border-[#242424] bg-[#151515] px-3">
              <Search
                size={17}
                className="text-gray-500"
              />

              <input
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                placeholder="Search chats..."
                className="
                  flex-1
                  bg-transparent
                  py-2.5
                  px-2
                  text-[13px]
                  outline-none
                "
              />
            </div>
          </div>
        )}

        {/* Recent Chats */}

        <div className="flex-1 overflow-y-auto overflow-x-visible px-3 pt-5">
          {!collapsed && (
            <h3 className="mb-3 px-2 text-[11px] font-semibold uppercase tracking-[0.08em] font-medium text-gray-500">
              Recent Chats
            </h3>
          )}

          <div className="space-y-2">
            {filteredChats.map((chat) => (
              <motion.div
                key={chat.id}
                layout
                whileHover={{ x: 2 }}
                className={`
group
rounded-xl
transition-all
duration-200
${currentChatId === chat.id
                    ? "bg-[#1f1f1f]"
                    : "hover:bg-[#1b1b1b]"
                  }
`}
              >
                <div className="flex items-center justify-between px-2.5 py-2">
                  <button
                    onClick={() => {
                      setCurrentChatId(chat.id);
                      navigate("/chat");

                      if (isMobile) {
                        setMobileOpen(false);
                      }
                    }}
                    className={`
                       flex
                       items-center
                      overflow-hidden
                       ${collapsed ? "justify-center w-full" : "flex-1 gap-3 text-left"}
                        `}
                  >
                    <MessageSquare
                      size={16}
                      className="shrink-0 text-gray-400"
                    />

                    {editingId === chat.id ? (
                      <input
                        autoFocus
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        onBlur={() => saveRename(chat.id)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            saveRename(chat.id);
                          }
                        }}
                        className="w-full bg-transparent text-sm outline-none"
                      />
                    ) : (
                      !collapsed && (
                        <div className="flex items-center gap-2 min-w-0">
                          {chat.pinned && (
                            <Pin
                              size={12}
                              className="shrink-0 text-red-500"
                            />
                          )}

                          <span className="truncate text-sm">
                            {chat.title}
                          </span>
                        </div>
                      )
                    )}
                  </button>

                  {!collapsed && (
                    <div
                      ref={dropdownRef}
                      className="relative ml-2 hidden group-hover:block"
                    >
                      <button
                        onClick={(e) => openMenu(e, chat.id)}
                        className="flex h-7 w-7 items-center justify-center rounded-lg hover:bg-[#252525]"
                      >
                        <MoreVertical size={16} />
                      </button>
                      {createPortal(
                        <AnimatePresence>
                          {menuOpen && (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.96, y: 6 }}
                              animate={{ opacity: 1, scale: 1, y: 0 }}
                              exit={{ opacity: 0, scale: 0.96, y: 6 }}
                              transition={{ duration: 0.15 }}
                              style={{
                                position: "fixed",
                                left: menuPosition.x,
                                top: menuPosition.y,
                              }}
                              className="z-[99999] w-56 overflow-hidden rounded-2xl border border-[#454545] bg-[#2f2f2f] shadow-2xl"
                            >
                              {(() => {
                                const chat = chats.find((c) => c.id === menuOpen);

                                if (!chat) return null;

                                return (
                                  <>
                                    <button
                                      onClick={() => {
                                        pinChat(chat.id);
                                        setMenuOpen(null);
                                      }}
                                      className="flex w-full items-center gap-3 px-4 py-3 text-gray-200 hover:bg-[#3a3a3a]"
                                    >
                                      <Pin size={18} />
                                      <span>
                                        {chat.pinned ? "Unpin chat" : "Pin chat"}
                                      </span>
                                    </button>

                                    <button
                                      onClick={() => {
                                        startRename(chat);
                                        setMenuOpen(null);
                                      }}
                                      className="flex w-full items-center gap-3 px-4 py-3 text-gray-200 hover:bg-[#3a3a3a]"
                                    >
                                      <Pencil size={18} />
                                      <span>Rename</span>
                                    </button>

                                    <button
                                      onClick={() => {
                                        exportChat(chat.id);
                                        setMenuOpen(null);
                                      }}
                                      className="flex w-full items-center gap-3 px-4 py-3 text-gray-200 hover:bg-[#3a3a3a]"
                                    >
                                      <Download size={18} />
                                      <span>Export</span>
                                    </button>

                                    <div className="mx-2 border-t border-[#444]" />

                                    <button
                                      onClick={() => {
                                        deleteChat(chat.id);
                                        setMenuOpen(null);
                                      }}
                                      className="flex w-full items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-500/10"
                                    >
                                      <Trash2 size={18} />
                                      <span>Delete</span>
                                    </button>
                                  </>
                                );
                              })()}
                            </motion.div>
                          )}
                        </AnimatePresence>,
                        document.body
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>


          {/* Navigation */}
          <div className="mt-8 border-t border-[#202020] pt-6">
            {!collapsed && (
              <p className="mb-3 px-2 text-[11px] tracking-[0.08em] font-semibold uppercase text-gray-500">
                Workspace
              </p>
            )}

            <div className="space-y-2">
              {menu.map((item) => {
                const Icon = item.icon;

                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => {
                      if (isMobile) setMobileOpen(false);
                    }}
                    className={({ isActive }) =>
                      `
    flex
    items-center
    ${collapsed ? "justify-center" : "gap-3"}
    rounded-xl
    px-3
    py-2.5
    text-[13px]
    transition-all
    duration-200
    ${isActive
                        ? "bg-[#1f1f1f] border border-[#323232]"
                        : "hover:bg-[#1b1b1b]"
                      }
    `
                    }
                  >
                    <Icon
                      size={16}
                      className="shrink-0"
                    />

                    {!collapsed && (
                      <span className="text-[13px]">
                        {item.title}
                      </span>
                    )}
                  </NavLink>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer */}

        <div className="border-t border-[#202020] p-4">
          {!collapsed && (
            <div className="flex items-center gap-2 rounded-xl border border-[#232323] bg-[#121212] p-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E53935] font-semibold text-white">
                P
              </div>

              <div className="flex-1 overflow-hidden">
                <h3 className="truncate text-[13px] font-medium">
                  Prashant Dhiman
                </h3>

                <p className="truncate text-[11px] text-gray-500">
                  Premium User
                </p>
              </div>
            </div>
          )}

          <button
            onClick={logout}
            className="
              mt-4
              flex
              w-full
              items-center
              justify-center
              gap-3
              rounded-xl
              border
              border-[#232323]
              bg-[#121212]
              py-2.5
              px-3
              text-[13px]
              text-gray-300
              transition
              hover:bg-[#1A1A1A]
              hover:text-white
            "
          >
            <LogOut size={16} />

            {!collapsed && (
              <span className="font-medium">
                Logout
              </span>
            )}
          </button>
        </div>
      </motion.aside>
    </>
  );
}
