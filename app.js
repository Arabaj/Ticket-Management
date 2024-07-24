const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/api");

const app = express();

app.use(express.json());

mongoose.connect(
  "mongodb+srv://inamdararabaj:Arabaj@cluster0.xyrrnoh.mongodb.net/Ticketmgmt"
  
);

const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});
database.once("connected", () => {
  console.log("Connected to database");
});
app.use("/api", router);

app.listen(5000, () => {
  console.log("http://localhost:5000");
});
