import { useState } from "react";
import {
  Image,
  Sparkles,
  Download,
  Loader2,
} from "lucide-react";

import { generateAIImage } from "../services/image";

export default function ImageGenerator() {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      setError("Please enter an image prompt.");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setImage("");

      const imageUrl = await generateAIImage(prompt);

      setImage(imageUrl);
    } catch (err) {
      console.error(err);
      setError("Failed to generate image.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white p-6 md:p-10 overflow-y-auto">
      <div className="max-w-5xl mx-auto">

        <div className="flex items-center gap-3">
          <Image className="text-red-500" size={34} />

          <h1 className="text-4xl font-bold">
            AI Image Generator
          </h1>
        </div>

        <p className="text-gray-400 mt-3">
          Describe anything and NEW AI will create it.
        </p>

        <div className="mt-10 bg-[#111111] border border-[#262626] rounded-3xl p-8">

          <textarea
            rows={5}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Example: A beautiful girl riding a bike on the highway at sunset, cinematic, ultra realistic, 8k"
            className="
            w-full
            bg-[#181818]
            border
            border-[#262626]
            rounded-2xl
            p-5
            outline-none
            resize-none
            focus:border-red-600
            transition
            "
          />

          {error && (
            <p className="mt-4 text-red-500">
              {error}
            </p>
          )}

          <button
            onClick={handleGenerate}
            disabled={loading}
            className="
            mt-6
            flex
            items-center
            gap-3
            bg-gradient-to-r
            from-red-600
            to-red-800
            px-8
            py-3
            rounded-xl
            hover:scale-105
            transition
            disabled:opacity-60
            "
          >
            {loading ? (
              <>
                <Loader2
                  size={20}
                  className="animate-spin"
                />
                Generating...
              </>
            ) : (
              <>
                <Sparkles size={20} />
                Generate Image
              </>
            )}
          </button>

        </div>

        {image && (
          <div className="mt-10 bg-[#111111] border border-[#262626] rounded-3xl p-8">

            <div className="flex items-center justify-between mb-6">

              <h2 className="text-2xl font-bold">
                Generated Image
              </h2>

              <a
                href={image}
                target="_blank"
                rel="noreferrer"
                download
                className="
                flex
                items-center
                gap-2
                bg-[#181818]
                hover:bg-[#222222]
                px-5
                py-3
                rounded-xl
                transition
                "
              >
                <Download size={18} />
                Download
              </a>

            </div>

            <img
              src={image}
              alt="Generated AI"
              loading="lazy"
              className="
              w-full
              rounded-2xl
              border
              border-[#262626]
              hover:scale-[1.01]
              transition
              duration-300
              "
            />

          </div>
        )}

      </div>
    </div>
  );
}