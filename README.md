# Hardhat Upgrades Plugin Tutorial

This plugin will help to deploy, upgrade and manage proxy contracts and their implementations.

The plugin currently deploys [TransparentUpgradeableProxy](https://docs.openzeppelin.com/contracts/3.x/api/proxy#TransparentUpgradeableProxy) by OpenZeppelin

Example on BSC Testnet:

TransparentUpgradeableProxy: [https://testnet.bscscan.com/address/0x80D901C1881F4B9d4235b737e43d069703eF3568]
Implementation: [https://testnet.bscscan.com/address/0xa68018d0843d2b2d65131d300fbb9a6b6e777b95]


## Proxy Pattern

[https://docs.openzeppelin.com/upgrades-plugins/1.x/proxies]

## Installation

```cmd
npm install
```

## Testing on Localhost

Step 1: Compile the Logic Contracts (LogicOne.sol, LogicTwo.sol)

`npx hardhat compile`

Step 2: Start Local Node

`npx hardhat node`

Step 3: Deploy Proxy Contract to Local Node

`npx hardhat run ./scripts/create-proxy.js --network localhost`

Step 4: Call Proxy using web3.js

Modify `PROXY_ADDRESS` in `create-proxy.js` to the address of your deployed proxy contract

`npx hardhat run ./scripts/call-proxy-web3.js --network localhost` Should Return 1

Step 5: Upgrade Proxy Contract

Modify `PROXY_ADDRESS` in `create-proxy.js` to the address of your deployed proxy contract

`npx hardhat run ./scripts/create-proxy.js --network localhost`

Step 6: Call Proxy again using web3.js

`npx hardhat run ./scripts/call-proxy-web3.js --network localhost` Should Return 2

### Deploying to Testnet (BSC)

Make sure you have some BNB in your metamask wallet.

Key in your mnemonic phrase in `secrets.json.example` and rename the file to `secrets.json`

```cmd
npx hardhat run ./scripts/create-proxy.js --network testnet
```

## Upgrading Contracts

Modify `PROXY_ADDRESS` in `create-proxy.js` to the address of your deployed proxy contract

```cmd
npx hardhat run ./scripts/upgrade-proxy.js --network localhost
```

## .openzeppelin cache

This folder stores information about the proxy and implementation contracts

Admin Address of Proxy contract: `admin.address`
Proxy Addresses `proxies.[index].address`
Implmentation Addresses `impls.[index].address`
