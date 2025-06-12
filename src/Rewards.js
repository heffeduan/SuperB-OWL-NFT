// Installation: https://github.com/alchemyplatform/alchemy-web3
import { ethers, BigNumber } from "ethers";
//import { createAlchemyWeb3 } from "@alch/alchemy-web3";
import { Box, Button, Flex, Image, Link, Spacer, Text } from '@chakra-ui/react';
import thesuperbowlClubNFT from "./TheSuperbOwlClubNFT.json";


const thesuperbowlClubNFTAddress = "0x80e4693948372e77Bfc12276d72a337C068e37db";
const addressPayout = ["0xf29f8b8e2ed3B9d18e99d4d2c874C803D0aCAA52", "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266", "0x70997970C51812dc3A010C7d01b50e0d17dc79C8"];

// Using HTTPS
//const web3 = createAlchemyWeb3(
 // "https://eth-mainnet.alchemyapi.io/nft/v2/demo",
/*
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "-----",
  user: "----",
  password: "-----"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
*/

const Rewards = ({ accounts, setAccounts }) => {
	const isConnected = Boolean(accounts[0]);

	async function getRewards()
	{
		// This below code gives us the ability to get the user's account. 
		/*if(window.ethereum) {
			const accounts = await window.ethereum.request
			({
				method: "eth_requestAccounts",
			});
			console.log(accounts[0]);
		}*/
		// This code below is a payout array to pay multiple users. 
		if (window.ethereum) 
		{
			const provider = new ethers.providers.Web3Provider(window.ethereum);
			const signer = provider.getSigner();
			const contract = new ethers.Contract
			(
				thesuperbowlClubNFTAddress,
				thesuperbowlClubNFT.abi,
				signer
			);
			console.log(accounts[0]);
		}
	}

	return (
		<Flex justify="center" align="center" height="94vh" paddingBottom="150px">
		<Box width="760px">
		  <div>
			<Text color="white" fontSize="75px" textShadow="0 5px #000000">
			  THE SUPERB OWL CLUB
			</Text>
			<Text
			  
			  color="#32CD32"
			  fontSize="30px"
			  letterSpacing="-5.5%"
			  fontFamily= "inherit"
			  textShadow="0 2px 2px #000000"
			>
			  #JOINTHECLUB
			</Text>
		  </div>
		  
			{isConnected ? (
				<Flex justify="center" align="center">
				<Button
				  id = "get-rewards"
				  backgroundColor="#32CD32"
				  borderRadius="5px"
				  boxShadow="0px 2px 2px 1px #0F0F0F"
				  color="white"
				  cursor="pointer"
				  fontFamily="inherit"
				  padding="15px"
				  margin="10"
				  onClick={getRewards}
				>
				  {" "}
				  Get Payout
				</Button>
				
				</Flex>
			) : (
				<Text
				  marginTop="70px"
				  fontSize="30px"
				  letterSpacing="5.5%"
				  fontFamily="inherit"
				  textShadow="0 3px #000000"
				  color="rgb(85, 26, 139)"
				>
				  Connect your wallet to see rewards.
				</Text>
			  )}
		  </Box>
		</Flex>
	);

};
export default Rewards;