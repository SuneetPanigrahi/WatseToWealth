import { Box, Heading, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import React from "react";
import ReactPlayer from "react-player";
import { DecentralizedTech } from "../Reusable/Decentralized_Tech_Sol";

const DecentralizedWaste = () => {
  return (
    <Box>
      <Heading
        size={"md"}
        color={"facebook.500"}
        textAlign={"left"}
        ml={"90px"}
        mt={10}
      >
        3.2 Decentralized Waste Management Technology Park
      </Heading>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        mt={10}
      >
        <ReactPlayer
          url="https://youtu.be/qXO5rjRb9yA"
          controls={true}
          width="50%"
          height="400px"
        />
      </Box>
      <Heading
        size={"md"}
        color={"facebook.500"}
        textAlign={"left"}
        ml={"90px"}
        mt={10}
      >
        3.2.1 Problem statement:
      </Heading>
      <Text
        fontSize={"20px"}
        w={"90%"}
        margin={"auto"}
        mt={5}
        textAlign={"left"}
      >
        Unscientific disposal of mixed waste in open dumpsites generates harmful
        greenhouse emissions and contaminate soil and groundwater causing health
        and environment hazards to the city’s population. Presently, the 469
        colonies across 64 wards in East Delhi generate on an average about 2200
        tons per day of fresh municipal solid waste which is disposed
        unscientifically in five open dumpsites. Diverting this fresh waste from
        entering the landfills will be key to achieve the objective of zero
        landfill.
      </Text>
      <Heading size={"md"} textAlign={"left"} ml={"90px"} mt={10}>
        3.2.2 Technology Solution:
      </Heading>
      <Text
        fontSize={"20px"}
        w={"90%"}
        margin={"auto"}
        mt={5}
        textAlign={"left"}
      >
        Considering the challenges faced by urban and rural Local bodies, the
        Waste to Wealth Mission of the Office of the Principal Scientific
        Adviser to the Government of India, in collaboration with the erstwhile
        East Delhi Municipal Corporation (now MCD) set up a Decentralised Waste
        Management Technology Park in New Jaffrabad, East Delhi for onsite
        processing of fresh Municipal solid waste. Following 4 Technologies are
        deployed at the site:
      </Text>
      <Box>
        <UnorderedList>
          {DecentralizedTech?.map((data, index) => (
            <ListItem key={index}>
              <Heading
                size={"md"}
                color={"red.400"}
                textAlign={"left"}
                ml={"90px"}
                mt={10}
              >
                {data.title}
              </Heading>
              <Text
                fontSize={"20px"}
                w={"90%"}
                margin={"auto"}
                mt={5}
                textAlign={"left"}
              >
                {data.content}
              </Text>
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                mt={5}
              >
                <ReactPlayer
                  url={data.video}
                  controls={true}
                  width="50%"
                  height="400px"
                />
              </Box>
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
    </Box>
  );
};

export default DecentralizedWaste;
