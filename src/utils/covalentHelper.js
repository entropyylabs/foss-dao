const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

const contractAddress = process.env.CONTRACT_ADDRESS;

module.exports = async (app) => {
  const API_KEY = process.env.COVALENT_API_KEY;
  const chainId = 137;

  // Get all DAO NFTs
  app.getNFTTokenIdsForContract = async () => {
    const response = await axios.get(
      `https://api.covalenthq.com/v1/${chainId}/tokens/${contractAddress}/nft_token_ids/?&key=${API_KEY}`,
      {
        headers: {
          "content-type": "application/json",
        },
      }
    );
    console.log(response.data.data.items);
    return response.data;
  };

  // Get all transactions
  app.getNFTTransactionsForContract = async (tokenId) => {
    const response = await axios.get(
      `https://api.covalenthq.com/v1/${chainId}/tokens/${contractAddress}/nft_transactions/${tokenId}/?&key=${API_KEY}`,
      {
        headers: {
          "content-type": "application/json",
        },
      }
    );
    console.log(response.data.data.items);
    return response.data;
  };

  // Get additional DAO passes information
  app.getNFTExternalMetadataForContract = async (tokenId) => {
    const response = await axios.get(
      `https://api.covalenthq.com/v1/${chainId}/tokens/${contractAddress}/nft_metadata/${tokenId}/?&key=${API_KEY}`,
      {
        headers: {
          "content-type": "application/json",
        },
      }
    );
    console.log(response.data.data.items);
    return response.data;
  };

  // Get all DAO info
  app.getNFTMarketGlobalView = async (chain) => {
    const response = await axios.get(
      `https://api.covalenthq.com/v1/${chain}/nft_market/?&key=${API_KEY}`,
      {
        headers: {
          "content-type": "application/json",
        },
      }
    );
    console.log(response);
    return response.data;
  };
};
