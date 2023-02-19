import { Flex } from "@chakra-ui/react";
import React from "react";
import { Categories, Hero, SectionMagazine, Videos } from "./components";
import SectionVerticals from "./components/Sections/SectionVerticals";

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
      <SectionVerticals />
    </Flex>
  );
};

export default HomeScreen;
