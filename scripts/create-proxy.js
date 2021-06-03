const { ethers, upgrades } = require("hardhat");

async function main() {
  // Deploy LogicOne Implementation and assign its address to a Proxy Contract
  const LogicOne = await ethers.getContractFactory("LogicOne");
  const Proxy = await upgrades.deployProxy(LogicOne);
  await Proxy.deployed();
  console.log("Proxy deployed to:", Proxy.address);

  // Get Implementation Address
  const implHex = await ethers.provider.getStorageAt(
    Proxy.address,
    "0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc"
  );
  const implAddress = ethers.utils.hexStripZeros(implHex);
  console.log("Proxy Implementation deployed to:", implAddress);
}

main();
