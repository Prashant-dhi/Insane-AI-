export async function generateAIImage(prompt) {
  if (!prompt.trim()) {
    throw new Error("Please enter an image prompt.");
  }

  const seed = Date.now();

  return `https://image.pollinations.ai/prompt/${encodeURIComponent(
    prompt
  )}?model=flux&width=1024&height=1024&seed=${seed}&enhance=true&nologo=true`;
}