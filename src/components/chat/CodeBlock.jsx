import { useState } from "react";
import { Copy, Check, Download } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function CodeBlock({
  language = "javascript",
  code = "",
}) {
  const [copied, setCopied] = useState(false);

  const copyCode = async () => {
    await navigator.clipboard.writeText(code);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const downloadCode = () => {
    const blob = new Blob([code], {
      type: "text/plain",
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;

    a.download = `code.${language}`;

    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div className="my-8 overflow-hidden rounded-2xl border border-[#262626] bg-[#0d0d0d]">

      {/* Header */}

      <div className="flex items-center justify-between border-b border-[#262626] bg-[#151515] px-5 py-3">

        <div className="flex items-center gap-3">

          <div className="flex gap-2">

            <span className="w-3 h-3 rounded-full bg-red-500"></span>

            <span className="w-3 h-3 rounded-full bg-yellow-500"></span>

            <span className="w-3 h-3 rounded-full bg-green-500"></span>

          </div>

          <span className="text-sm text-gray-400 uppercase">
            {language}
          </span>

        </div>

        <div className="flex gap-2">

          <button
            onClick={downloadCode}
            className="p-2 rounded-lg hover:bg-[#222] transition"
          >
            <Download size={16} />
          </button>

          <button
            onClick={copyCode}
            className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[#222] transition"
          >
            {copied ? (
              <>
                <Check size={16} className="text-green-500" />
                <span className="text-sm">Copied</span>
              </>
            ) : (
              <>
                <Copy size={16} />
                <span className="text-sm">Copy</span>
              </>
            )}
          </button>

        </div>

      </div>

      {/* Code */}

      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        showLineNumbers
        wrapLongLines
        customStyle={{
          margin: 0,
          background: "#0d0d0d",
          padding: "24px",
          fontSize: "14px",
          borderRadius: 0,
        }}
      >
        {code}
      </SyntaxHighlighter>

    </div>
  );
}