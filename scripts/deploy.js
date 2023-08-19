const hre = require("hardhat");

async function main() {
  const lock = await hre.ethers.deployContract("Paychain");

  await Paychain.waitForDeployment();

  console.log(
    `Paychain deployed to ${ethers.formatEther(
      lockedAmount
    )}ETH and unlock timestamp ${unlockTime} deployed to ${lock.target}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
