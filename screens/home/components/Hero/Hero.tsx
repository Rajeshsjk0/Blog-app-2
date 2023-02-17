import { Box, Card, Flex, Image, VStack, Icon } from "@chakra-ui/react";
import { ChevronRight16Regular } from "@fluentui/react-icons";
import React from "react";

const Hero = () => {
  return (
    <Box
      width="100%"
      height="auto"
      position="relative"
      // flex="none"
      // order="0"
      // flexGrow="0"
    >
      <Box
        position="absolute"
        width="67.47%"
        height="471px"
        left="32.52%"
        top="0px"
      >
        <Image
          src="https://thumbs.dreamstime.com/b/man-silhouette-stand-alone-beach-watching-romantic-colorful-sunset-73828239.jpg"
          alt="Hero Section"
          width="100%"
          height="100%"
          borderRadius="24px"
        ></Image>
      </Box>
      <VStack
        position="absolute"
        // right="0"
        width="43.31%"
        height="416px"
        left="0px"
        top="20px"
        // alignSelf="flex-start"
        // boxSizing="border-box"
      >
        <Card
          width="100%"
          height="320px"
          borderRadius="24px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          padding="44px 40px"
          gap="24px"
          position="absolute"
          background="rgba(255, 255, 255, 0.7)"
          border="2px solid #FFFFFF"
          boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
          backdropFilter="blur(37px)"
        ></Card>
        <Flex
          display="flex"
          direction="row"
          alignItems="flex-start"
          padding="0px"
          gap="11px"
          position="absolute"
          width="44px"
          height="44px"
          left="40px"
          top="372px"
        >
          <Box width="100%" height="100%" flex="none" order="0" flexGrow="0">
            <Box
              w="100%"
              h="100%"
              borderRadius="50%"
              // border="1px solid #E5E7EB"
              display={"flex"}
              justifyContent="center"
              alignItems={"center"}
            >
              <Box
                width="24px"
                h="24px"
                display={"flex"}
                justifyContent="center"
                alignItems={"center"}
              >
                <Icon
                  as={ChevronRight16Regular}
                  color="#D1D5DB"
                  border="2px solid"
                  left="62.5%"
                  right="-20.83%"
                />
              </Box>
            </Box>
          </Box>
          <Box width="100%" height="100%" flex="none" order="0" flexGrow="0">
            <Box
              w="100%"
              h="100%"
              borderRadius="50%"
              // border="1px solid #E5E7EB"
              display={"flex"}
              justifyContent="center"
              alignItems={"center"}
            >
              <Box
                width="24px"
                h="24px"
                display={"flex"}
                justifyContent="center"
                alignItems={"center"}
              >
                <Icon
                  as={ChevronRight16Regular}
                  color="#D1D5DB"
                  border="2px solid"
                  left="62.5%"
                  right="-20.83%"
                />
              </Box>
            </Box>
          </Box>
        </Flex>
      </VStack>
    </Box>
  );
};

export default Hero;
