import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import ReactPlayer from "react-player";
import TechnologyDep1 from "../Assets/Images/TechnologyDep1.png";
import TechnologyDep2 from "../Assets/Images/TechnologyDep2.png";
import Impact1 from "../Assets/Images/Impact1.png";
import Impact2 from "../Assets/Images/Impact2.png";
import Impact3 from "../Assets/Images/Impact3.png";
import Impact4 from "../Assets/Images/Impact4.png";
import DecentralizedWaste from "../components/DecentralizedWaste";
import { Impact } from "../Reusable/Impact";
const TechnologyDeployments = () => {
  return (
    <Box mt={10}>
      <Heading size={"lg"} color={"green.500"} textAlign={"left"} ml={"90px"}>
        3. Technology Deployments
      </Heading>
      <Heading
        size={"md"}
        color={"facebook.500"}
        textAlign={"left"}
        ml={"90px"}
        mt={10}
      >
        3.1 Cleaning Barapullah Drain
      </Heading>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        mt={10}
      >
        <ReactPlayer
          url="https://youtu.be/4TIl-ysyhe0"
          controls={true}
          width="50%"
          height="400px"
        />
      </Box>
      {/* 3.1//// */}
      <Box mt={5}>
        <Heading size={"md"} textAlign={"left"} ml={"90px"} mt={10}>
          3.1.1 Problem Statement:
        </Heading>
      </Box>
      <Text
        fontSize={"20px"}
        w={"90%"}
        margin={"auto"}
        mt={5}
        textAlign={"left"}
      >
        Cleaning of open drains in congested areas has always been a challenge
        in India because there is no or limited access for traditional equipment
        like Joseph Cyril Bamford (JCB) excavator, Poclain, etc. and human
        settlements on both sides of the drain with narrow passages make it
        impossible to dispose of the collected waste. The Barapullah drain in
        South Delhi is one such drain that is blocked at various locations with
        sewage, trash, and debris, resulting in foul odor, vector-borne
        diseases, unhygienic conditions, and flooding in the monsoons.
      </Text>
      <Box mt={5}>
        <Heading size={"md"} textAlign={"left"} ml={"90px"} mt={10}>
          3.1.2 Technology Solution:
        </Heading>
      </Box>
      <Text
        fontSize={"20px"}
        w={"90%"}
        margin={"auto"}
        mt={5}
        textAlign={"left"}
      >
        Cleaning of open drains in congested areas has always been a challenge
        in India because there is no or limited access for traditional equipment
        like Joseph Cyril Bamford (JCB) excavator, Poclain, etc. and human
        settlements on both sides of the drain with narrow passages make it
        impossible to dispose of the collected waste. The Barapullah drain in
        South Delhi is one such drain that is blocked at various locations with
        sewage, trash, and debris, resulting in foul odor, vector-borne
        diseases, unhygienic conditions, and flooding in the monsoons.
      </Text>
      <Box
        display={"flex"}
        mt={5}
        alignItems={"center"}
        justifyContent={"center"}
        gap={5}
      >
        <Image src={TechnologyDep1} width="25%"></Image>
        <Image src={TechnologyDep2} width="25%"></Image>
      </Box>
      <Text
        fontSize={"20px"}
        w={"90%"}
        margin={"auto"}
        mt={5}
        textAlign={"left"}
      >
        <i>
          Prof. Ajay Kumar Sood, the Principal Scientific Adviser (PSA) to the
          Government of India (GoI) visited the stretch of Barapullah drain near
          Bhogal Market in South Delhi to witness the indigenously designed
          drain-cleaning excavator ‘Drainmaster DM-80’ in operation.
        </i>
      </Text>
      <Text
        fontSize={"20px"}
        w={"90%"}
        margin={"auto"}
        mt={5}
        textAlign={"left"}
      >
        It is a self-propelled, transportable, and amphibious machine with
        multipurpose attachments capable of removing 50-100 m3/day of waste and
        overcoming the limits of cleaning urban drains (with widths larger than
        7 m) making it an important technology for use in urban areas in India.
      </Text>
      {/* Impact */}
      <Impact
        image1={Impact2}
        image2={Impact1}
        content={
          "The DM-80 unit was in operation for a duration of one year from 3rdJanuary 2022 to 2nd January 2023. During this period, Cleantec Infraoperated the unit to clean and desilt approximately a 3 km stretch ofthe Barapullah drain starting from Sundial Park to Jangpura, removingapproximately 3000 tons of waste in the process. The MunicipalCorporation of Delhi provided supporting equipment for the disposal ofthe waste removed from the drain."
        }
        about={"Decentralized Waste Management Technology Park"}
      />
      {/* DecentralizedWaste */}
      <DecentralizedWaste />
      <Impact
        image1={Impact3}
        image2={Impact4}
        content={
          "At the Technology Park, 10 TPD Municipal waste is onsite segregated and treated,resulting in volume reduction and conversion into 1 TPD compostable fractions, 2 TPDcombustibles fractions, 1.5 TPD recyclables. The facility also has a waste compactionunit for reducing the volume for handling & transportation. The combustible waste willthen be processed on-site, leaving only 5-10% of inerts reaching landfills. In additionto incoming MSW, floating waste from the adjacent 52-cusec drain is also collected andprocessed on-site.This will also ensure SWM compliance of Urban Local Bodies under Solid WasteManagement Rules 2016 and for reducing the load on landfill sites, without theprocurement of new land for setup and disposal.Decentralized processing of waste is a step towards “Zero Landfill” with the addedadvantage of reduction in the transportation of the waste."
        }
      />
    </Box>
  );
};

export default TechnologyDeployments;
