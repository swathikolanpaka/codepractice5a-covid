const express = require("express");
const path = require("path");
const sqlite = require("sqlite3");
const { open } = require("sqlite");
const app = express();
app.use(express.json());
const dbPath = path.join(__dirname, "covid19India.db");
let db = null;

//Initialize Db and server
const initializeDbAndServer = async () => {
  try {
    db = open({
      filename: dbPath,
      driver: sqlite.Database,
    });
    app.listen(3000, () => {
      console.log("server is running");
    });
  } catch (e) {
    console.log(`Db Error:${e.message}`);
    process.exit(1);
  }
};
initializeDbAndServer();
