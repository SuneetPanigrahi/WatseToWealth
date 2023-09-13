import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Highlights = () => {
  return (
    <Box mt={10}>
      <Heading size={"lg"} color={"green.500"} textAlign={"left"} ml={"90px"}>
        2. Highlights Of Initiatives Under Waste To Wealth Mission
      </Heading>
      <Box
        w={"90%"}
        margin={"auto"}
        display={"grid"}
        alignItems={"center"}
        justifyContent={"center"}
        gridTemplateColumns={{
          sm: "repeat(1 ,1fr)",
          md: "repeat(2 ,1fr)",
          lg: "repeat(3 ,1fr)",
        }}
        gap={10}
        mt={10}
        p={10}
        borderRadius={10}
      >
        <Box
          boxShadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px"
          p={10}
          borderRadius={"10px"}
          border="2px solid orange"
          h={"150px"}
        >
          <Text fontSize={{ md: "xl", lg: "2xl" }}>
            <strong>800+</strong> technologies evaluated
          </Text>
        </Box>
        <Box
          boxShadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px"
          p={10}
          borderRadius={"10px"}
          border="2px solid green"
          h={"150px"}
        >
          <Text fontSize={{ md: "xl", lg: "2xl" }}>
            <strong>8</strong> demonstrated on ground
          </Text>
        </Box>
        <Box
          boxShadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px"
          p={10}
          borderRadius={"10px"}
          border="2px solid orange"
          h={"150px"}
        >
          <Text fontSize={{ md: "xl", lg: "2xl" }}>
            <strong>2</strong> open dumpsites converted into waste processing
            sites
          </Text>
        </Box>

        <Box
          boxShadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px"
          p={10}
          borderRadius={"10px"}
          border="2px solid green"
          h={"150px"}
        >
          <Text fontSize={{ md: "xl", lg: "2xl" }}>
            <strong>3000+ tons of waste</strong>
            removed from two open drains
          </Text>
        </Box>
        <Box
          boxShadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px"
          p={10}
          borderRadius={"10px"}
          border="2px solid orange"
          h={"150px"}
        >
          <Text fontSize={{ md: "xl", lg: "2xl" }}>
            <strong> 150+ </strong>
            technologies displayed on portal
          </Text>
        </Box>
        <Box
          boxShadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px"
          p={10}
          borderRadius={"10px"}
          border="2px solid green"
          h={"150px"}
        >
          <Text fontSize={{ md: "xl", lg: "2xl" }}>
            <strong>3000+ tons</strong>
            of waste removed from two open drains
          </Text>
        </Box>

        <Box>
          <Text fontSize={{ md: "xl", lg: "2xl" }}>
            <strong>64+</strong>
            policies & guidelines on portal
          </Text>
        </Box>

        <Box>
          <Text fontSize={{ md: "xl", lg: "2xl" }}>
            <strong>3.1 lakh+</strong>
            citizens sensitized in waste management
          </Text>
        </Box>

        <Box>
          <Text fontSize={"2xl"}>
            <strong>450 SSF</strong>
            fellows engaged across the country
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Highlights;
