const { ethers, upgrades } = require("hardhat");

async function main() {
  // Upgrades Proxy to use LogicTwo
  const PROXY_ADDRESS = "0xBC93b0ceA1Da41659c6fa0B51dBBC78700041c3c"; // Change PROXY_ADDRESS to address where your proxy is deployed
  const LogicTwo = await ethers.getContractFactory("LogicTwo");
  const Proxy = await upgrades.upgradeProxy(PROXY_ADDRESS, LogicTwo);
  console.log("Proxy upgraded");
}

main();
