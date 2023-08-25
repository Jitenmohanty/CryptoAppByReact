import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HStack
      p={"4"}
      shadow={"base"}
      bgColor={"gray.500"}
      fontSize={"6xl"}
      justifyContent={["space-evenly", "flex-start"]}
    >
      <Button
      css={{
        '&::hover': {
          backgroundColor: 'red',
        },
      }}
        color={"whiteAlpha.700"}
        fontSize={"1.5rem"}
        colorScheme="whiteAlpha.700"
        p={["2", "auto"]}
        _hover={{
          backgroundColor: "purple.600",
          color: "white",
        }}
      >
        <Link to={"/"}>Home</Link>
      </Button>
      <Button
        color={"whiteAlpha.700"}
        fontSize={"1.5rem"}
        p={["2", "auto"]}
        colorScheme="whiteAlpha.700"
        _hover={{
          backgroundColor: "purple.600",
          color: "white",
        }}
      >
        <Link to={"/exchanges"}>Exchanges</Link>
      </Button>
      <Button
        color={"whiteAlpha.700"}
        fontSize={"1.5rem"}
        p={["2", "auto"]}
        colorScheme="whiteAlpha.700"
        _hover={{
          backgroundColor: "purple.600",
          color: "white",
        }}
      >
        <Link to={"/coins"}>Coins</Link>
      </Button>
    </HStack>
  );
};

export default Header;
