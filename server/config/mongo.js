const { MongoClient } = require("mongodb");
const { seedData } = require("../helpers/seed");

const uri = `mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.0`;

const client = new MongoClient(uri);
let db = null;

async function mongoConnect() {
  try {
    db = client.db("universaleco");
    const collections = await db.listCollections().toArray();
    const collectionsNames = collections.map((el) => el.name);
    const customerColletion = collectionsNames.find((el) => el === "customers");
    if (!customerColletion) {
      db.createCollection("customers");
      db.collection("customers").bulkWrite(seedData);
    }
    return db;
  } catch (err) {
    console.log(err);
  }
}

function getDB() {
  return db;
}

module.exports = { mongoConnect, getDB };
