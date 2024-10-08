import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Heading,
  Stack,
  Link as ChakraLink
} from "@chakra-ui/react";

function Header() {
  return (
    <Box bg="black" color="white" height='50px'
    >
      <Flex px={12} py={10} align="center" justify="space-between" gap='20px'
      >
        <Heading as="h1" size="lg"  fontSize={15}>
          <ChakraLink
          color={"white"} as={Link} to="/">
            Ecommerce
          </ChakraLink>
        </Heading>
        <Stack direction="row" spacing={10}>
          <ChakraLink color={"white"} as={Link} to="/products">
            Products
          </ChakraLink>
          <ChakraLink color={"white"} as={Link} to="/blogs/1/">
            Blog
          </ChakraLink>
          <ChakraLink color={"white"} as={Link} to="/cart">
            Cart 
          </ChakraLink>
          <ChakraLink color={"white"} as={Link} to="/contact">
            Contact us
          </ChakraLink>
        </Stack>
      </Flex>
    </Box>
  );
}

export default Header;