import { MongoClient } from "mongodb";
const CONNECTION_URL = `mongodb+srv://${process.env.MONGO_DB_ADMIN}:${process.env.MONGO_DB_PASSWORD}@pralma.fdnne.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`;

let cachedClient = null;
let cachedDatabase = null;
export async function connectMongoDB(dbName = process.env.MONGO_DB_DATABASE) {
  if (cachedClient && cachedDatabase) {
    return {
      client: cachedClient,
      database: cachedDatabase,
    };
  }

  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  const client = new MongoClient(CONNECTION_URL, options);

  try {
    await client.connect();
    console.log("Connected successfully to database");
    const db = client.db(dbName);
    cachedClient = client;
    cachedDatabase = db;
    return {
      client: cachedClient,
      database: cachedDatabase,
    };
  } catch (error) {
    console.log("Connection has failed");
  }
}
