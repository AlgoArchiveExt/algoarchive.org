import { NextRequest, NextResponse } from "next/server";
import { Pinecone, Index, RecordMetadata } from "@pinecone-database/pinecone";
import { cookies } from "next/headers";

async function queryPinecone(index: Index<RecordMetadata>, messageEmbedding: any, sessionId?: string) {
  if (sessionId) {
    return index.namespace(sessionId).query({
      topK: 1,
      vector: messageEmbedding.data[0].values || [],
      includeMetadata: true
    });
  } else {
    return index.query({
      topK: 1,
      vector: messageEmbedding.data[0].values || [],
      includeMetadata: true,
    });
  }
}


// This endpoint queries pinecone for data related to a message, providing context to LLM models.
export async function POST(req: NextRequest) {
  const pc = new Pinecone({
    apiKey: process.env.PINECONE_API_KEY || ""
  });
  const index = pc.index('hs-chatbot-project3');

  const cookieStore = cookies();
  const sessionId = cookieStore.get('sessionId')?.value;
  
  const data = await req.json();
  const model = 'multilingual-e5-large';
  const message = data.message;

  // Try generating an embedding and inserting it into the hs-chatbot-project3 index
  try {
    if (!message) {
      throw new Error("Text was not provided. Provide an array of text for the model to query for.")
    }

    const messageEmbedding = await pc.inference.embed(model, [message], { inputType: 'passage', truncate: 'END' });

    // Get context from Pinecone.
    const queryResponse = await queryPinecone(index, messageEmbedding, sessionId);

    const context = queryResponse.matches[0].metadata?.content;

    return new NextResponse(context?.toString() || "");
  } catch (error) {
    const response = 'Error retrieving context: ' + error

    console.error(response);
    return new NextResponse("");
  }
}