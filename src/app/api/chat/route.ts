import { NextRequest, NextResponse } from "next/server";
import OpenAI from 'openai';
import { cookies } from 'next/headers';

const systemPrompt = `
              You are a customer support bot for AlgoArchive, an open source project that helps people studying data structures 
              and algorithms to track their problem-solving journey and provide insights. 
              Your role is to assist users with any questions or issues they may have regarding the platform. 
              Be polite, concise, and helpful.
              Provide clear instructions and direct users to relevant resources when necessary. 
              If you are unable to resolve an issue, suggest contacting the support team for further assistance.`;

export async function POST(req: NextRequest) {
  const openai = new OpenAI();
  const cookieStore = cookies();

  let sessionId = cookieStore.get('sessionId')?.value;

  if (!sessionId) {
    sessionId = crypto.randomUUID();
    cookieStore.set({
      name: 'sessionId',
      value: sessionId,
      maxAge: 2592000,
    }); // 30 days
  }

  const data = await req.json();
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: 'system',
        content: systemPrompt,
      },
      ...data
    ],
    model: 'gpt-4o-mini',
    stream: true
  });

  const stream = new ReadableStream({
    async start(controller) {
      const encoder = new TextEncoder();

      try {
        for await (const chunk of completion) {
          const content = chunk.choices[0].delta.content;

          if (content) {
            const text = encoder.encode(content);
            controller.enqueue(text);
          }
        }
      } catch (err) {
        console.error('Error streaming response:', err);
        controller.error(err);
      } finally {
        controller.close();
      }
    }
  });

  return new NextResponse(stream);
}