import { calc, Flex, VStack } from "@chakra-ui/react";
import React from "react";
import { Hero } from "./components";

const HomeScreen = () => {
  return (
    <Flex
      display="flex"
      flex={1}
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      padding={0}
      gap={128}
      // position="absolute"
      w={"calc(100% - 11.119%)"}
      height="auto"
      // minH={"100vh"}
      // left="81px"
      // right="80px"
      marginLeft="5.56%"
      marginRight="5.559%"
      margin-top="129px"
      backgroundColor="blue"
    >
      <Hero />
    </Flex>
  );
};

export default HomeScreen;
