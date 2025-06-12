# 🦉 The Superb Owl Club NFT — Quick-start

This repo holds everything you need to develop, test, and deploy the Superb Owl Club ERC-721 contract:

contracts/ – smart contract (TheSuperbOwlClubNFT.sol)

test/ – automated unit tests

scripts/ – deployment helpers

hardhat.config.js – Hardhat settings

Below are the most common Hardhat commands you’ll use while working on the project.

```shell
# list your local accounts
npx hardhat accounts

# compile the contract
npx hardhat compile

# wipe the cache & artifacts
npx hardhat clean

# run the test suite
npx hardhat test

# start a local blockchain
npx hardhat node

# deploy to the local node (uses scripts/deployTheSuperbOwlClubNFT.js)
node scripts/deployTheSuperbOwlClubNFT.js

# see all available tasks
npx hardhat help
```

Happy hacking 🦉









