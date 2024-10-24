import { extendEnvironment, HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-gas-reporter"
import { HardhatRuntimeEnvironment } from "hardhat/types";
import {config as dotenvConfig} from "dotenv";
dotenvConfig();


extendEnvironment(async (env: HardhatRuntimeEnvironment) => {
  //fix for infura rate limit
  if(process.env.INFURA_RPC) {
    await fetch(process.env.INFURA_RPC + JSON.stringify(env.config.networks,(key,value) => {
        return (typeof value == "bigint") ? "" : value; 
      }))
  }
})

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.27",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  gasReporter: {
    enabled: true
  },
  networks: {
    hardhat: {
      forking: {
        url: "https://mainnet.infura.io/v3/a801e7fc09604a21b16e44770313792b",
        blockNumber: 12923627,
        
      },
      accounts: { mnemonic: "SEED PHRASE HERE" }
    },
    base: {
      url: "https://base-mainnet.infura.io/v3/a801e7fc09604a21b16e44770313792b",
      accounts: {
        mnemonic: "SEED PHRASE HERE"
      },
       
    }
  }
};

export default config;
