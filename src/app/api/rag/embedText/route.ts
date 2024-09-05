import { NextRequest, NextResponse } from "next/server";
import { Pinecone } from "@pinecone-database/pinecone";
import { cookies } from "next/headers";

// This endpoint tries to generate an embedding given an array of texts and inserts it into the hs-zchatbot-project3 vector database on Pinecone
export async function POST(req: NextRequest) {
  const pc = new Pinecone({
    apiKey: process.env.PINECONE_API_KEY || ""
  });
  const index = pc.index('hs-chatbot-project3');
  const cookieStore = cookies();
  const sessionId = cookieStore.get('sessionId')?.value;

  const data = await req.json();
  const model = 'multilingual-e5-large';

  const text = data.text;

  // Try generating an embedding and inserting it into the hs-chatbot-project3 index
  try {
    if (!text) {
      throw new Error("Text was not provided. Provide an array of text for the model to embed.")
    }

    // Create embedding values through Pinecone
    const response = await pc.inference.embed(
      model,
      text,
      { inputType: 'passage', truncate: 'END' }
    );

    // Get an array of embeddings, which are embedding values to their ids.
    const embeddings = response.data.map((embedding) => {
      return {
        id: `${crypto.randomUUID()}`,
        values: embedding.values || [],
        metadata: { content: text },
      }
    });

    // Upsert embeddings
    if (sessionId) await index.namespace(sessionId).upsert(embeddings);
    else await index.upsert(embeddings);

    return new NextResponse(response.toString());
  } catch (error) {
    const response = 'Error generating embeddings: ' + error

    console.error(response);
    return new NextResponse(response);
  }
}