import { useEffect, useRef } from "react";
import { Sparkles, MessageSquare } from "lucide-react";

import Message from "./Message";
import TypingIndicator from "./TypingIndicator";
import { useChat } from "../../context/ChatContext";

export default function ChatWindow() {
  const { currentChat, isTyping } = useChat();

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [currentChat?.messages, isTyping]);

  const messages = currentChat?.messages || [];

  return (
    <div className="relative h-full overflow-y-auto">

      {/* Background Glow */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div
          className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[600px]
          h-[300px]
          rounded-full
          bg-red-600/10
          blur-[130px]
          "
        />

      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 py-8">

        {messages.length === 0 ? (

          <div className="flex min-h-[70vh] flex-col items-center justify-center text-center">

            <div
              className="
              flex
              h-20
              w-20
              items-center
              justify-center
              rounded-3xl
              bg-gradient-to-br
              from-red-600
              to-red-800
              shadow-xl
              shadow-red-900/30
              "
            >

              <Sparkles size={34} />

            </div>

            <h1 className="mt-8 text-5xl font-bold">

              Welcome to NEW AI

            </h1>

            <p className="mt-4 max-w-xl text-lg leading-8 text-gray-400">

              Ask anything, generate images,
              write code, solve problems,
              brainstorm ideas and boost your
              productivity with powerful AI.

            </p>

            <div className="mt-12 grid w-full max-w-3xl gap-4 md:grid-cols-2">

              {[
                "Explain React Hooks",
                "Generate an AI image",
                "Write Python code",
                "Summarize a document",
              ].map((item) => (

                <div
                  key={item}
                  className="
                  rounded-2xl
                  border
                  border-[#262626]
                  bg-[#111111]
                  p-5
                  transition
                  hover:border-red-600
                  hover:-translate-y-1
                  "
                >

                  <div className="flex items-center gap-3">

                    <MessageSquare
                      size={18}
                      className="text-red-500"
                    />

                    <span className="text-sm">

                      {item}

                    </span>

                  </div>

                </div>

              ))}

            </div>

          </div>

        ) : (

          <div className="space-y-7">

            {messages.map((message) => (

              <Message
                key={message.id}
                message={message}
              />

            ))}

            {isTyping && <TypingIndicator />}

            <div ref={bottomRef} />

          </div>

        )}

      </div>

    </div>
  );
}