const { MongoClient } = require("mongodb");
const MONGODB_URL = "mongodb://localhost:27017";
const MONGODB_NAME = "MYDATABASE";
const client = new MongoClient(MONGODB_URL);
module.exports = {
  db: null,
  async connect() {
    //connection to Database
    client.connect();
    console.log("connected to mongo:", MONGODB_URL);
    //selectiing the  database
    this.db = client.db(MONGODB_NAME);
    console.log("selected database:", MONGODB_NAME);
  },
};
