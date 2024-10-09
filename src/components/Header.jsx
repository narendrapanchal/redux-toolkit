import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Heading,
  Stack,
  Link as ChakraLink,
  Button,
  Select,
} from "@chakra-ui/react";
import { FiLogIn, FiShoppingCart, FiGrid, FiFileText } from "react-icons/fi"; 

function Header() {
  return (
    <Box bg="black" color="white" height="50px" boxShadow="md">
      <Flex py={4} align="center" justify="space-between" className="container">
        <Heading as="h1" size="lg" fontSize={20}>
          <ChakraLink color="white" as={Link} to="/">
            Ecommerce
          </ChakraLink>
        </Heading>
        <Stack direction="row" spacing={13} align="center">
          <ChakraLink
            color="white"
            as={Link}
            to="/products"
            _hover={{ textDecoration: 'underline', color: 'gray.300' }}
          >
            <Flex align="center">
              <FiGrid />
              <Box ml={1}>Products</Box>
            </Flex>
          </ChakraLink>
          <ChakraLink
            color="white"
            as={Link}
            to="/blogs/1/"
            _hover={{ textDecoration: 'underline', color: 'gray.300' }}
          >
            <Flex align="center">
              <FiFileText />
              <Box ml={1}>Blog</Box>
            </Flex>
          </ChakraLink>
          <ChakraLink
            color="white"
            as={Link}
            to="/cart"
            _hover={{ textDecoration: 'underline', color: 'gray.300' }}
          >
            <Flex align="center">
              <FiShoppingCart />
              <Box ml={1}>Cart</Box>
            </Flex>
          </ChakraLink>
          <Button
            colorScheme="teal"
            variant="solid"
            size="sm"
            _hover={{ bg: "teal.500" }}
          >
            <ChakraLink color="white" as={Link} to="/login">
              <Flex align="center">
                <Box ml={1}>Log In</Box>
              </Flex>
            </ChakraLink>
          </Button>
          <Select
            placeholder="Select An Option"
            backgroundColor="white"
            color="black"
            size="sm"
            variant="outline"
            _hover={{ borderColor: "teal.300" }}
          >
            <option value="INR">INR</option>
            <option value="USD">USD</option>
            <option value="AUD">AUD</option>
          </Select>
        </Stack>
      </Flex>
    </Box>
  );
}

export default Header;
