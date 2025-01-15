# Base Mainnet Token Sale Example

Launch a meme token sale on Base Network with automatic Uniswap liquidity pool deployment. All the ETH in your wallet will be used to create a liquidity pool. Then you can trade your token on Uniswap.
## Instructions

1.  Clone this repo and open it in your favorite editor
2.  Replace "SEED PHRASE HERE" with your seed phrase (wallet must have Base ETH) in **hardhat.config.ts**,
3. Run these commands in the directory of the repo:
```shell
yarn install
yarn run hardhat run scripts/dynamicfee.ts --network base
```

You will be asked questions like name, symbol, initialSupply and then after some waiting you will be given a token address. You can search for your pair on uniswap page.
4. Profit!

**Donate: 0xB763F010126f95dFF6B76A0F5F4D5f85107C2E99**

Full tutorial on https://medium.com/@bireratilla/how-to-launch-a-meme-coin-on-uniswap-base-network-in-2-commands-62055e1cc7e4

## Features
- buy and sell fee (modify in the contract)
- automatic deployment to Uniswap base with all the ETH balance in your wallet
- marketing fee (goes to deployer)
