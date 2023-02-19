import { calc, Flex, VStack } from "@chakra-ui/react";
import React from "react";
import { Categories, Hero, SectionMagazine, Videos } from "./components";

const HomeScreen = () => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      padding={0}
      w={"calc(100% - 11.119%)"}
      marginLeft="5.56%"
      marginRight="5.559%"
      // backgroundColor="blue"
    >
      <Hero />
      <Categories />
      <SectionMagazine />
      <Videos />
    </Flex>
  );
};

export default HomeScreen;
