const express = require("express");
const payc = require("payc").default;
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = 3001;
const ABI = require("./abi.json");

app.use(cors());
app.use(express.json());


app.get("/getNameAndBalance", async (req, res) => {



  return res.status(200).json({});
});



payc.start({
  apiKey: process.env.PAY_KEY,
}).then(() => {
  app.listen(port, () => {
    console.log(`Listening for API Calls`);
  });
});