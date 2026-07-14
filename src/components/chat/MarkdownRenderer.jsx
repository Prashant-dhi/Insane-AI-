import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { Copy, Check } from "lucide-react";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function MarkdownRenderer({ content }) {

  const [copied, setCopied] = useState(false);

  const copyCode = async (code) => {

    try {

      await navigator.clipboard.writeText(code);

      setCopied(true);

      setTimeout(() => {

        setCopied(false);

      }, 2000);

    } catch (err) {

      console.log(err);

    }

  };

  return (

    <ReactMarkdown

      remarkPlugins={[remarkGfm]}

      components={{

        h1: ({ children }) => (

          <h1 className="text-4xl font-bold mb-6 text-white">

            {children}

          </h1>

        ),

        h2: ({ children }) => (

          <h2 className="text-3xl font-bold mt-8 mb-4 text-white">

            {children}

          </h2>

        ),

        h3: ({ children }) => (

          <h3 className="text-2xl font-semibold mt-6 mb-3 text-white">

            {children}

          </h3>

        ),

        p: ({ children }) => (

          <p className="leading-8 text-gray-300 mb-5">

            {children}

          </p>

        ),

        ul: ({ children }) => (

          <ul className="list-disc ml-6 mb-5 space-y-2 text-gray-300">

            {children}

          </ul>

        ),

        ol: ({ children }) => (

          <ol className="list-decimal ml-6 mb-5 space-y-2 text-gray-300">

            {children}

          </ol>

        ),

        li: ({ children }) => (

          <li className="leading-7">

            {children}

          </li>

        ),

        blockquote: ({ children }) => (

          <blockquote className="border-l-4 border-red-600 bg-[#111111] rounded-r-xl p-5 my-6 italic text-gray-300">

            {children}

          </blockquote>

        ),

        a: ({ href, children }) => (

          <a

            href={href}

            target="_blank"

            rel="noreferrer"

            className="text-red-500 underline hover:text-red-400"

          >

            {children}

          </a>

        ),

        table: ({ children }) => (

          <div className="overflow-x-auto my-8 rounded-xl border border-[#262626]">

            <table className="w-full">

              {children}

            </table>

          </div>

        ),

        tr: ({ children }) => (

          <tr className="border-b border-[#262626]">

            {children}

          </tr>

        ),

        th: ({ children }) => (

          <th className="bg-[#151515] p-4 text-left font-semibold">

            {children}

          </th>

        ),

        td: ({ children }) => (

          <td className="p-4 text-gray-300">

            {children}

          </td>

        ), code({ inline, className, children }) {

          const match = /language-(\w+)/.exec(className || "");

          const code = String(children).replace(/\n$/, "");

          if (inline) {

            return (

              <code
                className="
                px-1.5
                py-0.5
                rounded-md
                bg-[#1a1a1a]
                text-red-400
                text-sm
                "
              >
                {children}
              </code>

            );

          }

          return (

            <div
              className="
              my-6
              overflow-hidden
              rounded-2xl
              border
              border-[#262626]
              bg-[#0d1117]
              shadow-xl
              "
            >

              {/* Header */}

              <div
                className="
                flex
                items-center
                justify-between
                px-4
                py-3
                border-b
                border-[#262626]
                bg-[#111111]
                "
              >

                <span
                  className="
                  text-xs
                  uppercase
                  tracking-wider
                  text-gray-400
                  "
                >
                  {match?.[1] || "code"}
                </span>

                <button
                  onClick={() => copyCode(code)}
                  className="
                  flex
                  items-center
                  gap-2
                  text-xs
                  text-gray-400
                  hover:text-white
                  transition
                  "
                >

                  {copied ? (
                    <>
                      <Check size={14} />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      Copy
                    </>
                  )}

                </button>

              </div>

              {/* Code */}
              {/* Code */}

              <SyntaxHighlighter
                language={match?.[1] || "javascript"}
                style={vscDarkPlus}
                showLineNumbers
                wrapLongLines
                customStyle={{
                  margin: 0,
                  padding: "22px",
                  background: "#0d1117",
                  fontSize: "14px",
                  borderRadius: 0,
                }}
                codeTagProps={{
                  style: {
                    fontFamily: "Fira Code, monospace",
                  },
                }}
              >
                {code}
              </SyntaxHighlighter>

            </div>

          );

        },

      }}

    >

      {content}

    </ReactMarkdown>

  );

}