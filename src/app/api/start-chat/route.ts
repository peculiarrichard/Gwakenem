import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(request: NextRequest) {
  const { message } = await request.json();

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: "Hello, I need therapy" }],
        },
        {
          role: "model",
          parts: [
            { text: "Great to meet you. I would be your AI therapist today" },
          ],
        },
      ],
      generationConfig: {
        maxOutputTokens: 500,
      },
    });
    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = response.text();
    return NextResponse.json(
      { message: "chat started succesfully", text },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
