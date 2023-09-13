import { Box, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { TeamMembers } from "../Reusable/TeamMembers";
import TeamMember1 from "../Assets/Images/TeamMember1.jpeg";

const Team = () => {
  return (
    <>
      <Heading
        size={"lg"}
        color={"green.500"}
        textAlign={"left"}
        ml={"90px"}
        mt={"10"}
      >
        Teams
      </Heading>

      <Grid
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          sm: "repeat(1,1fr)",
          md: "repeat(3,1fr)",
          lg: "repeat(4,1fr)",
        }}
        justifyContent={"center"}
        alignItems={"center"}
        w={"90%"}
        margin={"auto"}
        gap={10}
        mt={10}
      >
        {TeamMembers?.map((member, index) => {
          return (
            <Flex
              direction={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={5}
              key={index}
              boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
              borderRadius={"10px"}
              p={10}
            >
              <Image
                src={member.image}
                w={"200px"}
                h={"200px"}
                borderRadius={"50%"}
                borderColor={"black"}
                border={"1px solid black"}
              ></Image>
              <Box>
                <Text as={"b"}>{member.name}</Text>
                <Text>{member.Desig}</Text>
              </Box>
            </Flex>
          );
        })}
      </Grid>
    </>
  );
};

export default Team;
