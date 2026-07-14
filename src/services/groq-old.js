const API_KEY = import.meta.env.VITE_GROQ_API_KEY;

const API_URL =
  "https://api.groq.com/openai/v1/chat/completions";

const DEFAULT_MODEL = "llama-3.3-70b-versatile";

export async function askGemini(
  prompt,
  options = {}
) {
  try {
    if (!API_KEY) {
      throw new Error("Groq API key is missing.");
    }

    const systemPrompt =
      options.systemPrompt ||
      `
You are NEW AI.

You are an intelligent AI assistant similar to ChatGPT.

Rules:

- Answer exactly what the user asks.
- Never give unnecessary introductions.
- Never repeat the user's question.
- Keep answers concise unless the user requests details.
- If the user asks for code, return clean, production-ready code.
- If the user asks React, Tailwind CSS, JavaScript, Node.js, HTML or CSS questions, follow modern best practices.
- Format answers beautifully using Markdown.
- Use headings, bullet lists and code blocks when helpful.
- If you don't know something, clearly say so instead of making it up.
- Think carefully before answering.
- Prioritize accuracy over creativity.
- Do not mention Groq, Llama, or your internal model unless the user explicitly asks.
`;

    const messages = [
      {
        role: "system",
        content: systemPrompt,
      },

      ...(options.memory || []),

      {
        role: "user",
        content: prompt,
      },
    ];

    const response = await fetch(API_URL, {
      method: "POST",

      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        model: options.model || DEFAULT_MODEL,

        messages,

        temperature:
          options.temperature ?? 0.3,

        top_p: 0.9,

        max_tokens:
          options.maxTokens ?? 8192,

        frequency_penalty: 0,

        presence_penalty: 0,

        stream: false,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data?.error?.message ||
          "Groq API Error"
      );
    }

    return (
      data?.choices?.[0]?.message?.content ||
      "No response."
    );
  } catch (error) {
    console.error(error);

    return `⚠️ ${error.message}`;
  }
}