import { Button, Container, Flex, HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BiAddToQueue } from "react-icons/bi";
import { BsSun, BsMoon } from "react-icons/bs";
import { useColorMode} from "@chakra-ui/react";

const Navbar = () => {
    const {colorMode, toggleColorMode} = useColorMode()

  return (
    <Container maxW={"1140px"} px={"4"}>
      <Flex
        h={"16"}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
        <Text
          bgGradient="linear(to-l,rgb(40, 202, 202),rgb(111, 0, 255))"
          bgClip="text"
          textAlign={"center"}
          textTransform={"uppercase"}
          fontSize={{ base: "22", sm: "28" }}
          fontWeight="bold"
        >
          <Link to={"/"}>Product Store</Link>
        </Text>
        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/create"}>
            <Button>
              <BiAddToQueue fontSize={20} color="blue" />
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ?  <BsMoon/> : <BsSun/>}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
