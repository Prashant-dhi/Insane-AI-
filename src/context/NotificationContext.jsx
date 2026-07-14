import { createContext, useContext, useEffect, useState } from "react";

const NotificationContext = createContext();

export const useNotification = () =>
  useContext(NotificationContext);

export default function NotificationProvider({ children }) {
  const [notifications, setNotifications] = useState(() => {
    const saved = localStorage.getItem("new-ai-notifications");

    return saved
      ? JSON.parse(saved)
      : [
          {
            id: 1,
            type: "system",
            title: "Welcome to NEW AI",
            message: "Your AI workspace is ready.",
            time: "Just now",
            read: false,
          },
          {
            id: 2,
            type: "update",
            title: "Image Generator",
            message: "Image Generator is now available.",
            time: "2 hours ago",
            read: false,
          },
        ];
  });

  useEffect(() => {
    localStorage.setItem(
      "new-ai-notifications",
      JSON.stringify(notifications)
    );
  }, [notifications]);

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) =>
        n.id === id
          ? { ...n, read: true }
          : n
      )
    );
  };

  const deleteNotification = (id) => {
    setNotifications((prev) =>
      prev.filter((n) => n.id !== id)
    );
  };

  const markAllRead = () => {
    setNotifications((prev) =>
      prev.map((n) => ({
        ...n,
        read: true,
      }))
    );
  };

  const clearAll = () => {
    setNotifications([]);
  };

  const addNotification = (notification) => {
    setNotifications((prev) => [
      {
        id: Date.now(),
        read: false,
        ...notification,
      },
      ...prev,
    ]);
  };

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        addNotification,
        markAsRead,
        deleteNotification,
        markAllRead,
        clearAll,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
}