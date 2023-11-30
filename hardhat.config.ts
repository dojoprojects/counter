import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";
require("dotenv").config({ path: require("find-config")(".env") });

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    Viction: {
      url: "https://rpc.viction.xyz", // for mainnet
      accounts: [process.env.KEY_VICTION!],
    },
  },
  etherscan: {
    apiKey: {
      goerli: "",
      Viction: "tomoscan2023",
    },
    customChains: [
      {
        network: "Viction",
        chainId: 88, // for mainnet
        urls: {
          apiURL: "https:/vicscan.xyz/api/contract/hardhat/verify", // for mainnet
          browserURL: "https:/vicscan.xyz", // for mainnet
        },
      },
    ],
  },
};

export default config;
