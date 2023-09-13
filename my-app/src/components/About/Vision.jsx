import { Box, Heading, ListIcon, ListItem, List } from "@chakra-ui/react";
import React from "react";
import { CheckCircleIcon } from "@chakra-ui/icons";
const Vision = () => {
  return (
    <Box mt={10}>
      <Heading size={"lg"} color={"green.500"} textAlign={"left"} ml={"90px"}>
        1.1 Vision
      </Heading>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"left"}
        mt={5}
        ml={"90px"}
      >
        <List spacing={3} textAlign={"left"}>
          <ListItem fontSize={"20px"}>
            <ListIcon as={CheckCircleIcon} color="orange.500" />
            To identify and validate innovative technologies that can help
            create a cleaner and orangeer environment in a sustainable way.
          </ListItem>
          <ListItem fontSize={"20px"}>
            <ListIcon as={CheckCircleIcon} color="orange.500" />
            To boost and augment the Swachh Bharat Mission and Smart Cities
            Project by leveraging science, technology, and innovation
          </ListItem>
          <ListItem fontSize={"20px"}>
            <ListIcon as={CheckCircleIcon} color="orange.500" />
            To create ready reckoners for waste management so best practices can
            be shared
          </ListItem>
          <ListItem fontSize={"20px"}>
            <ListIcon as={CheckCircleIcon} color="orange.500" />
            To drive community initiatives in the area fo waste management to
            drive behavioral changet
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Vision;
