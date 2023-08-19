require("@nomicfoundation/hardhat-waffle");
require("@nomicfoundation/hardhat-etherscan");
const dotenv = require("dotenv");

dotenv.config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    mumbai: {
      url: process.env.POLYGON_MUMBAI,
      accounts: [process.env.PRIVATE_KEY],
    }
  },
  etherscan: {
    apiKey: process.env.API_KEY,
  }

};
