import { PineconeClient } from '@pinecone-database/pinecone'
import { Pinecone } from "@pinecone-database/pinecone";  

/*
const pinecone = new Pinecone();      
await pinecone.init({      
	environment: "gcp-starter",      
	apiKey: "********-****-****-****-************",      
});     */ 

/*
export const pinecone = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY!,
  environment: 'gcp-starter',
})*/


export const getPineconeClient = async () => {
  const client = new PineconeClient()

  await client.init({
    apiKey: process.env.PINECONE_API_KEY!,
    environment: 'gcp-starter',
  })

  return client
}
