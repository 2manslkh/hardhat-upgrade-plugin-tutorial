const { web3 } = require("hardhat");

async function main() {
  // web3 instance is already created by hardhat

  const PROXY_ADDRESS = "0xBC93b0ceA1Da41659c6fa0B51dBBC78700041c3c"; // Change PROXY_ADDRESS to address where your proxy is deployed
  const implementation = await hre.artifacts.readArtifact("LogicTwo");
  const implementationABI = implementation.abi;
  const proxy = new web3.eth.Contract(implementationABI, PROXY_ADDRESS);
  const value = await proxy.methods.getLogicNumber().call();
  console.log(value);
}

main();
