import OpenAI from "openai";

// Create an OpenAI API client (that's edge friendly!)
const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

export async function generateJokeWithAI(parameters: {
  topic: string;
  tone: string;
  type: string;
  temperature: number;
}) {
  const prompt = `Generate a ${parameters.tone} ${parameters.type} joke about ${parameters.topic}. 
    The joke should be family-friendly and appropriate for all audiences.`;

  const completion = await openai.chat.completions.create({
    messages: [{ role: "user", content: prompt }],
    model: "gpt-4o-mini",
    temperature: parameters.temperature,
  });

  const joke = completion.choices[0]?.message?.content || "Could not generate joke";

  // Evaluate the joke
  const evaluationPrompt = `Evaluate the following joke and provide ratings from 0 to 100 for how funny, appropriate, and potentially offensive it is. Respond in JSON format only.

  Joke: "${joke}"`;

  const evaluation = await openai.chat.completions.create({
    messages: [{ role: "user", content: evaluationPrompt }],
    model: "gpt-4o-mini",
    temperature: 0.3,
    response_format: { type: "json_object" },
  });

  const evaluationResult = JSON.parse(evaluation.choices[0]?.message?.content || "{}");

  return {
    joke,
    evaluation: {
      funny: evaluationResult.funny || 0,
      appropriate: evaluationResult.appropriate || 100,
      offensive: evaluationResult.offensive || 0,
    },
    parameters,
  };
}