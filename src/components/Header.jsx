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
import { FiShoppingCart, FiGrid, FiFileText } from "react-icons/fi";
import { logout, userstatus } from "../store/slicers/authSlicer";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrencyData, selectCurrency, setcurrentcurrency } from "../store/slicers/exchangeSlice";

function Header() {
	const user = useSelector(userstatus);
	const dispatch = useDispatch();
	const currencydata = useSelector(selectCurrency);
	const handlecurrencychange = (e) => {
		dispatch(setcurrentcurrency(e.target.value));
	}
	return (
		<Box bg="black" color="white" height="50px" boxShadow="md">
			<Flex py={4} align="center" justify="space-between" className="container">
				<Heading as="h1" size="lg" fontSize={20}>
					<ChakraLink color="white" as={Link} to="/">
						Ecommerce
					</ChakraLink>
				</Heading>
				<Stack direction="row" spacing={17} align="center">
					<ChakraLink
						color="white"
						as={Link}
						to="/products"
						_hover={{ textDecoration: 'underline', color: 'gray.300' }}
					>
						<Flex align="center" fontSize={20}>
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
						<Flex align="center" fontSize={20}>
							<FiFileText />
							<Box ml={1}>Blog</Box>
						</Flex>
					</ChakraLink>
					{user && <ChakraLink
						color="white"
						as={Link}
						to="/cart"
						_hover={{ textDecoration: 'underline', color: 'gray.300' }}
					>
						<Flex align="center" fontSize={20}>
							<FiShoppingCart />
							<Box ml={1}>Cart</Box>
						</Flex>
					</ChakraLink>}

					<Button
						colorScheme="teal"
						variant="solid"
						size="sm"
						_hover={{ bg: "teal.500" }}
					>
						{!user && <ChakraLink color="white" as={Link} to="/login">
							<Flex align="center" fontSize={20}>
								<Box ml={1}>Log In</Box>
							</Flex>
						</ChakraLink>}
						{user &&
							<ChakraLink color="white" as={Link} to="/">
								<Flex align="center" fontSize={20}>
									<Button onClick={() => dispatch(logout())} ml={1}>Log Out</Button>
								</Flex>
							</ChakraLink>}
					</Button>
					<Select
						onChange={handlecurrencychange}
						backgroundColor="transparent"
						color="white"
						size="10px"
						variant="outline"
						_hover={{ borderColor: "teal.300" }}
						width="auto" 
						fontSize={18}
						defaultValue="USD"
						fontStyle='bold'
						icon='none'
					>
						<option value="USD">USD</option>
						<option value="INR">INR</option>
						<option value="AUD">AUD</option>
					</Select>

				</Stack>
			</Flex>
		</Box>
	);
}

export default Header;
