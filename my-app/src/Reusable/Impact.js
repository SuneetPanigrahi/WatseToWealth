import { Box, Heading, Image, Text } from "@chakra-ui/react";

export function Impact({ image1, image2, content, about }) {
  return (
    <>
      <Box mt={5}>
        <Heading   size={"md"}
      
        textAlign={"left"}
        ml={"90px"}
        mt={10}>3.1.3 Impact:</Heading>
      </Box>
      <Box
        display={"flex"}
        mt={5}
        alignItems={"center"}
        justifyContent={"center"}
        gap={5}
      >
        <Box>
          <Image src={image1} width="100%"></Image>
          <Text as={"b"}>Before</Text>
        </Box>
        <Box>
          <Image src={image2} width="100%"></Image>
          <Text as={"b"}>After</Text>
        </Box>
      </Box>
      <Text w={"50%"} margin={"auto"} mt={5} textAlign={"center"}>
        <i>{about}</i>
      </Text>
      <Text   fontSize={"20px"}
        w={"90%"}
        margin={"auto"}
        mt={5}
        textAlign={"left"}>
        {content}
      </Text>
    </>
  );
}
