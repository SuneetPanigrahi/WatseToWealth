import { Flex, Heading, Image, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import Logo from "../Assets/Images/Logo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();
  return (
    <Flex
      px={10}
      py={5}
      alignItems={"center"}
      justifyContent={"space-between"}
      bgColor={"orange.400"}
      position={"sticky"}
      top={0}
      color={"white"}
    >
      <Image src={Logo} />
      <Spacer />
      <Flex alignItems={"center"} justifyContent={"center"} gap={10} cursor={"pointer"}>
        <Text as={"b"} fontSize={"lg"} onClick={() => navigate("/")}>
          About
        </Text>
        <Text as={"b"} fontSize={"lg"} onClick={() => navigate("")}>
          Technology
        </Text>
        <Text as={"b"} fontSize={"lg"} onClick={() => navigate("")}>
          Policies
        </Text>
        <Text as={"b"} fontSize={"lg"} onClick={() => navigate("")}>
          Team
        </Text>
        <Text as={"b"} fontSize={"lg"} onClick={() => navigate("")}>
          Contacts
        </Text>
      </Flex>
      <Spacer />
    </Flex>
  );
};

export default Navbar;
