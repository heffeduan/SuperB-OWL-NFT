import { React } from "react";
import { Box, Button, Flex, Image, Link, Spacer, Text } from '@chakra-ui/react';
import TSOC from "./assets/social-media-icons/TSOCrev2.png";
const Locked = ({ accounts, setAccounts }) => {
	return (
		<Flex justify="center" align="center" height="94vh" paddingBottom="150px">
		<Box width="760px">
		  <div>
			<Text color="white" fontSize="75px" textShadow="0 5px #000000">
            <img src={TSOC} width="375px" height="255px" />
			</Text>
			<Text
			  
			  color="#32CD32"
			  fontSize="30px"
			  letterSpacing="-5.5%"
			  fontFamily= "inherit"
			  textShadow="0 2px 2px #000000"
			>
            SITE IS LOCKED.
			</Text>
		  </div>
		  </Box>
		</Flex>
	);

};
export default Locked;
