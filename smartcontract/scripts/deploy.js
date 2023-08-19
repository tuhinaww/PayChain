const hre = require("hardhat");

async function main() {
  const Paychain = await hre.ethers.getContractFactory("Paychain");
  const paychain = await Paychain.deploy();
  await paychain.deployed();
  console.log("Paychain deployed to:", paychain.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
