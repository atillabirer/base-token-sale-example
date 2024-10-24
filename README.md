# Base Mainnet Token Sale Example

This script deploys a token on Base Mainnet, deploys an Uniswap V2 liquidity pool with all the ETH balance in your wallet, and then returns the token address in the terminal. It uses Infura gas API to fetch the best fees to prevent transaction from being dropped.

## Instructions

1. Replace "SEED PHRASE HERE" with your seed phrase (wallet must have Base ETH) in **hardhat.config.ts**,
2. Run these commands:
```shell
yarn install
yarn run hardhat run scripts/dynamicfee.ts --network base
```

You will be asked questions like name, symbol, initialSupply and then after some waiting you will be given a token address. You can search for your pair on uniswap page.

If this script helped you don't hesitate to donate to 0xB763F010126f95dFF6B76A0F5F4D5f85107C2E99

## Features
- buy and sell fee (modify in the contract)
- automatic deployment to Uniswap base with all the ETH balance in your wallet
- marketing fee (goes to deployer)
