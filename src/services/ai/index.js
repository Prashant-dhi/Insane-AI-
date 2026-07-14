import { askGroq, stopGroqGeneration } from "./groq";

import { CHAT_TITLE_PROMPT } from "./prompts";

export async function generateChatTitle(message) {
  return askGroq(
    [
      {
        role: "system",
        content: CHAT_TITLE_PROMPT,
      },
      {
        role: "user",
        content: message,
      },
    ],
    {
      temperature: 0.2,
      maxTokens: 20,
    }
  );
}

export async function askAI(prompt, options = {}) {
  const messages = [];

  if (options.systemPrompt) {
    messages.push({
      role: "system",
      content: options.systemPrompt,
    });
  }

  if (Array.isArray(options.memory)) {
    messages.push(...options.memory);
  }

  messages.push({
    role: "user",
    content: prompt,
  });

  return askGroq(messages, {
    model: options.model,
    temperature: options.temperature,
    maxTokens: options.maxTokens,
    onToken: options.onToken,
  });
}

export function stopAI() {
  stopGroqGeneration();
}