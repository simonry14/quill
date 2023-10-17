import { ChromaClient } from "chromadb";
const client = new ChromaClient();

const { OpenAIEmbeddingFunction } = require("chromadb");
const embedder = new OpenAIEmbeddingFunction({
  openai_api_key: process.env.OPENAI_API_KEY,
});

export const chroma_collection = await client.getOrCreateCollection({
  name: "uglawyer-chroma-dbbbbb",
  embeddingFunction: embedder,
});

//import chromadb
//chroma_client = chromadb.HttpClient(host='localhost', port=8000)