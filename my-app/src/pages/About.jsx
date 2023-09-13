import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import ReactPlayer from "react-player";
import Vision from "../components/About/Vision";
import Focus from "../components/About/Focus";
import Highlights from "./Highlights";
import TechnologyDeployments from "./TechnologyDeployments";
import Team from "./Team";

const About = () => {
  return (
    <Box mt={10}>
      {/*Mission */}
      <Heading size={"lg"} color={"green.500"} textAlign={"left"} ml={"90px"}>
        1. About The Mission
      </Heading>
      <Text
        fontSize={"20px"}
        w={"90%"}
        margin={"auto"}
        mt={5}
        textAlign={"left"}
      >
        The Waste to Wealth Mission, spearheaded by the Office of the Principal
        Scientific Advisor to the Government of India (O/o PSA), aims at
        strengthening the waste management system in India by identifying and
        validating innovative technology solutions and models to achieve a zero
        landfill and zero waste nation. In line with its vision, the Mission has
        taken several initiatives in different areas of waste management,
        including technology demonstrations in multiple waste management
        domains, community engagement and development of an online portal which
        will act as a reference for all stakeholders including urban local
        bodies, government departments, technology companies, investors and
        citizens looking for comprehensive information on waste management
        technologies, policies and investment opportunities.
      </Text>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        mt={5}
      >
        <Box
          width="50%"
          border="2px solid black"
          borderRadius={"10px"}
          overflow={"hidden"}
        >
          <ReactPlayer
            url="https://youtu.be/-dFtR0sGqmM"
            controls={true}
            height="400px"
            width="100%"
          />
        </Box>
      </Box>
      <Vision />
      <Focus />
      <Highlights />
      <TechnologyDeployments />
      <Team />
    </Box>
  );
};

export default About;
