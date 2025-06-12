const hre = require("hardhat");

async function main() {

  const TheSuperbOwlClubNFT = await hre.ethers.getContractFactory("TheSuperbOwlClubNFT");
  const thesuperbowlclubNFT = await TheSuperbOwlClubNFT.deploy();

  await thesuperbowlclubNFT.deployed();

  console.log("TheSuperbOwlClubNFT deployed to:", thesuperbowlclubNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
