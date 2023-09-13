import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Focus = () => {
  return (
    <Box mt={10}>
      <Heading size={"lg"} color={"green.500"} textAlign={"left"} ml={"90px"}>
        1.1 Focus
      </Heading>
      <Box margin={"auto"} textAlign={"center"}>
        <Text
          fontSize={"20px"}
          w={"90%"}
          margin={"auto"}
          mt={5}
          textAlign={"left"}
        >
          The focus of our mission is to provide scientific and technological
          inputs towards conservation, sustainable use, and restoration of our
          land, air, and water resources. The technology solutions identified
          will support Urban Local Bodies (ULBs) to create circular economic
          models that are financially viable for waste management & streamline
          waste handling in the country.
        </Text>
      </Box>
    </Box>
  );
};

export default Focus;
