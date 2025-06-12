import React from 'react';
import { useState } from "react";
import { ethers, BigNumber } from "ethers";
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import thesuperbowlClubNFT from "./TheSuperbOwlClubNFT.json";
import "./MainMint.css";
import TSOC from "./assets/social-media-icons/TSOCrev2.png";

const thesuperbowlClubNFTAddress = "0xa2A1EB81522659fBD7b89d7A918B7385f8d55f9f";

const MainMint = ({ accounts, setAccounts }) => {
  const [mintAmount, setMintAmount] = useState(1);
  const isConnected = Boolean(accounts[0]);
  const [showRookie,setShowRookie] = useState(false)
  // const [showVeteran,setShowVeteran] = useState(false)
  // const [showAllPro,setShowAllPro] = useState(false)
  const [showError,setShowError] = useState(false)
  const [mintNum, setmintNum] = useState(1);

  async function rookieMint() {
    if (window.ethereum)
    {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        thesuperbowlClubNFTAddress,
        thesuperbowlClubNFT.abi,
        signer
      );
      try {
        const response = await contract.rMint(BigNumber.from(mintAmount), {value: ethers.utils.parseEther(((0.05 * mintAmount).toFixed(2)).toString()),
        });
        console.log("response: ", response);
        setmintNum(mintAmount);
        setShowRookie(true)
        // setShowVeteran(false)
        // setShowAllPro(false)
        setShowError(false)
      } catch (err) {
        console.log("error: ", err);
        setShowError(true)
        // setShowVeteran(false)
        // setShowAllPro(false)
        setShowRookie(false)
      }
    }
  }

  // async function veteranMint() {
  //   if (window.ethereum) {
  //     const provider = new ethers.providers.Web3Provider(window.ethereum);
  //     const signer = provider.getSigner();
  //     const contract = new ethers.Contract(
  //       thesuperbowlClubNFTAddress,
  //       thesuperbowlClubNFT.abi,
  //       signer
  //     );
  //     try {
  //       const response = await contract.vMint(BigNumber.from(mintAmount), {value: ethers.utils.parseEther(((0.002 * mintAmount).toFixed(3)).toString()),
  //       });
  //       console.log("response: ", response);
  //       setmintNum(mintAmount);
  //       setShowVeteran(true)
  //       setShowRookie(false)
  //       setShowAllPro(false)
  //       setShowError(false)
  //     } catch (err) {
  //       console.log("error: ", err);
  //       setShowError(true)
  //       setShowVeteran(false)
  //       setShowAllPro(false)
  //       setShowRookie(false)
  //     }
  //   }
  // }

  // async function allProMint() {
  //   if (window.ethereum) {
  //     const provider = new ethers.providers.Web3Provider(window.ethereum);
  //     const signer = provider.getSigner();
  //     const contract = new ethers.Contract(
  //       thesuperbowlClubNFTAddress,
  //       thesuperbowlClubNFT.abi,
  //       signer
  //     );
  //     try {
  //       const response = await contract.apMint(BigNumber.from(mintAmount), {value: ethers.utils.parseEther(((0.003 * mintAmount).toFixed(3)).toString()),
  //       });
  //       console.log("response: ", response);
  //       setmintNum(mintAmount);
  //       setShowAllPro(true)
  //       setShowVeteran(false)
  //       setShowRookie(false)
  //       setShowError(false)
  //     } catch (err) {
  //       console.log("error: ", err);
  //       setShowError(true)
  //       setShowVeteran(false)
  //       setShowAllPro(false)
  //       setShowRookie(false)
  //     }
  //   }
  // }

  const handleDecrement = () => {
    if (mintAmount <= 1) return;
    setMintAmount(mintAmount - 1);
  };

  const handleIncrement = () => {
    //if (mintAmount >= 3) return;
    setMintAmount(mintAmount + 1);
  };

  const handleChange = event => {
    setMintAmount(event.target.value);
  };

  return (
    <Flex justify="center" align="center" height="90%" paddingBottom="125px">
      <Box width="75%">
        <div>
          <img src={TSOC} width="375px" height="255px"/>
          {/*<Text color="white" fontSize="75px" textShadow="0 5px #000000">
            THE SUPERB OWL CLUB
          </Text>
          */}
          <Text
            color="#32CD32"
            fontSize="30px"
            letterSpacing="-5.5%"
            fontFamily="inherit"
            textShadow="0 2px 2px #000000"
          >
            #JOINTHECLUB
          </Text>
        </div>

        {isConnected ? (
          <div>
            <Flex justify="center" align="center">
              <Button
                backgroundColor="#32CD32"
                borderRadius="5px"
                boxShadow="0px 2px 2px 1px #0F0F0F"
                color="white"
                cursor="pointer"
                fontFamily="inherit"
                padding="10px"
                margin="10"
                onClick={handleDecrement}
              >
                {" "}
                -
              </Button>

              <Input
                readOnly
                boxShadow="0px 2px 2px 1px #0F0F0F"
                borderRadius="5px"
                fontFamily="inherit"
                width="100px"
                height="40px"
                textAlign="center"
                paddingLeft="19px"
                type="number"
                value={mintAmount}
              />

              <Button
                backgroundColor="#32CD32"
                borderRadius="5px"
                boxShadow="0px 2px 2px 1px #0F0F0F"
                color="white"
                cursor="pointer"
                fontFamily="inherit"
                padding="10px"
                margin="10"
                onClick={handleIncrement}
              >
                {" "}
                +
              </Button>
            </Flex>

            <Button
              backgroundColor="#32CD32"
              borderRadius="5px"
              boxShadow="0px 2px 2px 1px #0F0F0F"
              color="white"
              cursor="pointer"
              fontFamily="inherit"
              padding="10px"
              margin="10"
              onClick={rookieMint}
            >
              Mint: 0.05 ETH
            </Button>
            {/* <Button
              backgroundColor="#32CD32"
              borderRadius="5px"
              boxShadow="0px 2px 2px 1px #0F0F0F"
              color="white"
              cursor="pointer"
              fontFamily="inherit"
              padding="15px"
              margin="10"
              onClick={veteranMint}
            >
              Mint Veteran: 0.25 ETH
            </Button> */}
            {/* <Button
              backgroundColor="#32CD32"
              borderRadius="5px"
              boxShadow="0px 2px 2px 1px #0F0F0F"
              color="white"
              cursor="pointer"
              fontFamily="inherit"
              padding="15px"
              margin="10"
              onClick={allProMint}
            >
              Mint All-Pro: 1.00 ETH
            </Button> */}
            {showRookie &&<Text
            padding="5px"
            fontSize="20px"
            letterSpacing="5.5%"
            fontFamily="inherit"
            textShadow="0 3px #000000"
            color="#32CD32"
          >Successfully Minted {mintNum} Superb Owls</Text>}
          {/* {showVeteran &&<Text
            fontSize="20px"
            letterSpacing="5.5%"
            fontFamily="inherit"
            textShadow="0 3px #000000"
            color="#32CD32"
          >Successfully Minted {mintNum} Veteran</Text>} */}
          {/* {showAllPro &&<Text
            fontSize="20px"
            letterSpacing="5.5%"
            fontFamily="inherit"
            textShadow="0 3px #000000"
            color="#32CD32"
          >Successfully Minted {mintNum} All-Pro</Text>} */}
          {showError &&<Text
            fontSize="20px"
            letterSpacing="5.5%"
            fontFamily="inherit"
            textShadow="0 3px #000000"
            color="#32CD32"
          >Mint Unsuccessful</Text>}
          </div>
        ) : (
          <Text

            fontSize="30px"
            letterSpacing="5.5%"
            fontFamily="inherit"
            textShadow="0 3px #000000"
            color="#32CD32"
          >
            CONNECT YOUR WALLET TO MINT.
          </Text>
        )}
      </Box>
    </Flex>
  );
};

export default MainMint;
