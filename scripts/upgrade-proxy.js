const { ethers, upgrades } = require("hardhat");

async function main() {
  // Upgrades Proxy to use LogicTwo
  const PROXY_ADDRESS = "0xFFc6f702512c41F8dDF5Ca393135606026a34d7F"; // Change PROXY_ADDRESS to address where your proxy is deployed
  const LogicTwo = await ethers.getContractFactory("LogicTwo");
  const Proxy = await upgrades.upgradeProxy(PROXY_ADDRESS, LogicTwo);
  console.log("Proxy upgraded");
}

main();
