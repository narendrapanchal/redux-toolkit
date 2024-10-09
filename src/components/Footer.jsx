import { Link } from "react-router-dom";
import { Box, ListItem, UnorderedList, Link as ChakraLink } from '@chakra-ui/react'
import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const Footer = () => {
	return (
		<Box backgroundColor="black" padding="50px 0" color="fff" position="relative" >
			<Box display="flex" alignItems="center" flexDirection="column" width="100%" maxWidth="1200px"
				margin="0 auto" padding="0 20px"
				justifyContent="center"className="container"
			>
				<UnorderedList marginBottom="30px" gap="30px" listStyleType="none" display="flex" alignItems="center" justifyContent="center">
					<ListItem cursor="pointer" fontSize="16px" color="white">Terms of Use</ListItem>
					<ListItem cursor="pointer" fontSize="16px" color="white">Privacy-Policy</ListItem>
					<ListItem cursor="pointer" fontSize="16px" color="white">About</ListItem>
					<ListItem cursor="pointer" fontSize="16px" color="white">
						<ChakraLink color={"white"} as={Link} to="/blogs">
							Blog
						</ChakraLink>
					</ListItem>
					<ListItem cursor="pointer" fontSize="16px" color="white">
						<ChakraLink color={"white"} as={Link} to="/contact">
							Contact us
						</ChakraLink>
					</ListItem>
				</UnorderedList>
				<Box color="grey" >
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
				</Box>
				<Box display="flex" gap="20px" marginTop="20px" color="white"
					fontSize={20}
				>
					<FaFacebook />
					<FaInstagramSquare />
					<FaGithub />
					<FaLinkedin />
				</Box>
			</Box>
		</Box>
	)
}
