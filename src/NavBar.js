import React from 'react';
import { Box, Button, Flex, Image, Link, Spacer } from '@chakra-ui/react';
import Discord from "./assets/social-media-icons/discord_32x32.png";
import Twitter from "./assets/social-media-icons/twitter_32x322.png";
import './NavBar.css';

const NavBar = ({ accounts, setAccounts }) => {
   const isConnected = Boolean(accounts[0]);

   window.onload = async function pageReload() {
        const accounts = await window.ethereum.request({method: 'eth_accounts'})
        setAccounts(accounts);
   }

   async function connectAccount() {
       if(window.ethereum) {
           const accounts = await window.ethereum.request({
               method: "eth_requestAccounts",
           });
           setAccounts(accounts);
       }
   }

   return (

        <Flex justify="space-evenly" align="center" padding="30px">
        {/* Left Side - Social Media Icons */}
            <Flex justify="space-between" padding="0 2%">
                <Link href="http://chat.superbowlsclub.com">
                    <Image src={Discord} boxSize="42px" margin="0 15px" />
                </Link>
            </Flex>
            <Flex justify="space-between" padding="0 2%">
                <Link href="https://twitter.com/SuperbOwlsClub">
                    <Image src={Twitter} boxSize="42px" margin="0 15px" />
                </Link>
            </Flex>

            {/* Right Side - Sections and Connect 
            <div className="container">
                <div className="nav-toggle" id="navToggle">
                    <img id="navClosed" className="navIcon" src="https://www.richardmiddleton.me/wp-content/themes/richardcodes/assets/img/hamburger.svg" alt="hamburger menu"/>
                    <img id="navOpen" class="navIcon hidden" src="https://www.richardmiddleton.me/wp-content/themes/richardcodes/assets/img/close.svg" alt="close hamburger"/>
                </div>
                <nav>
                    <ul>
                        <li><a href="/About" style={{ textDecoration: 'none' }}>About</a></li>
                        <li><a href="/Rewards" style={{ textDecoration: 'none' }}>Rewards</a></li>
                        <li><a href="/Mint" style={{ textDecoration: 'none' }}>Mint</a></li>
                    </ul>
                </nav>
            </div>
            */}
            {/*<Flex justify="space-between" align="center" width="60%" padding="0 5%">
                <Box fontSize="30px" margin="0 15px"><a href="/About" style={{ textDecoration: 'none' }}>ABOUT</a></Box>
                <Spa cer />
                <Box fontSize="30px" margin="0 15px"><a href="/Rewards" style={{ textDecoration: 'none' }}>REWARDS</a></Box>
                <Spacer />
                <Box fontSize="30px" margin="0 15px"><a href="/Mint" style={{ textDecoration: 'none' }}>MINT</a></Box>
                <Spacer />
            */}
            {/* Connect Button */}
            {isConnected ? (
                <Button
                fontFamily="inherit"
                backgroundColor="#32CD32"
                borderRadius="5px"
                boxShadow="0px 2px 2px 1px #0f0f0f"
                color= "rgb(255, 255, 255)"
                padding="20px"
                margin="0 15px"

                >CONNECTED

                </Button>
            ) : (
                <Button
                    backgroundColor="#32CD32"
                    borderRadius="5px"
                    boxShadow="0px 2px 2px 1px #0f0f0f"
                    color="#ffffff"
                    cursor="pointer"
                    fontFamily="inherit"
                    padding="20px"
                    margin="0 15px"
                    onClick={connectAccount}
                >
                    CONNECT
                </Button>
            )}
            </Flex>
        /*</Flex>*/
    )

};
export default NavBar;
