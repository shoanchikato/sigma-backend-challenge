const { MongoClient } = require("mongodb");

async function dbFactory() {
  // // Connection URL
  const url = "mongodb://localhost:27017";
  const client = new MongoClient(url);

  // Database Name
  const dbName = "sigma-challenge";

  try {
    // Use connect method to connect to the server
    await client.connect();
    console.log("Connected to the database successfully..");
    const db = await client.db(dbName);

    return db;

  } catch (err) {
    console.error("Error connecting to mongodb:\n", err);
  }
}

module.exports = dbFactory;
