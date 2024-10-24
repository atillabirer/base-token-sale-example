import { ethers } from "hardhat";
import {createInterface} from "readline/promises";
const hre = require('hardhat');
(async function() {
    const rl = createInterface({ input: process.stdin, output: process.stdout});

    const name = await rl.question("Name of token?");
    const symbol = await rl.question("Symbol of token?");
    const decimals = await rl.question("Decimals of token?");
    //get signer
    const [owner] = await hre.ethers.getSigners();
    console.log("Owner:", owner.address);

    //fetches best gas price for Base Mainnet
    const apiResponse = await fetch("https://gas.api.infura.io/v3/a801e7fc09604a21b16e44770313792b/networks/8453/suggestedGasFees");
    const jsonParsed = await apiResponse.json();
    console.log(jsonParsed);

    // deploy contract
    const Contract = await hre.ethers.getContractFactory("Contract")

    const contract = await Contract.deploy(name,symbol,decimals,{
        maxFeePerGas: ethers.parseUnits( jsonParsed.high.suggestedMaxFeePerGas,"gwei").toString(),
        maxPriorityFeePerGas: ethers.parseUnits(jsonParsed.high.suggestedMaxPriorityFeePerGas,"gwei").toString(),


    });
    console.log(contract.address);



})().then((value) => console.log(value)).catch((error) => console.error(error));