const AI_MODELS = {
  GPT5: {
    id: "llama-3.3-70b-versatile",
    name: "GPT-5",
    provider: "NEW AI",
  },

  LLAMA_70B: {
    id: "llama-3.3-70b-versatile",
    name: "Llama 3.3 70B",
    provider: "Groq",
  },

  LLAMA_8B: {
    id: "llama-3.1-8b-instant",
    name: "Llama 3.1 8B",
    provider: "Groq",
  },

  GEMMA: {
    id: "gemma2-9b-it",
    name: "Gemma 2 9B",
    provider: "Groq",
  },

  MIXTRAL: {
  id: "llama-3.3-70b-versatile",
  name: "Llama 3.3 70B",
  provider: "Groq",
},

  DEEPSEEK: {
    id: "deepseek-r1-distill-llama-70b",
    name: "DeepSeek R1",
    provider: "Groq",
  },

  QWEN: {
    id: "qwen/qwen3-32b",
    name: "Qwen 3 32B",
    provider: "Groq",
  },

  KIMI: {
    id: "moonshotai/kimi-k2-instruct",
    name: "Kimi K2",
    provider: "Groq",
  },
};

const DEFAULT_MODEL = AI_MODELS.GPT5;

const MODEL_LIST = Object.values(AI_MODELS);

export {
  AI_MODELS,
  DEFAULT_MODEL,
  MODEL_LIST,
};