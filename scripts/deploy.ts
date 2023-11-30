import { ethers } from "hardhat";

async function main() {
  const Counter = await ethers.getContractFactory("Counter");
  const gasLimit = 100_000_000;
  const counter = await Counter.deploy({ gasLimit });
  await counter.waitForDeployment();
  console.log("Counter deployed to:", counter);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
