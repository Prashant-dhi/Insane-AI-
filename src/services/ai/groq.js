import { DEFAULT_MODEL } from "./models";

let controller = null;

export function stopGroqGeneration() {
  if (controller) {
    controller.abort();
    controller = null;
  }
}

const API_KEY = import.meta.env.VITE_GROQ_API_KEY;

const API_URL =
  "https://api.groq.com/openai/v1/chat/completions";

export async function askGroq(messages, options = {}) {
  if (!API_KEY) {
    throw new Error("Groq API Key Missing");
  }

  controller = new AbortController();

  try {
    const response = await fetch(API_URL, {
      method: "POST",

      signal: controller.signal,

      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        model: options.model || DEFAULT_MODEL.id,

        messages,

        temperature: options.temperature ?? 0.2,

        max_tokens: options.maxTokens ?? 4096,

        stream: true,
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      throw new Error(err);
    }

    const reader = response.body.getReader();

    const decoder = new TextDecoder();

    let fullText = "";

    while (true) {
      const { done, value } = await reader.read();

      if (done) break;

      const chunk = decoder.decode(value);

      const lines = chunk.split("\n");

      for (const line of lines) {
        if (!line.startsWith("data:")) continue;

        const data = line.replace("data:", "").trim();

        if (data === "[DONE]") continue;

        try {
          const json = JSON.parse(data);

          const token =
            json.choices?.[0]?.delta?.content;

          if (token) {
            fullText += token;

            if (options.onToken) {
              options.onToken(fullText);
            }
          }
        } catch {
          // Ignore invalid chunks
        }
      }
    }

    return {
      text: fullText,
    };

  } catch (err) {

    if (err.name === "AbortError") {
      return {
        text: "",
      };
    }

    throw err;

  } finally {

    controller = null;

  }


let cleaned = fullText;

// Remove common AI introductions
cleaned = cleaned.replace(/^You asked:.*?\n+/is, "");
cleaned = cleaned.replace(/^Here(?:'|’)s.*?\n+/is, "");
cleaned = cleaned.replace(/^Certainly!?[\r\n]*/i, "");
cleaned = cleaned.replace(/^Sure!?[\r\n]*/i, "");
cleaned = cleaned.replace(/^Of course!?[\r\n]*/i, "");
cleaned = cleaned.replace(/^I'd be happy to help\.?[\r\n]*/i, "");

// Trim extra whitespace
cleaned = cleaned.trim();

return {
  text: cleaned,
};
}