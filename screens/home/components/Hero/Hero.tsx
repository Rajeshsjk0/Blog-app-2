import { Box, Card, Flex, Image, VStack, Icon } from "@chakra-ui/react";
import { ChevronRight16Regular } from "@fluentui/react-icons";
import React from "react";

const Hero = () => {
  return (
    <Flex direction={"row"} w="100%">
      <Flex w={"100%"}>
        <Box width={"32%"} position="relative">
          <Card
            width="120%"
            height="320px"
            borderRadius="24px"
            position="absolute"
            background="rgba(255, 255, 255, 0.7)"
            border="2px solid #FFFFFF"
            boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
            backdropFilter="blur(37px)"
            left={"0"}
            top="28px"
          ></Card>
        </Box>
        <Box width={"68%"} h="470px">
          <Image
            src="https://thumbs.dreamstime.com/b/man-silhouette-stand-alone-beach-watching-romantic-colorful-sunset-73828239.jpg"
            alt="Hero Section"
            width="100%"
            height="100%"
            borderRadius="24px"
          />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Hero;
