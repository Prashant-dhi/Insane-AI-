import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { DEFAULT_MODEL } from "../services/ai/models";

import { generateChatTitle } from "../services/ai";

const ChatContext = createContext();

export const useChat = () => useContext(ChatContext);

function createNewChat(model = DEFAULT_MODEL.id) {
  const now = new Date().toISOString();

  return {
    id: Date.now(),

    title: "New Chat",

    messages: [],

    pinned: false,

    favorite: false,

    archived: false,

    model,

    category: "General",

    createdAt: now,

    updatedAt: now,

    lastMessage: "",

    totalMessages: 0,
  };
}

export default function ChatProvider({ children }) {
  const [chats, setChats] = useState(() => {
    try {
      const saved =
        localStorage.getItem("new-ai-chats");

      if (saved) {
        const parsed = JSON.parse(saved);

        if (
          Array.isArray(parsed) &&
          parsed.length
        ) {
          return parsed;
        }
      }
    } catch (error) {
      console.log(error);
    }

    return [createNewChat()];
  });

  const [currentChatId, setCurrentChatId] =
    useState(() => {
      const saved =
        localStorage.getItem(
          "new-ai-current"
        );

      return saved ? Number(saved) : null;
    });

  const [isTyping, setIsTyping] =
    useState(false);

  const [selectedModel, setSelectedModel] =
    useState(() => {
      return (
        localStorage.getItem("new-ai-model") ||
        DEFAULT_MODEL.id
      );
    });

  useEffect(() => {
    localStorage.setItem(
      "new-ai-chats",
      JSON.stringify(chats)
    );
  }, [chats]);

  useEffect(() => {
    if (!currentChatId && chats.length) {
      setCurrentChatId(chats[0].id);
    }
  }, [chats, currentChatId]);

  useEffect(() => {
    if (currentChatId) {
      localStorage.setItem(
        "new-ai-current",
        String(currentChatId)
      );
    }
  }, [currentChatId]);

  useEffect(() => {
    localStorage.setItem(
      "new-ai-model",
      selectedModel
    );
  }, [selectedModel]);

  const currentChat =
    chats.find(
      (chat) => chat.id === currentChatId
    ) || chats[0];

  const sortedChats = [...chats].sort(
    (a, b) => {
      if (a.pinned && !b.pinned) return -1;

      if (!a.pinned && b.pinned) return 1;

      return (
        new Date(b.updatedAt).getTime() -
        new Date(a.updatedAt).getTime()
      );
    }
  );

  const recentChats =
    sortedChats.slice(0, 15);

  const totalMessages = chats.reduce(
    (total, chat) =>
      total + chat.messages.length,
    0
  );

  const createChat = () => {
    const newChat = createNewChat(selectedModel);

    setChats((prev) => [
      newChat,
      ...prev,
    ]);

    setCurrentChatId(newChat.id);

    return newChat.id;
  };

  const addMessage = (message) => {
  const activeId = currentChatId;

  setChats((prevChats) =>
    prevChats.map((chat) => {
      if (chat.id !== activeId) return chat;

      const updatedMessages = [
        ...chat.messages,
        {
          ...message,
          id: message.id || Date.now(),
        },
      ];

      const firstUser = updatedMessages.find(
        (m) => m.type === "user"
      );

      return {
        ...chat,
        messages: updatedMessages,
        totalMessages: updatedMessages.length,
        updatedAt: new Date().toISOString(),
        lastMessage: message.text || "",
        title:
          firstUser?.text?.slice(0, 40) ||
          "New Chat",
      };
    })
  );

  // Generate title only for first user message
  if (message.type === "user" && currentChat?.messages.length === 0) {
    generateChatTitle(message.text)
      .then((res) => {
        const title =
          typeof res === "string" ? res : res.text;

        setChats((old) =>
          old.map((c) =>
            c.id === activeId
              ? {
                  ...c,
                  title: title.trim(),
                }
              : c
          )
        );
      })
      .catch(console.error);
  }
};
  const startStreamingMessage = () => {
    const id = Date.now();

    addMessage({
      id,
      type: "ai",
      text: "",
      image: null,
      file: null,
      time: "Just now",
    });

    return id;
  };

  const regenerateLastResponse = () => {
    const chat = chats.find((c) => c.id === currentChatId);

    if (!chat) return null;

    const messages = [...chat.messages];

    // Remove last AI message
    if (
      messages.length &&
      messages[messages.length - 1].type === "ai"
    ) {
      messages.pop();
    }

    // Find last user message
    const lastUser = [...messages]
      .reverse()
      .find((m) => m.type === "user");

    if (!lastUser) return null;

    setChats((prev) =>
      prev.map((c) =>
        c.id === currentChatId
          ? {
            ...c,
            messages,
            totalMessages: messages.length,
            updatedAt: new Date().toISOString(),
          }
          : c
      )
    );

    return lastUser.text;
  };

  const updateStreamingMessage = (id, text) => {
    setChats((prev) =>
      prev.map((chat) => {
        if (chat.id !== currentChatId) return chat;

        return {
          ...chat,
          updatedAt: new Date().toISOString(),
          lastMessage: text,

          messages: chat.messages.map((msg) =>
            msg.id === id
              ? {
                ...msg,
                text,
                updatedAt: new Date().toISOString(),
              }
              : msg
          ),
        };
      })
    );
  };
  const deleteChat = (id) => {
    const filtered = chats.filter(
      (chat) => chat.id !== id
    );

    if (filtered.length === 0) {
      const newChat = createNewChat();

      setChats([newChat]);

      setCurrentChatId(newChat.id);

      return;
    }

    setChats(filtered);

    if (currentChatId === id) {
      setCurrentChatId(filtered[0].id);
    }
  };

  const renameChat = (id, title) => {
    setChats((prev) =>
      prev.map((chat) =>
        chat.id === id
          ? {
            ...chat,
            title,
            updatedAt:
              new Date().toISOString(),
          }
          : chat
      )
    );
  };

  const pinChat = (id) => {
    setChats((prev) =>
      prev.map((chat) =>
        chat.id === id
          ? {
            ...chat,
            pinned: !chat.pinned,
            updatedAt:
              new Date().toISOString(),
          }
          : chat
      )
    );
  };

  const favoriteChat = (id) => {
    setChats((prev) =>
      prev.map((chat) =>
        chat.id === id
          ? {
            ...chat,
            favorite: !chat.favorite,
          }
          : chat
      )
    );
  };

  const duplicateChat = (id) => {
    const chat = chats.find(
      (c) => c.id === id
    );

    if (!chat) return;

    const copy = {
      ...chat,

      id: Date.now(),

      title:
        chat.title + " (Copy)",

      createdAt:
        new Date().toISOString(),

      updatedAt:
        new Date().toISOString(),
    };

    setChats((prev) => [
      copy,
      ...prev,
    ]);
  };

  const exportChat = (id) => {
    const chat = chats.find(
      (c) => c.id === id
    );

    if (!chat) return;

    const content = chat.messages
      .map(
        (m) =>
          `${m.type.toUpperCase()}\n\n${m.text}`
      )
      .join("\n\n----------------\n\n");

    const blob = new Blob(
      [content],
      {
        type: "text/plain",
      }
    );

    const url =
      URL.createObjectURL(blob);

    const a =
      document.createElement("a");

    a.href = url;

    a.download =
      `${chat.title}.txt`;

    a.click();

    URL.revokeObjectURL(url);
  };

  const clearChats = () => {
    const newChat =
      createNewChat();

    setChats([newChat]);

    setCurrentChatId(
      newChat.id
    );
  };

  return (
    <ChatContext.Provider
      value={{
        selectedModel,
        setSelectedModel,
        chats,

        sortedChats,

        recentChats,

        totalMessages,

        currentChat,

        currentChatId,

        setCurrentChatId,

        createChat,

        addMessage,

        startStreamingMessage,

        updateStreamingMessage,

        regenerateLastResponse,

        deleteChat,

        renameChat,

        pinChat,

        favoriteChat,

        duplicateChat,

        exportChat,

        clearChats,

        isTyping,

        setIsTyping,

      }}
    >
      {children}
    </ChatContext.Provider>
  );
}