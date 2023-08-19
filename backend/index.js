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

 const { userAddress } = req.query;

 const response = await payc.EvmApi.utils.runContractFunction({
    chain: "0x13881",
    address: "0xFB7C1A4a51Fc414c37fD1042653486fd34B9917A",
    abi: ABI,
    functionName: "getMyName",
    params: { _user: userAddress },

 });

  return res.status(200).json({});
});



payc.start({
  apiKey: process.env.PAY_KEY,
}).then(() => {
  app.listen(port, () => {
    console.log(`Listening for API Calls`);
  });
});