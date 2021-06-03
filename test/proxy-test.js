const { expect } = require("chai");

describe("Proxy", function () {
  let proxyContract;

  describe("Proxy Deploy", function () {
    it("Expect Proxy implementing LogicOne to return 1", async () => {
      // Deploy LogicOne Implementation and assign its address to a Proxy Contract
      const LogicOne = await ethers.getContractFactory("LogicOne");
      proxyContract = await upgrades.deployProxy(LogicOne);
      await proxyContract.deployed();
      // console.log("Proxy deployed to:", Proxy.address);

      const value = await proxyContract.getLogicNumber();
      expect(value.toString()).to.equal("1");
    });
  });
  describe("Proxy Upgrade", function () {
    it("Expect Proxy implementing LogicTwo to return 2", async () => {
      // Upgrades Proxy to use LogicTwo
      const PROXY_ADDRESS = proxyContract.address;
      const LogicTwo = await ethers.getContractFactory("LogicTwo");
      proxyContract = await upgrades.upgradeProxy(PROXY_ADDRESS, LogicTwo);
      // console.log("Proxy upgraded");

      const value = await proxyContract.getLogicNumber();
      expect(value.toString()).to.equal("2");
    });
  });
});
