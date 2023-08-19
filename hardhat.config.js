require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
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
