import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App";

import ChatProvider from "./context/ChatContext";
import AuthProvider from "./context/AuthContext";
import NotificationProvider from "./context/NotificationContext";
import PlanProvider from "./context/PlanContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <AuthProvider>

      <PlanProvider>

        <NotificationProvider>

          <ChatProvider>

            <App />

          </ChatProvider>

        </NotificationProvider>

      </PlanProvider>

    </AuthProvider>

  </React.StrictMode>
);