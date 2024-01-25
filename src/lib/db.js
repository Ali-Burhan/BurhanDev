// Example: lib/db.js
import { MongoClient } from 'mongodb';

const uri = process.env.MONGO_URI; // Replace with your MongoDB Atlas connection string
const dbName = 'burhandev'; // Replace with your database name

let cachedClient = null;

export async function connectToMongoDB() {
  if (cachedClient && cachedClient.isConnected()) {
    return cachedClient;
  }

  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log('Connected to MongoDB Atlas');
    cachedClient = client;
    return client.db(dbName);
  } catch (error) {
    console.error('Error connecting to MongoDB Atlas:', error);
    throw error;
  }
}
