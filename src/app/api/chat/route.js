import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Ensure this is set in .env.local
});

export async function POST(req) {
  try {
    const { message } = await req.json();
    if (!message) {
      return Response.json({ message: "Message is required" }, { status: 400 });
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // Ensure you're using a valid model
      messages: [{ role: "user", content: message }],
    });

    return Response.json({ reply: completion.choices[0].message.content });
  } catch (error) {
    console.error("OpenAI API Error:", error);
    return Response.json({ message: "Error connecting to OpenAI" }, { status: 500 });
  }
}
