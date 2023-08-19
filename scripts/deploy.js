const hre = require("hardhat");

async function main() {
  const lock = await hre.ethers.deployContract("PayChain");

  await paychain.waitForDeployment();

  console.log(
    `PayChain deployed to ${ethers.formatEther(
      lockedAmount
    )}ETH and unlock timestamp ${unlockTime} deployed to ${lock.target}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
